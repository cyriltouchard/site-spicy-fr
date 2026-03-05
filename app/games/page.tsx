import React from 'react';
import Link from 'next/link';
import GameCard from '@/components/GameCard';
import { gamesData } from '@/data/games';
import { streamerConfig } from '@/config/streamer.config';

export const metadata = {
  title: 'Jeux Streamés - Spicy_FR',
  description: 'Découvre l\'ensemble des jeux auxquels j\'ai joué en stream',
};

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header avec logo et bouton retour */}
        <div className="mb-8 flex items-center justify-between">
          {/* Logo Spicy_FR à gauche */}
          <div className="text-2xl font-bold tracking-tight">
            {streamerConfig.identity.displayName.split('_')[0]}_<span className="text-[#9146FF]">{streamerConfig.identity.displayName.split('_')[1] || 'FR'}</span>
          </div>

          {/* Bouton retour à droite */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            Retour
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* En-tête de la page */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Tous les Jeux Streamés
            </span>
          </h1>
          <p className="text-lg text-gray-400 sm:text-xl">
            Découvre l'ensemble des jeux auxquels j'ai joué en stream
          </p>
        </div>

        {/* Grille de jeux */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {gamesData.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </main>
  );
}
