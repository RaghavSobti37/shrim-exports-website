import Image from 'next/image';
import Link from 'next/link';
import WhatsAppLink from './components/WhatsAppLink';
import { PHONE_MILIND, WHATSAPP_EXPORT_TEXT } from './lib/contact';
import { FEATURED_PRODUCTS } from './lib/products';

const goldBtn =
  'inline-flex items-center justify-center px-8 py-3.5 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow-lg transition-colors text-sm uppercase tracking-wider';
const whiteBtn =
  'inline-flex items-center justify-center px-8 py-3.5 bg-white hover:bg-gray-100 text-shrim-green font-bold rounded shadow-lg transition-colors text-sm uppercase tracking-wider';
const greenBtn =
  'inline-flex items-center justify-center px-8 py-3.5 bg-shrim-green hover:bg-shrim-green-light text-white font-bold rounded shadow-lg transition-colors text-sm uppercase tracking-wider';

const sourceCards = [
  {
    title: 'Sourcing',
    desc: 'Products selected through our sourcing network across India.',
  },
  {
    title: 'Specifications',
    desc: 'Supply aligned to agreed product requirements.',
  },
  {
    title: 'Quality',
    desc: 'Quality checks coordinated before shipment.',
  },
  {
    title: 'Export preparation',
    desc: 'Packaging and documentation coordinated for international requirements.',
  },
];

const whyCards = [
  {
    n: '01',
    title: 'Origin-focused sourcing',
    desc: 'We work close to the source to understand product availability, seasonality and quality requirements.',
  },
  {
    n: '02',
    title: 'Specification-led supply',
    desc: 'Every requirement begins with understanding what the buyer actually needs — product, grade, size, quantity and destination.',
  },
  {
    n: '03',
    title: 'Quality coordination',
    desc: 'We coordinate product checks and quality requirements around agreed specifications before shipment.',
  },
  {
    n: '04',
    title: 'Transparent communication',
    desc: 'Clear communication from enquiry and quotation through packing and shipment.',
  },
  {
    n: '05',
    title: 'Flexible packaging',
    desc: 'Packaging options can be adapted to product, quantity and buyer requirements.',
  },
  {
    n: '06',
    title: 'Export preparation',
    desc: 'We coordinate the documentation, packing and logistics requirements needed to prepare orders for international shipment.',
  },
];

const traceSteps = ['Source', 'Product / Lot', 'Sort & Grade', 'Quality Check', 'Pack', 'Ship'];

const qualityItems = [
  {
    title: 'Product specification',
    desc: 'Size, colour, grade, maturity and other agreed parameters.',
  },
  {
    title: 'Sorting & grading',
    desc: 'Products prepared according to agreed specifications.',
  },
  {
    title: 'Quality inspection',
    desc: 'Checks carried out according to product and buyer requirements.',
  },
  {
    title: 'Packaging check',
    desc: 'Quantity, packaging and labelling reviewed before dispatch.',
  },
  {
    title: 'Destination requirements',
    desc: 'Product preparation aligned with applicable destination-market requirements.',
  },
];

const processSteps = [
  {
    n: '01',
    title: 'Tell us what you need',
    desc: 'Share your product, quantity, specification and destination.',
  },
  {
    n: '02',
    title: 'Product & source',
    desc: 'We review sourcing availability and suitable product options.',
  },
  {
    n: '03',
    title: 'Specification',
    desc: 'Product parameters, packaging and quality requirements are discussed and agreed.',
  },
  {
    n: '04',
    title: 'Quotation',
    desc: 'We prepare a quotation based on the agreed requirement and shipment terms.',
  },
  {
    n: '05',
    title: 'Sample / approval',
    desc: 'Where applicable, samples or product specifications can be reviewed before proceeding.',
  },
  {
    n: '06',
    title: 'Preparation',
    desc: 'Product is sourced, sorted, graded and packed according to the agreed requirements.',
  },
  {
    n: '07',
    title: 'Documentation',
    desc: 'Required export and shipment documentation is coordinated.',
  },
  {
    n: '08',
    title: 'Shipment',
    desc: 'The order is prepared for dispatch and international transportation.',
  },
];

