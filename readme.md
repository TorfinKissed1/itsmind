# lstmind — Design System

> 🔴 **Живая версия сайта:** https://torfinkissed1.github.io/itsmind/
> Локально: `python _devserver.py` → http://127.0.0.1:8000/ui_kits/website/index.html
> (статический сайт, JSX компилируется в браузере — нужен HTTP-сервер и интернет).

> **lstmind** is the studio of **Алексей**, a commercial web developer (freelance, Russia).
> Tagline: **«Делаю сайты, которые работают. Чужие — чиню.»**
> One person, no template-farms: custom builds and rescue work — clean code, speed, zero "почти работает".

This design system gives agents everything needed to produce on-brand lstmind interfaces,
marketing pages, decks and mocks: tokens, fonts, reusable components, and a full website UI kit.

---

## Sources used to build this system

Stored for provenance — **do not assume the reader has access**:

- **Live site (copy + structure only — _not_ visual design):** https://www.lstmind.ru/ · https://lstmind.ru
- **Stylistic / animation reference codebase:** `DeadPool-Website/` (mounted, read-only) — a GSAP
  scroll-driven, neon, layered-abstraction site. We borrowed the *motion energy and layout daring*,
  not its content. Fonts there (Bebas Neue Pro, LemonMilk) were **not** adopted.
- **Mood images (uploads):**
  - `assets/imagery/abstract-ink.jpg` — black/white ink abstraction with red neon ("ENDLESS DREAM" poster). The clearest statement of the brand mood.
  - `assets/imagery/neon-banner.jpg` — acid-green neon hero ("Arcane"). Source of the default accent.
  - `assets/imagery/palette-ref.jpg` — red/black palette reference card.
- **Real lstmind projects** (referenced in the Works UI kit, live):
  skazpokrayu.ru · tksibstar.com · wellevent.ru · skazpokrayu.online
- **Other:** Kwork profile (rating 5.0★, 28 reviews) · Telegram @lstmind · lstmind@yandex.ru

### Font substitution — needs your confirmation
lstmind ships no brand font files, so we **chose** a type system that matches the neon/abstract
direction, all from Google Fonts (downloadable, licensed for web):
**Unbounded** (display), **Space Grotesk** (body/UI), **JetBrains Mono** (labels/indices/code).
They are loaded via `tokens/fonts.css`. **If you have preferred licensed faces, send them and we'll swap.**

---

## Brand essence

A confident, technical solo studio. The work is serious (commercial code in production), the
presentation is bold and a little theatrical — neon, abstraction, "wow" entrances — but always in
service of clarity. **Dark, fast, exact.** Never decorative for its own sake.

Core promises (from the site): *чистый код · скорость · под ключ · работаю на копии с бэкапом ·
отвечаю в течение часа.*

---

## CONTENT FUNDAMENTALS — how lstmind writes

**Language:** Russian. **Voice:** first person singular ("Я разработчик, а не сборщик шаблонов"),
talking directly **to "ты"** — informal, peer-to-peer, never corporate "вы-обращение" or "мы — команда".
It's one person and the copy owns that ("Один человек. Никаких сюрпризов").

**Tone:** blunt, confident, a touch provocative — sells by *naming the reader's pain*, not by
flattery. Short punchy sentences. Concrete numbers over adjectives. Mild slang is welcome
("вбухать деньги", "на коленке", "потыкай руками").

**Casing & punctuation:**
- The wordmark is lowercase with a trailing period: **`lstmind.`**
- Section headers carry a **two-digit index + a short kicker**: `01 Почему сайты молчат`, `04 Работы`.
- Big headlines are sentence-case, often with one phrase emphasized (italic/accent):
  *«Делаю сайты, **которые работают**»*, *«Красивый — не значит работающий»*.
- Uses the em-dash «—», «ё», guillemets «…» and the ₽ sign. Prices as `от 15 000 ₽`, `1500 ₽/час`.

**Vibe / examples:**
- Hero: *"Я разработчик, а не сборщик шаблонов на коленке. Собираю с нуля и спасаю чужое: чистый код, скорость, ноль «почти работает»."*
- Problem framing: *"5 секунд загрузки — и половина посетителей ушла к конкуренту."*
- Process: *"Без пинг-понга между подрядчиками и без «ой, это считается отдельно»."*
- Works: *"Не скриншоты. Сами сайты. Открой любой в новой вкладке и потыкай руками."*
- Reassurance: *"Не трогаю твой прод. Работаю на копии с бэкапом."*

**Emoji:** none. Instead the brand uses a small set of **typographic marks** as accents:
`↗ → ↘ ↑ ★ ✦ ●` and numeric indices. Marquee separators use `—` and `●`.

---

## VISUAL FOUNDATIONS

**Overall:** an **ink canvas** (near-black `#08080A`) carrying off-white type and a **single neon
accent**. Default accent is **acid green `#C6F135`**; a **red `#FF2D35`** alternate flips via
`:root[data-accent="red"]`. Think laboratory-dark + one electric light source. High contrast,
generous negative space, oversized display type, abstraction over illustration.

- **Color:** monochrome ink + fog (white-grays), one neon. Neon is used *sparingly* — for one
  emphasized word, a CTA, a hairline, a glow — never as fields of color. Avoid second hues; avoid
  bluish-purple gradients entirely.
