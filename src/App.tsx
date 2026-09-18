/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCollection } from './components/FeaturedCollection';
import { WatchAnatomy } from './components/WatchAnatomy';
import { Craftsmanship } from './components/Craftsmanship';
import { StorySection } from './components/StorySection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { ConciergeModal } from './components/ConciergeModal';
import { WATCHES } from './data/watches';
import { Watch, CartItem, ActiveSection } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);
  const [activeFilterCategory, setActiveFilterCategory] = useState<string>('all');

  // Add to cart handler
  const handleAddToCart = (watch: Watch, strap?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.watch.id === watch.id);
      if (existing) {
        return prev.map((item) =>
          item.watch.id === watch.id
            ? { ...item, quantity: item.quantity + 1, selectedStrap: strap || item.selectedStrap }
            : item
        );
      }
      return [...prev, { watch, quantity: 1, selectedStrap: strap || watch.strap, includeWoodenBox: true }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.watch.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.watch.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Navigation router / scroll
  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);

    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'collection') {
      setActiveFilterCategory('all');
      document.getElementById('collection-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'men') {
      setActiveFilterCategory('men');
      document.getElementById('collection-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'women') {
      setActiveFilterCategory('women');
      document.getElementById('collection-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'craftsmanship') {
      document.getElementById('craftsmanship-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about') {
      document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0c0a08] text-[#f2ede6] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#fffefc]">
      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsConciergeOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Fullscreen Hero Section */}
        <Hero
          onExplore={() => handleNavigate('collection')}
          onStory={() => handleNavigate('about')}
        />

        {/* Featured Watch Collection */}
        <FeaturedCollection
          watches={WATCHES}
          onQuickView={(watch) => setSelectedWatch(watch)}
          onAddToCart={handleAddToCart}
          activeFilterCategory={activeFilterCategory}
        />

        {/* Clockwork Anatomy & Complications */}
        <WatchAnatomy />

        {/* Swiss Atelier Craftsmanship */}
        <Craftsmanship />

        {/* Brand Lore & Manifesto */}
        <StorySection />
      </main>

      {/* Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Modals & Drawers */}
      <QuickViewModal
        watch={selectedWatch}
        onClose={() => setSelectedWatch(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        watches={WATCHES}
        onSelectWatch={(watch) => setSelectedWatch(watch)}
      />

      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />
    </div>
  );
}
