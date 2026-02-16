'use client';

import { useState } from 'react';
import { Twitch, Twitter, TrendingUp, Users, Heart, Monitor, ShoppingBag, Eye, Headphones, Instagram, Glasses } from 'lucide-react';

// Composant Carte Partenaire avec bouton Copier
const PartnerCard = ({ name, logo, link, code, isIcon = false }: { name: string; logo?: string; link: string; code: string; isIcon?: boolean }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center bg-[#18181b] p-4 rounded-xl border border-white/5 hover:border-[#9146FF]/50 transition group justify-between">
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
            Spicy_<span className="text-[#9146FF]">FR</span>
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
            href="https://twitch.tv/spicy_fr"
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
                  épicée 🌶️
                </span>
              </h1>

              {/* Sous-titre */}
              <p className="text-xl md:text-2xl text-gray-300 font-semibold">
                Snipeuse dans l&apos;âme
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                5 ans de Warzone, des heures de zombies et maintenant sur <span className="text-[#F97316] font-semibold">ARC Raiders</span>.
              </p>

              {/* Boutons CTA */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://twitch.tv/spicy_fr"
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
                    src="/image/avatar.jpg" 
                    alt="Spicy_FR" 
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
                43.6k
              </div>
              <div className="text-gray-400 font-semibold">Followers Twitch</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-[#F97316]" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#9146FF]">
                5 ans
              </div>
              <div className="text-gray-400 font-semibold">de Stream</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center space-y-2">
              <div className="flex justify-center mb-3">
                <Heart className="w-8 h-8 text-[#9146FF]" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] to-[#F97316]">
                100%
              </div>
              <div className="text-gray-400 font-semibold">Good Vibes</div>
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
              Ici on joue, on rigole, on progresse tranquille... et parfois on tryhard quand même 🥵. 
              Je suis là <span className="text-[#F97316] font-bold">tous les jours</span>, alors passe faire un tour sur le live ! 
              Que tu sois là pour les snipes, les fails épiques ou juste pour papoter, tu es le bienvenu dans la team épicée.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-[#9146FF]/10 border border-[#9146FF]/30 px-4 py-2 rounded-full text-[#9146FF] font-semibold">
                #Warzone
              </div>
              <div className="bg-[#F97316]/10 border border-[#F97316]/30 px-4 py-2 rounded-full text-[#F97316] font-semibold">
                #ARCRaiders
              </div>
              <div className="bg-[#9146FF]/10 border border-[#9146FF]/30 px-4 py-2 rounded-full text-[#9146FF] font-semibold">
                #Zombies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SETUP SECTION ========== */}
      <section id="setup" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] to-[#F97316]">
              Mon Setup Gaming
            </h2>
            <p className="text-gray-400 text-lg">Le setup d&apos;une vraie snipeuse 🎮</p>
          </div>

          <div className="relative group">
            {/* Effet Glow autour de l'image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#9146FF] to-[#F97316] rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
            
            {/* Image du Setup */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#9146FF]/30 shadow-2xl">
              <img 
                src="/image/new-setup.jpg"
                alt="Setup Gaming Spicy_FR" 
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay gradient au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Specs du Setup (optionnel - à personnaliser) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#18181b] rounded-2xl p-6 border border-white/5">
              <Monitor className="w-8 h-8 text-[#9146FF] mb-3" />
              <h3 className="font-bold text-lg mb-2">Écran</h3>
              <p className="text-gray-400 text-sm">Gaming monitor haute performance</p>
            </div>
            
            <div className="bg-[#18181b] rounded-2xl p-6 border border-white/5">
              <TrendingUp className="w-8 h-8 text-[#F97316] mb-3" />
              <h3 className="font-bold text-lg mb-2">Performance</h3>
              <p className="text-gray-400 text-sm">Setup optimisé pour le stream</p>
            </div>
            
            <div className="bg-[#18181b] rounded-2xl p-6 border border-white/5">
              <Heart className="w-8 h-8 text-[#9146FF] mb-3" />
              <h3 className="font-bold text-lg mb-2">Ambiance</h3>
              <p className="text-gray-400 text-sm">RGB & vibes épicées</p>
            </div>
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
            <PartnerCard 
              name="NoLagVPN" 
              logo="/image/nolagvpn-logo-v3.webp" 
              link="https://nolagvpn.com/join/SPICYFR" 
              code="SPICYFR" 
            />

            <PartnerCard 
              name="MonPokestore" 
              logo="/image/Logo-300x100.avif" 
              link="https://www.monpokestore.fr/" 
              code="SPICY" 
            />
            
            <PartnerCard 
              name="West Gaming" 
              logo="/image/logo.svg" 
              link="https://westgaming.fr/?opaffi=7d964d2b4f" 
              code="SPICY" 
            />

            <PartnerCard 
              name="GUNNAR" 
              link="https://www.gunnar.fr/" 
              code="Spicy" 
              isIcon={true}
            />

            <PartnerCard 
              name="Maté In" 
              logo="/image/logo-matein-transparent.avif" 
              link="https://mate-in.com/" 
              code="Spicy" 
            />

            <PartnerCard 
              name="HyperX" 
              logo="/image/hyperxlogo_200x.svg" 
              link="https://fr.hyperx.com/products/hyperx-cloud-stinger-2-core-wired-gaming-headset-ps5?utm_source=Influencer&utm_medium=Social&utm_campaign=SEMA_FY26&utm_content=Spicy_FR_Influencer" 
              code="SPICYFR" 
            />
          </div>

          {/* Bouton Devenir Partenaire */}
          <div className="mt-12 text-center">
            <a
              href="https://twitch.tv/spicy_fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9146FF] to-[#F97316] hover:from-[#7c3aed] hover:to-[#ea580c] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              <Heart className="w-6 h-6" />
              Devenir Partenaire
            </a>
            <p className="text-gray-400 text-sm mt-4">
              Intéressé par un partenariat ? Contactez-moi sur Twitch !
            </p>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#0e0e10]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-tight">
              Spicy_<span className="text-[#9146FF]">FR</span>
            </div>

            {/* Réseaux Sociaux */}
            <div className="flex items-center gap-6">
              <a
                href="https://twitch.tv/spicy_fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9146FF]/10 hover:bg-[#9146FF]/20 p-3 rounded-full transition-all hover:scale-110 border border-[#9146FF]/30"
                aria-label="Twitch"
              >
                <Twitch className="w-6 h-6 text-[#9146FF]" />
              </a>
              <a
                href="https://twitter.com/Spicy_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F97316]/10 hover:bg-[#F97316]/20 p-3 rounded-full transition-all hover:scale-110 border border-[#F97316]/30"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-[#F97316]" />
              </a>
              <a
                href="https://www.instagram.com/spicy_fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9146FF]/10 hover:bg-[#9146FF]/20 p-3 rounded-full transition-all hover:scale-110 border border-[#9146FF]/30"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-[#9146FF]" />
              </a>
              <a
                href="https://vm.tiktok.com/ZSWHxfjf/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F97316]/10 hover:bg-[#F97316]/20 p-3 rounded-full transition-all hover:scale-110 border border-[#F97316]/30"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 text-[#F97316]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2026 Spicy_FR • Conçu avec passion par{' '}
              <a 
                href="https://cyriltouchard.github.io/portfolio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#9146FF] hover:text-[#F97316] transition-colors font-semibold"
              >
                CyrilDev
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
