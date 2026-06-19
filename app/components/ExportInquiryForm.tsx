'use client';

import { FormEvent } from 'react';

const formFieldClass =
  'w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700';

const textareaClass =
  'w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700';

type ExportInquiryFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  status: 'idle' | 'sending' | 'success' | 'error';
};

export default function ExportInquiryForm({ onSubmit, status }: ExportInquiryFormProps) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
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
            placeholder="Global Trading Corp"
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
            placeholder="Netherlands"
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
        <input
          type="text"
          name="packaging"
          required
          placeholder="e.g. PP Mesh Bags (25kg / 50kg), Corrugated Carton..."
          className={formFieldClass}
        />
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
          className={textareaClass}
        />
      </div>

      <div className="flex justify-center pt-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-10 py-3.5 bg-shrim-green hover:bg-shrim-green-light text-white font-black rounded-lg shadow-lg transition-colors text-sm uppercase tracking-widest disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
        </button>
      </div>
    </form>
  );
}
