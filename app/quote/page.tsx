'use client';

import { FormEvent, useState } from 'react';
import InquiryFormFeedback from '../components/InquiryFormFeedback';
import { CONTACT_EMAIL } from '../lib/contact';
import { submitInquiry } from '../lib/submit-inquiry';

const formFieldClass =
  'w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700';

export default function Quote() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successInbox, setSuccessInbox] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') ?? '').trim();
    const fields = Object.fromEntries(
      [...data.entries()].map(([key, value]) => [key, String(value)])
    ) as Record<string, string>;

    setStatus('sending');
    setErrorMessage('');
    try {
      const result = await submitInquiry('export', email, fields);
      setSuccessInbox(result.to || CONTACT_EMAIL);
      setStatus('success');
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Could not send inquiry.');
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="py-20 bg-gray-50 border-b border-gray-100 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 shadow-sm rounded-2xl border border-gray-100">
          <h2 className="text-3xl font-black text-shrim-green text-center mb-4 uppercase tracking-wider">
            HOW CAN WE SUPPORT YOU?
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10 max-w-lg mx-auto font-medium">
            Please fill out the form below to request a quote. Our export division will get back to you with pricing, packaging, and shipping options.
          </p>

          <InquiryFormFeedback
            status={status}
            errorMessage={errorMessage}
            successInbox={successInbox}
          />

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                  Product *
                </label>
                <select name="product" required className={`${formFieldClass} bg-white`}>
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
                  name="name"
                  required
                  placeholder="Raghav Raj Sobti"
                  className={formFieldClass}
                />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={formFieldClass}
                />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Your company"
                  className={formFieldClass}
                />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  required
                  placeholder="India"
                  className={formFieldClass}
                />
              </div>

              <div>
                <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                  Mention Product Requirement *
                </label>
                <select name="productRequirement" required className={`${formFieldClass} bg-white`}>
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
                  name="quantity"
                  required
                  placeholder="e.g. 15 Metric Tons / 1x40ft Container"
                  className={formFieldClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                Preferred Packaging *
              </label>
              <select name="packaging" required className={`${formFieldClass} bg-white`}>
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
                name="notes"
                rows={4}
                required
                placeholder="Specific certifications required, port of destination, target delivery schedule, or payment terms..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700"
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-10 py-3.5 bg-shrim-blue hover:bg-shrim-blue-light text-white font-black rounded-lg shadow-lg transition-colors text-sm uppercase tracking-widest disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
