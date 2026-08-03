import { getRelativeLocaleUrl } from 'astro:i18n';
import { ui, defaultLang, type Locale } from './ui';
import type { Translation } from './types';

export function useTranslations(lang: string | undefined): Translation {
  return ui[toLocale(lang)];
}

export function toLocale(lang: string | undefined): Locale {
  return lang && lang in ui ? (lang as Locale) : defaultLang;
}

/** Static paths for the four prefixed locales (`en` lives at the root). */
export function getLocalePaths() {
  return [
    { params: { locale: 'fr' } },
    { params: { locale: 'es' } },
    { params: { locale: 'de' } },
    { params: { locale: 'ja' } },
  ];
}

/** Same page, different locale — used by the language selector. */
export function getLocalizedPath(locale: string, pathname: string) {
  let cleanPath = pathname.replace(/^\/(fr|es|de|ja)(\/|$)/, '/');
  if (!cleanPath.startsWith('/')) cleanPath = `/${cleanPath}`;
  return getRelativeLocaleUrl(locale, cleanPath);
}

/** A path in the current locale, e.g. localePath('fr', '/support'). */
export function localePath(locale: string, path: string) {
  return getRelativeLocaleUrl(locale, path);
}

export function localeHash(locale: string, path: string, hash: string) {
  const base = localePath(locale, path);
  const normalized = base.endsWith('/') ? base : `${base}/`;
  return `${normalized}${hash.startsWith('#') ? hash : `#${hash}`}`;
}
