import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const certifications = [
    "PORT REGISTRATION", "ISO", "APEDA", 
    "RCMC", "FSSAI", "UDYAM", 
    "GST", "IEC", "PHYTOSANITARY", "COA"
  ];

  const products = [
    {
      title: "Fresh Fruits & Vegetables",
      image: "/images/fresh_fruits_vegetables.png"
    },
    {
      title: "Turmeric Fingers",
      image: "/images/turmeric_fingers.png"
    },
    {
      title: "Millet Cookies",
      image: "/images/millet_cookies.png"
    }
  ];

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
      <section className="relative w-full min-h-[80vh] flex flex-col justify-center bg-shrim-green overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-shrim-green/90 to-shrim-green/40 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
            FROM INDIAN SOIL TO YOUR <span className="text-shrim-gold">SHELVES</span>,
            <br />
            FROM OUR <span className="text-shrim-gold">ROOTS</span> TO YOUR HOMES.
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Farm Direct Sourcing | Full Batch Traceability
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/product-catalogue" className="px-8 py-3 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow-lg transition-colors">
              VIEW OUR PRODUCTS
            </Link>
            <Link href="#quote" className="px-8 py-3 bg-transparent border-2 border-shrim-gold text-shrim-gold hover:bg-shrim-gold hover:text-white font-bold rounded transition-colors">
              GET QUOTE
            </Link>
          </div>

          <div className="mt-20 flex flex-col sm:flex-row gap-12">
            <div className="flex items-center gap-4">
              <div className="w-8 h-12 flex border-l-2 border-shrim-gold pl-1">
                <div className="w-2 h-full bg-white"></div>
                <div className="w-2 h-3/4 bg-gray-300 mt-auto ml-1"></div>
              </div>
              <div>
                <p className="text-white font-bold tracking-wide">SHRIM <span className="text-gray-300 text-xs tracking-widest font-normal uppercase block">Export</span></p>
              </div>
              <div className="ml-2 text-sm text-gray-300">
                <p>Milind Madhukar Jori -</p>
                <p>Cofounder</p>
                <p>+91 9689971271</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-12 flex border-l-2 border-shrim-gold pl-1">
                <div className="w-2 h-full bg-white"></div>
                <div className="w-2 h-3/4 bg-gray-300 mt-auto ml-1"></div>
              </div>
              <div>
                <p className="text-white font-bold tracking-wide">SHRIM <span className="text-gray-300 text-xs tracking-widest font-normal uppercase block">Linguistics</span></p>
              </div>
              <div className="ml-2 text-sm text-gray-300">
                <p>Rameshwari Milind Jori -</p>
                <p>Proprietor/ Founder</p>
                <p>+91 9371758355</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Certifications */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-4">OUR EXPORT CERTIFICATIONS</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-sm">
            Every shipment from Shrim Export carries the weight of regulatory verification — not as a formality, but as a non-negotiable standard. Here is what we hold, and what it means for you.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert} className="py-4 px-6 border border-shrim-gold rounded shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
                <span className="font-bold text-gray-800 text-sm tracking-wide">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Star Products */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-16">OUR STAR PRODUCTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.title} className="flex flex-col items-center">
                <h3 className="text-shrim-green font-bold mb-4">{product.title}</h3>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
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

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <span className="text-gray-800 font-black tracking-wide">BULK DEHYDRATED PRODUCTS AVAILABLE</span>
            <Link href="/product-catalogue" className="px-6 py-2 bg-shrim-green hover:bg-shrim-green-light text-white font-bold rounded shadow transition-colors text-sm">
              VIEW FULL CATALOG
            </Link>
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-4">MARKETS WE <span className="text-shrim-gold">SERVE</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-sm">
            Our compliance infrastructure is built around the regulatory requirements of the world's most demanding import markets. If you're sourcing from India, we know what your customs needs before you ask.
          </p>

          <div className="space-y-6">
            {markets.map((market) => (
              <div key={market.name} className="relative w-full h-48 rounded-xl overflow-hidden group">
                <Image 
                  src={market.image}
                  alt={market.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-left">
                  <h3 className="text-2xl font-black text-white tracking-wider mb-2">{market.name}</h3>
                  <p className="text-gray-200 text-sm max-w-2xl">{market.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
