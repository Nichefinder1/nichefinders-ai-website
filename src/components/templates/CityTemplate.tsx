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
import type { FloridaCity } from '@/lib/constants';
import { INDUSTRIES, SERVICES, FLORIDA_CITIES, CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CityTemplateProps {
  city: FloridaCity;
}

export default function CityTemplate({ city }: CityTemplateProps) {
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

  // Find nearby cities (within same region or adjacent)
  const nearbyCities = FLORIDA_CITIES.filter(
    (c) => c.slug !== city.slug && c.region === city.region
  ).slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <Section background="gradient" padding>
        <Container size="lg">
          <div
            ref={heroRef}
            className="text-center max-w-4xl mx-auto text-white py-20"
          >
            <Badge variant="secondary" size="md" className="mb-6 bg-white/20 text-white">
              {city.region.toUpperCase()}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              AI Automation Agency in {city.name}, Florida
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transform your {city.name} business with proven AI automation.
              Serving {city.population} residents and {city.businessCount}{' '}
              local businesses across {city.counties.join(', ')}.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {city.industries.map((ind, index) => (
                <Badge key={index} variant="secondary" size="sm" className="bg-white/20 text-white">
                  {ind}
                </Badge>
              ))}
            </div>
            <Button
              href={CALENDAR_LINK}
              external
              variant="primary"
              size="lg"
              className="bg-white text-navy-deep hover:bg-gray-100"
            >
              Get Free {city.name} Consultation
            </Button>
          </div>
        </Container>
      </Section>

      {/* Local Market Overview */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black text-navy-deep mb-6">
                Why {city.name} Businesses Choose Us
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {city.name} is a thriving {city.region} hub with {city.population}{' '}
                residents and over {city.businessCount} businesses competing for
                attention. In this fast-paced market, speed and efficiency win
                deals.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Local Expertise',
                    description: `We understand ${city.name}'s unique market dynamics and customer behavior.`,
                  },
                  {
                    title: 'Proven Results',
                    description:
                      'Our clients see 400% average ROI with our 6-Stage System.',
                  },
                  {
                    title: 'Industry Specialists',
                    description: `Deep experience in ${city.industries.join(', ')} across ${city.name}.`,
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
                  {city.name} Market Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-3xl font-black text-cyan-primary mb-1">
                      {city.population}
                    </div>
                    <div className="text-sm text-gray-600">Population</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-3xl font-black text-cyan-primary mb-1">
                      {city.businessCount}
                    </div>
                    <div className="text-sm text-gray-600">Businesses</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg col-span-2">
                    <div className="text-sm font-bold text-gray-500 mb-2">
                      Counties Served
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {city.counties.map((county, idx) => (
                        <Badge key={idx} variant="secondary" size="sm">
                          {county}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industries We Serve in City */}
      <Section background="gray" padding>
        <Container size="lg">
          <h2 className="text-4xl font-black text-navy-deep mb-12 text-center">
            Industries We Serve in {city.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group"
              >
                <Card
                  variant="elevated"
                  className="p-6 text-center bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <h3 className="font-bold text-navy-deep group-hover:text-cyan-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {industry.businessCount} in {city.name}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Solutions */}
      <Section background="white" padding>
        <Container size="lg">
          <h2 className="text-4xl font-black text-navy-deep mb-12 text-center">
            AI Solutions for {city.name} Businesses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/solutions/${service.slug}`}
                className="group"
              >
                <Card
                  variant="elevated"
                  className="p-8 bg-white hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-deep group-hover:text-cyan-primary transition-colors mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <Section background="navy" padding>
          <Container size="lg">
            <div className="text-center text-white mb-12">
              <h2 className="text-4xl font-black mb-4">
                Also Serving Nearby Cities
              </h2>
              <p className="text-xl text-gray-300">
                We provide AI automation across {city.region}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/florida/${nearbyCity.slug}`}
                  className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-center"
                >
                  <div className="font-bold text-white mb-1">
                    {nearbyCity.name}
                  </div>
                  <div className="text-sm text-gray-300">
                    {nearbyCity.population}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section background="white" padding>
        <Container size="lg">
          <Card
            variant="gradient-border"
            className="p-12 bg-gradient-to-br from-cyan-50 to-blue-50 text-center"
          >
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              Ready to Transform Your {city.name} Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Book a free discovery call with our team. We'll show you exactly
              how AI automation can work for your {city.name} business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={CALENDAR_LINK} external variant="primary" size="lg">
                Book Free {city.name} Consultation
              </Button>
              <Button href="/6-stage-system" variant="secondary" size="lg">
                Explore Our 6-Stage System
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
