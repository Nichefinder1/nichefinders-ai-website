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

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stats = statsRef.current;

    if (!section || !stats) return;

    // Animated counters
    const statElements = stats.querySelectorAll('.stat-number');

    statElements.forEach((element) => {
      const target = parseInt(
        element.getAttribute('data-target') || '0',
        10
      );
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section ref={sectionRef} background="gray" padding>
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-success/10 text-success font-bold text-sm rounded-full mb-4">
            PROVEN RESULTS
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-deep mb-6">
            Real Businesses, Real Results
          </h2>
          <p className="text-xl text-gray-600">
            Don't take our word for it. See what Florida business owners are
            saying about their AI transformation.
          </p>
        </div>

        {/* Statistics Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {STATISTICS.map((stat, index) => (
            <Card
              key={index}
              variant="elevated"
              className="p-6 text-center bg-white"
            >
              <div className="text-5xl mb-2">{stat.icon}</div>
              <div
                className="stat-number text-3xl md:text-4xl font-black text-cyan-primary mb-2"
                data-target={stat.target}
                data-suffix={stat.suffix}
                data-prefix={stat.prefix}
              >
                {stat.prefix}0{stat.suffix}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div ref={testimonialsRef} className="relative">
          {/* Main Testimonial Display */}
          <Card variant="glass" className="p-8 md:p-12 bg-white border-2 border-cyan-primary/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-16 h-16 text-cyan-primary/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6 leading-relaxed">
                  "{TESTIMONIALS[currentTestimonial].quote}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-navy-deep text-lg">
                      {TESTIMONIALS[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {TESTIMONIALS[currentTestimonial].title},{' '}
                      {TESTIMONIALS[currentTestimonial].company}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {TESTIMONIALS[currentTestimonial].industry} •{' '}
                      {TESTIMONIALS[currentTestimonial].location}
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="hidden md:block px-6 py-3 bg-success/10 border border-success/30 rounded-lg">
                    <div className="text-2xl font-black text-success">
                      {TESTIMONIALS[currentTestimonial].result}
                    </div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">
                      {TESTIMONIALS[currentTestimonial].metric}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Testimonial Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            {/* Dots */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-primary w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
                  )
                }
                className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-cyan-primary hover:text-cyan-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-cyan-primary hover:text-cyan-primary transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5"
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
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '',
              title: 'Industry Leaders',
              description: 'Working with top businesses across 4 major Florida industries',
            },
            {
              icon: '',
              title: 'Enterprise Security',
              description: 'Bank-level encryption and GDPR-compliant data handling',
            },
            {
              icon: '',
              title: '24/7 Support',
              description: 'Dedicated Florida-based team always ready to help',
            },
          ].map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{indicator.icon}</div>
              <h3 className="text-xl font-bold text-navy-deep mb-2">
                {indicator.title}
              </h3>
              <p className="text-gray-600">{indicator.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
