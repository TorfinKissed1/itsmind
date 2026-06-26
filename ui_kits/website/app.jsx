/* lstmind UI kit — App shell + mount. */
const { useState: useStateApp } = React;

function App() {
  const [loaded] = useStateApp(true); // preloader hidden for now
  return (
    <div className="kit">
      <FxStyles />
      <GsapBrain />
      <EmberCanvas />
      <div className="fx-atmos" aria-hidden="true" />
      <CursorGlow />
      <Nav />
      <main aria-hidden={!loaded ? "true" : "false"}>
        <Hero />
        <Strip />
        <TechStrip />
        <Problem />
        <Services />
        <Process />
        <Works />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a className="sticky-cta" href="https://t.me/lstmind" target="_blank" rel="noreferrer">
        Написать в Telegram <b aria-hidden="true">↗</b>
      </a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
