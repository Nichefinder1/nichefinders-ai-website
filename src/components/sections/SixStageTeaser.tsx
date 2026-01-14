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
    // Animations disabled for now
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Section ref={sectionRef} background="navy" padding>
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-cyan-light/20 text-cyan-light font-bold text-sm rounded-full mb-4">
            OUR PROPRIETARY FRAMEWORK
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            <span className="block">The 6-Stage</span>
            <span className="block">AI Automation System</span>
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
          {/* Desktop: Simple Grid with Step Numbers */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6">
              {SIX_STAGES.map((stage, index) => (
                <div key={stage.number} className="stage-card relative">
                  {/* Step number badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-cyan-primary rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg z-10">
                    {stage.number}
                  </div>
                  <Card
                    variant="glass"
                    className="p-6 pt-8 h-full border border-white/20 hover:border-cyan-primary/50 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="text-4xl mb-4">{stage.icon}</div>

                    {/* Stage Name */}
                    <h3 className="text-lg font-bold text-white mb-3">
                      {stage.name}
                    </h3>

                    {/* CTA Link */}
                    <a
                      href={`/6-stage-system#stage-${stage.number}`}
                      className="text-xs text-cyan-light font-semibold underline decoration-1 underline-offset-2 hover:text-white transition-colors flex items-center gap-1 mt-3"
                    >
                      See How It Works
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Card>
                  {/* Connecting line to next card (except last in row and last overall) */}
                  {index < 5 && index !== 2 && (
                    <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-light/60 to-cyan-light/20"></div>
                  )}
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
                    <div className="w-16 h-16 bg-cyan-light/20 rounded-full flex items-center justify-center text-2xl mb-2">
                      {stage.icon}
                    </div>
                    <div className="text-2xl font-black text-cyan-light text-center">
                      {String(stage.number).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {stage.name}
                    </h3>
                    <a
                      href={`/6-stage-system#stage-${stage.number}`}
                      className="text-xs text-cyan-light font-semibold underline decoration-1 underline-offset-2 hover:text-white transition-colors flex items-center gap-1"
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
              className="min-w-[240px]"
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
