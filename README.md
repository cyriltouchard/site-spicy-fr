# 🌶️ Site Spicy_FR - Template Streamer

Ce projet est un **template réutilisable** pour créer des sites web professionnels pour des streamers Twitch/YouTube.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Documentation

- **[Guide Rapide](./QUICKSTART.md)** - Créez un nouveau site en 10 minutes
- **[Documentation Complète](./TEMPLATE-README.md)** - Guide détaillé et personnalisation

## 🎨 Créer un site pour un autre streamer

### Windows (PowerShell)

```powershell
.\create-streamer-site.ps1 -StreamerName "nom_du_streamer"
```

### Linux/Mac (Bash)

```bash
./create-streamer-site.sh nom_du_streamer
```

## ⚙️ Configuration

Toute la personnalisation se fait dans un seul fichier :

```
config/streamer.config.ts
```

Modifiez ce fichier pour changer :

- Le nom du streamer
- Les couleurs du thème
- Les liens sociaux
- Les statistiques
- Les partenaires
- Et bien plus encore !

## 🛠️ Stack Technique

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Commandes disponibles

```bash
npm run dev          # Lancer en mode développement
npm run build        # Créer la version de production
npm run start        # Lancer la version de production
npm run lint         # Vérifier le code
```

## 🌐 Déploiement

Le moyen le plus simple de déployer votre site Next.js est d'utiliser [Vercel](https://vercel.com).

```bash
npm i -g vercel
vercel
```

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

## 📄 Licence

Ce template est libre d'utilisation pour créer des sites pour des streamers.

## 🎯 Crédits

Template créé par [CyrilDev](https://cyriltouchard.github.io/portfolio)

---

**Site actuel** : [Spicy_FR](https://twitch.tv/spicy_fr) - Streameuse Gaming sur Twitch
