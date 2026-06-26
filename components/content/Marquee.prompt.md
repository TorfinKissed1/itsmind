**Marquee** — the brand's scrolling phrase ticker (services / values strip).

```jsx
<Marquee items={["Сайты под ключ","Спасение чужих сайтов","Интернет-магазины","Ускорение","WooCommerce"]} />
<Marquee items={["Результат","Скорость","Чистый код","Под ключ"]} separator="●" reverse duration="20s" />
```

Display type, uppercase, accent separators; every other item dims for rhythm. Pauses on hover,
stops under reduced-motion. Use `reverse` on a second row for a counter-scrolling pair.
