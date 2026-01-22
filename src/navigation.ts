import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: "Les services de l'atelier",
      href: getPermalink('/services'),
    },
    {
      text: 'Conseils',
      href: getPermalink('/advices'),
    },
    {
      text: 'Tarifs',
      href: getPermalink('/pricing'),
    },
  ],
  actions: [
    {
      text: 'Me contacter',
      href: getPermalink('/contact'),
    },
  ],
};
