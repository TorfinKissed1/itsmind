**ServiceCard** — one offering in the services grid.

```jsx
<ServiceCard
  tag="под ключ"
  title="Сайт под ключ"
  description="Не шаблон. Собираю под твою задачу — от структуры до релиза."
  price={<>от <b>15 000 ₽</b></>} />
```

Hover draws the neon top-rule and nudges the ↗ arrow. Wrap the price figure in `<b>` for accent.
Pass `href` to make the whole card a link.
