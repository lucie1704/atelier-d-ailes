import { config, singleton, collection, fields } from '@keystatic/core';
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
  image: fields.image({
    label: 'Content image',
    directory: 'src/assets/images/announcements',
    publicPath: '/src/assets/images/announcements',
  }),
  imageAlt: fields.text({ label: 'Content image alt' }),
};

const guidesSchema = {
  title: fields.slug({ name: { label: 'Title' } }),
  description: fields.mdx.inline({ label: 'Description' }),
  image: fields.image({
    label: 'Image source',
    directory: 'src/assets/images/guides',
    publicPath: '/src/assets/images/guides',
  }),
  imageAlt: fields.text({ label: 'Image alt' }),
};

export default config({
  ui: {
    brand: {
      name: SITE.name,
      mark: () => <img src="/favicon.ico" height={24} alt="Atelier d'Ailes Logo" />,
    },
    navigation: {
      FR: ['fr_active_announcement', 'fr_announcement', 'fr_guide'],
      EN: ['en_active_announcement', 'en_announcement', 'en_guide'],
    },
  },

  storage: storage,

  singletons: {
    fr_active_announcement: singleton({
      label: 'Annonce active',
      path: 'src/cms/fr/active-announcement',
      format: { data: 'json' },
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
      path: 'src/cms/en/active-announcement',
      format: { data: 'json' },
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
      path: 'src/cms/fr/announcements/*',
      format: { data: 'json' },
      slugField: 'title',
      schema: announcementSchema,
    }),
    en_announcement: collection({
      label: 'Announcements',
      path: 'src/cms/en/announcements/*',
      format: { data: 'json' },
      slugField: 'title',
      schema: announcementSchema,
    }),
    fr_guide: collection({
      label: 'Conseils',
      path: 'src/cms/fr/guides/*',
      format: { data: 'json' },
      slugField: 'title',
      schema: guidesSchema,
    }),
    en_guide: collection({
      label: 'Guides',
      path: 'src/cms/en/guides/*',
      format: { data: 'json' },
      slugField: 'title',
      schema: guidesSchema,
    }),
  },
});
