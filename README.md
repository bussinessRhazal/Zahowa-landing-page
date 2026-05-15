# Zahowa — Landing Page Pré-lancement

> *Le café marocain épicé, comme tu ne l'as jamais bu.*

Landing page React/Vite de pré-lancement pour Zahowa Coffee — capture de leads via le Cercle Fondateur (100 places exclusives), SEO optimisé, production-ready.

---

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev
# → http://localhost:3000

# 3. Build production
npm run build
# → dossier dist/ généré

# 4. Prévisualiser le build
npm run preview
```

---

## 📁 Structure du projet

```
zahowa-pre-launch/
├── public/
│   ├── images/
│   │   └── zahowa-logo.jpg     ← Logo officiel
│   ├── CNAME                    ← Pour GitHub Pages (zahowa.com)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Nav.jsx              ← Navigation fixed avec scroll effect
│   │   ├── SEO.jsx              ← Helmet (metas dynamiques)
│   │   ├── SteamAnimation.jsx   ← Vapeur SVG animée du Hero
│   │   ├── FoundersForm.jsx     ← Formulaire 3 étapes (9 champs)
│   │   ├── Footer.jsx
│   │   └── StickyCTA.jsx        ← CTA sticky mobile
│   ├── sections/
│   │   ├── Hero.jsx             ← Section 1 (photo + vapeur)
│   │   ├── Story.jsx            ← Section 2 (storytelling)
│   │   ├── Recipes.jsx          ← Section 3 (4 recettes)
│   │   ├── Pillars.jsx          ← Section 4 (3 piliers)
│   │   └── FoundersCircle.jsx   ← Section 5 (CTA principal + form)
│   ├── data/
│   │   ├── siteConfig.js        ← ⭐ CONFIG À MODIFIER (réseaux, contact, form)
│   │   └── recipes.js           ← Data des 4 recettes
│   ├── styles/
│   │   ├── variables.css        ← Design tokens (palette, typo, spacing)
│   │   ├── 01-base.css          ← Reset, nav, hero
│   │   └── 02-sections.css      ← Story, recipes, pillars, founders, footer
│   ├── hooks/
│   │   └── useScrollReveal.js   ← Scroll reveal Intersection Observer
│   ├── App.jsx
│   └── main.jsx
├── index.html                   ← Entry point (SEO statique + Schema.org)
├── package.json
└── vite.config.js
```

---

## ⚙️ Configuration à effectuer avant déploiement

### 1️⃣ Modifier `src/data/siteConfig.js`

Ce fichier centralise toute la config personnalisable :

```js
// Liens réseaux sociaux
social: {
  instagram: 'https://instagram.com/zahowa',
  tiktok: 'https://tiktok.com/@zahowa',
  facebook: 'https://facebook.com/zahowa',     // ← À vérifier/modifier
  linkedin: 'https://linkedin.com/company/zahowa'  // ← À vérifier/modifier
}

// Endpoint formulaire FormSubmit.co
formEndpoint: 'https://formsubmit.co/contact@zahowa.com'
// ⚠️ Active ton compte FormSubmit : envoie un formulaire test, valide le lien
// dans ton email, puis l'endpoint sera actif

// Cercle Fondateur — places prises (à mettre à jour manuellement)
founderCircle: {
  totalSeats: 100,
  seatsTaken: 12   // ← Mettre à jour selon inscriptions reçues
}
```

### 2️⃣ Remplacer la photo Hero

Dans `src/sections/Hero.jsx`, ligne ~15, remplace l'URL Unsplash par ta photo :

```jsx
<source media="(min-width: 1024px)" srcSet="/images/hero-coffee.jpg" />
<img src="/images/hero-coffee-mobile.jpg" alt="..." />
```

**Format recommandé** :
- Desktop : 1920×1280px, JPG optimisé, < 300 Ko
- Mobile : 1200×900px, JPG optimisé, < 200 Ko
- Sujet : tasse de café fumante avec épices visibles (cardamome, badiane, cannelle)
- Lumière chaude, plan top-down ou 3/4
- Outil de compression recommandé : [Squoosh](https://squoosh.app) ou [TinyJPG](https://tinyjpg.com)

### 3️⃣ Ajouter l'image OG (partage sur réseaux sociaux)

Crée une image **1200×630px** nommée `og-image.jpg` et place-la dans `public/images/`. Cette image apparaîtra lors du partage du site sur Facebook, LinkedIn, WhatsApp, Twitter.

---

## 🎨 Design system

### Palette officielle (validée brand book)

| Token CSS | Hex | Usage |
|---|---|---|
| `--chocolat-fes` | `#3D1F0E` | Ancre principale, fonds sombres |
| `--brun-souk` | `#7B3A1A` | Secondaire, titres italics |
| `--or-imperial` | `#B8922A` | Accent premium, Cercle Fondateur |
| `--creme-sable` | `#F7F3EC` | Texte sur fond sombre |
| `--bg-base` | `#FAF7F1` | Fond clair principal |
| `--bg-warm` | `#F2EAD9` | Fond légèrement teinté |

