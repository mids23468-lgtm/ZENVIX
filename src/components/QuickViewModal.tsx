import React, { useState } from 'react';
import { X, ShieldCheck, Check, ShoppingBag, Sparkles, Compass, Layers, RotateCcw } from 'lucide-react';
import { Watch } from '../types';

interface QuickViewModalProps {
  watch: Watch | null;
  onClose: () => void;
  onAddToCart: (watch: Watch, strap?: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  watch,
  onClose,
  onAddToCart,
}) => {
  if (!watch) return null;

  const [selectedStrap, setSelectedStrap] = useState<string>(watch.strap);
  const [added, setAdded] = useState(false);

  const strapOptions = [
    watch.strap,
    'Horween Cordovan Leather in Vintage Espresso',
    'Milanese Antique Bronze Mesh Bracelet',
  ];

  const handleAdd = () => {
    onAddToCart(watch, selectedStrap);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070605]/85 backdrop-blur-md overflow-y-auto">
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#110e0c] border border-[#a88350]/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#a89885] hover:text-[#f5ebd7] transition-colors bg-[#1a1410] border border-[#3b2e21]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Watch Visual Stage */}
          <div className="relative bg-[#0d0a08] p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#2b2016]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.12)_0%,_transparent_75%)]" />

            <div className="relative w-full aspect-square max-w-sm flex items-center justify-center border border-[#2b2016] overflow-hidden shadow-2xl">
              <img
                src={watch.image}
                alt={watch.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
            </div>

            {/* Quick badges under image */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-[#1c1510] border border-[#a88350]/30 text-[10px] font-mono uppercase tracking-widest text-[#d4af37]">
                REF: {watch.reference}
              </span>
              <span className="px-3 py-1 bg-[#1c1510] border border-[#a88350]/30 text-[10px] font-mono uppercase tracking-widest text-[#c8b7a4]">
                CALIBER: {watch.movement.caliber}
              </span>
            </div>
          </div>

          {/* Right: Technical Dossier & Order Configuration */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[85vh]">
            <div>
              {/* Limited badge */}
              {watch.isLimitedEdition && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#251a11] border border-[#a88350]/50 text-[#f5d0a6] text-[10px] uppercase font-mono tracking-widest mb-3">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  LIMITED ALLOCATION {watch.editionLimit ? `(${watch.editionLimit} PIECES)` : ''}
                </div>
              )}

              <h2 className="font-display text-2xl sm:text-3xl text-gold-gradient font-medium tracking-wide uppercase">
                {watch.name}
              </h2>

              <p className="text-xs font-editorial italic text-[#baa996] mt-1 text-base">
                {watch.subtitle}
              </p>

              <div className="mt-4 font-display text-2xl font-bold text-[#f5ebd7] tracking-wider">
                ${watch.price.toLocaleString()} USD
              </div>

              <p className="text-xs text-[#a39382] leading-relaxed mt-4 font-light border-t border-[#231a13] pt-4">
                {watch.description}
              </p>

              {/* Horological Specifications Table */}
              <div className="mt-5 space-y-2 border-t border-b border-[#231a13] py-4">
                <div className="grid grid-cols-2 text-xs py-1">
                  <span className="text-[#7d6c5b] text-[11px] uppercase tracking-wider">Movement</span>
                  <span className="text-[#ded1c0] font-sans text-right">{watch.movement.type}</span>
                </div>
                <div className="grid grid-cols-2 text-xs py-1">
                  <span className="text-[#7d6c5b] text-[11px] uppercase tracking-wider">Power Reserve</span>
                  <span className="text-[#ded1c0] font-sans text-right">{watch.movement.powerReserve}</span>
                </div>
                <div className="grid grid-cols-2 text-xs py-1">
                  <span className="text-[#7d6c5b] text-[11px] uppercase tracking-wider">Frequency</span>
                  <span className="text-[#ded1c0] font-sans text-right">{watch.movement.frequency}</span>
                </div>
                <div className="grid grid-cols-2 text-xs py-1">
                  <span className="text-[#7d6c5b] text-[11px] uppercase tracking-wider">Case Material</span>
                  <span className="text-[#ded1c0] font-sans text-right">{watch.case.material}</span>
                </div>
                <div className="grid grid-cols-2 text-xs py-1">
                  <span className="text-[#7d6c5b] text-[11px] uppercase tracking-wider">Dimensions</span>
                  <span className="text-[#ded1c0] font-sans text-right">{watch.case.diameter} × {watch.case.thickness}</span>
                </div>
                <div className="grid grid-cols-2 text-xs py-1">
                  <span className="text-[#7d6c5b] text-[11px] uppercase tracking-wider">Water Proof</span>
                  <span className="text-[#ded1c0] font-sans text-right">{watch.case.waterResistance}</span>
                </div>
              </div>

              {/* Bespoke Strap Selection */}
              <div className="mt-5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8e7d6d] block mb-2">
                  SELECT COMPLIMENTARY STRAP:
                </span>
                <div className="space-y-1.5">
                  {strapOptions.map((strap, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedStrap(strap)}
                      className={`w-full text-left px-3 py-2 text-xs transition-all border ${
                        selectedStrap === strap
                          ? 'bg-[#261c14] border-[#d4af37] text-[#f5ebd7]'
                          : 'bg-[#15100c] border-[#2c2016] text-[#9c8b7a] hover:border-[#4a3a29]'
                      }`}
                    >
                      {strap}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2">
              <button
                id="modal-acquire-btn"
                onClick={handleAdd}
                className={`w-full py-3.5 font-display text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  added
                    ? 'bg-[#294d24] text-[#a9f59f] border border-[#44833b]'
                    : 'bg-gradient-to-r from-[#d4af37] via-[#e5c769] to-[#b38634] text-[#120f0c] hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO CLIENT BAG</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ACQUIRE THIS TIMEPIECE</span>
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-[#8c7b6c] uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#d4af37]" /> 5-Year Warranty
                </span>
                <span>•</span>
                <span>Insured Swiss Courier</span>
                <span>•</span>
                <span>Boutique Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
