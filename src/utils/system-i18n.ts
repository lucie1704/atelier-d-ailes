import errorFr from '~/locales/fr/error.json';
import errorEn from '~/locales/en/error.json';

import maintenanceFr from '~/locales/fr/maintenance.json';
import maintenanceEn from '~/locales/en/maintenance.json';

const translations = {
  fr: {
    error: errorFr,
    maintenance: maintenanceFr,
  },
  en: {
    error: errorEn,
    maintenance: maintenanceEn,
  },
};

export function getSystemTranslator(locale: string | undefined, namespace: 'error' | 'maintenance') {
  const safeLocale = (locale && locale in translations ? locale : 'fr') as 'fr' | 'en';
  const dict = translations[safeLocale][namespace];

  return function t(key: string): string {
    const result = key.split('.').reduce<unknown>((obj, k) => (obj as Record<string, unknown>)?.[k], dict);
    return typeof result === 'string' ? result : key;
  };
}
