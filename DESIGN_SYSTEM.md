# Soleil design system — v5

“A day in the sun, art directed.” A joyful independent magazine about daylight,
not a clinic and not a SaaS landing page. Every scene is composed; nothing is a
generic content block.

## Colour

Tokens live in `src/styles/tokens.css`. Roles are fixed — the palette only stays
compact if each colour keeps its job.

| Token | Value | Role |
| --- | --- | --- |
| `--ink` | `#17120e` | Type, graphic weight, dark buttons |
| `--paper` / `--paper-warm` | `#fffdf7` / `#fdf6e6` | Pauses between saturated scenes |
| `--solar-yellow` | `#ffd84d` | The hero colour and the connective tissue |
| `--solar-pale` | `#fff09a` | Quiet solar backgrounds |
| `--solar-orange` | `#ff9b2f` | Active sun, attention, the menu control |
| `--sunset-pink` | `#f43d98` | **Primary action.** Black type on it |
| `--sunset-deep` | `#b70f61` | Eyebrows, links, white-on-pink cases |
| `--sky-cyan` / `--sky-pale` | `#73e2e5` / `#dff9f8` | Live conditions, data, “now” |
| `--twilight-deep` / `--twilight-pale` | `#37286f` / `#d9d1f4` | History, evening, Watch, Real Sun |

Scenes are toned with `<section class="scene" data-tone="…">`, which sets
`--scene-bg`, `--scene-fg`, `--scene-muted` and `--scene-rule` together. Tones:
`paper`, `solar`, `solar-pale`, `sky`, `sky-deep`, `pink`, `twilight`.

Rules:

- Yellow is not the background of every section. Saturated scenes are separated
  by paper ones.
- Every text/background pair meets WCAG AA. Muted text on a tone uses the tone's
  own `--scene-muted`, never an arbitrary opacity.
- No gradients on type. No glassmorphism. Two decorative blurs would already be
  one too many.

## Typography

- Display: **Bricolage Grotesque** 800 (`--font-display`), self-hosted.
- Body/UI: **Instrument Sans** 400–700 (`--font-body`).
- Handwritten: **Gochi Hand** (`--font-hand`) — one or two annotations per
  scene, never body copy, never load-bearing information.
- Japanese falls back to Hiragino Sans / Noto Sans JP with looser tracking
  (`html[lang='ja']` rules in `base.css`).

Scale (all clamped, all in `base.css`):

| Class | Size | Leading |
| --- | --- | --- |
| `.display-hero` | `clamp(3rem, 6.6vw, 7.75rem)` | 0.85 |
| `.display-xl` | `clamp(2.85rem, 7.4vw, 6.5rem)` | 0.86 |
| `.display-lg` | `clamp(2.35rem, 5.2vw, 4.25rem)` | 0.90 |
| `.display-md` / `.display-sm` | section and card titles | 0.98 / 1.05 |
| `.lede` | `clamp(1.075rem, 1.25vw, 1.3rem)` | 1.5 |
| `.body-text` / `.prose` | 16–17px | 1.6–1.7 |
| `.eyebrow` | 13px, uppercase, `0.12em` | — |

Headline tracking is `-0.035em` to `-0.042em`. Hero lines are art-directed: the
copy supplies an array of lines, so a translator can rebreak them.

## Space, radii, elevation

- `--gutter` `clamp(1.25rem, 4vw, 4.5rem)`, `--scene-pad-y`
  `clamp(4.5rem, 9vw, 9rem)`.
- Radii come from one family: `--r-xs 8` · `--r-sm 14` · `--r-md 22` ·
  `--r-lg 34` · `--r-scene clamp(24px, 3.2vw, 48px)` · `--r-pill`.
  No stray values.
- Elevation is printed, not glassy: a hard 2px `--lift-sm` under buttons and
  stickers, soft `--lift-md` / `--lift-lg` under cards and the device.
- Controlled imperfection: cards tilt 1–4°, stickers 2–5°, the hero device 8°.
  Tilt is passed as `--tilt` so entrance animations can return to it.

## Motion

`html.motion-on` is set inline in `<head>` only when JS runs *and*
`prefers-reduced-motion` is not `reduce`. Nothing is hidden before that.

| Name | Spec |
| --- | --- |
| Word landing | y `105% → 0`, slight rotation, 45ms stagger |
| Plop | `scale .87 → 1`, rotate `−5° → tilt`, `--ease-plop`, ~850ms |
| Slide with weight | y 26px, `--ease-weight` (`cubic-bezier(.32,.72,0,1)`) |
| Sticker settle | y 90%, rotate `−8° → tilt`, elastic, 70ms stagger |
| Sequence | UV now scene only: ScrollTrigger scrub over a bounded 300vh |

Rules: no standing `requestAnimationFrame` loop; the badge drift only runs while
a pointer moves; GSAP is dynamically imported and only on ≥1000px; reduced
motion removes parallax, scrubbing and entrances without removing content.

## App-UI recreations

`src/components/app/cards/` holds hand-built recreations of the app's cards —
UV now, the condition tiles, protection, sunscreen alerts, the live outing,
your people and Time in Daylight. Since the app's September 2026 re-skin they
are the app's own design, not an approximation: the same fixed colour per
feature (`SunkindDesignTokens.Card`, which the app took from this site's
toolkit cards), paper stickers as card headings, ink stickers as section
headings, 34pt card radius. Sizes are the app's points over its 16pt body, so
`--ui-size` scales a surface without breaking a proportion.

They are HTML/CSS, never screenshots, so they stay crisp and translate through
`appUi` in the locale files, which reuses the app's own translations where the
app already says something. `AppSlice.astro` sets them on the app's paper
ground — without it a cyan card would vanish into a cyan scene — and
`PhoneScreen.astro` stacks them into the hero's Your Day screen. The shared
styles live in `src/styles/app-ui.css`.

Structure must track the real app screens. The sample values are plausible, not
live, and must agree with the surrounding copy — never a countdown, never a
vitamin-D figure.

## Accessibility

- Real landmark and heading order; one `<h1>` per page; visible focus rings
  (`3px solid currentcolor`, white on the twilight scene).
- Menu, accordion and language switcher are native elements (`<details>`), so
  they work with no JavaScript; the tab set is a progressive upgrade of three
  plain blocks and supports Arrow/Home/End.
- Carousels are native scroll-snap: real drag, real momentum, real keyboard
  scrolling. Arrow buttons are an addition, not the mechanism.
- Touch targets ≥44px. No horizontal page overflow at 320px; only the rails
  overflow, inside their own clipped region.
- Decorative imagery is `alt=""` and `aria-hidden`. The Real Sun chart is a
  labelled `role="img"` illustration, never presented as a screenshot.
