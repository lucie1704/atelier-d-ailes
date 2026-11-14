import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import astrowind from './vendor/integration';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import { buildSitemapItem } from './src/utils/sitemap';
import { hasActiveAnnouncement } from './src/utils/announcement';
import i18nRoutes from './src/i18n/integration';
import { DEFAULT_LOCALE, LOCALES } from './src/constants/i18n';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const defaultLocale = DEFAULT_LOCALE;
const locales = [...LOCALES];

export default defineConfig({
  adapter: vercel(),

  integrations: [
    react(),
    keystatic(),
    sitemap({
      i18n: {
        defaultLocale: defaultLocale,
        locales: {
          fr: 'fr-FR',
          en: 'en-US',
        },
      },
      serialize: (item) => buildSitemapItem(item, 'https://www.atelier-d-ailes.fr'),
    }),
    icon({
      include: {
        lucide: ['*'],
        tabler: ['*'],
      },
    }),
    i18nRoutes({
      skipOnBuild: (route, locale) => route === '/annonce' && !hasActiveAnnouncement(locale),
    }),
    astrowind({
      config: './src/config.yaml',
    }),
  ],

  // Must match `astroCompressHTML` in .prettierrc.cjs
  compressHTML: true,

  // for Astro.preferredLocale for 404 and maintenance pages
  i18n: {
    defaultLocale: defaultLocale,
    locales: locales,
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
