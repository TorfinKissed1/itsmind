**Card** — the base surface: ink fill, hairline border, hover lift+glow, optional corner index.

```jsx
<Card index="01">
  <h3>Грузится вечность</h3>
  <p>5 секунд загрузки — и половина посетителей ушла к конкуренту.</p>
</Card>
<Card accent hover={false}>Featured</Card>
```

`index` prints a mono number in the corner (problem/process lists). `accent` adds a neon spotlight +
accent border. Set `hover={false}` for static cards.
