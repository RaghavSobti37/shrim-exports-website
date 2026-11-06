'use client';

import Image from 'next/image';
import { useState } from 'react';

const SAMPLES = Array.from(
  { length: 12 },
  (_, i) => `/images/handwriting/handwriting-${String(i + 1).padStart(2, '0')}.jpg`,
);

function Arrow({ dir, onClick }: { dir: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'next' ? 'Next sample' : 'Previous sample'}
      className={`absolute top-1/2 -translate-y-1/2 ${
        dir === 'next' ? 'right-3' : 'left-3'
      } z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-shrim-green text-white shadow-lg hover:bg-shrim-green-light transition-colors`}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d={dir === 'next' ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
        />
      </svg>
    </button>
  );
}

export default function HandwritingShowcase() {
  const [index, setIndex] = useState(0);
  const go = (step: number) => setIndex((i) => (i + step + SAMPLES.length) % SAMPLES.length);

  return (
    <div>
      <div
        className="relative mx-auto w-full max-w-2xl aspect-square rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100"
        aria-roledescription="carousel"
        aria-label="Handwriting before and after samples"
      >
        {SAMPLES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Student handwriting before and after lessons, sample ${i + 1} of ${SAMPLES.length}`}
            fill
            sizes="(min-width: 768px) 672px, 100vw"
            priority={i === 0}
            aria-hidden={i !== index}
            className={`object-contain transition-opacity duration-700 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <Arrow dir="prev" onClick={() => go(-1)} />
        <Arrow dir="next" onClick={() => go(1)} />
      </div>

      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Choose a sample">
        {SAMPLES.map((src, i) => (
          <button
            key={src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Sample ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-shrim-green' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
