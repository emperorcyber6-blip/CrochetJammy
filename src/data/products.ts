import { Product, DeliveryOption } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'sunburst_maxi',
    name: 'Sunburst Ruffled Maxi Dress',
    category: 'gowns',
    categoryLabel: 'Couture Maxi Gown',
    priceUGX: 450000,
    priceUSD: 120,
    image: '/assets/products/sunburst_maxi.png',
    originalImage: '/assets/aistudio/Screenshot__68__9b173c0b.png',
    shortDescription: 'Signature sunshine-gold handmade crochet column maxi featuring a square-cut neckline and an asymmetric cascading spiral ruffle slit.',
    craftDetails: [
      '42 hours of master artisan hand-stitching',
      'Continuous spiraled ruffle flounce along asymmetric leg slit',
      'Ultra-soft mercerized cotton & stretch-recovery acrylic yarn',
      'Figure-sculpting ribbed bodice with reinforced stitch density'
    ],
    availableColors: [
      { name: 'Sunburst Gold', hex: '#FDB813' },
      { name: 'Onyx Black', hex: '#111111' },
      { name: 'Crimson Ruby', hex: '#9E1B32' },
      { name: 'Ivory Pearl', hex: '#FAF5EE' }
    ],
    sizes: ['Bespoke Custom Fit', 'UK 6 (US 2)', 'UK 8 (US 4)', 'UK 10 (US 6)', 'UK 12 (US 8)', 'UK 14 (US 10)', 'UK 16 (US 12)'],
    featured: true,
    badge: 'Runway Signature',
    timelineDays: 14
  },
  {
    id: 'sapphire_ruffle_mini',
    name: 'Sapphire Tiered Ruffle Mini Dress',
    category: 'mini',
    categoryLabel: 'Couture Mini Dress',
    priceUGX: 320000,
    priceUSD: 85,
    image: '/assets/products/sapphire_ruffle_mini.png',
    originalImage: '/assets/aistudio/Screenshot__69__c7eefe9d.png',
    shortDescription: 'Vibrant royal sapphire sleeveless high-neck cocktail dress sculpted with high-density ribbed stitches and an architectural multilayer ruffled flounce hem.',
    craftDetails: [
      '30 hours of meticulous hand-crochet construction',
      'Structured high jewel neckline with clean armhole binding',
      'Multi-tiered architectural ruffle hem with sculpted volume',
      'Colorfast vibrant sapphire indigo dye'
    ],
    availableColors: [
      { name: 'Royal Sapphire', hex: '#002366' },
      { name: 'Emerald Jade', hex: '#004B23' },
      { name: 'Midnight Black', hex: '#111111' },
      { name: 'Blush Rose', hex: '#D68989' }
    ],
    sizes: ['Bespoke Custom Fit', 'UK 6 (US 2)', 'UK 8 (US 4)', 'UK 10 (US 6)', 'UK 12 (US 8)', 'UK 14 (US 10)'],
    featured: true,
    badge: 'Bestseller',
    timelineDays: 10
  },
  {
    id: 'crimson_mermaid_gown',
    name: 'Crimson Velvet Bow Mermaid Gown',
    category: 'gowns',
    categoryLabel: 'Red Carpet Couture Gown',
    priceUGX: 650000,
    priceUSD: 175,
    image: '/assets/products/crimson_mermaid_gown.png',
    originalImage: '/assets/aistudio/Screenshot__70__664af8e8.png',
    shortDescription: 'Show-stopping red carpet mermaid gown in rich crimson, sculpted with a plunge sweetheart corset neckline, semi-sheer fishnet mid-thigh accent, and sweeping bow-draped stoles.',
    craftDetails: [
      '55 hours of artisanal crochet & structural framing',
      'Floor-sweeping oversized bow arm wraps that float with every step',
      'Intricate lattice openwork transition into a full trumpet flare train',
      'Plunge sweetheart bustier with interior structural support'
    ],
    availableColors: [
      { name: 'Crimson Velvet', hex: '#8B0000' },
      { name: 'Obsidian Black', hex: '#0D0D0D' },
      { name: 'Royal Emerald', hex: '#0B4F35' },
      { name: 'Imperial Violet', hex: '#4B0082' }
    ],
    sizes: ['Bespoke Custom Fit (Recommended)', 'UK 8 (US 4)', 'UK 10 (US 6)', 'UK 12 (US 8)', 'UK 14 (US 10)', 'UK 16 (US 12)'],
    featured: true,
    badge: 'Artisan Pick',
    timelineDays: 18
  },
  {
    id: 'mocha_trumpet_gown',
    name: 'Mocha & Cream Tiered Trumpet Gown',
    category: 'gowns',
    categoryLabel: 'Couture Trumpet Gown',
    priceUGX: 520000,
    priceUSD: 140,
    image: '/assets/products/mocha_trumpet_gown.png',
    originalImage: '/assets/aistudio/Screenshot__71__a65b10de.png',
    shortDescription: 'Decadent chocolate mocha long-sleeve evening gown with high jewel neck, contrasting ivory tiered ruffle cuffs, and a dramatic four-tier trumpet skirt.',
    craftDetails: [
      '48 hours of artisanal double-crochet stitchwork',
      'High-contrast warm ivory pleated crochet flounces on hem & sleeves',
      'Full-coverage modest luxury silhouette with contoured waistline',
      'Breathable premium bamboo-cotton blend yarn'
    ],
    availableColors: [
      { name: 'Mocha & Cream', hex: '#3E2723' },
      { name: 'Black & Gold', hex: '#1C1917' },
      { name: 'Navy & White', hex: '#1E293B' }
    ],
    sizes: ['Bespoke Custom Fit', 'UK 8 (US 4)', 'UK 10 (US 6)', 'UK 12 (US 8)', 'UK 14 (US 10)', 'UK 16 (US 12)'],
    featured: false,
    badge: 'New Release',
    timelineDays: 14
  },
  {
    id: 'cobalt_rosette_couture',
    name: 'Cobalt Blue 3D Rosette Couture Dress',
    category: 'mini',
    categoryLabel: 'Sculpted Cocktail Dress',
    priceUGX: 480000,
    priceUSD: 130,
    image: '/assets/products/cobalt_rosette_couture.png',
    originalImage: '/assets/aistudio/Screenshot__72__fe93d06d.png',
    shortDescription: 'Strapless sweetheart mini dress lavishly encrusted with dozens of individual 3D hand-sculpted crochet roses and shimmering beaded tassel waterfalls.',
    craftDetails: [
      'Over 60 individual hand-formed crochet blooming roses',
      'Glass seed bead and crochet bead side tassels for dynamic movement',
      'Sweetheart neckline with non-slip interior silicone-grip finish',
      'Flattering fit-and-flare tulip mini silhouette'
    ],
    availableColors: [
      { name: 'Cobalt Royal Blue', hex: '#1034A6' },
      { name: 'Scarlet Red', hex: '#C41E3A' },
      { name: 'Champagne Ivory', hex: '#EEE8AA' },
      { name: 'Pure Jet Black', hex: '#111111' }
    ],
    sizes: ['Bespoke Custom Fit', 'UK 6 (US 2)', 'UK 8 (US 4)', 'UK 10 (US 6)', 'UK 12 (US 8)', 'UK 14 (US 10)'],
    featured: true,
    badge: 'Runway Signature',
    timelineDays: 16
  },
  {
    id: 'obsidian_rosette_gown',
    name: 'Midnight Obsidian Rosette Couture Gown',
    category: 'mini',
    categoryLabel: 'Sculptural Bodycon Mini',
    priceUGX: 420000,
    priceUSD: 115,
    image: '/assets/products/obsidian_rosette_gown.png',
    originalImage: '/assets/aistudio/Screenshot__73__093d917f.png',
    shortDescription: 'All-black high-neck bodycon silhouette crowned with a dramatic giant 3D rosette over the shoulder, rosette-embellished sleeves, and sculpted floral hemline.',
    craftDetails: [
      'Dramatic oversized statement crochet rose on shoulder/chest',
      'Matching rose corsages along sleeves and scalloped hem',
      'Ultra-dense micro-crochet stitch that gives firm bodycon shape',
      'Long tailored sleeves with structured cuff detailing'
    ],
    availableColors: [
      { name: 'Obsidian Jet', hex: '#0D0D0D' },
      { name: 'Bordeaux Wine', hex: '#58111A' },
      { name: 'Royal Ivory', hex: '#F9F6F0' }
    ],
    sizes: ['Bespoke Custom Fit', 'UK 6 (US 2)', 'UK 8 (US 4)', 'UK 10 (US 6)', 'UK 12 (US 8)', 'UK 14 (US 10)'],
    featured: false,
    badge: 'Artisan Pick',
    timelineDays: 12
  },
  {
    id: 'amethyst_skater_mini',
    name: 'Imperial Amethyst Flared Skater Mini',
    category: 'mini',
    categoryLabel: 'Sweetheart Skater Mini',
    priceUGX: 340000,
    priceUSD: 90,
    image: '/assets/products/amethyst_skater_mini.png',
    originalImage: '/assets/aistudio/Screenshot__74__dc614716.png',
    shortDescription: 'Regal purple skater dress with delicate rosette appliqués on the wide straps, a ruffled sweetheart décolletage, and a high-volume pleated skater skirt.',
    craftDetails: [
      '32 hours of precision crochet craftsmanship',
      'Structured pleated crochet skirt with built-in bounce and flair',
      'Ruffle-trimmed sweetheart bustline with hand-attached floral charms',
      'Hidden stretch crochet waistband for all-day comfort'
    ],
    availableColors: [
      { name: 'Imperial Amethyst', hex: '#662D91' },
      { name: 'Sunshine Yellow', hex: '#FDB813' },
      { name: 'Midnight Black', hex: '#111111' },
      { name: 'Cerulean Blue', hex: '#2A52BE' }
    ],
    sizes: ['Bespoke Custom Fit', 'UK 6 (US 2)', 'UK 8 (US 4)', 'UK 10 (US 6)', 'UK 12 (US 8)', 'UK 14 (US 10)'],
    featured: false,
    timelineDays: 10
  },
  {
    id: 'pearl_rose_capelet_gown',
    name: 'Pearl Mermaid Gown with Red Rose Capelet',
    category: 'gowns',
    categoryLabel: 'Haute Couture Bridal / Gala Gown',
    priceUGX: 680000,
    priceUSD: 180,
    image: '/assets/products/pearl_rose_capelet_gown.png',
    originalImage: '/assets/aistudio/Screenshot__75__4b87e87c.png',
    shortDescription: 'Pure ivory pearl crochet mermaid silhouette crowned with an opulent off-the-shoulder sculptural capelet made of vivid crimson hand-crocheted roses.',
    craftDetails: [
      '58 hours of haute couture handwork',
      'Over 40 lush red crochet roses forming an off-shoulder botanical cloud',
      'Seamless column bodice flaring into a floor-length mermaid train',
      'Perfect for red carpets, galas, bridal receptions, and milestone celebrations'
    ],
    availableColors: [
      { name: 'Pearl & Crimson Roses', hex: '#FFFDD0' },
      { name: 'All White Pearl Roses', hex: '#FFFFFF' },
      { name: 'Onyx & Gold Roses', hex: '#18181B' }
    ],
    sizes: ['Bespoke Custom Fit (Recommended)', 'UK 8 (US 4)', 'UK 10 (US 6)', 'UK 12 (US 8)', 'UK 14 (US 10)', 'UK 16 (US 12)'],
    featured: true,
    badge: 'Runway Signature',
    timelineDays: 20
  },
  {
    id: 'cloud_white_mermaid_gown',
    name: 'Cloud White Off-Shoulder Mermaid Gown',
    category: 'gowns',
    categoryLabel: 'Resort & Gala Mermaid Gown',
    priceUGX: 490000,
    priceUSD: 130,
    image: '/assets/products/cloud_white_mermaid_gown.png',
    originalImage: '/assets/aistudio/Screenshot__76__-_Copy_ff60cec2.png',
    shortDescription: 'Ethereal all-white textured crochet mermaid gown featuring voluminous ruffled off-shoulder collar, tailored hourglass torso, and sweeping fishtail hem.',
    craftDetails: [
      '44 hours of delicate textured stitchwork',
      'Multi-layer scalloped ruffle off-shoulder neckline',
      'Flattering fit through thighs opening into a flared puddle train',
      'Premium milk cotton yarn that feels cool and luxurious against skin'
    ],
    availableColors: [
      { name: 'Cloud White', hex: '#FDFEFE' },
      { name: 'Champagne Cream', hex: '#F7E7CE' },
      { name: 'Midnight Onyx', hex: '#111111' }
    ],
    sizes: ['Bespoke Custom Fit', 'UK 6 (US 2)', 'UK 8 (US 4)', 'UK 10 (US 6)', 'UK 12 (US 8)', 'UK 14 (US 10)', 'UK 16 (US 12)'],
    featured: false,
    badge: 'Bestseller',
    timelineDays: 14
  },
  {
    id: 'cobalt_tailored_keyhole',
    name: 'Cobalt Keyhole Tailored Pocket Dress',
    category: 'mini',
    categoryLabel: 'Tailored Chic Mini',
    priceUGX: 310000,
    priceUSD: 85,
    image: '/assets/products/cobalt_tailored_keyhole.png',
    originalImage: '/assets/aistudio/Screenshot__77__b3bcc246.png',
    shortDescription: 'Architectural cobalt blue structured mini dress featuring a tasteful teardrop keyhole neckline, puff cap sleeves, and structured decorative hip pocket flaps.',
    craftDetails: [
      'Tailored blazer-inspired silhouette crafted completely by crochet hook',
      'Puffed shoulders and teardrop décolletage cutout with reinforced edging',
      'Architectural hip pocket flaps with tailored ribbing lines',
      'Clean modern elegance suitable for daytime luxury and evening drinks'
    ],
    availableColors: [
      { name: 'Cobalt Blue', hex: '#1E3A8A' },
      { name: 'Crimson Wine', hex: '#7F1D1D' },
      { name: 'Emerald Forest', hex: '#064E3B' },
      { name: 'Jet Black', hex: '#09090B' }
    ],
    sizes: ['Bespoke Custom Fit', 'UK 6 (US 2)', 'UK 8 (US 4)', 'UK 10 (US 6)', 'UK 12 (US 8)', 'UK 14 (US 10)'],
    featured: false,
    timelineDays: 10
  },
  {
    id: 'crimson_velvet_bag',
    name: 'Crimson Velvet & Cream Luxury Handbag',
    category: 'bags',
    categoryLabel: 'Artisan Statement Handbag',
    priceUGX: 180000,
    priceUSD: 50,
    image: '/assets/products/crimson_velvet_bag.png',
    originalImage: '/assets/aistudio/Screenshot__66__bd97aa2f.png',
    shortDescription: 'Masterpiece top-handle handbag combining plush crimson velvet yarn flap with cream woven base, solid polished gold hardware clasp, chain accent, and handmade flower tassel.',
    craftDetails: [
      'Woven double-density bottom structure that stands upright',
      'Solid polished gold turn-lock clasp and protective metal bottom studs',
      'Handmade floral charm with pearl center and matching silk-velvet tassel',
      'Intertwined gold link chain and genuine leather adjustable shoulder strap'
    ],
    availableColors: [
      { name: 'Crimson Velvet & Cream', hex: '#780016' },
      { name: 'Onyx Black & Cream', hex: '#18181B' },
      { name: 'Forest Green & Cream', hex: '#14532D' },
      { name: 'Blush Pink & Ivory', hex: '#F472B6' }
    ],
    sizes: ['One Size (24cm W × 18cm H × 10cm D)'],
    featured: true,
    badge: 'Bestseller',
    timelineDays: 5
  },
  {
    id: 'granny_square_backpack',
    name: 'Granny Square Olive & Cream Backpack',
    category: 'bags',
    categoryLabel: 'Artisan Structured Backpack',
    priceUGX: 195000,
    priceUSD: 55,
    image: '/assets/products/granny_square_backpack.png',
    originalImage: '/assets/aistudio/Screenshot__67__144970a5.png',
    shortDescription: 'Contemporary luxury backpack assembled from iconic artisan granny squares in moss olive, cream, and deep black with reinforced piping and secure buckle flap.',
    craftDetails: [
      'Individually hand-crocheted geometric floral motif squares',
      'Fully lined interior with zippered pocket and drawstring cord closure',
      'Reinforced moss green structural edges with top grab handle',
      'Adjustable padded woven shoulder straps for daily elegance'
    ],
    availableColors: [
      { name: 'Olive, Cream & Black', hex: '#4B5320' },
      { name: 'Terracotta & Sand', hex: '#C86446' },
      { name: 'Monochrome Black & White', hex: '#18181B' }
    ],
    sizes: ['Standard City Backpack (28cm W × 34cm H × 14cm D)'],
    featured: true,
    badge: 'Artisan Pick',
    timelineDays: 7
  },
  {
    id: 'amys_kids_duo_set',
    name: "Amy's Royal Purple Kids Duo Set",
    category: 'kids',
    categoryLabel: 'Bespoke Children Couture Set',
    priceUGX: 260000,
    priceUSD: 70,
    image: '/assets/products/amys_kids_duo_set.png',
    originalImage: '/assets/aistudio/Screenshot__78__a0258ad6.png',
    shortDescription: "Signature matching brother & sister luxury occasion set in regal purple and white stripes: tailored polo shirt & trousers + ruffled tiered floral dress with mini matching handbag.",
    craftDetails: [
      'Hypoallergenic, ultra-gentle baby-soft acrylic & bamboo yarn blend',
      "Boy's set includes striped polo shirt with collar and tailored trousers",
      "Girl's set includes tiered ruffle skirt dress, flower brooch, and mini purse",
      'Custom sizing tailored for ages 1 to 10 years for birthdays, church & weddings'
    ],
    availableColors: [
      { name: 'Royal Purple & White', hex: '#581C87' },
      { name: 'Royal Blue & White', hex: '#1E3A8A' },
      { name: 'Emerald & Cream', hex: '#064E3B' },
      { name: 'Ruby Red & White', hex: '#991B1B' }
    ],
    sizes: [
      'Both Boy & Girl Set (Tailored Age)',
      "Boy's 2-Piece Set Only (Ages 2-10)",
      "Girl's Dress & Purse Only (Ages 2-10)",
      'Age 2-3 Years',
      'Age 4-5 Years',
      'Age 6-7 Years',
      'Age 8-10 Years'
    ],
    featured: true,
    badge: 'Runway Signature',
    timelineDays: 10
  }
];

export const DELIVERY_OPTIONS: DeliveryOption[] = [
  {
    id: 'kampala',
    label: 'Kampala City Doorstep Delivery',
    timeframe: 'Same-day or next-day delivery via express rider',
    costUGX: 10000,
    costUSD: 3
  },
  {
    id: 'uganda_upcountry',
    label: 'Countrywide Uganda Upcountry',
    timeframe: '2-3 business days via safe courier / coach express',
    costUGX: 25000,
    costUSD: 7
  },
  {
    id: 'international',
    label: 'Worldwide International Express',
    timeframe: '4-7 business days via DHL / FedEx with live tracking',
    costUGX: 150000,
    costUSD: 40
  }
];

export const CONTACT_INFO = {
  primaryWhatsApp: '+256 763 008 787',
  phoneAtelier: '+256 700 892 314',
  phoneInternational: '+256 784 562 109',
  location: 'Plot 14, Bukoto-Ntinda Road, Kampala, Uganda',
  email: 'jammyhandmade@gmail.com',
  workingHours: 'Monday - Saturday: 8:30 AM - 7:00 PM EAT'
};
