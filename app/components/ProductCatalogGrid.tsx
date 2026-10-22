'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { CatalogProduct } from '../lib/products';
import { PRODUCT_DETAILS, type DetailSection } from '../lib/product-details';

function SpecLine({ text }: { text: string }) {
  const i = text.indexOf(':');
  if (i === -1) return <p className="text-gray-600">{text}</p>;
  return (
    <p>
      <span className="text-gray-900 font-bold">{text.slice(0, i)}:</span>
      <span className="text-gray-600"> {text.slice(i + 1).trim()}</span>
    </p>
  );
}

function Section({ section }: { section: DetailSection }) {
  return (
    <section className="mt-8">
      <h3 className="text-shrim-gold font-black text-xs tracking-[0.2em] uppercase mb-3">{section.title}</h3>
      {section.kind === 'text' && <p className="text-gray-700 text-base leading-relaxed">{section.text}</p>}
      {section.kind === 'list' && (
        <ul className="space-y-2">
          {section.items.map((item) => (
            <li key={item} className="flex gap-3 text-gray-700 text-base leading-relaxed">
              <svg className="mt-1.5 h-4 w-4 shrink-0 text-shrim-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {section.kind === 'tags' && (
        <ul className="flex flex-wrap gap-2">
          {section.items.map((item) => (
            <li
              key={item}
              className="px-3 py-1.5 rounded-full bg-shrim-green/10 text-shrim-green text-sm font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {section.kind === 'table' && (
        <dl className="rounded-xl border border-gray-200 overflow-hidden text-base">
          {section.rows.map(([k, v], idx) => (
            <div
              key={k}
              className={`grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 px-4 py-2.5 ${
                idx % 2 === 0 ? 'bg-background' : 'bg-white'
              }`}
            >
              <dt className="font-bold text-gray-900">{k}</dt>
              <dd className="text-gray-700">{v}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

export default function ProductCatalogGrid({ products }: { products: CatalogProduct[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = products.find((p) => p.id === activeId) ?? null;
  const detail = active ? PRODUCT_DETAILS[active.id] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.style.overflow = 'hidden';
    }
    if (!active && dialog.open) dialog.close();
  }, [active]);

  const close = () => {
    setActiveId(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {products.map((product) => {
          const hasDetail = Boolean(PRODUCT_DETAILS[product.id]);
          return (
            <div key={product.id} className="flex flex-col h-full p-2">
              {/* Spec block grows so every image + button row lines up across the grid */}
              <div className="flex-1">
                <h3 className="text-shrim-green font-black text-lg mb-4 uppercase tracking-wider">
                  {product.title}
                </h3>
                <div className="text-sm mb-6 space-y-1.5">
                  {product.description.map((desc) => (
                    <SpecLine key={desc} text={desc} />
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => hasDetail && setActiveId(product.id)}
                disabled={!hasDetail}
                className="group relative block w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md cursor-pointer disabled:cursor-default"
                aria-label={`View full details for ${product.title}`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {hasDetail && (
                  <button
                    type="button"
                    onClick={() => setActiveId(product.id)}
                    className="inline-flex items-center justify-center text-center min-h-12 px-3 py-2 border-2 border-shrim-green text-shrim-green hover:bg-shrim-green hover:text-white font-bold rounded text-xs leading-tight uppercase tracking-wider transition-colors"
                  >
                    View details
                  </button>
                )}
                <Link
                  href={`/contact?product=${encodeURIComponent(product.title)}`}
                  className={`inline-flex items-center justify-center text-center min-h-12 px-3 py-2 border-2 border-shrim-green bg-shrim-green hover:bg-shrim-green-light hover:border-shrim-green-light text-white font-bold rounded text-xs leading-tight uppercase tracking-wider transition-colors ${
                    hasDetail ? '' : 'col-span-2'
                  }`}
                >
                  Request this product
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        onClose={close}
        onClick={(e) => {
          // Close when clicking the backdrop (outside the panel)
          if (e.target === e.currentTarget) close();
        }}
        aria-labelledby="product-dialog-title"
        className="m-auto w-[calc(100%-2rem)] max-w-3xl max-h-[90vh] rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        {active && detail && (
          <div>
            <div className="relative w-full aspect-[16/7] bg-gray-100">
              <Image src={active.image} alt={active.title} fill sizes="768px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <button
                type="button"
                onClick={close}
                className="absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 hover:bg-white shadow"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2
                  id="product-dialog-title"
                  className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight"
                >
                  {detail.heading}
                </h2>
                {detail.tagline && (
                  <p className="mt-1 text-shrim-gold-light text-xs md:text-sm font-bold tracking-wider uppercase">
                    {detail.tagline}
                  </p>
                )}
              </div>
            </div>

            <div className="px-6 md:px-8 pb-8">
              <section className="mt-6">
                <h3 className="text-shrim-gold font-black text-xs tracking-[0.2em] uppercase mb-3">
                  Product Overview
                </h3>
                <div className="space-y-3 text-gray-700 text-base md:text-lg leading-relaxed">
                  {detail.overview.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </section>

              {detail.sections.map((section) => (
                <Section key={section.title} section={section} />
              ))}

              <div className="mt-10 flex flex-col sm:flex-row gap-3 border-t border-gray-100 pt-6">
                <Link
                  href={`/contact?product=${encodeURIComponent(active.title)}`}
                  onClick={close}
                  className="inline-flex justify-center px-6 py-3 bg-shrim-green hover:bg-shrim-green-light text-white font-bold rounded text-sm uppercase tracking-wider"
                >
                  Request this product
                </Link>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex justify-center px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold rounded text-sm uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
