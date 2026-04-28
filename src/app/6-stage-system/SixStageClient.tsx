'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { SIX_STAGES, CALENDAR_LINK } from '@/lib/constants';

const stageColors = [
  { border: '#CC5500', glow: 'rgba(204,85,0,0.12)', icon: '#CC5500', iconBg: 'rgba(204,85,0,0.1)', iconBorder: 'rgba(204,85,0,0.3)' },
  { border: '#3B82F6', glow: 'rgba(59,130,246,0.12)', icon: '#60A5FA', iconBg: 'rgba(59,130,246,0.1)', iconBorder: 'rgba(59,130,246,0.3)' },
  { border: '#10B981', glow: 'rgba(16,185,129,0.12)', icon: '#34D399', iconBg: 'rgba(16,185,129,0.1)', iconBorder: 'rgba(16,185,129,0.3)' },
  { border: '#8B5CF6', glow: 'rgba(139,92,246,0.12)', icon: '#A78BFA', iconBg: 'rgba(139,92,246,0.1)', iconBorder: 'rgba(139,92,246,0.3)' },
  { border: '#F59E0B', glow: 'rgba(245,158,11,0.12)', icon: '#FCD34D', iconBg: 'rgba(245,158,11,0.1)', iconBorder: 'rgba(245,158,11,0.3)' },
  { border: '#EC4899', glow: 'rgba(236,72,153,0.12)', icon: '#F472B6', iconBg: 'rgba(236,72,153,0.1)', iconBorder: 'rgba(236,72,153,0.3)' },
];

const stageIcons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 4h18l-7 8v6l-4-2V12L3 4z" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
    <circle cx="16" cy="16" r="3" /><path d="M16 14.5v1.8l1.2 1.2" strokeWidth="1.2" />
  </svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
  </svg>,
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z" />
    <path d="M7 5h.01M7 12h.01M7 19h.01" strokeWidth="2" />
  </svg>,
  <svg key="6" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 5A8 8 0 0120 11M6.5 19A8 8 0 014 13" />
    <path d="M20 11l2-2M20 11l-2-2M4 13l-2 2M4 13l2 2" strokeWidth="1.2" />
    <path d="M12 9c0 0-3 2-3 4.5a3 3 0 006 0C15 11 12 9 12 9z" />
  </svg>,
];

