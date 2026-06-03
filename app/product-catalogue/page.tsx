import Image from 'next/image';
import Link from 'next/link';

export default function ProductCatalogue() {
  const catalogProducts = [
    {
      id: 1,
      title: "G4 Green Chilli",
      description: ["Colour: Deep Green", "Size: 6cm to 10cm", "Pungency: Medium to High", "Shelf Life: 10 to 15 Days", "Origin: India"],
      moq: "",
      image: "/images/chilly.jpeg"
    },
    {
      id: 2,
      title: "Fresh Onion",
      description: ["Colour: Red/ White", "Size: 40mm to 70mm +", "Shelf Life: 20 to 30 Days", "Origin: India"],
      moq: "",
      image: "/images/onions.jpeg"
    },
    {
      id: 3,
      title: "Cavendish Banana",
      description: ["Variety: G9 Cavendish Banana", "Colour: Green (Unripe)", "Length: 18 to 25 cm", "Finger Count: 5 to 7 per hand", "Shelf Life: 15 to 25 Days", "Origin: India."],
      moq: "",
      image: "/images/bananas.jpeg"
    },
    {
      id: 4,
      title: "Fresh Pomegranate",
      description: ["Variety: Bhagwa / Ganesh", "Colour: Deep Red", "Size: 200g to 400g per fruit", "Taste: Sweet", "Shelf Life: 20 to 30 Days", "Origin: India."],
      moq: "",
      image: "/images/Pomogranet.jpeg"
    },
    {
      id: 5,
      title: "Frozen Vegetables",
      description: ["Processing: IQF - (Individually Quick Frozen)", "Temperature: 18°C or below", "Shelf Life: 12 to 24 Months", "Packaging: Bulk / Retail Packs", "Quality: Export Grade", "Origin: India."],
      moq: "",
      image: "/images/frozen_veggies.jpeg"
    },
    {
      id: 6,
      title: "Dehydrated Vegetables",
      description: ["Form: Flakes / Powder / Granules", "Moisture: < 6%", "Color: Natural", "Shelf Life: 12 – 24 Months", "Processing: Air-dried / Dehydrated", "Origin: India."],
      moq: "",
      image: "/images/spices.jpeg"
    },
    {
      id: 7,
      title: "Fresh Turmeric",
      description: ["Product: Fresh Turmeric (Raw Haldi)", "Colour: Yellow / Orange", "Variety: Salem/ Rajapuri", "Size: Medium to Large Fingers", "Curcumin: 3% – 5% (Approx.)", "Shelf Life: 20 – 30 Days", "Origin: India."],
      moq: "",
      image: "/images/Tumeric_fingers.jpeg"
    },
    {
      id: 8,
      title: "Semi Husk Coconut",
      description: ["Color: Brown", "Weight: 500g – 700g / 650g+ / 800g+ (as per buyer requirement)", "Shelf Life: 45–60 days", "Packing: 13kg / 25kg PP bags or mesh bags", "Loading: 40ft container"],
      moq: "",
      image: "/images/Coconut.jpeg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-4 uppercase">OUR PRODUCTS</h1>
        <p className="text-gray-600 max-w-3xl mb-8 text-sm leading-relaxed">
          Every shipment from Shrim Export carries the weight of regulatory verification not as a formality, but as a non-negotiable standard. Here is what we hold, and what it means for you.
        </p>

        <div className="flex items-center justify-between gap-4 mb-16 border-b border-gray-100 pb-6">
          <span className="text-shrim-green font-black text-sm tracking-wider uppercase">Customized packaging available!</span>
          <button className="px-6 py-2 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow transition-colors text-xs tracking-wider uppercase">
            SELECT PACKAGING
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {catalogProducts.map((product) => (
            <div key={product.id} className="flex flex-col justify-between h-full bg-white p-2">
              <div>
                <h3 className="text-shrim-green font-black text-lg mb-4 uppercase tracking-wider">{product.title}</h3>
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
                      <p key={idx} className="text-xs text-gray-500">{desc}</p>
                    );
                  })}
                  {product.moq && (
                    <p className="mt-3 text-shrim-gold font-bold">{product.moq}</p>
                  )}
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
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

        <div className="mt-20 flex justify-center border-t border-gray-100 pt-12">
          <Link href="/quote" className="px-10 py-4 bg-shrim-gold hover:bg-shrim-gold-light text-white font-black rounded-lg shadow-lg transition-colors tracking-widest text-sm uppercase">
            GET QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
