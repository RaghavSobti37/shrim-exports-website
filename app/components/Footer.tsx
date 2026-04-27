import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
          
          {/* Brand/Contact Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-8 flex border-l-2 border-shrim-gold pl-1">
                    <div className="w-1.5 h-full bg-shrim-green"></div>
                    <div className="w-1.5 h-3/4 bg-gray-400 mt-auto ml-1"></div>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-lg font-bold text-white uppercase tracking-wide">Shrim</span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Export</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Milind Madhukar Jori -</p>
                  <p className="text-sm text-gray-300">Cofounder</p>
                  <p className="text-sm text-gray-400">+91 9689971271</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-8 flex border-l-2 border-shrim-gold pl-1">
                    <div className="w-1.5 h-full bg-shrim-green"></div>
                    <div className="w-1.5 h-3/4 bg-gray-400 mt-auto ml-1"></div>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-lg font-bold text-white uppercase tracking-wide">Shrim</span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Linguistics</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Rameshwari Milind Jori -</p>
                  <p className="text-sm text-gray-300">Proprietor/ Founder</p>
                  <p className="text-sm text-gray-400">+91 9371758355</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-6 text-white uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#exports" className="text-sm text-gray-400 hover:text-white transition-colors">Shrim Exports</Link></li>
              <li><Link href="/product-catalogue" className="text-sm text-gray-400 hover:text-white transition-colors">Product Catalogue</Link></li>
              <li><Link href="/linguistics" className="text-sm text-gray-400 hover:text-white transition-colors">Shrim Linguistics</Link></li>
              <li><Link href="/#quote" className="text-sm text-gray-400 hover:text-white transition-colors">Get Quote</Link></li>
              <li><Link href="/#about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Corporate Office Address Column */}
          <div>
            <h3 className="text-sm font-bold tracking-wider mb-6 text-white uppercase">Corporate Office Address</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <svg className="w-5 h-5 mt-0.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>Flat No. 101, Ketkar Heights, Joshi Nagar, Kopargaon, Dist: Ahilyanagar, Maharashtra, India.</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:rameshwari@shrimexport.com" className="hover:text-white transition-colors">rameshwari@shrimexport.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 9689971271</span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Destiny Global All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