- **Type:** Unbounded for display (set tight, `letter-spacing:-0.02em`, frequently huge / partly
  UPPERCASE for hero monoliths). Space Grotesk for body (line-height ~1.6). JetBrains Mono for
  kickers, indices, prices, labels (uppercase, `letter-spacing:0.22em`). Strong size jumps —
  hero can reach `clamp(...,16vw,15rem)`.
- **Backgrounds:** dark, *alive*. Layers: a base ink fill, a soft radial **neon spot** (`--grad-spot`),
  faint **grain** overlay (`--noise-url`, ~5% opacity, `mix-blend:overlay`), slow drifting "cloud"
  glow (`@keyframes ds-drift`, 14s), optional light rays / falling motes. Vignette (`--grad-vignette`)
  to focus the center. Full-bleed abstract imagery (the ink/neon photos) appears behind heroes and
  work cards, usually duotoned toward ink + accent.
- **Animation:** **one reveal architecture** — content RISES + FADES (+ slight de-blur) into place
  on scroll. Driver: `[data-reveal]` + `.is-in` (IntersectionObserver), eased with
  `--ease-out cubic-bezier(0.16,1,0.3,1)`, `--dur-reveal 800ms`, staggered by `--stagger 70ms`
  (`style="--i:n"`). Variants (`left`/`right`/`scale`) share the same timing, differ only in the
  "from" transform — so it reads as *one system, lightly varied*, never a zoo of effects.
  Ambient loops (drift/float/pulse/spin) are slow and decorative-background only. **All gated on
  `prefers-reduced-motion`; the base state is the visible end-state** (print/no-JS safe).
- **Hover:** lifts toward light — text/icon to `--accent`, borders from `--border` to `--accent`,
  a `--glow-sm`/`--glow-md` bloom, subtle `translateY(-2px)`. Links underline-grow or gain `↗`.
- **Press:** quick `scale(0.97)` + dimmed glow; `--dur-fast 160ms`.
- **Borders:** 1px hairlines in translucent white (`--line` .12 alpha), strengthening to `--accent`
  on focus/hover. Accent focus ring = `--glow-inset`.
- **Shadows:** on dark, depth = **glow + hairline**, not gray drop-shadows. Dark elevation shadows
  (`--shadow-md/lg`) exist for floating panels/menus only.
- **Radii:** restrained and techy. Cards/inputs `--radius-md (8px)` to `--radius-lg (14px)`; pills &
  the round "CD"/badge motif use `--radius-pill`/`--radius-full`. Avoid big soft 24px+ rounding.
- **Cards:** `--surface-card` (#0d0d11) fill, 1px hairline border, small radius, **no** soft shadow
  at rest; on hover gain accent border + faint glow. Often carry a corner index (`01`) or `↗`.
- **Transparency / blur:** glass (`--glass`, `backdrop-filter:var(--blur-md)`) for the sticky nav and
  overlays only — not everywhere. Imagery skews high-contrast, cool-to-neutral, often near-monochrome
  with the accent injected.
- **Layout:** fixed sticky glass nav; oversized section headers with mono index; asymmetric,
  editorial grids; marquees of services/values; lots of breathing room (`--section-y`).

---

## ICONOGRAPHY

The brand is **near-iconless by preference** — it leans on **typographic marks and numerals**
instead of an icon zoo: arrows `↗ → ↘ ← ↑`, `★`, `✦`, bullet `●`, and two-digit indices `01–06`.
This is intentional and on-brand; prefer it for accents and directional cues.

When real UI icons are needed (nav, form affordances, social), use **[Lucide](https://lucide.dev)**
via CDN — thin 1.5–2px stroke, rounded joins, which matches the clean techy line. Load:
`<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or use the
SVG sprite. Keep icons monochrome (`currentColor`), small, and let them inherit `--accent` on hover.
**No emoji, ever.** No multicolor/filled icon sets. The reference codebase used Font Awesome
(brand glyphs for socials) — substitute Lucide's `github`/`send`/`mail` or simple text links to keep
one consistent stroke style.

---

## Index / manifest (root)

| Path | What |
|---|---|
| `styles.css` | Global entry — `@import`s every token + font file. Consumers link this. |
| `tokens/` | `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `motion.css` |
| `assets/imagery/` | Brand mood / texture / work-placeholder images |
| `components/` | Reusable React primitives (see below) — namespace `window.LstmindDesignSystem_9805c3` |
| `ui_kits/website/` | Full lstmind marketing-site recreation (hero, services, process, works, FAQ, contact) + preloader |
| `guidelines/` | Foundation specimen cards (Type, Colors, Spacing, Motion, Brand) shown in the Design System tab |
| `SKILL.md` | Agent-Skills wrapper |

**Components:** `Button`, `Tag`, `Badge`, `Kicker`, `SectionHeader`, `Card`, `WorkCard`,
`ServiceCard`, `StatBlock`, `Input`, `Textarea`, `Accordion`, `Marquee`, `Reveal`, `NeonField`.
(See each component's `.prompt.md`.)

**UI kit:** `ui_kits/website/` — interactive recreation of lstmind.ru's structure (our visual
language, not theirs).
