import { getProductContent } from '../productContent';
import { useEffect, useState } from 'react';
import { CartItem, Page, Product } from '../types';
import { products } from '../data';
import StarRating from '../components/StarRating';
import ProductCard from '../components/ProductCard';
import slingbackDetailFront from '../imports/30926193_350_A.jpg';
import slingbackDetailWorn from '../imports/images.jpg';
import slingbackDetailSide from '../imports/images__1_.jpg';
import nikeAirForceDetail from '../imports/fc40a556515306c12dda4f3f90ce5ca5.jpg';

interface ProductDetailProps {
  product: Product;
  navigate: (page: Page) => void;
  onAddToCart: (item: CartItem) => void;
  onProductClick: (product: Product) => void;
}

interface GalleryView {
  src: string;
  objectPosition?: string;
  transform?: string;
}

export default function ProductDetail({ product, navigate, onAddToCart, onProductClick }: ProductDetailProps) {
  const content = getProductContent(product);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    onAddToCart({ product, quantity: qty, size: selectedSize });
    setAdded(true);
  };

  useEffect(() => {
    setActiveImageIndex(0);
    setSelectedSize(product.sizes[0]);
    setQty(1);
    setAdded(false);
    setIsFavorite(false);
  }, [product.id]);

  const secondaryViews: GalleryView[] = product.id === 7
    ? [
        { src: slingbackDetailFront },
        { src: slingbackDetailWorn },
        { src: slingbackDetailSide },
      ]
    : product.id === 2
      ? [
          { src: nikeAirForceDetail },
          { src: 'https://images.unsplash.com/photo-1712167631738-4dab9e53c853?w=900&h=900&fit=crop&auto=format&q=85' },
          { src: 'https://images.unsplash.com/photo-1712168631921-5b9fd204ebd2?w=900&h=900&fit=crop&auto=format&q=85' },
        ]
      : [
          { src: product.image, objectPosition: '50% 25%', transform: 'scale(1.3)' },
          { src: product.image, objectPosition: '20% 55%', transform: 'scale(1.18)' },
          { src: product.image, objectPosition: '80% 55%', transform: 'scaleX(-1) scale(1.18)' },
        ];

  const galleryViews: GalleryView[] = [{ src: product.image }, ...secondaryViews];
  const activeView = galleryViews[activeImageIndex];
  const showPreviousImage = () => {
    setActiveImageIndex(index => (index - 1 + galleryViews.length) % galleryViews.length);
  };
  const showNextImage = () => {
    setActiveImageIndex(index => (index + 1) % galleryViews.length);
  };

  const chevron = (d: string) => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.25} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#fbfaf8]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-wrap items-center gap-2 text-xs text-gray-400">
        <button onClick={() => navigate('accueil')} className="hover:text-brand-purple transition-colors">Accueil</button>
        <span>›</span>
        <button onClick={() => navigate('offre')} className="hover:text-brand-purple transition-colors">Offre</button>
        <span>›</span>
        <span>{product.category}</span>
        <span>›</span>
        <span className="text-gray-700 truncate">{product.name}</span>
      </div>

      {/* Hero */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 lg:gap-14 items-start">
          {/* Left — image */}
          <div className="group relative overflow-hidden rounded-2xl bg-stone-100 aspect-square w-full max-w-xl mx-auto md:mx-0">
            {product.tag && (
              <span className="absolute top-4 left-4 z-10 rounded-full bg-brand-pink text-white text-[10px] font-bold px-3 py-1.5 tracking-wider uppercase">
                {product.tag}
              </span>
            )}
            <img
              src={activeView.src}
              alt={`${product.name} — vue ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ objectPosition: activeView.objectPosition ?? 'center', transform: activeView.transform ?? 'none' }}
            />
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label={`Vue précédente de ${product.name}`}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-gray-700 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-brand-purple transition-all"
            >
              {chevron('m15 18-6-6 6-6')}
            </button>
            <button
              type="button"
              onClick={showNextImage}
              aria-label={`Vue suivante de ${product.name}`}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-gray-700 shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-brand-purple transition-all"
            >
              {chevron('m9 18 6-6-6-6')}
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryViews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImageIndex(i)}
                  aria-label={`Afficher la vue ${i + 1}`}
                  aria-pressed={activeImageIndex === i}
                  className={`h-2 rounded-full transition-all ${activeImageIndex === i ? 'w-6 bg-brand-purple' : 'w-2 bg-white/80 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>

          {/* Right — info */}
          <div>
            <p className="text-sm font-semibold text-brand-purple mb-1">Ch'Lika · {product.category}</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-3 leading-tight">{product.name}</h1>

            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={product.rating} size="md" />
              <span className="text-sm text-gray-600">{product.rating}/5</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">({product.reviewCount} avis)</span>
            </div>

            <p className="text-4xl font-extrabold text-gray-950 mb-5">
              {product.price.toLocaleString('fr-FR')} <span className="text-xl">FCFA</span>
            </p>

            <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-7 max-w-lg">{product.description}</p>

            <p className="text-sm font-bold text-gray-950 mb-3">Taille</p>
            <div className="flex flex-wrap gap-2 mb-7">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                  className={`h-10 min-w-[3.5rem] px-4 rounded-lg text-sm border transition-all duration-150 ${
                    selectedSize === size
                      ? 'bg-brand-purple text-white border-brand-purple'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-brand-purple hover:text-brand-purple'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <p className="text-sm font-bold text-gray-950 mb-3">Quantité</p>
            <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white mb-6">
              <button
                type="button"
                onClick={() => setQty(q => Math.max(1, q - 1))}
                aria-label="Diminuer la quantité"
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-brand-purple text-lg transition-colors"
              >
                −
              </button>
              <span className="w-12 h-10 flex items-center justify-center text-sm border-x border-gray-200">{qty}</span>
              <button
                type="button"
                onClick={() => setQty(q => q + 1)}
                aria-label="Augmenter la quantité"
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-brand-purple text-lg transition-colors"
              >
                +
              </button>
            </div>

            {!added ? (
              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 rounded-xl bg-brand-purple hover:bg-brand-purple-dark text-white font-bold py-4 transition-colors duration-200 text-sm"
                >
                  Ajouter au panier
                </button>
                <button
                  type="button"
                  onClick={() => setIsFavorite(f => !f)}
                  aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                  aria-pressed={isFavorite}
                  className={`w-14 rounded-xl border flex items-center justify-center transition-colors ${
                    isFavorite
                      ? 'border-brand-pink bg-brand-pink text-white'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-brand-purple hover:text-brand-purple'
                  }`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0 5.25-9 10.5-9 10.5S3 13.5 3 8.25A4.25 4.25 0 0 1 7.25 4C9.2 4 10.48 5.1 12 6.75 13.52 5.1 14.8 4 16.75 4A4.25 4.25 0 0 1 21 8.25Z" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="w-full rounded-xl bg-green-50 border border-green-200 text-green-700 font-bold py-4 text-center text-sm">
                  Ajouté au panier
                </div>
                <button
                  onClick={() => navigate('panier')}
                  className="w-full rounded-xl bg-brand-pink hover:opacity-90 text-white font-bold py-4 transition-opacity duration-200 text-sm"
                >
                  Voir le panier
                </button>
              </div>
            )}

            <div className="mt-5 flex items-center gap-3 text-xs text-gray-500">
              <svg className="w-5 h-5 shrink-0 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v10H3V7Zm11 3h3l4 4v3h-7v-7ZM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              </svg>
              Livraison rapide et fiable à Abidjan et partout en Côte d'Ivoire
            </div>
          </div>
        </div>
      </section>

      {/* Reviews + description */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-0">
          <div className="md:pr-12 md:border-r border-gray-200">
            <h2 className="text-xl font-extrabold text-gray-950 mb-4">Avis clients</h2>
            <div className="flex items-center gap-4">
              <span className="text-5xl font-extrabold text-gray-950">{product.rating}</span>
              <StarRating rating={product.rating} size="md" />
            </div>
            <p className="text-xs text-gray-400 mt-1 mb-5">Basé sur {product.reviewCount} avis</p>
            <button className="rounded-lg bg-brand-purple hover:bg-brand-purple-dark text-white text-xs font-bold px-5 py-3 transition-colors">
              Voir tous les avis
            </button>

            <div className="mt-6 divide-y divide-gray-100">
              {content.reviews.map((r, i) => (
                <div key={i} className="py-5 flex gap-3">
                  <span className="h-10 w-10 shrink-0 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-bold flex items-center justify-center">
                    {r.name[0]}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-950">{r.name}</p>
                    <p className="text-sm text-gray-600 leading-relaxed my-1">“{r.text}”</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.stars }).map((_, j) => (
                        <svg key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:pl-12">
            <h2 className="text-xl font-extrabold text-gray-950 mb-4">Description du produit</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-lg">
              {product.description} {content.about}
            </p>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5 marker:text-brand-pink mb-8">
              {content.bullets.map(b => (
                <li key={b}>{b}</li>
              ))}
              <li>Pointures {product.sizes[0]} à {product.sizes[product.sizes.length - 1]} disponibles</li>
              </ul>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm font-bold text-gray-950 mb-3">Détails</p>
              <dl className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <dt className="text-gray-400 mb-1">Marque</dt>
                  <dd className="font-medium text-gray-800">Ch'Lika</dd>
                </div>
                <div>
                  <dt className="text-gray-400 mb-1">Collection</dt>
                  <dd className="font-medium text-gray-800">{product.category}</dd>
                </div>
                <div>
                  <dt className="text-gray-400 mb-1">Référence</dt>
                  <dd className="font-medium text-gray-800">CL-{String(product.id).padStart(4, '0')}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* You might also like */}
      {related.length > 0 && (
        <section className="py-14 bg-[#f4f2ee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-xl font-extrabold text-gray-950">Vous pourriez aussi aimer</h2>
              <button
                onClick={() => navigate('offre')}
                className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors flex items-center gap-1"
              >
                Voir tout
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map(p => (
                <ProductCard key={p.id} product={p} onClick={() => onProductClick(p)} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
