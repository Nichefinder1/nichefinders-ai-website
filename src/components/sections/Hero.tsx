'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import { CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const cta = ctaRef.current;
    const badges = badgesRef.current;
    const background = backgroundRef.current;

    if (!hero || !headline || !subheadline || !cta || !badges || !background)
      return;

    // Initial animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate elements on load
    tl.from(headline.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    })
      .from(
        subheadline,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.5'
      )
      .from(
        cta.children,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        },
        '-=0.4'
      )
      .from(
        badges.children,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        '-=0.3'
      );

    // Parallax scroll effect on background
    gsap.to(background, {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Fade out hero content on scroll
    gsap.to([headline, subheadline, cta, badges], {
      opacity: 0,
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '80% top',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-24"
    >
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{ willChange: 'transform' }}
      >
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
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div
            ref={badgesRef}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 px-4"
          >
            <Badge variant="secondary" size="sm" className="whitespace-nowrap text-[11px] sm:text-sm px-3 py-1.5 flex items-center gap-1.5">
              <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Florida's #1 AI Automation Agency</span>
            </Badge>
            <Badge variant="secondary" size="sm" className="whitespace-nowrap text-[11px] sm:text-sm px-3 py-1.5 flex items-center gap-1.5">
              <Icon name="trending-up" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>400% Average ROI</span>
            </Badge>
            <Badge variant="secondary" size="sm" className="whitespace-nowrap text-[11px] sm:text-sm px-3 py-1.5 flex items-center gap-1.5">
              <Icon name="users" className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>50+ Businesses Transformed</span>
            </Badge>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
          >
            <span className="block">Transform Your Business</span>
            <span className="block text-gradient">
              With AI That Actually Works
            </span>
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
          <p
            ref={subheadlineRef}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Stop losing revenue to manual processes. Our proven 6-Stage System
            automates lead capture, follow-up, and conversion—so you close more
            deals while working less.
          </p>

          {/* Stats */}
          <div ref={ctaRef} className="mt-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '78%', label: 'Of leads go unanswered' },
              { value: '400%', label: 'Average ROI for clients' },
              { value: '<5min', label: 'Response time with AI' },
            ].map((stat, index) => (
              <div key={index} className="text-center relative z-20">
                <div className="text-4xl md:text-5xl font-black text-cyan-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
