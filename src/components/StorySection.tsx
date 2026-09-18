import React from 'react';
import { MechanicalGear } from './ClockworkGears';
import { Award, Feather, History, Shield, Clock } from 'lucide-react';

export const StorySection: React.FC = () => {
  const milestones = [
    {
      year: '1928',
      title: 'THE FIRST ATELIER',
      desc: 'Master watchmaker Henri Vance opens a small clockwork workshop on the banks of Lake Geneva, converting vintage pocket calibers into precision wrist instruments.',
    },
    {
      year: '1964',
      title: 'THE BRASS RATIO PATENT',
      desc: 'Development of the proprietary antique brass and copper alloy gears, offering near-frictionless meshing and resistance to thermal expansion.',
    },
    {
      year: '1998',
      title: 'THE WALNUT TIMBER INLAY',
      desc: 'Pioneered the hermetic stabilization of cured Swiss gray walnut timber inside watch bezels and casebacks, bridging botanical elegance with mechanical metalwork.',
    },
    {
      year: 'TODAY',
      title: 'THE MODERN SKELETON ERA',
      desc: 'ZENVIX remains an fiercely independent family-owned manufacture, producing under 1,500 hand-regulated timepieces annually for discerning global collectors.',
    },
  ];

  return (
    <section id="about-section" className="relative py-28 bg-[#0a0806] border-t border-[#2a2017] overflow-hidden">
      {/* Subtle background gear */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
        <MechanicalGear size={300} teeth={28} speed="slow" color="gold" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <History className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
              ORIGINS & REPUTATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-gold-gradient tracking-[0.12em] uppercase mb-4">
            DISCOVER OUR STORY
          </h2>

          <p className="text-base sm:text-lg font-editorial italic text-[#c8bba8] tracking-wide">
            "A century of mechanical defiance against the transient and disposable."
          </p>
        </div>

        {/* Narrative Block */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 bg-[#120e0b] border border-[#a88350]/30 shadow-2xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8e7e6e] block mb-2">
                THE MANIFESTO
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-[#f5ebd7] uppercase leading-snug mb-4">
                Why We Still Hear The Ticking of Gears
              </h3>
              <p className="text-xs text-[#a39482] leading-relaxed font-light mb-3">
                In a world that races after planned obsolescence, a mechanical watch is an act of rebellion. Inside every ZENVIX lies a beating heart powered solely by kinetic movement and tensioned springs. No batteries, no motherboards, no firmware updates.
              </p>
              <p className="text-xs text-[#a39482] leading-relaxed font-light">
                When you wind a ZENVIX, you connect with centuries of Swiss clockmakers who understood that true luxury is patience, precision, and physical permanence.
              </p>
            </div>

            <div className="p-6 bg-[#17120e] border border-[#2e2319] space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none bg-[#201812] border border-[#d4af37]/40 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <span className="font-display text-xs uppercase tracking-wider text-[#f5ebd7] font-semibold block">
                    Zero Mass Production
                  </span>
                  <p className="text-[11px] text-[#8c7b6c] mt-0.5">
                    Each reference is manufactured in strictly numbered atelier batches of 150 to 500 pieces.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none bg-[#201812] border border-[#d4af37]/40 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <span className="font-display text-xs uppercase tracking-wider text-[#f5ebd7] font-semibold block">
                    200-Hour Testing Protocol
                  </span>
                  <p className="text-[11px] text-[#8c7b6c] mt-0.5">
                    Every caliber undergoes 8 consecutive days of chronometric verification prior to casing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-none bg-[#201812] border border-[#d4af37]/40 flex items-center justify-center flex-shrink-0">
                  <Feather className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <span className="font-display text-xs uppercase tracking-wider text-[#f5ebd7] font-semibold block">
                    Artisanal Hand Finishing
                  </span>
                  <p className="text-[11px] text-[#8c7b6c] mt-0.5">
                    Hand-turned guilloché dials, flame-blued screws, and perlage circular graining on baseplates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#130f0c] border border-[#2b2118] relative group hover:border-[#d4af37]/50 transition-all"
            >
              <span className="font-display text-3xl text-gold-gradient font-bold tracking-wider block mb-2">
                {m.year}
              </span>
              <h4 className="font-display text-xs uppercase tracking-[0.15em] text-[#f5ebd7] font-semibold mb-2">
                {m.title}
              </h4>
              <p className="text-xs text-[#a39482] leading-relaxed font-light">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
