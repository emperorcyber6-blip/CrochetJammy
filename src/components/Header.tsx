import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { Currency } from '../types';
import { BrandLogo } from './BrandLogo';
import { CONTACT_INFO } from '../data/products';

interface HeaderProps {
  currency: Currency;
  onToggleCurrency: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenBespoke: () => void;
  onOpenSizing: () => void;
  onOpenCare: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onToggleCurrency,
  cartCount,
  onOpenCart,
  onOpenBespoke,
  onOpenSizing,
  onOpenCare
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cleanPhone = CONTACT_INFO.primaryWhatsApp.replace(/[^0-9]/g, '');

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md text-neutral-100">
      {/* Top subtle luxury announcement bar */}
      <div className="bg-[#141414] border-b border-[#262626] py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#E5C158]">
          <span className="hidden sm:inline font-sans text-[11px] tracking-wide text-neutral-400">
            Artisanal Slow Fashion · Handcrafted in Kampala, Uganda
          </span>
          <div className="flex items-center justify-center gap-4 w-full sm:w-auto text-[11px]">
            <span className="text-neutral-300">
              Worldwide Express Shipping Available via DHL
            </span>
            <span className="text-neutral-600 hidden md:inline">·</span>
            <a
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#F3E5AB] hover:text-[#D4AF37] transition-colors"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp Direct: {CONTACT_INFO.primaryWhatsApp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium text-neutral-300">
            <a
              href="#collections"
              className="hover:text-[#F3E5AB] transition-colors hover:underline underline-offset-8"
            >
              Collections
            </a>
            <button
              onClick={onOpenBespoke}
              className="hover:text-[#F3E5AB] transition-colors hover:underline underline-offset-8 cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Bespoke Studio</span>
            </button>
            <a
              href="#craftsmanship"
              className="hover:text-[#F3E5AB] transition-colors hover:underline underline-offset-8"
            >
              The Atelier
            </a>
          </nav>

          {/* Centered Brand Emblem & Wordmark */}
          <a href="#" className="flex items-center justify-center group py-2">
            <BrandLogo size="md" showSubtitle={true} />
          </a>

          {/* Right Navigation & Controls */}
          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-medium text-neutral-300">
              <button
                onClick={onOpenSizing}
                className="hover:text-[#F3E5AB] transition-colors hover:underline underline-offset-8 cursor-pointer"
              >
                Sizing Guide
              </button>
              <button
                onClick={onOpenCare}
                className="hover:text-[#F3E5AB] transition-colors hover:underline underline-offset-8 cursor-pointer"
              >
                Garment Care
              </button>
              <a
                href="#contact"
                className="hover:text-[#F3E5AB] transition-colors hover:underline underline-offset-8"
              >
                Contact
              </a>
            </nav>

            {/* Currency Switcher Toggle */}
            <button
              onClick={onToggleCurrency}
              aria-label="Toggle currency between UGX and USD"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded border border-[#D4AF37]/40 bg-[#141414] text-[11px] font-mono tracking-wider font-semibold text-[#F3E5AB] hover:border-[#D4AF37] hover:bg-[#1F1F1F] transition-all cursor-pointer shadow-sm"
              title="Click to switch currency"
            >
              <span className={currency === 'UGX' ? 'text-[#D4AF37] font-bold' : 'text-neutral-400'}>
                UGX
              </span>
              <span className="text-neutral-600">/</span>
              <span className={currency === 'USD' ? 'text-[#D4AF37] font-bold' : 'text-neutral-400'}>
                USD
              </span>
            </button>

            {/* Shopping Bag Trigger Button */}
            <button
              onClick={onOpenCart}
              aria-label="View Shopping Bag"
              className="relative p-2 rounded-full border border-neutral-700 hover:border-[#D4AF37] bg-[#141414] hover:bg-[#1A1A1A] transition-all text-neutral-200 hover:text-[#D4AF37] cursor-pointer group"
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-105" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold flex items-center justify-center shadow-md animate-in fade-in zoom-in-75">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Gold metallic horizontal divider bar */}
      <div className="gold-divider w-full" />

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D] border-b border-[#2A2A2A] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 text-sm uppercase tracking-wider text-neutral-200">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#D4AF37]"
            >
              Collections & Catalog
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBespoke();
              }}
              className="py-2 text-left hover:text-[#D4AF37] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Bespoke Custom Orders</span>
            </button>
            <a
              href="#craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#D4AF37]"
            >
              The Slow Fashion Craft
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSizing();
              }}
              className="py-2 text-left hover:text-[#D4AF37]"
            >
              Size Guide (Inches & CM)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCare();
              }}
              className="py-2 text-left hover:text-[#D4AF37]"
            >
              Crochet Garment Care
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#D4AF37]"
            >
              Contact & Kampala Atelier
            </a>
          </div>

          <div className="pt-4 border-t border-[#222] flex items-center justify-between">
            <span className="text-xs text-neutral-400">Currency</span>
            <button
              onClick={onToggleCurrency}
              className="px-3 py-1 bg-[#1A1A1A] border border-[#D4AF37]/50 rounded text-xs text-[#D4AF37] font-mono"
            >
              Current: {currency} (Click to toggle)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
