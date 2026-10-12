import { Product } from '../types';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {product.tag && (
          <span className="absolute top-3 left-3 z-10 bg-[#E5007E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider">
            {product.tag}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="mb-1">
          <h3 className="font-bold text-gray-900 text-sm leading-tight">{product.name}</h3>
        </div>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">{product.description}</p>
        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>
        <div className="flex items-center justify-between">
          <p className={`font-black text-[#662482] text-sm${product.id === 74 ? ' pb-1' : ''}${product.id === 99 ? ' pl-[11px]' : ''}`}>
            {product.price.toLocaleString('fr-FR')} CFA
          </p>
          <button
            onClick={e => { e.stopPropagation(); onClick(); }}
            className="bg-[#662482] hover:bg-[#E5007E] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
}
