**NeonField** — drop-in ambient background for any dark section (the "living site" atmosphere).

```jsx
<section style={{position:"relative", overflow:"hidden"}}>
  <NeonField />
  <div style={{position:"relative", zIndex:1}}>…content…</div>
</section>
```

Two drifting neon blobs + masked grid + grain + vignette. Toggle `grid` / `grain` / `vignette`.
Inherits the accent colour, slows to static under reduced-motion. Use once per major section, not nested.
