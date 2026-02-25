import { config, singleton, collection, fields } from '@keystatic/core';
import React from 'react';
import { SITE } from 'astrowind:config';

const storage = import.meta.env.DEV
  ? ({ kind: 'local' } as const)
  : ({
      kind: 'github',
      repo: 'lucie1704/atelier-d-ailes',
      branchPrefix: 'cms/',
    } as const);

const announcementSchema = {
  message: fields.text({ label: 'Message' }),
  tagline: fields.text({ label: 'Tagline' }),
  title: fields.slug({ name: { label: 'Title' } }),
  subtitle: fields.text({ label: 'Subtitle' }),
  contentTitle: fields.text({ label: 'Content title' }),
  contentDescription: fields.mdx.inline({ label: 'Content description' }),
  contentImage: fields.image({
    label: 'Content image',
    directory: 'src/assets/images/announcement',
    publicPath: '/src/assets/images/announcement',
  }),
  contentImageAlt: fields.text({ label: 'Content image alt' }),
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
      name: SITE.name,
      mark: () => <img src="/src/assets/favicons/favicon.ico" height={24} alt="Atelier d'Ailes Logo" />,
    },
    navigation: {
      FR: ['fr_active_announcement', 'fr_announcement', 'fr_advice'],
      EN: ['en_active_announcement', 'en_announcement', 'en_advice'],
    },
  },

  storage: storage,

  singletons: {
    fr_active_announcement: singleton({
      label: 'Annonce active',
      path: 'src/content/fr/active-announcement',
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
      path: 'src/content/en/active-announcement',
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
      path: 'src/content/fr/announcements/*',
      format: { data: 'yaml' },
      slugField: 'title',
      schema: announcementSchema,
    }),
    en_announcement: collection({
      label: 'Announcements',
      path: 'src/content/en/announcements/*',
      format: { data: 'yaml' },
      slugField: 'title',
      schema: announcementSchema,
    }),
    fr_advice: collection({
      label: 'Conseils',
      path: 'src/content/fr/advices/*',
      format: { data: 'yaml' },
      slugField: 'title',
      schema: adviceSchema,
    }),
    en_advice: collection({
      label: 'Advice',
      path: 'src/content/en/advices/*',
      format: { data: 'yaml' },
      slugField: 'title',
      schema: adviceSchema,
    }),
  },
});
