import type { SitemapItem } from '@astrojs/sitemap';
import { pages } from '../constants/i18n';

const excludedPages = ['/maintenance/', '/annonce/', '/en/announcement/'];

const basePageMap: Record<string, { fr: string; en: string }> = {
  '/': { fr: '/', en: '/en/' },
  '/en/': { fr: '/', en: '/en/' },
};

const pageMap = Object.entries(pages).reduce((acc, [frPath, { en: enPath }]) => {
  const fr = `${frPath}/`;
  const en = `/en${enPath}/`;

  acc[fr] = { fr, en };
  acc[en] = { fr, en };

  return acc;
}, basePageMap);

export const buildSitemapItem = (item: SitemapItem, base: string): SitemapItem | undefined => {
  const path = item.url.replace(base, '');

  if (excludedPages.includes(path)) return undefined;

  if (pageMap[path]) {
    item.links = [
      { lang: 'fr-FR', url: `${base}${pageMap[path].fr}` },
      { lang: 'en-US', url: `${base}${pageMap[path].en}` },
    ];
  }

  return item;
};
