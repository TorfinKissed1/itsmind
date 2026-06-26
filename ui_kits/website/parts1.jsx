/* lstmind UI kit — Preloader, Nav, Hero. Exports to window. */
const { useState, useEffect, useRef, useCallback, memo } = React;
const DS = window.LstmindDesignSystem_9805c3;
const { Badge, Button, StatBlock, Marquee, Reveal, NeonField } = DS;
const D = window.LST_DATA;

/* ---------- Preloader: counter + drawn neon mark + rotating narration ---------- */
const Preloader = memo(function Preloader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [line, setLine] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 9 + 3;
      if (p >= 100) { p = 100; clearInterval(id); setTimeout(() => setDone(true), 520); setTimeout(() => onDone && onDone(), 1180); }
      setPct(Math.floor(p));
    }, 130);
    return () => clearInterval(id);
  }, [onDone]);

  useEffect(() => {
    const idx = Math.min(D.preloaderLines.length - 1, Math.floor(pct / (100 / D.preloaderLines.length)));
    setLine(idx);
  }, [pct]);

  const pad = String(pct).padStart(3, "0");
  return (
    <div className="pl" data-done={done}>
      <NeonField grid={false} />
      <div className="pl__inner">
        <svg className="pl__mark" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="44" strokeWidth="1.5" strokeOpacity="0.25"
            style={{ strokeDasharray: 276, strokeDashoffset: 276 - (276 * pct) / 100, transition: "stroke-dashoffset .2s linear" }} />
          <path d="M30 64 V36 M30 64 H52 M62 36 V64 M62 36 L78 64 M62 64 L78 36" strokeWidth="3"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 8px var(--accent-glow))" }} />
        </svg>
        <div className="pl__count">{pad}<sup>%</sup></div>
        <div className="pl__bar"><i style={{ width: pct + "%" }} /></div>
        <div className="pl__line"><span key={line}>{D.preloaderLines[line]}</span></div>
      </div>
    </div>
  );
});

/* ---------- Nav: glass-on-scroll ---------- */
const Nav = memo(function Nav() {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="nav" data-stuck={stuck}>
      <a className="nav__logo" href="#top" aria-label="lstmind — на главную">
        <span className="nav__logo-txt">lstmind</span><b className="nav__caret" aria-hidden="true">_</b>
      </a>
      <ul className="nav__links">
        {D.nav.map((n, i) => (
          <li key={n.href}>
            <a href={n.href}>{n.label}</a>
          </li>
        ))}
      </ul>
      <div className="nav__cta">
        <Button as="a" href="https://t.me/lstmind" target="_blank" variant="secondary" size="sm" icon="↗">Telegram</Button>
      </div>
    </nav>
  );
});

/* ---------- Hero ---------- */
const Hero = memo(function Hero() {
  return (
    <header className="hero" id="top">
      {/* parallax abstraction backdrop (mouse via --px/--py, scroll via data-parallax→--sy) */}
      <ParallaxScene className="hero__bg">
        <div className="fx-pl hero__layer hero__spot" style={{ "--d": 16 }} data-parallax="70" />
        <div className="fx-pl hero__layer hero__bg-img ds-duotone" style={{ "--d": 11, "--r": 0.5 }} data-parallax="56">
          <img src="../../assets/imagery/abstract-ink.jpg" alt="" loading="eager" />
        </div>
        <div className="fx-pl hero__layer hero__smoke" style={{ "--d": 28 }} data-parallax="120">
          <img src="../../uploads/smoke-main.webp" alt="" loading="eager" decoding="async" />
        </div>
        <div className="fx-pl hero__layer hero__ring" style={{ "--d": 40 }} data-parallax="-70">
          <ThreeCenter />
        </div>
        <div className="fx-pl hero__layer hero__ink" style={{ "--d": 64, "--r": 2 }} data-parallax="-140">
          <img src="../../uploads/ink-splatter.webp" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="fx-pl hero__layer hero__wisp" style={{ "--d": 90 }} data-parallax="180">
          <img src="../../uploads/smoke-wisp.webp" alt="" loading="lazy" decoding="async" />
        </div>
      </ParallaxScene>

      <NeonField grain={false} vignette={false} />

      <div className="hero__echo" aria-hidden="true">lstmind</div>

      <div className="wrap hero__grid">
        <h1 className="hero__title">
          <span>Делаю сайты,</span>
          <span className="em">которые работают.</span>
          <span className="ghost">Чужие — чиню.</span>
        </h1>
        <Reveal index={2}>
          <p className="hero__lead">
            Сайт на шаблоне грузится вечность и сливает заявки. Я собираю с нуля и спасаю чужое: <b>чистый код, скорость, ноль «почти работает»</b> — сайт, который реально приводит клиентов, а не просто «есть».
          </p>
        </Reveal>
        <Reveal index={3} className="hero__actions">
          <Button as="a" href="#contact" variant="primary" size="lg" icon="→">Обсудить проект</Button>
          <Button as="a" href="#works" variant="secondary" size="lg" icon="↘">Смотреть работы</Button>
        </Reveal>
        <Reveal index={4}>
          <p className="hero__trust">
            <b>5.0★</b> · 28 отзывов на Kwork <span>—</span> отвечаю в течение часа <span>—</span> работаю на копии с бэкапом
          </p>
        </Reveal>
        <Reveal index={5} className="hero__stats">
          {D.stats.map((s, i) => <StatBlock key={i} value={s.value} mark={s.mark} label={s.label} />)}
        </Reveal>
      </div>
    </header>
  );
});

Object.assign(window, { Preloader, Nav, Hero });
