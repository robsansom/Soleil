# Soleil website

The live marketing site for the Soleil iOS/watchOS app (getsoleilapp.com), built
with Astro + Tailwind and deployed to GitHub Pages.

**This repo is canonical.** Sibling folders `Sunkind Website 2` and
`Sunkind Website 3` are abandoned design explorations — do not build on them or
copy their styling. Anything worth keeping has already been ported here.

## Run it

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
```

## Product truth — read `app.md` first

`app.md` in this repo is the accurate reference for what the app does, rewritten
from the app's Golden Thread brief and live source. **Older docs in the app repo
(and the shipped App Store description) describe an abandoned product.** Do not
write copy from them.

Three rules govern every word on this site:

1. **Live UV and its category are the hero fact.** Never lead with a duration.
2. **Never present time as permission.** Elapsed time is supporting context.
   No "time until burn", no "safe window", no countdown-to-danger framing.
   Reapplying sunscreen never resets time outside.
3. **Never claim vitamin D estimates.** The app deliberately does not derive
   vitamin D from sunlight — there is a unit test enforcing it.

Other facts that drift easily: pricing is **weekly $3.99 / yearly $19.99 /
lifetime $69.99 with no monthly tier**; tabs are **Today / Your Sun / You**;
free covers today's outing while Pro covers family history, trends, Daily Glow
setup, AI scan and widgets. "Sun Window" is body copy, not a tab name.

Tone: plain-spoken, precise, reassuring. Specific before emotional. Never
personify the app or imply medical certainty. Always "wellness guidance, not
medical advice".

## Design

Warm-cream editorial style — cream canvas (`sun-ink` #FFFBF4), deep warm ink,
sunrise-orange accent, generous display type. **Do not restyle it.** Three site
designs were built and this is the one that was chosen; evolve it in place.

Motion is one-shot and gentle: entrance reveals, and `DayArc.astro` plays once
when scrolled into view. **No scroll-scrubbed or pinned scroll animations** —
they were explicitly rejected.

## i18n

Five locales (`en`, `fr`, `es`, `de`, `ja`) in `src/i18n/translations/`, typed by
`src/i18n/types.ts`. Adding a key means updating all five files. When product
copy changes, propagate the change to every locale in the same pass — English-
only edits leave the other locales making claims the app no longer supports.

**Exception:** the SEO guides (`src/data/guides/`, `src/pages/guides/`), the
homepage FAQ and the guides teaser are **English-only by design** — they target
English search queries. They are gated behind `currentLocale === 'en'`.

## SEO

`src/data/guides/` holds one entry per target search query, rendered by
`src/pages/guides/[slug].astro` with Article + FAQPage + BreadcrumbList JSON-LD.
`src/data/homeFaq.ts` powers the homepage FAQ and its FAQPage schema; each sun
question links to its full guide. `sitemap.xml.ts` generates from the guide list
plus locale pages — new pages must be added there. Keyword research and the
page-intent map live in `seo-keywords.md`.

## Assets

Imagery comes from the app's asset catalog (`../Sunkind/Sunkind/Assets.xcassets`)
so the site and app share faces — `PaywallHero` is the site hero,
`OnboardingShadeHero` is the bento tile. The `brand/imagery/set` folder in the
app repo is **out of date**; don't use it. Icons derive from
`AppIcon.appiconset/AppIcon-Light.png`.

Screenshot dimensions are declared in `src/data/screens.ts` — keep them accurate
or the phone mockups stretch.

## Before the app goes live

- Set the real product URL in `src/config/site.ts` (`appStoreUrl`). Every CTA
  flips from the "Coming soon" pill to the real badge automatically.
- That badge needs `public/images/download-on-the-app-store.svg` — download the
  official artwork from Apple's marketing guidelines; it is not in the repo yet.
