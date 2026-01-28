import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import type { Service } from '@/lib/constants';
import { CALENDAR_LINK } from '@/lib/constants';

interface SolutionTemplateProps {
  service: Service;
}

export default function SolutionTemplate({ service }: SolutionTemplateProps) {

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden hero-gradient pt-24 pb-20">
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
            {/* Icon */}
            <div className="text-7xl mb-6">{service.icon}</div>

            {/* Headline with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block text-gradient" dangerouslySetInnerHTML={{ __html: service.headline }} />
            </h1>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                href={CALENDAR_LINK}
                variant="primary"
                size="lg"
                className="min-w-[280px] shadow-2xl shadow-cyan-primary/50 text-lg font-bold py-4 px-8"
                external
              >
                Book Your Discovery Call
              </Button>
              <Button
                href="/6-stage-system"
                variant="secondary"
                size="lg"
                className="min-w-[280px] text-lg font-bold py-4 px-8"
              >
                Explore Our 6-Stage System
              </Button>
            </div>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Ideal For */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              What We Provide
            </h2>
            <p className="text-xl text-gray-600 mb-6">{service.details}</p>
            <Button href={CALENDAR_LINK} external variant="primary" size="md">
              See How This Works for Your Business
            </Button>
          </div>
        </Container>
      </Section>

      {/* Key Features */}
      <Section background="gray" padding>
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              What You Get with {service.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Every deliverable designed to drive measurable business results
            </p>
            <Button href={CALENDAR_LINK} external variant="secondary" size="md">
              Discuss Your Specific Needs
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((feature, index) => (
              <Card key={index} variant="elevated" className="p-6 bg-white hover:shadow-2xl transition-all duration-300 border-l-4 border-cyan-primary">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-primary to-navy-deep rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy-deep mb-2">
                      {feature}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              How We Deliver {service.name} Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              A proven process that takes you from strategy to revenue-generating AI
            </p>
            <Button href="/6-stage-system" variant="secondary" size="md">
              Explore Our Full 6-Stage System
            </Button>
          </div>
          <div className="space-y-8">
            {service.process?.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-primary to-navy-deep rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg">
                  {index + 1}
                </div>
                <Card variant="elevated" className="flex-1 p-6 bg-white hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-navy-deep mb-2">
                    {step.step}
                  </h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  {service.process && index === service.process.length - 1 && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button href={CALENDAR_LINK} external variant="primary" size="sm">
                        Start This Process for Your Business
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
            )) || (
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Contact us to learn about our proven process for {service.title}
                </p>
                <Button href={CALENDAR_LINK} external variant="primary" size="md">
                  Book a Discovery Call
                </Button>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Deliverables */}
      <Section background="navy" padding>
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto text-white mb-12">
            <h2 className="text-4xl font-black mb-6">
              Everything You'll Receive with {service.name}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Complete transparency on deliverables and outcomes—no surprises, just results
            </p>
            <Button href={CALENDAR_LINK} external variant="primary" size="md" className="shadow-2xl shadow-cyan-primary/30">
              Get Your Custom Proposal
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.deliverables.map((deliverable, index) => (
              <Card
                key={index}
                variant="glass"
                className="p-6 border border-white/20 hover:border-cyan-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-primary/20 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-cyan-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1">
                    {deliverable}
                  </h3>
                </div>
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
            className="p-12 bg-gradient-to-br from-cyan-50 to-blue-50 text-center relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-primary/10 rounded-full blur-3xl -z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-deep/10 rounded-full blur-3xl -z-0" />

            <div className="relative z-10">
              <Badge variant="secondary" size="md" className="mb-4">
                ZERO RISK • MAXIMUM ROI
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-navy-deep mb-4">
                Turn {service.name} Into Revenue This Month
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Book a 30-minute discovery call. We'll map your current workflow, identify automation opportunities, and show you exactly how {service.name} drives measurable ROI for businesses like yours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Button
                  href={CALENDAR_LINK}
                  external
                  variant="primary"
                  size="lg"
                  className="min-w-[280px] shadow-2xl shadow-cyan-primary/50"
                >
                  Book Your Discovery Call Now
                </Button>
                <Button href="/case-studies" variant="secondary" size="lg" className="min-w-[280px]">
                  See Real Client Results First
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                ⚡ Most clients see positive ROI within 60-90 days • No long-term contracts required
              </p>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
