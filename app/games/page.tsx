'use client';

import Link from 'next/link';
import { Twitch, ArrowLeft, Clock } from 'lucide-react';

interface Game {
  rank: number;
  name: string;
  streamHr: number;
  streamPercent: string;
}

const gamesData: Game[] = [
  { rank: 1, name: "Call of Duty: Warzone", streamHr: 11443.0, streamPercent: "69.6%" },
  { rank: 2, name: "PUBG: BATTLEGROUNDS", streamHr: 1474.0, streamPercent: "9%" },
  { rank: 3, name: "Grand Theft Auto V", streamHr: 549.0, streamPercent: "3.3%" },
  { rank: 4, name: "ARC Raiders", streamHr: 309.0, streamPercent: "1.9%" },
  { rank: 5, name: "Just Chatting", streamHr: 251.0, streamPercent: "1.5%" },
  { rank: 6, name: "Call of Duty: Black Ops 4", streamHr: 232.0, streamPercent: "1.4%" },
  { rank: 7, name: "Call of Duty: Modern Warfare III", streamHr: 222.0, streamPercent: "1.4%" },
  { rank: 8, name: "Palworld", streamHr: 179.0, streamPercent: "1.1%" },
  { rank: 9, name: "Call of Duty: Black Ops 7", streamHr: 147.0, streamPercent: "0.9%" },
  { rank: 10, name: "Call of Duty: Black Ops 6", streamHr: 147.0, streamPercent: "0.9%" },
  { rank: 11, name: "Minecraft", streamHr: 126.0, streamPercent: "0.8%" },
  { rank: 12, name: "Sea of Thieves", streamHr: 90.2, streamPercent: "0.5%" },
  { rank: 13, name: "SCUM", streamHr: 85.1, streamPercent: "0.5%" },
  { rank: 14, name: "Special Events", streamHr: 82.2, streamPercent: "0.5%" },
  { rank: 15, name: "Apex Legends", streamHr: 80.8, streamPercent: "0.5%" },
  { rank: 16, name: "Escape from Tarkov", streamHr: 69.5, streamPercent: "0.4%" },
  { rank: 17, name: "ICARUS", streamHr: 66.2, streamPercent: "0.4%" },
  { rank: 18, name: "The Sims 4", streamHr: 58.5, streamPercent: "0.4%" },
  { rank: 19, name: "Call of Duty: Modern Warfare", streamHr: 53.7, streamPercent: "0.3%" },
  { rank: 20, name: "Once Human", streamHr: 46.5, streamPercent: "0.3%" },
  { rank: 21, name: "The Forest", streamHr: 43.9, streamPercent: "0.3%" },
  { rank: 22, name: "FIFA 20", streamHr: 32.7, streamPercent: "0.2%" },
  { rank: 23, name: "Supermarket Simulator", streamHr: 29.8, streamPercent: "0.2%" },
  { rank: 24, name: "Pokémon Trading Card Game", streamHr: 29.3, streamPercent: "0.2%" },
  { rank: 25, name: "Grounded", streamHr: 24.9, streamPercent: "0.2%" },
  { rank: 26, name: "IRL", streamHr: 23.7, streamPercent: "0.1%" },
  { rank: 27, name: "Trials Fusion", streamHr: 23.7, streamPercent: "0.1%" },
  { rank: 28, name: "Red Dead Redemption II", streamHr: 20.7, streamPercent: "0.1%" },
  { rank: 29, name: "Variety", streamHr: 20.6, streamPercent: "0.1%" },
  { rank: 30, name: "Borderlands 2", streamHr: 20.2, streamPercent: "0.1%" },
  { rank: 31, name: "Resident Evil 3", streamHr: 18.4, streamPercent: "0.1%" },
  { rank: 32, name: "Chained Together", streamHr: 18.3, streamPercent: "0.1%" },
  { rank: 33, name: "Raft", streamHr: 17.7, streamPercent: "0.1%" },
  { rank: 34, name: "Resident Evil Village", streamHr: 17.2, streamPercent: "0.1%" },
  { rank: 35, name: "Call of Duty: Modern Warfare II", streamHr: 17.1, streamPercent: "0.1%" },
  { rank: 36, name: "Rainbow Six Siege", streamHr: 16.9, streamPercent: "0.1%" },
  { rank: 37, name: "F1 23", streamHr: 16.2, streamPercent: "0.1%" },
  { rank: 38, name: "Rust", streamHr: 16.2, streamPercent: "0.1%" },
  { rank: 39, name: "Battlefield REDSEC", streamHr: 14.3, streamPercent: "0.1%" },
  { rank: 40, name: "Counter-Strike", streamHr: 12.8, streamPercent: "0.1%" },
  { rank: 41, name: "Makers & Crafting", streamHr: 12.3, streamPercent: "0.1%" },
  { rank: 42, name: "Poker", streamHr: 11.6, streamPercent: "0.1%" },
  { rank: 43, name: "Call of Duty: Warzone (2)", streamHr: 11.5, streamPercent: "0.1%" },
  { rank: 44, name: "Food & Drink", streamHr: 11.0, streamPercent: "0.1%" },
  { rank: 45, name: "Raid: Shadow Legends", streamHr: 9.8, streamPercent: "0.1%" },
  { rank: 46, name: "Trials Rising", streamHr: 9.7, streamPercent: "0.1%" },
  { rank: 47, name: "Battlefield V", streamHr: 9.1, streamPercent: "0.1%" },
  { rank: 48, name: "Until Dawn", streamHr: 8.8, streamPercent: "0.1%" },
  { rank: 49, name: "Rocket League", streamHr: 8.7, streamPercent: "0.1%" },
  { rank: 50, name: "Outlast", streamHr: 8.3, streamPercent: "0.1%" },
  { rank: 51, name: "Sons of the Forest", streamHr: 7.5, streamPercent: "0%" },
  { rank: 52, name: "Green Hell", streamHr: 7.2, streamPercent: "0%" },
  { rank: 53, name: "Worms W.M.D", streamHr: 6.8, streamPercent: "0%" },
  { rank: 54, name: "Marbles on Stream", streamHr: 6.7, streamPercent: "0%" },
  { rank: 55, name: "Phasmophobia", streamHr: 6.6, streamPercent: "0%" },
  { rank: 56, name: "A Way Out", streamHr: 6.5, streamPercent: "0%" },
  { rank: 57, name: "Fortnite", streamHr: 6.5, streamPercent: "0%" },
  { rank: 58, name: "Stray", streamHr: 6.3, streamPercent: "0%" },
  { rank: 59, name: "Fall Guys", streamHr: 6.1, streamPercent: "0%" },
  { rank: 60, name: "StopotS", streamHr: 6.0, streamPercent: "0%" },
  { rank: 61, name: "Grand Theft Auto", streamHr: 5.9, streamPercent: "0%" },
  { rank: 62, name: "Getting Over It with Bennett Foddy", streamHr: 5.8, streamPercent: "0%" },
  { rank: 63, name: "Call of Duty 4: Modern Warfare", streamHr: 5.5, streamPercent: "0%" },
  { rank: 64, name: "Visage", streamHr: 5.4, streamPercent: "0%" },
  { rank: 65, name: "Watch Parties", streamHr: 4.8, streamPercent: "0%" },
  { rank: 66, name: "The Outlast Trials", streamHr: 4.7, streamPercent: "0%" },
  { rank: 67, name: "Inside", streamHr: 4.6, streamPercent: "0%" },
  { rank: 68, name: "Gartic Phone", streamHr: 4.5, streamPercent: "0%" },
  { rank: 69, name: "Forza Horizon 5", streamHr: 4.4, streamPercent: "0%" },
  { rank: 70, name: "The Dark Pictures Anthology: Little Hope", streamHr: 4.3, streamPercent: "0%" },
  { rank: 71, name: "We Were Here Together", streamHr: 4.3, streamPercent: "0%" },
  { rank: 72, name: "ROBLOX", streamHr: 3.9, streamPercent: "0%" },
  { rank: 73, name: "The Dark Pictures Anthology: House of Ashes", streamHr: 3.7, streamPercent: "0%" },
  { rank: 74, name: "Dead by Daylight", streamHr: 3.5, streamPercent: "0%" },
  { rank: 75, name: "FIFA 22", streamHr: 3.4, streamPercent: "0%" },
  { rank: 76, name: "Saints Row", streamHr: 3.4, streamPercent: "0%" },
  { rank: 77, name: "Call of Dragons", streamHr: 3.3, streamPercent: "0%" },
  { rank: 78, name: "VALORANT", streamHr: 2.9, streamPercent: "0%" },
  { rank: 79, name: "At Dead of Night", streamHr: 2.8, streamPercent: "0%" },
  { rank: 80, name: "Shadow Warrior 2", streamHr: 2.8, streamPercent: "0%" },
  { rank: 81, name: "Layers of Fear 2", streamHr: 2.7, streamPercent: "0%" },
  { rank: 82, name: "FIFA 23", streamHr: 2.6, streamPercent: "0%" },
  { rank: 83, name: "Life is Strange", streamHr: 2.5, streamPercent: "0%" },
  { rank: 84, name: "Jurassic World Evolution", streamHr: 2.4, streamPercent: "0%" },
  { rank: 85, name: "Ghost Watchers", streamHr: 2.1, streamPercent: "0%" },
  { rank: 86, name: "Call of Duty: Vanguard", streamHr: 1.9, streamPercent: "0%" },
  { rank: 87, name: "Music", streamHr: 1.9, streamPercent: "0%" },
  { rank: 88, name: "Call of Duty: Black Ops II", streamHr: 1.9, streamPercent: "0%" },
  { rank: 89, name: "MicroWorks", streamHr: 1.8, streamPercent: "0%" },
  { rank: 90, name: "Kallax", streamHr: 1.6, streamPercent: "0%" },
  { rank: 91, name: "IRL", streamHr: 1.4, streamPercent: "0%" },
  { rank: 92, name: "God of War", streamHr: 1.4, streamPercent: "0%" },
  { rank: 93, name: "League of Legends", streamHr: 1.3, streamPercent: "0%" },
  { rank: 94, name: "Mass Effect: Andromeda", streamHr: 1.3, streamPercent: "0%" },
  { rank: 95, name: "skribbl.io", streamHr: 1.3, streamPercent: "0%" },
  { rank: 96, name: "Borderlands 3", streamHr: 1.3, streamPercent: "0%" },
  { rank: 97, name: "Call of Duty: Modern Warfare 2", streamHr: 1.3, streamPercent: "0%" },
  { rank: 98, name: "Games + Demos", streamHr: 1.2, streamPercent: "0%" },
  { rank: 99, name: "Digimon Digital Card Battle", streamHr: 1.1, streamPercent: "0%" },
  { rank: 100, name: "Dead Space (2008)", streamHr: 1.1, streamPercent: "0%" },
  { rank: 101, name: "Pacify", streamHr: 1.0, streamPercent: "0%" },
  { rank: 102, name: "Warzone", streamHr: 1.0, streamPercent: "0%" },
  { rank: 103, name: "Z1: Battle Royale", streamHr: 0.8, streamPercent: "0%" },
  { rank: 104, name: "Celeste", streamHr: 0.8, streamPercent: "0%" },
  { rank: 105, name: "Twitch Plays", streamHr: 0.8, streamPercent: "0%" },
  { rank: 106, name: "Warzone", streamHr: 0.8, streamPercent: "0%" },
  { rank: 107, name: "Wreckfest", streamHr: 0.5, streamPercent: "0%" },
  { rank: 108, name: "Silent Hill", streamHr: 0.5, streamPercent: "0%" },
  { rank: 109, name: "Call of Duty 3", streamHr: 0.2, streamPercent: "0%" },
  { rank: 110, name: "Call of Duty: Black Ops Cold War", streamHr: 0.2, streamPercent: "0%" },
];

