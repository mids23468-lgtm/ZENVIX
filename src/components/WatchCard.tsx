import React, { useState } from 'react';
import { Eye, ShoppingBag, Check, Sparkles, Shield } from 'lucide-react';
import { Watch } from '../types';

interface WatchCardProps {
  watch: Watch;
  onQuickView: (watch: Watch) => void;
  onAddToCart: (watch: Watch) => void;
}

export const WatchCard: React.FC<WatchCardProps> = ({
  watch,
  onQuickView,
  onAddToCart,
}) => {
  const [added, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(watch);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div
      id={`watch-card-${watch.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(watch)}
      className="group relative flex flex-col bg-gradient-to-b from-[#181310] via-[#120f0d] to-[#0c0a08] border border-[#a88350]/25 rounded-none p-5 transition-all duration-500 hover:border-[#d4af37]/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,55,0.15)] cursor-pointer"
    >
      {/* Top Card Badges */}
      <div className="flex items-center justify-between mb-4 z-10">
        <span className="text-[10px] tracking-[0.25em] font-mono text-[#a89885] uppercase">
          REF. {watch.reference}
        </span>
        {watch.isLimitedEdition && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] font-semibold bg-[#2a1d13] text-[#f0caa0] border border-[#a88350]/40">
            <Sparkles className="w-2.5 h-2.5 text-[#d4af37]" />
            LIMITED {watch.editionLimit ? `(${watch.editionLimit} PCS)` : ''}
          </span>
        )}
      </div>

      {/* Image Showcase Container with Wood Grain Base */}
      <div className="relative w-full aspect-[4/3] bg-[#14100d] overflow-hidden flex items-center justify-center border border-[#2b2118]/80 mb-5">
        {/* Subtle radial light highlight behind watch */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(190,145,75,0.18)_0%,_transparent_70%)]" />

        <img
          src={watch.image}
          alt={watch.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter contrast-105"
        />

        {/* Floating Quick Action Overlay */}
        <div
          className={`absolute inset-0 bg-[#0c0a08]/60 backdrop-blur-[2px] flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(watch);
            }}
            className="p-3 bg-[#1e1712] border border-[#d4af37]/50 text-[#f5e6cf] hover:text-[#ffffff] hover:bg-[#d4af37]/20 transition-colors shadow-lg"
            title="Inspect Horological Details"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Movement Type Tag */}
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#c99f57] font-medium mb-1.5">
            {watch.movement.type}
          </div>

          {/* Watch Name */}
          <h3 className="font-display text-lg sm:text-xl font-medium text-[#f5ebd7] tracking-[0.08em] group-hover:text-gold-gradient transition-colors mb-2">
            {watch.name}
          </h3>

          {/* Subtitle / Essence */}
          <p className="text-xs text-[#a39482] line-clamp-2 leading-relaxed font-light mb-4">
            {watch.subtitle}
          </p>

          {/* Specs Micro-Grid */}
          <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#2b2118]/70 text-[10px] text-[#baa895] font-mono mb-4">
            <div>
              <span className="text-[#7a6b5c] block">CASE</span>
              <span className="text-[#ded1c0] font-sans">{watch.case.diameter}</span>
            </div>
            <div>
              <span className="text-[#7a6b5c] block">RESERVE</span>
              <span className="text-[#ded1c0] font-sans">{watch.movement.powerReserve}</span>
            </div>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-2 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#7d6e5f]">PRICE</span>
            <span className="font-display text-lg sm:text-xl font-semibold text-gold-gradient tracking-wide">
              ${watch.price.toLocaleString()}
            </span>
          </div>

          <button
            id={`btn-add-${watch.id}`}
            onClick={handleAdd}
            className={`px-4 py-2.5 text-[11px] font-display uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              added
                ? 'bg-[#2e4d29] text-[#b3ffaa] border border-[#529346]'
                : 'bg-[#231a14] border border-[#a88350]/60 text-[#f5ebd7] hover:bg-[#d4af37] hover:text-[#120f0c] hover:border-[#d4af37]'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>IN BAG</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>ACQUIRE</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
