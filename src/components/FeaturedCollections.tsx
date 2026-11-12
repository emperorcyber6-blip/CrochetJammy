import React, { useState } from 'react';
import { Product, ProductCategory, Currency } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface FeaturedCollectionsProps {
  products: Product[];
  currency: Currency;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenBespoke: () => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({
  products,
  currency,
  onQuickView,
  onAddToCart,
  onOpenBespoke
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Creations', count: products.length },
    {
      id: 'gowns',
      label: 'Red Carpet Gowns',
      count: products.filter((p) => p.category === 'gowns').length
    },
    {
      id: 'mini',
      label: 'Couture Mini Dresses',
      count: products.filter((p) => p.category === 'mini').length
    },
    {
      id: 'bags',
      label: 'Luxury Bags',
      count: products.filter((p) => p.category === 'bags').length
    },
    {
      id: 'kids',
      label: "Amy's Kids Set",
      count: products.filter((p) => p.category === 'kids').length
    }
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#F4EFE6] text-neutral-900 border-b border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8E0D2] border border-[#D4AF37]/40 text-xs font-mono uppercase tracking-widest text-[#8E7015]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Handmade Luxury Catalog</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900">
            Featured Collections
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
            Every gown, cocktail mini, and bag is crocheted by hand using premium cotton, velvet, and bamboo yarns. Custom sizing and colorway commissions are welcome.
          </p>

          {/* Category Filter Tabs (Single-line interactive controls) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer whitespace-nowrap shadow-sm ${
                    isActive
                      ? 'bg-[#0D0D0D] text-[#F3E5AB] border border-[#D4AF37] ring-1 ring-[#D4AF37]'
                      : 'bg-white/80 text-neutral-700 hover:bg-white hover:text-black border border-neutral-300'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1.5 text-[10px] font-mono ${
                      isActive ? 'text-[#D4AF37]' : 'text-neutral-400'
                    }`}
                  >
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Column Responsive Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center space-y-3 bg-white rounded-2xl border border-neutral-200 p-8">
            <SlidersHorizontal className="w-8 h-8 text-neutral-400 mx-auto" />
            <h4 className="font-serif text-lg font-medium text-neutral-800">No pieces found</h4>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              No products matched your criteria. You can clear your search or commission a completely custom piece in the Bespoke Studio.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bespoke Invitation Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0D0D0D] border border-[#D4AF37]/40 text-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              Have a Specific Vision or Event?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
              Bespoke Custom Orders & Tailored Sizing
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              From wedding guest looks to red-carpet statement dresses, choose your own yarn colors, sleeve styles, and enter exact body measurements for an impeccable fit.
            </p>
          </div>

          <button
            onClick={onOpenBespoke}
            className="px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shrink-0 cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Open Bespoke Studio</span>
          </button>
        </div>

      </div>
    </section>
  );
};
