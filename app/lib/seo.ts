import type { Metadata } from 'next';
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from './site';
import {
  CONTACT_EMAIL,
  OFFICE_ADDRESS,
  PHONE_MILIND,
  PHONE_RAMESHWARI,
} from './contact';
import { CATALOG_PRODUCTS } from './products';

export const DEFAULT_OG_IMAGE = absoluteUrl('/images/shrim-logo-icon.png');

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === '/' ? undefined : title;

  return {
    title: fullTitle,
    description,
    keywords: keywords ?? [...SITE_KEYWORDS],
    alternates: { canonical: url },
    openGraph: {
      title: path === '/' ? `${SITE_NAME} | Indian Agricultural Exports` : `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [{ url: DEFAULT_OG_IMAGE, width: 512, height: 512, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: path === '/' ? `${SITE_NAME} | Indian Agricultural Exports` : `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

/** AEO FAQ answers — short, direct, cite-able by answer engines. */
export const SITE_FAQS: { question: string; answer: string }[] = [
  {
    question: 'What does Shrim Export supply?',
    answer:
      'Shrim Export supplies fresh and processed agricultural products from India for international buyers, including green chilli, onion, Cavendish banana, pomegranate, frozen and dehydrated vegetables, turmeric, coconut and related produce.',
  },
  {
    question: 'Where is Shrim Export based?',
    answer:
      'Shrim Export is based in Kopargaon, Dist. Ahilyanagar, Maharashtra, India, and works with a sourcing network across India.',
  },
  {
    question: 'How do I request an export quotation?',
    answer:
      'Share your product, quantity, specification and destination through the Request a Quote form or WhatsApp export sales. The team reviews availability and requirements before responding.',
  },
  {
    question: 'Does Shrim Export offer custom packaging?',
    answer:
      'Yes. Packaging can be adapted to product, quantity, handling and destination requirements, including bulk, retail, private-label and custom options.',
  },
  {
    question: 'Which markets does Shrim Export serve?',
    answer:
      'Shrim Export works with international buyers across destination markets. Documentation, packing and product preparation are aligned to the country you are shipping to.',
  },
];

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/images/shrim-logo-icon.png'),
    email: CONTACT_EMAIL,
    telephone: [PHONE_MILIND, PHONE_RAMESHWARI],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Flat No. 101, Kotkar Heights, Joshi Nagar, Kopargaon',
      addressLocality: 'Kopargaon',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
      description: OFFICE_ADDRESS,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_MILIND,
        contactType: 'sales',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: PHONE_RAMESHWARI,
        contactType: 'customer support',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
    ],
    sameAs: [],
    description: SITE_DESCRIPTION,
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
  };
}

export function faqJsonLd(faqs = SITE_FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productCatalogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Shrim Export Product Catalogue',
    itemListElement: CATALOG_PRODUCTS.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
        description: product.description.join('. '),
        image: absoluteUrl(product.image),
        brand: { '@type': 'Brand', name: SITE_NAME },
        countryOfOrigin: 'IN',
      },
    })),
  };
}
