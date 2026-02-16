// ========================================
// TEMPLATE DE CONFIGURATION - NOUVEAU STREAMER
// ========================================
// Copiez ce fichier, renommez-le et remplissez les informations.
// Une fois complété, renommez-le en "streamer.config.ts"

import { StreamerConfig } from './streamer.config';

export const newStreamerConfig: StreamerConfig = {
  // ===== INFORMATIONS DE BASE =====
  identity: {
    name: "",                      // Ex: "NinjaTv"
    displayName: "",               // Ex: "Ninja_TV"
    tagline: "",                   // Ex: "Pro player & Streamer"
    bio: "",                       // Votre description complète (peut contenir du HTML)
    avatar: "/image/avatar.jpg",   // Chemin vers votre photo de profil
  },

  // ===== THÈME ET COULEURS =====
  theme: {
    primaryColor: "#9146FF",       // Couleur principale (format hex)
    secondaryColor: "#F97316",     // Couleur secondaire (format hex)
    gradientFrom: "#9146FF",       // Début du gradient
    gradientTo: "#F97316",         // Fin du gradient
  },

  // ===== RÉSEAUX SOCIAUX =====
  social: {
    twitch: "",                    // Ex: "https://twitch.tv/votre_pseudo"
    twitter: "",                   // Ex: "https://twitter.com/votre_pseudo" (optionnel)
    instagram: "",                 // Ex: "https://instagram.com/votre_pseudo" (optionnel)
    tiktok: "",                    // Ex: "https://tiktok.com/@votre_pseudo" (optionnel)
    youtube: "",                   // Ex: "https://youtube.com/@votre_pseudo" (optionnel)
    discord: "",                   // Ex: "https://discord.gg/votre_serveur" (optionnel)
  },

  // ===== STATISTIQUES =====
  stats: {
    followers: {
      value: "",                   // Ex: "25.3k", "1.2M"
      label: "Followers Twitch",   // Personnalisez le label
    },
    experience: {
      value: "",                   // Ex: "3 ans", "5 années"
      label: "de Stream",
    },
    vibes: {
      value: "100%",
      label: "Good Vibes",
    },
  },

  // ===== JEUX / TAGS =====
  games: [
    // Ajoutez vos jeux ici
    // { name: "#Fortnite", color: "primary" },
    // { name: "#Valorant", color: "secondary" },
    // { name: "#LeagueOfLegends", color: "primary" },
  ],

  // ===== SETUP GAMING =====
  setup: {
    image: "/image/setup.jpg",     // Photo de votre setup
    title: "Mon Setup Gaming",
    description: "Description de votre setup",
    specs: [
      {
        icon: "Monitor",           // Options: "Monitor", "TrendingUp", "Heart"
        title: "Écran",
        description: "Détails de votre écran",
      },
      {
        icon: "TrendingUp",
        title: "Performance",
        description: "Détails de vos performances",
      },
      {
        icon: "Heart",
        title: "Ambiance",
        description: "Description de l'ambiance",
      },
    ],
  },

  // ===== PARTENAIRES =====
  partners: [
    // Ajoutez vos partenaires ici
    // {
    //   name: "NomPartenaire",
    //   logo: "/image/logo-partenaire.png",  // Ou utilisez isIcon: true
    //   link: "https://site-partenaire.com",
    //   code: "VOTRECODE",
    //   isIcon: false,                        // true pour afficher une icône générique
    // },
  ],

  // ===== SEO & MÉTADONNÉES =====
  seo: {
    title: "",                     // Ex: "NinjaTv - Pro Gamer & Streamer"
    description: "",               // Description pour les moteurs de recherche
    keywords: ["Twitch", "Streamer", "Gaming"], // Mots-clés SEO
    author: "",                    // Votre nom
  },

  // ===== CRÉDIT DÉVELOPPEUR (optionnel) =====
  credit: {
    name: "CyrilDev",
    link: "https://cyriltouchard.github.io/portfolio",
  },
};

export default newStreamerConfig;
