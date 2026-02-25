import fr from '~/locales/fr/';
import en from '~/locales/en/';

const translations = { fr, en };

export const useTranslations = (locale: string | undefined) => {
  const lang = locale ?? 'fr';
  const dict = translations[lang];

  // Récupère une valeur depuis une clé pointée "home.title"
  const resolve = (key: string) => key.split('.').reduce((obj, k) => obj?.[k], dict);

  // Interpolate les variables {name}
  const interpolate = (value: string, vars: Record<string, string | number>) =>
    value.replace(/\{(\w+)}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : `{${k}}`));

  // Retourne la traduction d'une clé, avec interpolation optionnelle des variables
  const t = (key: string, vars?: Record<string, string | number>): string => {
    const value = resolve(key);

    if (value === undefined) {
      if (import.meta.env.DEV) {
        throw new Error(`[i18n] Clé manquante: "${key}" (${lang})`);
      }
      return key;
    }

    return (vars ? interpolate(value, vars) : value).trim();
  };

  // Retourne un tableau de traductions ou d'objets de traductions typé pour les listes
  const tr = <T>(key: string): T => resolve(key) as T;

  return { t, tr };
};
