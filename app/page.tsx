'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Twitch, Twitter, TrendingUp, Users, Heart, Monitor, ShoppingBag, Eye, Headphones, Instagram, Glasses, Youtube, Mail } from 'lucide-react';
import { streamerConfig } from '@/config/streamer.config';

// Composant Carte Partenaire avec bouton Copier
const PartnerCard = ({ name, logo, link, code, isIcon = false }: { name: string; logo?: string; link: string; code: string; isIcon?: boolean }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center bg-[#18181b] p-4 rounded-xl border border-white/5 hover:border-[#9146FF]/50 transition group">
      {/* Lien vers le site du partenaire */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="block mb-4 hover:opacity-80 transition">
        {isIcon ? (
          <div className="text-center">
            <Glasses className="w-12 h-12 text-[#F97316] mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="font-bold text-lg">{name}</div>
          </div>
        ) : (
          <img src={logo} alt={name} className="h-12 object-contain mx-auto" />
        )}
      </a>

      {/* Zone Code Promo */}
      <div className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg border border-white/10 w-full justify-between">
        <span className="font-mono text-[#F97316] font-bold tracking-wider text-sm">
          {code}
        </span>
        
        <button 
          onClick={handleCopy}
          className="text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded transition flex items-center gap-1"
          title="Copier le code"
        >
          {copied ? (
            <span className="text-green-400">Copié !</span>
          ) : (
            <span>Copier</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-white">
      {/* ========== NAVBAR ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e10]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            {streamerConfig.identity.displayName.split('_')[0]}_<span className="text-[#9146FF]">{streamerConfig.identity.displayName.split('_')[1] || 'FR'}</span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-gray-300 hover:text-white transition-colors">
              Accueil
            </a>
            <a href="#setup" className="text-gray-300 hover:text-white transition-colors">
              Setup
            </a>
            <a href="#partenaires" className="text-gray-300 hover:text-white transition-colors">
              Partenaires
            </a>
          </div>

          {/* CTA Button */}
          <a
            href={streamerConfig.social.twitch}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9146FF] hover:bg-[#7c3aed] px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-[#9146FF]/50 flex items-center gap-2"
          >
            <Twitch className="w-5 h-5" />
            Live sur Twitch
          </a>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section id="accueil" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Colonne Gauche - Texte */}
            <div className="space-y-6">
              {/* Badge EN LIVE */}
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-red-400 font-bold text-sm">EN LIVE</span>
              </div>

              {/* Titre Principal */}
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Salut la team <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] via-[#F97316] to-[#9146FF]">
                  Spicy
                </span>
              </h1>

              {/* Sous-titre */}
              <p className="text-xl md:text-2xl text-gray-300 font-semibold">
                {streamerConfig.identity.tagline}
              </p>

              <p className="text-gray-400 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: streamerConfig.identity.bio.split('\n')[0] }} />

              {/* Boutons CTA */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={streamerConfig.social.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#9146FF] hover:bg-[#7c3aed] px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-[#9146FF]/50"
                >
                  Rejoindre le Live
                </a>
                <a
                  href="#setup"
                  className="border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
                >
                  Voir le Setup
                </a>
              </div>
            </div>

            {/* Colonne Droite - Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Effet Glow animé */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#9146FF] via-[#F97316] to-[#9146FF] rounded-full opacity-75 blur-2xl animate-pulse"></div>
                
                {/* Avatar Circle */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-[#9146FF] overflow-hidden shadow-2xl">
                  <img 
                    src={streamerConfig.identity.avatar} 
                    alt={streamerConfig.identity.displayName} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-12 px-6 bg-gradient-to-r from-[#9146FF]/10 to-[#F97316]/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-[#9146FF]" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] to-[#F97316]">
                {streamerConfig.stats.followers.value}
              </div>
              <div className="text-gray-400 font-semibold">{streamerConfig.stats.followers.label}</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-[#F97316]" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#9146FF]">
                {streamerConfig.stats.experience.value}
              </div>
              <div className="text-gray-400 font-semibold">{streamerConfig.stats.experience.label}</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-3">
                <Heart className="w-8 h-8 text-[#9146FF]" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] to-[#F97316]">
                {streamerConfig.stats.vibes.value}
              </div>
              <div className="text-gray-400 font-semibold">{streamerConfig.stats.vibes.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== À PROPOS SECTION ========== */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#18181b] rounded-3xl p-8 md:p-12 border border-white/5 hover:border-[#9146FF]/30 transition-all shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] to-[#F97316]">
              À propos de moi
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {streamerConfig.identity.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {streamerConfig.games.map((game, index) => (
                <div 
                  key={index}
                  className={`${
                    game.color === 'primary' 
                      ? 'bg-[#9146FF]/10 border-[#9146FF]/30 text-[#9146FF]' 
                      : 'bg-[#F97316]/10 border-[#F97316]/30 text-[#F97316]'
                  } border px-4 py-2 rounded-full font-semibold`}
                >
                  {game.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SETUP SECTION ========== */}
      <section id="setup" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] to-[#F97316]">
              {streamerConfig.setup.title}
            </h2>
            <p className="text-gray-400 text-lg">{streamerConfig.setup.description}</p>
          </div>

          <div className="relative group">
            {/* Effet Glow autour de l'image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#9146FF] to-[#F97316] rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
            
            {/* Image du Setup */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#9146FF]/30 shadow-2xl">
              <img 
                src={streamerConfig.setup.image}
                alt={`Setup Gaming ${streamerConfig.identity.displayName}`} 
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay gradient au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Image supplémentaire du Setup */}
          <div className="relative group mt-8">
            {/* Effet Glow autour de l'image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#9146FF] to-[#F97316] rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
            
            {/* Image du Setup détaillé */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F97316]/30 shadow-2xl">
              <a 
                href="https://i.postimg.cc/syztctmJ/spicy-2026-v1.png" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src="https://i.postimg.cc/syztctmJ/spicy-2026-v1.png"
                  alt="Setup détaillé Spicy 2026" 
                  className="w-full h-auto object-cover"
                />
              </a>
              
              {/* Overlay gradient au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Specs du Setup (optionnel - à personnaliser) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {streamerConfig.setup.specs.map((spec, index) => {
              const IconComponent = spec.icon === 'Monitor' ? Monitor : spec.icon === 'TrendingUp' ? TrendingUp : Heart;
              return (
                <div key={index} className="bg-[#18181b] rounded-2xl p-6 border border-white/5">
                  <IconComponent className={`w-8 h-8 ${index % 2 === 0 ? 'text-[#9146FF]' : 'text-[#F97316]'} mb-3`} />
                  <h3 className="font-bold text-lg mb-2">{spec.title}</h3>
                  <p className="text-gray-400 text-sm">{spec.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PARTENAIRES SECTION ========== */}
      <section id="partenaires" className="py-20 px-6 bg-gradient-to-b from-transparent to-[#9146FF]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] to-[#F97316]">
              Nos Partenaires & Codes Promos 🎁
            </h2>
            <p className="text-gray-400 text-lg">Profite de réductions exclusives avec mes codes !</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {streamerConfig.partners.map((partner, index) => (
              <PartnerCard 
                key={index}
                name={partner.name} 
                logo={partner.logo} 
                link={partner.link} 
                code={partner.code} 
                isIcon={partner.isIcon}
              />
            ))}
          </div>

          {/* Bouton Devenir Partenaire */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9146FF] to-[#F97316] hover:from-[#7c3aed] hover:to-[#ea580c] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              <Heart className="w-6 h-6" />
              Devenir Partenaire
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              Intéressé par un partenariat ? Contactez-moi !
            </p>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer id="footer" className="py-12 px-6 border-t border-white/5 bg-[#0e0e10]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-tight">
              {streamerConfig.identity.displayName.split('_')[0]}_<span className="text-[#9146FF]">{streamerConfig.identity.displayName.split('_')[1] || 'FR'}</span>
            </div>

            {/* Réseaux Sociaux */}
            <div className="flex items-center gap-6">
              {streamerConfig.social.twitch && (
                <a
                  href={streamerConfig.social.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#9146FF]/10 hover:bg-[#9146FF]/20 p-3 rounded-full transition-all hover:scale-110 border border-[#9146FF]/30"
                  aria-label="Twitch"
                >
                  <Twitch className="w-6 h-6 text-[#9146FF]" />
                </a>
              )}
              {streamerConfig.social.twitter && (
                <a
                  href={streamerConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F97316]/10 hover:bg-[#F97316]/20 p-3 rounded-full transition-all hover:scale-110 border border-[#F97316]/30"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-[#F97316]" />
                </a>
              )}
              {streamerConfig.social.instagram && (
                <a
                  href={streamerConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#9146FF]/10 hover:bg-[#9146FF]/20 p-3 rounded-full transition-all hover:scale-110 border border-[#9146FF]/30"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-[#9146FF]" />
                </a>
              )}
              {streamerConfig.social.tiktok && (
                <a
                  href={streamerConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F97316]/10 hover:bg-[#F97316]/20 p-3 rounded-full transition-all hover:scale-110 border border-[#F97316]/30"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6 text-[#F97316]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              )}
              {streamerConfig.social.youtube && (
                <a
                  href={streamerConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500/10 hover:bg-red-500/20 p-3 rounded-full transition-all hover:scale-110 border border-red-500/30"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-red-500" />
                </a>
              )}
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2026 {streamerConfig.identity.displayName} • Conçu avec passion par{' '}
              {streamerConfig.credit ? (
                <a 
                  href={streamerConfig.credit.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#9146FF] hover:text-[#F97316] transition-colors font-semibold"
                >
                  {streamerConfig.credit.name}
                </a>
              ) : (
                <span className="text-[#9146FF] font-semibold">CyrilDev</span>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
