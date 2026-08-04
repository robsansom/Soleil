# Assets still needed

Everything on the site today is real: genuine app screenshots, the app icon, the
two licensed photographs, and vector artwork drawn for this repository. Nothing
is a stock placeholder. The list below is what would raise the ceiling, in
priority order. Each item has a slot in the code already.

---

## 1. A fresh Sun Window capture at meaningful UV — **highest impact**

`public/images/screen-home.png` (used in the hero, the Sun Window sequence and
the Live UV card) was captured in the evening: it reads **“No burn risk · UV is 0
right now.”** It is honest, but it is the weakest possible hero for a UV app.

- Same screen, captured at **UV 5–7 with a “High” category** and a peak later in
  the day, so the hero states the product's core fact.
- 1206 × 2436 px, iPhone 15 Pro class, dark appearance (matches the rest).
- Drop in as `public/images/screen-home.png`; dimensions are already declared in
  `src/data/screens.ts`.

## 2. `hero-device-composition.webp` — the protagonist

A rendered iPhone **and** Apple Watch composition to replace the CSS device
frame in the hero and the Sun Window sequence.

- Transparent background, 2400 px on the long edge, WebP + AVIF.
- Three-quarter tilt, iPhone rotated ~8° clockwise, Sun Window visible on the
  phone; Watch smaller, lower-left, showing the UV complication.
- Lit warm from the upper right so it sits on the solar-yellow hero; soft
  contact shadow baked in, no hard drop shadow (the CSS adds its own).
- Slot: replace the `<img>` inside `src/components/art/DeviceFrame.astro` and
  remove the `framed` treatment for that instance.

## 3. `soleil-sticker-sheet.svg` — the drawn set

Four line marks are currently drawn in `src/components/art/Mark.astro` (sky,
cover, session, real sun). They are coherent but they are a developer's hand.

- One set: sun, cloud, wide-brim hat, SPF bottle, shade/parasol, Apple Watch,
  water drop, timer, day arc, and the Soleil mark.
- Single-colour, 5px stroke on a 120 × 120 grid, round caps and joins, drawn
  slightly off-axis so it reads as printed rather than plotted.
- Used at 104–140 px in the toolkit cards and the “four moves” cluster, so the
  detail must survive at that size.

## 4. Nine lifestyle photographs for the “every kind of sunny day” wall

`src/components/home/MomentsScene.astro` reveals drawn stickers from the site's
own mark set, because the only imagery available was cropped photography and
slivers of app UI — at that size they read as broken images rather than art
direction. Nine real photographs would let the wall do what the reference does.

- School run, beach day, garden afternoon, city walk, sport outside, family
  holiday, sensitive skin, cloudy-but-bright day, golden hour.
- Portrait 4:5, 1200 × 1500 px minimum, warm daylight, real people, no stock
  “wellness” staging, and no visible sunburn or tanning-as-goal framing.

## 5. `real-sun-day-illustration.svg` (optional)

The Real Sun scene uses a hand-authored SVG chart: a UV curve with daylight bars
and three highlightable zones. It is deliberately an illustration, not a
screenshot. If Real Sun ever ships a chart worth showing, a real capture would
be stronger — 1206 × 2622 px, same conventions as the other screenshots.

## 6. `download-on-the-app-store.svg`

Apple's official badge artwork, from the Apple marketing guidelines. Not in the
repo (Apple's licence does not allow redistribution). Until it exists — and
until `appStoreUrl` is real — every CTA renders the “coming soon” pill.

## 7. Licensed display fonts (optional)

The reference's Champ ExtraBold / Degular / Hello Organichand are not licensed
here. Bricolage Grotesque, Instrument Sans and Gochi Hand are the legal stand-ins
and are self-hosted in `public/fonts`. If the licences are bought, drop the woff2
files in and swap three tokens in `src/styles/tokens.css`.

## 8. A Japanese display face

Bricolage Grotesque has no CJK coverage, so `/ja` falls back to Hiragino Sans /
Noto Sans JP. It is respectable but it is not the brand voice. A licensed heavy
Japanese grotesque, self-hosted and subset, would fix it.