### Typographie

- **Titres** : Cormorant Garamond (300, 400, 500, italic)
- **Corps** : Inter (300, 400, 500, 600)

Polices chargées depuis Google Fonts avec preload.

---

## 📤 Déploiement

### Option A — GitHub Pages (recommandé, gratuit)

Le projet est pré-configuré pour GitHub Pages avec le domaine personnalisé `zahowa.com`.

```bash
# 1. Pousser sur GitHub
git add .
git commit -m "Refonte landing page"
git push origin main

# 2. Build et déploiement
npm run deploy
```

**Configuration GitHub Pages** :
1. Settings → Pages
2. Source : `gh-pages` branch
3. Custom domain : `zahowa.com`
4. Enforce HTTPS : ✓

### Option B — Netlify

1. Connecter le repo GitHub à Netlify
2. Build command : `npm run build`
3. Publish directory : `dist`
4. Ajouter le domaine personnalisé `zahowa.com`

### Option C — Vercel

```bash
npm i -g vercel
vercel
```

---

## 📊 Récupération des données du formulaire

Les inscriptions arrivent par email via **FormSubmit.co** sur `contact@zahowa.com`.

**Format de l'email reçu** :
```
🌟 Nouvelle inscription Cercle Fondateur — [Prénom]

prenom: Marie
email: marie@example.com
age: 25-34
genre: femme
consommation: quotidien
moments: matin, apres-midi
profil: chaud
intention: les-deux
source: instagram
```

**Astuce** : créer un filtre Gmail pour archiver automatiquement ces emails dans un label "Cercle Fondateur", puis exporter en CSV via Google Sheets ou Airtable pour analyser le marché.

**Alternative recommandée à terme** : connecter à Brevo (anciennement Sendinblue) pour automatiser :
- Email de bienvenue immédiat
- Séquence email pré-lancement (J-21, J-14, J-7, J-1)
- Liste segmentée par profil aromatique

---

## ♿ Accessibilité

- Navigation clavier complète (focus visible)
- Labels ARIA sur formulaire
- Contraste WCAG AA respecté
- Respect `prefers-reduced-motion`
- Structure sémantique HTML5

---

## 🔍 SEO

- **Schema.org JSON-LD** : Organization, WebSite, WebPage, ItemList (4 recettes)
- **Open Graph** + **Twitter Cards** complets
- **Sitemap.xml** + **robots.txt**
- Meta description optimisée pour requêtes "café marocain épicé", "café aux épices"
- Canonical URL définie

---

## 📈 Performance

- Polices preload + display=swap
- Code splitting Vite (react-vendor, form, seo)
- Images Unsplash avec query params optimisés
- Lazy loading natif sur images non-critiques
- Compression Brotli/Gzip automatique sur serveurs modernes
- CSS minimal, pas de framework lourd

---

## 🐛 Bugs connus / TODO

- [ ] **Remplacer photo hero Unsplash** par photo produit réelle
- [ ] **Créer image og-image.jpg** (1200×630)
- [ ] **Vérifier liens réseaux sociaux** dans `siteConfig.js`
- [ ] **Activer FormSubmit.co** (envoyer 1 form test, valider email)
- [ ] **Brancher Google Analytics / Meta Pixel** si besoin (à ajouter dans `index.html`)
- [ ] **Créer pages légales** (mentions légales, politique confidentialité, CGV)
- [ ] **Bandeau cookies RGPD** si tracking activé

---

## 📝 Licence

© 2026 Zahowa — Tous droits réservés. Code propriétaire, non distribuable.

---

*Construit avec ☕ par Abdelilah, fondateur de Zahowa, et ✦ Claude (Anthropic) comme mentor business.*
