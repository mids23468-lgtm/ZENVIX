import React from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { MechanicalGear } from './ClockworkGears';
import heroWatchImg from '../assets/images/hero_zenvix_watch_1789709506183.jpg';

interface HeroProps {
  onExplore: () => void;
  onStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onStory }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0a08] pt-24 pb-16">
      {/* Background Layer: Walnut Wood Grain & Atmospheric Chiaroscuro Lighting */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Deep walnut wood vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08] via-[#0c0a08]/70 to-[#0c0a08]/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#412e1c]/30 via-[#18130e]/80 to-[#0c0a08] z-10" />

        {/* Hero Watch Macro Image */}
        <img
          src={heroWatchImg}
          alt="ZENVIX Luxury Mechanical Timepiece on Walnut Timber"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-110 opacity-70 transition-transform duration-1000 ease-out"
        />

        {/* Floating Antique Mechanical Gears in background */}
        <div className="absolute top-16 left-[-60px] opacity-25 z-10 hidden md:block">
          <MechanicalGear size={260} teeth={24} speed="slow" color="brass" />
        </div>
        <div className="absolute top-36 left-[140px] opacity-20 z-10 hidden md:block">
          <MechanicalGear size={150} teeth={14} speed="reverse-slow" color="gold" />
        </div>
        <div className="absolute bottom-10 right-[-40px] opacity-25 z-10 hidden md:block">
          <MechanicalGear size={300} teeth={28} speed="slow" color="bronze" />
        </div>
        <div className="absolute bottom-48 right-[180px] opacity-20 z-10 hidden md:block">
          <MechanicalGear size={170} teeth={18} speed="reverse-slow" color="brass" />
        </div>
        <div className="absolute top-1/4 right-1/4 opacity-15 z-10 pointer-events-none">
          <MechanicalGear size={110} teeth={12} speed="medium" color="gold" />
        </div>
      </div>

      {/* Foreground Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Luxury Eyebrow / Seal */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#201811]/70 border border-[#c99f57]/30 backdrop-blur-md mb-6 animate-fade-in shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#e8d5b5]">
            HAUTE HORLOGERIE • GENÈVE TRADITION
          </span>
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold text-gold-gradient tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-[1.08] mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
          TIME, REFINED.
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl font-editorial italic text-[#e3dad0] font-light leading-relaxed mb-10 tracking-wide">
          "Precision crafted for those who value every second."
        </p>

        {/* Description detail */}
        <p className="max-w-xl text-xs sm:text-sm text-[#b5a897] leading-relaxed mb-12 tracking-widest uppercase font-light">
          Antique brass gearwork • Gray walnut architecture • Swiss mechanical movements
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md mb-16">
          <button
            id="hero-explore-btn"
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-none bg-gradient-to-r from-[#d4af37] via-[#e5c769] to-[#b38634] text-[#120f0c] font-display font-bold text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>EXPLORE COLLECTION</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            id="hero-story-btn"
            onClick={onStory}
            className="w-full sm:w-auto px-8 py-4 rounded-none bg-[#1a140f]/60 backdrop-blur-sm border border-[#a88350]/50 text-[#f5e6cf] font-display font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#a88350]/20 hover:border-[#d4af37] hover:text-[#ffffff] cursor-pointer"
          >
            DISCOVER OUR STORY
          </button>
        </div>

        {/* Bottom Horological Metrics Strip */}
        <div className="w-full pt-8 border-t border-[#3d3023]/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-sans tracking-[0.2em] text-[#8e7e6e] uppercase">CALIBER BEAT</span>
            <span className="font-display text-sm sm:text-base font-semibold text-[#f0e3ce] mt-0.5">28,800 VPH</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[11px] font-sans tracking-[0.2em] text-[#8e7e6e] uppercase">CABINET FINISH</span>
            <span className="font-display text-sm sm:text-base font-semibold text-[#f0e3ce] mt-0.5">ANTIQUE BRASS & WALNUT</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[11px] font-sans tracking-[0.2em] text-[#8e7e6e] uppercase">ATELIER REGULATION</span>
            <span className="font-display text-sm sm:text-base font-semibold text-[#f0e3ce] mt-0.5">5-POSITION TESTED</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[11px] font-sans tracking-[0.2em] text-[#8e7e6e] uppercase">GUARANTEE</span>
            <span className="font-display text-sm sm:text-base font-semibold text-[#f0e3ce] mt-0.5">5-YEAR PASSPORT</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <button
        onClick={onExplore}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#998776] hover:text-[#d4af37] transition-colors cursor-pointer group z-20"
        aria-label="Scroll to collection"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase mb-1 font-mono group-hover:tracking-[0.4em] transition-all">
          SCROLL
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
      </button>
    </section>
  );
};
