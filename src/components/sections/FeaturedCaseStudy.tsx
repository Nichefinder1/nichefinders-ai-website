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
    // Animations disabled for now
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
            Real results from a real business. This is what happens
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
            {/* Left: Visual Infographic */}
            <div className="relative h-auto bg-navy-deep p-8 md:p-12 flex items-center justify-center">
              <div className="w-full max-w-md">
                {/* Industry Badge at Top */}
                <div className="text-center mb-8">
                  <Badge variant="secondary" size="lg" className="bg-white/10 text-white border border-white/30">
                    {featured.client.industry}
                  </Badge>
                </div>

                {/* Before & After Transformation Visual */}
                <div className="space-y-8">
                  {/* Before State */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/80">Before</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent ml-4"></div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <svg className="w-12 h-12 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-white/80 leading-relaxed">Manual processes, missed opportunities, inefficient workflows</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Transformation Arrow */}
                  <div className="flex justify-center py-4">
                    <div className="relative inline-flex items-center justify-center">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>

                      {/* Arrow Container */}
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-full p-4 border border-white/20">
                        <svg className="w-6 h-6 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* After State with Results */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">After AI Automation</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-white/50 to-transparent ml-4"></div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 border border-white/40 shadow-lg">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex-shrink-0">
                          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-white font-semibold leading-relaxed">Automated, optimized, revenue-generating system</p>
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/30">
                        {featured.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-black text-white mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs text-white/90 uppercase tracking-wide font-semibold">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <div className="text-center pt-4">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/30">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-semibold text-white">
                        Completed in {featured.implementation.duration}
                      </span>
                    </div>
                  </div>
                </div>
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
            Want to see more success stories?
          </p>
          <Button
            href="/case-studies"
            variant="secondary"
            size="lg"
          >
            View All Case Studies
          </Button>
        </div>
      </Container>
    </Section>
  );
}
