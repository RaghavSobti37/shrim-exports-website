import Image from 'next/image';

export default function Quote() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Export Quote Inquiry Form Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 shadow-sm rounded-2xl border border-gray-100">
          <h2 className="text-3xl font-black text-shrim-green text-center mb-4 uppercase tracking-wider">
            HOW CAN WE SUPPORT YOU?
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10 max-w-lg mx-auto font-medium">
            Please fill out the form below to request a quote. Our export division will get back to you with pricing, packaging, and shipping options.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                  Product *
                </label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700 bg-white">
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700"
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
                  placeholder="Netherlands"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                  Mention Product Requirement *
                </label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700 bg-white">
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                Preferred Packaging *
              </label>
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700 bg-white">
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700"
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
        </div>
      </section>
    </div>
  );
}
