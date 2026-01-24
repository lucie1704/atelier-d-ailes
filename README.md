# Atelier d'Ailes

Atelier de révision et répération de voiles de parapente et paramoteur basé en Seine-et-Marne. L'Atelier d'Ailes est créé en 2015 et tenu depuis par Christophe GODARD.

Ce site vitrine réalisé pour l'atelier vise à répondre aux exigences suivantes :

- Des informations claires ordonnées
- Une navigation fluide et rapide autant sur desktop que mobile
- Une accessibilité irréprochable pour pouvoir être lu et compris de tous
- Un SEO efficace pour un bon référencement
- Un projet léger, simple à prendre en main, à maintenir et à déployer

## 🚀 Technologies

Le site est développé en [Astro](https://astro.build/) car suffisant pour un site static, léger et facile à appréhender

avec l'utilisation du thème [AstroWind](https://github.com/arthelokyo/astrowind) pour ne pas avoir à refaire la roue et partir sur une base et architecture qui couvre un large évential des besoins en termes de composant, thème, ui etc tout en étant customisable et adaptable à nos propres besoins

## 📦 Installation

```bash
# Installer les dépendances
npm install
```

## 🛠️ Commandes

```bash
# Démarre le serveur de développement sur localhost:4321
npm run dev

# Build pour la production dans le /dist
npm run build

# Prévisule le build de production sur localhost:4322
npm run preview

# Vérifier le code (Astro, ESLint, Prettier)
npm run check

# Corriger automatiquement les erreurs de format/lint
npm run fix
```

Le serveur de développement sera accessible sur `http://localhost:4321`

## 📁 Structure du projet

```
/
├── public/          # Fichiers statiques (images, robots.txt, etc.)
├── src/
│   ├── assets/     # Assets (images, styles, favicons)
│   ├── components/ # Composants Astro réutilisables
│   ├── layouts/    # Layouts de pages
│   ├── pages/      # Pages du site (routing automatique)
│   ├── utils/      # Utilitaires
│   └── config.yaml # Configuration principale du site
├── astro.config.ts # Configuration Astro
└── tailwind.config.js # Configuration Tailwind
```

## ⚙️ Configuration

La configuration principale se trouve dans `src/config.yaml` :

- Informations du site (nom, URL)
- Métadonnées SEO
- Analytics
- Thème

Les styles personnalisés sont dans `src/assets/styles/tailwind.css`.

## 🚢 Déploiement

TODO rédiger le process de déploiement quand yen aura un
