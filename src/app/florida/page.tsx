'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { FLORIDA_CITIES, CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FloridaLocationsPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.from(hero.children, {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Group cities by region
  const citiesByRegion = FLORIDA_CITIES.reduce((acc, city) => {
    if (!acc[city.region]) {
      acc[city.region] = [];
    }
    acc[city.region].push(city);
    return acc;
  }, {} as Record<string, typeof FLORIDA_CITIES>);

  const regions = Object.keys(citiesByRegion).sort();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden hero-gradient pt-32 pb-20">
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
          <div ref={heroRef} className="max-w-4xl mx-auto">
            {/* Badge */}
            <Badge variant="secondary" size="md" className="mb-6">
              MIAMI HEADQUARTERS • 10 FLORIDA LOCATIONS
            </Badge>

            {/* Headline with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block">AI Automation Across</span>
              <span className="block text-gradient">Florida</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              From our Miami headquarters, we bring proven AI automation solutions to businesses
              across Florida—from Tampa to Jacksonville, Naples to Orlando, and everywhere in between.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={CALENDAR_LINK}
                variant="primary"
                size="lg"
                className="min-w-[280px] shadow-2xl shadow-cyan-primary/50 text-lg font-bold py-4 px-8"
                external
              >
                Book Your Discovery Call
              </Button>
              <Button
                href="/6-stage-system"
                variant="secondary"
                size="lg"
                className="min-w-[280px] text-lg font-bold py-4 px-8"
              >
                Explore Our 6-Stage System
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* All Locations Grid */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              All Florida Locations
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Click on any city to learn more about our AI automation services in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FLORIDA_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/florida/${city.slug}`}
                className="group"
              >
                <Card
                  variant="elevated"
                  className="p-6 bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full"
                >
                  <div className="mb-3">
                    <Badge variant="secondary" size="sm" className="text-xs">
                      {city.region}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-navy-deep group-hover:text-cyan-primary transition-colors mb-2">
                    {city.name}
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    <p>{city.population} residents</p>
                    <p>{city.businessCount} businesses</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {city.industries.slice(0, 2).map((ind, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {ind}
                      </span>
                    ))}
                    {city.industries.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{city.industries.length - 2} more
                      </span>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* By Region */}
      <Section background="gray" padding>
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              Browse by Region
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Find AI automation services in your part of Florida.
            </p>
          </div>

          <div className="space-y-12">
            {regions.map((region) => (
              <div key={region}>
                <h3 className="text-2xl font-bold text-navy-deep mb-6 flex items-center">
                  <span className="w-3 h-3 bg-cyan-primary rounded-full mr-3" />
                  {region}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {citiesByRegion[region].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/florida/${city.slug}`}
                      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div>
                        <span className="font-semibold text-navy-deep group-hover:text-cyan-primary transition-colors">
                          {city.name}
                        </span>
                        <span className="text-sm text-gray-500 ml-2">
                          {city.counties.join(', ')}
                        </span>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-cyan-primary transition-colors"
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
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Local Matters */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-navy-deep mb-6">
                Why Local AI Expertise Matters
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Every Florida market is unique. Tampa Bay businesses face different
                challenges than those in Miami or Jacksonville. We understand the
                local dynamics, customer behavior, and competitive landscape in each
                city we serve.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Market Understanding',
                    description: 'We know the seasonal patterns, local competition, and customer expectations in each Florida market.',
                  },
                  {
                    title: 'Industry Focus',
                    description: 'From Tampa\'s tech scene to Miami\'s hospitality industry - we specialize in what drives each local economy.',
                  },
                  {
                    title: 'On-the-Ground Support',
                    description: 'Our team is based in Florida and available for in-person strategy sessions and training.',
                  },
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <svg
                      className="w-6 h-6 text-cyan-primary flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="font-bold text-navy-deep mb-1">
                        {point.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card variant="elevated" className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50">
                <h3 className="text-2xl font-black text-navy-deep mb-6">
                  Florida Coverage Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white rounded-lg text-center">
                    <div className="text-4xl font-black text-cyan-primary mb-1">
                      10
                    </div>
                    <div className="text-sm text-gray-600">Cities Served</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg text-center">
                    <div className="text-4xl font-black text-cyan-primary mb-1">
                      20+
                    </div>
                    <div className="text-sm text-gray-600">Counties</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg text-center">
                    <div className="text-4xl font-black text-cyan-primary mb-1">
                      5
                    </div>
                    <div className="text-sm text-gray-600">Regions</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg text-center">
                    <div className="text-4xl font-black text-cyan-primary mb-1">
                      800K+
                    </div>
                    <div className="text-sm text-gray-600">Businesses</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy" padding>
        <Container size="lg">
          <div className="text-center">
            <h2 className="text-4xl font-black text-white mb-4">
              Ready to Transform Your Florida Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              No matter where you are in Florida, our AI automation solutions
              can help you capture more leads, save time, and grow revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={CALENDAR_LINK}
                variant="primary"
                size="lg"
                className="min-w-[280px]"
                external
              >
                Book Your Free Consultation
              </Button>
              <Button
                href="/case-studies"
                variant="secondary"
                size="lg"
                className="min-w-[280px]"
              >
                See Our Florida Success Stories
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
