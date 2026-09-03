export type CatalogProduct = {
  id: number;
  title: string;
  description: string[];
  image: string;
  featured?: boolean;
};

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 1,
    title: 'G4 Green Chilli',
    description: [
      'Colour: Deep Green',
      'Size: 6cm to 10cm',
      'Pungency: Medium to High',
      'Shelf Life: 10 to 15 Days',
      'Origin: India',
    ],
    image: '/images/chilly.jpeg',
    featured: true,
  },
  {
    id: 2,
    title: 'Fresh Onion',
    description: [
      'Colour: Red/ White',
      'Size: 40mm to 70mm +',
      'Shelf Life: 20 to 30 Days',
      'Origin: India',
    ],
    image: '/images/onions.jpeg',
    featured: true,
  },
  {
    id: 3,
    title: 'Cavendish Banana',
    description: [
      'Variety: G9 Cavendish Banana',
      'Colour: Green (Unripe)',
      'Length: 18 to 25 cm',
      'Finger Count: 5 to 7 per hand',
      'Shelf Life: 15 to 25 Days',
      'Origin: India.',
    ],
    image: '/images/bananas.jpeg',
    featured: true,
  },
  {
    id: 4,
    title: 'Fresh Pomegranate',
    description: [
      'Variety: Bhagwa / Ganesh',
      'Colour: Deep Red',
      'Size: 200g to 400g per fruit',
      'Taste: Sweet',
      'Shelf Life: 20 to 30 Days',
      'Origin: India.',
    ],
    image: '/images/Pomogranet.jpeg',
  },
  {
    id: 5,
    title: 'Frozen Vegetables',
    description: [
      'Processing: IQF - (Individually Quick Frozen)',
      'Temperature: 18°C or below',
      'Shelf Life: 12 to 24 Months',
      'Packaging: Bulk / Retail Packs',
      'Quality: Export Grade',
      'Origin: India.',
    ],
    image: '/images/frozen_veggies.jpeg',
  },
  {
    id: 6,
    title: 'Dehydrated Vegetables',
    description: [
      'Form: Flakes / Powder / Granules',
      'Moisture: < 6%',
      'Color: Natural',
      'Shelf Life: 12 – 24 Months',
      'Processing: Air-dried / Dehydrated',
      'Origin: India.',
    ],
    image: '/images/spices.jpeg',
  },
  {
    id: 7,
    title: 'Fresh Turmeric',
    description: [
      'Product: Fresh Turmeric (Raw Haldi)',
      'Colour: Yellow / Orange',
      'Variety: Salem/ Rajapuri',
      'Size: Medium to Large Fingers',
      'Curcumin: 3% – 5% (Approx.)',
      'Shelf Life: 20 – 30 Days',
      'Origin: India.',
    ],
    image: '/images/Tumeric_fingers.jpeg',
  },
  {
    id: 8,
    title: 'Semi Husk Coconut',
    description: [
      'Color: Brown',
      'Weight: 500g – 700g / 650g+ / 800g+ (as per buyer requirement)',
      'Shelf Life: 45–60 days',
      'Packing: 13kg / 25kg PP bags or mesh bags',
      'Loading: 40ft container',
    ],
    image: '/images/Coconut.jpeg',
  },
];

export const FEATURED_PRODUCTS = CATALOG_PRODUCTS.filter((p) => p.featured);

export const PRODUCT_OPTIONS = [
  ...CATALOG_PRODUCTS.map((p) => p.title),
  'Other / Not listed',
] as const;

export const PACKAGING_OPTIONS = [
  'Bulk',
  'Retail',
  'Private Label',
  'Custom',
  'Not Sure',
] as const;

export const INCOTERM_OPTIONS = ['FOB', 'CIF', 'CFR', 'Not Sure'] as const;
