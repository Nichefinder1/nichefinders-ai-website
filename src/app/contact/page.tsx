import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Contact Us | Book Your AI Automation Discovery Call',
  description:
    'Book a discovery call with NicheFinders AI. Get a custom AI automation strategy for your Florida business. Expert consultation for Tampa, Jacksonville, Miami, Orlando businesses.',
};

const steps = [
  {
    step: 1,
    title: 'Tell Us About Your Business',
    description: "We'll ask about your current processes, pain points, and goals. No judgments, just understanding.",
  },
  {
    step: 2,
    title: "We'll Identify Opportunities",
    description: "Based on your situation, we'll show you exactly where AI automation can have the biggest impact.",
  },
  {
    step: 3,
    title: 'Get a Custom Roadmap',
    description: "You'll leave with a clear picture of what's possible, realistic timelines, and ballpark ROI estimates.",
  },
  {
    step: 4,
    title: "Decide if We're a Fit",
    description: "No pressure. If we're not the right solution for you, we'll tell you. If we are, we'll discuss next steps.",
  },
];

const faqs = [
  { question: 'How long does implementation take?', answer: 'Most clients see their AI systems live in 6-9 weeks. Exact timeline depends on complexity and your existing tech stack.' },
  { question: "What if I'm not tech-savvy?", answer: "Perfect. We handle all the technical work and train your team to use the systems. You don't need any technical knowledge." },
  { question: 'Do you work with businesses outside Florida?', answer: 'While Florida is our primary market, we serve clients nationwide. Our proven systems work for businesses in any location.' },
  { question: "What's your pricing model?", answer: "We'll discuss pricing on the discovery call based on your specific needs. Most clients see 4-10x ROI in the first year." },
  { question: 'Can I see examples of your work?', answer: 'Check our case studies page to see real results from businesses just like yours.' },
  { question: 'Do you offer ongoing support?', answer: 'Yes. We provide training, optimization, and support to ensure you get maximum value from your AI systems.' },
];

export default function ContactPage() {
  return (
    <main style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 45%, #001A3A 100%)' }}>

      {/* Hero */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.22) 0%, transparent 55%)' }} />

        <Container size="lg" className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">
              Let's Talk
            </p>
            <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
              Book Your Discovery Call
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              No sales pitch. Just an honest conversation about your business challenges and whether AI automation can help.
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              {['45-Minute Call', 'Custom Strategy', 'Expert Consultation'].map((label, i, arr) => (
                <span key={i} className="flex items-center gap-3">
                  <span className="text-sm font-semibold px-4 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}>
                    {label}
                  </span>
                  {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-white/20" />}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Calendar + Steps */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left — What to expect */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">What to Expect</p>
              <h2 className="font-header font-bold text-3xl text-white leading-tight mb-10">
                What Happens on the Call
              </h2>

              <div className="space-y-6 mb-10">
                {steps.map((item) => (
                  <div key={item.step} className="flex items-start gap-5">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-header font-bold text-lg text-orange-cta"
                      style={{ background: 'rgba(204,85,0,0.1)', border: '1.5px solid rgba(204,85,0,0.3)' }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-header font-bold text-lg text-white mb-1">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What we won't do */}
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">What We Won't Do</p>
                <ul className="space-y-2.5">
                  {['High-pressure sales tactics', 'One-size-fits-all pitches', 'Waste your time with fluff', 'Promise unrealistic results'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                      <svg className="w-4 h-4 text-red-400/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — Booking CTA */}
            <div>
              <div
                className="card-elevated-dark rounded-2xl p-8 mb-6"
                style={{ borderTop: '2px solid #CC5500', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(204,85,0,0.1)' }}
              >
                <h3 className="font-header font-bold text-xl text-white mb-2">Schedule Your Call</h3>
                <p className="text-white/50 text-sm mb-8">Pick a time that works for you. 45 minutes — no pitch, just strategy.</p>

                <Link
                  href="/book-a-call"
                  className="block w-full text-center bg-orange-cta hover:bg-orange-hover text-white font-bold text-base py-4 px-6 rounded-xl transition-all duration-200 shadow-cta-glow hover:-translate-y-0.5 mb-8"
                >
                  Pick a Time →
                </Link>

                <div className="space-y-4">
                  {[
                    { icon: '🗓', label: 'Pick your slot', desc: 'Choose from available Tue–Thu windows' },
                    { icon: '🤖', label: 'AI prepares your roadmap', desc: 'Answer 3 questions, get a personalized insight' },
                    { icon: '✅', label: 'Instantly confirmed', desc: 'Calendar invite sent to your inbox' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-xl mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-white text-sm font-semibold">{item.label}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4 text-center">Got Questions Now?</p>
                  <a
                    href="tel:8639999152"
                    className="flex items-center gap-4 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: 'rgba(204,85,0,0.1)', border: '1.5px solid rgba(204,85,0,0.3)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(204,85,0,0.15)', color: '#CC5500' }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-white/30 uppercase tracking-wide">Call or Text</div>
                      <div className="font-header font-bold text-lg text-white">(863) 999-9152</div>
                      <div className="text-xs text-white/30">Experience our AI automation firsthand</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="pb-20 md:pb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Common Questions</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card-elevated-dark rounded-2xl p-6"
                style={{ borderTop: '2px solid rgba(255,255,255,0.08)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
              >
                <h3 className="font-header font-bold text-lg text-white mb-3">{faq.question}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Google Maps + GBP */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-3">Find Us</p>
              <h2 className="font-header font-bold text-2xl text-white mb-4">Serving Florida Statewide</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Based in Florida, we work remotely with businesses across the state and nationwide. All discovery calls are virtual.
              </p>
              <a
                href="https://share.google/rcgpdActs5kj47xjC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:border-orange-cta/40 hover:bg-orange-cta/5 transition-all duration-200"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-semibold text-white/80">View NicheFinders AI on Google</span>
                <svg className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10" style={{ height: '300px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1720602447012!2d-80.19100938889412!3d25.7978970772347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5764232edfc3377%3A0x7e64744e8f901f7a!2sNichefinders%20Ai!5e0!3m2!1sen!2sus!4v1777349562246!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NicheFinders AI location"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy-deepest" padding={false} glow>
        <Container size="lg" className="py-28 md:py-36 pb-36 md:pb-44 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Ready to Start</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to Stop Losing Revenue?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book your discovery call now. You'll get a custom AI roadmap even if we never work together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button href="/book-a-call" variant="primary" size="lg" className="min-w-[240px] shadow-cta-glow-lg">
              Book Discovery Call
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-white/30">
            <span>No obligation</span>
            <span className="w-px h-4 bg-white/15" />
            <span>No pressure</span>
            <span className="w-px h-4 bg-white/15" />
            <span>Expert insights</span>
          </div>
        </Container>
      </Section>

    </main>
  );
}
