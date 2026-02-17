'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // 🔥 CONFIGURATION WEB3FORMS
    // Clé API configurée - Les messages arrivent sur ton email
    // Pour changer vers l'email de la cliente plus tard, crée un nouveau formulaire sur web3forms.com
    const accessKey = "807919da-66d8-4126-8c85-16a3422439be";
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `🔥 Nouveau message de ${formData.name} - Site Spicy`,
          from_name: "Site Spicy - Formulaire Contact",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ email: '', name: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e10] text-white">
      {/* Bouton Retour */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/"
          className="flex items-center gap-2 bg-[#18181b] hover:bg-[#18181b]/80 px-4 py-2 rounded-xl border border-white/10 transition-all hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center gap-2 bg-[#9146FF]/10 border border-[#9146FF]/30 px-4 py-2 rounded-full mb-6">
            <Mail className="w-5 h-5 text-[#9146FF]" />
            <span className="text-[#9146FF] font-bold text-sm">CONTACT PRO</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9146FF] via-[#F97316] to-[#9146FF]">
              Rejoins l'aventure
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Une proposition de partenariat ? Une idée de folie ? <br />
            Écris-moi directement, je réponds vite ! 🔥
          </p>
        </div>

        {/* Formulaire ou Message de succès */}
        {status === 'success' ? (
          <div className="bg-[#18181b] p-12 rounded-3xl border border-green-500/30 text-center animate-fade-in">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Message envoyé ! 🎉</h2>
            <p className="text-gray-400 text-lg mb-8">
              Merci de l'intérêt pour la tribu Spicy.<br />
              Je reviens vers toi très rapidement !
            </p>
            <button 
              onClick={() => setStatus('idle')} 
              className="bg-gradient-to-r from-[#9146FF] to-[#F97316] hover:from-[#7c3aed] hover:to-[#ea580c] px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <div className="bg-[#18181b] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Effet de glow animé */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9146FF]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F97316]/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Nom */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  Ton Nom / Marque
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe / Ma Super Marque"
                  className="w-full bg-black/40 border-2 border-white/10 focus:border-[#9146FF] rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#9146FF]/50 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  Ton Email Pro
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@marque.com"
                  className="w-full bg-black/40 border-2 border-white/10 focus:border-[#F97316] rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  Ton Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={8}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Salut Spicy ! 🔥&#10;&#10;On aimerait te proposer un partenariat parce que..."
                  className="w-full bg-black/40 border-2 border-white/10 focus:border-[#9146FF] rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:ring-2 focus:ring-[#9146FF]/50 transition-all resize-none"
                ></textarea>
              </div>

              {/* Bouton Envoi */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-[#9146FF] to-[#F97316] hover:from-[#7c3aed] hover:to-[#ea580c] text-white font-bold text-lg py-5 px-8 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[#9146FF]/30"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <p>Oups, une erreur s'est produite. Réessaie ou contacte-moi sur Twitch !</p>
                </div>
              )}
            </form>

            {/* Info Email */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-500 text-sm">
                📧 Ton message sera envoyé à{' '}
                <span className="text-[#F97316] font-bold">contact.spicyfr@gmail.com</span>
              </p>
            </div>
          </div>
        )}

        {/* Section Alternative */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Tu préfères les réseaux sociaux ?{' '}
            <Link href="/#footer" className="text-[#9146FF] hover:text-[#F97316] font-bold underline transition-colors">
              Retrouve-moi partout
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
