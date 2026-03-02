import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import astrowind from './vendor/integration';
import keystatic from '@keystatic/astro';
import i18n from '@astrolicious/i18n';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import type { AstroIntegration } from 'astro';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

const defaultLocale = 'fr';
const locales = ['fr', 'en'];

export default defineConfig({
  adapter: vercel(),

  integrations: [
    react(),
    keystatic(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: defaultLocale,
        locales: {
          fr: 'fr-FR',
          en: 'en-US',
        },
      },
    }),
    mdx(),
    icon({
      include: {
        lucide: ['*'],
        tabler: ['*'],
      },
    }),
    i18n({
      defaultLocale: defaultLocale,
      locales: locales,
      pages: {
        '/annonce': {
          en: '/announcement',
        },
        '/conseils': {
          en: '/guides',
        },
        'les-services-de-l-atelier': {
          en: '/our-services',
        },
        '/mentions-legales': {
          en: '/legal',
        },
        '/tarifs': {
          en: '/pricing',
        },
      },
      client: {
        data: true,
        paths: true,
      },
    }),
    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
          collapseWhitespace: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    astrowind({
      config: './src/config.yaml',
    }),
  ],

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  // for Astro.preferredLocale for 404 and maintenance pages
  i18n: {
    defaultLocale: defaultLocale,
    locales: locales,
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
