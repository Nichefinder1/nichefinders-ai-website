import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { CALENDAR_LINK } from '@/lib/constants';

export const metadata = {
  title: 'Resources | AI Automation Guides, Tools & Insights',
  description:
    'Free resources to help Florida businesses understand and implement AI automation. Guides, tools, calculators, and insights from NicheFinders AI experts.',
};

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Tool',
      title: 'ROI Calculator',
      description:
        'Calculate your potential ROI from AI automation in 60 seconds. See exactly how much revenue you could gain.',
      link: '/resources/roi-calculator',
      tags: ['Interactive', 'Free'],
    },
    {
      category: 'Guide',
      title: '6-Stage System Explained',
      description:
        'Deep dive into our proprietary framework. Learn how each stage works and why it delivers results.',
      link: '/6-stage-system',
      tags: ['Framework', 'Strategy'],
    },
    {
      category: 'Guide',
      title: 'AI Automation for Home & Building Services',
      description:
        'Complete guide for plumbers, HVAC, roofers, contractors, electricians, and painters. Stop missing leads and start growing.',
      link: '/industries/home-services',
      tags: ['Home & Building Services', 'Plumbing', 'HVAC', 'Contractors'],
    },
    {
      category: 'Case Study',
      title: 'Tampa Plumbing Company: 67% Revenue Increase',
      description:
        'How Precision Plumbing went from missing 40% of calls to 98% capture rate in 6 weeks.',
      link: '/case-studies/precision-plumbing-tampa',
      tags: ['Home & Building Services', 'Tampa'],
    },
    {
      category: 'Guide',
      title: 'Lead Response Time: Why 60 Seconds Matters',
      description:
        'Research-backed insights on why responding to leads within 60 seconds increases conversion by 391%.',
      link: '#',
      tags: ['Lead Generation', 'Data'],
    },
    {
      category: 'Tool',
      title: 'AI Readiness Assessment',
      description:
        'Take our 5-minute assessment to see if your business is ready for AI automation.',
      link: '#',
      tags: ['Interactive', 'Free'],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden hero-gradient pt-32 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
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
            <Badge variant="secondary" size="md" className="mb-6">
              FREE RESOURCES
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              AI Automation Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Free guides, tools, and insights to help Florida businesses
              understand and implement AI automation successfully.
            </p>
          </div>
        </Container>
      </section>

      {/* Resources Grid */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                variant="elevated"
                className="p-6 bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <Badge variant="primary" size="sm" className="mb-4">
                  {resource.category}
                </Badge>
                <h3 className="text-xl font-bold text-navy-deep mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  href={resource.link}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-center"
                >
                  {resource.category === 'Tool' ? 'Use Tool' : 'Read More'}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Signup */}
      <Section background="navy" padding>
        <Container size="lg">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-black mb-4">
              Get Weekly AI Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ Florida business owners getting actionable AI automation
              tips, case studies, and strategies every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-primary"
              />
              <Button variant="primary" size="lg" className="whitespace-nowrap">
                Subscribe Free
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="white" padding>
        <Container size="lg">
          <Card
            variant="gradient-border"
            className="p-12 bg-gradient-to-br from-cyan-50 to-blue-50 text-center"
          >
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              Ready to Implement AI?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Stop reading and start growing. Book a free discovery call to see
              exactly how AI automation can transform your business.
            </p>
            <Button href={CALENDAR_LINK} external variant="primary" size="lg">
              Book Free Discovery Call
            </Button>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
