import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice, createWhatsAppOrderLink } from '../utils/formatters';

interface HeroCarouselProps {
  products: Product[];
  currency: Currency;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenBespoke: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  products,
  currency,
  onQuickView,
  onAddToCart,
  onOpenBespoke
}) => {
  // Select featured showcase pieces
  const featuredItems = products.filter((p) => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeProduct = featuredItems[currentIndex] || products[0];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredItems.length, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredItems.length);
  };

  return (
    <section
      className="relative bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#0A0A0A] text-neutral-100 overflow-hidden border-b border-[#222]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient gold radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Narrative Section */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10 text-left">
            {/* Atelier Heritage Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181818] border border-[#D4AF37]/40 text-xs font-medium text-[#F3E5AB]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-serif italic">Bespoke Atelier Collection 2026</span>
              <span className="text-neutral-500">·</span>
              <span className="font-mono text-[10px] uppercase text-[#D4AF37]">Kampala, Uganda</span>
            </div>

            {/* Serif Headline requested by user */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15] text-balance">
                Handmade to perfection <br />
                <span className="italic font-light gold-gradient-text">with love.</span>
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl font-sans pt-2">
                Sculpted stitch-by-stitch with ultra-fine cotton and velvet yarns. Discover red-carpet couture gowns, 3D floral corsages, and luxury structured handbags tailored specifically to your measurements.
              </p>
            </div>

            {/* Quick Hero Product Spotlight Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#141414]/90 border border-[#2B2B2B] backdrop-blur-sm space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-widest text-[#D4AF37] font-semibold text-[11px]">
                  Spotlight {currentIndex + 1} of {featuredItems.length}
                </span>
                {activeProduct.badge && (
                  <span className="px-2 py-0.5 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F3E5AB] text-[10px] font-medium uppercase tracking-wider">
                    {activeProduct.badge}
                  </span>
                )}
              </div>

              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                  {activeProduct.name}
                </h3>
                <span className="font-mono text-lg text-[#F3E5AB] font-bold tabular-nums">
                  {formatPrice(activeProduct.priceUGX, activeProduct.priceUSD, currency)}
                </span>
              </div>

              <p className="text-xs text-neutral-400 line-clamp-2">
                {activeProduct.shortDescription}
              </p>

              {/* Action Buttons for Current Spotlight */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onQuickView(activeProduct)}
                  className="px-4 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs tracking-wide transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Customize & Inspect</span>
                </button>

                <button
                  onClick={() => onAddToCart(activeProduct)}
                  className="px-4 py-2.5 rounded-lg bg-[#222] hover:bg-[#2A2A2A] text-white border border-neutral-700 hover:border-[#D4AF37] text-xs font-medium transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                  <span>Add to Bag</span>
                </button>

                <a
                  href={createWhatsAppOrderLink({
                    productName: activeProduct.name,
                    priceUGX: activeProduct.priceUGX,
                    priceUSD: activeProduct.priceUSD,
                    currency
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#1B2F23] hover:bg-[#224230] border border-[#25D366]/40 text-[#25D366] text-xs font-medium transition-all flex items-center gap-1.5"
                  title="Inquire directly on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp Order</span>
                </a>
              </div>
            </div>

            {/* Secondary CTA buttons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#collections"
                className="text-xs uppercase tracking-widest text-neutral-300 hover:text-[#D4AF37] hover:underline underline-offset-8 transition-colors"
              >
                Explore All 13 Pieces ↓
              </a>
              <span className="text-neutral-600">·</span>
              <button
                onClick={onOpenBespoke}
                className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#F3E5AB] hover:underline underline-offset-8 transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Design Custom Commission</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Showcase Card Carousel with Floating Ivory Controls */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* The Main Tall Rounded Showcase Frame */}
            <div className="relative w-full max-w-[400px] sm:max-w-[440px] aspect-[3/4.6] rounded-3xl bg-[#141414] border-2 border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.15)] overflow-hidden group">
              
              {/* Product Photography */}
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient scrim for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Top overlay pills */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/50 text-[11px] font-serif italic text-[#F3E5AB]">
                  {activeProduct.categoryLabel}
                </span>

                <button
                  onClick={() => onQuickView(activeProduct)}
                  className="p-2 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black text-white backdrop-blur-md border border-neutral-700 transition-all cursor-pointer"
                  title="Quick View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Card Title & Quick Buy */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-left space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#D4AF37] bg-black/60 px-2 py-0.5 rounded">
                    {activeProduct.timelineDays} Days Production
                  </span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-medium leading-tight drop-shadow">
                  {activeProduct.name}
                </h4>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-xl text-[#F3E5AB] font-bold">
                    {formatPrice(activeProduct.priceUGX, activeProduct.priceUSD, currency)}
                  </span>
                  <button
                    onClick={() => onAddToCart(activeProduct)}
                    className="px-3.5 py-1.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs tracking-wider uppercase transition-all shadow cursor-pointer"
                  >
                    Quick Add +
                  </button>
                </div>
              </div>

              {/* Floating Ivory Carousel Controls (< and >) requested by user */}
              <button
                onClick={handlePrev}
                aria-label="Previous couture showcase"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FAF8F5] text-black hover:bg-[#D4AF37] hover:text-black transition-all shadow-xl flex items-center justify-center cursor-pointer z-20 opacity-90 hover:opacity-100 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next couture showcase"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FAF8F5] text-black hover:bg-[#D4AF37] hover:text-black transition-all shadow-xl flex items-center justify-center cursor-pointer z-20 opacity-90 hover:opacity-100 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Thumbnail pagination selector bar */}
            <div className="flex items-center gap-2 pt-6">
              {featuredItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-[#D4AF37]'
                      : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                />
              ))}
            </div>

            {/* Micro thumbnail strip */}
            <div className="flex items-center gap-2.5 pt-3 overflow-x-auto max-w-full pb-1">
              {featuredItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-12 h-14 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                    idx === currentIndex
                      ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-105'
                      : 'border-neutral-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
