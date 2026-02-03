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
├── public/              # Fichiers statiques (images, robots.txt, etc.)
├── src/
│   ├── assets/         # Assets (images, styles, favicons)
│   ├── components/     # Composants Astro réutilisables
│   ├── layouts/        # Layouts de pages
│   ├── pages/          # Pages du site (routing automatique)
│   ├── utils/          # Utilitaires et helpers
│   └── config.yaml     # Configuration principale du site
├── astro.config.ts     # Configuration Astro
└── tailwind.config.js  # Configuration Tailwind CSS
```

**Note :** Astro génère automatiquement les routes à partir des fichiers dans `src/pages/`.

## 🚢 Déploiement

Au merge sur main, le site est redéployé sur www.atelier-d-ailes.fr via Vercel

Dans le cadre d'une maintenance, il est possible de déployer la branche `/maintenance` en changeant dans les paramètres Vercel :  
`Settings > Environments > Production > Branch is > maintenance
`

## 📖 Ressources

- **[Astro 5.0](https://astro.build/)**
- **[AstroWind](https://github.com/arthelokyo/astrowind)**
