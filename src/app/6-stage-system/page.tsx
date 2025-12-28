'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { SIX_STAGES, CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SixStageSystemPage() {
  const [activeStage, setActiveStage] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Animate hero content
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
      {/* Hero Section */}
      <Section background="gradient" padding>
        <Container size="lg">
          <div
            ref={heroRef}
            className="text-center max-w-4xl mx-auto text-white py-20"
          >
            <Badge variant="secondary" size="md" className="mb-6 bg-white/20 text-white">
              OUR PROPRIETARY FRAMEWORK
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              The 6-Stage AI Automation System
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Most agencies throw AI at your business and hope it works. We
              follow a proven framework that covers every touchpoint in your
              customer journey—from first contact to repeat business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: '', label: 'Complete Coverage', value: '100%' },
                { icon: '', label: 'Data-Driven', value: 'Real-Time' },
                { icon: '', label: 'Response Time', value: '<60s' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-black mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button
              href="#stages"
              variant="primary"
              size="lg"
              className="bg-white text-navy-deep hover:bg-gray-100"
            >
              Explore Each Stage
            </Button>
          </div>
        </Container>
      </Section>

      {/* Stage Overview Navigation */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {SIX_STAGES.map((stage, index) => (
              <button
                key={stage.number}
                onClick={() => {
                  setActiveStage(index);
                  document
                    .getElementById(`stage-${stage.number}`)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  activeStage === index
                    ? 'border-cyan-primary bg-cyan-50 shadow-lg scale-105'
                    : 'border-gray-200 bg-white hover:border-cyan-primary/50'
                }`}
              >
                <div className="text-3xl mb-2">{stage.icon}</div>
                <div className="text-xs font-bold text-gray-500 mb-1">
                  STAGE {stage.number}
                </div>
                <div className="text-sm font-semibold text-navy-deep leading-tight">
                  {stage.name.split(' ').slice(0, 2).join(' ')}
                </div>
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Detailed Stage Breakdown */}
      <div id="stages" ref={stagesRef}>
        {SIX_STAGES.map((stage, index) => (
          <Section
            key={stage.number}
            id={`stage-${stage.number}`}
            background={index % 2 === 0 ? 'white' : 'gray'}
            padding
          >
            <Container size="lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Stage Info */}
                <div className="lg:sticky lg:top-24">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-primary to-navy-deep rounded-2xl flex items-center justify-center text-4xl shadow-xl">
                      {stage.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-cyan-primary uppercase tracking-wide">
                        Stage {stage.number} of 6
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-navy-deep">
                        {stage.name}
                      </h2>
                    </div>
                  </div>

                  <div className="mb-8 p-6 bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-alert rounded-lg">
                    <h3 className="font-bold text-alert uppercase text-sm tracking-wide mb-3">
                      The Problem
                    </h3>
                    <p className="text-gray-700">{stage.problem}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-bold text-navy-deep text-xl mb-4">
                      Key Metrics Improved
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {stage.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-success/10 rounded-lg border-l-4 border-success"
                        >
                          <div className="text-2xl font-black text-success mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-700">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-navy-deep text-white rounded-xl">
                    <h3 className="font-bold text-lg mb-3">
                      Real-World Example
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {stage.realWorldExample}
                    </p>
                    <div className="flex items-center space-x-2 text-cyan-primary text-sm">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Used by 50+ Florida businesses</span>
                    </div>
                  </div>
                </div>

                {/* Right: Solutions */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-navy-deep mb-6">
                    Our AI Solutions
                  </h3>

                  {stage.solutions.map((solution, idx) => (
                    <Card
                      key={idx}
                      variant="elevated"
                      className="p-6 bg-white hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-navy-deep">
                          {solution.name}
                        </h4>
                        <Badge variant="primary" size="sm">
                          AI-Powered
                        </Badge>
                      </div>

                      <p className="text-gray-700 mb-4">
                        {solution.description}
                      </p>

                      <div className="mb-4 p-4 bg-cyan-50 rounded-lg">
                        <div className="text-xs font-bold text-cyan-primary uppercase tracking-wide mb-2">
                          Technology Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {solution.tech.split(', ').map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-cyan-primary/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                          Key Features
                        </div>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIdx) => (
                            <li
                              key={featureIdx}
                              className="flex items-start space-x-2 text-sm text-gray-700"
                            >
                              <svg
                                className="w-5 h-5 text-cyan-primary flex-shrink-0 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        ))}
      </div>

      {/* How It All Works Together */}
      <Section background="navy" padding>
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto text-white mb-12">
            {/* Subtle Logo Watermark */}
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16 opacity-40">
                <Image
                  src="/logo.svg"
                  alt="NicheFinders AI"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              How It All Works Together
            </h2>
            <p className="text-xl text-gray-300">
              Each stage builds on the previous one, creating a seamless
              customer journey that converts more leads with less manual work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '',
                title: 'Seamless Integration',
                description:
                  'All 6 stages work together as one unified system, sharing data and insights.',
              },
              {
                icon: '',
                title: 'Real-Time Analytics',
                description:
                  'Dashboard shows exactly where each lead is in the journey and what actions to take.',
              },
              {
                icon: '',
                title: 'Personalized Automation',
                description:
                  'AI adapts messaging and timing based on customer behavior and preferences.',
              },
              {
                icon: '',
                title: 'Instant Response',
                description:
                  'From lead capture to follow-up, responses happen in under 60 seconds.',
              },
              {
                icon: '',
                title: 'Enterprise Security',
                description:
                  'Bank-level encryption and GDPR-compliant data handling throughout.',
              },
              {
                icon: '',
                title: 'Continuous Improvement',
                description:
                  'AI learns from every interaction, constantly optimizing performance.',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                variant="glass"
                className="p-6 text-center border border-white/20"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding>
        <Container size="lg">
          <Card
            variant="gradient-border"
            className="p-12 bg-gradient-to-br from-cyan-50 to-blue-50 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-black text-navy-deep mb-4">
                Ready to Implement the 6-Stage System?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Book a discovery call and we'll show you exactly how each
                stage can transform your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button href={CALENDAR_LINK} external variant="primary" size="lg">
                  Book Your Discovery Call
                </Button>
                <Button href="/case-studies" variant="secondary" size="lg">
                  See Success Stories
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>400% average ROI</span>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
