import React, { useState } from 'react';
import { X, Calendar, MapPin, Mail, Phone, Check, Clock } from 'lucide-react';
import { ZenvixLogo } from './ZenvixLogo';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: 'Geneva Salon',
    date: '',
    interest: 'ZENVIX Imperial Tourbillon',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070605]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#120f0c] border border-[#a88350]/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8c7b6c] hover:text-[#f5ebd7] transition-colors"
          aria-label="Close concierge modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <ZenvixLogo size="sm" className="justify-center mb-3" />
          <h2 className="font-display text-xl text-gold-gradient uppercase tracking-wider">
            PRIVATE CLIENT CONCIERGE
          </h2>
          <p className="text-xs text-[#a89885] mt-1 font-editorial italic text-sm">
            Arrange a private appointment with our master horologist in Geneva or request bespoke timepiece customization.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-[#17120e] border border-[#3b2d20]">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#201812] border border-[#d4af37] flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="font-display text-lg text-[#f5ebd7] uppercase tracking-wider mb-2">
              APPOINTMENT REGISTERED
            </h3>
            <p className="text-xs text-[#c2b2a0] leading-relaxed font-light mb-6">
              Our Maison Director will contact you within 4 hours to confirm your private salon reservation and prepare the requested reference pieces.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#b38634] text-[#120f0c] font-display text-xs uppercase tracking-widest font-bold"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8c7a68] mb-1.5">
                Full Name & Salutation
              </label>
              <input
                type="text"
                required
                placeholder="Lord / Lady / Dr. / Mr. / Ms."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#18130f] border border-[#382b1f] text-[#f5ebd7] text-xs px-3.5 py-2.5 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8c7a68] mb-1.5">
                  Direct Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="client@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#18130f] border border-[#382b1f] text-[#f5ebd7] text-xs px-3.5 py-2.5 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8c7a68] mb-1.5">
                  Salon Location
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#18130f] border border-[#382b1f] text-[#f5ebd7] text-xs px-3.5 py-2.5 focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="Geneva Salon">Geneva Atelier (Rue du Rhône)</option>
                  <option value="Zurich Salon">Zürich Private Suite (Bahnhofstrasse)</option>
                  <option value="London Salon">London Salon (Bond Street)</option>
                  <option value="Virtual Concierge">Virtual Private Video Consultation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8c7a68] mb-1.5">
                Timepiece of Interest
              </label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full bg-[#18130f] border border-[#382b1f] text-[#f5ebd7] text-xs px-3.5 py-2.5 focus:outline-none focus:border-[#d4af37]"
              >
                <option value="ZENVIX Imperial Tourbillon">ZENVIX Imperial — $1,499</option>
                <option value="ZENVIX Chronograph">ZENVIX Chronograph — $1,249</option>
                <option value="ZENVIX Automatique">ZENVIX Automatique — $1,799</option>
                <option value="ZENVIX Heritage">ZENVIX Heritage — $999</option>
                <option value="Bespoke Commission">Bespoke Horology Commission</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#e5c769] to-[#b38634] text-[#120f0c] font-display text-xs uppercase tracking-[0.25em] font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
            >
              CONFIRM CONCIERGE APPOINTMENT
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
