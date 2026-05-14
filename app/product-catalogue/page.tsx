import image from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCatalogue() {
  const catalogProducts = [
    {
      id: 1,
      title: "G4 Green Chilli",
      description: ["Colour:Deep Green", "Size: 6cm to 10cm", "Pungency: Medium to High", "Shelf Life: 10 to 15 Days", "Origin: India"],
      moq: "",
      image: "/images/chilly.jpeg"
    },
    {
      id: 2,
      title: "Fresh Onion",
      description: ["Colour:Red/ White", "Size: 40mm to 70mm +", "Shelf Life: 20 to 30 Days", "Origin: India"],
      moq: "",
      image: "/images/onions.jpeg"
    },
    {
      id: 3,
      title: "Candevish Banana",
      description: ["Variety:G9 Cavendish Banana", "Colour: Green (Unripe)", "Length: 18 to 25 cm", "Finger Count: 5 to 7 per hand", "Shelf Life: 15 to 25 Days", "Origin: India."],
      moq: "",
      image: "/images/bananas.jpeg"
    },
    {
      id: 4,
      title: "Fresh Pomogrenate",
      description: ["Variety:Bhagwa / Ganesh", "Colour:Deep Red", "Size: 200g to 400g per fruit", "Taste: Sweet", "Shelf Life: 20 to 30 Days", "Origin: India."],
      moq: "",
      image: "/images/Pomogranet.jpeg"
    },
    {
      id: 5,
      title: "Frozen Vegetables",
      description: ["Processing:IQF - (Individually Quick Frozen)", "Temperature:18°C or below", "Shelf Life:12 to 24 Months", "Packaging:Bulk / Retail Packs", "Quality:Export Grade", "Origin:India."],
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
      description: ["Product: Fresh Turmeric (Raw Haldi)", "Colour:Yellow / Orange", "Variety:Salem/ Rajapuri", "Size:Medium to Large Fingers", "Curcumin:3% – 5% (Approx.)", "Shelf Life:20 – 30 Days", "Origin:India."],
      moq: "",
      image: "/images/Tumeric_fingers.jpeg"
    },
    {
      id: 8,
      title: "Semi Husk Coconut",
      description: ["Color: Brown","Weight: 500g – 700g / 650g+ / 800g+ (as per buyer requirement)","Shelf Life: 45–60 days","Packing: 13kg / 25kg PP bags or mesh bags","Loading: 40ft container"],
      moq: "MOQ -",
      image: "/images/Coconut.jpeg"
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
                {product.description.map((desc, idx) => {
                  const colonIndex = desc.indexOf(':');
                  if (colonIndex !== -1) {
                    const boldPart = desc.slice(0, colonIndex);
                    const rest = desc.slice(colonIndex + 1);
                    return (
                      <p key={idx}>
                        <span className="font-semibold">{boldPart}:</span>{rest}
                      </p>
                    );
                  }
                  return (
                    <p key={idx}>{desc}</p>
                  );
                })}
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
