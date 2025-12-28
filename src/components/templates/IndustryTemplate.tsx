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
import type { Industry } from '@/lib/constants';
import { SIX_STAGES, CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface IndustryTemplateProps {
  industry: Industry;
}

export default function IndustryTemplate({ industry }: IndustryTemplateProps) {
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
          <div ref={heroRef} className="max-w-4xl mx-auto">
            {/* Icon */}
            <div className="text-7xl mb-6">{industry.icon}</div>

            {/* Badge */}
            <Badge variant="secondary" size="md" className="mb-6">
              {industry.businessCount}
            </Badge>

            {/* Headline with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block">AI Automation for</span>
              <span className="block text-gradient">{industry.name}</span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              {industry.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Pain Points */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              Common Challenges in {industry.name}
            </h2>
            <p className="text-xl text-gray-600">
              We understand the unique pain points facing your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((pain, index) => (
              <Card
                key={index}
                variant="elevated"
                className="p-6 bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-alert"
              >
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-alert flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold text-navy-deep">{pain}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* AI Solutions */}
      <Section background="gray" padding>
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              Our AI Solutions for {industry.name}
            </h2>
            <p className="text-xl text-gray-600">
              Tailored automation that solves your specific challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.solutions.map((solution, index) => (
              <Card key={index} variant="elevated" className="p-6 bg-white">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-cyan-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-navy-deep flex-1">
                    {solution}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Typical Results */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              Typical Results for {industry.name}
            </h2>
            <p className="text-xl text-gray-600">
              What our clients in your industry are seeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.typicalResults?.map((result, index) => (
              <Card
                key={index}
                variant="elevated"
                className="p-6 text-center bg-gradient-to-br from-success/10 to-cyan-50 border-l-4 border-success"
              >
                <div className="text-4xl font-black text-success mb-2">
                  {result.improvement}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {result.metric}
                </div>
              </Card>
            )) || (
              <p className="text-gray-600 col-span-full text-center">
                Ask us about typical results for {industry.name}
              </p>
            )}
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section background="navy" padding>
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center text-white mb-12">
            <h2 className="text-4xl font-black mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-300">
              How {industry.name} businesses use our 6-Stage System
            </p>
          </div>

          <div className="space-y-6">
            {industry.useCases?.map((useCase, index) => (
              <Card
                key={index}
                variant="glass"
                className="p-8 border border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap gap-2">
                      {useCase.stages.map((stageNum) => {
                        const stage = SIX_STAGES.find(
                          (s) => s.number === stageNum
                        );
                        return stage ? (
                          <Badge
                            key={stageNum}
                            variant="primary"
                            size="sm"
                            className="bg-cyan-primary/20 text-cyan-primary border border-cyan-primary/30"
                          >
                            {stage.icon} Stage {stageNum}: {stage.name.split(' ')[0]}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              href="/6-stage-system"
              variant="secondary"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20"
            >
              Explore Our 6-Stage System
            </Button>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gray" padding>
        <Container size="lg">
          <Card
            variant="gradient-border"
            className="p-12 bg-gradient-to-br from-cyan-50 to-blue-50 text-center"
          >
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              Ready to Transform Your {industry.name} Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Get a custom AI automation strategy tailored specifically for
              your industry and business goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={CALENDAR_LINK} external variant="primary" size="lg">
                Book Industry-Specific Consultation
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg">
                View {industry.name} Case Studies
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
