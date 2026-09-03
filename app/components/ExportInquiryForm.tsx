'use client';

import { FormEvent, useEffect, useState } from 'react';
import InquiryFormFeedback from './InquiryFormFeedback';
import { CONTACT_EMAIL } from '../lib/contact';
import { INCOTERM_OPTIONS, PACKAGING_OPTIONS, PRODUCT_OPTIONS } from '../lib/products';
import { formDataToRecord, submitInquiry } from '../lib/submit-inquiry';

const fieldClass =
  'w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700';

const textareaClass =
  'w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700';

function Label({ children }: { children: string }) {
  return (
    <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
      {children}
    </label>
  );
}

export default function ExportInquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successInbox, setSuccessInbox] = useState('');
  const [product, setProduct] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('product')?.trim();
    if (!requested) return;
    const match = PRODUCT_OPTIONS.find(
      (option) => option.toLowerCase() === requested.toLowerCase()
    );
    setProduct(match ?? 'Other / Not listed');
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') ?? '').trim();
    setStatus('sending');
    setErrorMessage('');
    try {
      const result = await submitInquiry('export', email, formDataToRecord(data));
      setSuccessInbox(result.to || CONTACT_EMAIL);
      setStatus('success');
      form.reset();
      setProduct('');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Could not send inquiry.');
      setStatus('error');
    }
  };

  return (
    <div id="enquiry">
      <InquiryFormFeedback
        status={status}
        errorMessage={errorMessage}
        successInbox={successInbox}
      />

      <form className="space-y-10" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="text-sm font-black text-shrim-green uppercase tracking-widest mb-6">
            Your details
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Full Name *</Label>
              <input type="text" name="name" required placeholder="Enter your name" className={fieldClass} />
            </div>
            <div>
              <Label>Company Name *</Label>
              <input type="text" name="company" required placeholder="Your company" className={fieldClass} />
            </div>
            <div>
              <Label>Business Email *</Label>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={fieldClass}
              />
            </div>
            <div>
              <Label>Country *</Label>
              <input type="text" name="country" required placeholder="Netherlands" className={fieldClass} />
            </div>
            <div className="md:col-span-2">
              <Label>Phone / WhatsApp *</Label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+31 6 0000 0000"
                className={fieldClass}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-black text-shrim-green uppercase tracking-widest mb-6">
            Your requirement
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Product *</Label>
              <select
                name="product"
                required
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className={`${fieldClass} bg-white`}
              >
                <option value="">Select a product</option>
                {PRODUCT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label>Quantity *</Label>
              <input
                type="text"
                name="quantity"
                required
                placeholder="10 MT / 1 container"
                className={fieldClass}
              />
            </div>
            <div>
              <Label>Specification</Label>
              <input
                type="text"
                name="specification"
                placeholder="Grade, size, colour, maturity…"
                className={fieldClass}
              />
            </div>
            <div>
              <Label>Packaging Requirement</Label>
              <select name="packaging" className={`${fieldClass} bg-white`} defaultValue="">
                <option value="">Select packaging</option>
                {PACKAGING_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label>Destination Country *</Label>
              <input
                type="text"
                name="destinationCountry"
                required
                placeholder="United Arab Emirates"
                className={fieldClass}
              />
            </div>
            <div>
              <Label>Destination Port</Label>
              <input type="text" name="destinationPort" placeholder="Jebel Ali" className={fieldClass} />
            </div>
            <div>
              <Label>Preferred Incoterm</Label>
              <select name="incoterm" className={`${fieldClass} bg-white`} defaultValue="">
                <option value="">Select Incoterm</option>
                {INCOTERM_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label>Required Delivery Date</Label>
              <input type="date" name="deliveryDate" className={fieldClass} />
            </div>
            <div className="md:col-span-2">
              <Label>Additional Information</Label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Anything else we should know about this requirement…"
                className={textareaClass}
              />
            </div>
          </div>
        </fieldset>

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-10 py-3.5 bg-shrim-green hover:bg-shrim-green-light text-white font-black rounded-lg shadow-lg transition-colors text-sm uppercase tracking-widest disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Request Quotation'}
          </button>
        </div>
      </form>
    </div>
  );
}
