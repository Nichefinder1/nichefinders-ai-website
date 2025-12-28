'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { CASE_STUDIES, CALENDAR_LINK } from '@/lib/constants';

type Props = {
  params: { slug: string };
};

export default function CaseStudyPage({ params }: Props) {
  // Scroll to top on mount
  useEffect(() => {
    // Force scroll to top immediately and aggressively
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediately
    scrollToTop();

    // Continue scrolling to top for a longer period to handle any layout shifts
    const timeouts = [
      setTimeout(scrollToTop, 10),
      setTimeout(scrollToTop, 50),
      setTimeout(scrollToTop, 100),
      setTimeout(scrollToTop, 150),
      setTimeout(scrollToTop, 200),
      setTimeout(scrollToTop, 300),
      setTimeout(scrollToTop, 500),
      setTimeout(scrollToTop, 750),
      setTimeout(scrollToTop, 1000),
    ];

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [params.slug]);

  const study = CASE_STUDIES.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-navy-deep text-white pt-32 pb-16">
        <Container size="md">
          <div className="mb-6">
            <Button
              href="/case-studies"
              variant="secondary"
              size="sm"
              className="bg-white/10 border-white/30 hover:bg-white/20"
            >
              ← Back to Case Studies
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags.map((tag) => (
              <Badge key={tag} variant="secondary" size="sm">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            {study.client.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {study.client.industry}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {study.results.map((result, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <div className="text-sm text-gray-400 mb-1">{result.metric}</div>
                <div className="text-3xl md:text-4xl font-black text-cyan-primary mb-1">
                  {result.value}
                </div>
                <div className="text-xs text-gray-400">{result.timeframe}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Challenge Section */}
      <Section>
        <Container size="md">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy-deep mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy-deep mb-6">
              Our Solution
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {study.solution}
            </p>

            <div className="bg-gray-light rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy-deep mb-4">
                Implementation Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-navy-deep mb-2">
                    Stages Implemented:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.implementation.stages.map((stage) => (
                      <Badge key={stage} variant="primary" size="md">
                        Stage {stage}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-navy-deep mb-2">Duration:</p>
                  <p className="text-gray-700">{study.implementation.duration}</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-deep mb-2">
                    Services Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.implementation.services.map((service) => (
                      <Badge key={service} variant="secondary" size="sm">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy-deep mb-6">
              The Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-sm text-gray-600 mb-2">{result.metric}</p>
                  <div className="text-4xl font-black text-cyan-primary mb-2">
                    {result.value}
                  </div>
                  <p className="text-sm text-gray-500">{result.timeframe}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          {study.testimonial && (
            <div className="mb-16">
              <div className="bg-gradient-to-r from-cyan-50 to-navy-50 rounded-lg p-8">
                <div className="text-6xl text-cyan-primary mb-4">"</div>
                <blockquote className="text-xl text-navy-deep mb-6 italic">
                  {study.testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <p className="font-bold text-navy-deep">
                      {study.testimonial.name}
                    </p>
                    <p className="text-gray-600">{study.testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center bg-navy-deep text-white rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book a discovery call to learn how our 6-Stage System can
              transform your business like it did for {study.client.name}.
            </p>
            <Button
              href={CALENDAR_LINK}
              variant="primary"
              size="lg"
              className="shadow-2xl shadow-cyan-primary/50"
              external
            >
              Book Your Discovery Call
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
