**Accordion** — the FAQ list ("Отвечаю заранее"). Animated +/− neon toggle, smooth expand.

```jsx
<Accordion items={[
  { q: "Сколько стоит лендинг?", a: "Простой — от 15 000 ₽ за 5–7 дней…" },
  { q: "Делаешь мобильную вёрстку?", a: "Любой сайт собираю mobile-first…" },
]} />
```

Single-open by default (`defaultOpen={0}`); pass `allowMultiple` to keep several open, or
`defaultOpen={null}` for all closed. The toggle morphs + → − in accent.
