import Link from 'next/link';
import Image from 'next/image';
import WhatsAppLink from './WhatsAppLink';
import {
  CONTACT_EMAIL,
  OFFICE_ADDRESS,
  PHONE_MILIND,
  PHONE_RAMESHWARI,
} from '../lib/contact';
import { LEGAL_NAV } from '../lib/legal';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          <div>
            <Image
              src="/images/Asset 14@10x-8.png"
              alt="Shrim Export"
              width={160}
              height={64}
              className="h-12 w-auto object-contain brightness-110 mb-4"
            />
            <h3 className="text-sm font-black tracking-wider mb-4 text-white uppercase">Shrim Export</h3>
            <ul className="space-y-3 font-semibold text-sm">
              <li>
                <Link href="/product-catalogue" className="text-gray-400 hover:text-white transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/linguistics" className="text-gray-400 hover:text-white transition-colors">
                  Shrim Linguistics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black tracking-wider mb-6 text-white uppercase">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-400 font-semibold">
                <svg className="w-5 h-5 mt-0.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>{OFFICE_ADDRESS}</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 font-semibold">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-400 font-semibold">
                <svg className="w-5 h-5 mt-0.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="space-y-1">
                  <p>
                    WhatsApp:{' '}
                    <WhatsAppLink phone={PHONE_MILIND} className="hover:text-white transition-colors">
                      {PHONE_MILIND}
                    </WhatsAppLink>
                  </p>
                  <p className="text-xs text-gray-500 font-medium">Linguistics: {PHONE_RAMESHWARI}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-black tracking-wider mb-6 text-white uppercase">Legal</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-semibold text-sm">
              {LEGAL_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <p className="text-left text-xs text-gray-500 font-semibold tracking-wider">
            © 2026 Shrim Export. All rights reserved.
          </p>
          <p className="text-left sm:text-right text-xs text-gray-500 font-semibold tracking-wider">
            Developed by{' '}
            <a
              href="https://dmoshglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              D&apos;Mosh Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
