export type ProductCategory = 'all' | 'gowns' | 'mini' | 'bags' | 'kids';

export type Currency = 'UGX' | 'USD';

export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'gowns' | 'mini' | 'bags' | 'kids';
  categoryLabel: string;
  priceUGX: number;
  priceUSD: number;
  image: string;
  originalImage: string;
  shortDescription: string;
  craftDetails: string[];
  availableColors: ColorOption[];
  sizes: string[];
  featured?: boolean;
  badge?: 'Bestseller' | 'Runway Signature' | 'Artisan Pick' | 'New Release' | 'Limited Edition';
  timelineDays: number;
}

export interface CartItem {
  id: string; // unique cart entry ID
  product: Product;
  size: string;
  color: ColorOption;
  quantity: number;
  customNotes?: string;
}

export type DeliveryRegion = 'kampala' | 'uganda_upcountry' | 'international';

export interface DeliveryOption {
  id: DeliveryRegion;
  label: string;
  timeframe: string;
  costUGX: number;
  costUSD: number;
}
