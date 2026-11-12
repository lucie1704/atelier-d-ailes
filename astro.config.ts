import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
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
import { hasActiveAnnouncement } from './src/utils/announcement';
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
    i18nRoutes({
      // Without active announcement, `/annonce` is not generated and falls back to the 404 page
      skipOnBuild: (route, locale) => route === '/annonce' && !hasActiveAnnouncement(locale),
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
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
    }),
  },

  // Astro 7 defaults to 'jsx', keep the previous HTML whitespace handling
  compressHTML: true,

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
