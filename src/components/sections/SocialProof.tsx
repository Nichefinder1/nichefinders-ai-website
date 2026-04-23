'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { TESTIMONIALS, STATISTICS } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const statIcons = [
  // Clients Served – users
  <svg key="clients" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // Average ROI – trending up
  <svg key="roi" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>,
  // Automation Running – clock / 24/7
  <svg key="automation" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>,
  // Client Satisfaction – star
  <svg key="satisfaction" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
];

const trustIcons = [
  // Industry Leaders – building
  <svg key="leaders" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>,
  // Enterprise Security – shield
  <svg key="security" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  // 24/7 Support – headphones
  <svg key="support" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>,
];

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stats = statsRef.current;

    if (!section || !stats) return;

    const statElements = stats.querySelectorAll('.stat-number');

    statElements.forEach((element) => {
      const target = parseInt(element.getAttribute('data-target') || '0', 10);
      const obj = { value: 0 };

      gsap.to(obj, {
        value: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        },
        onUpdate: () => {
          const suffix = element.getAttribute('data-suffix') || '';
          const prefix = element.getAttribute('data-prefix') || '';
          element.textContent = prefix + Math.floor(obj.value).toLocaleString() + suffix;
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section ref={sectionRef} background="navy-medium" padding glow>
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-success/10 text-success font-bold text-sm rounded-full mb-4">
            PROVEN RESULTS
          </span>
          <h2 className="font-header text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Businesses, Real Results
          </h2>
          <p className="text-xl text-gray-300">
            Don&apos;t take our word for it. See what business owners are
            saying about their AI transformation.
          </p>
        </div>

        {/* Statistics Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {STATISTICS.map((stat, index) => (
            <Card
              key={index}
              variant="elevated-dark"
              className="p-6 text-center"
            >
              <div className="flex justify-center mb-3 text-orange-cta">
                {statIcons[index]}
              </div>
              <div
                className="stat-number text-3xl md:text-4xl font-black text-orange-cta mb-2"
                data-target={stat.target}
                data-suffix={stat.suffix}
                data-prefix={stat.prefix}
              >
                {stat.prefix}0{stat.suffix}
              </div>
              <div className="text-sm text-gray-300 font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Card variant="elevated-dark" className="p-8 md:p-12 border border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-16 h-16 text-orange-cta/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-gray-200 font-medium mb-6 leading-relaxed">
                  &ldquo;{TESTIMONIALS[currentTestimonial].quote}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-lg">
                      {TESTIMONIALS[currentTestimonial].name}
                    </div>
                    <div className="text-gray-300">
                      {TESTIMONIALS[currentTestimonial].title},{' '}
                      {TESTIMONIALS[currentTestimonial].company}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {TESTIMONIALS[currentTestimonial].industry} &bull;{' '}
                      {TESTIMONIALS[currentTestimonial].location}
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="hidden md:block px-6 py-3 bg-success/10 border border-success/30 rounded-lg">
                    <div className="text-2xl font-black text-success">
                      {TESTIMONIALS[currentTestimonial].result}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      {TESTIMONIALS[currentTestimonial].metric}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Testimonial Navigation */}
          {TESTIMONIALS.length > 1 && (
            <div className="flex items-center justify-center mt-8 space-x-4">
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-orange-cta w-8'
                        : 'bg-white/30 hover:bg-white/50 w-3'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) =>
                      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
                    )
                  }
                  className="w-10 h-10 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white hover:border-orange-cta hover:text-orange-cta transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentTestimonial((prev) =>
                      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="w-10 h-10 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white hover:border-orange-cta hover:text-orange-cta transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Industry Leaders',
              description: 'Working with top businesses across 4 major industries nationwide',
            },
            {
              title: 'Enterprise Security',
              description: 'Bank-level encryption and GDPR-compliant data handling',
            },
            {
              title: '24/7 Support',
              description: 'Dedicated team always ready to help, wherever you are',
            },
          ].map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-orange-cta">
                {trustIcons[index]}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {indicator.title}
              </h3>
              <p className="text-gray-300">{indicator.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
