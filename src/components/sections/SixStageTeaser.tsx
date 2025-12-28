'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { SIX_STAGES, CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SixStageTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const stagesRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stages = stagesRef.current;

    if (!section || !stages) return;

    // Animate stage cards on scroll
    const stageCards = stages.querySelectorAll('.stage-card');

    stageCards.forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          onEnter: () => setActiveStage(index),
        },
      });
    });

    // Animate connecting lines
    const lines = stages.querySelectorAll('.stage-line');
    lines.forEach((line) => {
      gsap.from(line, {
        scaleX: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: line,
          start: 'top 75%',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Section ref={sectionRef} background="navy" padding>
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-primary/20 text-cyan-primary font-bold text-sm rounded-full mb-4">
            OUR PROPRIETARY FRAMEWORK
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            The 6-Stage AI Automation System
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Most agencies throw AI at your business and hope it works. We
            follow a proven framework that covers every touchpoint in your
            customer journey—from first contact to repeat business.
          </p>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-white font-semibold">
              Used by 50+ Florida Businesses
            </span>
          </div>
        </div>

        {/* Stages */}
        <div ref={stagesRef} className="relative">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8 relative">
              {SIX_STAGES.map((stage, index) => (
                <div key={stage.number} className="flex flex-col items-center">
                  <div className="stage-card w-full">
                    <Card
                      variant="glass"
                      className={`p-6 transition-all duration-300 ${
                        activeStage === index
                          ? 'border-2 border-cyan-primary scale-105'
                          : 'border border-white/20'
                      }`}
                    >
                      {/* Stage Number */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-5xl font-black text-cyan-primary/40">
                          {String(stage.number).padStart(2, '0')}
                        </div>
                        <div className="text-3xl">{stage.icon}</div>
                      </div>

                      {/* Stage Name */}
                      <h3 className="text-lg font-bold text-white mb-3">
                        {stage.name}
                      </h3>

                      {/* CTA Link */}
                      <a
                        href="/6-stage-system"
                        className="text-xs text-cyan-primary font-semibold underline decoration-1 underline-offset-2 hover:text-cyan-light transition-colors flex items-center gap-1 mt-3"
                      >
                        See How It Works
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="lg:hidden space-y-6">
            {SIX_STAGES.map((stage) => (
              <Card
                key={stage.number}
                variant="glass"
                className="stage-card p-6 border border-white/20"
              >
                <div className="flex items-start space-x-4">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-cyan-primary/20 rounded-full flex items-center justify-center text-2xl mb-2">
                      {stage.icon}
                    </div>
                    <div className="text-2xl font-black text-cyan-primary text-center">
                      {String(stage.number).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {stage.name}
                    </h3>
                    <a
                      href="/6-stage-system"
                      className="text-xs text-cyan-primary font-semibold underline decoration-1 underline-offset-2 hover:text-cyan-light transition-colors flex items-center gap-1"
                    >
                      See How It Works
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '',
              title: 'Complete Coverage',
              description:
                'Every customer touchpoint is automated—no gaps, no missed opportunities.',
            },
            {
              icon: '',
              title: 'Data-Driven',
              description:
                'Real-time analytics show exactly where your AI is working hardest.',
            },
            {
              icon: '',
              title: 'Lightning Fast',
              description:
                'Respond to leads in under 60 seconds, 24/7, with zero manual work.',
            },
          ].map((feature, index) => (
            <Card
              key={index}
              variant="glass"
              className="p-6 text-center border border-white/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            Want to see exactly how each stage works for your business?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/6-stage-system"
              variant="primary"
              size="lg"
              className="min-w-[240px] shadow-xl shadow-cyan-primary/30"
            >
              Explore the Full System
            </Button>
            <Button
              href={CALENDAR_LINK}
              external
              variant="secondary"
              size="lg"
              className="min-w-[240px] bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20"
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
