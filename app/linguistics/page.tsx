import Link from 'next/link';

export default function Linguistics() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 flex">
          {/* Solid Green Left Side */}
          <div className="w-1/3 bg-shrim-green"></div>
          {/* Scrabble Tiles Background Right Side */}
          <div 
            className="w-2/3 opacity-90"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=2000&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Gradient Overlay for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-shrim-green via-shrim-green/90 to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-3xl leading-tight">
            HINDI & MARATHI LANGUAGE TUTORING FOR NRIs & RESIDENTS
          </h1>
          <p className="mt-4 text-sm text-shrim-gold font-bold tracking-widest uppercase">
            YOUR ROOTS, YOUR LANGUAGE. DON'T LET IT FADE.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#marathi" className="px-6 py-2.5 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow transition-colors text-sm">
              MARATHI LESSONS
            </Link>
            <Link href="#hindi" className="px-6 py-2.5 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow transition-colors text-sm">
              HINDI LESSONS
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="w-8 h-12 flex border-l-2 border-shrim-gold pl-1">
              <div className="w-2 h-full bg-white"></div>
              <div className="w-2 h-3/4 bg-gray-300 mt-auto ml-1"></div>
            </div>
            <div>
              <p className="text-white font-bold tracking-wide">SHRIM <span className="text-gray-300 text-xs tracking-widest font-normal uppercase block">Linguistics</span></p>
            </div>
            <div className="ml-2 text-xs text-gray-300">
              <p>Rameshwari Milind Jori -</p>
              <p>Proprietor/ Founder</p>
              <p>+91 9371758355</p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-12 shadow-sm border border-gray-100 rounded">
            
            {/* Hindi Card */}
            <div className="relative">
              <span className="absolute -top-12 -left-4 text-[120px] font-black text-gray-100 select-none z-0">
                हिं
              </span>
              <div className="relative z-10 pt-8">
                <h3 className="text-lg font-black text-gray-900 mb-6">Hindi Language Tutoring</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  From basic conversational Hindi to reading, writing, and comprehension — our sessions are designed for NRI children and adults who want a real connection to the language, not just a school requirement checkbox.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We teach the language as it's lived — with warmth, context, and cultural depth.
                </p>
              </div>
            </div>

            {/* Marathi Card */}
            <div className="relative">
              <span className="absolute -top-12 -left-4 text-[120px] font-black text-gray-100 select-none z-0">
                म
              </span>
              <div className="relative z-10 pt-8">
                <h3 className="text-lg font-black text-gray-900 mb-6">Marathi Language Tutoring</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Marathi is a rich, regional language that often gets overshadowed even within Indian communities abroad.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We offer dedicated Marathi sessions for families from Maharashtra who want their children to carry this language forward — and be able to speak to their grandparents in their own tongue.
                </p>
              </div>
            </div>

          </div>

          {/* CTA Area */}
          <div className="mt-20">
            <Link href="#trial" className="px-6 py-3 bg-shrim-gold hover:bg-shrim-gold-light text-white font-bold rounded shadow transition-colors text-sm inline-block mb-8">
              BOOK A TRIAL SESSION
            </Link>
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Ready to Keep the Language Alive in Your Home?
            </h3>
            <p className="text-gray-600 text-sm">
              Whether it's for your children, yourself, or an elderly family member who wants to connect — we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-shrim-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black tracking-tight mb-16 uppercase">HOW IT WORKS</h2>
          
          <div className="space-y-12 text-left">
            <div className="flex gap-4">
              <div className="text-shrim-gold font-bold">1.</div>
              <div>
                <h4 className="font-bold mb-2">Reach Out</h4>
                <p className="text-sm text-gray-300 leading-relaxed">Tell us which language you need, the learner's age and current level, and your timezone. We'll match you with the right session structure.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-shrim-gold font-bold">2.</div>
              <div>
                <h4 className="font-bold mb-2">Trial Session</h4>
                <p className="text-sm text-gray-300 leading-relaxed">We start with a no-pressure introductory session to understand the learner's comfort level and set realistic goals for their journey.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-shrim-gold font-bold">3.</div>
              <div>
                <h4 className="font-bold mb-2">Ongoing Sessions</h4>
                <p className="text-sm text-gray-300 leading-relaxed">Online sessions scheduled around your family's timezone and routine. Consistent, personal, and built to actually work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
