import Image from 'next/image';
import Link from 'next/link';
import WhatsAppLink from '../components/WhatsAppLink';
import ExportsTabRedirect from './ExportsTabRedirect';
import { CONTACT_EMAIL, PHONE_MILIND, PHONE_RAMESHWARI } from '../lib/contact';

export const metadata = {
  title: 'About Us',
  description:
    'Shrim Export connects Indian agricultural producers with international buyers through transparent sourcing, clear specifications and dependable communication.',
};

const beliefs = [
  'Sourcing should be transparent.',
  'Specifications should be clear.',
  'Communication should be direct.',
  'Relationships should be long-term.',
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ExportsTabRedirect />
      <section className="relative bg-shrim-green text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-shrim-green via-shrim-green/90 to-shrim-green-light/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight max-w-3xl leading-tight">
            Rooted in India.
            <br />
            Looking outward.
          </h1>
          <p className="mt-6 text-gray-200 max-w-2xl text-base md:text-lg leading-relaxed">
            Shrim Export was built with a simple objective: to connect the strength of India&apos;s
            agricultural supply chain with the needs of international buyers.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-shrim-gold font-black text-xs tracking-[0.25em] uppercase mb-3">Our story</p>
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">
            Rooted in India. Built to connect.
          </h2>
          <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              Shrim Export began with a simple belief: India&apos;s agricultural strength deserves to be
              connected with the world through better sourcing, clearer communication and stronger
              relationships.
            </p>
            <p>
              Founded by Milind Madhukar Jori and Rameshwari Milind Jori, Shrim brings together two
              complementary strengths—agricultural trade and business operations, alongside communication,
              relationship management and an understanding of working across cultures.
            </p>
            <p>
              With a focus on sourcing agricultural products from India, the vision is to build a dependable
              bridge between Indian producers and international buyers. From understanding product
              requirements and identifying suitable sources to coordinating quality, packaging and export
              preparation, Shrim is being built around one principle: make sourcing from India simpler, more
              transparent and more reliable.
            </p>
            <p>
              For us, exporting is not simply about moving products from one country to another. It is about
              understanding what a buyer needs, finding the right source, communicating clearly and building
              relationships that can grow over time.
            </p>
            <p>
              Today, Shrim Export is building that foundation—one product, one sourcing relationship and one
              opportunity at a time.
            </p>
          </div>
          <div className="mt-10 space-y-2 font-black text-gray-900 uppercase tracking-wide text-sm">
            <p>India is our source.</p>
            <p>Trust is our foundation.</p>
            <p>Global opportunity is our direction.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-10">
            What we believe
          </h2>
          <ul className="space-y-6">
            {beliefs.map((line) => (
              <li key={line} className="text-xl md:text-2xl text-shrim-green font-medium lowercase tracking-wide">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-shrim-gold font-black text-xs tracking-[0.25em] uppercase mb-3">Our vision</p>
          <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
            To build a trusted bridge between Indian agricultural producers and international buyers through
            transparent sourcing, reliable supply and responsible business relationships.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-16 uppercase tracking-wider">
            Meet the founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-shrim-gold/30 shadow-md">
                <Image
                  src="/images/milind_jori.jpeg"
                  alt="Milind Madhukar Jori"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-wide">
                Milind Madhukar Jori
              </h3>
              <p className="text-xs font-bold text-shrim-green mb-4 tracking-widest uppercase">
                Co-Founder, Shrim Export
              </p>
              <p className="text-gray-600 text-sm leading-relaxed text-center mb-6 font-medium">
                Milind Madhukar Jori is the Co-Founder of Shrim Export. With extensive experience in
                agricultural trade, business development, and supply chain management, he leads the export
                division&apos;s operations, ensuring that the highest standards of quality and traceability
                are maintained across all shipments.
              </p>
              <div className="text-xs text-gray-400 font-normal space-y-1 text-center border-t border-gray-200/50 pt-4 w-full">
                <p>
                  Phone:{' '}
                  <WhatsAppLink phone={PHONE_MILIND} className="hover:text-shrim-green transition-colors">
                    {PHONE_MILIND}
                  </WhatsAppLink>
                </p>
                <p>
                  Email:{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-shrim-green transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-shrim-gold/30 shadow-md">
                <Image
                  src="/images/rameshwari_jori.jpeg"
                  alt="Rameshwari Milind Jori"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-wide">
                Rameshwari Milind Jori
              </h3>
              <p className="text-xs font-bold text-shrim-green mb-4 tracking-widest uppercase">
                Proprietor & Founder, Shrim Linguistics | Co-Founder, Shrim Export
              </p>
              <p className="text-gray-600 text-sm leading-relaxed text-center mb-6 font-medium">
                Rameshwari Milind Jori is the Proprietor and Founder of Shrim Linguistics and Co-Founder of
                Shrim Export. Combining a deep passion for language education with corporate excellence, she
                designs the tutoring programs and oversees customer relationship management, connecting
                learners globally to their linguistic heritage.
              </p>
              <div className="text-xs text-gray-400 font-normal space-y-1 text-center border-t border-gray-200/50 pt-4 w-full">
                <p>
                  Phone:{' '}
                  <WhatsAppLink phone={PHONE_RAMESHWARI} className="hover:text-shrim-green transition-colors">
                    {PHONE_RAMESHWARI}
                  </WhatsAppLink>
                </p>
                <p>
                  Email:{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-shrim-green transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow-lg transition-colors text-sm uppercase tracking-wider"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
