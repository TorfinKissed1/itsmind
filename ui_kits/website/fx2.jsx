/* lstmind UI kit — GSAP brain (no-build, runs under @babel/standalone).
   Lenis smooth scroll + ScrollTrigger-driven: code-scramble typewriter on
   headings, scroll parallax (animates --sy, composes with mouse --px/--py),
   and a hero scroll-scrub. All gated on prefers-reduced-motion.
   gsap / ScrollTrigger / Lenis are loaded as globals in index.html. */
const { useEffect: fx2Effect } = React;

/* code-ish glyphs the text "decrypts" through */
const SCR = "01<>/{}[]()=+*#%&$;:!|\\АБ01ВГД01йЯ".split("");

/* Build a scramble controller for any element — preserves inner markup
   (<em>, spans) by animating each descendant text node in document order. */
function makeScramble(el) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  const items = []; let n;
  while ((n = walker.nextNode())) {
    if (n.nodeValue && n.nodeValue.trim() !== "") items.push({ node: n, final: n.nodeValue });
  }
  const total = items.reduce((a, b) => a + b.final.length, 0);
  if (!total) return { play() {} };
  items.forEach((it) => { it.node.nodeValue = ""; });
  el.classList.add("is-typing");
  let played = false;

  function render(p) {
    const revealed = Math.floor(p * total);
    let idx = 0;
    for (const it of items) {
      const len = it.final.length; let s = "";
      for (let i = 0; i < len; i++) {
        const gi = idx + i, ch = it.final[i];
        if (gi < revealed) s += ch;
        else if (ch === " " || ch === " ") s += ch;
        else if (gi < revealed + 6) s += SCR[(Math.random() * SCR.length) | 0];
      }
      it.node.nodeValue = s; idx += len;
    }
  }
  return {
    play() {
      if (played) return; played = true;
      const dur = Math.min(2.4, Math.max(0.7, total * 0.026));
      const o = { p: 0 };
      gsap.to(o, {
        p: 1, duration: dur, ease: "none",
        onUpdate: () => render(o.p),
        onComplete: () => { items.forEach((it) => { it.node.nodeValue = it.final; }); el.classList.remove("is-typing"); },
      });
    },
  };
}

