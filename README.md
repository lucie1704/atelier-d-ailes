# Atelier d'Ailes

[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

Site vitrine de l'**Atelier d'Ailes**, atelier de révision et réparation de voiles de parapente et paramoteur basé en Seine-et-Marne (77).  
À retrouver sur www.atelier-d-ailes.fr

## 📋 Table des matières

- [Technologies utilisées](#-technologies-utilisées)
- [Objectifs](#-objectifs)
- [Performance](#-performance)
- [Installation et commandes](#-installation-et-commandes)
- [Structure du projet](#-structure-du-projet)
- [Déploiement](#-déploiement)
- [CMS Keystatic](#-cms-keystatic)
- [Internationalisation](#-internationalisation-i18n)

## 🎯 Objectifs

Ce site vitrine a été conçu pour répondre aux exigences suivantes :

- ✅ **Informations claires et organisées** - Présentation structurée des services et informations
- ✅ **Navigation fluide et rapide** - Optimisé pour desktop et mobile
- ✅ **Accessibilité irréprochable** - Accessible à tous les utilisateurs
- ✅ **SEO efficace** - Optimisé pour un bon référencement naturel
- ✅ **Projet léger et maintenable** - Simple à prendre en main, maintenir et déployer

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

# Prévisualiser le build de production
npm run preview

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
│   ├── content/          # Contenu éditorial du site (Annonces et blocs conseils)
│   ├── layouts/          # Layouts de pages
│   ├── locales/          # Traduction des éléments statics du site
│   ├── pages/            # Pages du site (routing automatique)
│   ├── utils/            # Utilitaires et helpers
│   └── config.yaml       # Configuration principale du site
├── astro.config.ts       # Configuration Astro
├── keystatic.config.tsx  # Configuration Keystatic
└── tailwind.config.js    # Configuration Tailwind CSS
```

**Note :** Astro génère automatiquement les routes à partir des fichiers dans `src/pages/`.

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

### 📝 CMS Keystatic

Le CMS Keystatic a été intégré pour la gestion du contenu éditorial du site : 
  - Les annonces
  - Les blocs "Erreurs courantes à éviter" de la page Conseil

Le CMS est accessible en se rendant sur l'url suivant http://atelier-d-ailes.fr/keystatic et en se connectant via GitHub (seul ce présent compte y a accès).  
À la sauvegarde le nouveau contenu sera push sous forme de commit sur une branche `/cms` avant de pouvoir être validé et mergé sur main pour mettre à jour le site. 

Le contenu éditorial est organisé par langue dans `src/content`, chaque langue ayant sa propre version des annonces et des blocs conseils. On peut par exemple afficher uniquement une annonce pour la langue anglaise ou inversement. On pourrait également afficher des conseils différents selon la langue ou simplement les traduires.  

```
├── src/
│   ├── content/
│   │   ├── fr/
│   │   │   ├── advices/
│   │   │   │   ├── advice-1.yaml
│   │   │   │   ├── advice-2.yaml
│   │   │   │   ├── advice-2.yaml
│   │   │   ├── announcements/
│   │   │   │   ├── announcement-1.yaml
│   │   │   │   ├── announcement-2.yaml
│   │   │   │   ├── announcement-3.yaml
│   │   └── active-announcement.yaml
│   │   ├── en/
│   │   │   ├── advices/
│   │   │   │   ├── advice-1.yaml
│   │   │   │   ├── advice-2.yaml
│   │   │   │   ├── advice-2.yaml
│   │   │   ├── announcements/
│   │   │   │   ├── announcement-1.yaml
│   │   │   │   ├── announcement-2.yaml
│   │   │   │   ├── announcement-3.yaml
│   │   └── active-announcement.yaml
│   ...
└── keystatic.config.tsx     # Configuration Keystatic
```

Le contenu Markdown est rendu via un composant `Markdown` utilisant la librairie `marked`.

### Annonces

Il est possible d'afficher un bandeau d'information en haut du site lié à une page de détail d'annonce, par exemple pour des fermetures exceptionnelles ou autres informations éphémères liées à l'atelier.
En accédant à Keystatic il vous suffira de configurer deux contenus : 
  - Active annonce : pour déterminer si on veut que l'annonce soit active ou non et choisir ensuite parmi les annonces existantes celle à afficher
  - Les annonces : une collection d'annonces permettant d'ajouter ou de modifier une annonce pour une future information exceptionnelle à transmettre

### Blocs Conseils

Les blocs sous "Erreurs courantes à éviter" de la page Conseil sont également éditables via la collection Conseils du CMS.

## 🌐 Internationalisation (i18n)

Le site est conçu pour supporter **plusieurs langues** (actuellement Français et Anglais) via une configuration i18n dans `src/utils/i18n.ts` 
- `t` permet de traduire 
- `tr` permet de traduire des listes depuis le yaml en retournant des tableaux typés

Le contenu static du site est donc disponibles par langue dans `src/locales`.
Le site se base sur la locale courante d'Astro `Astro.currentLocale` pour gérer la langue courante d'affichage pour les traductions et le contenus éditorial.
