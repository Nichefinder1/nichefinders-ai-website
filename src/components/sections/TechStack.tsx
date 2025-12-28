'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { TECH_STACK } from '@/lib/constants';

export default function TechStack() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const items = marquee.querySelectorAll('.tech-item');
    const totalWidth = Array.from(items).reduce(
      (acc, item) => acc + (item as HTMLElement).offsetWidth,
      0
    );

    // Duplicate items for seamless loop
    const clone = marquee.innerHTML;
    marquee.innerHTML += clone;

    // Animate infinite scroll
    gsap.to(marquee, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    // Pause on hover
    const handleMouseEnter = () => gsap.to(marquee, { timeScale: 0, duration: 0.3 });
    const handleMouseLeave = () => gsap.to(marquee, { timeScale: 1, duration: 0.3 });

    marquee.addEventListener('mouseenter', handleMouseEnter);
    marquee.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      marquee.removeEventListener('mouseenter', handleMouseEnter);
      marquee.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Section background="white" padding>
      <Container size="full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 px-6">
          <span className="inline-block px-4 py-1.5 bg-navy-deep/10 text-navy-deep font-bold text-sm rounded-full mb-4">
            OUR TECHNOLOGY
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-deep mb-6">
            Powered by Best-in-Class Tools
          </h2>
          <p className="text-xl text-gray-600">
            We leverage the most powerful AI and automation platforms to build
            custom solutions that actually work for your business.
          </p>
        </div>

        {/* Infinite Scroll Marquee */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Container */}
          <div
            ref={marqueeRef}
            className="flex items-center space-x-12"
            style={{ willChange: 'transform' }}
          >
            {TECH_STACK.map((tech, index) => (
              <div
                key={index}
                className="tech-item flex-shrink-0 group cursor-pointer"
              >
                <div className="px-8 py-6 bg-white border-2 border-gray-200 rounded-xl hover:border-cyan-primary hover:shadow-lg transition-all duration-300 flex items-center space-x-4">
                  {/* Icon/Logo Placeholder */}
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-primary/20 to-navy-deep/20 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>

                  {/* Tech Info */}
                  <div>
                    <div className="font-black text-navy-deep text-lg group-hover:text-cyan-primary transition-colors">
                      {tech.name}
                    </div>
                    <div className="text-sm text-gray-600">{tech.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Categories Grid */}
        <div className="mt-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: '',
                title: 'AI & LLMs',
                description: 'Claude, GPT-4, Custom Models',
                count: '5+ platforms',
              },
              {
                icon: '',
                title: 'Automation',
                description: 'n8n, Make, Zapier',
                count: '1000+ integrations',
              },
              {
                icon: '',
                title: 'Communication',
                description: 'Twilio, WhatsApp, Email',
                count: 'Omnichannel',
              },
              {
                icon: '',
                title: 'Analytics',
                description: 'Real-time dashboards & insights',
                count: 'Full visibility',
              },
            ].map((category, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-cyan-50 transition-colors"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-navy-deep mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-2">{category.description}</p>
                <div className="text-sm font-semibold text-cyan-primary">
                  {category.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 px-6 text-center max-w-2xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-primary/30 rounded-2xl">
            <h3 className="text-2xl font-black text-navy-deep mb-3">
              Custom Tech Stack for Every Client
            </h3>
            <p className="text-gray-700 mb-6">
              We don't force you into our favorite tools. We analyze your
              existing systems and build the perfect automation stack for your
              unique needs.
            </p>
            <a
              href="/6-stage-system"
              className="inline-flex items-center text-cyan-primary font-bold hover:text-cyan-dark transition-colors"
            >
              <span>See How We Choose the Right Tools</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
