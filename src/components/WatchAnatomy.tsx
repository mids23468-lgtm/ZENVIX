import React, { useState } from 'react';
import { MechanicalGear } from './ClockworkGears';
import { Cog, Activity, Compass, Layers, ShieldCheck, Zap } from 'lucide-react';

export const WatchAnatomy: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<number>(0);

  const parts = [
    {
      id: 'escapement',
      name: 'THE FLYING TOURBILLON & ESCAPEMENT',
      tagline: 'Gravity-defying perpetual rotational accuracy',
      vph: '28,800 beats / hour',
      desc: 'Rotates 360 degrees every 60 seconds to counteract gravitational distortion on the balance spring. Hand-tuned by master chronometrists to within -2/+2 seconds per day.',
      specs: [
        { label: 'Oscillation Speed', value: '4 Hz / 8 beats/sec' },
        { label: 'Balance Wheel', value: 'Glucydur with gold micro-screws' },
        { label: 'Hairspring', value: 'Anachron heat-blued Breguet overcoil' },
      ],
      gearColor: 'gold' as const,
    },
    {
      id: 'skeleton',
      name: 'THE BRASS CLOCKWORK GEAR TRAIN',
      tagline: 'Micro-milled antique brass pinions & wheel teeth',
      vph: 'Kinetic torque transfer ratio 1:3600',
      desc: 'Transmits kinetic power smoothly through four step-up wheels with cycloidal tooth geometry. Every wheel is milled from high-density antique brass and finished with circular satin brushwork.',
      specs: [
        { label: 'Gear Alloy', value: 'CuZn39Pb3 Antique Brass' },
        { label: 'Pinion Leaves', value: 'Hardened burnished steel' },
        { label: 'Bearing Jewels', value: '35 Synthetic Corundum Rubies' },
      ],
      gearColor: 'brass' as const,
    },
    {
      id: 'mainspring',
      name: 'TWIN SYNCHRONIZED POWER BARRELS',
      tagline: 'Up to 80 hours of continuous mechanical reserve',
      vph: 'Dual Nivaflex mainspring alloy',
      desc: 'Stores kinetic tension in series to deliver consistent torque across the entire power reserve curve, avoiding the typical amplitude drops of standard wristwatches.',
      specs: [
        { label: 'Energy Capacity', value: '72 to 80 Hours' },
        { label: 'Winding Mechanism', value: 'Bidirectional Tungsten Rotor' },
        { label: 'Clutch', value: 'Slipping bridle mainspring' },
      ],
      gearColor: 'bronze' as const,
    },
    {
      id: 'crystal',
      name: 'DOMED SAPPHIRE & GRAY WALNUT INLAY',
      tagline: 'Diamond-hard crystal framed by natural aged timber',
      vph: 'Mohs hardness scale 9 (Scratch-Proof)',
      desc: 'Crowned with double-domed synthetic sapphire treated with five layers of internal anti-reflective vapor coating. The perimeter is accented with sustainably harvested aged gray walnut wood.',
      specs: [
        { label: 'Crystal Thickness', value: '2.4 mm Box-Curved' },
        { label: 'Bezel Ring', value: 'Cured Walnut & PVD Bronze' },
        { label: 'Water Seal', value: 'Viton gasket rated 100 meters' },
      ],
      gearColor: 'brass' as const,
    },
  ];

  const current = parts[selectedPart];

  return (
    <section className="relative py-28 bg-[#0e0c09] border-t border-[#2a2017] overflow-hidden">
      {/* Background Walnut Wood Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0c09] via-[#16120e] to-[#0e0c09] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Cog className="w-4 h-4 text-[#d4af37] animate-spin-slow" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
              HOROLOGICAL ARCHITECTURE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-gold-gradient tracking-[0.12em] uppercase mb-4">
            ANATOMY OF A ZENVIX
          </h2>

          <p className="text-base sm:text-lg font-editorial italic text-[#c8bba8] tracking-wide">
            Explore the micro-engineering behind our vintage clockwork movements.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#130f0c]/90 border border-[#a88350]/30 p-6 sm:p-10 shadow-2xl">
          {/* Left: Component Selectors */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <span className="text-[11px] font-mono text-[#8c7a68] uppercase tracking-[0.25em] mb-1">
              SELECT COMPLICATION:
            </span>
            {parts.map((p, idx) => {
              const isSelected = selectedPart === idx;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPart(idx)}
                  className={`text-left p-4 transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#241a13] border-[#d4af37] text-[#f5ebd7] shadow-[0_0_20px_rgba(212,175,55,0.2)] pl-5'
                      : 'bg-[#18130f] border-[#2b2118] text-[#9e8d7d] hover:border-[#4d3a2a] hover:text-[#dcd1c2]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-display font-semibold uppercase tracking-[0.15em]">
                      {p.name.split('&')[0]}
                    </span>
                    <span
                      className={`text-[10px] font-mono ${
                        isSelected ? 'text-[#d4af37]' : 'text-[#6e5d4e]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#948473] block mt-1 line-clamp-1 font-light">
                    {p.tagline}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Center: Live Clockwork Gear Animation Canvas */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-[#0b0907] border border-[#2e2319] min-h-[320px] relative overflow-hidden">
            {/* Ambient Radial Spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)]" />

            {/* Meshed Gears interacting */}
            <div className="relative w-56 h-56 flex items-center justify-center">
              {/* Primary Central Gear */}
              <div className="absolute">
                <MechanicalGear
                  size={190}
                  teeth={20}
                  speed="slow"
                  color={current.gearColor}
                />
              </div>

              {/* Secondary interlocking gear */}
              <div className="absolute -top-6 -right-6 opacity-75">
                <MechanicalGear
                  size={110}
                  teeth={12}
                  speed="reverse-slow"
                  color={current.gearColor === 'gold' ? 'brass' : 'gold'}
                />
              </div>

              {/* Small pinion escapement wheel */}
              <div className="absolute -bottom-4 -left-4 opacity-80">
                <MechanicalGear
                  size={85}
                  teeth={9}
                  speed="fast"
                  color="bronze"
                />
              </div>

              {/* Center Tourbillon Oscillating Pulse Badge */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#16120e] border border-[#d4af37] flex flex-col items-center justify-center text-center shadow-lg">
                <Activity className="w-4 h-4 text-[#d4af37] animate-pulse" />
                <span className="text-[8px] font-mono text-[#d4af37] mt-0.5 tracking-wider">
                  ACTIVE
                </span>
              </div>
            </div>

            <div className="mt-6 text-center z-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#9e8d7d] block">
                FREQUENCY METRIC
              </span>
              <span className="text-xs font-display text-[#f5ebd7] font-semibold tracking-widest mt-0.5">
                {current.vph}
              </span>
            </div>
          </div>

          {/* Right: Technical Blueprint & Specifications */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-5">
            <div>
              <div className="inline-block px-2.5 py-1 bg-[#201812] border border-[#a88350]/40 text-[#d4af37] text-[10px] font-mono uppercase tracking-[0.2em] mb-3">
                PATENT SPECIFICATION ZX-PT
              </div>

              <h3 className="font-display text-xl text-[#f5ebd7] uppercase tracking-wider mb-2">
                {current.name}
              </h3>

              <p className="text-xs text-[#b8a795] leading-relaxed font-light mb-6">
                {current.desc}
              </p>
            </div>

            {/* Specifications Matrix */}
            <div className="space-y-3 pt-4 border-t border-[#2e2319]">
              {current.specs.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs py-1.5 border-b border-[#231a13]"
                >
                  <span className="text-[#8c7b6c] uppercase tracking-wider text-[10px]">
                    {s.label}
                  </span>
                  <span className="font-sans font-medium text-[#f0e4d2] text-right">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
