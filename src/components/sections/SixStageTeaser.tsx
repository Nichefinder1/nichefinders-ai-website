'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { SIX_STAGES, CALENDAR_LINK } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stageIcons = [
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 4h18l-7 8v6l-4-2V12L3 4z" />
    <path d="M1 2l2 2M23 2l-2 2" strokeWidth="1.2" strokeOpacity="0.6" />
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="2.5" />
    <path d="M3 21v-1a6 6 0 016-6h1" />
    <path d="M15 10c1.1.9 1.8 2.3 1.8 3.8" strokeOpacity="0.5" />
    <path d="M17.5 7.5c2 1.6 3.2 4 3.2 6.7" strokeOpacity="0.7" />
    <path d="M20 5c3 2.3 4.8 5.8 4.8 9.8" strokeOpacity="0.4" />
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="14" height="13" rx="2" />
    <path d="M6 2v2M12 2v2M2 9h14" />
    <circle cx="18" cy="18" r="5" />
    <path d="M18 15.5v2.8l1.8 1.8" strokeWidth="1.3" />
  </svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 20h18" />
    <rect x="4" y="13" width="3" height="7" rx="0.5" />
    <rect x="10" y="9" width="3" height="11" rx="0.5" />
    <rect x="16" y="4" width="3" height="16" rx="0.5" />
    <path d="M19 4l-3-3m3 0l-3 0m3 0l0 3" strokeWidth="1.3" />
  </svg>,
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.8 6.5H22l-5.8 4.2 2.2 6.8L12 16l-6.4 3.5 2.2-6.8L2 8.5h7.2L12 2z" />
  </svg>,
  <svg key="6" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 5A8 8 0 0120 11" />
    <path d="M20 11l2-2M20 11l-2-2" strokeWidth="1.2" />
    <path d="M6.5 19A8 8 0 014 13" />
    <path d="M4 13l-2 2M4 13l2 2" strokeWidth="1.2" />
    <path d="M12 9c0 0-3 2-3 4.5a3 3 0 006 0C15 11 12 9 12 9z" />
  </svg>,
];

function StageRow({ stage, index, icon }: { stage: typeof SIX_STAGES[0]; index: number; icon: React.ReactNode }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 60%',
      end: 'bottom 40%',
      onEnter: () => setActive(true),
      onLeave: () => setActive(false),
      onEnterBack: () => setActive(true),
      onLeaveBack: () => setActive(false),
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={rowRef}
      className="relative flex items-center gap-8 md:gap-16 py-8 md:py-10 transition-all duration-500"
      style={{
        borderLeft: `2px solid ${active ? '#CC5500' : 'rgba(255,255,255,0.08)'}`,
        paddingLeft: '2rem',
        opacity: active ? 1 : 0.4,
        transform: active ? 'translateX(0)' : 'translateX(-4px)',
      }}
    >
      {/* Left border glow when active */}
      {active && (
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px] pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #CC5500 30%, #FF8C42 70%, transparent)',
            boxShadow: '0 0 12px rgba(204,85,0,0.6)',
          }}
        />
      )}

      {/* Icon */}
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500"
        style={{
          background: active ? 'rgba(204,85,0,0.15)' : 'rgba(255,255,255,0.04)',
          border: `1.5px solid ${active ? 'rgba(204,85,0,0.5)' : 'rgba(255,255,255,0.1)'}`,
          color: active ? '#CC5500' : 'rgba(255,255,255,0.3)',
          boxShadow: active ? '0 0 18px rgba(204,85,0,0.2)' : 'none',
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded mb-2 transition-all duration-500"
          style={{
            background: active ? 'rgba(204,85,0,0.12)' : 'rgba(255,255,255,0.04)',
            color: active ? '#CC5500' : 'rgba(255,255,255,0.25)',
            border: `1px solid ${active ? 'rgba(204,85,0,0.25)' : 'rgba(255,255,255,0.08)'}`,
          }}
        >
          Stage {index + 1}
        </span>
        <h3
          className="font-header font-bold text-lg md:text-2xl leading-snug mb-2 transition-colors duration-500"
          style={{ color: active ? '#ffffff' : 'rgba(255,255,255,0.35)' }}
        >
          {stage.name}
        </h3>
        <a
          href={`/6-stage-system#stage-${index + 1}`}
          className="inline-flex items-center gap-1 text-base font-semibold transition-colors duration-500"
          style={{ color: active ? 'rgba(204,85,0,0.9)' : 'rgba(255,255,255,0.15)' }}
        >
          See how it works
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function SixStageTeaser() {
  return (
    <Section background="navy-deepest" padding={false} glow>
      <Container size="lg" className="py-20 md:py-28">

        {/* Two-col layout: header left, stages right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left — sticky header */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
                Our Proprietary Framework
              </p>
              <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
                The 6-Stage<br />AI Automation System
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-4">
                Most agencies throw AI at your business and hope it works. We follow a proven
                framework that covers every touchpoint from first contact to repeat business.
              </p>
              <a
                href="/ai-os-partner-program"
                className="text-sm text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors"
              >
                Learn about the AI OS Partner Program →
              </a>
            </div>
          </div>

          {/* Right — stage rows */}
          <div className="flex-1 min-w-0">
          {SIX_STAGES.map((stage, index) => (
            <StageRow
              key={stage.number}
              stage={stage}
              index={index}
              icon={stageIcons[index]}
            />
          ))}
          </div>
        </div>

        {/* Bottom tagline + CTA */}
        <div className="mt-16 text-center">
          <p className="font-header text-xl md:text-2xl text-white/80 uppercase tracking-wide mb-8">
            Every stage automated.{' '}
            <span className="text-orange-cta">Zero steps left manual.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/6-stage-system"
              variant="primary"
              size="lg"
              className="min-w-[240px] shadow-cta-glow-lg"
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
