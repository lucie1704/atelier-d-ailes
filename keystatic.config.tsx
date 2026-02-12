import { config, singleton, collection, fields } from '@keystatic/core';
import React from 'react';

const locales = {
  fr: { label: 'Français', announcement: 'Annonces', advice: 'Conseils', activeAnnouncement: 'Annonce active' },
  en: { label: 'Anglais', announcement: 'Announcements', advice: 'Advice', activeAnnouncement: 'Active announcement' },
} as const;

const announcementSchema = () => ({
  title: fields.slug({ name: { label: 'Title' } }),
  description: fields.mdx({ label: 'Description' }),
  image: fields.image({
    label: 'Image',
    directory: 'src/assets/images/announcement',
    publicPath: '/src/assets/images/announcement',
  }),
});

const adviceSchema = () => ({
  title: fields.slug({ name: { label: 'Title' } }),
  description: fields.mdx({ label: 'Description' }),
  image: fields.image({
    label: 'Image',
    directory: 'src/assets/images/advices',
    publicPath: '/src/assets/images/advices',
  }),
});

const collectionsConfig = {
  announcement: {
    schema: announcementSchema,
    path: 'announcements',
    getLabel: (locale: keyof typeof locales) => locales[locale].announcement,
  },
  advice: {
    schema: adviceSchema,
    path: 'advices',
    getLabel: (locale: keyof typeof locales) => locales[locale].advice,
  },
} as const;

const makeCollections = () =>
  Object.fromEntries(
    Object.entries(locales).flatMap(([locale]) =>
      Object.entries(collectionsConfig).map(([key, { schema, path, getLabel }]) => [
        `${locale}_${key}`,
        collection({
          label: getLabel(locale as keyof typeof locales),
          path: `src/content/${locale}/${path}/*`,
          format: { data: 'yaml' },
          slugField: 'title',
          schema: schema(),
        }),
      ])
    )
  );

const makeSingletons = () =>
  Object.fromEntries(
    Object.entries(locales).map(([locale, { activeAnnouncement }]) => [
      `${locale}_active_announcement`,
      singleton({
        label: activeAnnouncement,
        path: `src/content/${locale}/active-announcement`,
        format: { data: 'yaml' },
        schema: {
          active: fields.checkbox({
            label: 'Afficher une annonce',
            defaultValue: false,
          }),
          announcement: fields.relationship({
            label: 'Annonce active',
            description: "Sélectionner l'annonce à afficher",
            collection: `${locale}_announcement`,
          }),
        },
      }),
    ])
  );

export default config({
  ui: {
    brand: {
      name: "Atelier d'Ailes",
      mark: () => <img src="/src/assets/favicons/favicon.ico" height={24} alt="Atelier d'Ailes Logo" />,
    },
    navigation: {
      FR: ['fr_active_announcement', 'fr_announcement', 'fr_advice'],
      EN: ['en_active_announcement', 'en_announcement', 'en_advice'],
    },
  },

  storage: { kind: 'local' },

  singletons: {
    ...makeSingletons(),
  },

  collections: {
    ...makeCollections(),
  },
});
