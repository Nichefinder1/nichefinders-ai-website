'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const background = backgroundRef.current;

    if (!hero || !background) return;

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40"
      style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 45%, #001A3A 100%)' }}
    >
      {/* Parallax background layer */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{ willChange: 'transform' }}
      >
        {/* Blue radial glow from top center */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.22) 0%, transparent 55%)' }}
          aria-hidden="true"
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full pb-24 md:pb-32">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">
          Nichefinders AI Agency
        </p>

        {/* Headline */}
        <h1
          className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6 whitespace-pre-line"
        >
          {'Your Business Is Manual.\n'}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(90deg, #C8D9E6 0%, #7aafd4 100%)' }}
          >
            AI Changes That.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          We architect, install, and operate a custom AI Operating System built around your business
          so you stop losing revenue to missed leads and manual work.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={CALENDAR_LINK}
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-cta hover:bg-orange-hover text-white font-bold text-base rounded shadow-cta-glow-lg transition-all duration-300 hover:-translate-y-0.5 min-w-[260px]"
          >
            Book a Discovery Call
          </Link>
          <Link
            href="/ai-os-partner-program"
            className="inline-flex items-center justify-center px-8 py-[0.9rem] text-white border border-white/35 hover:border-white hover:bg-white/5 rounded font-semibold text-base transition-all duration-200 min-w-[260px]"
          >
            See the AI OS Partner Program
          </Link>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex" aria-hidden="true">
        <span className="text-[0.7rem] tracking-[0.15em] uppercase text-white/40">Scroll</span>
        <div
          className="w-[2px] h-12 opacity-60"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), #CC5500)' }}
        />
      </div>
    </section>
  );
}
