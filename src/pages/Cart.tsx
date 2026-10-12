import { CartItem, Page, Product } from '../types';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

interface CartProps {
  cart: CartItem[];
  updateQuantity: (productId: number, size: string, delta: number) => void;
  removeFromCart: (productId: number, size: string) => void;
  navigate: (page: Page) => void;
  onProductClick: (product: Product) => void;
  onCheckout: () => void;
}

const LIVRAISON = 0;

export default function Cart({ cart, updateQuantity, removeFromCart, navigate, onProductClick, onCheckout }: CartProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = subtotal + LIVRAISON;

  const suggestions = products.filter(p => !cart.find(c => c.product.id === p.id)).slice(0, 3);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center max-w-sm">
          <div className="text-7xl mb-6">🛍️</div>
          <h2 className="text-2xl font-black text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Votre panier est vide
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Découvrez notre collection et trouvez la paire qui vous ressemble.
          </p>
          <button
            onClick={() => navigate('offre')}
            className="bg-[#662482] hover:bg-[#E5007E] text-white font-bold px-8 py-4 rounded-full transition-colors duration-200"
          >
            Voir la collection
          </button>
        </div>

        {suggestions.length > 0 && (
          <div className="w-full max-w-5xl mt-16 px-4">
            <h3 className="text-xl font-black text-gray-900 mb-6 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Vous pourriez aimer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {suggestions.map(p => (
                <ProductCard key={p.id} product={p} onClick={() => onProductClick(p)} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#662482] to-[#4a1a5e] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-3xl font-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Mon Panier
          </h1>
          <p className="text-[#C298D8]/80 text-sm mt-1">{cart.length} article{cart.length > 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cart.map(item => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="bg-white rounded-2xl p-5 flex gap-4 shadow-sm border border-gray-100"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{item.product.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Pointure : {item.size} · {item.product.category}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="text-gray-300 hover:text-red-400 transition-colors shrink-0"
                      aria-label="Supprimer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-1">{item.product.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-1.5">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, -1)}
                        className="text-gray-500 hover:text-[#662482] font-bold text-lg leading-none w-5 transition-colors"
                      >
                        −
                      </button>
                      <span className="font-bold text-gray-900 w-5 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, 1)}
                        className="text-gray-500 hover:text-[#662482] font-bold text-lg leading-none w-5 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-black text-[#662482]">
                      {(item.product.price * item.quantity).toLocaleString('fr-FR')} CFA
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h2 className="font-black text-gray-900 text-lg mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Résumé de commande
              </h2>

              <div className="flex flex-col gap-3 mb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Sous-total</span>
                  <span className="font-semibold text-gray-900">{subtotal.toLocaleString('fr-FR')} CFA</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Livraison</span>
                  <span className="font-semibold text-green-600">Gratuit</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">TOTAL</span>
                  <span className="font-black text-[#662482] text-lg">{total.toLocaleString('fr-FR')} CFA</span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-[#E5007E] hover:bg-[#c4006c] text-white font-bold py-4 rounded-2xl transition-colors duration-200 mb-4"
              >
                Passer la commande
              </button>

              {/* Trust badges */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                  Paiement 100% sécurisé
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4 text-[#662482] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  Livraison rapide à Abidjan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="mt-16">
            <h3
              className="text-2xl font-black text-gray-900 mb-6 text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Vous pourriez aussi aimer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {suggestions.map(p => (
                <ProductCard key={p.id} product={p} onClick={() => onProductClick(p)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
