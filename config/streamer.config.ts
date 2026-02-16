// ========================================
// CONFIGURATION DU SITE STREAMER
// ========================================
// Ce fichier contient toutes les données personnalisables du site.
// Modifiez ces valeurs pour créer un nouveau site pour un autre streamer.

export interface StreamerConfig {
  // Informations de base
  identity: {
    name: string;
    displayName: string;
    tagline: string;
    bio: string;
    avatar: string;
  };

  // Thème et couleurs
  theme: {
    primaryColor: string;      // Couleur principale (format hex)
    secondaryColor: string;     // Couleur secondaire (format hex)
    gradientFrom: string;       // Début du gradient
    gradientTo: string;         // Fin du gradient
  };

  // Liens réseaux sociaux
  social: {
    twitch: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
    discord?: string;
  };

  // Statistiques à afficher
  stats: {
    followers: {
      value: string;
      label: string;
    };
    experience: {
      value: string;
      label: string;
    };
    vibes: {
      value: string;
      label: string;
    };
  };

  // Jeux / Tags
  games: Array<{
    name: string;
    color: "primary" | "secondary";
  }>;

  // Setup Gaming
  setup: {
    image: string;
    title: string;
    description: string;
    specs: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };

  // Partenaires
  partners: Array<{
    name: string;
    logo?: string;           // Chemin vers le logo
    link: string;            // Lien vers le site du partenaire
    code: string;            // Code promo
    isIcon?: boolean;        // Utiliser une icône au lieu d'un logo
  }>;

  // SEO & Métadonnées
  seo: {
    title: string;
    description: string;
    keywords?: string[];
    author?: string;
  };

  // Crédit développeur (optionnel)
  credit?: {
    name: string;
    link: string;
  };
}

// ========================================
// CONFIGURATION SPICY_FR
// ========================================
export const streamerConfig: StreamerConfig = {
  identity: {
    name: "Spicy_FR",
    displayName: "Spicy_FR",
    tagline: "Snipeuse dans l'âme",
    bio: "Ici on joue, on rigole, on progresse tranquille... et parfois on tryhard quand même 🥵. Je suis là tous les jours, alors passe faire un tour sur le live ! Que tu sois là pour les snipes, les fails épiques ou juste pour papoter, tu es le bienvenu dans la team spicy.",
    avatar: "/image/avatar.jpg",
  },

  theme: {
    primaryColor: "#9146FF",     // Violet Twitch
    secondaryColor: "#F97316",    // Orange spicy
    gradientFrom: "#9146FF",
    gradientTo: "#F97316",
  },

  social: {
    twitch: "https://twitch.tv/spicy_fr",
    twitter: "https://twitter.com/Spicy_FR",
    instagram: "https://www.instagram.com/spicy_fr/",
    tiktok: "https://vm.tiktok.com/ZSWHxfjf/",
    youtube: "https://www.youtube.com/@spicy5982",
  },

  stats: {
    followers: {
      value: "43.6k",
      label: "Followers Twitch",
    },
    experience: {
      value: "5 ans",
      label: "de Stream",
    },
    vibes: {
      value: "100%",
      label: "Good Vibes",
    },
  },

  games: [
    { name: "#Warzone", color: "primary" },
    { name: "#ARCRaiders", color: "secondary" },
    { name: "#Zombies", color: "primary" },
  ],

  setup: {
    image: "/image/new-setup.jpg",
    title: "Mon Setup Gaming",
    description: "Le setup d'une vraie snipeuse 🎮",
    specs: [
      {
        icon: "Monitor",
        title: "Écran",
        description: "Gaming monitor haute performance",
      },
      {
        icon: "TrendingUp",
        title: "Performance",
        description: "Setup optimisé pour le stream",
      },
      {
        icon: "Heart",
        title: "Ambiance",
        description: "RGB & vibes spicy",
      },
    ],
  },

  partners: [
    {
      name: "NoLagVPN",
      logo: "/image/nolagvpn-logo-v3.webp",
      link: "https://nolagvpn.com/join/SPICYFR",
      code: "SPICYFR",
    },
    {
      name: "MonPokestore",
      logo: "/image/Logo-300x100.avif",
      link: "https://www.monpokestore.fr/",
      code: "SPICY",
    },
    {
      name: "West Gaming",
      logo: "/image/logo.svg",
      link: "https://westgaming.fr/?opaffi=7d964d2b4f",
      code: "SPICY",
    },
    {
      name: "GUNNAR",
      link: "https://www.gunnar.fr/",
      code: "Spicy",
      isIcon: true,
    },
    {
      name: "Maté In",
      logo: "/image/logo-matein-transparent.avif",
      link: "https://mate-in.com/",
      code: "Spicy",
    },
    {
      name: "HyperX",
      logo: "/image/hyperxlogo_200x.svg",
      link: "https://fr.hyperx.com/products/hyperx-cloud-stinger-2-core-wired-gaming-headset-ps5?utm_source=Influencer&utm_medium=Social&utm_campaign=SEMA_FY26&utm_content=Spicy_FR_Influencer",
      code: "SPICYFR",
    },
  ],

  seo: {
    title: "Spicy_FR - Streameuse Twitch Gaming",
    description: "Snipeuse dans l'âme. 5 ans de Warzone, des heures de zombies et maintenant sur ARC Raiders.",
    keywords: ["Twitch", "Streamer", "Gaming", "Warzone", "ARC Raiders", "Zombies"],
    author: "Spicy_FR",
  },

  credit: {
    name: "CyrilDev",
    link: "https://cyriltouchard.github.io/portfolio",
  },
};

// Export par défaut
export default streamerConfig;
