import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { CALENDAR_LINK } from '@/lib/constants';

export const metadata = {
  title: 'About Us | Florida AI Automation Experts',
  description:
    'Meet the team behind NicheFinders AI. We help Florida businesses grow with proven AI automation solutions. 50+ businesses served, 3x average ROI.',
};

const differentiators = [
  {
    title: 'Florida-First Focus',
    description: 'We live here. We work here. We understand Florida markets, seasonality, and customer behavior. Not some outsourced team halfway around the world.',
    color: { border: '#CC5500', glow: 'rgba(204,85,0,0.12)', icon: '#CC5500', iconBg: 'rgba(204,85,0,0.1)', iconBorder: 'rgba(204,85,0,0.3)' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  },
  {
    title: 'No Cookie-Cutter Solutions',
    description: "Every business gets a custom-built system tailored to their industry, size, and goals. We don't force you into our favorite tools — we build what works for you.",
    color: { border: '#3B82F6', glow: 'rgba(59,130,246,0.12)', icon: '#60A5FA', iconBg: 'rgba(59,130,246,0.1)', iconBorder: 'rgba(59,130,246,0.3)' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17.5h7M17.5 14v7" strokeWidth="1.8"/></svg>,
  },
  {
    title: 'Proven 6-Stage Framework',
    description: 'Our proprietary system covers lead capture, qualification, nurturing, conversion, service delivery, and retention. Complete coverage, zero gaps.',
    color: { border: '#10B981', glow: 'rgba(16,185,129,0.12)', icon: '#34D399', iconBg: 'rgba(16,185,129,0.1)', iconBorder: 'rgba(16,185,129,0.3)' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
  },
  {
    title: 'Implementation Speed',
    description: 'Most agencies take months. We deliver results in 6-9 weeks. Fast implementation, faster ROI, real business impact.',
    color: { border: '#8B5CF6', glow: 'rgba(139,92,246,0.12)', icon: '#A78BFA', iconBg: 'rgba(139,92,246,0.1)', iconBorder: 'rgba(139,92,246,0.3)' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>,
  },
  {
    title: 'Partnership Approach',
    description: "We are not vendors who disappear after launch. We stay involved, optimize continuously, and ensure you are getting maximum value.",
    color: { border: '#F59E0B', glow: 'rgba(245,158,11,0.12)', icon: '#FCD34D', iconBg: 'rgba(245,158,11,0.1)', iconBorder: 'rgba(245,158,11,0.3)' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    title: 'Education Included',
    description: 'We train your team to understand and manage the AI systems. No black boxes, no dependence. You own the knowledge.',
    color: { border: '#EC4899', glow: 'rgba(236,72,153,0.12)', icon: '#F472B6', iconBg: 'rgba(236,72,153,0.1)', iconBorder: 'rgba(236,72,153,0.3)' },
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
  },
];

const industries = [
  { name: 'Home & Building Services', description: 'Plumbing, HVAC, Roofing, Electrical, Contractors, Painting' },
  { name: 'Automotive', description: 'Dealerships, Repair Shops, Detailing' },
  { name: 'Nonprofits', description: 'Foundations, Community Organizations' },
  { name: 'Professional Services', description: 'Law Firms, Accounting, Consulting' },
];

const values = [
  { title: 'Results Over Hype', description: 'We measure success in revenue increase, time saved, and ROI — not buzzwords or vanity metrics.' },
  { title: 'Transparency Always', description: "No hidden fees, no black boxes, no surprises. You know exactly what you're getting and what it costs." },
  { title: 'Client Success First', description: "We win when you win. Your growth is our growth. We're invested in your long-term success." },
];

export default function AboutPage() {
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
              About NicheFinders AI
            </p>
            <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
              We're Building the Future<br />of Business
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto">
              One automated lead at a time. One satisfied client at a time. One transformed business at a time.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="py-36 md:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Our Mission</p>
              <h2 className="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-6">
                AI Automation for Every Business
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-5">
                We believe every business deserves access to world-class AI automation. Not just Fortune 500 companies.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-5">
                Too many hardworking business owners lose revenue to slow response times, manual processes, and missed opportunities. We fix that.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Our proprietary 6-Stage System automates every touchpoint in the customer journey. From lead capture to retention, so you can focus on growth while AI handles the rest.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '50+', label: 'Businesses Served' },
                { value: '3x', label: 'Average ROI' },
                { value: '10', label: 'Florida Cities' },
                { value: '<60s', label: 'Lead Response Time' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="card-elevated-dark rounded-2xl p-6 text-center"
                  style={{ borderTop: '2px solid #CC5500', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 4px 16px rgba(204,85,0,0.08)' }}
                >
                  <div className="font-header font-bold text-3xl text-orange-cta mb-2">{stat.value}</div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why We're Different */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="pb-36 md:pb-48">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Our Edge</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Why We're Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="card-elevated-dark rounded-2xl p-6"
                style={{ borderTop: `2px solid ${item.color.border}`, boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 4px 16px ${item.color.glow}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: item.color.iconBg, border: `1.5px solid ${item.color.iconBorder}`, color: item.color.icon }}
                >
                  {item.icon}
                </div>
                <h3 className="font-header font-bold text-lg text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="pb-36 md:pb-48">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Specialization</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
              Industries We Specialize In
            </h2>
            <p className="text-white/60 text-lg">Deep expertise in the industries that power Florida's economy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="card-elevated-dark rounded-2xl p-6 text-center"
                style={{ borderTop: '2px solid rgba(255,255,255,0.08)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06)' }}
              >
                <h3 className="font-header font-bold text-lg text-white mb-3">{industry.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="navy-deepest" padding={false} glow>
        <Container size="lg" className="pb-36 md:pb-48">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">What We Stand For</p>
            <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-elevated-dark rounded-2xl p-8 text-center"
                style={{ borderTop: '2px solid #CC5500', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(204,85,0,0.08)' }}
              >
                <h3 className="font-header font-bold text-xl text-white mb-4">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy-deepest" padding={false} glow>
        <Container size="lg" className="py-28 md:py-36 pb-36 md:pb-44 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Let's Talk</p>
          <h2 className="font-header font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Let's Build Your AI Future
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book a discovery call. No sales pressure, just an honest conversation about whether AI automation is right for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={CALENDAR_LINK} external variant="primary" size="lg" className="min-w-[240px] shadow-cta-glow-lg">
              Book Discovery Call
            </Button>
            <Button href="/case-studies" variant="secondary" size="lg" className="min-w-[240px]">
              See Our Work
            </Button>
          </div>
        </Container>
      </Section>

    </main>
  );
}
