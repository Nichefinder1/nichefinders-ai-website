import type { Metadata } from 'next';
import Link from 'next/link';
import { FLORIDA_CITIES, CALENDAR_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'AI Automation Services Across Florida | NicheFinders AI',
  description:
    'NicheFinders AI delivers custom AI Operating Systems to Florida businesses. From Miami to Jacksonville, Tampa to Orlando — structure first, then intelligence.',
  keywords: [
    'AI automation Florida',
    'AI business operating system Florida',
    'AI consulting Florida',
    'business AI Miami',
    'AI automation Tampa',
    'NicheFinders AI Florida',
  ],
};

export default function FloridaLocationsPage() {
  const citiesByRegion = FLORIDA_CITIES.reduce((acc, city) => {
    if (!acc[city.region]) acc[city.region] = [];
    acc[city.region].push(city);
    return acc;
  }, {} as Record<string, typeof FLORIDA_CITIES>);

  const regions = Object.keys(citiesByRegion).sort();

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[68vh] flex items-center justify-center overflow-hidden pt-32 pb-20"
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
            Miami Headquarters · 10 Florida Locations
          </p>

          <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
            AI Systems Built for{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #C8D9E6 0%, #7aafd4 100%)' }}
            >
              Florida Businesses
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            From our Miami headquarters we build custom AI Operating Systems for contractors and
            service businesses across Florida. Tampa, Jacksonville, Naples, Orlando, and beyond.
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

      {/* Stats bar */}
      <section
        className="py-10 border-y border-white/10"
        style={{ background: '#001228' }}
      >
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: '10', label: 'Cities Served' },
            { stat: '20+', label: 'Counties' },
            { stat: '5', label: 'Regions' },
            { stat: '800K+', label: 'Businesses in Reach' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div className="font-header font-bold text-3xl text-orange-cta mb-1">{stat}</div>
              <div className="text-sm text-white/50 uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* City grid */}
      <section
        className="py-20 px-6"
        style={{ background: 'linear-gradient(180deg, #001228 0%, #001A3A 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Coverage</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
              All Florida Locations
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Click any city to see how we serve businesses in your market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {FLORIDA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/florida/${city.slug}`}
                className="group block p-6 rounded-lg border border-white/10 hover:border-orange-cta/50 transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(0,40,85,0.4)' }}
              >
                <div className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-orange-cta mb-3">
                  {city.region}
                </div>
                <h3 className="font-header font-bold text-xl text-white group-hover:text-[#7aafd4] transition-colors mb-2">
                  {city.name}
                </h3>
                <div className="space-y-1 text-sm text-white/50 mb-4">
                  <p>{city.population} residents</p>
                  <p>{city.businessCount} businesses</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {city.industries.slice(0, 2).map((ind, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-0.5 rounded border border-white/15 text-white/50"
                    >
                      {ind}
                    </span>
                  ))}
                  {city.industries.length > 2 && (
                    <span className="text-xs text-white/30">+{city.industries.length - 2}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By region */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: '#001A3A' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Navigate</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight">
              Browse by Region
            </h2>
          </div>

          <div className="space-y-10">
            {regions.map((region) => (
              <div key={region}>
                <h3 className="font-header font-bold text-xl text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-cta" />
                  {region}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {citiesByRegion[region].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/florida/${city.slug}`}
                      className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:border-white/30 transition-colors group"
                      style={{ background: 'rgba(0,40,85,0.3)' }}
                    >
                      <div>
                        <span className="font-semibold text-white group-hover:text-[#7aafd4] transition-colors">
                          {city.name}
                        </span>
                        <span className="text-sm text-white/40 ml-2">
                          {city.counties.join(', ')}
                        </span>
                      </div>
                      <svg className="w-4 h-4 text-white/30 group-hover:text-orange-cta transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why local matters */}
      <section
        className="py-20 px-6 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 100%)' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Local Advantage</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
              Why Local AI Expertise Matters
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Every Florida market is different. Tampa Bay businesses face different pressures than
              Miami or Jacksonville. We understand local dynamics, seasonal patterns, and competitive
              landscapes in each market we serve.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Market Understanding',
                  desc: 'Seasonal patterns, local competition, customer expectations — we know each Florida market.',
                },
                {
                  title: 'Industry Focus',
                  desc: "From Tampa's tech scene to Miami's hospitality industry, we specialize in what drives each local economy.",
                },
                {
                  title: 'On-the-Ground Support',
                  desc: 'Florida-based team available for in-person strategy sessions and training.',
                },
              ].map(({ title, desc }) => (
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
            </div>
          </div>

          <div
            className="p-8 rounded-xl border border-white/10"
            style={{ background: 'rgba(0,40,85,0.4)' }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">Florida Coverage</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '10', label: 'Cities Served' },
                { stat: '20+', label: 'Counties' },
                { stat: '5', label: 'Regions' },
                { stat: '800K+', label: 'Businesses' },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="p-5 rounded-lg border border-white/10 text-center"
                  style={{ background: 'rgba(0,20,50,0.5)' }}
                >
                  <div className="font-header font-bold text-3xl text-orange-cta mb-1">{stat}</div>
                  <div className="text-sm text-white/50">{label}</div>
                </div>
              ))}
            </div>
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
            Ready to Transform Your Florida Business?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            No matter where you are in Florida, we build AI systems that capture more leads,
            save time, and grow revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={CALENDAR_LINK}
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5 min-w-[260px]"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-[0.9rem] text-white border border-white/35 hover:border-white hover:bg-white/5 rounded font-semibold text-base transition-all duration-200 min-w-[260px]"
            >
              See Florida Success Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
