import { useState } from 'react';

interface AuthModalProps {
  mode: 'login' | 'register';
  onClose: () => void;
  onSwitch: (mode: 'login' | 'register') => void;
}

export default function AuthModal({ mode, onClose, onSwitch }: AuthModalProps) {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#662482] to-[#E5007E] px-8 py-10 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-black mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {mode === 'login' ? 'Bonjour !' : 'Bienvenue !'}
          </h2>
          <p className="text-white/80 text-sm">
            {mode === 'login'
              ? 'Connectez-vous pour accéder à votre compte.'
              : "Rejoignez la famille Ch'Lika aujourd'hui."}
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-5">
            {['f', 'G', 'in'].map(icon => (
              <button
                key={icon}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-xs font-bold transition-colors"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-7 flex flex-col gap-4">
          {mode === 'register' && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Nom</label>
                <input
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  placeholder="Koné"
                  required
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Prénom</label>
                <input
                  name="prenom"
                  value={form.prenom}
                  onChange={handleChange}
                  placeholder="Awa"
                  required
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="vous@email.com"
              required
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 mb-1 block">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E5007E] hover:bg-[#c4006c] text-white font-bold py-3 rounded-xl transition-colors duration-200 mt-1"
          >
            {mode === 'login' ? 'Se connecter' : "S'inscrire"}
          </button>

          <p className="text-center text-xs text-gray-500">
            {mode === 'login' ? "Pas encore de compte ? " : 'Déjà membre ? '}
            <button
              type="button"
              onClick={() => onSwitch(mode === 'login' ? 'register' : 'login')}
              className="text-[#662482] font-semibold hover:text-[#E5007E] transition-colors"
            >
              {mode === 'login' ? "S'inscrire" : 'Se connecter'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
