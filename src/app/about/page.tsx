import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { CALENDAR_LINK } from '@/lib/constants';

export const metadata = {
  title: 'About Us | Florida AI Automation Experts',
  description:
    'Meet the team behind NicheFinders AI. We help Florida businesses grow with proven AI automation solutions. 50+ businesses served, 400% average ROI.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <Section background="gradient" padding>
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto text-white py-20">
            <Badge variant="secondary" size="md" className="mb-6 bg-white/20 text-white">
              ABOUT NICHEFINDERS AI
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              We're Building the Future of Florida Business
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              One automated lead at a time. One satisfied client at a time. One
              transformed business at a time.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-navy-deep mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We believe every Florida business deserves access to
                world-class AI automation—not just Fortune 500 companies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Too many hardworking business owners lose revenue to slow
                response times, manual processes, and missed opportunities. We
                fix that.
              </p>
              <p className="text-lg text-gray-700">
                Our proprietary 6-Stage System automates every touchpoint in
                the customer journey—from lead capture to retention—so you can
                focus on growth while AI handles the rest.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '50+', label: 'Businesses Served' },
                { value: '400%', label: 'Average ROI' },
                { value: '10', label: 'Florida Cities' },
                { value: '<60s', label: 'Lead Response Time' },
              ].map((stat, index) => (
                <Card
                  key={index}
                  variant="elevated"
                  className="p-6 text-center bg-gradient-to-br from-cyan-50 to-blue-50"
                >
                  <div className="text-4xl font-black text-cyan-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why We're Different */}
      <Section background="gray" padding>
        <Container size="lg">
          <h2 className="text-4xl font-black text-navy-deep mb-12 text-center">
            Why We're Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Florida-First Focus',
                description:
                  'We live here. We work here. We understand Florida markets, seasonality, and customer behavior. Not some outsourced team halfway around the world.',
              },
              {
                icon: '🔧',
                title: 'No Cookie-Cutter Solutions',
                description:
                  'Every business gets a custom-built system tailored to their industry, size, and goals. We don\'t force you into our favorite tools—we build what works for you.',
              },
              {
                icon: '📊',
                title: 'Proven 6-Stage Framework',
                description:
                  'Our proprietary system covers lead capture, qualification, nurturing, conversion, service delivery, and retention. Complete coverage, zero gaps.',
              },
              {
                icon: '⚡',
                title: 'Implementation Speed',
                description:
                  'Most agencies take months. We deliver results in 6-9 weeks. Fast implementation, faster ROI, real business impact.',
              },
              {
                icon: '🤝',
                title: 'Partnership Approach',
                description:
                  'We are not vendors who disappear after launch. We stay involved, optimize continuously, and ensure you are getting maximum value.',
              },
              {
                icon: '💡',
                title: 'Education Included',
                description:
                  'We train your team to understand and manage the AI systems. No black boxes, no dependence. You own the knowledge.',
              },
            ].map((item, index) => (
              <Card key={index} variant="elevated" className="p-6 bg-white">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy-deep mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries We Serve */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              Industries We Specialize In
            </h2>
            <p className="text-xl text-gray-600">
              Deep expertise in the industries that power Florida's economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🔧',
                name: 'Home & Building Services',
                description: 'Plumbing, HVAC, Roofing, Electrical, Contractors, Painting',
              },
              {
                icon: '🚗',
                name: 'Automotive',
                description: 'Dealerships, Repair Shops, Detailing',
              },
              {
                icon: '❤️',
                name: 'Nonprofits',
                description: 'Foundations, Community Organizations',
              },
              {
                icon: '⚖️',
                name: 'Professional Services',
                description: 'Law Firms, Accounting, Consulting',
              },
            ].map((industry, index) => (
              <Card
                key={index}
                variant="elevated"
                className="p-6 text-center bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-navy-deep mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="navy" padding>
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto text-white mb-12">
            <h2 className="text-4xl font-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Results Over Hype',
                description:
                  'We measure success in revenue increase, time saved, and ROI—not buzzwords or vanity metrics.',
              },
              {
                title: 'Transparency Always',
                description:
                  "No hidden fees, no black boxes, no surprises. You know exactly what you're getting and what it costs.",
              },
              {
                title: 'Client Success First',
                description:
                  "We win when you win. Your growth is our growth. We're invested in your long-term success.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                variant="glass"
                className="p-6 text-center border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </Card>
            ))}
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
              Let's Build Your AI Future
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Book a free discovery call. No sales pressure, just honest
              conversation about whether AI automation is right for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={CALENDAR_LINK} external variant="primary" size="lg">
                Book Free Discovery Call
              </Button>
              <Button href="/case-studies" variant="secondary" size="lg">
                See Our Work
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
