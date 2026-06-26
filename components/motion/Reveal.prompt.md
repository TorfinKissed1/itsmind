**Reveal** — wrap anything to give it the brand's standard scroll entrance.

```jsx
<Reveal>            <SectionHeader … /> </Reveal>
<Reveal variant="left"  index={0}> <Card>…</Card> </Reveal>
<Reveal variant="left"  index={1}> <Card>…</Card> </Reveal>
<Reveal variant="scale"> <img … /> </Reveal>
```

One architecture for the whole site: rise+fade+de-blur, shared easing/duration, `index` staggers
siblings (70 ms step). Variants only change the "from" transform. Respects reduced-motion and
prints visible. Prefer this over ad-hoc animations so entrances stay unified.