export default function SixStageClient() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <main style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 45%, #001A3A 100%)' }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,85,164,0.22) 0%, transparent 55%)' }} />

        <Container size="lg" className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">
              Our Proprietary Framework
            </p>
            <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
              The 6-Stage AI<br />Automation System
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto mb-6">
              Most agencies throw AI at your business and hope it works. We follow a proven
              framework that covers every touchpoint in your customer journey. From first
              contact to repeat business.
            </p>
            <p className="text-white/40 text-base max-w-2xl mx-auto mb-12">
              This system is the foundation of our{' '}
              <Link href="/ai-os-partner-program" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
                AI OS Partner Program
              </Link>
              . Want to see it in action?{' '}
              <Link href="/case-studies" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
                Read our client case studies
              </Link>
              .
            </p>

            <Button href="#stages" variant="primary" size="lg" className="shadow-cta-glow-lg">
              Explore Each Stage
            </Button>
          </div>
        </Container>
      </section>

      {/* Stage Nav Pills */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="py-10">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {SIX_STAGES.map((stage, index) => {
              const color = stageColors[index];
              const active = activeStage === index;
              return (
                <button
                  key={stage.number}
                  onClick={() => {
                    setActiveStage(index);
                    document.getElementById(`stage-${stage.number}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="rounded-xl p-3 text-center transition-all duration-200"
                  style={{
                    background: active ? color.iconBg : 'rgba(255,255,255,0.04)',
                    border: active ? `1.5px solid ${color.border}` : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: active ? `0 4px 16px ${color.glow}` : 'none',
                  }}
                >
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: active ? color.icon : 'rgba(255,255,255,0.25)' }}>
                    Stage {stage.number}
                  </div>
                  <div className="text-xs text-white/50 leading-tight">
                    {stage.name.split(' ').slice(0, 2).join(' ')}
                  </div>
                </button>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Stage Detail Sections */}
      <div id="stages">
        {SIX_STAGES.map((stage, index) => {
          const color = stageColors[index];
          return (
            <Section key={stage.number} id={`stage-${stage.number}`} background="navy-deepest" padding={false}>
              <Container size="lg" className="py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                  {/* Left — sticky info */}
                  <div className="lg:sticky lg:top-28">

                    {/* Stage label + icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: color.iconBg, border: `1.5px solid ${color.iconBorder}`, color: color.icon }}
                      >
                        {stageIcons[index]}
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: color.icon }}>
                          Stage {stage.number} of 6
                        </p>
                        <h2 className="font-header font-bold text-2xl md:text-3xl text-white leading-tight">
                          {stage.name}
                        </h2>
                      </div>
                    </div>

                    {/* Problem */}
                    <div
                      className="rounded-xl p-5 mb-6"
                      style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid rgba(255,80,80,0.5)' }}
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-red-400/70 mb-2">The Problem</p>
                      <p className="text-white/60 text-sm leading-relaxed">{stage.problem}</p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {stage.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl p-3 text-center"
                          style={{ background: color.iconBg, border: `1px solid ${color.iconBorder}` }}
                        >
                          <div className="font-header font-bold text-xl mb-1" style={{ color: color.icon }}>{metric.value}</div>
                          <div className="text-xs text-white/40 leading-tight">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Real world example */}
                    <div
                      className="rounded-xl p-5"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Real-World Example</p>
                      <p className="text-white/55 text-sm leading-relaxed">{stage.realWorldExample}</p>
                    </div>
                  </div>

                  {/* Right — solutions */}
                  <div className="space-y-4">
                    <h3 className="font-header font-bold text-xl text-white mb-6">Our AI Solutions</h3>
                    {stage.solutions.map((solution, idx) => (
                      <div
                        key={idx}
                        className="card-elevated-dark rounded-2xl p-6"
                        style={{ borderTop: `2px solid ${color.border}`, boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 4px 16px ${color.glow}` }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-header font-bold text-lg text-white leading-tight">{solution.name}</h4>
                          <span
                            className="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ml-3"
                            style={{ background: color.iconBg, color: color.icon, border: `1px solid ${color.iconBorder}` }}
                          >
                            AI-Powered
                          </span>
                        </div>

                        <p className="text-white/55 text-sm leading-relaxed mb-4">{solution.description}</p>

                        {/* Tech stack */}
                        <div
                          className="rounded-lg p-3 mb-4"
                          style={{ background: color.iconBg, border: `1px solid ${color.iconBorder}` }}
                        >
                          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: color.icon }}>
                            Technology Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {solution.tech.split(', ').map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="text-xs px-2.5 py-1 rounded-full"
                                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-center gap-2.5 text-sm text-white/55">
                              <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: color.icon }} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 3L5 8.5 2 5.5" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>

              {/* Section divider */}
              {index < SIX_STAGES.length - 1 && (
                <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
              )}
            </Section>
          );
        })}
      </div>

      {/* How It All Works Together */}
      <Section background="navy-deepest" padding={false} glow>
        <Container size="lg" className="py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
              The Full Picture
            </p>
            <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
              How It All Works Together
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-4">
              Each stage builds on the previous one, creating a seamless customer journey
              that converts more leads with less manual work.
            </p>
            <p className="text-white/40 text-sm">
              Estimate your potential gains with our{' '}
              <Link href="/resources/roi-calculator" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
                free ROI calculator
              </Link>
              , or{' '}
              <Link href="/resources/ai-insights" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
                explore our AI insights blog
              </Link>{' '}
              for implementation guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Seamless Integration', desc: 'All 6 stages work together as one unified system, sharing data and insights.', color: stageColors[0] },
              { title: 'Real-Time Analytics', desc: 'Dashboard shows exactly where each lead is in the journey and what actions to take.', color: stageColors[1] },
              { title: 'Personalized Automation', desc: 'AI adapts messaging and timing based on customer behavior and preferences.', color: stageColors[2] },
              { title: 'Instant Response', desc: 'From lead capture to follow-up, responses happen in under 60 seconds.', color: stageColors[3] },
              { title: 'Enterprise Security', desc: 'Bank-level encryption and GDPR-compliant data handling throughout.', color: stageColors[4] },
              { title: 'Continuous Improvement', desc: 'AI learns from every interaction, constantly optimizing performance.', color: stageColors[5] },
            ].map((item, i) => (
              <div
                key={i}
                className="card-elevated-dark rounded-2xl p-6"
                style={{ borderTop: `2px solid ${item.color.border}`, boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 4px 16px ${item.color.glow}` }}
              >
                <h3 className="font-header font-bold text-lg text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy-deepest" padding={false} glow>
        <Container size="lg" className="py-28 md:py-36 pb-36 md:pb-44 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            Ready to Start
          </p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to Implement the 6-Stage System?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book a discovery call and we'll show you exactly how each stage can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={CALENDAR_LINK} variant="primary" size="lg" className="min-w-[240px] shadow-cta-glow-lg">
              Book Your Discovery Call
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg" className="min-w-[240px]">
              See Success Stories
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/30">
            <span>No long-term contracts</span>
            <span className="w-px h-4 bg-white/15" />
            <span>3x average ROI</span>
          </div>
        </Container>
      </Section>

    </main>
  );
}
