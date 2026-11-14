import type common from '../locales/fr/common.json';
import type contact from '../locales/fr/contact.json';
import type error from '../locales/fr/error.json';
import type guides from '../locales/fr/guides.json';
import type home from '../locales/fr/home.json';
import type legal from '../locales/fr/legal.json';
import type maintenance from '../locales/fr/maintenance.json';
import type pricing from '../locales/fr/pricing.json';
import type services from '../locales/fr/services.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      contact: typeof contact;
      error: typeof error;
      guides: typeof guides;
      home: typeof home;
      legal: typeof legal;
      maintenance: typeof maintenance;
      pricing: typeof pricing;
      services: typeof services;
    };
  }
}
