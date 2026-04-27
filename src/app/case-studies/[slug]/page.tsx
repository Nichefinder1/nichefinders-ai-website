'use client';

import { use, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CASE_STUDIES, CALENDAR_LINK } from '@/lib/constants';

type Props = {
  params: Promise<{ slug: string }>;
};

export default function CaseStudyPage({ params }: Props) {
  const { slug } = use(params);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <main style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 45%, #001A3A 100%)' }}>

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.22) 0%, transparent 55%)' }}
        />

        <Container size="lg" className="relative z-10">
          <div className="mb-8">
            <Button href="/case-studies" variant="secondary" size="sm">
              ← Back to Case Studies
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {study!.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            {study!.client.industry}
          </p>
          <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-4">
            {study!.client.name}
          </h1>
          <p className="text-white/40 text-lg mb-12">
            {study!.client.location} · {study!.client.size} · {study!.client.yearsFounded} in business
          </p>

          {/* Hero result stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {study!.results.map((result, index) => (
              <div
                key={index}
                className="rounded-xl p-5 text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="font-header font-bold text-2xl md:text-3xl text-orange-cta mb-1">{result.value}</div>
                <div className="text-xs text-white/40 leading-tight">{result.metric}</div>
                <div className="text-xs text-white/20 mt-1">{result.timeframe}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Challenge + Solution */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Challenge */}
            <div
              className="card-elevated-dark rounded-2xl p-8"
              style={{ borderTop: '2px solid rgba(255,255,255,0.08)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">The Challenge</p>
              <p className="text-white/60 leading-relaxed">{study!.challenge}</p>
            </div>

            {/* Solution */}
            <div
              className="card-elevated-dark rounded-2xl p-8"
              style={{ borderTop: '2px solid #CC5500', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(204,85,0,0.08)' }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Our Solution</p>
              <p className="text-white/60 leading-relaxed mb-6">{study!.solution}</p>
              <div className="flex flex-wrap gap-2">
                {study!.implementation.stages.map((stage) => (
                  <span
                    key={stage}
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(204,85,0,0.12)', color: '#CC5500', border: '1px solid rgba(204,85,0,0.3)' }}
                  >
                    Stage {stage}
                  </span>
                ))}
                {study!.implementation.services.map((service, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Before / After */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="pb-16">
          <h2 className="font-header font-bold text-2xl md:text-3xl text-white mb-8">Before & After</h2>
          <div className="space-y-3">
            {study!.metrics.beforeAfter.map((item, i) => (
              <div
                key={i}
                className="card-elevated-dark rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
              >
                <p className="text-sm font-semibold text-white/50 sm:w-48 flex-shrink-0">{item.metric}</p>
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-white/30 line-through text-sm">{item.before}</span>
                  <svg className="w-4 h-4 text-orange-cta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="font-bold text-white">{item.after}</span>
                  <span
                    className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(204,85,0,0.12)', color: '#CC5500', border: '1px solid rgba(204,85,0,0.25)' }}
                  >
                    {item.improvement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      {study!.testimonial && (
        <Section background="navy-deepest" padding={false}>
          <Container size="md" className="pb-16">
            <div
              className="card-elevated-dark rounded-2xl p-8 md:p-12"
              style={{ borderLeft: '3px solid #CC5500', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
            >
              <svg className="w-10 h-10 text-orange-cta/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-white/70 text-xl leading-relaxed italic mb-6">
                "{study!.testimonial.quote}"
              </blockquote>
              <p className="text-white/40 font-semibold">
                — {study!.testimonial.name}, {study!.testimonial.title}
              </p>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section background="navy-deepest" padding={false} glow>
        <Container size="md" className="py-28 md:py-36 pb-36 md:pb-44 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Your Turn</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Book a discovery call to learn how our 6-Stage System can transform your business like it did for {study!.client.name}.
          </p>
          <Button href={CALENDAR_LINK} variant="primary" size="lg" className="shadow-cta-glow-lg min-w-[240px]">
            Book Your Discovery Call
          </Button>
        </Container>
      </Section>

    </main>
  );
}
