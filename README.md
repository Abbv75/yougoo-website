# Yougoo Website — Site Vitrine & Portail Web Officiel

Site vitrine moderne, performant et immersif pour l'écosystème de mobilité VTC et Taxi **Yougoo** à Bamako, Mali.

---

## 🌟 Présentation du Projet

Conçu selon les mêmes standards architecturaux et visuels que `chauffy-website`, **Yougoo Website** valorise les atouts de la plateforme auprès du grand public, des passagers, des chauffeurs partenaires et des entreprises :

* **Identité de marque & Design :** Vert émeraude (`#16a34a`), touches ardoise sombre (`#0f172a`), cartes translucides Apple Liquid Glass, subtils motifs traditionnels Bogolan du Mali.
* **Simulateur de Tarif Dynamique en Direct :** Estimation instantanée du prix garanti en FCFA entre les principaux repères de Bamako (ACI 2000, Badalabougou, Hamdallaye, Faladié, Aéroport Modibo Keïta de Sénou, etc.).
* **Showcase Applicatif Interactif :** Démonstrateur interactif multi-écrans présentant les véritables captures d'écran de l'application cliente Yougoo (Carte 3D MapLibre, OrderBottomSheet, suivi en direct WebSocket).
* **Espace Chauffeur Partenaire Yougoo Pro :** Section de recrutement dédiée avec formulaire de candidature express en ligne.
* **Espace Entreprises & Comptes Corporate :** Facturation mensuelle et gestion centralisée des déplacements collaborateurs.
* **Pages Dédiées & Transparence Légale :**
  - `/` : Accueil complet avec Hero, Processus en 4 étapes, Gammes de véhicules, Bento Features, Témoignages réels, FAQ et Bannière de téléchargement.
  - `/services` : Grille tarifaire détaillée, calculateur de trajet et catalogue de prestations.
  - `/features` : Immersion dans le socle technologique (React Native, MapLibre 3D, WebSockets résilients, Yougoo Pay).
  - `/contact` : Formulaire multi-onglets (Support Passager, Candidature Chauffeur Yougoo Pro, Partenariats Entreprises).
  - `/politiques` : Mentions Légales (ecoBoosterLink), Politique de Confidentialité des données, CGU et Charte de Conduite.

---

## ⚡ Socle Technologique

* **Framework :** [React 18](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
* **Bundler & Outillage :** [Vite 5](https://vitejs.dev/) avec `@vitejs/plugin-react-swc`
* **Routage :** [React Router DOM v6](https://reactrouter.com/) avec `createBrowserRouter`
* **Styles & Design System :** [Tailwind CSS v3](https://tailwindcss.com/) + Primitives UI [Radix UI](https://www.radix-ui.com/)
* **Animations :** [Framer Motion v12](https://www.framer.com/motion/) & [GSAP 3](https://greensock.com/)
* **Notifications Toasts :** [Sonner](https://sonner.emilkowal.ski/)
* **Typographies :** Space Grotesk (Titres) & Plus Jakarta Sans (Corps de texte)

---

## 🚀 Démarrage Rapide

### 1. Installation des dépendances
```bash
npm install
```

### 2. Démarrage du serveur de développement local
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:8081` (ou port assigné par Vite).

### 3. Compilation pour la production
```bash
npm run build
```
Les fichiers statiques minifiés et optimisés sont générés dans le dossier `dist/`.

### 4. Prévisualisation locale du build
```bash
npm run preview
```

---

## 📁 Structure des Dossiers

```
yougoo-website/
├── public/                 # Logos haute résolution, visuels véhicules et captures app
├── src/
│   ├── assets/             # Assets statiques importables
│   ├── components/         # Composants réutilisables (Navbar, ui/)
│   │   └── ui/             # Composants Radix UI / Shadcn
│   ├── hooks/              # Hooks React
│   ├── lib/                # Utilitaires (utils.ts)
│   ├── pages/              # Pages de l'application
│   │   ├── Index.tsx       # Page d'accueil
│   │   ├── Services.tsx    # Services & Simulateur de tarif
│   │   ├── Features.tsx    # Fonctionnalités & Spécifications techniques
│   │   ├── Contact.tsx     # Hub de contact & Candidatures
│   │   ├── Politics.tsx    # Politiques, CGU et Mentions Légales
│   │   └── NotFound.tsx    # Page 404
│   ├── sections/           # Sections modulaires de la page d'accueil
│   ├── routes.tsx          # Configuration React Router
│   ├── App.tsx             # Point d'entrée de l'application
│   ├── main.tsx            # Montage DOM
│   └── index.css           # Thème CSS & variables Tailwind
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🏢 À Propos

Projet développé par **ecoBoosterLink** pour le service de mobilité **Yougoo** à Bamako, Mali.
* **Téléphone / WhatsApp :** +223 74 04 33 39
* **Email :** ecoboosterlink@gmail.com
