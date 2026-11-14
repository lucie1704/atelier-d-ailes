# Atelier d'ailes

[![Astro](https://img.shields.io/badge/Astro-7-FF5D01?logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-24-5FA04E?logo=nodedotjs)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

Site vitrine de l'**Atelier d'ailes**, atelier de révision et réparation de voiles de parapente et paramoteur basé en Seine-et-Marne (77).  
À retrouver sur www.atelier-d-ailes.fr

## 📋 Table des matières

- [Objectifs](#-objectifs)
- [Technologies utilisées](#-technologies-utilisées)
- [Performance](#-performance)
- [Installation et commandes](#-installation-et-commandes)
- [Structure du projet](#-structure-du-projet)
- [Déploiement](#-déploiement)
- [Feature flags](#-feature-flags)
- [CMS Keystatic](#-cms-keystatic)
- [Internationalisation](#-internationalisation-i18n)

## 🎯 Objectifs

Ce site vitrine a été conçu pour répondre aux exigences suivantes :

- ✅ **Informations claires et organisées**
- ✅ **Navigation fluide et rapide** pour desktop et mobile
- ✅ **Accessibilité** pour tous les utilisateurs
- ✅ **SEO efficace** pour un bon référencement naturel
- ✅ **Projet maintenable**, simple à prendre en main, maintenir et déployer

## 🛠️ Technologies utilisées

- **Astro 7** : framework de build, pages statiques + quelques routes rendues côté serveur (404, maintenance, Keystatic)
- **Astro Wind** : thème Astro d'origine (son intégration de configuration vit dans `vendor/integration`)
- **Tailwind CSS 4** : utility-first CSS, configuré directement en CSS dans `src/assets/styles/tailwind.css`
- **TypeScript 5** : typage et sécurité
- **i18next** : traductions, avec une petite intégration maison pour le routing par langue
- **Keystatic** : CMS pour la gestion du contenu éditorial
- **Vercel** : déploiement, hosting, Analytics et Speed Insights

## 📈 Performance

#### Scores Lighthouse :

![Lighthouse Scores.png](src/assets/images/Lighthouse%20Scores.png)

## 🛠️ Installation et Commandes

**Prérequis :** Node.js `24.x`

```bash
# Utiliser la bonne version de Node.js
nvm use

# Installer les dépendances
npm install

# Démarrer le serveur de développement (tourne en arrière-plan avec Astro 7)
npm run dev

# Arrêter le serveur de développement
npx astro dev stop

# Construire pour la production
npm run build

# Vérifier le code (Astro, ESLint, Prettier)
npm run check

# Corriger automatiquement les erreurs de formatage
npm run fix
```

## 📁 Structure du projet

```
/
├── public/               # Fichiers statiques (robots.txt, etc.)
├── src/
│   ├── assets/           # Assets (images, styles, favicons)
│   ├── cms/              # Contenu éditorial du site (annonces et blocs conseils)
│   ├── components/       # Composants Astro réutilisables
│   ├── constants/        # Constantes (horaires, contact, langues et slugs traduits)
│   ├── i18n/             # Intégration i18n maison (routing par langue, helpers de traduction)
│   ├── layouts/          # Layouts de pages
│   ├── locales/          # Traductions des éléments statiques du site
│   ├── pages/            # Pages hors routing par langue (404, maintenance)
│   ├── routes/           # Pages avec routing par langue
│   ├── utils/            # Utilitaires et helpers
│   ├── middleware.ts     # Langue de la requête + correctif OAuth Keystatic
│   └── config.yaml       # Configuration principale du site
├── vendor/integration/   # Intégration Astro Wind (lecture de config.yaml)
├── astro.config.ts       # Configuration Astro
├── keystatic.config.tsx  # Configuration Keystatic
├── vercel.ts             # Configuration Vercel (headers, mode maintenance)
└── .nvmrc                # Version de Node.js
```

## 🚢 Déploiement

Le site est automatiquement redéployé sur **www.atelier-d-ailes.fr** via Vercel à chaque push sur `main`. Chaque branche poussée a aussi son déploiement de preview.

## 🚩 Feature flags

| Fonctionnalité               | Effet                                                                                                                                          | Activer / désactiver                                                                                                                                                             |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mode maintenance**         | Redirige toutes les pages vers `/maintenance`                                                                                                  | Vercel → `Settings > Environment Variables` : `PUBLIC_ENABLE_MAINTENANCE=true` (ou `false`), puis redéployer                                                                     |
| **Bandeau d'information**    | Affiche un bandeau en haut du site, lié à une page d'annonce (`/annonce`, `/en/announcement`)                                                  | Keystatic → **Annonce active** de la langue : cocher « Afficher une annonce » et choisir l'annonce, puis merger le commit `cms/...`                                              |
| **Fermeture exceptionnelle** | Le statut de l'atelier (footer) affiche « Fermeture estivale » au lieu de Ouvert / Fermé, du premier jour jusqu'au dernier jour inclus (23h59) | `src/constants/shop.ts` : `SPECIAL_CLOSURE_START` et `SPECIAL_CLOSURE_END` au format `AAAA-MM-JJ`. Le libellé se modifie dans `src/locales/*/common.json` (`shopStatus.closure`) |

Les annonces se créent dans la collection **Annonces** de Keystatic, séparément pour chaque langue.

## 📝 CMS Keystatic

Le CMS Keystatic a été intégré pour la gestion du contenu éditorial du site :

- Les annonces
- Les blocs "Erreurs courantes à éviter" de la page Conseils

Le CMS est accessible en se rendant sur l'url suivant https://www.atelier-d-ailes.fr/keystatic et en se connectant via GitHub (seul le compte [@lucie1704](https://github.com/lucie1704) y a accès).  
À la sauvegarde le nouveau contenu sera push sous forme de commit sur une branche `cms/...` avant de pouvoir être validé et mergé sur main pour mettre à jour le site.

En local (`npm run dev`), Keystatic enregistre directement dans les fichiers du projet, sans passer par GitHub.

Le contenu éditorial est organisé par langue dans `src/cms`, chaque langue ayant sa propre version des annonces et des blocs conseils. On peut par exemple afficher uniquement une annonce pour la langue anglaise ou inversement. On pourrait également afficher des conseils différents selon la langue ou simplement les traduire.

```
├── src/
│   ├── cms/
│   │   ├── fr/
│   │   │   ├── active-announcement.json
│   │   │   ├── announcements/
│   │   │   │   └── fermeture-de-l-atelier.json
│   │   │   └── guides/
│   │   │       ├── drisses-de-freins-bobinees.json
│   │   │       └── ...
│   │   └── en/
│   │       ├── active-announcement.json
│   │       ├── announcements/
│   │       │   └── summer-closure.json
│   │       └── guides/
│   │           └── ...
│   ...
└── keystatic.config.tsx     # Configuration Keystatic
```

### Blocs Conseils

Les blocs sous "Erreurs courantes à éviter" de la page Conseil sont également éditables via la collection "Conseils" du CMS.

## 🌐 Internationalisation (i18n)

Le site prend en charge **plusieurs langues** (actuellement Français et Anglais) grâce à :

- **i18next** : gestion des traductions et du contenu multilingue
- **une intégration maison** (`src/i18n/`) : routing par langue avec des slugs traduits, sans dépendance externe

Les textes statiques du site sont organisés par langue dans `src/locales/`.

### Routing par langue

`src/routes/` → contient les pages nécessitant un routing différent selon la langue. Chaque fichier est injecté une fois par langue.  
Exemple : `src/routes/conseils.astro` un seul fichier pour les deux langues mais avec des slugs différents selon la langue choisie :

- `fr` → `/conseils`
- `en` → `/en/guides`

Les langues et les slugs traduits se déclarent dans `src/constants/i18n.ts`. La langue par défaut garde le nom du fichier astro comme slug, les autres langues peuvent être personnalisées :

```ts
export const pages: Record<string, Partial<Record<Locale, string>>> = {
  '/conseils': { en: '/guides' },
  '/tarifs': { en: '/pricing' },
};
```

Toute page ajoutée dans `src/routes/` doit figurer dans `pages`, sinon le build échoue avec un message explicite.

### Pages hors routing

`src/pages/` → Pages uniques indépendantes de la langue choisie

- Page 404 : en anglais pour les URL `/en/...`, sinon selon la langue du navigateur (`Astro.preferredLocale`)
- Page de maintenance : selon la langue du navigateur
