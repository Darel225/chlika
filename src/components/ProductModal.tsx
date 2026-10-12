import { useState } from 'react';
import { CartItem, Product } from '../types';
import StarRating from './StarRating';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  onGoToCart: () => void;
}

export default function ProductModal({ product, onClose, onAddToCart, onGoToCart }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart({ product, quantity: qty, size: selectedSize });
    setAdded(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square bg-gray-50 md:aspect-auto md:min-h-[420px]">
            {product.tag && (
              <span className="absolute top-4 left-4 z-10 bg-[#E5007E] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                {product.tag}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col">
            <button
              onClick={onClose}
              className="self-end text-gray-400 hover:text-gray-700 mb-4 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="text-[10px] text-[#662482] font-bold bg-[#C298D8]/20 px-2.5 py-1 rounded-full self-start mb-3 tracking-wider">
              {product.category}
            </span>

            <h2 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {product.name}
            </h2>

            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={product.rating} size="md" />
              <span className="text-sm text-gray-400">({product.reviewCount} avis)</span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-5">{product.description}</p>

            <p className="text-3xl font-black text-[#662482] mb-5">
              {product.price.toLocaleString('fr-FR')} <span className="text-base font-semibold">CFA</span>
            </p>

            {/* Size selection */}
            <div className="mb-5">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Pointure : <span className="text-[#662482]">{selectedSize}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 rounded-xl text-sm font-semibold border-2 transition-all ${
                      selectedSize === size
                        ? 'bg-[#662482] text-white border-[#662482]'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#662482]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Quantité</p>
              <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-1.5">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="text-gray-500 hover:text-[#662482] font-bold w-6 text-lg leading-none transition-colors"
                >
                  −
                </button>
                <span className="font-bold text-gray-900 w-5 text-center">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="text-gray-500 hover:text-[#662482] font-bold w-6 text-lg leading-none transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            {!added ? (
              <button
                onClick={handleAdd}
                className="w-full bg-[#662482] hover:bg-[#E5007E] text-white font-bold py-3.5 rounded-2xl transition-colors duration-200"
              >
                Ajouter au panier
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="w-full bg-green-50 border border-green-200 text-green-700 font-semibold py-3 rounded-2xl text-center text-sm">
                  ✓ Ajouté au panier !
                </div>
                <button
                  onClick={onGoToCart}
                  className="w-full bg-[#E5007E] hover:bg-[#c4006c] text-white font-bold py-3.5 rounded-2xl transition-colors duration-200"
                >
                  Voir le panier
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
