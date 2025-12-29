'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { CASE_STUDIES, CALENDAR_LINK } from '@/lib/constants';

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique industries from case studies
  const industries = useMemo(() => {
    const uniqueIndustries = new Set(
      CASE_STUDIES.map((study) => study.client.industry.split(' - ')[0])
    );
    return ['all', ...Array.from(uniqueIndustries)];
  }, []);

  // Filter case studies based on industry and search
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

  // Separate featured from regular
  const featuredStudies = filteredStudies.filter((s) => s.featured);
  const regularStudies = filteredStudies.filter((s) => !s.featured);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden hero-gradient pt-32 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-deep/30 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
        </div>

        {/* Content */}
        <Container size="lg" className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" size="md" className="mb-6">
              PROVEN RESULTS
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Real Businesses, Real Results
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              See how Florida businesses across industries are transforming
              with our AI automation solutions. Every case study shows real
              metrics, real timelines, and real ROI.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Case Studies', value: CASE_STUDIES.length },
                { label: 'Industries', value: industries.length - 1 },
                { label: 'Avg ROI', value: '400%' },
                { label: 'Avg Timeline', value: '6-9 weeks' },
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-4xl font-black text-cyan-light mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="mb-12">
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-cyan-primary focus:outline-none text-lg"
              />
            </div>

            {/* Industry Filters */}
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-cyan-primary text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry === 'all'
                    ? 'All Industries'
                    : industry}
                  <span className="ml-2 text-sm opacity-75">
                    (
                    {industry === 'all'
                      ? CASE_STUDIES.length
                      : CASE_STUDIES.filter((s) =>
                          s.client.industry.includes(industry)
                        ).length}
                    )
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 text-gray-600">
            Showing <strong>{filteredStudies.length}</strong> case{' '}
            {filteredStudies.length === 1 ? 'study' : 'studies'}
            {searchQuery && ` for "${searchQuery}"`}
          </div>

          {/* Featured Case Studies */}
          {featuredStudies.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-black text-navy-deep mb-8">
                Featured Success Stories
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredStudies.map((study) => (
                  <Link
                    key={study.id}
                    href={`/case-studies/${study.slug}`}
                    className="group"
                  >
                    <Card
                      variant="elevated"
                      className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 h-full hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-black text-navy-deep mb-2 group-hover:text-cyan-primary transition-colors">
                            {study.client.name}
                          </h3>
                          <p className="text-gray-600">
                            {study.client.industry} • {study.client.location}
                          </p>
                        </div>
                        <Badge variant="primary" size="sm">
                          Featured
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-6 line-clamp-3">
                        {study.challenge}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-white rounded-lg border-l-4 border-success"
                          >
                            <div className="text-2xl font-black text-success mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-600">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center text-cyan-primary font-semibold group-hover:translate-x-2 transition-transform">
                        Read Full Case Study
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Regular Case Studies */}
          {regularStudies.length > 0 && (
            <div>
              <h2 className="text-3xl font-black text-navy-deep mb-8">
                {featuredStudies.length > 0 ? 'More' : 'All'} Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularStudies.map((study) => (
                  <Link
                    key={study.id}
                    href={`/case-studies/${study.slug}`}
                    className="group"
                  >
                    <Card
                      variant="elevated"
                      className="p-6 bg-white h-full hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-navy-deep mb-2 group-hover:text-cyan-primary transition-colors">
                        {study.client.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {study.client.industry} • {study.client.location}
                      </p>

                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                        {study.challenge}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="text-center p-3 bg-gray-50 rounded">
                            <div className="text-lg font-black text-cyan-primary">
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-600">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.slice(0, 2).map((tag, idx) => (
                          <Badge key={idx} variant="secondary" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center text-cyan-primary text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        View Details
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-navy-deep mb-4">
                No case studies found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search query
              </p>
              <Button
                onClick={() => {
                  setSelectedIndustry('all');
                  setSearchQuery('');
                }}
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
      <Section background="navy" padding>
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-black mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              These results are real. The businesses are real. The ROI is real.
              Book a discovery call to see how we can transform your
              business too.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={CALENDAR_LINK}
                external
                variant="primary"
                size="lg"
                className="bg-white text-navy-deep hover:bg-gray-100"
              >
                Book Discovery Call
              </Button>
              <Button
                href="/6-stage-system"
                variant="secondary"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20"
              >
                Explore Our 6-Stage System
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
