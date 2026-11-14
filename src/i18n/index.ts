import { AsyncLocalStorage } from 'node:async_hooks';
import i18next, { type i18n, type Resource } from 'i18next';
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../constants/i18n';
import { getLocaleFromPathname, getRouteFromPathname, localizePath } from './paths';

export type { Locale };

interface I18nContext {
  locale: Locale;
  pathname: string;
}

const storage = new AsyncLocalStorage<I18nContext>();

export const runWithI18n = <T>(pathname: string, fn: () => T): T =>
  storage.run({ locale: getLocaleFromPathname(pathname), pathname }, fn);

const getContext = (): I18nContext => {
  const context = storage.getStore();
  if (!context) throw new Error('i18n helpers can only be used while rendering a page');
  return context;
};

const files = import.meta.glob<Record<string, unknown>>('/src/locales/*/*.json', { eager: true, import: 'default' });

const resources: Resource = {};
for (const [file, content] of Object.entries(files)) {
  const [, locale, namespace] = file.match(/\/locales\/([^/]+)\/([^/]+)\.json$/)!;
  resources[locale] = { ...resources[locale], [namespace]: content };
}

const instances = Object.fromEntries(
  LOCALES.map((locale) => {
    const instance = i18next.createInstance();
    instance.init({
      lng: locale,
      resources,
      defaultNS: 'common',
      ns: Object.keys(resources[DEFAULT_LOCALE] ?? {}),
      initAsync: false,
    });
    return [locale, instance];
  })
) as Record<Locale, i18n>;

export const getLocale = (): Locale => getContext().locale;

export const t = ((...args: unknown[]) =>
  (instances[getLocale()].t as (...args: unknown[]) => unknown)(...args)) as typeof i18next.t;

export const getLocalePath = (path: string, locale: Locale = getLocale()): string => localizePath(path, locale);

export const switchLocalePath = (locale: Locale): string => {
  const { locale: currentLocale, pathname } = getContext();
  return localizePath(getRouteFromPathname(pathname, currentLocale), locale);
};

export const getSwitcherData = () => LOCALES.map((locale) => ({ locale, href: switchLocalePath(locale) }));
