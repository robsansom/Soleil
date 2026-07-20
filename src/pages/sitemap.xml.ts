import type { APIRoute } from 'astro';
import { guides } from '../data/guides';

const BASE = 'https://getsoleilapp.com';

// Locale homepages + legal pages exist for every locale; guides are
// English-only. hreflang alternates keep Google from treating the
// locale homepages as duplicates.
const locales = ['', 'fr', 'es', 'de', 'ja'];

export const GET: APIRoute = () => {
  const urls: string[] = [];

  const localePages = ['', 'support', 'privacy', 'terms'];
  for (const page of localePages) {
    for (const locale of locales) {
      const path = ['', locale, page].filter(Boolean).join('/');
      urls.push(`${BASE}/${path}${path ? '/' : ''}`.replace(/\/+$/, path ? '/' : '/'));
    }
  }

  urls.push(`${BASE}/guides/`);
  for (const g of guides) urls.push(`${BASE}/guides/${g.slug}`);

  const unique = [...new Set(urls)];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique.map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
