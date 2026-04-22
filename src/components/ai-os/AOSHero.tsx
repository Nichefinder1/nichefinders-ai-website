import Link from 'next/link';

export default function AOSHero() {
  return (
    <section
      className="relative min-h-[72vh] flex items-center justify-center overflow-hidden pt-28 pb-20"
      style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 50%, #001A3A 100%)' }}
    >
      {/* Radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.18) 0%, transparent 55%)' }}
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6 mt-4">
          Nichefinders AI OS Partner Program
        </p>

        {/* Headline */}
        <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6" style={{ textWrap: 'balance' }}>
          Almost no one is asking<br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #C8D9E6 0%, #7aafd4 100%)' }}
          >
            the most important question.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 italic mb-10 max-w-lg mx-auto leading-relaxed" style={{ textWrap: 'balance' }}>
          &ldquo;Does your business have the intelligence layer AI needs to actually work?&rdquo;
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/book-a-call"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base uppercase tracking-wide rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5 min-w-[240px]"
          >
            Book a Discovery Call
          </Link>
          <a
            href="#ai-os-overview"
            className="inline-flex items-center justify-center px-8 py-[0.9rem] text-white border border-white/35 hover:border-white hover:bg-white/7 rounded font-semibold text-base transition-all duration-200 min-w-[240px]"
          >
            Show me what I&apos;m missing
          </a>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex" aria-hidden="true">
        <span className="text-[0.7rem] tracking-[0.15em] uppercase text-white/40">Scroll</span>
        <div
          className="w-[2px] h-12 opacity-60"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), #CC5500)' }}
        />
      </div>
    </section>
  );
}
