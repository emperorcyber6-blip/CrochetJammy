import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ShieldCheck, MapPin } from 'lucide-react';
import { CartItem, Currency, DeliveryRegion } from '../types';
import { DELIVERY_OPTIONS } from '../data/products';
import { formatPrice, createWhatsAppOrderLink } from '../utils/formatters';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [selectedRegion, setSelectedRegion] = useState<DeliveryRegion>('kampala');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  if (!isOpen) return null;

  const currentDelivery =
    DELIVERY_OPTIONS.find((d) => d.id === selectedRegion) || DELIVERY_OPTIONS[0];

  const subtotalUGX = items.reduce(
    (sum, item) => sum + item.product.priceUGX * item.quantity,
    0
  );
  const subtotalUSD = items.reduce(
    (sum, item) => sum + item.product.priceUSD * item.quantity,
    0
  );

  const totalUGX = subtotalUGX > 0 ? subtotalUGX + currentDelivery.costUGX : 0;
  const totalUSD = subtotalUSD > 0 ? subtotalUSD + currentDelivery.costUSD : 0;

  const whatsappCheckoutLink = createWhatsAppOrderLink({
    cartItems: items,
    deliveryOption: currentDelivery,
    totalUGX,
    totalUSD,
    currency,
    customerName: customerName || undefined,
    customerPhone: customerPhone || undefined,
    customerAddress: customerAddress || undefined
  });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#121212] border-l border-[#2B2B2B] text-neutral-100 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-[#222] flex items-center justify-between bg-[#0E0E0E]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-serif text-lg font-medium text-white">Your Shopping Bag</h2>
              <span className="text-xs font-mono text-neutral-400">
                ({items.reduce((acc, it) => acc + it.quantity, 0)} items)
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1A1A1A] border border-neutral-800 flex items-center justify-center mx-auto text-neutral-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg text-white">Your bag is empty</h3>
                  <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                    Explore our handmade couture dresses, bags, and bespoke sets.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-[#D4AF37] text-black text-xs font-semibold tracking-wider uppercase cursor-pointer"
                >
                  Discover Collections
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-[#181818] border border-neutral-800 flex gap-3.5 relative text-left"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-18 h-22 object-cover rounded-xl bg-black border border-neutral-700 shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between pr-6">
                        <h4 className="font-serif text-sm font-medium text-white line-clamp-1">
                          {item.product.name}
                        </h4>
                      </div>

                      <div className="text-[11px] text-neutral-400 space-y-0.5 mt-1 font-mono">
                        <div>Size: <span className="text-neutral-200">{item.size}</span></div>
                        <div className="flex items-center gap-1.5">
                          <span>Color:</span>
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block border border-black"
                            style={{ backgroundColor: item.color.hex }}
                          />
                          <span className="text-neutral-200">{item.color.name}</span>
                        </div>
                        {item.customNotes && (
                          <div className="text-[10px] text-[#F3E5AB] italic line-clamp-1">
                            Note: {item.customNotes}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-neutral-700 rounded-lg bg-[#111]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-[#D4AF37] cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-[#D4AF37] cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-mono text-xs font-bold text-[#F3E5AB]">
                        {formatPrice(
                          item.product.priceUGX * item.quantity,
                          item.product.priceUSD * item.quantity,
                          currency
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="absolute top-3 right-3 text-neutral-500 hover:text-red-400 p-1 cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Order Form when Cart has items */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#222] bg-[#0E0E0E] space-y-4">
              
              {/* Delivery Selector */}
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Delivery Region</span>
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value as DeliveryRegion)}
                  className="w-full px-3 py-2 rounded-xl bg-[#1A1A1A] border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {DELIVERY_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label} (+{formatPrice(opt.costUGX, opt.costUSD, currency)})
                    </option>
                  ))}
                </select>
                <p className="text-[10px] text-neutral-400 font-sans">
                  {currentDelivery.timeframe}
                </p>
              </div>

              {/* Customer Quick Info */}
              <div className="grid grid-cols-2 gap-2 text-left">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-[#1A1A1A] border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
                <input
                  type="text"
                  placeholder="Phone / WhatsApp"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-[#1A1A1A] border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <input
                type="text"
                placeholder="Delivery Address / City Area (e.g. Kololo, Kampala)"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#1A1A1A] border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
              />

              {/* Cost Summary */}
              <div className="space-y-1.5 pt-2 border-t border-neutral-800 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-neutral-200">
                    {formatPrice(subtotalUGX, subtotalUSD, currency)}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Estimated Shipping</span>
                  <span className="font-mono text-neutral-200">
                    {formatPrice(currentDelivery.costUGX, currentDelivery.costUSD, currency)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-neutral-800">
                  <span className="font-serif">Grand Total</span>
                  <span className="font-mono text-base text-[#F3E5AB]">
                    {formatPrice(totalUGX, totalUSD, currency)}
                  </span>
                </div>
              </div>

              {/* WhatsApp Checkout Button */}
              <a
                href={whatsappCheckoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Checkout via WhatsApp (+256 763 008 787)</span>
              </a>

              <div className="flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Handcrafted upon order</span>
                </span>
                <button
                  onClick={onClearCart}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Clear Bag
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
