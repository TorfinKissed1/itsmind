/* lstmind UI kit — Works, Faq, Contact, Footer. Exports to window. */
const DS3 = window.LstmindDesignSystem_9805c3;
const { SectionHeader: SH3, WorkCard, Accordion, Input, Textarea, Button: Btn3, Reveal: R3, Marquee: Mq3 } = DS3;
const D3 = window.LST_DATA;
const { useState: uS } = React;

/* ---------- Works ---------- */
const Works = React.memo(function Works() {
  return (
    <section className="section works" id="works">
      <div className="wrap">
        <div className="head-row">
          <R3>
            <SH3
              title={<>Не верь на слово — <em>смотри, что я сделал</em></>}
              lead="Не скриншоты, а живые коммерческие проекты в проде. Открой любой в новой вкладке и потыкай руками." />
          </R3>
        </div>
      </div>
      <div className="works-rail">
        <div className="works-track">
          {D3.works.map((w, i) => (
            <article className="works-panel" key={w.name}>
              <span className="works-panel__idx">{String(i + 1).padStart(2, "0")} / {String(D3.works.length).padStart(2, "0")}</span>
              <WorkCard href={w.href} image={w.img} name={w.name} kind={w.kind}
                description={w.d} tags={w.tags} alt={w.name} />
            </article>
          ))}
        </div>
      </div>
      <div className="wrap">
        <R3>
          <div className="cta-band">
            <div className="cta-band__txt">
              <span className="cta-band__lead">Хочешь такой же сайт в проде?</span>
              <span className="cta-band__sub"><b>5.0★ · 28 отзывов на Kwork</b> — напиши, разберём твою задачу и назову цену.</span>
            </div>
            <Btn3 as="a" href="#contact" variant="primary" size="lg" icon="→">Хочу такой же результат</Btn3>
          </div>
        </R3>
      </div>
    </section>
  );
});

/* ---------- FAQ ---------- */
const Faq = React.memo(function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div className="faq-aside">
            <R3>
              <SH3 title={<>Отвечаю <em>заранее</em></>} />
            </R3>
            <R3 index={1}>
              <div className="faq-rating">
                <b>5.0★</b>
                <span>высший рейтинг · 28 отзывов</span>
                <a href="https://kwork.ru/user/lstmind" target="_blank" rel="noreferrer">читать на Kwork →</a>
              </div>
            </R3>
          </div>
          <R3 variant="right">
            <Accordion items={D3.faq.map((f) => ({ q: f.q, a: f.a }))} defaultOpen={0} />
          </R3>
        </div>
      </div>
    </section>
  );
});

/* ---------- Contact (the close) ---------- */
const CHANNELS = [
  { key: "tg", label: "Telegram", placeholder: "@ник в Telegram", hint: "Кину ответ прямо в личку." },
  { key: "mail", label: "Почта", placeholder: "твой email", hint: "Отвечу письмом." },
  { key: "call", label: "Созвон", placeholder: "телефон для связи", hint: "Наберу в удобное время." },
];
const Contact = React.memo(function Contact() {
  const [sent, setSent] = uS(false);
  const [ch, setCh] = uS("tg");
  const submit = React.useCallback((e) => { e.preventDefault(); setSent(true); }, []);
  const chan = CHANNELS.find((c) => c.key === ch) || CHANNELS[0];
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <R3 variant="scale">
          <div className="contact">
            <NeonFieldSafe />
            <div className="contact__grid">
              <div className="contact__aside">
                <SH3
                  title={<>Хватит терять клиентов <em>из-за сайта</em></>}
                  lead="Опиши задачу в двух словах — через час у тебя будет план и честная цена. Бесплатно, без обязательств." />
                <ul className="contact__proof">
                  <li><b>5.0★</b><span>28 отзывов на Kwork — высший рейтинг</span></li>
                  <li><b>1 час</b><span>столько до моего ответа, без автоответчиков</span></li>
                  <li><b>Бэкап</b><span>работаю на копии — твой прод остаётся цел</span></li>
                </ul>
              </div>

              <div className="contact__formwrap">
                {sent ? (
                  <div className="form2 form2--sent">
                    <div className="form2__sent-title">Заявка ушла <span>в Telegram</span></div>
                    <p className="form2__note">Я уже вижу её. Отвечу в течение часа — глянь личку.</p>
                    <Btn3 variant="secondary" onClick={() => setSent(false)}>Отправить ещё одну</Btn3>
                  </div>
                ) : (
                  <form className="form2" onSubmit={submit}>
                    <div className="form2__chips">
                      <span className="form2__chips-label">Как тебе удобнее?</span>
                      <div className="form2__chips-row">
                        {CHANNELS.map((c) => (
                          <button type="button" key={c.key}
                            className={"chip " + (ch === c.key ? "is-on" : "")}
                            onClick={() => setCh(c.key)}>{c.label}</button>
                        ))}
                      </div>
                    </div>
                    <div className="form2__row">
                      <Input label="Как тебя зовут" placeholder="Алексей" required />
                      <Input label="Куда написать ответ" placeholder={chan.placeholder} required />
                    </div>
                    <Textarea label="Что Вам нужно — в двух словах" placeholder="Лендинг для студии / магазин на WooCommerce / ускорить сайт / спасти чужой код…" rows={3} />
                    <Btn3 variant="primary" size="lg" icon="→" as="button" type="submit">Обсудить задачу</Btn3>
                    <span className="form2__note">{chan.hint} Отвечаю в течение часа — без спама и автоответчиков. Контакт нужен только чтобы ответить.</span>
                    <a className="form2__fast" href="https://t.me/lstmind" target="_blank" rel="noreferrer">Лень заполнять? Напиши в Telegram →</a>
                  </form>
                )}
              </div>
            </div>
          </div>
        </R3>
      </div>
    </section>
  );
});

/* NeonField may not exist in older bundles — guard. */
function NeonFieldSafe() {
  const NF = DS3.NeonField;
  return NF ? <NF grain={false} /> : null;
}

/* ---------- Footer ---------- */
const Footer = React.memo(function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <R3>
          <Mq3 items={(() => { const b = ["Результат", "Скорость", "Чистый код", "Под ключ"]; const a = []; for (let i = 0; i < 5; i++) a.push(...b); return a; })()} separator="●" reverse duration="100s" />
        </R3>
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="#top">lstmind<b>.</b></a>
            <p className="footer__sign">Собираю сайты, которые работают. Чужие — чиню. Собран на Next.js без шаблонов — и он тоже мой кейс.</p>
          </div>
          <a className="footer__cta-btn" href="#contact">Обсудить проект <b aria-hidden="true">→</b></a>
        </div>
        <div className="footer__meta">
          <span>© {new Date().getFullYear()} lstmind · Алексей</span>
          <span className="footer__links">
            <a href="https://t.me/lstmind" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://kwork.ru/user/lstmind" target="_blank" rel="noreferrer">Kwork</a>
            <a href="#top">Наверх ↑</a>
          </span>
        </div>
      </div>
    </footer>
  );
});

Object.assign(window, { Works, Faq, Contact, Footer });
