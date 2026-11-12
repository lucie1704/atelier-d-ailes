export const DEFAULT_LOCALE = 'fr';
export const LOCALES = ['fr', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

// Translated paths, keyed by the default locale path (= file name in `src/routes`)
export const pages: Record<string, Partial<Record<Locale, string>>> = {
  '/annonce': { en: '/announcement' },
  '/conseils': { en: '/guides' },
  '/les-services-de-l-atelier': { en: '/our-services' },
  '/mentions-legales': { en: '/legal' },
  '/tarifs': { en: '/pricing' },
  '/contact': { en: '/contact' },
};

// Every page of `src/routes`, in its default locale path
export const ROUTES = ['/', ...Object.keys(pages)];
