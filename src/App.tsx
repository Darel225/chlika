import { useState } from 'react';
import { CartItem, Page, Product } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import CheckoutModal from './components/CheckoutModal';
import Home from './pages/Home';
import Offre from './pages/Offre';
import Cart from './pages/Cart';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('accueil');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [authModal, setAuthModal] = useState<'login' | 'register' | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProduct = (product: Product) => {
    setSelectedProduct(product);
    navigate('product');
  };

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(
        i => i.product.id === item.product.id && i.size === item.size
      );
      if (existing) {
        return prev.map(i =>
          i.product.id === item.product.id && i.size === item.size
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (productId: number, size: string, delta: number) => {
    setCart(prev =>
      prev
        .map(i =>
          i.product.id === productId && i.size === size
            ? { ...i, quantity: Math.max(0, i.quantity + delta) }
            : i
        )
        .filter(i => i.quantity > 0)
    );
  };

  const removeFromCart = (productId: number, size: string) => {
    setCart(prev => prev.filter(i => !(i.product.id === productId && i.size === size)));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar
        currentPage={currentPage}
        navigate={navigate}
        cartCount={cartCount}
        onAuthClick={() => setAuthModal('login')}
      />

      <main className="flex-1">
        {currentPage === 'accueil' && (
          <Home navigate={navigate} onProductClick={openProduct} />
        )}
        {currentPage === 'offre' && (
          <Offre onProductClick={openProduct} />
        )}
        {currentPage === 'panier' && (
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            navigate={navigate}
            onProductClick={openProduct}
            onCheckout={() => setCheckoutOpen(true)}
          />
        )}
        {currentPage === 'apropos' && <APropos navigate={navigate} />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'product' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            navigate={navigate}
            onAddToCart={addToCart}
            onProductClick={openProduct}
          />
        )}
      </main>

      <Footer navigate={navigate} />

      {authModal && (
        <AuthModal
          mode={authModal}
          onClose={() => setAuthModal(null)}
          onSwitch={mode => setAuthModal(mode)}
        />
      )}

      {checkoutOpen && (
        <CheckoutModal
          cart={cart}
          total={cart.reduce((sum, i) => sum + i.product.price * i.quantity, 0)}
          onClose={() => setCheckoutOpen(false)}
          onSuccess={() => {
            setCart([]);
            setCheckoutOpen(false);
            navigate('accueil');
          }}
        />
      )}
    </div>
  );
}
