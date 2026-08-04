# Handoff — Soleil website v5

## What this is

A new sibling repository (`Sunkind Website 5`) containing a complete, building,
deployable Soleil site with a fully art-directed homepage. `../Sunkind Website`
was read only; nothing in it was changed.

## Finished

- **Eight homepage scenes**, each with its own composition:
  1. Hero — solar yellow, layered organic sun-path shapes recomposed for
     portrait and landscape, oversized headline, a tilted iPhone sitting fully
     in frame, handwritten note.
  2. Toolkit — six tactile colour cards on a bleeding scroll-snap rail, each
     carrying a hand-built recreation of the matching app surface, with drag,
     arrow buttons, keyboard scrolling and centre-distance drift.
  3. How it works — four crooked overlapping cards on pale pink; a snap strip
     with peeking cards on mobile.
  4. The Sun Window — pinned cyan sequence over a bounded 320vh: the object
     starts large and settles smaller while the surface itself changes from the
     card to the reading to the day's numbers to the protection check.
     Degrades to a plain list with all four surfaces stacked.
  5. Every kind of sunny day — hot-pink wall of oversized phrases with drawn
     sticker clusters on hover (pointer) or in-view (touch).
  6. Why Soleil — pale yellow, fourteen feature badges settling in two columns
     around the mark, cursor drift on fine pointers only.
  7. Real Sun — deep violet, an authored UV-curve/daylight illustration where
     the sun rides the curve to the selected part of the day, with a
     keyboard-operable three-tab comparison and staggered daylight bars.
  8. Questions + closing — five questions in native `<details>`, then the
     closing panel with the real app icon, CTA and privacy line.
- **Full route parity**: `/`, `/support`, `/privacy`, `/terms` in all five
  locales, English-only `/guides/` and ten `/guides/[slug]` pages, sitemap,
  robots, CNAME, canonical + hreflang, Article/FAQPage/BreadcrumbList JSON-LD.
- **All five locales carry the new homepage copy** (en, fr, es, de, ja). Legal
  and support text was ported verbatim; only the sentence about Google Fonts
  changed (see below).
- Self-hosted fonts, no third-party requests, no analytics, no tracking.
- `npm run build` passes `astro check` with 0 errors and 0 warnings; no console
  errors in the browser.

## Verified

- Desktop 1440, tablet, mobile 390 and 320: no horizontal page overflow; only
  the rails overflow, inside their clipped region.
- Menu opens by mouse, keyboard and touch, closes on Escape with focus returned
  to the button, and unlocks scrolling.
- Real Sun tabs respond to click and Arrow/Home/End; panels toggle correctly.
- Rail arrows scroll one card and disable at the ends.
- With `motion-on` removed (no JS, or reduced motion) every `[data-reveal]`
  element computes to `opacity: 1` and the pinned sequence becomes a static
  four-item list.

## Factual conflicts found in the old repository

1. **`screen-session.png` contradicts the product.** The old screenshot shows
   “600 IU of vitamin D in 106 min at UV 8” and “Best week for vitamin D”. It
   was used by two guides whose own copy states that Soleil deliberately does
   **not** convert sunlight into vitamin D — a direct contradiction of `app.md`
   rule 3, which is enforced by a unit test in the app. **Resolution:** the file
   is not carried into this repo, both guides now point at
   `screen-your-sun.png`, and their alt text was rewritten. Re-shoot the history
   screen before any vitamin-D-adjacent guide uses a screenshot again.
2. **`screen-home.png` shows UV 0 / “No burn risk”.** Accurate, but it is the
   hero image of a UV app showing no UV. Carried as-is because it is real; a
   replacement capture is item 1 in `ASSET_NEEDED.md`.
3. **Real screenshots vs. hand-built UI — resolved in favour of components.**
   The v5 brief asked for real screenshots and no fabricated app UI; the
   previous site deliberately recreated the app's surfaces in HTML/CSS so
   they would localise. After review the owner chose the components: a
   phone image in every card was repetitive, and screenshot text cannot
   translate. The feature rail, the Sun Window sequence and the Real Sun
   card now use hand-built recreations in `src/components/app/`, driven by
   the ported `appUi` copy in all five locales. Real screenshots remain
   where a whole device is the point: the hero and the guide pages.
4. **Privacy policy said the site loads a Google Font.** It no longer does —
   fonts are self-hosted — so that sentence was replaced and “Google” removed
   from the service-provider list, in all five locales. This is the only change
   to ported legal text.

## Deliberate decisions worth knowing

- **No Tailwind.** Art-directed scenes in utility classes become unreadable.
  Tokens plus scoped component CSS instead.
- **No carousel library.** Native CSS scroll-snap gives better accessibility
  than Embla for what these rails do, and ships no JavaScript. The brief allowed
  “another accessible, maintained” approach.
- **GSAP only for the Sun Window sequence**, dynamically imported and only above
  1000px. Everything else is IntersectionObserver plus CSS transitions.
- **The moments wall's phrases are not focusable.** They are not links or
  controls, and adding tab stops to decorative type would hurt keyboard users
  more than the image reveal helps them. The phrases themselves — the actual
  content — are fully readable; the imagery is `aria-hidden` enhancement.
- **Non-English FAQ uses the localised support answers**, because the SEO guides
  and homepage FAQ are English-only by design. No locale is left reading English.
- **Components in the cards, a real device in the hero.** App surfaces inside
  cards are hand-built recreations (`src/components/app/`) so they localise and
  stay crisp; a whole device only appears where the device itself is the point.
  Where a real screenshot is used, only the phone body is drawn around it — a
  designer render replaces it cleanly (see `ASSET_NEEDED.md` item 2).

## Not done / next

- Lighthouse has not been run against a production build on a throttled mobile
  profile. The obvious levers are already pulled (self-hosted subset fonts,
  preloaded display face, one high-priority image, lazy everything else,
  width/height on every image, no third-party requests).
- The hero screenshot and the sticker set are the two assets that would most
  change how authored the site looks — see `ASSET_NEEDED.md`.
- Copy is short by design. If a scene needs more, put it in a guide, not on the
  homepage.
