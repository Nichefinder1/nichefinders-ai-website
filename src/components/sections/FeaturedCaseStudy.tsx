import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CASE_STUDIES } from '@/lib/constants';

export default function FeaturedCaseStudy() {
  const featured = CASE_STUDIES[0];

  return (
    <Section background="navy-deepest" padding={false} glow>
      <Container size="lg" className="py-20 md:py-28">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            Success Story
          </p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            See What's Possible
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Real results from a real business. See what happens when you implement the 6-Stage System.
          </p>
        </div>

        {/* Case Study Card */}
        <div
          className="card-elevated-dark rounded-2xl overflow-hidden"
          style={{ borderTop: '2px solid #CC5500', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(204,85,0,0.1)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — Metrics panel */}
            <div
              className="p-8 md:p-12 flex flex-col justify-between"
              style={{ background: 'linear-gradient(135deg, rgba(0,26,58,0.8) 0%, rgba(0,40,85,0.6) 100%)', borderRight: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Client badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: 'rgba(204,85,0,0.12)', border: '1px solid rgba(204,85,0,0.3)' }}>
                  <span className="text-xs font-semibold tracking-widest uppercase text-orange-cta">
                    {featured.client.industry.split(' - ')[0]}
                  </span>
                </div>

                <h3 className="font-header font-bold text-2xl text-white mb-1">
                  {featured.client.name}
                </h3>
                <p className="text-white/40 text-sm mb-8">
                  {featured.client.location} · {featured.client.size} · {featured.client.yearsFounded} in business
                </p>

                {/* Before / After */}
                <div className="space-y-3 mb-8">
                  {featured.metrics.beforeAfter.slice(0, 3).map((item, i) => (
                    <div key={i} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2">{item.metric}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-white/40 text-sm line-through">{item.before}</span>
                        <svg className="w-4 h-4 text-orange-cta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span className="font-bold text-white">{item.after}</span>
                        <span className="ml-auto text-xs font-bold text-orange-cta">{item.improvement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation badge */}
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Completed in {featured.implementation.duration}
                <span className="mx-2 w-px h-4 bg-white/10" />
                Stages {featured.implementation.stages.join(', ')}
              </div>
            </div>

            {/* Right — Story panel */}
            <div className="p-8 md:p-12 flex flex-col justify-between">

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {featured.results.slice(0, 4).map((result, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4 text-center"
                    style={{ background: 'rgba(204,85,0,0.07)', border: '1px solid rgba(204,85,0,0.15)' }}
                  >
                    <div className="font-header font-bold text-2xl text-orange-cta mb-1">
                      {result.value}
                    </div>
                    <div className="text-xs text-white/50 leading-tight">{result.metric}</div>
                    <div className="text-xs text-white/25 mt-1">{result.timeframe}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div
                className="rounded-xl p-6 mb-8"
                style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid #CC5500' }}
              >
                <p className="text-white/70 italic leading-relaxed mb-4">
                  "{featured.testimonial.quote}"
                </p>
                <p className="text-white/40 text-sm font-semibold">
                  — {featured.testimonial.name}, {featured.testimonial.title}
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={`/case-studies/${featured.slug}`}
                  variant="primary"
                  size="lg"
                  className="flex-1 justify-center shadow-cta-glow-lg"
                >
                  Read Full Case Study
                </Button>
                <Button
                  href="/case-studies"
                  variant="secondary"
                  size="lg"
                  className="flex-1 justify-center"
                >
                  All Case Studies
                </Button>
              </div>
            </div>

          </div>
        </div>

      </Container>
    </Section>
  );
}