const getTwitchImageUrl = (gameName: string): string => {
  const encodedName = encodeURIComponent(gameName);
  return `https://static-cdn.jtvnw.net/ttv-boxart/${encodedName}-285x380.jpg`;
};

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e10]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition">
            Spicy_<span className="text-[#9146FF]">FR</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </Link>
            <a
              href="https://twitch.tv/spicy_fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#9146FF] hover:bg-[#7c3aed] px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-[#9146FF]/50 flex items-center gap-2"
            >
              <Twitch className="w-5 h-5" />
              Live sur Twitch
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] to-[#F97316]">
            Tous les Jeux Streamés
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Découvre l'ensemble des jeux auxquels j'ai joué en stream
          </p>
        </div>
      </section>

      {/* GAMES GRID */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {gamesData.map((game) => (
              <div
                key={game.rank}
                className="group bg-[#18181b] rounded-xl border border-white/5 hover:border-[#9146FF]/50 transition-all overflow-hidden hover:scale-105"
              >
                {/* Image du jeu */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity z-10"></div>
                  <img
                    src={getTwitchImageUrl(game.name)}
                    alt={game.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/285x380/18181b/9146FF?text=' + encodeURIComponent(game.name);
                    }}
                  />
                  
                  {/* Badge rank */}
                  <div className="absolute top-3 left-3 bg-[#9146FF] text-white text-xs font-bold px-2 py-1 rounded-full z-20">
                    #{game.rank}
                  </div>

                  {/* Heures de stream en overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent z-20">
                    <div className="flex items-center gap-1 text-[#F97316] text-sm font-bold">
                      <Clock className="w-4 h-4" />
                      {game.streamHr}h
                    </div>
                  </div>
                </div>

                {/* Titre du jeu */}
                <div className="p-4">
                  <h3 className="font-bold text-sm line-clamp-2 text-center">
                    {game.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#0e0e10]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold tracking-tight mb-4">
            Spicy_<span className="text-[#9146FF]">FR</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 Spicy_FR • Site créé avec passion
          </div>
        </div>
      </footer>
    </div>
  );
}
