import { DEFAULT_LOCALE, LOCALES, ROUTES, pages, type Locale } from '../constants/i18n';

const normalize = (path: string) => (path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path);

/** `/tarifs` + `en` → `/en/pricing` */
export const localizePath = (path: string, locale: Locale): string => {
  if (locale === DEFAULT_LOCALE) return path;
  return `/${locale}${pages[path]?.[locale] ?? path}`;
};

/** `/en/pricing` → `en` */
export const getLocaleFromPathname = (pathname: string): Locale =>
  LOCALES.find((locale) => locale !== DEFAULT_LOCALE && pathname.startsWith(`/${locale}`)) ?? DEFAULT_LOCALE;

/** `/en/pricing` → `/tarifs`, falls back to `/` for pages outside `src/routes` (404, maintenance...) */
export const getRouteFromPathname = (pathname: string, locale: Locale): string =>
  ROUTES.find((route) => normalize(localizePath(route, locale)) === normalize(pathname)) ?? '/';

/** `tarifs.astro` → `/tarifs`, `index.astro` → `/` */
export const getRouteFromFile = (file: string): string => {
  const route = `/${file.replace(/\\/g, '/').replace(/\.astro$/, '')}`.replace(/\/index$/, '');
  return route || '/';
};