function GsapBrain() {
  fx2Effect(() => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    if (typeof SplitText !== "undefined") { try { gsap.registerPlugin(SplitText); } catch (e) {} }
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const killers = [];
    let lenis = null;

    /* ---- smooth scroll (Lenis) wired into GSAP ticker ---- */
    if (!reduce && typeof Lenis !== "undefined") {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 0.9 });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0);
      document.documentElement.style.scrollBehavior = "auto";
      const onClick = (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute("href");
        if (!id || id.length < 2) return;
        const t = document.querySelector(id);
        if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -72 }); }
      };
      document.addEventListener("click", onClick);
      killers.push(() => { document.removeEventListener("click", onClick); gsap.ticker.remove(tick); lenis.destroy(); });
    }

    /* ---- wait for the babel-rendered DOM, then wire effects ---- */
    const start = () => {
      /* premium line reveal — lines rise from behind a mask with a soft blur-off */
      if (!reduce) {
        const EASE = "expo.out";
        const fromLines = (lines, opts) => gsap.from(lines, Object.assign({
          yPercent: 120, opacity: 0, filter: "blur(12px)",
          duration: 1.0, ease: EASE, stagger: 0.09, clearProps: "transform,opacity,filter",
        }, opts || {}));

        /* hero title: its spans ARE the lines — wrap each in a clip-box so they're masked,
           then unwrap on complete so the accent glow isn't clipped at rest */
        const heroTitle = document.querySelector(".hero__title");
        if (heroTitle) {
          const lines = Array.prototype.slice.call(heroTitle.children);
          lines.forEach((ln) => {
            const box = document.createElement("span");
            box.className = "reveal-clip";
            ln.parentNode.insertBefore(box, ln);
            box.appendChild(ln);
          });
          const tw = fromLines(lines, {
            delay: 0.15,
            onComplete: () => lines.forEach((ln) => {
              const box = ln.parentNode;
              if (box && box.classList && box.classList.contains("reveal-clip")) {
                box.parentNode.insertBefore(ln, box); box.remove();
              }
            }),
          });
          killers.push(() => tw.kill());
        }

        /* section + footer headings: SplitText into masked lines, revealed on scroll */
        if (typeof SplitText !== "undefined") {
          document.querySelectorAll(".lst-sh__title, .footer__mega, [data-scramble]").forEach((el) => {
            let split;
            try { split = new SplitText(el, { type: "lines", mask: "lines" }); } catch (e) { return; }
            const tw = fromLines(split.lines, {
              scrollTrigger: { trigger: el, start: "top 86%", once: true },
              onComplete: () => { try { split.revert(); } catch (e) {} },
            });
            killers.push(() => { if (tw.scrollTrigger) tw.scrollTrigger.kill(); tw.kill(); try { split.revert(); } catch (e) {} });
          });
        } else {
          document.querySelectorAll(".lst-sh__title, .footer__mega").forEach((el) => {
            const tw = gsap.from(el, {
              y: 32, opacity: 0, filter: "blur(10px)", duration: 0.85, ease: EASE,
              clearProps: "transform,opacity,filter",
              scrollTrigger: { trigger: el, start: "top 86%", once: true },
            });
            killers.push(() => { if (tw.scrollTrigger) tw.scrollTrigger.kill(); tw.kill(); });
          });
        }
      }

      /* scroll parallax — animates --sy (composes with mouse --px/--py) */
      if (!reduce) {
        document.querySelectorAll("[data-parallax]").forEach((el) => {
          const sp = parseFloat(el.getAttribute("data-parallax")) || 60;
          const host = el.closest(".hero, section") || el;
          const tw = gsap.fromTo(el, { "--sy": -sp * 0.4 }, {
            "--sy": sp, ease: "none",
            scrollTrigger: { trigger: host, start: "top bottom", end: "bottom top", scrub: 0.6 },
          });
          killers.push(() => { if (tw.scrollTrigger) tw.scrollTrigger.kill(); tw.kill(); });
        });

        /* hero content drifts up + dims as you scroll past */
        const grid = document.querySelector(".hero__grid");
        if (grid) {
          const tw = gsap.to(grid, {
            yPercent: -10, opacity: 0.25, ease: "none",
            scrollTrigger: { trigger: ".hero", start: "25% top", end: "bottom top", scrub: 0.4 },
          });
          killers.push(() => { if (tw.scrollTrigger) tw.scrollTrigger.kill(); tw.kill(); });
        }

        /* the ghost echo slides opposite for depth */
        const echo = document.querySelector(".hero__echo");
        if (echo) {
          const tw = gsap.to(echo, {
            yPercent: 18, ease: "none",
            scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.5 },
          });
          killers.push(() => { if (tw.scrollTrigger) tw.scrollTrigger.kill(); tw.kill(); });
        }

        /* number count-up on stats / rating / proof */
        document.querySelectorAll(".lst-stat__val, .faq-rating b, .contact__proof b").forEach((el) => {
          const node = el.firstChild;
          if (!node || node.nodeType !== 3) return;
          const raw = node.nodeValue;
          const m = raw.match(/^(\d+(?:[.,]\d+)?)([\s\S]*)$/);
          if (!m) return;
          const numStr = m[1].replace(",", ".");
          const target = parseFloat(numStr);
          if (!isFinite(target)) return;
          const dec = (numStr.split(".")[1] || "").length;
          const suffix = m[2] || "";
          const o = { v: 0 };
          const st = ScrollTrigger.create({
            trigger: el, start: "top 92%", once: true,
            onEnter: () => {
              node.nodeValue = "0" + suffix;
              gsap.to(o, {
                v: target, duration: 1.3, ease: "power2.out",
                onUpdate: () => { node.nodeValue = (dec ? o.v.toFixed(dec) : Math.round(o.v).toLocaleString("ru-RU")) + suffix; },
                onComplete: () => { node.nodeValue = raw; },
              });
            },
          });
          killers.push(() => st.kill());
        });

        /* marquee leans with scroll velocity */
        if (lenis) {
          const tracks = Array.prototype.slice.call(document.querySelectorAll(".lst-marquee__track"));
          if (tracks.length) {
            const setters = tracks.map((t) => gsap.quickTo(t, "skewX", { duration: 0.5, ease: "power3" }));
            const onScroll = (e) => {
              const v = (e && e.velocity) || 0;
              const s = Math.max(-9, Math.min(9, v * 0.05));
              setters.forEach((fn) => fn(s));
            };
            lenis.on("scroll", onScroll);
            killers.push(() => { if (lenis.off) lenis.off("scroll", onScroll); });
          }
        }

        /* SplitText line-by-line reveal of body leads (matches heading reveal) */
        if (typeof SplitText !== "undefined") {
          document.querySelectorAll(".hero__lead, .lst-sh__lead").forEach((el) => {
            let split;
            try { split = new SplitText(el, { type: "lines", mask: "lines" }); } catch (e) { return; }
            const tw = gsap.from(split.lines, {
              yPercent: 110, opacity: 0, filter: "blur(8px)", duration: 0.8, ease: "expo.out", stagger: 0.08,
              clearProps: "transform,opacity,filter",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
              onComplete: () => { try { split.revert(); } catch (e) {} },
            });
            killers.push(() => { if (tw.scrollTrigger) tw.scrollTrigger.kill(); tw.kill(); try { split.revert(); } catch (e) {} });
          });
        }

        /* horizontal scroll for Works (desktop only, matchMedia ≥768) */
        const wtrack = document.querySelector(".works-track");
        const wrail = document.querySelector(".works-rail");
        if (wtrack && wrail && typeof gsap.matchMedia === "function") {
          const mm = gsap.matchMedia();
          mm.add("(min-width: 768px)", () => {
            const dist = () => Math.max(0, wtrack.scrollWidth - window.innerWidth + 64);
            const tw = gsap.to(wtrack, {
              x: () => -dist(), ease: "none",
              scrollTrigger: {
                trigger: wrail, start: "top 12%", end: () => "+=" + dist(),
                pin: true, pinSpacing: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true,
              },
            });
            return () => { if (tw.scrollTrigger) tw.scrollTrigger.kill(); tw.kill(); };
          });
          killers.push(() => mm.revert());
        }
      }

      ScrollTrigger.refresh();
    };

    /* wait for webfonts so SplitText measures lines on the real font (no reflow) */
    let id, started = false;
    const begin = () => { if (started) return; started = true; id = setTimeout(start, 120); };
    if (document.fonts && document.fonts.ready && typeof document.fonts.ready.then === "function") {
      document.fonts.ready.then(begin);
      setTimeout(begin, 1500); // safety net if fonts.ready never resolves
    } else {
      begin();
    }
    killers.push(() => clearTimeout(id));

    return () => { killers.forEach((f) => { try { f(); } catch (e) {} }); ScrollTrigger.getAll().forEach((s) => s.kill()); };
  }, []);
  return null;
}

Object.assign(window, { GsapBrain, makeScramble });
