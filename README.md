# Atelier d'Ailes

[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

Site vitrine de l'**Atelier d'Ailes**, atelier de révision et réparation de voiles de parapente et paramoteur basé en Seine-et-Marne (77).  
À retrouver sur www.atelier-d-ailes.fr

## 📋 Table des matières

- [Objectifs](#-objectifs)
- [Technologies utilisées](#-technologies-utilisées)
- [Performance](#-performance)
- [Installation et commandes](#-installation-et-commandes)
- [Structure du projet](#-structure-du-projet)
- [Déploiement](#-déploiement)
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

- **Astro 5** : framework de build statique
- **Astro Wind** : thème Astro
- **Tailwind CSS 3.4** : utility-first CSS
- **TypeScript 5** : typage et sécurité
- **Vercel** : déploiement et hosting
- **Keystatic** : CMS pour la gestion du contenu éditorial

## 📈 Performance

Les scores lighthouse seront mis à jour une fois le site publié.

## 🛠️ Installation et Commandes

**Prérequis :** Node.js `^20.x`

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

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
├── public/               # Fichiers statiques (images, robots.txt, etc.)
├── src/
│   ├── assets/           # Assets (images, styles, favicons)
│   ├── components/       # Composants Astro réutilisables
│   ├── constants/        # Constantes (heures et jours d'ouverture, date de création)
│   ├── cms/              # Contenu éditorial du site (Annonces et blocs conseils)
│   ├── layouts/          # Layouts de pages
│   ├── locales/          # Traduction des éléments statics du site
│   ├── pages/            # Pages statiques / routing automatique
│   ├── routes/           # Pages avec routing par langue
│   ├── utils/            # Utilitaires et helpers
│   └── config.yaml       # Configuration principale du site
├── astro.config.ts       # Configuration Astro
├── keystatic.config.tsx  # Configuration Keystatic
└── tailwind.config.js    # Configuration Tailwind CSS
```

## 🚢 Déploiement

Le site est automatiquement redéployé sur **www.atelier-d-ailes.fr** via Vercel à chaque merge sur `main`.

### 🚧 Mode Maintenance

Active une redirection globale vers la page `/maintenance` pour toutes les routes.

**Activation :**

1. Dans Vercel : `Settings > Environment Variables`
2. Modifier la variable d'environnement `PUBLIC_ENABLE_MAINTENANCE=true`
3. Redéployer

**Désactivation :**

1. Dans Vercel : `Settings > Environment Variables`
2. Modifier la variable d'environnement `PUBLIC_ENABLE_MAINTENANCE=false`
3. Redéployer

**Note :** C'est le `vercel.ts` qui gère la redirection vers `/maintenance` si `PUBLIC_ENABLE_MAINTENANCE=true`.

## 📝 CMS Keystatic

Le CMS Keystatic a été intégré pour la gestion du contenu éditorial du site :

- Les annonces
- Les blocs "Erreurs courantes à éviter" de la page Conseils

Le CMS est accessible en se rendant sur l'url suivant http://atelier-d-ailes.fr/keystatic et en se connectant via GitHub (seul ce présent compte y a accès).  
À la sauvegarde le nouveau contenu sera push sous forme de commit sur une branche `/cms` avant de pouvoir être validé et mergé sur main pour mettre à jour le site.

Le contenu éditorial est organisé par langue dans `src/cms`, chaque langue ayant sa propre version des annonces et des blocs conseils. On peut par exemple afficher uniquement une annonce pour la langue anglaise ou inversement. On pourrait également afficher des conseils différents selon la langue ou simplement les traduires.

```
├── src/
│   ├── cms/
│   │   ├── fr/
│   │   │   ├── guides/
│   │   │   │   ├── guide-1.yaml
│   │   │   │   ├── guide-2.yaml
│   │   │   │   ├── guide-2.yaml
│   │   │   ├── announcements/
│   │   │   │   ├── announcement-1.yaml
│   │   │   │   ├── announcement-2.yaml
│   │   │   │   ├── announcement-3.yaml
│   │   └── active-announcement.yaml
│   │   ├── en/
│   │   │   ├── guides/
│   │   │   │   ├── guide-1.yaml
│   │   │   │   ├── guide-2.yaml
│   │   │   │   ├── guide-2.yaml
│   │   │   ├── announcements/
│   │   │   │   ├── announcement-1.yaml
│   │   │   │   ├── announcement-2.yaml
│   │   │   │   ├── announcement-3.yaml
│   │   └── active-announcement.yaml
│   ...
└── keystatic.config.tsx     # Configuration Keystatic
```

### Annonces

Il est possible d'afficher un bandeau d'information en haut du site lié à une page de détail d'annonce, par exemple pour des fermetures exceptionnelles ou autres informations éphémères liées à l'atelier.
En accédant à Keystatic il vous suffira de configurer deux contenus :

- Annonce active : pour déterminer si on veut que l'annonce soit active ou non et choisir ensuite parmi les annonces existantes celle à afficher
- Les annonces : une collection d'annonces permettant d'ajouter ou de modifier une annonce

### Blocs Conseils

Les blocs sous "Erreurs courantes à éviter" de la page Conseil sont également éditables via la collection "Conseils" du CMS.

## 🌐 Internationalisation (i18n)

Le site prend en charge **plusieurs langues** (actuellement Français et Anglais) grâce à une configuration combinant :

- **i18next** : gestion des traductions et du contenu multilingue.
- **@astrolicious/i18n** : gestion du routing et de la navigation basée sur la langue.

Les textes statiques du site sont organisés par langue dans `src/locales/`.

`src/routes/` → contient les pages nécessitant un routing différent selon la langue.  
Exemple : `src/routes/conseils.astro` un seul fichier pour les deux langues mais avec des slugs différents selon la langue choisie :

- `fr` → `/conseils`
- `en` → `/en/guides`

La customisation des slugs des pages par langue se fait dans le `astro.config.ts`. La langue par défaut garde le nom du fichier astro comme slug, les autres langues peuvent elles être personnalisées via :

```ts
integrations: [
  i18n({
    pages: {
      '/conseils': {
        en: '/guides',
      },
    },
  }),
];
```

`src/pages/` → Pages uniques indépendantes de la langue choisie

- Page 404
- Page de maintenance

Ces pages sont traduites à partir de la langue du navigateur de l'utilisateur grâce à `Astro.preferredLocale`.
