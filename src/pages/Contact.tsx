import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ nom: '', prenom: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
        </svg>
      ),
      label: 'Téléphone',
      value: '+225 07796142092',
      href: 'tel:+2250779614209',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email',
      value: 'chlika.info@gmail.com',
      href: 'mailto:chlika.info@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
      label: 'Adresse',
      value: 'Abidjan, Yopougon, Sideci-Lem',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#662482] to-[#E5007E] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/70 text-xs font-bold tracking-[5px] uppercase mb-3">service client</p>
          <h1
            className="text-white text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Nous Contacter
          </h1>
          <p className="text-white/80 text-sm max-w-md mx-auto">
            Une question, une commande spéciale ou simplement envie de discuter ? On est là pour vous.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2
              className="text-2xl font-black text-gray-900 mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Envoyer un message
            </h2>

            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-black text-green-800 text-lg mb-2">Message envoyé !</h3>
                <p className="text-green-600 text-sm">
                  Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-[#662482] hover:text-[#E5007E] transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                      Nom
                    </label>
                    <input
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Koné"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#662482] focus:ring-1 focus:ring-[#662482]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                      Prénom
                    </label>
                    <input
                      name="prenom"
                      value={form.prenom}
                      onChange={handleChange}
                      placeholder="Awa"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#662482] focus:ring-1 focus:ring-[#662482]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vous@exemple.com"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#662482] focus:ring-1 focus:ring-[#662482]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    required
                    rows={6}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#662482] focus:ring-1 focus:ring-[#662482]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start bg-[#662482] hover:bg-[#E5007E] text-white font-bold px-10 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2
              className="text-2xl font-black text-gray-900 mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Nos coordonnées
            </h2>

            <div className="flex flex-col gap-5 mb-8">
              {contactInfo.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-[#C298D8]/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#662482] text-white flex items-center justify-center shrink-0 group-hover:bg-[#E5007E] transition-colors">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-4">Suivez-nous</p>
              <div className="flex gap-3">
                {[
                  { label: 'TikTok', bg: '#000' },
                  { label: 'Facebook', bg: '#1877F2' },
                  { label: 'Instagram', bg: '#E4405F' },
                  { label: 'WhatsApp', bg: '#25D366' },
                ].map(({ label, bg }) => (
                  <a
                    key={label}
                    href="#"
                    className="text-white text-[10px] font-bold px-3 py-2 rounded-xl transition-opacity hover:opacity-80"
                    style={{ backgroundColor: bg }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Horaires */}
            <div className="mt-8 bg-[#662482]/5 border border-[#662482]/10 rounded-2xl p-5">
              <p className="text-xs font-bold text-[#662482] uppercase tracking-[3px] mb-3">Horaires boutique</p>
              <div className="flex flex-col gap-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Lundi – Vendredi</span>
                  <span className="font-semibold text-gray-800">08h00 – 20h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Samedi</span>
                  <span className="font-semibold text-gray-800">09h00 – 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Dimanche</span>
                  <span className="font-semibold text-gray-800">Sur rdv</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
