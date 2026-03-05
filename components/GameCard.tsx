'use client';

import React from 'react';
import { Game } from '@/data/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
      {/* Image container avec aspect ratio portrait */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg bg-neutral-800">
        {/* Badge avec le numéro */}
        <div className="absolute left-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-md bg-purple-500/80 backdrop-blur-sm">
          <span className="text-[10px] font-bold text-white">#{game.id}</span>
        </div>

        {/* Image du jeu ou placeholder */}
        {game.hasImage ? (
          <img
            src={game.imageUrl}
            alt={game.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              // Fallback si l'image ne charge pas
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-700/50">
            {/* Icône manette placeholder */}
            <svg
              className="h-12 w-12 text-neutral-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 9a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1zm12 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              <path d="M21.75 12a.75.75 0 0 0-1.5 0c0 1.57-.877 2.937-2.173 3.648l-.04-2.096A2.75 2.75 0 0 0 15.287 11H8.713a2.75 2.75 0 0 0-2.75 2.552l-.04 2.096C4.627 14.937 3.75 13.57 3.75 12a.75.75 0 0 0-1.5 0c0 3.114 2.526 5.625 5.625 5.625.178 0 .353-.008.526-.024l.166 8.649a.75.75 0 0 0 .75.75h5.366a.75.75 0 0 0 .75-.75l.166-8.649c.173.016.348.024.526.024 3.099 0 5.625-2.511 5.625-5.625z" />
            </svg>
          </div>
        )}

        {/* Overlay gradient en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Durée de jeu dans l'overlay */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 text-orange-400">
          {/* Icône horloge */}
          <svg
            className="h-3 w-3"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
            <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
          </svg>
          <span className="text-xs font-medium">{game.hours}h</span>
        </div>
      </div>

      {/* Encart titre en bas */}
      <div className="bg-neutral-900 px-2 py-2 rounded-b-lg">
        <h3 className="truncate text-center text-xs font-medium text-white">
          {game.title}
        </h3>
      </div>
    </div>
  );
}
