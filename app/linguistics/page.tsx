import Link from 'next/link';
import Image from 'next/image';
import WhatsAppLink from '../components/WhatsAppLink';
import LinguisticsInquiryForm from '../components/LinguisticsInquiryForm';
import { PHONE_RAMESHWARI } from '../lib/contact';

export const metadata = {
  title: 'Linguistics',
  description: 'Hindi and Marathi language tutoring for NRIs and residents.',
};

export default function Linguistics() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[65vh] flex flex-col justify-center overflow-hidden bg-shrim-green">
        {/* Background Overlay Split */}
        <div className="absolute inset-0 z-0 flex">
          {/* Green Left Side */}
          <div className="w-full md:w-1/2 bg-shrim-green"></div>
          {/* Scrabble Tiles Background Right Side */}
          <div 
            className="hidden md:block w-1/2 opacity-90 relative"
            style={{
              backgroundImage: "url('/images/Asset 19@5x-100.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-shrim-green via-shrim-green/40 to-transparent" />
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-3xl leading-tight uppercase">
            HINDI & MARATHI LANGUAGE TUTORING FOR NRIs & RESIDENTS
          </h1>
          <p className="mt-4 text-sm text-shrim-gold font-black tracking-widest uppercase">
            YOUR ROOTS, YOUR LANGUAGE. DON'T LET IT FADE.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#marathi" className="px-6 py-3 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow transition-colors text-xs uppercase tracking-wider">
              MARATHI LESSONS
            </Link>
            <Link href="#hindi" className="px-6 py-3 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow transition-colors text-xs uppercase tracking-wider">
              HINDI LESSONS
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-6 max-w-md">
            <Image
              src="/images/Asset 15@10x-8.png"
              alt="Shrim Linguistics Logo"
              width={120}
              height={60}
              className="h-10 w-auto brightness-110 shrink-0"
            />
            <div className="text-xs text-gray-300 font-normal">
              <p>Rameshwari Milind Jori -</p>
              <p>Proprietor/ Founder</p>
              <WhatsAppLink phone={PHONE_RAMESHWARI} className="hover:text-white transition-colors">
                {PHONE_RAMESHWARI}
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {/* Language Details */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-2xl">
            
            {/* Hindi Card */}
            <div id="hindi" className="relative bg-gray-50/50 p-8 rounded-xl border border-gray-100 overflow-hidden min-h-[320px] flex flex-col justify-between">
              <span className="absolute -top-6 -right-6 text-[150px] font-black text-gray-100/70 select-none z-0 font-sans">
                हिं
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-black text-shrim-green mb-6 uppercase tracking-wider">Hindi Language Tutoring</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed font-medium">
                  From basic conversational Hindi to reading, writing, and comprehension — our sessions are designed for NRI children and adults who want a real connection to the language, not just a school requirement checkbox.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  We teach the language as it's lived — with warmth, context, and cultural depth.
                </p>
              </div>
            </div>

            {/* Marathi Card */}
            <div id="marathi" className="relative bg-gray-50/50 p-8 rounded-xl border border-gray-100 overflow-hidden min-h-[320px] flex flex-col justify-between">
              <span className="absolute -top-6 -right-6 text-[150px] font-black text-gray-100/70 select-none z-0 font-sans">
                म
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-black text-shrim-green mb-6 uppercase tracking-wider">Marathi Language Tutoring</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed font-medium">
                  Marathi is a rich, regional language that often gets overshadowed even within Indian communities abroad.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  We offer dedicated Marathi sessions for families from Maharashtra who want their children to carry this language forward — and be able to speak to their grandparents in their own tongue.
                </p>
              </div>
            </div>

          </div>

          {/* CTA Area */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <Link href="#support" className="px-8 py-3.5 bg-shrim-gold hover:bg-shrim-gold-light text-white font-black rounded-lg shadow-lg transition-colors text-sm uppercase tracking-wider inline-block mb-8">
              BOOK A TRIAL SESSION
            </Link>
            <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-wide">
              Ready to Keep the Language Alive in Your Home?
            </h3>
            <p className="text-gray-600 text-sm font-medium leading-relaxed">
              Whether it's for your children, yourself, or an elderly family member who wants to connect — we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-shrim-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black tracking-widest mb-16 uppercase">HOW IT WORKS</h2>
          
          <div className="space-y-12 text-left">
            <div className="flex gap-6 items-start bg-black/10 p-6 rounded-xl border border-white/5">
              <div className="text-shrim-gold font-black text-2xl">1.</div>
              <div>
                <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Reach Out</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">Tell us which language you need, the learner's age and current level, and your timezone. We'll match you with the right session structure.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start bg-black/10 p-6 rounded-xl border border-white/5">
              <div className="text-shrim-gold font-black text-2xl">2.</div>
              <div>
                <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Trial Session</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">We start with a no-pressure introductory session to understand the learner's comfort level and set realistic goals for their journey.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start bg-black/10 p-6 rounded-xl border border-white/5">
              <div className="text-shrim-gold font-black text-2xl">3.</div>
              <div>
                <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Ongoing Sessions</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">Online sessions scheduled around your family's timezone and routine. Consistent, personal, and built to actually work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 shadow-sm rounded-2xl border border-gray-100">
          <h2 className="text-3xl font-black text-shrim-green text-center mb-4 uppercase tracking-wider">
            Book a trial session
          </h2>
          <p className="text-gray-500 text-center text-sm mb-10 max-w-lg mx-auto font-medium">
            Please fill out the form below for language tutoring inquiries. We will get back to you with
            session details and schedules.
          </p>
          <LinguisticsInquiryForm />
        </div>
      </section>
    </div>
  );
}
