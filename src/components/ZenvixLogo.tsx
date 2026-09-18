import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showSubtitle?: boolean;
}

export const ZenvixLogo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  showSubtitle = true,
}) => {
  const emblemSize = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  const textSize = {
    sm: 'text-base tracking-[0.25em]',
    md: 'text-lg sm:text-xl tracking-[0.3em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.35em]',
  }[size];

  const subSize = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Intricate Heraldic Mechanical 'Z' Emblem */}
      <div className={`relative ${emblemSize} flex-shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
          <defs>
            <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdf0cd" />
              <stop offset="35%" stopColor="#d4af37" />
              <stop offset="70%" stopColor="#aa8238" />
              <stop offset="100%" stopColor="#f3deb0" />
            </linearGradient>
            <linearGradient id="logoBronzeRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8c6736" />
              <stop offset="50%" stopColor="#3d2c19" />
              <stop offset="100%" stopColor="#8c6736" />
            </linearGradient>
          </defs>

          {/* Outer Octagonal Watch Bezel / Cog Notch */}
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="#14110e"
            stroke="url(#logoGold)"
            strokeWidth="2"
          />
          {/* Subtle micro-dots / minute track around seal */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = 50 + 42 * Math.cos(angle);
            const y = 50 + 42 * Math.sin(angle);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={i % 3 === 0 ? "1.6" : "0.9"}
                fill="#d4af37"
                opacity="0.85"
              />
            );
          })}

          {/* Inner Inset Ring with Guilloché grain feel */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="url(#logoBronzeRing)"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />

          {/* Central Stylized Architectural "Z" with Horology Serif Cuts */}
          <path
            d="M 31 31 L 69 31 L 69 37 L 44 63 L 69 63 L 69 69 L 31 69 L 31 63 L 56 37 L 31 37 Z"
            fill="url(#logoGold)"
            stroke="#5c441b"
            strokeWidth="0.8"
          />

          {/* Balance wheel center gem */}
          <circle cx="50" cy="50" r="2.5" fill="#a11b33" stroke="#f3deb0" strokeWidth="0.6" />
        </svg>
      </div>

      {/* Brand Wordmark with luxury spacing */}
      <div className="flex flex-col">
        <span
          className={`font-display font-semibold uppercase text-gold-gradient transition-all duration-300 group-hover:brightness-110 ${textSize}`}
        >
          ZENVIX
        </span>
        {showSubtitle && (
          <span
            className={`font-sans uppercase text-[#aa9d8b] font-medium transition-colors duration-300 group-hover:text-[#d4af37] ${subSize}`}
          >
            WATCHES • SWITZERLAND
          </span>
        )}
      </div>
    </div>
  );
};
