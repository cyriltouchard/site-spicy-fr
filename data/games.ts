export interface Game {
  id: number;
  title: string;
  hours: number;
  imageUrl: string;
  hasImage: boolean;
}

export const gamesData: Game[] = [
  {
    id: 1,
    title: "Call of Duty: Warzone",
    hours: 11443,
    imageUrl: "/image/games/warzone.jpg",
    hasImage: true  // Image activée !
  },
  {
    id: 2,
    title: "PUBG: BATTLEGROUNDS",
    hours: 222,
    imageUrl: "/image/games/pubg.jpg",
    hasImage: true
  },
  {
    id: 3,
    title: "Grand Theft Auto V",
    hours: 179,
    imageUrl: "/image/games/gtav.jpg",
    hasImage: true
  },
  {
    id: 4,
    title: "ARC Raiders",
    hours: 209,
    imageUrl: "/image/games/ARC.jpg",
    hasImage: true
  },
  {
    id: 5,
    title: "Just Chatting",
    hours: 201,
    imageUrl: "/image/games/Just Chatting.jpg",
    hasImage: true
  },
  {
    id: 6,
    title: "Call of Duty: Black Ops 4",
    hours: 232,
    imageUrl: "/image/games/cod-bo4.jpg",
    hasImage: true
  },
  {
    id: 7,
    title: "Call of Duty: Modern Warfare III",
    hours: 222,
    imageUrl: "/image/games/cod-mw3.jpg",
    hasImage: true
  },
  {
    id: 8,
    title: "Palworld",
    hours: 179,
    imageUrl: "/image/games/palworld.jpg",
    hasImage: true
  },
  {
    id: 9,
    title: "Call of Duty: Black Ops 7",
    hours: 147,
    imageUrl: "/image/games/bo7.jpg",
    hasImage: true
  },
  {
    id: 10,
    title: "Call of Duty: Black Ops 6",
    hours: 147,
    imageUrl: "/image/games/bo6.jpg",
    hasImage: true
  },
  {
    id: 11,
    title: "Minecraft",
    hours: 589,
    imageUrl: "/image/games/minecraft.jpg",
    hasImage: true
  },
  {
    id: 12,
    title: "Sea of Thieves",
    hours: 234,
    imageUrl: "/image/games/sea-of-thieves.jpg",
    hasImage: true
  },
  {
    id: 13,
    title: "SCUM",
    hours: 156,
    imageUrl: "/image/games/scum-2.jpg",
    hasImage: true
  },
  {
    id: 14,
    title: "SPECIAL EVENTS",
    hours: 89,
    imageUrl: "/image/games/OIP.jpg",
    hasImage: true
  },
  {
    id: 15,
    title: "Apex Legends",
    hours: 312,
    imageUrl: "/image/games/apex.jpg",
    hasImage: true
  }
];
