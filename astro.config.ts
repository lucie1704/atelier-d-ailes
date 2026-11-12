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
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import type { AstroIntegration } from 'astro';
import { buildSitemapItem } from './src/utils/sitemap';
import i18nRoutes from './src/i18n/integration';
import { DEFAULT_LOCALE, LOCALES } from './src/constants/i18n';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

const defaultLocale = DEFAULT_LOCALE;
const locales = [...LOCALES];

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
      serialize: (item) => buildSitemapItem(item, 'https://www.atelier-d-ailes.fr'),
    }),
    mdx(),
    icon({
      include: {
        lucide: ['*'],
        tabler: ['*'],
      },
    }),
    i18nRoutes(),
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
