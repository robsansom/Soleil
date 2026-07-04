import { ui, defaultLang } from './ui';
import { getRelativeLocaleUrl } from 'astro:i18n';

export function useTranslations(lang: string | undefined) {
  const locale = (lang && lang in ui ? lang : defaultLang) as keyof typeof ui;
  return ui[locale];
}

export function getLocalePaths() {
  return [
    { params: { locale: 'fr' } },
    { params: { locale: 'es' } },
    { params: { locale: 'de' } },
    { params: { locale: 'ja' } },
  ];
}

export function getLocalizedPath(locale: string, pathname: string) {
  // Strip any existing locale prefix from the pathname
  // e.g. /fr/support -> /support, /ja/ -> /, / -> /
  let cleanPath = pathname;
  
  // If the pathname includes a base URL, strip it first, clean the path, then re-apply it.
  // In our case, the config site: 'https://getfindlater.com' is hosted behind custom domain, so base is '/' (no prefix).
  const localePattern = /^\/(fr|es|de|ja)(\/|$)/;
  if (localePattern.test(cleanPath)) {
    cleanPath = cleanPath.replace(localePattern, '/');
  }

  // Ensure clean path doesn't result in empty string
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }

  // Astro's getRelativeLocaleUrl will generate the correct localized path:
  // e.g., getRelativeLocaleUrl('fr', '/support') -> '/fr/support'
  // getRelativeLocaleUrl('en', '/support') -> '/support' (since en is default and prefixDefaultLocale is false)
  return getRelativeLocaleUrl(locale, cleanPath);
}

export function getLocalizedHashPath(locale: string, pathname: string, hash: string) {
  const localizedPath = getLocalizedPath(locale, pathname);
  const normalizedPath = localizedPath.endsWith('/')
    ? localizedPath
    : `${localizedPath}/`;
  const normalizedHash = hash.startsWith('#') ? hash : `#${hash}`;
  return `${normalizedPath}${normalizedHash}`;
}
