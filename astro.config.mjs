// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Hosted on GitHub Pages behind the custom domain getsoleil.com
// (see public/CNAME). Custom domain means no `base` path is needed.
export default defineConfig({
  site: 'https://getsoleil.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'de', 'ja'],
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
