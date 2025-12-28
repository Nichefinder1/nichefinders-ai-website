'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import type { Service } from '@/lib/constants';
import { CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SolutionTemplateProps {
  service: Service;
}

export default function SolutionTemplate({ service }: SolutionTemplateProps) {
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
            <div className="text-7xl mb-6">{service.icon}</div>

            {/* Badge */}
            <Badge variant="secondary" size="md" className="mb-6">
              SOLUTION
            </Badge>

            {/* Headline with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block text-gradient">{service.name}</span>
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
                Book Your Free Discovery Call
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
              {service.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Ideal For */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              What We Provide
            </h2>
            <p className="text-xl text-gray-600">{service.details}</p>
          </div>
        </Container>
      </Section>

      {/* Key Features */}
      <Section background="gray" padding>
        <Container size="lg">
          <h2 className="text-4xl font-black text-navy-deep mb-12 text-center">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((feature, index) => (
              <Card key={index} variant="elevated" className="p-6 bg-white">
                <div className="flex items-start space-x-4">
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
                  <div>
                    <h3 className="font-bold text-navy-deep mb-2">
                      {feature}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section background="white" padding>
        <Container size="lg">
          <h2 className="text-4xl font-black text-navy-deep mb-12 text-center">
            Our Process
          </h2>
          <div className="space-y-8">
            {service.process?.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-primary to-navy-deep rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg">
                  {index + 1}
                </div>
                <Card variant="elevated" className="flex-1 p-6 bg-white">
                  <h3 className="text-xl font-bold text-navy-deep mb-2">
                    {step.step}
                  </h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                </Card>
              </div>
            )) || (
              <p className="text-gray-600 text-center">
                Contact us to learn about our process for {service.title}
              </p>
            )}
          </div>
        </Container>
      </Section>

      {/* Deliverables */}
      <Section background="navy" padding>
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto text-white mb-12">
            <h2 className="text-4xl font-black mb-6">
              What You'll Receive
            </h2>
            <p className="text-xl text-gray-300">
              Complete transparency on deliverables and outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((deliverable, index) => (
              <Card
                key={index}
                variant="glass"
                className="p-6 border border-white/20"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {deliverable}
                </h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="white" padding>
        <Container size="lg">
          <Card
            variant="gradient-border"
            className="p-12 bg-gradient-to-br from-cyan-50 to-blue-50 text-center"
          >
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Book a free discovery call to discuss your needs and see if{' '}
              {service.name} is right for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={CALENDAR_LINK} external variant="primary" size="lg">
                Book Free Discovery Call
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg">
                View Success Stories
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
