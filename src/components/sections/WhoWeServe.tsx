'use client';

import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { INDUSTRIES } from '@/lib/constants';

const industryIcons = [
  // Home & Building Services — house/wrench
  <svg key="home" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
    <circle cx="18.5" cy="17.5" r="3.5" fill="none" />
    <path d="M17.5 17.5h1M18.5 16.5v1" strokeWidth="1.2" />
  </svg>,
  // Automotive — car
  <svg key="auto" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 11l1.5-4.5h11L19 11" />
    <rect x="2" y="11" width="20" height="6" rx="2" />
    <circle cx="6.5" cy="17" r="2" />
    <circle cx="17.5" cy="17" r="2" />
    <path d="M2 14h2M20 14h2" />
  </svg>,
  // Nonprofits — heart/hands
  <svg key="nonprofit" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21C12 21 3 15.5 3 9a5 5 0 019-3 5 5 0 019 3c0 6.5-9 12-9 12z" />
    <path d="M8 13c1 1.5 2.5 2.5 4 3" strokeOpacity="0.5" strokeWidth="1.2" />
  </svg>,
  // Professional Services — briefcase
  <svg key="pro" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <path d="M12 12v4M10 14h4" strokeWidth="1.3" />
  </svg>,
];

const accentColors = [
  { border: '#CC5500', glow: 'rgba(204,85,0,0.12)', icon: '#CC5500', iconBg: 'rgba(204,85,0,0.1)', iconBorder: 'rgba(204,85,0,0.3)' },
  { border: '#3B82F6', glow: 'rgba(59,130,246,0.12)', icon: '#60A5FA', iconBg: 'rgba(59,130,246,0.1)', iconBorder: 'rgba(59,130,246,0.3)' },
  { border: '#10B981', glow: 'rgba(16,185,129,0.12)', icon: '#34D399', iconBg: 'rgba(16,185,129,0.1)', iconBorder: 'rgba(16,185,129,0.3)' },
  { border: '#8B5CF6', glow: 'rgba(139,92,246,0.12)', icon: '#A78BFA', iconBg: 'rgba(139,92,246,0.1)', iconBorder: 'rgba(139,92,246,0.3)' },
];

export default function WhoWeServe() {
  return (
    <Section background="navy-deepest" padding={false} glow>
      <Container size="lg" className="py-20 md:py-28">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            Industries We Transform
          </p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Built for High-Stakes Industries
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We specialize in businesses where every lead counts and speed wins deals.
            Our AI systems are battle-tested in the most competitive Florida markets.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INDUSTRIES.map((industry, index) => {
            const color = accentColors[index];
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block"
              >
                <div
                  className="card-elevated-dark h-full p-8 rounded-2xl transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    borderTop: `2px solid ${color.border}`,
                    boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px ${color.glow}`,
                  }}
                >
                  {/* Icon + Name row */}
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: color.iconBg,
                        border: `1.5px solid ${color.iconBorder}`,
                        color: color.icon,
                      }}
                    >
                      {industryIcons[index]}
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <h3 className="font-header font-bold text-xl text-white leading-tight mb-1 group-hover:text-white transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-white/40 text-sm leading-snug">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  {/* Challenges */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-3">
                      Pain Points
                    </p>
                    <ul className="space-y-2">
                      {industry.challenges.slice(0, 3).map((pain, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-white/50">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div
                    className="rounded-xl p-4 mb-6"
                    style={{ background: color.glow, border: `1px solid ${color.iconBorder}` }}
                  >
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: color.icon }}>
                      AI Solutions
                    </p>
                    <ul className="space-y-2">
                      {industry.solutions.slice(0, 3).map((sol, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-white/70">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: color.icon }} viewBox="0 0 12 12" fill="currentColor">
                            <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                          {sol}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Link */}
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                    style={{ color: color.icon }}
                  >
                    See {industry.name.split(' ')[0]} solutions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}
