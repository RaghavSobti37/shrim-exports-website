import Image from 'next/image';
import Link from 'next/link';

export default function ProductCatalogue() {
  const catalogProducts = [
    {
      id: 1,
      title: "Fresh Fruits & Vegetables",
      description: ["PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION"],
      moq: "MOQ -",
      image: "/images/fresh_fruits_vegetables.png"
    },
    {
      id: 2,
      title: "Turmeric Finger",
      description: ["PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION"],
      moq: "MOQ -",
      image: "/images/turmeric_fingers.png"
    },
    {
      id: 3,
      title: "Millet Cookies",
      description: ["PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION"],
      moq: "MOQ -",
      image: "/images/millet_cookies.png"
    },
    {
      id: 4,
      title: "Fresh Fruits & Vegetables",
      description: ["PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION"],
      moq: "MOQ -",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Turmeric Finger",
      description: ["PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION"],
      moq: "MOQ -",
      image: "https://images.unsplash.com/photo-1588667630713-376c72551e36?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Millet Cookies",
      description: ["PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION"],
      moq: "MOQ -",
      image: "https://images.unsplash.com/photo-1588667630713-376c72551e36?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Fresh Fruits & Vegetables",
      description: ["PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION"],
      moq: "MOQ -",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Turmeric Finger",
      description: ["PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION"],
      moq: "MOQ -",
      image: "https://images.unsplash.com/photo-1588667630713-376c72551e36?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 9,
      title: "Millet Cookies",
      description: ["PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION", "PRODUCT DESCRIPTION"],
      moq: "MOQ -",
      image: "https://images.unsplash.com/photo-1588667630713-376c72551e36?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-4 uppercase">OUR PRODUCTS</h1>
        <p className="text-gray-600 max-w-3xl mb-8 text-sm leading-relaxed">
          Every shipment from Shrim Export carries the weight of regulatory verification not as a formality, but as a non-negotiable standard. Here is what we hold, and what it means for you.
        </p>

        <div className="flex items-center gap-4 mb-16">
          <span className="text-shrim-green font-bold text-sm tracking-wide">Customized packaging available!</span>
          <button className="px-6 py-2 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow transition-colors text-xs tracking-wider uppercase">
            SELECT PACKAGING
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {catalogProducts.map((product) => (
            <div key={product.id} className="flex flex-col">
              <h3 className="text-shrim-green font-bold mb-3">{product.title}</h3>
              <div className="text-xs text-gray-500 mb-4 space-y-1 font-mono">
                {product.description.map((desc, idx) => (
                  <p key={idx} className="uppercase">{desc}</p>
                ))}
                <p className="mt-2 text-gray-700">{product.moq}</p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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

        <div className="mt-20 flex justify-center">
          <Link href="#quote" className="px-8 py-3 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow transition-colors tracking-wide">
            GET QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
