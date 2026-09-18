import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShieldCheck, Box, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [includeWalnutChest, setIncludeWalnutChest] = useState(true);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.watch.price * item.quantity, 0);
  const insuredCourier = 0; // Complimentary
  const total = subtotal;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      const generatedId = `ZX-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setIsCheckingOut(false);
      setOrderConfirmed(true);
    }, 1200);
  };

  const handleFinish = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#050403]/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#100d0a] border-l border-[#a88350]/40 flex flex-col h-full shadow-[0_0_50px_rgba(0,0,0,0.95)]">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#2b2118] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <h2 className="font-display text-base tracking-[0.2em] text-[#f5ebd7] uppercase font-semibold">
              ACQUISITIONS BAG
            </h2>
            <span className="text-xs font-mono text-[#8c7b6c]">({items.length})</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#a89885] hover:text-[#f5ebd7] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Confirmed View */}
        {orderConfirmed ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#201812] border border-[#d4af37] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <CheckCircle2 className="w-8 h-8 text-[#d4af37]" />
            </div>

            <h3 className="font-display text-2xl text-gold-gradient uppercase tracking-wider mb-2">
              ACQUISITION CONFIRMED
            </h3>

            <p className="text-xs font-mono text-[#a39482] uppercase tracking-[0.2em] mb-4">
              ORDER REFERENCE: {orderId}
            </p>

            <p className="text-xs text-[#c2b2a0] leading-relaxed font-light mb-8 max-w-xs">
              Your timepiece is now being prepared at the Geneva Atelier. An official certified Swiss chronometer certificate and tracking dossier have been dispatched to your email.
            </p>

            <div className="w-full p-4 bg-[#16110d] border border-[#3b2d20] text-left text-xs mb-8 space-y-2">
              <div className="flex justify-between text-[#8c7a68]">
                <span>Status:</span>
                <span className="text-[#f5ebd7]">Atelier Inspection & Regulation</span>
              </div>
              <div className="flex justify-between text-[#8c7a68]">
                <span>Packaging:</span>
                <span className="text-[#d4af37]">Walnut Timber Presentation Chest</span>
              </div>
              <div className="flex justify-between text-[#8c7a68]">
                <span>Courier:</span>
                <span className="text-[#f5ebd7]">Insured Armored Express</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 bg-gradient-to-r from-[#d4af37] via-[#e5c769] to-[#b38634] text-[#120f0c] font-display text-xs uppercase tracking-[0.25em] font-bold"
            >
              RETURN TO MAISON
            </button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-[#8c7b6c] py-16">
                  <Box className="w-12 h-12 mb-4 text-[#3d3126]" />
                  <p className="font-display text-sm uppercase tracking-widest text-[#cfbeac] mb-1">
                    YOUR BAG IS EMPTY
                  </p>
                  <p className="text-xs text-[#8c7b6c] max-w-xs">
                    Explore our horological creations and acquire a timepiece of timeless mechanical distinction.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.watch.id}
                    className="p-4 bg-[#16120e] border border-[#2e2319] flex gap-4 relative group"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 bg-[#0d0a08] border border-[#382b1f] overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.watch.image}
                        alt={item.watch.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-display text-xs uppercase tracking-wider text-[#f5ebd7] font-semibold">
                            {item.watch.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.watch.id)}
                            className="text-[#7d6c5b] hover:text-[#e65050] transition-colors ml-2"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-[10px] font-mono text-[#8c7a68] block mt-0.5">
                          {item.selectedStrap ? item.selectedStrap.split(' in ')[0] : 'Saddle Leather'}
                        </span>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#241a12]">
                        <div className="flex items-center border border-[#3b2d20] bg-[#110e0b]">
                          <button
                            onClick={() => onUpdateQuantity(item.watch.id, -1)}
                            className="p-1 text-[#8c7a68] hover:text-[#f5ebd7]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono text-[#f5ebd7]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.watch.id, 1)}
                            className="p-1 text-[#8c7a68] hover:text-[#f5ebd7]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-display text-xs font-semibold text-gold-gradient">
                          ${(item.watch.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-6 bg-[#130f0c] border-t border-[#2b2118] space-y-4">
                {/* Walnut Gift Box Option */}
                <label className="flex items-start gap-3 p-3 bg-[#1c1611] border border-[#3d2f21] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeWalnutChest}
                    onChange={(e) => setIncludeWalnutChest(e.target.checked)}
                    className="mt-0.5 accent-[#d4af37]"
                  />
                  <div className="text-xs">
                    <span className="text-[#f5ebd7] font-semibold block uppercase tracking-wide text-[11px]">
                      Complimentary Gray Walnut Chest
                    </span>
                    <span className="text-[#8c7a68] text-[10px] block mt-0.5">
                      Hand-carved seasoned walnut wood box with brass plaque & serial stamp.
                    </span>
                  </div>
                </label>

                {/* Subtotal lines */}
                <div className="space-y-1.5 text-xs text-[#baa895] pt-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-[#f5ebd7] font-mono">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Swiss Insured Courier</span>
                    <span className="text-[#d4af37] uppercase text-[10px] tracking-wider">COMPLIMENTARY</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#261c14] font-semibold text-sm">
                    <span className="font-display uppercase tracking-wider text-[#f5ebd7]">Total</span>
                    <span className="font-display text-base text-gold-gradient tracking-wide">
                      ${total.toLocaleString()} USD
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  id="cart-checkout-btn"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-3.5 bg-gradient-to-r from-[#d4af37] via-[#e5c769] to-[#b38634] text-[#120f0c] font-display text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                >
                  {isCheckingOut ? (
                    <span>PREPARING DOSSIER...</span>
                  ) : (
                    <>
                      <span>PROCEED TO SECURE ACQUISITION</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
