# 🚀 Guide Rapide - Créer un site pour un nouveau streamer

Ce guide vous permet de créer un site complet pour un streamer en **moins de 10 minutes** !

## ⚡ Méthode rapide (PowerShell - Windows)

```powershell
# Étape 1 : Exécuter le script
.\create-streamer-site.ps1 -StreamerName "nom_du_streamer"

# Étape 2 : Entrer dans le nouveau dossier
cd ..\site-nom_du_streamer

# Étape 3 : Installer les dépendances
npm install

# Étape 4 : Lancer le serveur
npm run dev
```

## ⚡ Méthode rapide (Bash - Linux/Mac)

```bash
# Rendre le script exécutable (première fois seulement)
chmod +x create-streamer-site.sh

# Étape 1 : Exécuter le script
./create-streamer-site.sh nom_du_streamer

# Étape 2 : Entrer dans le nouveau dossier
cd ../site-nom_du_streamer

# Étape 3 : Installer les dépendances
npm install

# Étape 4 : Lancer le serveur
npm run dev
```

## 📝 Configuration en 5 étapes

### 1️⃣ Informations de base

Ouvrez `config/streamer.config.ts` et modifiez :

```typescript
identity: {
  name: "VotreNom",
  displayName: "VotreNom_TV",
  tagline: "Votre slogan ici",
  bio: "Votre description complète...",
  avatar: "/image/avatar.jpg",
}
```

### 2️⃣ Couleurs du thème

```typescript
theme: {
  primaryColor: "#YOUR_COLOR",    // Changez cette couleur
  secondaryColor: "#YOUR_COLOR",  // Et celle-ci
  gradientFrom: "#YOUR_COLOR",
  gradientTo: "#YOUR_COLOR",
}
```

**💡 Outil recommandé :** [Coolors.co](https://coolors.co/)

### 3️⃣ Liens sociaux

```typescript
social: {
  twitch: "https://twitch.tv/votre_pseudo",
  twitter: "https://twitter.com/votre_pseudo",
  instagram: "https://instagram.com/votre_pseudo",
  tiktok: "https://tiktok.com/@votre_pseudo",
}
```

### 4️⃣ Statistiques

```typescript
stats: {
  followers: { value: "10.5k", label: "Followers Twitch" },
  experience: { value: "3 ans", label: "de Stream" },
  vibes: { value: "100%", label: "Good Vibes" },
}
```

### 5️⃣ Ajouter les images

Placez vos images dans `public/image/` :

- `avatar.jpg` → Photo de profil (carré, 400x400px recommandé)
- `setup.jpg` → Photo du setup (1920x1080px recommandé)
- Logos des partenaires (PNG transparent recommandé)

## ✅ Vérification

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

Si tout fonctionne, vous devriez voir :

- ✅ Le nom du streamer dans la navbar
- ✅ Les bonnes couleurs
- ✅ L'avatar
- ✅ Les liens sociaux fonctionnels

## 🌐 Déploiement sur Vercel (Gratuit)

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel
```

Suivez les instructions à l'écran. Votre site sera en ligne en quelques secondes !

## 🎨 Personnalisations avancées

### Ajouter un partenaire

Dans `config/streamer.config.ts`, ajoutez :

```typescript
partners: [
  {
    name: "NomPartenaire",
    logo: "/image/logo-partenaire.png",
    link: "https://site-partenaire.com",
    code: "VOTRECODE",
  },
  // ... autres partenaires
];
```

### Ajouter un jeu/tag

```typescript
games: [
  { name: "#Fortnite", color: "primary" },
  { name: "#Valorant", color: "secondary" },
  { name: "#Minecraft", color: "primary" },
];
```

### Modifier le setup

```typescript
setup: {
  image: "/image/mon-setup.jpg",
  title: "Mon Setup Gaming",
  description: "Le setup d'un vrai gamer 🎮",
  specs: [
    {
      icon: "Monitor",
      title: "Écran",
      description: "Samsung Odyssey G9",
    },
    // ... autres specs
  ],
}
```

## 📚 Documentation complète

Pour plus de détails, consultez [TEMPLATE-README.md](./TEMPLATE-README.md)

## 🆘 Problèmes fréquents

### Les images ne s'affichent pas

→ Vérifiez que les chemins commencent par `/image/`

### Les couleurs ne changent pas

→ Redémarrez le serveur : `Ctrl+C` puis `npm run dev`

### Erreur lors du build

→ Vérifiez les erreurs TypeScript : `npm run lint`

## 💡 Conseil Pro

Utilisez le fichier `config/streamer.config.template.ts` comme base pour créer rapidement de nouvelles configurations !

---

**Besoin d'aide ?** Consultez la [documentation complète](./TEMPLATE-README.md) ou contactez [CyrilDev](https://cyriltouchard.github.io/portfolio)
