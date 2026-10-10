# Soleil website — v5

The art-directed marketing site for **Soleil**, the iPhone and Apple Watch sun
companion (getsoleilapp.com). Astro 5, TypeScript, hand-written CSS, deployed as
static files to GitHub Pages.

This is a **new sibling repository**. `../Sunkind Website` remains the previous
production site and was used here as read-only source material: approved product
copy, five locales of legal and support text, the SEO guides, screenshots and
photography. Nothing in that repository was modified.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + static output to dist/
npm run preview    # serve the built site
```

## What is where

```
src/
  components/
    site/     Header, Footer, language selector, CTA, page hero, Soleil mark
    home/     One file per homepage scene, in page order
    art/      DeviceFrame (real screenshots), SunPathBackdrop, Mark set
    pages/    Index / Support / Privacy / Terms page compositions
  config/site.ts        App Store URL, support address — single source of truth
  data/
    guides/             The ten SEO guides (English only), as structured data
    homeFaq.ts          Homepage FAQ + FAQPage schema source (English only)
    screens.ts          Intrinsic screenshot dimensions
  i18n/
    types.ts            Schema. English is the shape of record.
    translations/<loc>/ site.ts (chrome) · legal.ts (ported) · home.ts (new)
  layouts/Base.astro    <head>, metadata, hreflang, JSON-LD, skip link
  pages/                Routes. `[locale]/` covers fr, es, de, ja.
  scripts/              motion, rail, tabs, badges, moments — all optional
  styles/               fonts.css · tokens.css · base.css (imported by global)
public/
  fonts/                Self-hosted woff2 (no third-party requests)
  images/               Real app screenshots, photography, icons
```

## Routes

`/` · `/support` · `/privacy` · `/terms`, each mirrored at `/fr|/es|/de|/ja`,
plus English-only `/guides/` and `/guides/[slug]`, `/sitemap.xml` and
`robots.txt`. New pages must be added to `src/pages/sitemap.xml.ts`.

## Replacing assets

- **Screenshots** live in `public/images`. Add the file, then add its real pixel
  dimensions to `src/data/screens.ts` or the device frames will stretch.
- **A designer-supplied hero render** can replace the framed screenshot in
  `src/components/art/DeviceFrame.astro` — see `ASSET_NEEDED.md` for the exact
  brief and dimensions of everything still outstanding.
- **Fonts** are self-hosted in `public/fonts` and declared in
  `src/styles/fonts.css`. If licensed Champ / Degular / Hello Organichand files
  arrive, drop them in and change the `--font-display`, `--font-body` and
  `--font-hand` tokens in `src/styles/tokens.css`. Nothing else needs to change.

## App Store

Soleil went live on 2026-10-10. The listing URL and app ID live in
`src/config/site.ts`. Every CTA links to the listing, and every page carries
Safari's Smart App Banner. Full-size CTAs show Apple's official localised badge
from `public/images/app-store/badge-<locale>.svg`; the header uses a short
"Download" button.

## Deployment

`.github/workflows/deploy.yml` builds on push to `main` and publishes to GitHub
Pages. `public/CNAME` holds the custom domain, so no `base` path is needed.

## House rules

Product copy is governed by `app.md` — live UV first, never time as permission,
never vitamin-D estimates from sunlight. `DESIGN_SYSTEM.md` covers colour roles,
type, motion and accessibility. `HANDOFF.md` lists what is finished, what is
still placeholder, and the factual conflicts found in the old repository.
