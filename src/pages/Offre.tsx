import { useState } from 'react';
import { Product, Category } from '../types';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

interface OffreProps {
  onProductClick: (product: Product) => void;
}

const categories: Category[] = ['Tous', 'Femme', 'Homme', 'Enfant'];

export default function Offre({ onProductClick }: OffreProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('Tous');
  const [search, setSearch] = useState('');

  const filtered = products.filter(p => {
    const matchCat = activeCategory === 'Tous' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-gradient-to-r from-[#662482] to-[#4a1a5e] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#C298D8] text-xs font-bold tracking-[5px] uppercase mb-3">Catalogue</p>
          <h1
            className="text-white text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Notre Collection
          </h1>
          <p className="text-[#C298D8]/80 max-w-md mx-auto text-sm">
            Des modèles rares importés de Chine et d'Afrique de l'Ouest, à prix compétitifs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Category tabs */}
          <div className="flex gap-2 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#662482] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#662482]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#662482] transition-colors"
            />
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-6">
          {filtered.length} modèle{filtered.length !== 1 ? 's' : ''} disponible{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Products grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-gray-500 font-medium">Aucun modèle trouvé pour "{search}"</p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('Tous'); }}
              className="mt-4 text-sm text-[#662482] hover:text-[#E5007E] font-semibold transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
