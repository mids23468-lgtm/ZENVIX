import React, { useState } from 'react';
import { ZenvixLogo } from './ZenvixLogo';
import { Mail, Phone, MapPin, ShieldCheck, Clock, Check, ArrowRight } from 'lucide-react';
import { ActiveSection } from '../types';

interface FooterProps {
  onNavigate: (section: ActiveSection) => void;
  onOpenConcierge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConcierge }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact-section" className="relative bg-[#080706] text-[#baa895] border-t border-[#2e2319] pt-20 pb-12">
      {/* Top Newsletter & Atelier Allocation Dispatch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-12 bg-gradient-to-b from-[#16110d] to-[#0f0c0a] border border-[#a88350]/30 relative overflow-hidden">
          {/* Subtle background brass glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(212,175,55,0.08)_0%,_transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-[0.3em] block mb-2">
                THE MAISON REGISTER
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#f5ebd7] uppercase tracking-wide">
                Receive Private Allocation Bulletins
              </h3>
              <p className="text-xs text-[#a39382] mt-2 font-light leading-relaxed max-w-xl">
                Be notified of limited-edition tourbillon drops, private Geneva salon viewings, and technical dossiers prior to public unveiling.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 bg-[#1f1711] border border-[#d4af37] text-xs text-[#f5ebd7] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Your address has been added to the Maison Register.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter confidential email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-[#1c1611] border border-[#3b2d20] text-[#f5ebd7] text-xs px-4 py-3 focus:outline-none focus:border-[#d4af37] placeholder-[#7a6b5c]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b38634] text-[#120f0c] font-display text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>ENROLL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#231a13]">
        {/* Col 1: Brand & Identity */}
        <div className="lg:col-span-2 space-y-4">
          <ZenvixLogo size="md" />
          <p className="text-xs text-[#8e7e6e] leading-relaxed font-light max-w-sm pt-2">
            ZENVIX WATCHES is an independent Swiss haute horlogerie maison dedicated to the revival of antique brass clockwork mechanics, gray walnut casing art, and perpetual tourbillon precision.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-[#d4af37] pt-2">
            <span>GENÈVE</span>
            <span>•</span>
            <span>ZÜRICH</span>
            <span>•</span>
            <span>EST. 1928</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="font-display text-xs uppercase tracking-[0.2em] text-[#f5ebd7] font-semibold">
            THE MAISON
          </h4>
          <ul className="space-y-2 text-xs text-[#a39482]">
            <li>
              <button onClick={() => onNavigate('collection')} className="hover:text-[#d4af37] transition-colors">
                The ZENVIX Collection
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('men')} className="hover:text-[#d4af37] transition-colors">
                Gentlemen’s Calibers
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('women')} className="hover:text-[#d4af37] transition-colors">
                Ladies’ Creations
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('craftsmanship')} className="hover:text-[#d4af37] transition-colors">
                Swiss Clockwork Atelier
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-[#d4af37] transition-colors">
                Maison Heritage & Values
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Salons & Atelier */}
        <div className="space-y-3">
          <h4 className="font-display text-xs uppercase tracking-[0.2em] text-[#f5ebd7] font-semibold">
            PRIVATE SALONS
          </h4>
          <div className="text-xs text-[#a39482] space-y-3 font-light">
            <div>
              <span className="text-[#f5ebd7] block font-medium">Geneva Atelier</span>
              <span>Rue du Rhône 42, 1204 Genève</span>
            </div>
            <div>
              <span className="text-[#f5ebd7] block font-medium">Zürich Suite</span>
              <span>Bahnhofstrasse 18, 8001 Zürich</span>
            </div>
            <div>
              <button
                onClick={onOpenConcierge}
                className="text-[#d4af37] hover:underline font-mono text-[11px] uppercase tracking-wider"
              >
                Book Private Viewing →
              </button>
            </div>
          </div>
        </div>

        {/* Col 4: Assurance & Settings */}
        <div className="space-y-3">
          <h4 className="font-display text-xs uppercase tracking-[0.2em] text-[#f5ebd7] font-semibold">
            CLIENT PRIVILEGE
          </h4>
          <ul className="space-y-2 text-xs text-[#a39482] font-light">
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>5-Year Atelier Warranty</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Complimentary 3-Year Overhaul</span>
            </li>
            <li>Insured Armored Courier</li>
            <li>Bespoke Caseback Engraving</li>
          </ul>

          <div className="pt-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#7a6b5c] block mb-1">
              CURRENCY:
            </span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-[#14100c] border border-[#3b2d20] text-[#f5ebd7] px-2.5 py-1 text-xs uppercase tracking-wider"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="CHF">CHF (Fr.)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6e6052] gap-4">
        <div>
          © {new Date().getFullYear()} ZENVIX WATCHES GENÈVE S.A. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6">
          <span className="hover:text-[#a89885] cursor-pointer">CERTIFICATE OF AUTHENTICITY</span>
          <span className="hover:text-[#a89885] cursor-pointer">HOROLOGICAL STANDARDS</span>
          <span className="hover:text-[#a89885] cursor-pointer">PRIVACY POLICY</span>
        </div>
      </div>
    </footer>
  );
};
