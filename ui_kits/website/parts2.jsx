/* lstmind UI kit — Problem, Services, Process. Exports to window. */
const DS2 = window.LstmindDesignSystem_9805c3;
const { SectionHeader, Card, ServiceCard, Reveal: Reveal2, Marquee: Marquee2 } = DS2;
const D2 = window.LST_DATA;

/* ---------- Marquee strip ---------- */
const Strip = React.memo(function Strip() {
  // repeat the phrases so one marquee group is wider than the viewport — seamless loop, no empty gaps
  const items = [];
  for (let i = 0; i < 3; i++) items.push(...D2.marquee);
  return (
    <div className="strip">
      <Marquee2 items={items} separator="—" duration="100s" />
    </div>
  );
});

/* ---------- Problem ---------- */
const Problem = React.memo(function Problem() {
  return (
    <section className="section" id="problem">
      <div className="wrap">
        <Reveal2>
          <SectionHeader wide
            title={<>Узнал себя? Значит, <em>теряешь клиентов</em></>}
            lead="Три причины, по которым сайт молчит и не приносит заявок. Поймал хоть одну — деньги утекают к конкуренту каждый день." />
        </Reveal2>
        <div className="grid-3" style={{ marginTop: "var(--space-8)" }}>
          {D2.problems.map((p, i) => (
            <Reveal2 key={p.n} variant="up" index={i}>
              <Card style={{ height: "100%" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-h4)", letterSpacing: "var(--ls-tight)", margin: "0 0 4px" }}>{p.t}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: "var(--lh-body)", margin: 0, fontSize: "var(--fs-small)" }}>{p.d}</p>
              </Card>
            </Reveal2>
          ))}
        </div>
        <Reveal2 index={1}>
          <p style={{ marginTop: "var(--space-7)", textAlign: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-h3)", letterSpacing: "var(--ls-tight)", color: "var(--text-primary)" }}>
            Я делаю наоборот — <span style={{ color: "var(--accent)", textShadow: "var(--glow-text)" }}>быстро, понятно, под тебя.</span>
          </p>
        </Reveal2>
      </div>
    </section>
  );
});

/* ---------- Services ---------- */
const Services = React.memo(function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="head-row">
          <Reveal2>
            <SectionHeader wide
              title={<>Что закрываю под ключ — <em>и сколько стоит</em></>}
              lead="Решение под твою задачу, а не набор фич. Стек подбираю под цель и бюджет, а не под моду. Ставка 1500 ₽/час, по проекту — фикс-смета до старта, без сюрпризов по деньгам." />
          </Reveal2>
        </div>
        <div className="grid-svc">
          {D2.services.map((s, i) => (
            <Reveal2 key={s.t} variant="up" index={i % 3}>
              <ServiceCard tag={s.tag} title={s.t} description={s.d}
                price={<>{s.p[0]}<b>{s.p[1]}</b>{s.p[2]}</>} />
            </Reveal2>
          ))}
        </div>
      </div>
    </section>
  );
});

/* ---------- Process ---------- */
const Process = React.memo(function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="process-grid">
          <div className="process-aside">
            <Reveal2>
              <SectionHeader wide
                title={<>Никакого <em>«пропал и не отвечает»</em></>}
                lead="Работаю на копии с бэкапом, отвечаю за час, фикс-смета до старта. Пять прозрачных шагов от задачи до рабочего сайта — ты всегда знаешь, что происходит." />
            </Reveal2>
          </div>
          <div className="steps">
            {D2.process.map((s, i) => (
              <Reveal2 key={s.n} variant="left" index={i} as="div" className="step">
                <div className="step__num">{s.n}</div>
                <div>
                  <h3 className="step__title">{s.t}</h3>
                  <p className="step__desc">{s.d}</p>
                </div>
              </Reveal2>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Object.assign(window, { Strip, Problem, Services, Process });
