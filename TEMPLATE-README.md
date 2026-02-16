# 🌶️ Template de Site Streamer

Ce projet est un template réutilisable pour créer des sites web professionnels pour des streamers Twitch/YouTube. Il est basé sur Next.js 16, TypeScript et Tailwind CSS 4.

## 📋 Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Personnalisation](#personnalisation)
- [Déploiement](#déploiement)
- [Structure du projet](#structure-du-projet)

## ✨ Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation fluide avec sections scrollables
- ✅ Section Hero avec avatar et présentation
- ✅ Statistiques en temps réel
- ✅ Présentation du setup gaming
- ✅ Section partenaires avec codes promos copiables
- ✅ Liens vers les réseaux sociaux
- ✅ Entièrement personnalisable via un fichier de configuration
- ✅ SEO optimisé
- ✅ Performance optimisée avec Next.js
- ✅ Animations et effets visuels

## 🔧 Prérequis

- Node.js 18+ (ou 20+)
- npm, yarn, pnpm ou bun
- Git

## 🚀 Installation

### Méthode 1 : Cloner le projet existant

```bash
# Cloner le repository
git clone https://github.com/votre-username/site-spicy-fr.git nom-du-nouveau-streamer

# Entrer dans le dossier
cd nom-du-nouveau-streamer

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Méthode 2 : Copier manuellement

```bash
# Copier le dossier complet
cp -r site-spicy-fr site-nouveau-streamer

# Entrer dans le nouveau dossier
cd site-nouveau-streamer

# Supprimer le dossier .git pour démarrer un nouveau repo
rm -rf .git

# Initialiser un nouveau repository Git
git init

# Installer les dépendances
npm install
```

## ⚙️ Configuration

Toute la personnalisation se fait dans un seul fichier : **`config/streamer.config.ts`**

### 1. Informations de base

```typescript
identity: {
  name: "VotreNom",              // Nom du streamer
  displayName: "VotreNom",       // Nom affiché (avec _)
  tagline: "Votre slogan",       // Slogan court
  bio: "Votre bio complète...",  // Description détaillée
  avatar: "/image/avatar.jpg",   // Chemin vers votre photo
}
```

### 2. Thème et couleurs

```typescript
theme: {
  primaryColor: "#9146FF",     // Couleur principale (hex)
  secondaryColor: "#F97316",   // Couleur secondaire (hex)
  gradientFrom: "#9146FF",     // Début du gradient
  gradientTo: "#F97316",       // Fin du gradient
}
```

**💡 Astuce :** Utilisez [Coolors.co](https://coolors.co/) pour générer des palettes harmonieuses.

### 3. Réseaux sociaux

```typescript
social: {
  twitch: "https://twitch.tv/votre_pseudo",
  twitter: "https://twitter.com/votre_pseudo",
  instagram: "https://instagram.com/votre_pseudo",
  tiktok: "https://tiktok.com/@votre_pseudo",
  youtube: "https://youtube.com/@votre_pseudo",  // Optionnel
  discord: "https://discord.gg/votre_serveur",   // Optionnel
}
```

### 4. Statistiques

```typescript
stats: {
  followers: {
    value: "10.5k",              // Nombre de followers
    label: "Followers Twitch",   // Label personnalisé
  },
  experience: {
    value: "3 ans",
    label: "de Stream",
  },
  vibes: {
    value: "100%",
    label: "Good Vibes",
  },
}
```

### 5. Jeux / Tags

```typescript
games: [
  { name: "#Fortnite", color: "primary" },
  { name: "#Valorant", color: "secondary" },
  { name: "#LeagueOfLegends", color: "primary" },
];
```

### 6. Setup Gaming

```typescript
setup: {
  image: "/image/mon-setup.jpg",  // Photo de votre setup
  title: "Mon Setup Gaming",
  description: "Description de votre setup",
  specs: [
    {
      icon: "Monitor",              // Monitor, TrendingUp, Heart
      title: "Écran",
      description: "Votre écran",
    },
    // ... autres specs
  ],
}
```

### 7. Partenaires

```typescript
partners: [
  {
    name: "NomPartenaire",
    logo: "/image/logo-partenaire.png", // Optionnel si isIcon=true
    link: "https://site-partenaire.com",
    code: "VOTRECODE",
    isIcon: false, // true pour afficher une icône générique
  },
  // ... autres partenaires
];
```

### 8. SEO

```typescript
seo: {
  title: "VotreNom - Streamer Gaming",
  description: "Votre description pour les moteurs de recherche",
  keywords: ["Twitch", "Streamer", "Gaming", "Fortnite"],
  author: "VotreNom",
}
```

### 9. Crédit développeur (optionnel)

```typescript
credit: {
  name: "VotreNom",
  link: "https://votre-portfolio.com",
}
```

## 🎨 Personnalisation avancée

### Ajouter vos images

1. Placez vos images dans le dossier `public/image/`
2. Mettez à jour les chemins dans `config/streamer.config.ts`

**Images nécessaires :**

- `avatar.jpg` - Photo de profil (recommandé : 400x400px, format carré)
- `setup.jpg` - Photo du setup gaming (recommandé : 1920x1080px)
- Logos des partenaires (format PNG transparent recommandé)

### Modifier les couleurs globales

Les couleurs principales sont définies dans `config/streamer.config.ts` et utilisées automatiquement partout. Si vous voulez des modifications plus avancées, éditez `app/globals.css`.

### Ajouter de nouvelles sections

1. Modifiez `app/page.tsx`
2. Ajoutez vos composants personnalisés
3. Utilisez les couleurs de `streamerConfig.theme`

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

Ou via l'interface web :

1. Connectez-vous sur [vercel.com](https://vercel.com)
2. Importez votre repository GitHub
3. Déployez automatiquement !

### Netlify

```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Déployer
netlify deploy --prod
```

### Autres plateformes

Le projet est compatible avec :

- AWS Amplify
- Azure Static Web Apps
- Cloudflare Pages
- GitHub Pages (avec adaptateur)

## 📁 Structure du projet

```
site-spicy-fr/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx            # Layout principal (SEO)
│   └── page.tsx              # Page d'accueil
├── config/
│   └── streamer.config.ts    # ⚙️ FICHIER DE CONFIGURATION
├── public/
│   └── image/                # Vos images
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── README.md
└── TEMPLATE-README.md        # Ce fichier
```

## 🔄 Créer un nouveau site pour un autre streamer

### Étape 1 : Dupliquer le projet

```bash
# Copier le dossier
cp -r site-spicy-fr site-nom-nouveau-streamer

# Entrer dans le dossier
cd site-nom-nouveau-streamer

# Réinitialiser Git
rm -rf .git
git init
```

### Étape 2 : Modifier package.json

```json
{
  "name": "site-nom-nouveau-streamer",
  "version": "0.1.0",
  ...
}
```

### Étape 3 : Configurer le streamer

Modifiez **`config/streamer.config.ts`** avec toutes les informations du nouveau streamer (voir section [Configuration](#configuration)).

### Étape 4 : Ajouter les images

1. Remplacez les images dans `public/image/`
2. Gardez les mêmes noms ou mettez à jour les chemins dans la config

### Étape 5 : Tester localement

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000)

### Étape 6 : Déployer

```bash
# Créer un nouveau repository GitHub
git remote add origin https://github.com/votre-username/nouveau-repo.git
git add .
git commit -m "Initial commit"
git push -u origin main

# Déployer sur Vercel
vercel
```

## 📝 Checklist avant déploiement

- [ ] Toutes les informations dans `config/streamer.config.ts` sont correctes
- [ ] Les images sont dans `public/image/` et optimisées
- [ ] Les liens sociaux fonctionnent tous
- [ ] Les codes promos des partenaires sont corrects
- [ ] Le site s'affiche correctement en mobile et desktop
- [ ] Le SEO (title, description) est configuré
- [ ] Le repository GitHub est créé
- [ ] Le déploiement sur Vercel est effectué

## 🆘 Aide et support

### Problèmes courants

**Les images ne s'affichent pas**

- Vérifiez que les chemins commencent par `/image/`
- Assurez-vous que les fichiers sont dans `public/image/`

**Les couleurs ne changent pas**

- Vérifiez le fichier `config/streamer.config.ts`
- Redémarrez le serveur de développement (`npm run dev`)

**Erreur de build**

- Vérifiez qu'il n'y a pas d'erreurs TypeScript
- Lancez `npm run build` pour tester localement

### Commandes utiles

```bash
npm run dev          # Lancer en mode développement
npm run build        # Créer la version de production
npm run start        # Lancer la version de production
npm run lint         # Vérifier le code
```

## 📄 Licence

Ce template est libre d'utilisation pour créer des sites pour des streamers. N'oubliez pas de personnaliser le crédit dans le footer !

## 🎯 Prochaines améliorations possibles

- [ ] Mode sombre / clair
- [ ] Section clips Twitch intégrés
- [ ] Calendrier de stream
- [ ] Section donations / tips
- [ ] Blog intégré
- [ ] Système de newsletter
- [ ] Analytics intégré

---

**Créé avec ❤️ par [CyrilDev](https://cyriltouchard.github.io/portfolio)**

Pour toute question ou demande de personnalisation avancée, contactez-moi !
