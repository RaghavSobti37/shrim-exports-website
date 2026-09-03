'use client';

import { FormEvent, useState } from 'react';
import InquiryFormFeedback from './InquiryFormFeedback';
import { CONTACT_EMAIL } from '../lib/contact';
import { formDataToRecord, submitInquiry } from '../lib/submit-inquiry';

const fieldClass =
  'w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-shrim-green text-sm font-semibold text-gray-700';

export default function LinguisticsInquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successInbox, setSuccessInbox] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') ?? '').trim();
    setStatus('sending');
    setErrorMessage('');
    try {
      const result = await submitInquiry('linguistics', email, formDataToRecord(data));
      setSuccessInbox(result.to || CONTACT_EMAIL);
      setStatus('success');
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Could not send inquiry.');
      setStatus('error');
    }
  };

  return (
    <div id="support">
      <InquiryFormFeedback
        status={status}
        errorMessage={errorMessage}
        successInbox={successInbox}
      />

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
              Service *
            </label>
            <select name="service" required className={`${fieldClass} bg-white`}>
              <option>Linguistics Tutoring</option>
              <option>Marathi Tutoring</option>
              <option>Hindi Tutoring</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
              Your Name *
            </label>
            <input type="text" name="name" required placeholder="Enter your name" className={fieldClass} />
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
              className={fieldClass}
            />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
              Country *
            </label>
            <input type="text" name="country" required placeholder="India" className={fieldClass} />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
              Language Requirement *
            </label>
            <select name="languageRequirement" required className={`${fieldClass} bg-white`}>
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
            <input type="number" name="learners" required min="1" defaultValue="1" className={fieldClass} />
          </div>
          <div>
            <label className="block text-xs font-black text-gray-700 uppercase tracking-widest mb-2">
              Preferred Batch *
            </label>
            <select name="preferredBatch" required className={`${fieldClass} bg-white`}>
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
    </div>
  );
}
