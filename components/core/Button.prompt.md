**Button** — the brand's neon pill CTA; use for any primary/secondary action or link-as-button.

```jsx
<Button variant="primary" size="lg" icon="→">Обсудить проект</Button>
<Button variant="secondary" icon="↘">Сначала покажи работы</Button>
<Button as="a" href="#" variant="ghost">FAQ</Button>
```

Variants: `primary` (acid-neon fill, ink text, glow on hover), `secondary` (ghost outline that
lights to accent), `ghost` (text only). Sizes `sm | md | lg`. Pass `icon` as a typographic mark
(→ ↗ ↘) — it animates outward on hover. Use `as="a"` for links. Inherits the active accent
(green by default, red under `[data-accent="red"]`).
