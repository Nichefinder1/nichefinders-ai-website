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
        start: 'top -55%',
        end: () => `+=${totalScrollWidth * 1.2}`,
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
            className="flex space-x-8 pl-[10vw] md:pl-[calc(50vw-220px)] pr-[10vw] md:pr-[calc(50vw-220px)]"
            style={{ width: 'max-content' }}
          >
            {SERVICES.map((service, index) => {
              // Dynamic icons for each pillar
              const pillarIcons: { [key: string]: JSX.Element } = {
                'ai-consulting': (
                  <svg className="w-16 h-16 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                'custom-ai-development': (
                  <svg className="w-16 h-16 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                'ai-powered-marketing': (
                  <svg className="w-16 h-16 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                'ai-education-training': (
                  <svg className="w-16 h-16 text-cyan-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              };

              return (
              <Card
                key={service.slug}
                variant="elevated"
                className="pillar-card flex-shrink-0 w-[80vw] md:w-[440px] p-6 md:p-7 bg-white"
              >
                {/* Pillar Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-cyan-primary/10 rounded-xl">
                    {pillarIcons[service.slug]}
                  </div>
                  <div className="text-4xl">{service.icon}</div>
                </div>

                {/* Content */}
                <div className="mb-5">
                  <h3 className="text-2xl font-black text-navy-deep mb-3">
                    {service.name}
                  </h3>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-2 mb-5">
                  <h4 className="font-bold text-navy-deep uppercase text-sm tracking-wide">
                    What You Get:
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-gray-700 text-sm leading-relaxed"
                      >
                        <svg
                          className="w-4 h-4 text-cyan-primary flex-shrink-0 mt-0.5"
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
                <div className="mb-5 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-navy-deep mb-2 text-sm uppercase tracking-wide">
                    What You Get:
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.details}</p>
                </div>

                {/* CTA */}
                <Button
                  href={`/solutions/${service.slug}`}
                  variant="primary"
                  size="md"
                  className="w-full justify-center text-base"
                >
                  Learn More About {service.name}
                </Button>
              </Card>
              );
            })}

            {/* Final CTA Card */}
            <Card
              variant="gradient-border"
              className="pillar-card flex-shrink-0 w-[80vw] md:w-[440px] p-6 md:p-7 bg-gradient-to-br from-cyan-primary to-navy-deep text-white flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-xl font-black mb-2">
                Ready to Transform Your Business?
              </h3>
              <p className="text-sm mb-4 text-white/90 max-w-xs leading-snug">
                Let's build a custom AI strategy that combines all four pillars
                for maximum impact.
              </p>
              <Button
                href={CALENDAR_LINK}
                external
                variant="secondary"
                size="md"
                className="bg-white text-navy-deep hover:bg-gray-100 text-sm"
              >
                Book Your Discovery Call
              </Button>
            </Card>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden md:flex flex-col items-center gap-12">
          {/* Arrow with background */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-primary/10 rounded-full blur-lg"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-3 border border-gray-200 shadow-lg">
              <svg
                className="w-5 h-5 text-cyan-primary animate-bounce-horizontal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Scroll text */}
          <span className="text-xs font-semibold uppercase tracking-[0.2em] rotate-90 origin-center whitespace-nowrap text-gray-500">
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
