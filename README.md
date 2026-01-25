# Atelier d'Ailes

[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-Performance%3A%20100-brightgreen)](https://pagespeed.web.dev/)
[![Lighthouse Accessibility](https://img.shields.io/badge/Lighthouse-Accessibility%3A%20100-brightgreen)](https://pagespeed.web.dev/)
[![Lighthouse Best Practices](https://img.shields.io/badge/Lighthouse-Best%20Practices%3A%20100-brightgreen)](https://pagespeed.web.dev/)
[![Lighthouse SEO](https://img.shields.io/badge/Lighthouse-SEO%3A%20100-brightgreen)](https://pagespeed.web.dev/)
[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Site vitrine de l'**Atelier d'Ailes**, atelier de révision et réparation de voiles de parapente et paramoteur basé en Seine-et-Marne.

## 📋 Table des matières

- [Objectifs](#-objectifs)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Commandes](#-commandes)
- [Structure du projet](#-structure-du-projet)
- [Configuration](#-configuration)
- [Déploiement](#-déploiement)

## 🎯 Objectifs

Ce site vitrine a été conçu pour répondre aux exigences suivantes :

- ✅ **Informations claires et organisées** - Présentation structurée des services et informations
- ✅ **Navigation fluide et rapide** - Optimisé pour desktop et mobile
- ✅ **Accessibilité irréprochable** - Accessible à tous les utilisateurs
- ✅ **SEO efficace** - Optimisé pour un bon référencement naturel
- ✅ **Projet léger et maintenable** - Simple à prendre en main, maintenir et déployer

## 🚀 Technologies

Le site est développé avec les technologies suivantes :

- **[Astro 5.0](https://astro.build/)** - Framework web moderne, léger et performant pour sites statiques
- **[AstroWind](https://github.com/arthelokyo/astrowind)** - Thème Astro offrant une base solide avec composants, thème et UI personnalisables
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first pour un styling rapide et cohérent
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique pour une meilleure maintenabilité

## 📦 Installation

```bash
# Installer les dépendances
npm install
```

**Prérequis :** Node.js `^18.17.1 || ^20.3.0 || >= 21.0.0`

## 🛠️ Commandes

```bash
# Démarrer le serveur de développement
npm run dev
# Le site sera accessible sur http://localhost:4321

# Construire pour la production
npm run build
# Les fichiers générés seront dans le dossier /dist

# Prévisualiser le build de production
npm run preview
# Le site sera accessible sur http://localhost:4322

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

## ⚙️ Configuration

### Configuration principale

Le fichier `src/config.yaml` contient :

- **Informations du site** - Nom, URL, base path
- **Métadonnées SEO** - Titre, description, Open Graph, Twitter Cards
- **Analytics** - Configuration des outils d'analyse
- **Thème** - Paramètres d'apparence (light/dark)

### Styles personnalisés

Les styles personnalisés se trouvent dans `src/assets/styles/tailwind.css`.

Les couleurs et la typographie peuvent être personnalisées dans `tailwind.config.js`.

## 🚢 Déploiement

```bash
# Build de production
npm run build

# Le dossier dist/ contient tous les fichiers à déployer
```

---

**Atelier d'Ailes** - Révision et réparation de parapentes et paramoteurs en Seine-et-Marne
