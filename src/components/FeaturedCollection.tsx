import React, { useState } from 'react';
import { Watch } from '../types';
import { WatchCard } from './WatchCard';
import { SlidersHorizontal, Sparkles } from 'lucide-react';
import { MechanicalGear } from './ClockworkGears';

interface FeaturedCollectionProps {
  watches: Watch[];
  onQuickView: (watch: Watch) => void;
  onAddToCart: (watch: Watch) => void;
  activeFilterCategory?: string;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  watches,
  onQuickView,
  onAddToCart,
  activeFilterCategory = 'all',
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(activeFilterCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Filter watches based on selection
  const filteredWatches = watches.filter((w) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'men') return w.gender === 'men' || w.gender === 'unisex';
    if (activeFilter === 'women') return w.gender === 'women' || w.gender === 'unisex';
    if (activeFilter === 'chronograph') return w.category === 'chronograph';
    if (activeFilter === 'tourbillon') return w.category === 'tourbillon';
    if (activeFilter === 'automatique') return w.category === 'automatique';
    if (activeFilter === 'heritage') return w.category === 'heritage';
    return true;
  });

  // Sort
  const sortedWatches = [...filteredWatches].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const filterTabs = [
    { id: 'all', label: 'All Creations' },
    { id: 'men', label: 'Gentlemen' },
    { id: 'women', label: 'Ladies' },
    { id: 'chronograph', label: 'Chronographs' },
    { id: 'tourbillon', label: 'Tourbillons' },
  ];

  return (
    <section id="collection-section" className="relative py-28 bg-[#0e0c0a] overflow-hidden">
      {/* Background gear accents */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 opacity-10 pointer-events-none">
        <MechanicalGear size={340} teeth={32} speed="slow" color="brass" />
      </div>
      <div className="absolute -bottom-10 -right-20 opacity-10 pointer-events-none">
        <MechanicalGear size={380} teeth={36} speed="reverse-slow" color="bronze" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#d4af37]/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
              TIMEPIECES OF DISTINCTION
            </span>
            <span className="h-[1px] w-8 bg-[#d4af37]/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-gold-gradient tracking-[0.12em] uppercase mb-4">
            THE ZENVIX COLLECTION
          </h2>

          <p className="text-base sm:text-lg font-editorial italic text-[#c8bba8] tracking-wide max-w-xl mx-auto">
            "Where mechanical artistry meets timeless design."
          </p>
        </div>

        {/* Filter Bar & Sorting */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 mb-10 border-b border-[#2b2118]/80">
          {/* Tabs */}
          <div className="flex items-center flex-wrap justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 border ${
                  activeFilter === tab.id
                    ? 'bg-[#291e16] text-[#f5e2b3] border-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                    : 'bg-[#14100d]/60 text-[#a39482] border-transparent hover:border-[#4a3a2a] hover:text-[#e0d3c1]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sort selection */}
          <div className="flex items-center gap-3 text-xs tracking-wider text-[#998776]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="uppercase tracking-[0.2em]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#181310] border border-[#3b2e21] text-[#f0e3ce] px-3 py-1.5 text-xs uppercase tracking-wider focus:outline-none focus:border-[#d4af37]"
            >
              <option value="featured">Maison Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Watch Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedWatches.map((watch) => (
            <WatchCard
              key={watch.id}
              watch={watch}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Brand guarantee banner underneath collection */}
        <div className="mt-16 p-6 sm:p-8 bg-gradient-to-r from-[#17120e] via-[#211812] to-[#17120e] border border-[#a88350]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-[#100d0a] flex-shrink-0">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="font-display text-sm tracking-[0.15em] text-[#f5ebd7] uppercase font-semibold">
                Maison Certificate of Authenticity Included
              </h4>
              <p className="text-xs text-[#a89885] mt-0.5">
                Every timepiece arrives in a handcrafted walnut presentation chest with an individually numbered Swiss chronometer passport.
              </p>
            </div>
          </div>

          <div className="text-right flex-shrink-0">
            <span className="text-[11px] font-mono text-[#d4af37] tracking-[0.2em] uppercase">
              COMPLIMENTARY SECURE COURIER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
