---
name: lstmind-design
description: Use this skill to generate well-branded interfaces and assets for lstmind (Алексей — веб-разработчик · «сайты, которые работают»), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the brand's dark, neon, abstract aesthetic.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create
static HTML files for the user to view. If working on production code, you can copy assets and read
the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or
design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production
code, depending on the need.

## Quick map
- `readme.md` — brand context, content + visual foundations, iconography, manifest. **Start here.**
- `styles.css` — single entry; `@import`s all tokens + fonts. Link this one file.
- `tokens/` — colors, typography, spacing, effects, motion (CSS custom properties).
- `components/` — React primitives. Load `_ds_bundle.js`, read from `window.LstmindDesignSystem_9805c3`.
- `ui_kits/website/` — full interactive lstmind site recreation (preloader → hero → … → contact).
- `guidelines/` — foundation specimen cards.
- `assets/imagery/` — brand mood / texture / work-placeholder images.

## Non-negotiables (the brand in one breath)
- **Ink canvas + one neon light.** Near-black `#08080A`, off-white type, a single accent
  (acid green `#C6F135` default; red alternate via `:root[data-accent="red"]`). Neon used sparingly.
- **Type:** Unbounded (display, tight/huge) · Space Grotesk (body) · JetBrains Mono (kickers, indices, prices).
- **One reveal system:** rise + fade + de-blur, shared easing/duration, staggered. Use the `Reveal`
  component or `[data-reveal]`/`.is-in`. Living-but-not-noisy; always reduced-motion safe.
- **Voice:** Russian, first-person, informal "ты", blunt and confident, numbers over adjectives.
  Lowercase `lstmind.` Section headers = two-digit index + kicker. No emoji — use marks `↗ → ● ★ ✦`.
- **Depth = glow + hairline**, not gray drop-shadows. Restrained techy radii. Imagery near-monochrome
  → colour on hover.
