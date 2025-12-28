'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    // Fade in animation
    gsap.from(content.children, {
      y: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Section ref={sectionRef} background="gradient" padding>
      <Container size="lg">
        <div
          ref={contentRef}
          className="text-center max-w-4xl mx-auto text-white"
        >
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white font-bold text-sm rounded-full mb-6">
            READY TO TRANSFORM YOUR BUSINESS?
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Stop Losing Money to Manual Processes
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Every day without AI automation is another day of missed leads,
            delayed follow-ups, and lost revenue. Let's change that.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '',
                text: 'Free Discovery Call',
                subtext: 'No pressure, just insights',
              },
              {
                icon: '',
                text: 'Custom AI Strategy',
                subtext: 'Built for your business',
              },
              {
                icon: '',
                text: 'ROI Projection',
                subtext: 'See your potential gains',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-lg mb-1">{item.text}</div>
                <div className="text-sm text-white/80">{item.subtext}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              href={CALENDAR_LINK}
              variant="primary"
              size="lg"
              className="min-w-[280px] shadow-2xl shadow-black/30 bg-white text-navy-deep hover:bg-gray-100 flex items-center justify-center gap-2"
              external
            >
              <span>Book Your Free Discovery Call</span>
              <Icon name="arrow-right" className="w-5 h-5" />
            </Button>
            <Button
              href="/6-stage-system"
              variant="secondary"
              size="lg"
              className="min-w-[280px] bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 flex items-center justify-center gap-2"
            >
              <span>Learn About Our System</span>
              <Icon name="arrow-right" className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
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
              <span>Florida-based team</span>
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
              <span>Proven results in 4 industries</span>
            </div>
          </div>

          {/* Urgency Note */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl">
            <p className="text-lg font-semibold mb-2">
              ⏰ Limited Availability
            </p>
            <p className="text-white/90">
              We only take on 5 new clients per month to ensure exceptional
              results. Book your discovery call today to secure your spot.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
