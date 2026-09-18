import { LEGAL_NAV } from './legal';

/** Canonical production origin. Override with NEXT_PUBLIC_SITE_URL when a custom domain is live. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shrim-exports-website.vercel.app'
).replace(/\/$/, '');

export const SITE_NAME = 'Shrim Export';
export const SITE_NAME_SHORT = 'Shrim Export';

export const SITE_TAGLINE =
  'Connecting international buyers with carefully sourced agricultural products from India.';

export const SITE_DESCRIPTION =
  'Shrim Export connects international buyers with carefully sourced agricultural products from India — quality, transparency and buyer-specific requirements.';

export const SITE_KEYWORDS = [
  'Shrim Export',
  'Indian agricultural exports',
  'fresh produce export India',
  'onion export India',
  'green chilli export',
  'banana export India',
  'pomegranate export',
  'spices export India',
  'frozen vegetables export',
  'agricultural sourcing partner India',
] as const;

export type SiteRoute = {
  path: string;
  title: string;
  description: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  /** Include in XML sitemap / robots allow list */
  index: boolean;
};

/** Primary public routes for sitemap, HTML map, and SEO. */
export const SITE_ROUTES: SiteRoute[] = [
  {
    path: '/',
    title: 'Home',
    description: SITE_DESCRIPTION,
    changeFrequency: 'weekly',
    priority: 1,
    index: true,
  },
  {
    path: '/product-catalogue',
    title: 'Export Products',
    description:
      'Explore Shrim Export’s range of fresh and processed agricultural products sourced from India for international buyers.',
    changeFrequency: 'weekly',
    priority: 0.9,
    index: true,
  },
  {
    path: '/about',
    title: 'About Us',
    description:
      'Shrim Export connects Indian agricultural producers with international buyers through transparent sourcing, clear specifications and dependable communication.',
    changeFrequency: 'monthly',
    priority: 0.8,
    index: true,
  },
  {
    path: '/contact',
    title: 'Request a Quote',
    description:
      'Share your agricultural sourcing requirement with Shrim Export — product, quantity, specification and destination.',
    changeFrequency: 'monthly',
    priority: 0.9,
    index: true,
  },
  {
    path: '/linguistics',
    title: 'Linguistics',
    description:
      'Hindi and Marathi language tutoring for NRIs and residents from Shrim Linguistics — keep your roots and language alive.',
    changeFrequency: 'monthly',
    priority: 0.7,
    index: true,
  },
  {
    path: '/site-map',
    title: 'Site Map',
    description: 'Complete site map of Shrim Export pages, products and legal policies.',
    changeFrequency: 'monthly',
    priority: 0.3,
    index: true,
  },
];

export const LEGAL_ROUTES: SiteRoute[] = LEGAL_NAV.map((item) => ({
  path: item.href,
  title: item.label,
  description: `${item.label} for Shrim Export.`,
  changeFrequency: 'yearly' as const,
  priority: 0.3,
  index: true,
}));

export const ALL_INDEXABLE_ROUTES: SiteRoute[] = [...SITE_ROUTES, ...LEGAL_ROUTES];

export function absoluteUrl(path = '/'): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
