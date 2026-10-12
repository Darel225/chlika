import { Page, Product } from '../types';
import { products } from '../data';
import heroImage from '../imports/hero-airmax.png';
import kidsCategoryImage from '../imports/6a46b80f8894bb388d04018bdbb5f11a.jpg';

interface HomeProps {
  navigate: (page: Page) => void;
  onProductClick: (product: Product) => void;
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all duration-200 border border-gray-100"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {product.tag && (
          <span className="absolute top-3 left-3 z-10 bg-[#E5007E] text-white text-[9px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
            {product.tag}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[#662482] font-black text-base">
            {product.price.toLocaleString('fr-FR')} <span className="text-xs font-semibold">CFA</span>
          </p>
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-400 text-xs">{product.rating}</span>
          </div>
        </div>
        <h3 className="text-gray-900 font-bold text-sm mb-1 leading-tight">{product.name}</h3>
        <p className="text-gray-400 text-xs line-clamp-1 mb-3">{product.description}</p>
        <div className="flex gap-2">
          <button
            onClick={e => { e.stopPropagation(); onClick(); }}
            className="flex-1 bg-[#662482] hover:bg-[#E5007E] text-white text-xs font-bold py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            Ajouter
          </button>
          <button
            onClick={e => { e.stopPropagation(); onClick(); }}
            className="flex-1 border border-gray-200 hover:border-[#662482] text-gray-500 hover:text-[#662482] text-xs font-bold py-2 rounded-lg transition-colors duration-200"
          >
            Voir
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home({ navigate, onProductClick }: HomeProps) {
  const newArrivals = products.slice(0, 6);
  const trending = products.slice(6, 14);

  const editorial = [
    {
      title: 'Chaque Pas\nCompte',
      sub: 'Confort, durabilité et style réunis.',
      image: products[22].image,
    },
    {
      title: 'Nouvelles Sorties.\nStyle Iconique.',
      sub: 'Les modèles qui parlent avant vous.',
      image: products[66].image,
    },
    {
      title: 'Tendances\n2026',
      sub: 'Élevez votre jeu de sneakers.',
      image: products[10].image,
    },
  ];

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex overflow-hidden bg-white">
        {/* Left content */}
        <div className="relative w-full md:w-[55%] flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C298D8]/15 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E5007E]/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <p className="text-[#662482] text-xs font-bold tracking-[6px] uppercase mb-6">
              Collections Exclusives · Abidjan
            </p>
            <h1
              className="text-gray-900 text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Des Chaussures Qui{' '}
              <span className="text-[#E5007E]">Définissent</span>{' '}
              Votre Style.
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
              Collections importées de Chine et d'Afrique de l'Ouest, incluant des modèles rares sur le marché local ivoirien.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <button
                onClick={() => navigate('offre')}
                className="inline-flex items-center gap-2 bg-[#662482] hover:bg-[#E5007E] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-[#E5007E]/20 hover:-translate-y-0.5"
              >
                Voir la collection
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button
                onClick={() => navigate('contact')}
                className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-600 hover:border-[#662482] hover:text-[#662482] font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                Nous contacter
              </button>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: '⚡', text: 'Livraison Abidjan' },
                { icon: '✅', text: 'Qualité garantie' },
                { icon: '💬', text: 'Support WhatsApp' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="text-lg">{icon}</span>
                  <span className="text-gray-400 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="hidden md:block md:w-[45%] relative overflow-hidden bg-[#f7f0fc]">
          <img
            src={heroImage}
            alt="Collection Ch'Lika"
            className="w-full h-full object-cover object-center"
          />
                    {/* Floating badge */}
          <div className="absolute bottom-12 left-10 bg-white/90 backdrop-blur-md border border-[#C298D8]/30 shadow-xl rounded-2xl px-6 py-4">
            <p className="text-3xl font-black text-[#662482]">+200</p>
            <p className="text-xs font-medium text-gray-500 mt-0.5">Modèles exclusifs</p>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL CARDS ── */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {editorial.map((card, i) => (
            <div
              key={i}
              onClick={() => navigate('offre')}
              className="relative rounded-2xl overflow-hidden cursor-pointer group h-64 md:h-72"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-black text-xl leading-tight mb-1" style={{ whiteSpace: 'pre-line' }}>
                  {card.title}
                </h3>
                <p className="text-white/70 text-xs mb-4">{card.sub}</p>
                <button className="inline-flex items-center gap-2 bg-white hover:bg-[#E5007E] text-[#662482] hover:text-white text-xs font-bold px-4 py-2 rounded-full transition-all duration-200">
                  Voir la collection
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NOUVELLES ARRIVÉES ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#E5007E] text-xs font-bold tracking-[6px] uppercase mb-3">Nouveautés</p>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Nouvelles Sorties
            </h2>
            <p className="text-gray-400 text-sm mt-2">Les dernières chaussures conçues pour le style et le confort.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('offre')}
              className="inline-flex items-center gap-2 border-2 border-[#662482] text-[#662482] hover:bg-[#662482] hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-200 text-sm"
            >
              Voir toutes les collections
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS MOSAIC ── */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#E5007E] text-xs font-bold tracking-[6px] uppercase mb-3">Catégories</p>
            <h2 className="text-gray-900 text-3xl md:text-4xl font-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Collections Pour Vous
            </h2>
            <p className="text-gray-400 text-sm mt-2">Styles sélectionnés selon votre univers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Femme */}
            <div
              onClick={() => navigate('offre')}
              className="relative rounded-2xl overflow-hidden cursor-pointer group h-72"
            >
              <img src={products[40].image} alt="Femme" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-white font-black text-2xl leading-tight mb-1">Chaussures{'\n'}Femme</h3>
                <p className="text-white/60 text-xs mb-4">65 modèles</p>
                <button className="inline-flex items-center gap-2 bg-transparent text-[#C298D8] text-xs font-bold p-0 transition-colors duration-200">
                  Voir la collection
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Homme */}
            <div
              onClick={() => navigate('offre')}
              className="relative rounded-2xl overflow-hidden cursor-pointer group h-72"
            >
              <img src={products[67].image} alt="Homme" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-white font-black text-2xl leading-tight mb-1">Chaussures Homme</h3>
                <p className="text-white/60 text-xs mb-4">25 modèles</p>
                <button className="inline-flex items-center gap-2 bg-transparent text-[#C298D8] text-xs font-bold p-0 transition-colors duration-200">
                  Voir la collection
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Enfant */}
            <div
              onClick={() => navigate('offre')}
              className="relative rounded-2xl overflow-hidden cursor-pointer group h-72"
            >
              <img src={kidsCategoryImage} alt="Enfant" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-white font-black text-2xl leading-tight mb-1">Chaussures Enfant</h3>
                <p className="text-white/60 text-xs mb-4">12 modèles</p>
                <button className="inline-flex items-center gap-2 bg-transparent text-[#C298D8] text-xs font-bold p-0 transition-colors duration-200">
                  Voir la collection
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TENDANCES (horizontal scroll) ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-[#E5007E] text-xs font-bold tracking-[6px] uppercase mb-2">En ce moment</p>
              <h2 className="text-gray-900 text-2xl font-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Tendances
              </h2>
            </div>
            <button onClick={() => navigate('offre')} className="text-gray-400 hover:text-[#662482] text-xs font-semibold transition-colors flex items-center gap-1">
              Voir tout <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-3" style={{ scrollbarWidth: 'none' }}>
            {trending.map(product => (
              <div
                key={product.id}
                onClick={() => onProductClick(product)}
                className="flex-shrink-0 w-40 cursor-pointer group"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-2 border border-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <svg className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-400 text-[10px]">{product.rating}</span>
                </div>
                <p className="text-gray-900 text-xs font-bold truncate leading-tight">{product.name}</p>
                <p className="text-[#662482] text-xs font-black mt-0.5">{product.price.toLocaleString('fr-FR')} CFA</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="mx-4 sm:mx-6 lg:mx-8 mb-12 rounded-3xl overflow-hidden relative bg-[#662482]">
        <div className="absolute inset-0">
          <img
            src={products[28].image}
            alt="Ch'Lika"
            className="w-full h-full object-cover mix-blend-multiply opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#662482] via-[#662482]/90 to-[#3d1460]/80" />
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5007E]/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3" />
        <div className="relative z-10 max-w-7xl mx-auto px-10 py-20 md:py-28">
          <div className="max-w-lg">
            <h2
              className="text-white text-3xl md:text-5xl font-black leading-tight mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Construisez Votre Style Avec{' '}
              <span className="text-[#C298D8]">Confiance.</span>
            </h2>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
              Des chaussures modernes importées directement pour vous à Abidjan.
            </p>
            <button
              onClick={() => navigate('offre')}
              className="inline-flex items-center gap-2 bg-white hover:bg-[#E5007E] text-[#662482] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-2xl hover:shadow-[#E5007E]/30 hover:-translate-y-0.5"
            >
              Découvrir maintenant
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center gap-3">
              <p className="text-5xl font-black text-gray-900">+200</p>
              <p className="text-gray-400 text-sm font-medium">Modèles disponibles</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-5xl font-black text-gray-900">100%</p>
              <p className="text-gray-400 text-sm font-medium">Qualité sélectionnée</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-5xl font-black text-gray-900">100+</p>
              <p className="text-gray-400 text-sm font-medium">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
