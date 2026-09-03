import { notFound } from 'next/navigation';
import { LEGAL_PAGES, LEGAL_SLUGS, type LegalSlug } from '../../lib/legal';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return LEGAL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = LEGAL_PAGES[slug as LegalSlug];
  return { title: page?.title ?? 'Legal' };
}

function Paragraphs({ text }: { text: string[] }) {
  return (
    <>
      {text.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </>
  );
}

export default async function LegalPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = LEGAL_PAGES[slug as LegalSlug];
  if (!page) notFound();

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-shrim-green text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">{page.title}</h1>
          <p className="mt-3 text-sm text-gray-200">Last Updated: {page.updated}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {page.intro && page.intro.length > 0 && (
            <div className="space-y-4">
              <Paragraphs text={page.intro} />
            </div>
          )}
          {page.sections.map((section, index) => (
            <div key={`${section.heading}-${index}`} className="space-y-4">
              {section.heading ? (
                <h2 className="text-lg font-black text-gray-900 uppercase tracking-wide">
                  {section.heading}
                </h2>
              ) : null}
              <Paragraphs text={section.paragraphs} />
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm leading-relaxed">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
