'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CASE_STUDIES, CALENDAR_LINK } from '@/lib/constants';

export default function CaseStudiesClient() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = useMemo(() => {
    const uniqueIndustries = new Set(
      CASE_STUDIES.map((study) => study.client.industry.split(' - ')[0])
    );
    return ['all', ...Array.from(uniqueIndustries)];
  }, []);

  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter((study) => {
      const matchesIndustry =
        selectedIndustry === 'all' ||
        study.client.industry.includes(selectedIndustry);
      const matchesSearch =
        searchQuery === '' ||
        study.client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.client.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesIndustry && matchesSearch;
    });
  }, [selectedIndustry, searchQuery]);

  const featuredStudies = filteredStudies.filter((s) => s.featured);
  const regularStudies = filteredStudies.filter((s) => !s.featured);

  return (
    <main style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 45%, #001A3A 100%)' }}>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Blue top glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.22) 0%, transparent 55%)' }}
        />

        <Container size="lg" className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">
              Proven Results
            </p>
            <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
              Real Businesses,<br />Real Results
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
              See how businesses across industries are transforming with our AI automation solutions.
              Every case study shows real metrics, real timelines, and real ROI.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Case Studies', value: CASE_STUDIES.length },
                { label: 'Industries', value: industries.length - 1 },
                { label: 'Avg ROI', value: '3x' },
                { label: 'Avg Timeline', value: '6–9 wks' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl p-4 text-center"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="font-header font-bold text-3xl text-orange-cta mb-1">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Filters + Cards */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="py-16">

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-xl text-white placeholder-white/30 text-base focus:outline-none"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            />
          </div>

          {/* Industry filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {industries.map((industry) => {
              const active = selectedIndustry === industry;
              return (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    background: active ? '#CC5500' : 'rgba(255,255,255,0.06)',
                    border: active ? '1.5px solid #CC5500' : '1px solid rgba(255,255,255,0.1)',
                    color: active ? '#fff' : 'rgba(255,255,255,0.5)',
                    boxShadow: active ? '0 4px 16px rgba(204,85,0,0.25)' : 'none',
                  }}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                  <span className="ml-2 opacity-60">
                    ({industry === 'all'
                      ? CASE_STUDIES.length
                      : CASE_STUDIES.filter((s) => s.client.industry.includes(industry)).length})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Result count */}
          <p className="text-white/30 text-sm mb-10">
            Showing <span className="text-white/60 font-semibold">{filteredStudies.length}</span> case {filteredStudies.length === 1 ? 'study' : 'studies'}
            {searchQuery && ` for "${searchQuery}"`}
          </p>

          {/* Featured */}
          {featuredStudies.length > 0 && (
            <div className="mb-16">
              <h2 className="font-header font-bold text-2xl md:text-3xl text-white mb-8">
                Featured Success Stories
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredStudies.map((study) => (
                  <Link key={study.id} href={`/case-studies/${study.slug}`} className="group block">
                    <div
                      className="card-elevated-dark h-full rounded-2xl p-8 transition-all duration-300 group-hover:-translate-y-1"
                      style={{ borderTop: '2px solid #CC5500', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(204,85,0,0.1)' }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-header font-bold text-xl text-white mb-1 group-hover:text-orange-cta transition-colors">
                            {study.client.name}
                          </h3>
                          <p className="text-white/40 text-sm">{study.client.industry} · {study.client.location}</p>
                        </div>
                        <span
                          className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full flex-shrink-0"
                          style={{ background: 'rgba(204,85,0,0.15)', color: '#CC5500', border: '1px solid rgba(204,85,0,0.3)' }}
                        >
                          Featured
                        </span>
                      </div>

                      <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                        {study.challenge}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl p-4 text-center"
                            style={{ background: 'rgba(204,85,0,0.08)', border: '1px solid rgba(204,85,0,0.18)' }}
                          >
                            <div className="font-header font-bold text-2xl text-orange-cta mb-1">{result.value}</div>
                            <div className="text-xs text-white/40">{result.metric}</div>
                          </div>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-cta transition-all duration-300 group-hover:gap-3">
                        Read Full Case Study
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Regular */}
          {regularStudies.length > 0 && (
            <div>
              <h2 className="font-header font-bold text-2xl md:text-3xl text-white mb-8">
                {featuredStudies.length > 0 ? 'More' : 'All'} Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularStudies.map((study) => (
                  <Link key={study.id} href={`/case-studies/${study.slug}`} className="group block">
                    <div
                      className="card-elevated-dark h-full rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1"
                      style={{ borderTop: '2px solid rgba(255,255,255,0.08)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
                    >
                      <h3 className="font-header font-bold text-lg text-white mb-1 group-hover:text-orange-cta transition-colors">
                        {study.client.name}
                      </h3>
                      <p className="text-white/40 text-xs mb-4">{study.client.industry} · {study.client.location}</p>

                      <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{study.challenge}</p>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg p-3 text-center"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                          >
                            <div className="font-bold text-lg text-orange-cta">{result.value}</div>
                            <div className="text-xs text-white/30">{result.metric}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-full"
                            style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-cta transition-all duration-300 group-hover:gap-3">
                        View Details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <svg className="w-7 h-7 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-header font-bold text-2xl text-white mb-3">No case studies found</h3>
              <p className="text-white/40 mb-6">Try adjusting your filters or search query</p>
              <Button
                onClick={() => { setSelectedIndustry('all'); setSearchQuery(''); }}
                variant="primary"
                size="md"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy-deepest" padding={false} glow>
        <Container size="lg" className="py-28 md:py-36 pb-36 md:pb-44 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            Your Turn
          </p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            These results are real. The businesses are real. The ROI is real.
            Book a discovery call to see how we can transform your business too.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={CALENDAR_LINK} variant="primary" size="lg" className="min-w-[240px] shadow-cta-glow-lg">
              Book Discovery Call
            </Button>
            <Button href="/6-stage-system" variant="secondary" size="lg" className="min-w-[240px]">
              Explore Our 6-Stage System
            </Button>
          </div>
        </Container>
      </Section>

    </main>
  );
}
