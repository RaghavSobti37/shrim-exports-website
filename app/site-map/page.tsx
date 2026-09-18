import Link from 'next/link';
import type { Metadata } from 'next';
import { ALL_INDEXABLE_ROUTES, LEGAL_ROUTES, SITE_ROUTES } from '../lib/site';
import { CATALOG_PRODUCTS } from '../lib/products';
import { breadcrumbJsonLd, pageMetadata } from '../lib/seo';
import JsonLd from '../components/JsonLd';

export const metadata: Metadata = pageMetadata({
  title: 'Site Map',
  description: 'Complete site map of Shrim Export pages, products and legal policies.',
  path: '/site-map',
});

export default function SiteMapPage() {
  const primary = SITE_ROUTES.filter((r) => r.path !== '/site-map');
  const legal = LEGAL_ROUTES;

  return (
    <div className="bg-white min-h-screen">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Site Map', path: '/site-map' },
        ])}
      />
      <section className="bg-shrim-green text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Site Map</h1>
          <p className="mt-4 text-gray-200 text-sm md:text-base leading-relaxed">
            All public pages on Shrim Export — for visitors, search engines and answer engines.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4">
              Main pages
            </h2>
            <ul className="space-y-3">
              {primary.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="text-shrim-green font-bold hover:underline"
                  >
                    {route.title}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{route.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4">
              Export products
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Full catalogue:{' '}
              <Link href="/product-catalogue" className="text-shrim-green font-bold hover:underline">
                /product-catalogue
              </Link>
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CATALOG_PRODUCTS.map((product) => (
                <li key={product.id} className="text-sm text-gray-700 font-semibold">
                  {product.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4">
              Legal
            </h2>
            <ul className="space-y-2">
              {legal.map((route) => (
                <li key={route.path}>
                  <Link href={route.path} className="text-shrim-green font-bold hover:underline">
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 mb-4">
              Machine-readable
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sitemap.xml" className="text-shrim-green font-bold hover:underline">
                  XML sitemap
                </Link>
                {' '}
                <span className="text-gray-500">({ALL_INDEXABLE_ROUTES.length} URLs)</span>
              </li>
              <li>
                <Link href="/robots.txt" className="text-shrim-green font-bold hover:underline">
                  robots.txt
                </Link>
              </li>
              <li>
                <Link href="/llms.txt" className="text-shrim-green font-bold hover:underline">
                  llms.txt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
