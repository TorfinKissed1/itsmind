**WorkCard** — a portfolio entry; the "Работы" grid.

```jsx
<WorkCard
  href="https://www.skazpokrayu.ru/"
  image="assets/imagery/work-tex-1.jpg"
  name="Сказ по краю"
  kind="Интернет-магазин"
  description="Магазин премиальных арт-объектов. Каталог с фильтрами, корзина, заказ под ключ."
  tags={["WordPress","WooCommerce","Каталог + фильтры"]} />
```

Thumbnail is grayscale at rest and blooms to colour on hover; LIVE badge + ↗ open mark sit on the
media. Whole card is a link (opens new tab). Feed it real screenshots when available — placeholder
imagery lives in `assets/imagery/`.
