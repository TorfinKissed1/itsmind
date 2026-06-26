/* lstmind UI kit — FX layer (no-build, runs under @babel/standalone).
   Pure vanilla-canvas / DOM effects adapted from reactbits.dev concepts
   (Particles, Letter Glitch, Splash Cursor) to fit this CDN setup.
   Everything is gated on prefers-reduced-motion and pointer:coarse.
   Aliased React hooks (fx*) so we never clash with parts1's destructure. */
const { useEffect: fxEffect, useRef: fxRef } = React;

/* one-shot <style> injector */
function fxUseStyle(id, css) {
  fxEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const FX_CSS = `
/* ---- falling embers canvas (global) ---- */
.fx-embers{ position:fixed; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; }

/* ---- cursor glow (desktop only) ---- */
.fx-cursor{
  position:fixed; top:0; left:0; width:520px; height:520px; z-index:2; pointer-events:none;
  border-radius:50%; opacity:0; transition:opacity .5s ease; will-change:transform;
  background:radial-gradient(circle, rgba(181,9,18,.22), rgba(117,2,15,.10) 38%, transparent 68%);
  mix-blend-mode:screen;
}

/* ---- mouse parallax (--px/--py from pointer) + scroll parallax (--sy from GSAP) ---- */
.fx-parallax{ position:absolute; inset:0; }
.fx-pl{ will-change:transform;
  transform:translate3d(calc(var(--px,0) * var(--d,0) * 1px),
                        calc(var(--py,0) * var(--d,0) * 1px + var(--sy,0) * 1px), 0)
            rotate(calc(var(--px,0) * var(--r,0) * 1deg)); }

/* ---- glowing ring + V motif ---- */
.fx-ringv{ display:block; color:var(--accent); }
.fx-ringv .rv-ring{ filter:drop-shadow(0 0 16px var(--accent-glow)) drop-shadow(0 0 4px var(--accent-glow)); }
.fx-ringv .rv-v{ filter:drop-shadow(0 0 10px var(--accent-glow)); }
@keyframes fx-spin-slow{ to{ transform:rotate(360deg); } }
@media (prefers-reduced-motion: no-preference){
  .fx-ringv .rv-rot{ transform-origin:50% 50%; animation:fx-spin-slow 48s linear infinite; }
}

/* ---- single-string RGB-split glitch ---- */
.fx-glitch{ position:relative; display:inline-block; }
.fx-glitch::before,.fx-glitch::after{
  content:attr(data-text); position:absolute; inset:0; pointer-events:none;
  clip-path:inset(0 0 0 0); opacity:.9;
}
@media (prefers-reduced-motion: no-preference){
  .fx-glitch:hover::before,.fx-glitch.is-glitch::before{
    left:2px; text-shadow:-1.5px 0 var(--accent-bright); animation:fx-gl-a .5s steps(2) 1; color:transparent;
    -webkit-text-fill-color:transparent; }
  .fx-glitch:hover::after,.fx-glitch.is-glitch::after{
    left:-2px; text-shadow:1.5px 0 #18a9c8; animation:fx-gl-b .5s steps(2) 1; color:transparent;
    -webkit-text-fill-color:transparent; }
}
@keyframes fx-gl-a{ 0%{clip-path:inset(0 0 72% 0)} 30%{clip-path:inset(40% 0 30% 0)} 60%{clip-path:inset(78% 0 4% 0)} 100%{clip-path:inset(0 0 92% 0)} }
@keyframes fx-gl-b{ 0%{clip-path:inset(82% 0 2% 0)} 35%{clip-path:inset(20% 0 56% 0)} 70%{clip-path:inset(54% 0 22% 0)} 100%{clip-path:inset(8% 0 80% 0)} }

/* ---- scroll hint ---- */
.fx-scroll{ display:inline-flex; flex-direction:column; align-items:center; gap:10px;
  font-family:var(--font-mono); font-size:.62rem; letter-spacing:.32em; text-transform:uppercase;
  color:var(--text-muted); }
.fx-scroll i{ width:1px; height:46px; background:linear-gradient(var(--accent), transparent); position:relative; overflow:hidden; }
@media (prefers-reduced-motion: no-preference){
  .fx-scroll i::after{ content:""; position:absolute; left:0; top:-50%; width:1px; height:50%;
    background:var(--accent-bright); box-shadow:0 0 8px var(--accent-glow); animation:fx-scroll 2.1s var(--ease-in-out) infinite; }
}
@keyframes fx-scroll{ 0%{transform:translateY(-20px);opacity:0} 30%{opacity:1} 100%{transform:translateY(110px);opacity:0} }
`;

/* ===== global falling cinders / ink-drops ===== */
function EmberCanvas() {
  const ref = fxRef(null);
  fxEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = 1, parts = [], raf = 0, last = 0;

    const palette = [
      [255, 226, 222], // white spark
      [232, 60, 64],   // bright blood
      [150, 16, 22],   // deep oxblood
    ];
    const count = () => Math.min(140, Math.round((window.innerWidth * window.innerHeight) / 15000));

    function resize() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }
    function spawn(top) {
      const c = palette[(Math.random() * palette.length) | 0];
      return {
        x: Math.random() * w,
        y: top ? -10 * dpr : Math.random() * h,
        vy: (0.12 + Math.random() * 0.5) * dpr,
        vx: (-0.12 + Math.random() * 0.24) * dpr,
        r: (0.4 + Math.random() * 1.7) * dpr,
        base: 0.12 + Math.random() * 0.5,
        col: c,
        ph: Math.random() * Math.PI * 2,
        sw: 0.4 + Math.random() * 1.1, // sway speed
      };
    }
    function init() { parts = Array.from({ length: count() }, () => spawn(false)); }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const p of parts) {
        p.y += p.vy;
        p.x += p.vx + Math.sin((t / 1000) * p.sw + p.ph) * 0.25 * dpr;
        if (p.y - p.r > h) { Object.assign(p, spawn(true)); continue; }
        const tw = p.base * (0.55 + 0.45 * Math.sin((t / 700) * p.sw + p.ph));
        const [r, g, b] = p.col;
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + tw.toFixed(3) + ")";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }

    function loop(t) {
      if (t - last > 1000 / 40) { draw(t); last = t; }
      raf = requestAnimationFrame(loop);
    }

    resize(); init();
    if (reduce) { draw(0); return () => {}; }       // static faint field, no animation
    raf = requestAnimationFrame(loop);

    const onResize = () => { resize(); init(); };
    const onVis = () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
      else if (!raf) { raf = requestAnimationFrame(loop); }
    };
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);
  return <canvas ref={ref} className="fx-embers" aria-hidden="true" />;
}

