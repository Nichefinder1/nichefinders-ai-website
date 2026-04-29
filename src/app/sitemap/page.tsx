import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { SITE_URL, FLORIDA_CITIES, SERVICES, INDUSTRIES } from '@/lib/constants';

export const metadata = {
  title: 'Sitemap | NicheFinders AI',
  description: 'Complete sitemap of NicheFinders AI website. Find all pages, services, industries, and resources.',
};

export default function SitemapPage() {
  const sections = [
    {
      title: 'Main Pages',
      pages: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Book a Discovery Call', path: '/book-a-call' },
        { name: 'AI OS Partner Program', path: '/ai-os-partner-program' },
        { name: '6-Stage System', path: '/6-stage-system' },
        { name: 'Case Studies', path: '/case-studies' },
      ],
    },
    {
      title: 'Resources',
      pages: [
        { name: 'AI Insights Blog', path: '/resources/ai-insights' },
        { name: 'ROI Calculator', path: '/resources/roi-calculator' },
        { name: 'Resources Hub', path: '/resources' },
      ],
    },
    {
      title: 'Solutions',
      pages: SERVICES.map((service) => ({
        name: service.name,
        path: `/solutions/${service.slug}`,
      })),
    },
    {
      title: 'Industries',
      pages: INDUSTRIES.map((industry) => ({
        name: industry.name,
        path: `/industries/${industry.slug}`,
      })),
    },
    {
      title: 'Florida Locations',
      pages: FLORIDA_CITIES.map((city) => ({
        name: city.name,
        path: `/florida/${city.slug}`,
      })),
    },
    {
      title: 'Legal',
      pages: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
      ],
    },
  ];

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

        <Container size="lg" className="relative z-10 text-center max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">Navigation</p>
          <h1 className="font-header font-bold text-4xl md:text-5xl leading-[1.1] tracking-tight text-[#E8EDF2] mb-4">
            Site Map
          </h1>
          <p className="text-white/60">Complete directory of all pages and resources available on NicheFinders AI</p>
        </Container>
      </section>

      {/* Sitemap Content */}
      <Section background="navy-deepest" padding={false}>
        <Container size="lg" className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-header font-bold text-xl text-white mb-6 pb-4 border-b border-white/10">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link
                        href={page.path}
                        className="text-white/70 hover:text-orange-cta transition-colors duration-200 flex items-center gap-2"
                      >
                        <span className="text-orange-cta opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        <span className="group">{page.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Back Link */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block text-sm text-white/60 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
