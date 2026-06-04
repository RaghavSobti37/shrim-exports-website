import Image from 'next/image';
import Link from 'next/link';
import WhatsAppLink from './components/WhatsAppLink';
import { PHONE_MILIND, PHONE_RAMESHWARI, STAR_PRODUCTS } from './lib/contact';

export default function Home() {
  const markets = [
    {
      name: "EUROPE",
      desc: "EU MRL compliance for pesticide residues. Strict labelling standards met as standard, not on request.",
      image: "/images/europe_market.png"
    },
    {
      name: "EAST ASIA",
      desc: "Strong demand for Indian spices, rice, and processed agri products.",
      image: "/images/east_asia_market.png"
    },
    {
      name: "AFRICA",
      desc: "Pulses, rice, and onion — commodities with consistent demand and established trade corridors from India.",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-center bg-shrim-green overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundImage: "url('/images/Asset 18@5x-100.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-shrim-green via-shrim-green/70 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight tracking-tight uppercase">
            FROM INDIAN SOIL TO YOUR <span className="text-shrim-gold italic lowercase">shelves</span>,
            <br />
            FROM OUR <span className="text-shrim-gold italic lowercase">roots</span> TO YOUR HOMES.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 font-medium tracking-wide">
            Farm Direct Sourcing | Full Batch Traceability
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/product-catalogue" className="px-8 py-3.5 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow-lg transition-colors text-sm uppercase tracking-wider">
              VIEW CATALOGUE
            </Link>
            <Link href="/quote" className="px-8 py-3.5 bg-shrim-gold text-white font-bold rounded shadow-lg transition-colors hover:bg-shrim-gold-light text-sm uppercase tracking-wider">
              GET QUOTE
            </Link>
          </div>
        </div>
      </section>

      {/* Stacked Green Horizontal Bars (Founders Info) */}
      <div className="w-full flex flex-col bg-shrim-green border-t border-shrim-green-light">
        {/* Top Bar: Shrim Export Founder */}
        <div className="w-full border-b border-shrim-green-light/40 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center gap-4">
            <Image
              src="/images/Asset 14@10x-8.png"
              alt="Shrim Export Logo"
              width={140}
              height={50}
              className="h-10 w-auto object-contain brightness-110 shrink-0"
            />
            <p className="text-sm md:text-base text-white font-normal tracking-wide">
              <span>Milind Madhukar Jori - Cofounder </span>
              <WhatsAppLink phone={PHONE_MILIND} className="hover:underline">
                {PHONE_MILIND}
              </WhatsAppLink>
            </p>
          </div>
        </div>
        
        {/* Bottom Bar: Shrim Linguistics Founder */}
        <div className="w-full py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center gap-4">
            <Image
              src="/images/Asset 15@10x-8.png"
              alt="Shrim Linguistics Logo"
              width={140}
              height={50}
              className="h-10 w-auto object-contain brightness-110 shrink-0"
            />
            <p className="text-sm md:text-base text-white font-normal tracking-wide">
              <span>Rameshwari Milind Jori - Proprietor/ Founder </span>
              <WhatsAppLink phone={PHONE_RAMESHWARI} className="hover:underline">
                {PHONE_RAMESHWARI}
              </WhatsAppLink>
            </p>
          </div>
        </div>
      </div>

      {/* Star Products */}
      <section className="py-24 bg-gray-50 text-center border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-16 uppercase">OUR STAR PRODUCTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {STAR_PRODUCTS.map((product) => (
              <div key={product.title} className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-shrim-green font-black text-lg mb-6 uppercase tracking-wider">{product.title}</h3>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md">
                  <Image 
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 max-w-5xl mx-auto">
            <span className="text-gray-800 font-black tracking-wider text-sm uppercase">BULK DEHYDRATED PRODUCTS AVAILABLE</span>
            <Link href="/product-catalogue" className="px-8 py-3 bg-shrim-green hover:bg-shrim-green-light text-white font-bold rounded shadow-lg transition-colors text-sm uppercase tracking-wider">
              VIEW FULL CATALOG
            </Link>
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-4 uppercase">MARKETS WE <span className="text-shrim-gold">SERVE</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-sm leading-relaxed">
            Our compliance infrastructure is built around the regulatory requirements of the world's most demanding import markets. If you're sourcing from India, we know what your customs needs before you ask.
          </p>

          <div className="space-y-12 text-left">
            {markets.map((market) => (
              <div key={market.name} className="flex flex-col gap-4">
                <div className="relative w-full h-56 rounded-xl overflow-hidden group shadow-md">
                  <Image 
                    src={market.image}
                    alt={market.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />
                  <div className="absolute bottom-6 left-8">
                    <h3 className="text-3xl font-black text-white tracking-widest uppercase">{market.name}</h3>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed px-2">
                  {market.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
