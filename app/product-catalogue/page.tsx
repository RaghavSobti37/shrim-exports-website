import Image from 'next/image';
import Link from 'next/link';
import { CATALOG_PRODUCTS } from '../lib/products';

export const metadata = {
  title: 'Export Products',
  description:
    'Explore Shrim Export’s range of fresh and processed agricultural products sourced from India.',
};

export default function ProductCatalogue() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="pt-10 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4 uppercase">
          Our products
        </h1>
        <p className="text-gray-600 max-w-3xl mb-8 text-sm md:text-base leading-relaxed">
          Explore our range of fresh and processed agricultural products sourced from India.
        </p>

        <div className="flex items-center gap-4 flex-wrap mb-16 border-b border-gray-100 pb-6">
          <span className="text-shrim-green font-black text-sm tracking-wider uppercase">
            Customized packaging available
          </span>
          <Link
            href="/contact"
            className="px-6 py-2 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow transition-colors text-xs tracking-wider uppercase"
          >
            Select packaging
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {CATALOG_PRODUCTS.map((product) => (
            <div key={product.id} className="flex flex-col justify-between h-full bg-white p-2">
              <div>
                <h3 className="text-shrim-green font-black text-lg mb-4 uppercase tracking-wider">
                  {product.title}
                </h3>
                <div className="text-xs text-gray-500 mb-6 space-y-1.5 font-sans uppercase tracking-wider font-semibold">
                  {product.description.map((desc, idx) => {
                    const colonIndex = desc.indexOf(':');
                    if (colonIndex !== -1) {
                      const boldPart = desc.slice(0, colonIndex);
                      const rest = desc.slice(colonIndex + 1);
                      return (
                        <p key={idx} className="text-xs">
                          <span className="text-gray-900 font-bold">{boldPart}:</span>
                          <span className="text-gray-500"> {rest}</span>
                        </p>
                      );
                    }
                    return (
                      <p key={idx} className="text-xs text-gray-500">
                        {desc}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image src={product.image} alt={product.title} fill className="object-cover" />
              </div>
              <Link
                href={`/contact?product=${encodeURIComponent(product.title)}`}
                className="mt-4 inline-flex justify-center px-4 py-2.5 bg-shrim-green hover:bg-shrim-green-light text-white font-bold rounded text-xs uppercase tracking-wider"
              >
                Request this product
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-shrim-green text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight">
            Don&apos;t see what you&apos;re looking for?
          </h2>
          <p className="mt-4 text-gray-200 text-sm leading-relaxed">
            Tell us your requirement. We may be able to source additional products based on quantity, season
            and destination.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex px-8 py-3.5 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow-lg text-sm uppercase tracking-wider"
          >
            Send an enquiry →
          </Link>
        </div>
      </section>
    </div>
  );
}
