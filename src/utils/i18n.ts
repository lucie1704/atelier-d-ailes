import fr from '~/locales/fr/';
import en from '~/locales/en/';

const translations = { fr, en };

export function useTranslations(locale: string | undefined) {
  const lang = locale ?? 'fr';
  const dict = translations[lang];

  function t(key: string, vars?: Record<string, string | number>): string {
    const value = key.split('.').reduce((obj, k) => obj?.[k], dict) ?? key;
    const result = vars ? value.replace(/\{(\w+)\}/g, (_, k) => String(vars[k]) ?? `{${k}}`) : value;
    return result.trim().replace(/\n/g, '<br>');
  }

  function tr<T>(key: string): T {
    return key.split('.').reduce((obj, k) => obj?.[k], dict) as T;
  }

  return { t, tr };
}
