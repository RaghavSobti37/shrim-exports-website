'use client';

import { useState, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import WhatsAppLink from '../components/WhatsAppLink';
import ExportInquiryForm from '../components/ExportInquiryForm';
import { CONTACT_EMAIL, PHONE_MILIND, PHONE_RAMESHWARI } from '../lib/contact';
import InquiryFormFeedback from '../components/InquiryFormFeedback';
import { submitInquiry } from '../lib/submit-inquiry';

const formFieldClass =
  'w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700';

export default function About() {
  const [formType, setFormType] = useState<'linguistics' | 'exports'>('linguistics');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successInbox, setSuccessInbox] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('tab') === 'exports') {
      setFormType('exports');
    }
  }, []);

  const formDataFrom = (data: FormData) =>
    Object.fromEntries(
      [...data.entries()].map(([key, value]) => [key, String(value)])
    ) as Record<string, string>;

  const handleLinguisticsSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') ?? '').trim();
    setStatus('sending');
    setErrorMessage('');
    try {
      const result = await submitInquiry('linguistics', email, formDataFrom(data));
      setSuccessInbox(result.to || CONTACT_EMAIL);
      setStatus('success');
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Could not send inquiry.');
      setStatus('error');
    }
  };

  const handleExportsSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') ?? '').trim();
    setStatus('sending');
    setErrorMessage('');
    try {
      const result = await submitInquiry('export', email, formDataFrom(data));
      setSuccessInbox(result.to || CONTACT_EMAIL);
      setStatus('success');
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Could not send inquiry.');
      setStatus('error');
    }
  };

  const switchForm = (type: 'linguistics' | 'exports') => {
    setFormType(type);
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Dynamic Support Form Section */}
      <section id="support" className="pt-6 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 shadow-sm rounded-2xl border border-gray-100">
          <h2 className="text-3xl font-black text-shrim-green text-center mb-6 uppercase tracking-wider">
            HOW CAN WE SUPPORT YOU?
          </h2>
          
          {/* Tab Selector Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={() => switchForm('linguistics')}
              className={`px-6 py-3 rounded-lg font-black text-sm uppercase tracking-wider transition-all duration-300 shadow ${
                formType === 'linguistics'
                  ? 'bg-shrim-green text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Linguistics
            </button>
            <button
              type="button"
              onClick={() => switchForm('exports')}
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

          <InquiryFormFeedback
            status={status}
            errorMessage={errorMessage}
            successInbox={successInbox}
          />

          {/* Form Switcher */}
          {formType === 'linguistics' ? (
            /* Linguistics Inquiry Form */
            <form className="space-y-6" onSubmit={handleLinguisticsSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Service *
                  </label>
                  <select name="service" required className={`${formFieldClass} bg-white`}>
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
                    name="name"
                    required
                    placeholder="Enter your name"
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
                    Language Requirement *
                  </label>
                  <select name="languageRequirement" required className={`${formFieldClass} bg-white`}>
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
                    name="learners"
                    required
                    min="1"
                    defaultValue="1"
                    className={formFieldClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
                    Preferred Batch *
                  </label>
                  <select name="preferredBatch" required className={`${formFieldClass} bg-white`}>
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
                  name="notes"
                  rows={4}
                  required
                  placeholder="Timezone, learner's age, prior knowledge, or specific learning goals..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700"
                />
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-10 py-3.5 bg-shrim-green hover:bg-shrim-green-light text-white font-black rounded-lg shadow-lg transition-colors text-sm uppercase tracking-widest disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          ) : (
            <ExportInquiryForm onSubmit={handleExportsSubmit} status={status} />
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
        </div>
      </section>
    </div>
  );
}