const packagingCards = [
  {
    title: 'Bulk packaging',
    desc: 'For wholesalers, distributors and industrial buyers.',
    image: '/images/bag_of_onions.jpeg',
  },
  {
    title: 'Retail packaging',
    desc: 'For consumer-facing requirements.',
    image: '/images/box_of_chilly.jpeg',
  },
  {
    title: 'Private label',
    desc: 'Buyer-specific branding and packaging where applicable.',
    image: '/images/Box_of_coconut.jpeg',
  },
  {
    title: 'Custom packaging',
    desc: 'Packaging developed around agreed specifications.',
    image: '/images/Box_of_banana.jpeg',
  },
];

const markets = [
  {
    name: 'Europe',
    desc: 'Buyers in European markets typically require clear product specifications, residue awareness and labelling aligned to destination rules. We discuss those requirements before supply is prepared.',
    image: '/images/europe_market.png',
  },
  {
    name: 'East Asia',
    desc: 'Interest in Indian spices, rice and processed agri products, with specifications and documentation that vary by destination market.',
    image: '/images/east_asia_market.png',
  },
  {
    name: 'Africa',
    desc: 'Demand for pulses, rice and onion along established trade corridors from India — quantities and packing agreed to the buyer’s requirement.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full min-h-[80vh] flex flex-col justify-center bg-shrim-green overflow-hidden">
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundImage: "url('/images/Asset 18@5x-100.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-shrim-green via-shrim-green/75 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight tracking-tight uppercase">
            FROM INDIAN SOIL TO YOUR <span className="text-shrim-gold italic">SHELVES</span>,
            <br />
            FROM OUR <span className="text-shrim-gold italic">ROOTS</span> TO YOUR HOMES.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 font-medium tracking-wide max-w-2xl">
            Connecting international buyers with carefully sourced agricultural products from India, with a
            focus on quality, transparency and buyer-specific requirements.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/product-catalogue" className={goldBtn}>
              Explore products
            </Link>
            <Link href="/contact" className={whiteBtn}>
              Request a quote
            </Link>
          </div>
          <p className="mt-8 text-xs md:text-sm text-shrim-gold font-black tracking-[0.28em] uppercase">
            Source · Assure · Deliver
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase max-w-3xl">
            From source to shipment.
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">
            We bring together agricultural sourcing, product specifications, quality coordination, packaging
            and export preparation to help international buyers source from India with greater confidence.
          </p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sourceCards.map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-shrim-green font-black uppercase tracking-wider text-sm mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-shrim-gold font-black text-xs tracking-[0.25em] uppercase mb-3">Who we are</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase max-w-3xl">
            An India-based agricultural sourcing partner.
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              Shrim Export is an India-based agricultural sourcing company focused on connecting
              international buyers with agricultural products from India.
            </p>
            <p>
              We work across the sourcing and supply process — from identifying suitable products and
              specifications to coordinating quality, packaging and export requirements.
            </p>
            <p>
              Our aim is simple: to make sourcing from India more transparent, structured and dependable for
              our international partners.
            </p>
          </div>
          <Link href="/about" className={`${goldBtn} mt-10`}>
            About Shrim →
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight uppercase text-center">
            Our products
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-center text-sm leading-relaxed">
            We offer a growing range of fresh and processed agricultural products sourced from established
            production regions across India.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {FEATURED_PRODUCTS.map((product) => (
              <div
                key={product.title}
                className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-shrim-green font-black text-lg mb-6 uppercase tracking-wider text-center">
                  {product.title}
                </h3>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md mb-6">
                  <Image src={product.image} alt={product.title} fill className="object-cover" />
                </div>
                <Link
                  href={`/contact?product=${encodeURIComponent(product.title)}`}
                  className={`${greenBtn} w-full text-xs`}
                >
                  Request this product
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/product-catalogue" className={goldBtn}>
              View full catalogue
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-shrim-gold font-black text-xs tracking-[0.25em] uppercase mb-3">Why Shrim</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase max-w-3xl">
            More than a supplier.
            <br />
            Your sourcing partner in India.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card) => (
              <div key={card.n} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <p className="text-shrim-gold font-black text-sm tracking-widest mb-3">{card.n}</p>
                <h3 className="font-black text-gray-900 uppercase tracking-wide text-sm mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-shrim-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase max-w-3xl">
            Know where
            <br />
            your product comes from.
          </h2>
          <p className="mt-6 text-gray-200 max-w-3xl text-sm md:text-base leading-relaxed">
            We believe buyers should have greater visibility into the journey of the products they source.
            Our sourcing approach is designed to maintain clear information around product origin, sourcing,
            specifications and shipment preparation.
          </p>
          <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {traceSteps.map((step, i) => (
              <div key={step} className="flex md:flex-col items-center gap-3 md:flex-1">
                <div className="rounded-full border border-shrim-gold/60 px-4 py-3 text-center w-full">
                  <p className="text-shrim-gold font-black text-xs tracking-widest uppercase">{step}</p>
                </div>
                {i < traceSteps.length - 1 && (
                  <span className="text-shrim-gold md:hidden" aria-hidden>
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-gray-200 font-medium max-w-3xl">
            From origin to shipment, every stage begins with clear specifications and accountability.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-shrim-gold font-black text-xs tracking-[0.25em] uppercase mb-3">
            Quality control
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase max-w-3xl">
            Quality is a process,
            <br />
            not a promise.
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">
            Agricultural products can vary by season, origin and harvest. Our approach is to establish clear
            specifications before supply and coordinate quality checks throughout the preparation process.
          </p>
          <div className="mt-12 space-y-4 max-w-4xl">
            {qualityItems.map((item) => (
              <div key={item.title} className="border-l-4 border-shrim-gold bg-gray-50 px-6 py-5 rounded-r-xl">
                <h3 className="font-black text-gray-900 uppercase tracking-wide text-sm">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-shrim-gold font-black text-xs tracking-[0.25em] uppercase mb-3">How we work</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase max-w-3xl">
            From requirement to shipment.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div key={step.n} className="flex gap-5 bg-white p-6 rounded-2xl border border-gray-100">
                <span className="text-shrim-gold font-black text-xl shrink-0">{step.n}</span>
                <div>
                  <h3 className="font-black text-gray-900 uppercase tracking-wide text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/contact" className={`${goldBtn} mt-12`}>
            Start an enquiry →
          </Link>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-shrim-gold font-black text-xs tracking-[0.25em] uppercase mb-3">Packaging</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase max-w-3xl">
            Your requirement. Your packaging.
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">
            Different markets and buyers require different approaches to packaging. We work with buyers to
            determine suitable packaging based on product, quantity, handling and destination requirements.
          </p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {packagingCards.map((card) => (
              <div key={card.title} className="relative h-72 rounded-2xl overflow-hidden group shadow-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white font-black uppercase tracking-wider text-lg">{card.title}</h3>
                  <p className="text-gray-200 text-sm mt-2">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-4 uppercase text-center">
            Markets we <span className="text-shrim-gold">serve</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-sm leading-relaxed text-center">
            We work with international buyers across destination markets. Requirements, documentation and
            packing are discussed against the country you are shipping to — not assumed in advance.
          </p>
          <div className="space-y-12">
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
                <p className="text-gray-700 text-sm leading-relaxed px-2">{market.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-shrim-green text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
            Looking for an Indian sourcing partner?
          </h2>
          <p className="mt-6 text-gray-200 text-sm md:text-base leading-relaxed">
            Tell us what you&apos;re looking for — product, quantity, specification and destination — and
            let&apos;s explore how we can source it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className={goldBtn}>
              Request a quote
            </Link>
            <WhatsAppLink
              phone={PHONE_MILIND}
              text={WHATSAPP_EXPORT_TEXT}
              className={whiteBtn}
            >
              WhatsApp export sales
            </WhatsAppLink>
          </div>
          <p className="mt-8 text-xs text-shrim-gold font-black tracking-[0.2em] uppercase">
            Product · Quantity · Destination · Specification
          </p>
        </div>
      </section>
    </div>
  );
}
