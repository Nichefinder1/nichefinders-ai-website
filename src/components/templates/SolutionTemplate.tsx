import Link from 'next/link';
import type { Service } from '@/lib/constants';
import { CALENDAR_LINK } from '@/lib/constants';

interface SolutionTemplateProps {
  service: Service;
}

const solutionCaseStudyMap: Record<string, string> = {
  'ai-consulting': '/case-studies/coastal-construction-group',
  'custom-ai-development': '/case-studies/precision-plumbing-tampa',
  'ai-powered-marketing': '/case-studies/sunshine-auto-jacksonville',
  'ai-education-training': '/case-studies/mitchell-law-group-orlando',
};

export default function SolutionTemplate({ service }: SolutionTemplateProps) {
  const caseStudyLink = solutionCaseStudyMap[service.slug] || '/case-studies';

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
          <div className="text-6xl mb-6">{service.icon}</div>

          <h1
            className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-transparent bg-clip-text mb-6"
            style={{ backgroundImage: 'linear-gradient(90deg, #C8D9E6 0%, #7aafd4 100%)' }}
            dangerouslySetInnerHTML={{ __html: service.headline }}
          />

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={CALENDAR_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5 min-w-[260px]"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/ai-os-partner-program"
              className="inline-flex items-center justify-center px-8 py-[0.9rem] text-white border border-white/35 hover:border-white hover:bg-white/5 rounded font-semibold text-base transition-all duration-200 min-w-[260px]"
            >
              See the AI OS Partner Program
            </Link>
          </div>
        </div>
      </section>

      {/* What we provide */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: '#001228' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Overview</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
            What We Provide
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">{service.details}</p>
          <Link
            href={CALENDAR_LINK}
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            See How This Works for Your Business
          </Link>
        </div>
      </section>

      {/* Key features / deliverables */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 100%)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: heading + CTA */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Deliverables</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
              What You Get with {service.name}
            </h2>
            <p className="text-white/60 text-lg mb-8">Every deliverable designed to drive measurable business results.</p>
            <Link
              href={CALENDAR_LINK}
              className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/35 hover:border-white hover:bg-white/5 rounded font-semibold text-sm transition-all duration-200"
            >
              Discuss Your Specific Needs
            </Link>
          </div>

          {/* Right: numbered list */}
          <div className="lg:col-span-2 divide-y divide-white/10">
            {service.deliverables.map((feature, index) => (
              <div key={index} className="flex items-center gap-6 py-5">
                <span className="font-header font-bold text-3xl text-orange-cta/30 w-10 flex-shrink-0 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="font-header font-bold text-lg text-white/90">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: '#001228' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Process</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
              How We Deliver {service.name} Results
            </h2>
            <p className="text-white/60 text-lg mb-8">
              A proven process from strategy to revenue-generating AI.
            </p>
            <Link
              href="/ai-os-partner-program"
              className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/35 hover:border-white hover:bg-white/5 rounded font-semibold text-sm transition-all duration-200"
            >
              Explore the Full AI OS Partner Program
            </Link>
          </div>

          {service.process && service.process.length > 0 ? (
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className="flex-1 p-6 rounded-xl border border-white/10"
                    style={{ background: 'rgba(0,40,85,0.4)' }}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-header font-bold text-base text-white"
                        style={{ background: 'linear-gradient(135deg, #CC5500, #002855)' }}
                      >
                        {index + 1}
                      </div>
                      <h3 className="font-header font-bold text-xl text-white">{step.step}</h3>
                    </div>
                    <p className="text-white/60">{step.description}</p>
                    {index === service.process!.length - 1 && (
                      <div className="mt-6 pt-5 border-t border-white/10">
                        <Link
                          href={CALENDAR_LINK}
                          className="inline-flex items-center justify-center px-6 py-3 bg-orange-cta hover:bg-orange-hover text-white font-bold text-sm rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5"
                        >
                          Start This Process for Your Business
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-white/60 mb-6">Contact us to learn about our proven process for {service.name}.</p>
              <Link
                href={CALENDAR_LINK}
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Discovery Call
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* All deliverables dark */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">What&apos;s Included</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
              Everything You&apos;ll Receive with {service.name}
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Complete transparency on deliverables — no surprises, just results.
            </p>
            <Link
              href={CALENDAR_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Your Custom Proposal
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {service.deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 rounded-xl border border-white/10 hover:border-[#7aafd4]/30 transition-all duration-300"
                style={{ background: 'rgba(0,40,85,0.3)' }}
              >
                <div className="w-2 h-2 rounded-full bg-[#7aafd4] flex-shrink-0 mt-2" />
                <h3 className="font-header font-bold text-white">{deliverable}</h3>
              </div>
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
            Turn {service.name} Into Revenue This Month
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a 45-minute discovery call. We&apos;ll map your current workflow, identify automation
            opportunities, and show you exactly how {service.name} drives measurable ROI for businesses like yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href={CALENDAR_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5 min-w-[260px]"
            >
              Book a Discovery Call
            </Link>
            <Link
              href={caseStudyLink}
              className="inline-flex items-center justify-center px-8 py-[0.9rem] text-white border border-white/35 hover:border-white hover:bg-white/5 rounded font-semibold text-base transition-all duration-200 min-w-[260px]"
            >
              See Real Client Results
            </Link>
          </div>
          <p className="text-sm text-white/30">
            Most clients see positive ROI within 60–90 days · No long-term contracts required
          </p>
        </div>
      </section>
    </main>
  );
}
