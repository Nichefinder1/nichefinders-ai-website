import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CALENDAR_LINK } from '@/lib/constants';

export const metadata = {
  title: 'Resources | AI Automation Guides, Tools & Insights',
  description:
    'Free resources to help Florida businesses understand and implement AI automation. Guides, tools, calculators, and insights from NicheFinders AI experts.',
};

const resources = [
  {
    category: 'Tool',
    title: 'ROI Calculator',
    description:
      'Calculate your potential ROI from AI automation in 60 seconds. See exactly how much revenue you could gain and costs you could cut.',
    link: '/resources/roi-calculator',
    tags: ['Interactive', 'Free'],
    accent: '#CC5500',
    accentBg: 'rgba(204,85,0,0.1)',
    accentBorder: 'rgba(204,85,0,0.25)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    cta: 'Use Tool',
  },
  {
    category: 'Guide',
    title: '6-Stage System Explained',
    description:
      'Deep dive into our proprietary framework. Learn how each stage works and why it consistently delivers results for businesses across industries.',
    link: '/6-stage-system',
    tags: ['Framework', 'Strategy'],
    accent: '#3B82F6',
    accentBg: 'rgba(59,130,246,0.1)',
    accentBorder: 'rgba(59,130,246,0.25)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    cta: 'Read Guide',
  },
  {
    category: 'Guide',
    title: 'AI Automation for Home & Building Services',
    description:
      'Complete guide for plumbers, HVAC, roofers, contractors, and electricians. Stop missing leads and start growing with AI systems built for your trade.',
    link: '/industries/home-services',
    tags: ['Home Services', 'Contractors'],
    accent: '#10B981',
    accentBg: 'rgba(16,185,129,0.1)',
    accentBorder: 'rgba(16,185,129,0.25)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    cta: 'Read Guide',
  },
  {
    category: 'Case Study',
    title: 'Tampa Plumbing Company: 67% Revenue Increase',
    description:
      'How Precision Plumbing went from missing 40% of calls to a 98% capture rate in just 6 weeks using our AI automation system.',
    link: '/case-studies/precision-plumbing-tampa',
    tags: ['Home Services', 'Tampa'],
    accent: '#A855F7',
    accentBg: 'rgba(168,85,247,0.1)',
    accentBorder: 'rgba(168,85,247,0.25)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    cta: 'Read Case Study',
  },
  {
    category: 'Guide',
    title: 'Lead Response Time: Why 60 Seconds Matters',
    description:
      'Research-backed insights on why responding to leads within 60 seconds increases conversion by 391% — and how AI makes it automatic.',
    link: '#',
    tags: ['Lead Generation', 'Data'],
    accent: '#F59E0B',
    accentBg: 'rgba(245,158,11,0.1)',
    accentBorder: 'rgba(245,158,11,0.25)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    cta: 'Read Guide',
  },
  {
    category: 'Tool',
    title: 'AI Readiness Assessment',
    description:
      'Take our 5-minute assessment to see if your business is ready for AI automation and which systems will have the biggest impact.',
    link: '#',
    tags: ['Interactive', 'Free'],
    accent: '#EC4899',
    accentBg: 'rgba(236,72,153,0.1)',
    accentBorder: 'rgba(236,72,153,0.25)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    cta: 'Use Tool',
  },
];

const categoryColors: Record<string, { bg: string; color: string; border: string }> = {
  Tool: { bg: 'rgba(204,85,0,0.12)', color: '#CC5500', border: 'rgba(204,85,0,0.3)' },
  Guide: { bg: 'rgba(59,130,246,0.1)', color: '#60A5FA', border: 'rgba(59,130,246,0.25)' },
  'Case Study': { bg: 'rgba(168,85,247,0.1)', color: '#C084FC', border: 'rgba(168,85,247,0.25)' },
};

export default function ResourcesPage() {
  return (
    <main style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 45%, #001A3A 100%)' }}>

      {/* Hero */}
      <section className="relative pt-44 pb-20 overflow-hidden">
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
              Free Resources
            </p>
            <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
              AI Automation Resources
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto">
              Free guides, tools, and insights to help Florida businesses understand and implement AI automation successfully.
            </p>
          </div>
        </Container>
      </section>

      {/* Resources Grid */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const cat = categoryColors[resource.category] ?? categoryColors['Guide'];
              return (
                <Link key={index} href={resource.link} className="group block">
                  <div
                    className="card-elevated-dark h-full rounded-2xl p-6 flex flex-col transition-all duration-300 group-hover:-translate-y-1"
                    style={{ borderTop: `2px solid ${resource.accent}`, boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px ${resource.accentBg}` }}
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                      style={{ background: resource.accentBg, border: `1px solid ${resource.accentBorder}`, color: resource.accent }}
                    >
                      {resource.icon}
                    </div>

                    {/* Category badge */}
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 self-start"
                      style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.border}` }}
                    >
                      {resource.category}
                    </span>

                    <h3 className="font-header font-bold text-lg text-white mb-3 group-hover:text-orange-cta transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
                      {resource.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {resource.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: resource.accent }}>
                      {resource.cta}
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

      {/* CTA */}
      <Section background="navy-deepest" padding={false} glow>
        <Container size="lg" className="py-28 md:py-36 pb-36 md:pb-44 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Ready to Start</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Stop Reading. Start Growing.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book a discovery call to see exactly how AI automation can transform your business. You'll get a custom roadmap even if we never work together.
          </p>
          <Button href={CALENDAR_LINK} external variant="primary" size="lg" className="min-w-[240px] shadow-cta-glow-lg">
            Book Discovery Call
          </Button>
        </Container>
      </Section>

    </main>
  );
}
