import React from 'react';

interface GearProps {
  size?: number;
  teeth?: number;
  speed?: 'slow' | 'medium' | 'fast' | 'reverse-slow';
  color?: 'gold' | 'brass' | 'bronze' | 'dark';
  className?: string;
  hasSpokes?: boolean;
}

export const MechanicalGear: React.FC<GearProps> = ({
  size = 120,
  teeth = 16,
  speed = 'slow',
  color = 'brass',
  className = '',
  hasSpokes = true,
}) => {
  const radius = 42;
  const toothDepth = 6;
  const innerRadius = radius - toothDepth;

  // Generate gear teeth path
  const points: string[] = [];
  const angleStep = (Math.PI * 2) / teeth;

  for (let i = 0; i < teeth; i++) {
    const a1 = i * angleStep;
    const a2 = a1 + angleStep * 0.25;
    const a3 = a1 + angleStep * 0.5;
    const a4 = a1 + angleStep * 0.75;

    // Outer edge
    const rOuter = radius;
    const rInner = innerRadius;

    points.push(`${50 + rInner * Math.cos(a1)},${50 + rInner * Math.sin(a1)}`);
    points.push(`${50 + rOuter * Math.cos(a2)},${50 + rOuter * Math.sin(a2)}`);
    points.push(`${50 + rOuter * Math.cos(a3)},${50 + rOuter * Math.sin(a3)}`);
    points.push(`${50 + rInner * Math.cos(a4)},${50 + rInner * Math.sin(a4)}`);
  }

  const gearPath = `M ${points.join(' L ')} Z`;

  const speedClass = {
    slow: 'animate-gear-slow',
    medium: 'animate-gear-medium',
    fast: 'animate-gear-fast',
    'reverse-slow': 'animate-gear-reverse-slow',
  }[speed];

  const colorConfig = {
    gold: {
      stroke: '#e6ca65',
      fill: 'url(#goldGearGrad)',
      accent: '#f5e2b3',
      shadow: 'rgba(212, 175, 55, 0.4)',
    },
    brass: {
      stroke: '#c99f57',
      fill: 'url(#brassGearGrad)',
      accent: '#dfb77d',
      shadow: 'rgba(184, 134, 70, 0.35)',
    },
    bronze: {
      stroke: '#996f37',
      fill: 'url(#bronzeGearGrad)',
      accent: '#b88646',
      shadow: 'rgba(140, 95, 40, 0.3)',
    },
    dark: {
      stroke: '#4a3d31',
      fill: 'url(#darkGearGrad)',
      accent: '#5a4a3c',
      shadow: 'rgba(0,0,0,0.5)',
    },
  }[color];

  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full ${speedClass}`}
        style={{ filter: `drop-shadow(0 2px 8px ${colorConfig.shadow})` }}
      >
        <defs>
          <linearGradient id="goldGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e5ab" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8a6e1c" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="brassGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e3be81" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#b88646" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#694619" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="bronzeGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b58852" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#7a5223" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3d260f" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="darkGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#382e25" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#211b16" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#14100d" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Outer Teeth & Rim */}
        <path
          d={gearPath}
          fill={colorConfig.fill}
          stroke={colorConfig.stroke}
          strokeWidth="0.8"
        />

        {/* Inner Cutout Ring */}
        <circle cx="50" cy="50" r="28" fill="none" stroke={colorConfig.stroke} strokeWidth="1" strokeOpacity="0.8" />

        {hasSpokes && (
          <g stroke={colorConfig.stroke} strokeWidth="1.8" strokeOpacity="0.85">
            {/* 6 Spokes */}
            <line x1="50" y1="50" x2="50" y2="22" />
            <line x1="50" y1="50" x2="50" y2="78" />
            <line x1="50" y1="50" x2="25.7" y2="36" />
            <line x1="50" y1="50" x2="74.3" y2="64" />
            <line x1="50" y1="50" x2="25.7" y2="64" />
            <line x1="50" y1="50" x2="74.3" y2="36" />
            {/* Screws on spokes */}
            <circle cx="50" cy="30" r="1.4" fill="#3a2e22" stroke={colorConfig.accent} strokeWidth="0.6" />
            <circle cx="50" cy="70" r="1.4" fill="#3a2e22" stroke={colorConfig.accent} strokeWidth="0.6" />
            <circle cx="33" cy="40" r="1.4" fill="#3a2e22" stroke={colorConfig.accent} strokeWidth="0.6" />
            <circle cx="67" cy="60" r="1.4" fill="#3a2e22" stroke={colorConfig.accent} strokeWidth="0.6" />
            <circle cx="33" cy="60" r="1.4" fill="#3a2e22" stroke={colorConfig.accent} strokeWidth="0.6" />
            <circle cx="67" cy="40" r="1.4" fill="#3a2e22" stroke={colorConfig.accent} strokeWidth="0.6" />
          </g>
        )}

        {/* Center Pinion / Axle with Ruby jewel */}
        <circle cx="50" cy="50" r="13" fill="#1e1814" stroke={colorConfig.stroke} strokeWidth="1.2" />
        <circle cx="50" cy="50" r="8" fill="url(#brassGearGrad)" stroke={colorConfig.accent} strokeWidth="0.7" />
        {/* Synthetic Ruby Jewel pivot point */}
        <circle cx="50" cy="50" r="4.2" fill="#9e1b32" stroke="#e64c65" strokeWidth="0.5" />
        <circle cx="49" cy="49" r="1.2" fill="#ff99aa" />
      </svg>
    </div>
  );
};
