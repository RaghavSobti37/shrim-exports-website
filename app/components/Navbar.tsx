'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Exports', path: '/#exports' }, // Using anchor since we didn't specify an exports page
    { name: 'Product Catalogue', path: '/product-catalogue' },
    { name: 'Linguistics', path: '/linguistics' },
    { name: 'About', path: '/#about' }, // Using anchor since we didn't specify an about page
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/Asset 6@5x-8.png"
                alt="Shrim Export Logo"
                width={100}
                height={150}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 h-full items-center">
            {navLinks.map((link) => {
              // Ensure we only underline exact matches to avoid highlighting multiple items
              const isActive = pathname === link.path || (pathname === '/' && link.path === '/');
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`inline-flex items-center text-sm font-bold tracking-wide transition-colors h-full border-b-[3px] ${
                    isActive
                      ? 'text-shrim-green border-shrim-green'
                      : 'text-gray-600 border-transparent hover:text-shrim-green'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
