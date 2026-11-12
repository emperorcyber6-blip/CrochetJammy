import React, { useState } from 'react';
import { ShoppingBag, Eye, MessageCircle, Sparkles } from 'lucide-react';
import { Product, Currency } from '../types';
import { formatPrice, createWhatsAppOrderLink } from '../utils/formatters';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onQuickView,
  onAddToCart
}) => {
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group flex flex-col bg-[#FFFFFF] rounded-2xl border border-[#E8E0D2] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Frame */}
      <div className="relative aspect-[3/4.2] w-full bg-[#181818] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          referrerPolicy="no-referrer"
        />

        {/* Subtle top badge */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-[#D4AF37]/40 text-[10px] font-mono uppercase tracking-wider text-[#F3E5AB]">
            {product.categoryLabel}
          </span>
          {product.badge && (
            <span className="px-2.5 py-1 rounded bg-[#D4AF37] text-black text-[10px] font-bold tracking-wider uppercase shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Hover Quick Action Scrim */}
        <div
          className={`absolute inset-0 bg-black/45 backdrop-blur-[2px] flex items-center justify-center gap-3 transition-opacity duration-300 z-20 ${
            isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button
            onClick={() => onQuickView(product)}
            className="p-3 rounded-full bg-white text-black hover:bg-[#D4AF37] transition-all shadow-lg hover:scale-110 cursor-pointer"
            title="Inspect & Customize"
          >
            <Eye className="w-4 h-4" />
          </button>

          <button
            onClick={() => onAddToCart(product)}
            className="p-3 rounded-full bg-[#D4AF37] text-black hover:bg-[#F3E5AB] transition-all shadow-lg hover:scale-110 cursor-pointer"
            title="Add to Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>

          <a
            href={createWhatsAppOrderLink({
              productName: product.name,
              priceUGX: product.priceUGX,
              priceUSD: product.priceUSD,
              currency,
              color: selectedColor.name
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-all shadow-lg hover:scale-110"
            title="Inquire directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        {/* Production timeline pill */}
        <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
          <span className="px-2 py-0.5 rounded bg-black/60 text-[9px] font-mono text-neutral-300 backdrop-blur-sm">
            {product.timelineDays} days handcrafting
          </span>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between text-left space-y-3 bg-[#FFFFFF]">
        <div className="space-y-1.5">
          {/* Color swatches */}
          <div className="flex items-center gap-1.5 pb-1">
            {product.availableColors.slice(0, 4).map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c)}
                title={`Color: ${c.name}`}
                className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                  selectedColor.name === c.name
                    ? 'border-[#D4AF37] scale-125 ring-1 ring-[#D4AF37]'
                    : 'border-neutral-300 hover:scale-110'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
            {product.availableColors.length > 4 && (
              <span className="text-[10px] text-neutral-400 pl-1">
                +{product.availableColors.length - 4} shades
              </span>
            )}
          </div>

          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-[#8E7015] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Primary CTA Bar */}
        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500">
              Artisan Price
            </span>
            <span className="font-mono text-base font-bold text-neutral-950 tabular-nums">
              {formatPrice(product.priceUGX, product.priceUSD, currency)}
            </span>
          </div>

          <button
            onClick={() => onQuickView(product)}
            className="px-3.5 py-1.5 rounded-lg bg-[#0D0D0D] hover:bg-[#D4AF37] hover:text-black text-white text-xs font-semibold tracking-wider transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
          >
            <span>View</span>
            <span className="text-[10px]">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
