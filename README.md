# Atelier d'Ailes

Site web développé avec [Astro](https://astro.build/) et le thème [AstroWind](https://github.com/arthelokyo/astrowind), utilisant [Tailwind CSS](https://tailwindcss.com/) pour le styling.

## 🚀 Technologies

- **Astro 5.0** - Framework web moderne et performant
- **AstroWind** - Thème Astro avec composants pré-construits
- **Tailwind CSS** - Framework CSS utility-first
- **TypeScript** - Typage statique
- **MDX** - Support Markdown avec composants

## 📦 Installation

```bash
# Installer les dépendances
npm install
```

## 🛠️ Commandes

```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Vérifier le code (Astro, ESLint, Prettier)
npm run check

# Corriger automatiquement les erreurs
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
- Configuration du blog
- Analytics
- Thème

Les styles personnalisés sont dans `src/assets/styles/tailwind.css`.

## 🚢 Déploiement

```bash
# Build de production
npm run build
```

Les fichiers générés se trouvent dans le dossier `dist/`, prêts à être déployés sur n'importe quel hébergeur statique (Netlify, Vercel, GitHub Pages, etc.).

## 📝 Notes

- Les pages sont créées automatiquement à partir des fichiers dans `src/pages/`
- Les images peuvent être placées dans `public/` (statiques) ou `src/assets/` (optimisées par Astro)
