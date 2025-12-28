'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { CASE_STUDIES } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedCaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Feature the first case study (can be made dynamic later)
  const featured = CASE_STUDIES[0];

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    // Slide in animation
    gsap.from(content, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
      },
    });

    // Animate stats
    const stats = content.querySelectorAll('.stat-item');
    gsap.from(stats, {
      scale: 0.8,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: stats[0],
        start: 'top 80%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Section ref={sectionRef} background="navy" padding>
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-success/20 text-success font-bold text-sm rounded-full mb-4">
            SUCCESS STORY
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            See What's Possible
          </h2>
          <p className="text-xl text-gray-300">
            Real results from a real Florida business. This is what happens
            when you implement the 6-Stage System.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <Card
          ref={contentRef}
          variant="elevated"
          className="bg-white overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image/Visual */}
            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-cyan-primary/20 to-navy-deep/20 flex items-center justify-center p-12">
              <div className="text-center">
                <Badge variant="primary" size="lg">
                  {featured.client.industry}
                </Badge>
              </div>
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-12">
              {/* Company Info */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <h3 className="text-3xl font-black text-navy-deep">
                    {featured.client.name}
                  </h3>
                  <Badge variant="secondary" size="sm">
                    {featured.client.location}
                  </Badge>
                </div>
                <p className="text-gray-600">
                  {featured.client.size} • {featured.client.yearsFounded} in business
                </p>
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-3">
                  The Challenge
                </h4>
                <p className="text-gray-700">{featured.challenge}</p>
              </div>

              {/* Solution Highlight */}
              <div className="mb-6 p-6 bg-cyan-50 rounded-lg">
                <h4 className="font-bold text-sm uppercase tracking-wide text-cyan-primary mb-3">
                  Our Solution
                </h4>
                <p className="text-gray-700 mb-4">{featured.solution}</p>
                <div className="flex flex-wrap gap-2">
                  {featured.implementation.stages.map((stageNum) => (
                    <Badge key={stageNum} variant="secondary" size="sm">
                      Stage {stageNum}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Results Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {featured.results.map((result, index) => (
                  <div
                    key={index}
                    className="stat-item p-4 bg-gradient-to-br from-success/10 to-cyan-50 rounded-lg border-l-4 border-success"
                  >
                    <div className="text-3xl font-black text-success mb-1">
                      {result.value}
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mb-6 p-6 bg-gray-50 border-l-4 border-cyan-primary rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "{featured.testimonial.quote}"
                </p>
                <div className="font-bold text-navy-deep">
                  — {featured.testimonial.name}, {featured.testimonial.title}
                </div>
              </div>

              {/* CTA */}
              <Button
                href={`/case-studies/${featured.slug}`}
                variant="primary"
                size="lg"
                className="w-full justify-center"
              >
                Read Full Case Study
              </Button>
            </div>
          </div>
        </Card>

        {/* More Case Studies Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Want to see more success stories from Florida businesses?
          </p>
          <Button
            href="/case-studies"
            variant="secondary"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20"
          >
            View All Case Studies
          </Button>
        </div>
      </Container>
    </Section>
  );
}
