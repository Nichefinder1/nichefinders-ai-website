import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { SERVICES, CALENDAR_LINK } from '@/lib/constants';

const pillarConfig: { [key: string]: { color: string; glow: string; icon: React.JSX.Element } } = {
  'ai-consulting': {
    color: '#CC5500',
    glow: 'rgba(204,85,0,0.2)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  'custom-ai-development': {
    color: '#0055A4',
    glow: 'rgba(0,85,164,0.25)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  'ai-powered-marketing': {
    color: '#10B981',
    glow: 'rgba(16,185,129,0.2)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  'ai-education-training': {
    color: '#7C3AED',
    glow: 'rgba(124,58,237,0.2)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
};

export default function FourPillars() {
  return (
    <Section background="navy-medium" padding={false} glow>
      <Container size="xl" className="py-20 md:py-28">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">
            Our Approach
          </p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            The 4 Pillars of AI Transformation
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-3">
            Every business is unique, but success follows a proven path. Our
            4-pillar approach ensures you get results, not just technology.
          </p>
          <p className="text-white/40 text-sm">
            Delivered through our{' '}
            <Link href="/6-stage-system" className="text-[#7aafd4] hover:text-white underline underline-offset-2 transition-colors">
              6-Stage AI Automation System
            </Link>
            .
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {SERVICES.map((service, index) => {
            const config = pillarConfig[service.slug];
            return (
              <Card
                key={service.slug}
                variant="elevated-dark"
                className="p-6 md:p-8"
                style={{ borderTop: `3px solid ${config?.color}` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: config?.glow,
                      border: `1.5px solid ${config?.color}`,
                      boxShadow: `0 0 16px ${config?.glow}`,
                      color: config?.color,
                    }}
                  >
                    {config?.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest mt-1" style={{ color: config?.color }}>
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-header font-bold text-2xl text-white mb-3">{service.name}</h3>
                <p className="text-white/60 text-base mb-5 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-5">
                  {service.deliverables.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: config?.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={`/solutions/${service.slug}`}
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  Learn More About {service.name}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Card */}
        <div
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: '#CC5500' }}
        >
          <div>
            <h3 className="font-header font-bold text-2xl text-white mb-2">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 text-base leading-relaxed max-w-lg">
              Let&apos;s build a custom AI strategy that combines all four pillars for maximum impact.
            </p>
          </div>
          <Button
            href={CALENDAR_LINK}
            external
            variant="secondary"
            size="md"
            className="border-white text-white hover:bg-white hover:text-orange-cta font-bold shrink-0"
          >
            Book Your Discovery Call
          </Button>
        </div>
      </Container>
    </Section>
  );
}
