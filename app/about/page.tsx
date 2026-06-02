'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [formType, setFormType] = useState<'linguistics' | 'exports'>('linguistics');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Dynamic Support Form Section */}
      <section id="support" className="py-20 bg-gray-50 border-b border-gray-100 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 shadow-sm rounded-2xl border border-gray-100">
          <h2 className="text-3xl font-black text-shrim-green text-center mb-6 uppercase tracking-wider">
            HOW CAN WE SUPPORT YOU?
          </h2>
          
          {/* Tab Selector Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setFormType('linguistics')}
              className={`px-6 py-3 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 shadow ${
                formType === 'linguistics'
                  ? 'bg-shrim-green text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Linguistics
            </button>
            <button
              onClick={() => setFormType('exports')}
              className={`px-6 py-3 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 shadow ${
                formType === 'exports'
                  ? 'bg-shrim-green text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Exports
            </button>
          </div>

          <p className="text-gray-500 text-center text-sm mb-10 max-w-lg mx-auto font-medium">
            {formType === 'linguistics'
              ? "Please fill out the form below for language tutoring inquiries. We will get back to you with session details and schedules."
              : "Please fill out the form below to request a quote. Our export division will get back to you with pricing, packaging, and shipping options."}
          </p>

          {/* Form Switcher */}
          {formType === 'linguistics' ? (
            /* Linguistics Inquiry Form */
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Service *
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700 bg-white">
                    <option>Linguistics Tutoring</option>
                    <option>Marathi Tutoring</option>
                    <option>Hindi Tutoring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="United States"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Language Requirement *
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700 bg-white">
                    <option>Conversational & Cultural</option>
                    <option>Reading, Writing & Speaking</option>
                    <option>Academic Curriculum</option>
                    <option>Basic Introductory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Quantity (No. of Learners) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    defaultValue="1"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Preferred Batch *
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700 bg-white">
                    <option>Weekdays (Morning)</option>
                    <option>Weekdays (Evening)</option>
                    <option>Weekends (Morning)</option>
                    <option>Weekends (Evening)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                  Anything Else We Should Know *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Timezone, learner's age, prior knowledge, or specific learning goals..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700"
                />
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-10 py-3.5 bg-shrim-green hover:bg-shrim-green-light text-white font-black rounded-lg shadow-lg transition-colors text-sm uppercase tracking-widest"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          ) : (
            /* Exports Quote Form */
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Product *
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-blue text-sm font-semibold text-gray-700 bg-white">
                    <option>Fresh Onion (Red/White)</option>
                    <option>G4 Green Chilli</option>
                    <option>Cavendish Banana</option>
                    <option>Fresh Pomegranate</option>
                    <option>Frozen Vegetables</option>
                    <option>Dehydrated Vegetables</option>
                    <option>Fresh Turmeric</option>
                    <option>Semi Husk Coconut</option>
                    <option>Millet Cookies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-blue text-sm font-semibold text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Global Trading Corp"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-blue text-sm font-semibold text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Netherlands"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-blue text-sm font-semibold text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Mention Product Requirement *
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-blue text-sm font-semibold text-gray-700 bg-white">
                    <option>Fresh / Raw Product</option>
                    <option>IQF Frozen Grade</option>
                    <option>Dehydrated (Flakes/Granules/Powder)</option>
                    <option>Processed / Finished Goods</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Quantity Needed *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 15 Metric Tons / 1x40ft Container"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-blue text-sm font-semibold text-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                  Preferred Packaging *
                </label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-blue text-sm font-semibold text-gray-700 bg-white">
                  <option>PP Mesh Bags (25kg / 50kg)</option>
                  <option>Corrugated Carton Boxes</option>
                  <option>Bulk Bags / Palletized</option>
                  <option>Retail Customized Packaging</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                  Anything Else We Should Know *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Specific certifications required, port of destination, target delivery schedule, or payment terms..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-blue text-sm font-semibold text-gray-700"
                />
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-10 py-3.5 bg-shrim-blue hover:bg-shrim-blue-light text-white font-black rounded-lg shadow-lg transition-colors text-sm uppercase tracking-widest"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-16 uppercase tracking-wider">
            MEET THE FOUNDERS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Founder 1: Milind Jori */}
            <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-shrim-gold/30 shadow-md">
                <Image
                  src="/images/milind_jori.jpg"
                  alt="Milind Madhukar Jori"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-wide">
                MILIND MADHUKAR JORI
              </h3>
              <p className="text-xs font-bold text-shrim-green mb-4 tracking-widest uppercase">
                Co-Founder, Shrim Export
              </p>
              <p className="text-gray-600 text-sm leading-relaxed text-center mb-6 font-medium">
                Milind Madhukar Jori is the Co-Founder of Shrim Export. With extensive experience in agricultural trade, business development, and supply chain management, he leads the export division's operations, ensuring that the highest standards of quality and traceability are maintained across all shipments.
              </p>
              <div className="text-xs text-gray-400 font-bold space-y-1 text-center border-t border-gray-200/50 pt-4 w-full">
                <p>Phone: +91 9689971271</p>
                <p>Email: rameshwarijori@shrimexport.com</p>
              </div>
            </div>

            {/* Founder 2: Rameshwari Jori */}
            <div className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-shrim-gold/30 shadow-md">
                <Image
                  src="/images/rameshwari_jori.jpg"
                  alt="Rameshwari Milind Jori"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-wide">
                RAMESHWARI MILIND JORI
              </h3>
              <p className="text-xs font-bold text-shrim-green mb-4 tracking-widest uppercase">
                Proprietor & Founder, Shrim Linguistics | Co-Founder, Shrim Export
              </p>
              <p className="text-gray-600 text-sm leading-relaxed text-center mb-6 font-medium">
                Rameshwari Milind Jori is the Proprietor and Founder of Shrim Linguistics and Co-Founder of Shrim Export. Combining a deep passion for language education with corporate excellence, she designs the tutoring programs and oversees customer relationship management, connecting learners globally to their linguistic heritage.
              </p>
              <div className="text-xs text-gray-400 font-bold space-y-1 text-center border-t border-gray-200/50 pt-4 w-full">
                <p>Phone: +91 9371758355</p>
                <p>Email: rameshwarijori@shrimexport.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
