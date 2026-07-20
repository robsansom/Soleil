# Soleil

The marketing site for [Soleil](https://getsoleilapp.com), a thoughtful sun
companion for iPhone and Apple Watch. It helps people understand current UV
conditions, keep an eye on their day outside, and build kinder sun routines.

This repository contains the public website only, not the iOS or watchOS app.

## Stack

- [Astro](https://astro.build) 5 for static pages and routing
- [Tailwind CSS](https://tailwindcss.com) 3 for styling
- GitHub Pages for deployment

## Run Locally

```bash
npm install
npm run dev
```

The local server prints its URL in the terminal. For a production build:

```bash
npm run build
npm run preview
```

## Project Map

| Path | Purpose |
| --- | --- |
| `src/components/` | Reusable page sections and visual UI |
| `src/components/pages/` | Page-level content composition |
| `src/pages/` | Routes, including guides, support, privacy and terms |
| `src/i18n/translations/` | Localised site copy |
| `src/data/` | Guides, FAQ and screen content |
| `src/config/site.ts` | App name, App Store destination and support contact |
| `public/` | Static images, crawler rules and the custom-domain CNAME |

## Deployment

Pushing to `main` runs the GitHub Pages workflow in
`.github/workflows/deploy.yml`. The live site uses the custom domain
`getsoleilapp.com`.

## Notes

Soleil is maintained as a private product project. The source, design and
brand assets in this repository are not licensed for reuse.
