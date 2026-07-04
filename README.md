# Soleil — Marketing Site

Landing page for [Soleil](https://getsoleil.com), the calm, personal sun
companion for iPhone and Apple Watch. Static site built with
[Astro](https://astro.build) + Tailwind, deployed to GitHub Pages behind
the custom domain `getsoleil.com`.

## Stack

- **Astro 5** — static output, file-based routing, built-in i18n
- **Tailwind 3** — design tokens live in `tailwind.config.mjs` (`sun.*`)
- **GitHub Pages** — deployed by `.github/workflows/deploy.yml` on push to `main`

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # serve the production build
```

## Structure

| Path | What lives there |
| --- | --- |
| `src/config/site.ts` | App Store URL, support email, app name — single source of truth |
| `src/i18n/translations/` | Full page copy per locale (`en`, `fr`, `es`, `de`, `ja`) |
| `src/components/` | Hero, Showcase, PhotoMoment, BentoGrid, PartOfIphone, chrome |
| `src/components/pages/` | Index, Support, Privacy, Terms page bodies |
| `src/pages/` | Route shells (default locale at `/`, others at `/{locale}/`) |
| `public/images/` | Photography, app screenshots, icons, social card |

## Conventions

- The page uses a scroll-triggered global theme inversion: dark (pre-dawn)
  at the top, flipping to warm cream when `#theme-sentinel` (inside
  `PhotoMoment`) crosses the viewport midline.
- The App Store badge renders as a "Coming soon" pill until
  `site.appStoreUrl` in `src/config/site.ts` is set to a real
  `https://apps.apple.com/...` URL — then every CTA goes live at once.
- Photography is shared with the app repo (`Sunkind/brand/imagery/`);
  sourcing and licences are documented there in `LICENSES.md`.
- The website never leads the app: only shipped features appear here.
