import { Page } from '../types';

export default function APropos({ navigate }: { navigate: (page: Page) => void }) {
  const skills = [
    { label: 'Tendances & nouveautés', value: 90 },
    { label: 'Qualité des modèles', value: 95 },
    { label: 'Satisfaction client', value: 88 },
  ];

  const team = [
    { name: 'Founder & CEO', role: 'Directrice générale', initials: 'CL' },
    { name: 'Achats & Import', role: 'Responsable approvisionnement', initials: 'KA' },
    { name: 'Service Client', role: 'Expérience client', initials: 'DA' },
  ];

  const milestones = [
    { year: '2020', event: "Création de Ch'Lika à Abidjan, Yopougon" },
    { year: '2021', event: 'Ouverture de la boutique physique' },
    { year: '2022', event: 'Lancement des réseaux sociaux+5 000 abonnés' },
    { year: '2023', event: 'Extension du réseau : Chine, Ghana, Sénégal' },
    { year: '2024', event: 'Plus de 1 000 clients satisfaits' },
    { year: '2026', event: 'Lancement du site e-commerce' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a0a2e] via-[#662482] to-[#3d1460] py-20 px-4 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative">
          <p className="text-[#C298D8] text-xs font-bold tracking-[5px] uppercase mb-4">Tout savoir sur nous</p>
          <h1
            className="text-white text-4xl md:text-6xl font-black mb-4 flex flex-wrap items-center justify-center gap-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            À Propos
          </h1>
          <nav className="flex items-center justify-center gap-3 text-xs text-white/70">
            <button onClick={() => navigate('accueil')} className="hover:text-white transition-colors">Accueil</button>
            <span className="text-[#E5007E]">/</span>
            <span className="text-white">À Propos</span>
          </nav>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#C298D8]">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop&auto=format"
                alt="Boutique Ch'Lika"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#662482] text-white rounded-2xl p-5 shadow-2xl">
              <p className="text-3xl font-black">+6 ans</p>
              <p className="text-xs text-[#C298D8] mt-0.5">d'expertise mode</p>
            </div>
          </div>

          <div>
            <p className="text-[#E5007E] text-xs font-bold tracking-[5px] uppercase mb-4">Notre Identité</p>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900 mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Plus qu'une boutique, une expérience de style
            </h2>
            <div className="flex flex-col gap-5 text-gray-600 text-sm leading-relaxed">
              <p>
                Ch'Lika est née en 2020 de la vision d'une femme active qui ne trouvait pas sur le marché local les chaussures à la hauteur de son style. Plutôt que de faire des compromis, elle a décidé d'aller chercher les modèles là où ils se trouvaient en Chine, au Ghana, au Sénégalpour les ramener à Abidjan.
              </p>
              <p>
                Aujourd'hui, Ch'Lika c'est une boutique physique à Yopougon Sideci-Lem, une présence active sur les réseaux sociaux, et désormais un site e-commerce pour toucher encore plus de clients partout en Côte d'Ivoire.
              </p>
              <p>
                Notre promesse est simple : vous offrir des chaussures tendances, modernes et de qualité, difficiles à trouver sur le marché local à des prix compétitifs.
              </p>
            </div>
            <button
              onClick={() => navigate('contact')}
              className="mt-8 bg-[#662482] text-white text-sm font-bold px-8 py-3 rounded-full hover:bg-[#E5007E] transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E5007E] text-xs font-bold tracking-[5px] uppercase mb-3">Ce qui nous anime</p>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Nos Engagements
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🌍', title: 'Sourcing international', desc: 'Des modèles sélectionnés à l\'international pour vous apporter l\'exclusivité.' },
              { icon: '💰', title: 'Prix compétitifs', desc: 'Qualité premium sans les prix premiumnotre philosophie depuis le premier jour.' },
              { icon: '❤️', title: 'Proximité client', desc: 'Une relation de confiance avec chaque cliente, sur les réseaux comme en boutique.' },
              { icon: '✨', title: 'Tendances fraîches', desc: 'Nouvelles collections régulières pour rester à la pointe de la mode internationale.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#E5007E] text-xs font-bold tracking-[5px] uppercase mb-3">Notre parcours</p>
            <h2
              className="text-3xl md:text-4xl font-black text-gray-900"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Jalons Clés
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#C298D8]" />
            <div className="flex flex-col gap-8">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#662482] flex items-center justify-center shrink-0 relative z-10 shadow-lg">
                    <span className="text-white text-xs font-black leading-none text-center">{year}</span>
                  </div>
                  <div className={`bg-white rounded-2xl p-5 border shadow-sm flex-1 mt-3 ${i % 2 === 0 ? 'border-[#C298D8]/30' : 'border-gray-100'}`}>
                    <p className="text-sm text-gray-700 font-medium">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills + Stats */}
      <section className="bg-[#662482] py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Notre savoir-faire
            </h2>
            <p className="text-[#C298D8] text-sm leading-relaxed mb-8 max-w-md">
              Chaque paire est choisie avec soin pour allier style, confort et durabilité, au meilleur prix.
            </p>
            <div className="flex flex-col gap-6">
              {skills.map(({ label, value }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm text-white font-semibold mb-2">
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-0.5 bg-white/20">
                    <div className="h-full bg-white" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-center">
            {[
              { value: '6+', label: "Années d'expérience" },
              { value: '+200', label: 'Modèles' },
              { value: '1000+', label: 'Clients satisfaits' },
              { value: '4 pays', label: 'Approvisionnement' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>{value}</p>
                <p className="text-[#C298D8] text-sm mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a0a2e] via-[#662482] to-[#3d1460] py-16 px-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop&auto=format"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative">
            <p className="text-[#C298D8] text-xs font-bold tracking-[5px] uppercase mb-4">Découvrez-nous</p>
            <h2
              className="text-white text-3xl md:text-5xl font-black mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Trouvez la paire qui vous ressemble
            </h2>
            <button
              onClick={() => navigate('offre')}
              className="bg-white text-[#662482] text-sm font-bold px-8 py-3 rounded-full hover:bg-[#C298D8] transition-colors"
            >
              Voir la collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
