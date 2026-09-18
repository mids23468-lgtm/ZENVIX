import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Watch } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  watches: Watch[];
  onSelectWatch: (watch: Watch) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  watches,
  onSelectWatch,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = watches.filter(
    (w) =>
      w.name.toLowerCase().includes(query.toLowerCase()) ||
      w.reference.toLowerCase().includes(query.toLowerCase()) ||
      w.movement.caliber.toLowerCase().includes(query.toLowerCase()) ||
      w.category.toLowerCase().includes(query.toLowerCase()) ||
      w.case.material.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#070605]/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#120f0d] border border-[#a88350]/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6">
        {/* Header & Input */}
        <div className="flex items-center gap-3 border-b border-[#382b1f] pb-4">
          <Search className="w-5 h-5 text-[#d4af37]" />
          <input
            type="text"
            placeholder="Search timepiece, caliber, reference (e.g. Chronograph, ZX-001)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-[#f5ebd7] placeholder-[#7d6c5b] text-sm focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#8c7b6c] hover:text-[#f5ebd7] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick suggestions */}
        <div className="flex items-center gap-2 py-3 text-[11px] text-[#8c7b6c]">
          <span className="uppercase tracking-wider">Suggested:</span>
          {['Chronograph', 'Tourbillon', 'Automatique', 'Heritage'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2 py-0.5 bg-[#1c1611] border border-[#382b1f] hover:border-[#d4af37] text-[#c9b9a6] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto divide-y divide-[#231a13] mt-2">
          {results.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#8c7b6c]">
              No horological creations match your inquiry.
            </div>
          ) : (
            results.map((watch) => (
              <div
                key={watch.id}
                onClick={() => {
                  onSelectWatch(watch);
                  onClose();
                }}
                className="py-3 px-2 flex items-center justify-between hover:bg-[#1c1611] transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0a0807] border border-[#2e2319] overflow-hidden flex-shrink-0">
                    <img
                      src={watch.image}
                      alt={watch.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-xs uppercase tracking-wider text-[#f5ebd7] group-hover:text-[#d4af37] transition-colors">
                      {watch.name}
                    </h4>
                    <span className="text-[10px] font-mono text-[#8c7b6c] block">
                      REF. {watch.reference} • {watch.movement.caliber}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-semibold text-[#f5ebd7]">
                    ${watch.price.toLocaleString()}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#7d6c5b] group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
