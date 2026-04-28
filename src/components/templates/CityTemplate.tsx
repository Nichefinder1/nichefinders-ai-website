import Link from 'next/link';
import type { FloridaCity } from '@/lib/constants';
import { INDUSTRIES, SERVICES, FLORIDA_CITIES, CALENDAR_LINK } from '@/lib/constants';

interface CityTemplateProps {
  city: FloridaCity;
}

export default function CityTemplate({ city }: CityTemplateProps) {
  const nearbyCities = FLORIDA_CITIES.filter(
    (c) => c.slug !== city.slug && c.region === city.region
  ).slice(0, 4);

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
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">
            {city.region}
          </p>

          <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
            AI Systems Built for<br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #C8D9E6 0%, #7aafd4 100%)' }}
            >
              {city.name}, Florida
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Serving {city.population} residents and {city.businessCount} local businesses across{' '}
            {city.counties.join(', ')}.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {city.industries.map((ind, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/60"
              >
                {ind}
              </span>
            ))}
          </div>

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

      {/* Local business examples */}
      {city.localBusinessExamples && city.localBusinessExamples.length > 0 && (
        <section
          className="py-20 px-6 border-t border-white/10"
          style={{ background: '#001228' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Local Impact</p>
              <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
                Imagine If These {city.name} Icons Had AI
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                Every business owner in {city.name} knows these landmarks. Here&apos;s what AI could do for venues like these.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {city.localBusinessExamples.map((example, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-white/10"
                  style={{ background: 'rgba(0,40,85,0.4)' }}
                >
                  <h3 className="font-header font-bold text-xl text-white mb-1">{example.business}</h3>
                  <p className="text-sm text-orange-cta font-semibold mb-4">{example.type}</p>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-white/10" style={{ background: 'rgba(0,20,50,0.5)' }}>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-wide mb-1">AI Opportunity</div>
                      <p className="text-sm text-white/70">{example.automation}</p>
                    </div>
                    <div className="p-3 rounded-lg border border-emerald-500/20" style={{ background: 'rgba(16,185,129,0.07)' }}>
                      <div className="text-xs font-bold text-emerald-400/70 uppercase tracking-wide mb-1">Business Impact</div>
                      <p className="text-sm text-white/70">{example.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/60 text-lg mb-6">
                If businesses like these can benefit, imagine what AI could do for YOUR {city.name} business.
              </p>
              <Link
                href={CALENDAR_LINK}
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                See How AI Works for Your Business
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why choose us */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 100%)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Local Advantage</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
              Why {city.name} Businesses Choose Us
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              {city.name} is a thriving {city.region} hub with {city.population} residents and over{' '}
              {city.businessCount} businesses competing for attention. Speed and efficiency win deals.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Local Expertise',
                  desc: `We understand ${city.name}'s unique market dynamics and customer behavior.`,
                },
                {
                  title: 'Proven Results',
                  desc: 'Our clients see 3x average ROI with our AI OS methodology.',
                },
                {
                  title: 'Industry Specialists',
                  desc: `Deep experience in ${city.industries.join(', ')} across ${city.name}.`,
                },
              ].map(({ title, desc }, idx) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-lg border border-white/10"
                  style={{ background: 'rgba(0,40,85,0.3)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-orange-cta flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="font-header font-bold text-white mb-1">{title}</h3>
                    <p className="text-white/60 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
              <p className="text-white/50 text-sm mt-4">
                Read our{' '}
                <Link href="/resources/ai-insights" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
                  AI automation guides
                </Link>{' '}
                or explore{' '}
                <Link href="/case-studies" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
                  real client results
                </Link>{' '}
                from businesses like yours.
              </p>
            </div>
          </div>

          <div
            className="p-8 rounded-xl border border-white/10"
            style={{ background: 'rgba(0,40,85,0.4)' }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">{city.name} Market</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: city.population, label: 'Population' },
                { stat: city.businessCount, label: 'Businesses' },
                { stat: city.counties.length.toString(), label: 'Counties' },
                { stat: city.industries.length.toString(), label: 'Industries' },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="p-5 rounded-lg border border-white/10 text-center"
                  style={{ background: 'rgba(0,20,50,0.5)' }}
                >
                  <div className="font-header font-bold text-2xl text-orange-cta mb-1">{stat}</div>
                  <div className="text-sm text-white/50">{label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/40 mb-2 uppercase tracking-wide">Counties Served</p>
              <div className="flex flex-wrap gap-2">
                {city.counties.map((county, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded border border-white/15 text-white/50">
                    {county}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 space-y-1">
              <p className="text-xs text-white/40 mb-2 uppercase tracking-wide">Industry Resources</p>
              <a href="https://www.floridajobs.org" target="_blank" rel="noopener noreferrer" className="block text-xs text-[#7aafd4] hover:text-white transition-colors">Florida Department of Economic Opportunity ↗</a>
              <a href="https://www.flchamber.com" target="_blank" rel="noopener noreferrer" className="block text-xs text-[#7aafd4] hover:text-white transition-colors">Florida Chamber of Commerce ↗</a>
              <a href="https://www.bls.gov/regions/southeast/florida.htm" target="_blank" rel="noopener noreferrer" className="block text-xs text-[#7aafd4] hover:text-white transition-colors">BLS Florida Labor Market Data ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: '#001228' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Industries</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
              Industries We Serve in {city.name}
            </h2>
            <p className="text-white/50 text-base max-w-xl mx-auto">
              From{' '}
              <Link href="/industries/home-services" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
                home services
              </Link>{' '}
              to professional services — every industry gets a system built for its specific workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group p-6 text-center rounded-lg border border-white/10 hover:border-orange-cta/50 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(0,40,85,0.4)' }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="font-header font-bold text-white group-hover:text-[#7aafd4] transition-colors text-sm">
                  {industry.name}
                </h3>
                <p className="text-xs text-white/40 mt-1">{industry.businessCount} in {city.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Solutions</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight">
              AI Solutions for {city.name} Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/solutions/${service.slug}`}
                className="group flex items-start gap-4 p-6 rounded-xl border border-white/10 hover:border-orange-cta/40 transition-all duration-300"
                style={{ background: 'rgba(0,40,85,0.3)' }}
              >
                <div className="text-3xl flex-shrink-0">{service.icon}</div>
                <div>
                  <h3 className="font-header font-bold text-white group-hover:text-[#7aafd4] transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-white/50 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section
          className="py-16 px-6 border-t border-white/10"
          style={{ background: '#001228' }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Coverage</p>
              <h2 className="font-header font-bold text-2xl md:text-3xl text-white">
                Also Serving Nearby Cities
              </h2>
              <p className="text-white/50 mt-2">We cover all of {city.region}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/florida/${nearbyCity.slug}`}
                  className="w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] p-5 rounded-lg border border-white/10 hover:border-white/30 transition-colors text-center flex flex-col items-center justify-center"
                  style={{ background: 'rgba(0,40,85,0.3)' }}
                >
                  <div className="font-bold text-white mb-1">{nearbyCity.name}</div>
                  <div className="text-sm text-white/40">{nearbyCity.population}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #002855 0%, #001A3A 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">Get Started</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to Transform Your {city.name} Business?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Book a discovery call. We&apos;ll show you exactly how AI can work for your {city.name} business.
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
    </main>
  );
}
