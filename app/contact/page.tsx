import ExportInquiryForm from '../components/ExportInquiryForm';

export const metadata = {
  title: 'Request a Quote',
  description:
    'Share your agricultural sourcing requirement with Shrim Export — product, quantity, specification and destination.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="bg-shrim-green text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            Tell us what you&apos;re sourcing.
          </h1>
          <p className="mt-6 text-gray-200 text-sm md:text-base leading-relaxed">
            Share your requirement with us and our team will review the product, quantity, specification and
            destination before getting back to you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 shadow-sm rounded-2xl border border-gray-100">
          <ExportInquiryForm />
        </div>
      </section>
    </div>
  );
}
