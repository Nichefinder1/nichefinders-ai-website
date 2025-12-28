'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { SERVICES, CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FourPillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!section || !scrollContainer || !cardsContainer) return;

    // Horizontal scroll animation
    const cards = cardsContainer.querySelectorAll('.pillar-card');

    // Calculate total scroll distance needed
    const cardWidth = cards[0]?.getBoundingClientRect().width || 600;
    const gap = 32; // space-x-8 = 32px
    const totalScrollWidth = (cardWidth + gap) * cards.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer,
        start: 'top -65%',
        end: () => `+=${totalScrollWidth * 2.5}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(cardsContainer, {
      x: () => -(cardsContainer.scrollWidth - window.innerWidth),
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Section ref={sectionRef} background="gray" padding={false}>
      <div ref={scrollContainerRef} className="relative overflow-hidden">
        {/* Section Header */}
        <Container size="lg" className="py-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-cyan-primary/10 text-cyan-primary font-bold text-sm rounded-full mb-4">
              OUR APPROACH
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-navy-deep mb-6">
              The 4 Pillars of AI Transformation
            </h2>
            <p className="text-xl text-gray-600">
              Every business is unique, but success follows a proven path. Our
              4-pillar approach ensures you get results, not just technology.
            </p>
          </div>
        </Container>

        {/* Horizontal Scroll Cards */}
        <div className="py-20 min-h-screen flex items-center">
          <div
            ref={cardsContainerRef}
            className="flex space-x-8 pl-[10vw] md:pl-[calc(50vw-250px)] pr-[10vw] md:pr-[calc(50vw-250px)]"
            style={{ width: 'max-content' }}
          >
            {SERVICES.map((service, index) => (
              <Card
                key={service.slug}
                variant="elevated"
                className="pillar-card flex-shrink-0 w-[80vw] md:w-[500px] p-6 md:p-10 bg-white"
              >
                {/* Pillar Number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-8xl font-black text-cyan-primary/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-5xl">{service.icon}</div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-navy-deep mb-4">
                    {service.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-navy-deep uppercase text-sm tracking-wide">
                    What You Get:
                  </h4>
                  <ul className="space-y-3">
                    {service.deliverables.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 text-gray-700"
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

                {/* Details */}
                <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-navy-deep mb-3 text-sm uppercase tracking-wide">
                    What You Get:
                  </h4>
                  <p className="text-gray-700">{service.details}</p>
                </div>

                {/* CTA */}
                <Button
                  href={`/solutions/${service.slug}`}
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  Learn More About {service.name}
                </Button>
              </Card>
            ))}

            {/* Final CTA Card */}
            <Card
              variant="gradient-border"
              className="pillar-card flex-shrink-0 w-[80vw] md:w-[500px] p-6 md:p-10 bg-gradient-to-br from-cyan-primary to-navy-deep text-white flex flex-col items-center justify-center text-center"
            >
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-3xl font-black mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-md">
                Let's build a custom AI strategy that combines all four pillars
                for maximum impact.
              </p>
              <Button
                href={CALENDAR_LINK}
                external
                variant="secondary"
                size="lg"
                className="bg-white text-navy-deep hover:bg-gray-100"
              >
                Book Your Free Discovery Call
              </Button>
            </Card>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden md:flex flex-col items-center space-y-2 text-gray-400">
          <svg
            className="w-6 h-6 animate-bounce-horizontal"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-xs uppercase tracking-wider rotate-90 origin-center whitespace-nowrap">
            Scroll
          </span>
        </div>
      </div>

      {/* Custom animation for horizontal bounce */}
      <style jsx>{`
        @keyframes bounce-horizontal {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s infinite;
        }
      `}</style>
    </Section>
  );
}
