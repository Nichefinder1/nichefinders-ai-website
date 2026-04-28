import Link from 'next/link';
import EmailOptInForm from '@/components/forms/EmailOptInForm';

export default function AOSFinalCTA() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 100%)' }}
      id="aos-final-cta"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #C8D9E6, #0055A4, #C8D9E6, transparent)' }}
        aria-hidden="true"
      />
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.12) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Eyebrow */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-5">
            The Nichefinders AI OS Partner Program
          </p>

          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6" style={{ textWrap: 'balance' }}>
            Let&apos;s find out if your business
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #C8D9E6 0%, #7aafd4 100%)' }}
            >
              is ready for AI.
            </span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            A 45-minute discovery call. We map your operation, identify the gaps, and tell you
            honestly whether we&apos;re the right fit. No pressure. No commitment.
          </p>
        </div>

        {/* Two-column CTA grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left: Book a call */}
          <div
            className="rounded-2xl p-8 md:p-10 text-center flex flex-col items-center"
            style={{ background: 'rgba(204,85,0,0.08)', border: '1px solid rgba(204,85,0,0.25)' }}
          >
            <h3 className="font-header font-bold text-xl text-white mb-3">
              Ready to find out if you&apos;re a fit?
            </h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              45 minutes. We map your operation, identify the gaps, and tell you honestly whether
              the AI OS is the right next move — or what is. No pitch. Just clarity.
            </p>
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center w-full px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Discovery Call
            </Link>
            <p className="mt-4 text-xs text-white/40">
              No hand-off. You speak directly with Corey.
            </p>
          </div>

          {/* Right: Email opt-in */}
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col items-center"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <h3 className="font-header font-bold text-xl text-white mb-3">
              Want the full breakdown first?
            </h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed text-center">
              Get the AI OS Program Overview sent to your inbox — what it is, how it works,
              and whether it&apos;s the right fit for your stage of business.
            </p>
            <EmailOptInForm />
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center border-t border-white/6 pt-10">
          <p className="font-header text-lg md:text-xl text-white/60 uppercase tracking-wide">
            We install the intelligence first.{' '}
            <span className="text-orange-cta">It handles the rest.</span>
          </p>
          <p className="mt-4 text-sm text-white/30">
            &copy; {new Date().getFullYear()} NicheFinders AI Agency &nbsp;·&nbsp; nichefinders.ai
          </p>
        </div>
      </div>
    </section>
  );
}
