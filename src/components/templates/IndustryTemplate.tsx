import Link from 'next/link';
import type { Industry } from '@/lib/constants';
import { FLORIDA_CITIES, SIX_STAGES, CALENDAR_LINK } from '@/lib/constants';

interface IndustryTemplateProps {
  industry: Industry;
}

const industryCaseStudyMap: Record<string, string> = {
  'home-services': '/case-studies/precision-plumbing-tampa',
  'automotive': '/case-studies/sunshine-auto-jacksonville',
  'nonprofits': '/case-studies',
  'professional-services': '/case-studies/mitchell-law-group-orlando',
};


const industryHeadlineMap: Record<string, { line1: string; line2: string }> = {
  'home-services': { line1: 'AI Built for Building', line2: 'Service Companies' },
  'automotive':    { line1: 'AI Automation for Automotive', line2: 'Dealers & Services' },
};

const primaryCTA = 'inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5 min-w-[260px]';
const secondaryCTA = 'inline-flex items-center justify-center px-8 py-[0.9rem] text-white border border-white/35 hover:border-white hover:bg-white/5 rounded font-semibold text-base transition-all duration-200 min-w-[260px]';

export default function IndustryTemplate({ industry }: IndustryTemplateProps) {
  const caseStudyLink = industryCaseStudyMap[industry.slug] || '/case-studies';
  const { line1: headlineLine1 = 'AI Automation for', line2: headlineLine2 = industry.name } =
    industryHeadlineMap[industry.slug] ?? {};

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[72vh] flex items-center justify-center overflow-hidden pt-32 pb-20"
        style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 50%, #001A3A 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.22) 0%, transparent 55%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="text-6xl mb-6">{industry.icon}</div>

          <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
            {headlineLine1}<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #C8D9E6 0%, #7aafd4 100%)' }}
            >
              {headlineLine2}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {industry.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={CALENDAR_LINK}
              className={primaryCTA}
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/ai-os-partner-program"
              className={secondaryCTA}
            >
              See the AI OS Partner Program
            </Link>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section
        className="py-24 px-6 border-t border-white/10 text-center"
        style={{ background: '#001228' }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-red-400 mb-4">The Problem</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-16">
            Sound familiar?
          </h2>

          <div className="space-y-6">
            {industry.challenges.map((pain, index) => (
              <div key={index} className="relative group">
                <p className="font-header font-bold text-2xl md:text-3xl text-white/20 group-hover:text-white/30 transition-colors duration-300">
                  {pain}
                </p>
                {/* red strikethrough */}
                <div className="absolute inset-y-1/2 left-0 right-0 h-[2px] bg-red-500/50 -translate-y-1/2" />
              </div>
            ))}
          </div>

          <p className="mt-16 text-white/50 text-lg">
            Every one of these is solvable. That&apos;s why we&apos;re here.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 100%)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: heading + CTA */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">The Solution</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
              What We Automate
            </h2>
            <p className="text-white/60 text-lg mb-4">Tailored automation that solves your specific challenges.</p>
            <p className="text-white/40 text-sm mb-8">
              Delivered through our{' '}
              <Link href="/6-stage-system" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
                proven 6-Stage AI System
              </Link>
              . According to{' '}
              <a href="https://www.bls.gov/productivity/" target="_blank" rel="noopener noreferrer" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">BLS productivity research</a>
              , structured operations outperform manual ones by a measurable margin every year.
            </p>
            <Link
              href={CALENDAR_LINK}
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-cta hover:bg-orange-hover text-white font-bold text-sm rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Right: numbered list */}
          <div className="lg:col-span-2 divide-y divide-white/10">
            {industry.solutions.map((solution, index) => (
              <div key={index} className="flex items-center gap-6 py-5">
                <span className="font-header font-bold text-3xl text-orange-cta/30 w-10 flex-shrink-0 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="font-header font-bold text-lg text-white/90">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical results */}
      {industry.typicalResults && industry.typicalResults.length > 0 && (
        <section
          className="py-20 px-6 border-t border-white/10"
          style={{ background: '#001228' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Results</p>
              <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
                Typical Results for {industry.name}
              </h2>
              <p className="text-white/50 text-base max-w-xl mx-auto">
                Use our{' '}
                <Link href="/resources/roi-calculator" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
                  ROI Calculator
                </Link>{' '}
                to estimate what these results could mean for your business, or{' '}
                <Link href="/resources/ai-insights" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
                  read our AI insights
                </Link>{' '}
                for strategies you can apply today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industry.typicalResults.map((result, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-emerald-500/20 text-center"
                  style={{ background: 'rgba(16,185,129,0.07)' }}
                >
                  <div className="font-header font-bold text-4xl text-emerald-400 mb-2">
                    {result.improvement}
                  </div>
                  <div className="text-sm text-white/60">{result.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use cases */}
      {industry.useCases && industry.useCases.length > 0 && (
        <section
          className="py-20 px-6 border-t border-white/10"
          style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 100%)' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Use Cases</p>
              <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
                Real-World Use Cases
              </h2>
              <p className="text-white/60 text-lg">How {industry.name} businesses use our AI OS.</p>
            </div>

            <div className="space-y-6">
              {industry.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-white/10"
                  style={{ background: 'rgba(0,40,85,0.4)' }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <div>
                      <h3 className="font-header font-bold text-2xl text-white mb-2">{useCase.title}</h3>
                      <p className="text-white/60">{useCase.description}</p>
                    </div>
                    <div className="lg:col-span-2 flex flex-wrap gap-2">
                      {useCase.stages.map((stageNum) => {
                        const stage = SIX_STAGES.find((s) => s.number === stageNum);
                        return stage ? (
                          <span
                            key={stageNum}
                            className="text-xs px-3 py-1 rounded-full border border-[#7aafd4]/30 text-[#7aafd4]"
                            style={{ background: 'rgba(122,175,212,0.1)' }}
                          >
                            {stage.icon} Stage {stageNum}: {stage.name.split(' ')[0]}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/ai-os-partner-program"
                className="inline-flex items-center justify-center px-8 py-[0.9rem] text-white border border-white/35 hover:border-white hover:bg-white/5 rounded font-semibold text-base transition-all duration-200"
              >
                Explore the AI OS Partner Program
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Florida locations */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: '#001228' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Coverage</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
              Serving Clients Across Florida
            </h2>
            <p className="text-white/60 text-lg">Local expertise in major Florida markets.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {FLORIDA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/florida/${city.slug}`}
                className="p-4 rounded-lg border border-white/10 hover:border-white/30 text-center transition-colors group"
                style={{ background: 'rgba(0,40,85,0.3)' }}
              >
                <div className="font-bold text-white group-hover:text-[#7aafd4] transition-colors text-sm">
                  {city.name}
                </div>
                <div className="text-xs text-white/40 mt-1">{city.population}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #002855 0%, #001A3A 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">Get Started</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to Transform<br />Your Business?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Get a custom AI strategy tailored specifically for your industry and business goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={CALENDAR_LINK}
              className={primaryCTA}
            >
              Book Your Discovery Call
            </Link>
            <Link
              href={caseStudyLink}
              className={secondaryCTA}
            >
              Read Case Study
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
