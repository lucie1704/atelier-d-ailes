import { getPermalink } from '~/utils/permalinks';
import { useTranslations } from '~/utils/i18n';

export const getHeaderData = (locale: string | undefined) => {
  const { t } = useTranslations(locale);

  return {
    links: [
      { text: t('layout.header.links.home'), href: getPermalink('/') },
      { text: t('layout.header.links.services'), href: getPermalink('/services') },
      { text: t('layout.header.links.advices'), href: getPermalink('/advices') },
      { text: t('layout.header.links.pricing'), href: getPermalink('/pricing') },
    ],
    actions: [{ text: t('layout.header.actions.contact'), href: getPermalink('/contact') }],
  };
};
