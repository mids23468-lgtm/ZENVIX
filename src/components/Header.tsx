import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { ZenvixLogo } from './ZenvixLogo';
import { ActiveSection } from '../types';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  activeSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
  activeSection,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: ActiveSection }[] = [
    { label: 'HOME', id: 'home' },
    { label: 'COLLECTION', id: 'collection' },
    { label: 'MEN', id: 'men' },
    { label: 'WOMEN', id: 'women' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CRAFTSMANSHIP', id: 'craftsmanship' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id: ActiveSection) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0f0d0bd9] backdrop-blur-md py-3.5 border-b border-[#a88350]/20 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
          : 'bg-gradient-to-b from-[#0b0a09]/95 via-[#0b0a09]/60 to-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div onClick={() => handleNavClick('home')}>
          <ZenvixLogo size={scrolled ? 'sm' : 'md'} />
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-[#f5e2b3]'
                    : 'text-[#d4c8b8]/80 hover:text-[#f5e2b3]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_8px_#d4af37]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side: Search, User, Cart, Mobile Toggle */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          {/* Search Icon */}
          <button
            id="header-search-btn"
            onClick={onOpenSearch}
            aria-label="Search Collection"
            className="p-2 text-[#d4c8b8] hover:text-[#d4af37] transition-colors rounded-full hover:bg-[#251e18]/40"
          >
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* User/Account Icon */}
          <button
            id="header-user-btn"
            onClick={onOpenAccount}
            aria-label="Client Account & Concierge"
            className="p-2 text-[#d4c8b8] hover:text-[#d4af37] transition-colors rounded-full hover:bg-[#251e18]/40"
          >
            <User className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Shopping Bag Icon */}
          <button
            id="header-cart-btn"
            onClick={onOpenCart}
            aria-label="Shopping Bag"
            className="relative p-2 text-[#d4c8b8] hover:text-[#d4af37] transition-colors rounded-full hover:bg-[#251e18]/40 group"
          >
            <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-105" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span
                id="cart-badge-count"
                className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8238] text-[#0d0c0a] font-bold text-[10px] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.7)]"
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-[#d4c8b8] hover:text-[#d4af37] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#110e0c]/98 border-b border-[#a88350]/30 px-6 py-6 transition-all duration-300 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm uppercase tracking-[0.22em] py-2 border-b border-[#2e261e]/40 transition-colors ${
                  activeSection === item.id ? 'text-[#d4af37] font-semibold pl-2' : 'text-[#d4c8b8]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
