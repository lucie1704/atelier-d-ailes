# Atelier d'Ailes

[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

Site vitrine de l'**Atelier d'Ailes**, atelier de révision et réparation de voiles de parapente et paramoteur basé en Seine-et-Marne (77).  
À retrouver sur www.atelier-d-ailes.fr

## 📋 Table des matières

- [Objectifs](#-objectifs)
- [Performance](#-performance)
- [Installation et commandes](#-installation-et-commandes)
- [Structure du projet](#-structure-du-projet)
- [Déploiement](#-déploiement)
- [Ressources](#-ressources)

## 🎯 Objectifs

Ce site vitrine a été conçu pour répondre aux exigences suivantes :

- ✅ **Informations claires et organisées** - Présentation structurée des services et informations
- ✅ **Navigation fluide et rapide** - Optimisé pour desktop et mobile
- ✅ **Accessibilité irréprochable** - Accessible à tous les utilisateurs
- ✅ **SEO efficace** - Optimisé pour un bon référencement naturel
- ✅ **Projet léger et maintenable** - Simple à prendre en main, maintenir et déployer

## 📈 Performance

Les scores lighthouse seront mis à jour une fois le site publié.

## 🛠️ Installation et Commandes

**Prérequis :** Node.js `^18.17.1 || ^20.3.0 || >= 21.0.0`

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
├── public/             # Fichiers statiques (images, robots.txt, etc.)
├── scripts/            # Scripts (prebuild)
├── src/
│   ├── assets/         # Assets (images, styles, favicons)
│   ├── components/     # Composants Astro réutilisables
│   ├── constants/      # Constantes (heures et jours d'ouverture, date de création)
│   ├── content/        # Contenu de pages qui sont vouées à être modifiées
│   ├── layouts/        # Layouts de pages
│   ├── pages/          # Pages du site (routing automatique)
│   ├── utils/          # Utilitaires et helpers
│   └── config.yaml     # Configuration principale du site
├── astro.config.ts     # Configuration Astro
└── tailwind.config.js  # Configuration Tailwind CSS
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

**Note :** C'est le `vercel.json` qui gère la redirection vers `/maintenance` si `PUBLIC_ENABLE_MAINTENANCE=true`.  
Ce fichier est généré dynamiquement lors du build en fonction de la variable d'environnement.

### 📢 Bandeau d'Annonce

Il est possible d'afficher un bandeau d'information en haut du site, par exemple pour des fermetures exceptionnelles ou autres informations éphémères liées à l'atelier.
Pour configurer les détails de l'annonce, modifier, le fichier `src/content/announcement.json` et mettre à jour la variable d'environnement `PUBLIC_ENABLE_ANNOUNCEMENT`.

**Activation :**

1. Dans Vercel : `Settings > Environment Variables`
2. Modifier la variable d'environnement `PUBLIC_ENABLE_ANNOUNCEMENT=true`
3. Redéployer

**Désactivation :**

1. Dans Vercel : `Settings > Environment Variables`
2. Modifier la variable d'environnement `PUBLIC_ENABLE_ANNOUNCEMENT=false`
3. Redéployer

## 📖 Ressources

- **[Astro 5.0](https://astro.build/)**
- **[AstroWind](https://github.com/arthelokyo/astrowind)**
