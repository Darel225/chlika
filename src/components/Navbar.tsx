import { useState } from 'react';
import { Page } from '../types';

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const navItems: { label: string; page: Page }[] = [
  { label: 'ACCUEIL', page: 'accueil' },
  { label: 'OFFRE', page: 'offre' },
  { label: 'PANIER', page: 'panier' },
  { label: 'À PROPOS', page: 'apropos' },
  { label: 'CONTACT', page: 'contact' },
];

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
  cartCount: number;
  onAuthClick: () => void;
}

export default function Navbar({ currentPage, navigate, cartCount, onAuthClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => navigate('accueil')} className="focus:outline-none">
            <img src="/logo.png" alt="Ch'Lika" className="h-[65px] w-[65px]" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => navigate(page)}
                className={`text-[11px] font-semibold tracking-[2px] transition-colors hover:text-[#E5007E] pb-0.5 ${
                  currentPage === page
                    ? 'text-[#662482] border-b-2 border-[#E5007E]'
                    : 'text-gray-600'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onAuthClick}
              className="text-gray-600 hover:text-[#662482] transition-colors"
              aria-label="Compte"
            >
              <UserIcon />
            </button>
            <button
              onClick={() => navigate('panier')}
              className="relative text-gray-600 hover:text-[#662482] transition-colors"
              aria-label="Panier"
            >
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E5007E] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold leading-none">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-gray-600 hover:text-[#662482] p-1"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navItems.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => { navigate(page); setMobileOpen(false); }}
                className={`text-left text-sm font-semibold tracking-widest transition-colors hover:text-[#E5007E] ${
                  currentPage === page ? 'text-[#662482]' : 'text-gray-600'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
