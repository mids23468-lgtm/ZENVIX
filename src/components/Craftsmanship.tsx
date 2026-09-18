import React, { useState } from 'react';
import atelierImg from '../assets/images/craftsmanship_atelier_1789709597866.jpg';
import { MechanicalGear } from './ClockworkGears';
import { Award, Compass, Hammer, Shield, Eye, Flame } from 'lucide-react';

export const Craftsmanship: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clockwork' | 'materials' | 'finishing'>('clockwork');

  const pillars = [
    {
      icon: <Compass className="w-5 h-5 text-[#d4af37]" />,
      title: 'IN-HOUSE CALIBERS',
      desc: 'Engineered with hand-cut brass pinions, 28,800 vph escapements, and ruby bearings ensuring split-second accuracy.',
    },
    {
      icon: <Flame className="w-5 h-5 text-[#d4af37]" />,
      title: 'HEAT-TREATED METALS',
      desc: 'Our antique bronze and blued hands are tempered at 290°C to achieve a deep, iridescent vintage patina that ages uniquely.',
    },
    {
      icon: <Hammer className="w-5 h-5 text-[#d4af37]" />,
      title: 'GENEVA HAND-CHAMFERING',
      desc: 'Master watchmakers hand-bevel (anglage) every interior skeleton bridge with gentian wood paste for up to 40 hours per piece.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#d4af37]" />,
      title: 'WALNUT TIMBER CASINGS',
      desc: 'Every presentation case is sculpted from seasoned gray walnut hardwood, lined with Italian saddle leather.',
    },
  ];

  return (
    <section id="craftsmanship-section" className="relative py-28 bg-[#0b0907] border-t border-[#2a2017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-[#d4af37]/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
              HAUTE HORLOGERIE TRADITION
            </span>
            <span className="h-[1px] w-8 bg-[#d4af37]/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-gold-gradient tracking-[0.12em] uppercase mb-4">
            THE ART OF CLOCKWORK
          </h2>

          <p className="text-base sm:text-lg font-editorial italic text-[#c8bba8] tracking-wide">
            "In an age of ephemeral electronics, we build monuments to perpetual mechanical time."
          </p>
        </div>

        {/* Feature Split: Atelier Imagery & Horological Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Atelier Photo Frame with Antique Brass Border */}
          <div className="lg:col-span-7 relative group">
            <div className="relative border-2 border-[#a88350]/40 p-2 bg-[#14100c] shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              {/* Corner brass bracket accents */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]" />

              <img
                src={atelierImg}
                alt="ZENVIX Master Watchmaker Workbench with Antique Brass Gears"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover filter brightness-95 contrast-105"
              />

              {/* Floating caption badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#0d0a08]/90 backdrop-blur-md border border-[#a88350]/30 text-left">
                <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#d4af37] block">
                  ATELIER DE GENÈVE • WORKBENCH NO. 4
                </span>
                <p className="text-xs text-[#d8cbba] mt-1 font-light">
                  Hand-assembling 318 micro-components: bronze cogs, blued hairsprings, and ruby pallet forks on aged gray walnut timber.
                </p>
              </div>
            </div>
          </div>

          {/* Story & Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8c7a68]">
              HERITAGE & PHILOSOPHY
            </span>

            <h3 className="font-display text-2xl sm:text-3xl text-[#f3e7d3] tracking-wide uppercase leading-snug">
              Every Gear Carved from Solid Brass. Every Second Respected.
            </h3>

            <p className="text-sm text-[#baa894] leading-relaxed font-light">
              Founded on the belief that a true wristwatch is not merely a tool for measurement, but an intimate kinetic sculpture. At ZENVIX, we reject the disposable nature of digital screens in favor of tensioned mainsprings, rotating balance wheels, and friction-free synthetic rubies.
            </p>

            <p className="text-sm text-[#baa894] leading-relaxed font-light">
              Our master craftsmen spend weeks regulating each escapement across five spatial positions and three temperature variations. The result is an heirloom destined to outlive generations.
            </p>

            {/* Master watchmaker signature block */}
            <div className="pt-4 border-t border-[#31251c] flex items-center justify-between">
              <div>
                <span className="font-display text-sm font-semibold tracking-wider text-[#d4af37] uppercase block">
                  Henri Vance de Zenvix
                </span>
                <span className="text-[11px] text-[#8c7b6c] uppercase tracking-widest">
                  Master Horologist & Atelier Director
                </span>
              </div>
              <div className="font-editorial text-2xl text-[#aa8238] italic">
                H. V. Zenvix
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#130f0c] border border-[#a88350]/20 hover:border-[#d4af37]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div className="w-10 h-10 rounded-none bg-[#1d1611] border border-[#a88350]/40 flex items-center justify-center mb-4 group-hover:border-[#d4af37] transition-colors">
                {pillar.icon}
              </div>
              <h4 className="font-display text-sm font-semibold tracking-[0.15em] text-[#f2e6d2] uppercase mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#a39382] leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