/* ===== soft red light following the cursor ===== */
function CursorGlow() {
  const ref = fxRef(null);
  fxEffect(() => {
    const el = ref.current; if (!el) return;
    if (matchMedia("(pointer: coarse)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2, cx = x, cy = y, raf = 0, shown = false;
    const move = (e) => { x = e.clientX; y = e.clientY; if (!shown) { shown = true; el.style.opacity = "1"; } };
    const loop = () => {
      cx += (x - cx) * 0.12; cy += (y - cy) * 0.12;
      el.style.transform = "translate3d(" + cx + "px," + cy + "px,0) translate(-50%,-50%)";
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className="fx-cursor" aria-hidden="true" />;
}

/* ===== mouse-parallax container — children get --px/--py in [-1,1] ===== */
function ParallaxScene({ children, className = "", ...rest }) {
  const ref = fxRef(null);
  fxEffect(() => {
    const el = ref.current; if (!el) return;
    if (matchMedia("(pointer: coarse)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const move = (e) => { tx = (e.clientX / window.innerWidth - 0.5) * 2; ty = (e.clientY / window.innerHeight - 0.5) * 2; };
    const loop = () => {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
      el.style.setProperty("--px", cx.toFixed(4));
      el.style.setProperty("--py", cy.toFixed(4));
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className={"fx-parallax " + className} aria-hidden="true" {...rest}>{children}</div>;
}

/* ===== glowing ring + V motif (CS:GO poster device) ===== */
function RingV({ className = "", ...rest }) {
  return (
    <svg className={"fx-ringv " + className} viewBox="0 0 400 400" fill="none" aria-hidden="true" {...rest}>
      <g className="rv-rot">
        <circle className="rv-ring" cx="200" cy="200" r="168" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.85"
          strokeDasharray="6 14" />
        <circle className="rv-ring" cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="3" strokeOpacity="0.5" />
      </g>
      <path className="rv-v" d="M120 120 L200 290 L280 120" stroke="currentColor" strokeWidth="10"
        strokeLinejoin="round" strokeLinecap="round" strokeOpacity="0.9" />
    </svg>
  );
}

/* ===== periodic RGB-split glitch on a single string ===== */
function GlitchText({ children, as = "span", className = "", every = 4200, ...rest }) {
  const ref = fxRef(null);
  const text = typeof children === "string" ? children : "";
  fxEffect(() => {
    const el = ref.current; if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let alive = true;
    const tick = () => {
      if (!alive) return;
      el.classList.add("is-glitch");
      setTimeout(() => el && el.classList.remove("is-glitch"), 520);
      setTimeout(tick, every + Math.random() * every);
    };
    const id = setTimeout(tick, 1800 + Math.random() * every);
    return () => { alive = false; clearTimeout(id); };
  }, [every]);
  const Tag = as;
  return <Tag ref={ref} className={"fx-glitch " + className} data-text={text} {...rest}>{children}</Tag>;
}

/* ===== scroll hint ===== */
function ScrollHint({ label = "Скролль", className = "" }) {
  return (
    <div className={"fx-scroll " + className} aria-hidden="true">
      <span>{label}</span><i />
    </div>
  );
}

function FxStyles() { fxUseStyle("lst-fx", FX_CSS); return null; }

Object.assign(window, { EmberCanvas, CursorGlow, ParallaxScene, RingV, GlitchText, ScrollHint, FxStyles });

/* ===== ThreeCenter — crimson faceted-icosahedron hero centerpiece (no-build, UMD THREE) =====
   Replaces RingV. Needs window.THREE (three.js r128 UMD) via a classic <script> before babel.
   Mouse-rotated + idle spin, transparent bg, reduced-motion = one static frame, full GPU dispose. */
const { useRef: t3Ref, useEffect: t3Effect } = React;

function ThreeCenter({ className = "", ...rest }) {
  const hostRef = t3Ref(null);
  t3Effect(() => {
    const host = hostRef.current;
    if (!host) return;
    const THREE = window.THREE;
    if (!THREE) return;
    const reduce = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sizeOf = () => { const r = host.getBoundingClientRect(); return Math.max(1, Math.min(r.width || 400, r.height || 400) || 400); };
    let size = sizeOf();
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" }); }
    catch (e) { return; }
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(DPR);
    renderer.setSize(size, size, false);
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    canvas.style.width = "100%"; canvas.style.height = "100%"; canvas.style.display = "block";
    host.appendChild(canvas);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 6.4);
    const CRIMSON = 0xb50912, OXBLOOD = 0x75020f;
    const group = new THREE.Group(); scene.add(group);
    const geoms = [], mats = [];
    const shellGeo = new THREE.IcosahedronGeometry(2.05, 1);
    const shellWire = new THREE.WireframeGeometry(shellGeo);
    const shellMat = new THREE.LineBasicMaterial({ color: CRIMSON, transparent: true, opacity: 0.55 });
    const shell = new THREE.LineSegments(shellWire, shellMat); group.add(shell);
    geoms.push(shellGeo, shellWire); mats.push(shellMat);
    const coreGeo = new THREE.IcosahedronGeometry(1.18, 0);
    const coreMat = new THREE.MeshStandardMaterial({ color: OXBLOOD, emissive: CRIMSON, emissiveIntensity: 0.85, roughness: 0.35, metalness: 0.55, flatShading: true });
    const core = new THREE.Mesh(coreGeo, coreMat); group.add(core);
    geoms.push(coreGeo); mats.push(coreMat);
    const coreEdgesGeo = new THREE.EdgesGeometry(coreGeo);
    const coreEdgesMat = new THREE.LineBasicMaterial({ color: 0xff2a36, transparent: true, opacity: 0.7 });
    const coreEdges = new THREE.LineSegments(coreEdgesGeo, coreEdgesMat); core.add(coreEdges);
    geoms.push(coreEdgesGeo); mats.push(coreEdgesMat);
    const haloGeo = new THREE.TorusGeometry(2.55, 0.012, 8, 120);
    const haloMat = new THREE.MeshBasicMaterial({ color: CRIMSON, transparent: true, opacity: 0.4 });
    const halo = new THREE.Mesh(haloGeo, haloMat); halo.rotation.x = Math.PI / 2.4; group.add(halo);
    geoms.push(haloGeo); mats.push(haloMat);
    const amb = new THREE.AmbientLight(0x2a0407, 1.0);
    const key = new THREE.PointLight(CRIMSON, 2.4, 40); key.position.set(4, 5, 6);
    const rim = new THREE.PointLight(0xff3b46, 1.4, 40); rim.position.set(-6, -3, 2);
    scene.add(amb, key, rim);
    const target = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
    const onMove = (e) => { const w = window.innerWidth || 1, h = window.innerHeight || 1; target.x = ((e.clientY / h) * 2 - 1) * 0.5; target.y = ((e.clientX / w) * 2 - 1) * 0.8; };
    const renderOnce = () => renderer.render(scene, camera);
    const resize = () => { size = sizeOf(); renderer.setSize(size, size, false); camera.aspect = 1; camera.updateProjectionMatrix(); if (reduce) renderOnce(); };
    let ro = null;
    if (typeof ResizeObserver !== "undefined") { ro = new ResizeObserver(resize); ro.observe(host); } else { window.addEventListener("resize", resize); }
    function cleanupGPU() {
      try { geoms.forEach((g) => g && g.dispose && g.dispose()); mats.forEach((m) => m && m.dispose && m.dispose()); renderer.dispose(); if (renderer.forceContextLoss) renderer.forceContextLoss(); } catch (e) {}
      if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
    }
    if (reduce) { group.rotation.set(-0.25, 0.5, 0); renderOnce(); return () => { if (ro) ro.disconnect(); else window.removeEventListener("resize", resize); cleanupGPU(); }; }
    window.addEventListener("pointermove", onMove, { passive: true });
    let rafId = 0, t = 0, running = true, visible = true, io = null;
    if (typeof IntersectionObserver !== "undefined") { io = new IntersectionObserver((ents) => { visible = ents[0] ? ents[0].isIntersecting : true; }, { threshold: 0 }); io.observe(host); }
    const loop = () => {
      if (!running) return;
      rafId = requestAnimationFrame(loop);
      if (!visible) return;
      t += 0.0045;
      cur.x += (target.x - cur.x) * 0.06; cur.y += (target.y - cur.y) * 0.06;
      group.rotation.x = cur.x + Math.sin(t * 0.9) * 0.06;
      group.rotation.y = cur.y + t * 0.45;
      group.rotation.z = Math.sin(t * 0.5) * 0.04;
      shell.rotation.x = -t * 0.18; shell.rotation.y = t * 0.10;
      halo.rotation.z = -t * 0.6;
      coreMat.emissiveIntensity = 0.7 + Math.sin(t * 2.2) * 0.18;
      renderer.render(scene, camera);
    };
    rafId = requestAnimationFrame(loop);
    return () => { running = false; if (rafId) cancelAnimationFrame(rafId); window.removeEventListener("pointermove", onMove); if (ro) ro.disconnect(); else window.removeEventListener("resize", resize); if (io) io.disconnect(); cleanupGPU(); };
  }, []);
  return <div ref={hostRef} className={"fx-three " + className} aria-hidden="true" style={{ width: "100%", height: "100%", pointerEvents: "none" }} {...rest} />;
}
Object.assign(window, { ThreeCenter });
