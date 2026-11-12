import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Sparkles, Check, Clock, Ruler, ShieldCheck, Heart } from 'lucide-react';
import { Product, Currency, ColorOption } from '../types';
import { formatPrice, createWhatsAppOrderLink } from '../utils/formatters';

interface QuickViewModalProps {
  product: Product | null;
  currency: Currency;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: ColorOption, notes: string) => void;
  onOpenSizing: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  currency,
  isOpen,
  onClose,
  onAddToCart,
  onOpenSizing
}) => {
  if (!isOpen || !product) return null;

  const [selectedColor, setSelectedColor] = useState<ColorOption>(product.availableColors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [customNotes, setCustomNotes] = useState('');
  const [showOriginalCapture, setShowOriginalCapture] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, customNotes);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  const whatsappLink = createWhatsAppOrderLink({
    productName: product.name,
    priceUGX: product.priceUGX,
    priceUSD: product.priceUSD,
    currency,
    size: selectedSize,
    color: selectedColor.name,
    customNotes: customNotes || undefined
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#121212] border border-[#2E2E2E] rounded-3xl overflow-hidden shadow-2xl text-neutral-100 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-[#D4AF37] hover:text-black text-neutral-300 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Product Photography & Original Capture Toggle */}
          <div className="md:col-span-6 bg-[#0D0D0D] relative flex flex-col justify-between p-6 border-b md:border-b-0 md:border-r border-[#222]">
            <div className="relative aspect-[3/4.2] w-full rounded-2xl overflow-hidden bg-black border border-[#2B2B2B]">
              <img
                src={showOriginalCapture ? product.originalImage : product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />

              {product.badge && (
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#D4AF37] text-black text-[10px] font-bold tracking-wider uppercase shadow-md">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Toggle between Studio Crop & Original Attachment */}
            <div className="mt-4 flex items-center justify-between text-xs pt-2">
              <span className="text-neutral-400 font-mono text-[11px]">
                Capture View:
              </span>
              <div className="inline-flex rounded-lg bg-[#1A1A1A] p-0.5 border border-[#333]">
                <button
                  type="button"
                  onClick={() => setShowOriginalCapture(false)}
                  className={`px-3 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    !showOriginalCapture
                      ? 'bg-[#D4AF37] text-black shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Studio Framing
                </button>
                <button
                  type="button"
                  onClick={() => setShowOriginalCapture(true)}
                  className={`px-3 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    showOriginalCapture
                      ? 'bg-[#D4AF37] text-black shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Status Capture
                </button>
              </div>
            </div>

            {/* Craftsmanship Highlights */}
            <div className="mt-4 pt-4 border-t border-[#222] space-y-2 text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                Atelier Notes
              </span>
              <ul className="space-y-1.5 text-xs text-neutral-300">
                {product.craftDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Customization Controls & Purchase Module */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              {/* Category & Title */}
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
                  {product.categoryLabel}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-1">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-mono text-2xl text-[#F3E5AB] font-bold tabular-nums">
                    {formatPrice(product.priceUGX, product.priceUSD, currency)}
                  </span>
                  <span className="text-[11px] font-sans text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{product.timelineDays} days bespoke crafting</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                {product.shortDescription}
              </p>

              {/* Color Selector */}
              <div className="space-y-2 pt-2 border-t border-[#222]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">
                    Yarn Colorway: <strong className="text-[#F3E5AB]">{selectedColor.name}</strong>
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">Custom dye available</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {product.availableColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                        selectedColor.name === color.name
                          ? 'border-[#D4AF37] bg-[#1E1E1E] text-white shadow-sm ring-1 ring-[#D4AF37]'
                          : 'border-neutral-800 bg-[#141414] text-neutral-400 hover:border-neutral-600'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/40"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizing Selector */}
              <div className="space-y-2 pt-2 border-t border-[#222]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">Select Size or Fit</span>
                  <button
                    onClick={onOpenSizing}
                    className="text-[#D4AF37] hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <Ruler className="w-3 h-3" />
                    <span>View Size Guide</span>
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`p-2 rounded-lg border text-center text-xs font-mono transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'border-[#D4AF37] bg-[#1E1E1E] text-[#F3E5AB] font-bold ring-1 ring-[#D4AF37]'
                          : 'border-neutral-800 bg-[#141414] text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Measurements / Requests Textarea */}
              <div className="space-y-1.5 pt-2 border-t border-[#222]">
                <label className="block text-xs font-medium text-neutral-300">
                  Custom Tailoring Notes (Optional)
                </label>
                <input
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g. Bust 36, Waist 28, Hips 40, Height 5'7&quot;, or extra 2 inches in length"
                  className="w-full px-3 py-2 rounded-lg bg-[#181818] border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* CTAs: Add to Bag & WhatsApp Direct Order */}
            <div className="space-y-3 pt-4 border-t border-[#222]">
              {addedToast ? (
                <div className="w-full py-3 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-center text-xs font-semibold flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Added to Shopping Bag!</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAdd}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#1B2F23] hover:bg-[#224230] border border-[#25D366]/50 text-[#25D366] font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>
              )}

              <div className="flex items-center justify-center gap-4 text-[10px] text-neutral-500 font-mono pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Authentic Hand-Crochet Guarantee</span>
                </span>
                <span>·</span>
                <span>Kampala Atelier Direct</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
