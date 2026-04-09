# 📁 Portfolio — Lothaire | BTS SIO SISR

## 🗂️ Structure des fichiers

```
portfolio/
├── index.html              ← PAGE PRINCIPALE (toutes les sections)
├── assets/
│   ├── css/
│   │   └── style.css       ← Tout le style (couleurs, polices, layout)
│   ├── js/
│   │   └── main.js         ← Navigation + interactions
│   ├── img/
│   │   └── photo.jpg       ← 📸 METS TA PHOTO ICI (carré, min 300x300px)
│   └── cv-lothaire.pdf     ← 📄 METS TON CV ICI
└── README.md
```

---

## ✏️ Ce que tu dois personnaliser

### 1. Ta photo de profil
- Place ton fichier dans `assets/img/photo.jpg`
- Puis dans `index.html`, cherche `<!-- Remplace ce contenu par` et décommente la ligne `<img>`

### 2. Ton email
- Cherche `lothaire@gmail.com` dans `index.html` → remplace par ton vrai email

### 3. LinkedIn & GitHub
- Cherche `linkedin.com/in/ton-profil` → mets ton vrai lien LinkedIn
- Cherche `github.com/ton-github` → mets ton vrai lien GitHub
- Cherche `tryhackme.com/p/ton-profil` → mets ton vrai profil TryHackMe

### 4. Site de veille technologique
- Dans `assets/js/main.js`, cherche `ton-site-de-veille.fr` → mets ton vrai URL

### 5. Ton CV en PDF
- Place ton CV dans `assets/cv-lothaire.pdf`
- Le bouton téléchargement sera automatiquement actif

### 6. Ajouter/modifier des procédures
- Dans `index.html`, cherche `page-procedures`
- Copie-colle un bloc `.procedure-card` pour en ajouter une nouvelle

### 7. Ajouter un projet
- Dans `index.html`, cherche `page-realisations`
- Copie-colle un bloc `.project-card` pour l'ajouter

---

## 🎨 Modifier les couleurs

Dans `assets/css/style.css`, en haut du fichier (`:root {}`):

```css
--accent-blue:  #007BFF;   /* Couleur principale → change ici */
--accent-green: #2ECC71;   /* Couleur secondaire → change ici */
--bg-primary:   #1A1A1B;   /* Fond général */
--bg-secondary: #272729;   /* Fond des cartes */
```

---

## 📱 Responsive
Le portfolio s'adapte automatiquement au mobile.
Sur mobile, la sidebar se cache et un bouton hamburger apparaît.

---

## 🚀 Comment ouvrir en local

### Option 1 — Extension VS Code (recommandé)
1. Installe l'extension **Live Server** dans VS Code
2. Clic droit sur `index.html` → **Open with Live Server**
3. S'ouvre automatiquement dans le navigateur

### Option 2 — Double-clic
Double-clique sur `index.html` → s'ouvre dans ton navigateur

---

## 📦 Pour mettre en ligne (hébergement gratuit)

- **GitHub Pages** : Push le dossier sur GitHub, active Pages dans Settings
- **Netlify** : Glisse-dépose le dossier sur netlify.com/drop
- **Vercel** : `vercel deploy` si tu as le CLI

---

*Portfolio généré pour BTS SIO SISR — 2025/2026*
