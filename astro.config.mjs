// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages behind the custom domain getsoleilapp.com
// (see public/CNAME). A custom domain means no `base` path is needed.
export default defineConfig({
  site: 'https://getsoleilapp.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'de', 'ja'],
  },
  build: {
    // One stylesheet beats a waterfall of tiny scoped files for a site
    // this size, and keeps the first paint free of extra round trips.
    inlineStylesheets: 'auto',
  },
});
