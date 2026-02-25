import { config, singleton, collection, fields } from '@keystatic/core';
import React from 'react';

const announcementSchema = {
  title: fields.slug({ name: { label: 'Title' } }),
  description: fields.mdx.inline({ label: 'Description' }),
  image: fields.image({
    label: 'Image',
    directory: 'src/assets/images/announcement',
    publicPath: '/src/assets/images/announcement',
  }),
};

const adviceSchema = {
  title: fields.slug({ name: { label: 'Title' } }),
  description: fields.mdx.inline({ label: 'Description' }),
  image: fields.image({
    label: 'Image source',
    directory: 'src/assets/images/advices',
    publicPath: '/src/assets/images/advices',
  }),
  imageAlt: fields.text({ label: 'Image alt' }),
};

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
    fr_active_announcement: singleton({
      label: 'Annonce active',
      path: 'src/content/fr_active-announcement',
      format: { data: 'yaml' },
      schema: {
        active: fields.checkbox({ label: 'Afficher une annonce', defaultValue: false }),
        announcement: fields.relationship({
          label: 'Annonce active',
          description: "Sélectionner l'annonce à afficher",
          collection: 'fr_announcement',
        }),
      },
    }),
    en_active_announcement: singleton({
      label: 'Active announcement',
      path: 'src/content/en_active-announcement',
      format: { data: 'yaml' },
      schema: {
        active: fields.checkbox({ label: 'Afficher une annonce', defaultValue: false }),
        announcement: fields.relationship({
          label: 'Active announcement',
          description: 'Select the announcement to display',
          collection: 'en_announcement',
        }),
      },
    }),
  },

  collections: {
    fr_announcement: collection({
      label: 'Annonces',
      path: 'src/content/fr_announcements/*',
      format: { data: 'yaml' },
      slugField: 'title',
      schema: announcementSchema,
    }),
    en_announcement: collection({
      label: 'Announcements',
      path: 'src/content/en_announcements/*',
      format: { data: 'yaml' },
      slugField: 'title',
      schema: announcementSchema,
    }),
    fr_advice: collection({
      label: 'Conseils',
      path: 'src/content/fr_advices/*',
      format: { data: 'yaml' },
      slugField: 'title',
      schema: adviceSchema,
    }),
    en_advice: collection({
      label: 'Advice',
      path: 'src/content/en_advices/*',
      format: { data: 'yaml' },
      slugField: 'title',
      schema: adviceSchema,
    }),
  },
});
