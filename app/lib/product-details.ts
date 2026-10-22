/**
 * Extended product descriptions shown in the product popup on /product-catalogue.
 * Keyed by CatalogProduct.id (see ./products.ts).
 */

export type DetailSection =
  | { title: string; kind: 'list'; items: string[] }
  | { title: string; kind: 'table'; rows: [string, string][] }
  | { title: string; kind: 'text'; text: string }
  | { title: string; kind: 'tags'; items: string[] };

export type ProductDetail = {
  heading: string;
  tagline?: string;
  overview: string[];
  sections: DetailSection[];
};

const WHY_SHRIM = [
  'Trusted exporter from India',
  'Consistent quality & supply',
  'Competitive pricing',
  'Strong export logistics',
];

export const PRODUCT_DETAILS: Record<number, ProductDetail> = {
  1: {
    heading: 'G4 Green Chilli Exporter from India',
    overview: [
      'G4 Green Chilli is a premium export-quality variety known for its bright green colour, high pungency, uniform size, and long shelf life. SHRIM EXPORT supplies high-quality fresh chillies meeting international standards.',
    ],
    sections: [
      {
        title: 'Key Features',
        kind: 'list',
        items: ['Bright green appearance', 'Medium to high pungency', 'Uniform size', 'Long shelf life', 'Export quality'],
      },
      {
        title: 'Specifications',
        kind: 'table',
        rows: [
          ['Variety', 'G4 Green Chilli'],
          ['Colour', 'Deep Green'],
          ['Size', '6–10 cm'],
          ['Pungency', 'Medium to High'],
          ['Shelf Life', '10–15 Days'],
        ],
      },
      {
        title: 'Sourcing & Quality Control',
        kind: 'text',
        text: 'Sourced from certified farms using Good Agricultural Practices with strict quality checks.',
      },
      {
        title: 'Packaging Details',
        kind: 'text',
        text: 'Packed in ventilated corrugated boxes (2 kg–10 kg) with food-grade liners.',
      },
      {
        title: 'Storage & Shelf Life',
        kind: 'text',
        text: 'Stored at 7–10°C with proper cold chain. Shelf life: 10–15 days.',
      },
      {
        title: 'Applications',
        kind: 'text',
        text: 'Used in cooking, processing industries, restaurants, and export markets.',
      },
    ],
  },

  2: {
    heading: 'Fresh Onion Exporter from India',
    overview: [
      'Indian onions are globally known for their strong flavour, long shelf life, and premium quality. SHRIM EXPORT supplies fresh, export-grade onions sourced directly from trusted farms.',
    ],
    sections: [
      {
        title: 'Key Features',
        kind: 'list',
        items: ['High pungency and strong aroma', 'Long shelf life', 'Uniform size and colour', 'Export quality grading'],
      },
      {
        title: 'Specifications',
        kind: 'table',
        rows: [
          ['Product', 'Fresh Onion'],
          ['Colour', 'Red / White'],
          ['Size', '40 mm – 70 mm+'],
          ['Shelf Life', '20–30 Days'],
          ['Origin', 'India'],
        ],
      },
      {
        title: 'Sourcing & Quality Control',
        kind: 'text',
        text: 'Sourced from certified farms with strict quality checks, sorting, grading, and inspection before export.',
      },
      {
        title: 'Packaging Details',
        kind: 'text',
        text: 'Packed in 5 kg, 10 kg, 25 kg mesh bags or customised packaging as per buyer requirements.',
      },
      {
        title: 'Storage & Shelf Life',
        kind: 'text',
        text: 'Stored in well-ventilated conditions. Shelf life: 20–30 days under proper storage.',
      },
      {
        title: 'Applications',
        kind: 'text',
        text: 'Used in cooking, food processing, restaurants, and retail markets worldwide.',
      },
    ],
  },

  3: {
    heading: 'G9 Cavendish Banana Exporter from India',
    overview: [
      'G9 Cavendish Banana is one of the most widely exported banana varieties from India, known for its uniform size, attractive appearance, rich taste, and long shelf life. At SHRIM EXPORT, we supply premium quality bananas that meet international export standards.',
    ],
    sections: [
      {
        title: 'Key Features',
        kind: 'list',
        items: [
          'Uniform size and shape',
          'Naturally sweet taste',
          'Bright green colour (export stage)',
          'High nutritional value',
          'Long shelf life suitable for export',
          'Carefully graded and sorted',
        ],
      },
      {
        title: 'Specifications',
        kind: 'table',
        rows: [
          ['Variety', 'G9 Cavendish Banana'],
          ['Colour', 'Green (Unripe)'],
          ['Length', '18–25 cm'],
          ['Finger Count', '5–7 per hand'],
          ['Shelf Life', '15–25 Days'],
          ['Origin', 'India'],
        ],
      },
      {
        title: 'Sourcing & Quality Control',
        kind: 'list',
        items: [
          'Sourced directly from well-managed farms in Maharashtra, Gujarat & South India',
          'Good Agricultural Practices (GAP)',
          'Residue-free cultivation',
          'Proper maturity selection',
          'Hygienic washing, grading, and packing',
          'Strict quality inspection before shipment',
        ],
      },
      {
        title: 'Packaging Details',
        kind: 'list',
        items: [
          '13 kg standard export cartons',
          'Corrugated fiberboard boxes',
          'Ventilated packaging for freshness',
          'Foam / paper protection for each layer',
          'Customised branding & labelling available',
        ],
      },
      {
        title: 'Storage & Shelf Life',
        kind: 'table',
        rows: [
          ['Storage Temperature', '13°C – 14°C'],
          ['Relative Humidity', '85–90%'],
          ['Shelf Life', '15–25 days'],
          ['Ripening', 'Controlled'],
        ],
      },
      {
        title: 'Export Markets',
        kind: 'tags',
        items: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Iran', 'Malaysia', 'Europe'],
      },
      {
        title: 'Applications',
        kind: 'list',
        items: [
          'Fresh consumption',
          'Smoothies & desserts',
          'Food processing industries',
          'Retail chains & supermarkets',
          'Hotels & catering services',
        ],
      },
      {
        title: 'Why Choose SHRIM EXPORT',
        kind: 'list',
        items: [
          'Trusted Indian exporter',
          'Consistent quality & supply',
          'Competitive pricing',
          'Strong logistics network',
          'Custom export solutions',
        ],
      },
    ],
  },

  4: {
    heading: 'Pomegranate Exporter from India',
    overview: [
      'Indian pomegranates are globally recognised for their deep red colour, juicy arils, sweet taste, and high nutritional value. At SHRIM EXPORT, we supply premium quality export-grade pomegranates carefully sourced and handled to meet international standards.',
    ],
    sections: [
      {
        title: 'Key Features',
        kind: 'list',
        items: [
          'Attractive deep red colour',
          'Sweet taste with soft seeds',
          'High juice content',
          'Rich in antioxidants',
          'Long shelf life for export',
          'Uniform size and premium grading',
        ],
      },
      {
        title: 'Specifications',
        kind: 'table',
        rows: [
          ['Variety', 'Bhagwa / Ganesh'],
          ['Colour', 'Deep Red'],
          ['Size', '200 g – 400 g per fruit'],
          ['Taste', 'Sweet'],
          ['Shelf Life', '20–30 Days'],
          ['Origin', 'India'],
        ],
      },
      {
        title: 'Sourcing & Quality Control',
        kind: 'list',
        items: [
          'Sourced directly from certified farms in Maharashtra',
          'Good Agricultural Practices (GAP)',
          'Residue-controlled farming',
          'Harvesting at proper maturity stage',
          'Careful sorting, grading, and inspection',
          'Hygienic handling and packing',
        ],
      },
      {
        title: 'Packaging Details',
        kind: 'list',
        items: [
          '3 kg / 5 kg export cartons',
          'Corrugated fiberboard boxes',
          'Foam net protection for each fruit',
          'Ventilated packaging',
          'Custom branding & labelling available',
        ],
      },
      {
        title: 'Storage & Shelf Life',
        kind: 'table',
        rows: [
          ['Storage Temperature', '5°C – 7°C'],
          ['Relative Humidity', '90–95%'],
          ['Shelf Life', '20–30 days'],
          ['Cold Chain', 'Maintained during export'],
        ],
      },
      {
        title: 'Export Markets',
        kind: 'tags',
        items: ['UAE', 'Saudi Arabia', 'Netherlands', 'UK', 'Bangladesh', 'Malaysia'],
      },
      {
        title: 'Applications',
        kind: 'list',
        items: [
          'Fresh consumption',
          'Juice and beverage industry',
          'Food processing',
          'Salads and desserts',
          'Retail & supermarket chains',
        ],
      },
      {
        title: 'Why Choose SHRIM EXPORT',
        kind: 'list',
        items: [
          'Reliable exporter from India',
          'Premium quality fruits',
          'Competitive pricing',
          'Timely delivery',
          'Strong export logistics',
        ],
      },
    ],
  },

  5: {
    heading: 'Frozen Fruits & Vegetables Exporter from India',
    tagline: 'Premium Quality | IQF Technology | Global Supply',
    overview: [
      'Frozen fruits and vegetables are in high demand globally due to their long shelf life, convenience, and preserved freshness. At SHRIM EXPORT, we supply premium quality frozen products processed using IQF (Individually Quick Frozen) technology, ensuring natural taste, texture, and nutritional value are retained.',
    ],
    sections: [
      {
        title: 'Frozen Vegetables',
        kind: 'tags',
        items: [
          'French Fries',
          'Green Peas',
          'Sweet Corn',
          'Mixed Vegetable',
          'Cauliflower',
          'Broccoli',
          'Okra (Bhindi)',
          'Spinach',
        ],
      },
      {
        title: 'Frozen Fruits',
        kind: 'tags',
        items: ['Mango Cubes / Slices', 'Strawberry', 'Pomegranate Arils', 'Papaya Cubes'],
      },
      {
        title: 'Key Features',
        kind: 'list',
        items: [
          'IQF processed for maximum freshness',
          'Retains natural colour, taste & nutrients',
          'Long shelf life (12–24 months)',
          'No preservatives added',
          'Hygienically processed',
          'Ready-to-use convenience',
        ],
      },
      {
        title: 'Specifications',
        kind: 'table',
        rows: [
          ['Processing', 'IQF (Individually Quick Frozen)'],
          ['Temperature', '-18°C or below'],
          ['Shelf Life', '12–24 Months'],
          ['Packaging', 'Bulk / Retail Packs'],
          ['Quality', 'Export Grade'],
          ['Origin', 'India'],
        ],
      },
      {
        title: 'Sourcing & Quality Control',
        kind: 'list',
        items: [
          'Sourced from high-quality farms',
          'Processed in advanced freezing facilities',
          'Strict quality checks & grading',
          'Hygienic washing, cutting & freezing',
          'Compliance with international food safety standards',
        ],
      },
      {
        title: 'Packaging Details',
        kind: 'list',
        items: [
          '1 kg / 2 kg / 5 kg retail packs',
          '10 kg / 20 kg bulk cartons',
          'Food-grade packaging materials',
          'Vacuum or sealed packs',
          'Customised branding available',
        ],
      },
      {
        title: 'Storage & Shelf Life',
        kind: 'list',
        items: [
          'Storage temperature: -18°C or below',
          'Maintain cold chain throughout supply',
          'Shelf life: 12–24 months',
          'Do not refreeze after thawing',
        ],
      },
      {
        title: 'Export Markets',
        kind: 'tags',
        items: ['UAE', 'USA', 'UK', 'Germany', 'Saudi Arabia', 'Malaysia', 'Australia'],
      },
      {
        title: 'Applications',
        kind: 'list',
        items: [
          'Food processing industry',
          'Hotels & restaurants',
          'Ready-to-eat meals',
          'Retail supermarkets',
          'Catering services',
          'Bakery & dessert industry',
        ],
      },
      {
        title: 'Why Choose SHRIM EXPORT',
        kind: 'list',
        items: [
          'Trusted exporter from India',
          'Premium IQF products',
          'Consistent quality & supply',
          'Competitive pricing',
          'Reliable cold chain logistics',
        ],
      },
    ],
  },

  6: {
    heading: 'Dehydrated Vegetables Exporter from India',
    tagline: 'Premium Quality | Long Shelf Life | Global Supply',
    overview: [
      'Dehydrated vegetables are widely used in global food industries due to their extended shelf life, convenience, and preserved nutrition. At SHRIM EXPORT, we supply high-quality dehydrated vegetables processed using advanced drying techniques to retain flavour, colour, and nutrients.',
    ],
    sections: [
      {
        title: 'Product Range',
        kind: 'tags',
        items: [
          'Dehydrated Onion (Flakes, Powder, Granules)',
          'Dehydrated Garlic (Flakes, Powder)',
          'Dehydrated Green Chilli',
          'Dehydrated Ginger',
          'Dehydrated Carrot',
          'Dehydrated Beetroot',
          'Dehydrated Spinach',
        ],
      },
      {
        title: 'Key Features',
        kind: 'list',
        items: [
          'Long shelf life (up to 12–24 months)',
          'Retains natural colour & flavour',
          'Easy storage and transportation',
          'No refrigeration required',
          'Hygienically processed',
          'Free from contaminants',
        ],
      },
      {
        title: 'Specifications',
        kind: 'table',
        rows: [
          ['Form', 'Flakes / Powder / Granules'],
          ['Moisture', '< 6%'],
          ['Colour', 'Natural'],
          ['Shelf Life', '12–24 Months'],
          ['Processing', 'Air-dried / Dehydrated'],
          ['Origin', 'India'],
        ],
      },
      {
        title: 'Sourcing & Quality Control',
        kind: 'list',
        items: [
          'Raw materials sourced from trusted farms',
          'Processed in hygienic facilities',
          'Strict quality checks at every stage',
          'Advanced dehydration technology',
          'Compliance with international standards',
        ],
      },
      {
        title: 'Packaging Details',
        kind: 'list',
        items: [
          '10 kg / 20 kg / 25 kg food-grade bags',
          'Inner poly + outer corrugated boxes',
          'Vacuum packing available',
          'Customised packaging & labelling',
          'Bulk export packaging options',
        ],
      },
      {
        title: 'Storage & Shelf Life',
        kind: 'list',
        items: [
          'Store in a cool & dry place',
          'Avoid direct sunlight',
          'Keep in airtight containers',
          'Shelf life: 12–24 months',
        ],
      },
      {
        title: 'Export Markets',
        kind: 'tags',
        items: ['UAE', 'USA', 'Germany', 'UK', 'Netherlands', 'Malaysia', 'Australia'],
      },
      {
        title: 'Applications',
        kind: 'list',
        items: [
          'Food processing industry',
          'Ready-to-eat meals',
          'Instant noodles & soups',
          'Spice blends & seasonings',
          'Hotels & catering services',
          'Snacks & packaged foods',
        ],
      },
      {
        title: 'Why Choose SHRIM EXPORT',
        kind: 'list',
        items: [
          'Reliable exporter from India',
          'Consistent quality supply',
          'Competitive global pricing',
          'Timely shipment & logistics',
          'Custom solutions for buyers',
        ],
      },
    ],
  },

  7: {
    heading: 'Fresh Turmeric Exporter from India',
    tagline: 'Premium Quality | Farm Fresh | Export Grade',
    overview: [
      'Fresh Turmeric (Raw Haldi) from India is globally recognised for its rich yellow colour, strong aroma, and high curcumin content.',
      'At SHRIM EXPORT, we supply farm-fresh, export-quality turmeric ensuring international standards and freshness.',
    ],
    sections: [
      {
        title: 'Key Features',
        kind: 'list',
        items: [
          'Bright yellow-orange colour',
          'High curcumin content (3%–5%)',
          'Fresh, earthy aroma',
          'Uniform fingers & bulbs',
          'Residue-controlled farming',
          'Long shelf life for export',
        ],
      },
      {
        title: 'Specifications',
        kind: 'table',
        rows: [
          ['Product', 'Fresh Turmeric (Raw Haldi)'],
          ['Colour', 'Yellow / Orange'],
          ['Variety', 'Salem / Rajapuri'],
          ['Size', 'Medium to Large Fingers'],
          ['Curcumin', '3% – 5% (Approx.)'],
          ['Shelf Life', '20–30 Days'],
          ['Origin', 'India'],
        ],
      },
      {
        title: 'Sourcing & Quality Control',
        kind: 'list',
        items: [
          'Sourced from certified farms in India',
          'Good Agricultural Practices (GAP)',
          'Harvested at optimal maturity',
          'Proper washing, cleaning & grading',
          'Strict quality inspection before export',
        ],
      },
      {
        title: 'Packaging Details',
        kind: 'list',
        items: [
          '5 kg / 10 kg / 25 kg mesh bags or cartons',
          'Food-grade packaging materials',
          'Ventilated packaging for freshness',
          'Customised branding available',
          'Export-standard handling',
        ],
      },
      {
        title: 'Storage & Shelf Life',
        kind: 'table',
        rows: [
          ['Temperature', '12°C – 15°C'],
          ['Humidity', '85–90%'],
          ['Shelf Life', '20–30 days'],
          ['Conditions', 'Cool, dry & ventilated'],
        ],
      },
      {
        title: 'Export Markets',
        kind: 'tags',
        items: ['UAE', 'Malaysia', 'Bangladesh', 'Nepal', 'Europe', 'USA'],
      },
      {
        title: 'Applications',
        kind: 'list',
        items: [
          'Fresh cooking',
          'Herbal & Ayurvedic use',
          'Food processing industry',
          'Juice & health drinks',
          'Cosmetic & pharmaceutical',
        ],
      },
      {
        title: 'Why Choose SHRIM EXPORT',
        kind: 'list',
        items: [
          'Trusted exporter from India',
          'Premium farm sourcing',
          'Consistent quality supply',
          'Competitive pricing',
          'Timely global delivery',
        ],
      },
    ],
  },

  8: {
    heading: 'Semi Husk Coconut Exporter from India',
    overview: [
      'India is a major exporter of premium semi husk coconuts, especially to Gulf countries, Europe, and Southeast Asia. Semi husk coconuts are preferred because they have longer shelf life, better protection during transport, and easier handling.',
    ],
    sections: [
      {
        title: 'Export Specifications',
        kind: 'table',
        rows: [
          ['Type', 'Semi Husk Mature Coconut'],
          ['Origin', 'India'],
          ['Colour', 'Brown'],
          ['Weight', '500 g – 700 g / 650 g+ / 800 g+ (as per buyer requirement)'],
          ['Shelf Life', '45–60 days'],
          ['Packing', '13 kg / 25 kg PP bags or mesh bags'],
          ['Loading', '40 ft container'],
          ['MOQ', '1 Container'],
          ['Supply Ability', 'Bulk quantity available'],
        ],
      },
      {
        title: 'Common Container Capacity',
        kind: 'list',
        items: [
          '13 kg bags → approx. 2,100–2,300 bags per 40 ft container',
          '25 kg bags → approx. 1,100–1,200 bags per 40 ft container',
        ],
      },
      {
        title: 'Main Export Markets',
        kind: 'tags',
        items: ['United Arab Emirates', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Malaysia'],
      },
      {
        title: 'Documents Required',
        kind: 'list',
        items: [
          'Commercial Invoice',
          'Packing List',
          'Phytosanitary Certificate',
          'Certificate of Origin',
          'Fumigation Certificate (if required)',
          'Bill of Lading',
        ],
      },
      {
        title: 'Popular Indian Sourcing States',
        kind: 'tags',
        items: ['Tamil Nadu', 'Kerala', 'Karnataka'],
      },
      { title: 'Why Choose SHRIM EXPORT', kind: 'list', items: WHY_SHRIM },
    ],
  },
};
