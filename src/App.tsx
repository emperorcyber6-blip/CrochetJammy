/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Currency, Product, CartItem, ColorOption } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { FeaturedCollections } from './components/FeaturedCollections';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { BespokeStudio } from './components/BespokeStudio';
import { SizingGuideModal } from './components/SizingGuideModal';
import { CareGuideModal } from './components/CareGuideModal';

export default function App() {
  const [currency, setCurrency] = useState<Currency>(() => {
    try {
      const saved = localStorage.getItem('jammy_currency');
      return (saved === 'USD' ? 'USD' : 'UGX') as Currency;
    } catch {
      return 'UGX';
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('jammy_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBespokeOpen, setIsBespokeOpen] = useState(false);
  const [isSizingOpen, setIsSizingOpen] = useState(false);
  const [isCareOpen, setIsCareOpen] = useState(false);

  // Sync currency and cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('jammy_currency', currency);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [currency]);

  useEffect(() => {
    try {
      localStorage.setItem('jammy_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [cart]);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'UGX' ? 'USD' : 'UGX'));
  };

  const handleAddToCart = (
    product: Product,
    size?: string,
    color?: ColorOption,
    notes?: string
  ) => {
    const chosenSize = size || product.sizes[0];
    const chosenColor = color || product.availableColors[0];

    setCart((prevCart) => {
      // Check if matching product with same size and color already in cart
      const existingIdx = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.size === chosenSize &&
          item.color.name === chosenColor.name
      );

      if (existingIdx >= 0) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += 1;
        if (notes) updated[existingIdx].customNotes = notes;
        return updated;
      }

      const newItem: CartItem = {
        id: `${product.id}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        product,
        size: chosenSize,
        color: chosenColor,
        quantity: 1,
        customNotes: notes
      };
      return [...prevCart, newItem];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Top Navigation Bar with Champagne-Gold Divider */}
      <Header
        currency={currency}
        onToggleCurrency={toggleCurrency}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBespoke={() => setIsBespokeOpen(true)}
        onOpenSizing={() => setIsSizingOpen(true)}
        onOpenCare={() => setIsCareOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Dark Obsidian Hero Carousel with Floating Ivory Controls */}
        <HeroCarousel
          products={PRODUCTS}
          currency={currency}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p) => handleAddToCart(p)}
          onOpenBespoke={() => setIsBespokeOpen(true)}
        />

        {/* Featured Collections 4-Column Grid on Warm Cream Background */}
        <FeaturedCollections
          products={PRODUCTS}
          currency={currency}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p) => handleAddToCart(p)}
          onOpenBespoke={() => setIsBespokeOpen(true)}
        />

        {/* The Slow Fashion Craftsmanship & Kampala Atelier Section */}
        <CraftsmanshipSection />
      </main>

      {/* Luxury Black & Gold Footer with One-Click Phone Copy */}
      <Footer
        onOpenBespoke={() => setIsBespokeOpen(true)}
        onOpenSizing={() => setIsSizingOpen(true)}
        onOpenCare={() => setIsCareOpen(true)}
      />

      {/* Modals & Slide-out Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        currency={currency}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizing={() => {
          setQuickViewProduct(null);
          setIsSizingOpen(true);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <BespokeStudio
        isOpen={isBespokeOpen}
        onClose={() => setIsBespokeOpen(false)}
        currency={currency}
      />

      <SizingGuideModal
        isOpen={isSizingOpen}
        onClose={() => setIsSizingOpen(false)}
        onOpenBespoke={() => {
          setIsSizingOpen(false);
          setIsBespokeOpen(true);
        }}
      />

      <CareGuideModal
        isOpen={isCareOpen}
        onClose={() => setIsCareOpen(false)}
      />
    </div>
  );
}
