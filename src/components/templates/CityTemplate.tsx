import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import type { FloridaCity } from '@/lib/constants';
import { INDUSTRIES, SERVICES, FLORIDA_CITIES, CALENDAR_LINK } from '@/lib/constants';

interface CityTemplateProps {
  city: FloridaCity;
}

export default function CityTemplate({ city }: CityTemplateProps) {

  // Find nearby cities (within same region or adjacent)
  const nearbyCities = FLORIDA_CITIES.filter(
    (c) => c.slug !== city.slug && c.region === city.region
  ).slice(0, 4);

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
            {/* Badge */}
            <Badge variant="secondary" size="md" className="mb-6">
              {city.region.toUpperCase()}
            </Badge>

            {/* Headline with Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              <span className="block">AI Automation Agency in</span>
              <span className="block text-gradient">{city.name}, Florida</span>
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
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-6">
              Transform your {city.name} business with proven AI automation.
              Serving {city.population} residents and {city.businessCount}{' '}
              local businesses across {city.counties.join(', ')}.
            </p>

            {/* Industry Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {city.industries.map((ind, index) => (
                <Badge key={index} variant="secondary" size="sm" className="text-xs">
                  {ind}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Real Business Examples */}
      {city.localBusinessExamples && city.localBusinessExamples.length > 0 && (
        <Section background="gray" padding>
          <Container size="lg">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-black text-navy-deep mb-4">
                Imagine If These {city.name} Icons Had AI Automation
              </h2>
              <p className="text-xl text-gray-700">
                Every business owner in {city.name} recognizes these landmarks and businesses.
                Here's how AI automation could transform operations for venues just like these.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {city.localBusinessExamples.map((example, index) => (
                <Card
                  key={index}
                  variant="elevated"
                  className="p-6 bg-white hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-primary/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-cyan-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy-deep mb-1">
                        {example.business}
                      </h3>
                      <p className="text-sm text-cyan-primary font-semibold mb-3">
                        {example.type}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                        AI Automation Opportunity
                      </div>
                      <p className="text-sm text-gray-700">{example.automation}</p>
                    </div>

                    <div className="p-3 bg-success/10 rounded-lg border-l-4 border-success">
                      <div className="text-xs font-bold text-success uppercase tracking-wide mb-1">
                        Business Impact
                      </div>
                      <p className="text-sm text-gray-700">{example.impact}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                If businesses like these can benefit from AI automation, imagine what it could do for YOUR {city.name} business.
              </p>
              <Button href={CALENDAR_LINK} external variant="primary" size="lg">
                See How AI Works for Your Business
              </Button>
            </div>
          </Container>
        </Section>
      )}

      {/* Local Market Overview */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-black text-navy-deep mb-6">
                Why {city.name} Businesses Choose Us
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {city.name} is a thriving {city.region} hub with {city.population}{' '}
                residents and over {city.businessCount} businesses competing for
                attention. In this fast-paced market, speed and efficiency win
                deals.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'Local Expertise',
                    description: `We understand ${city.name}'s unique market dynamics and customer behavior.`,
                  },
                  {
                    title: 'Proven Results',
                    description:
                      'Our clients see 3x average ROI with our 6-Stage System.',
                  },
                  {
                    title: 'Industry Specialists',
                    description: `Deep experience in ${city.industries.join(', ')} across ${city.name}.`,
                  },
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <svg
                      className="w-6 h-6 text-cyan-primary flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h3 className="font-bold text-navy-deep mb-1">
                        {point.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card variant="elevated" className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50">
                <h3 className="text-2xl font-black text-navy-deep mb-6">
                  {city.name} Market Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-3xl font-black text-cyan-primary mb-1">
                      {city.population}
                    </div>
                    <div className="text-sm text-gray-600">Population</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-3xl font-black text-cyan-primary mb-1">
                      {city.businessCount}
                    </div>
                    <div className="text-sm text-gray-600">Businesses</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg col-span-2">
                    <div className="text-sm font-bold text-gray-500 mb-2">
                      Counties Served
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {city.counties.map((county, idx) => (
                        <Badge key={idx} variant="secondary" size="sm">
                          {county}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industries We Serve in City */}
      <Section background="gray" padding>
        <Container size="lg">
          <h2 className="text-4xl font-black text-navy-deep mb-12 text-center">
            Industries We Serve in {city.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group"
              >
                <Card
                  variant="elevated"
                  className="p-6 text-center bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <h3 className="font-bold text-navy-deep group-hover:text-cyan-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {industry.businessCount} in {city.name}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Solutions */}
      <Section background="white" padding>
        <Container size="lg">
          <h2 className="text-4xl font-black text-navy-deep mb-12 text-center">
            AI Solutions for {city.name} Businesses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/solutions/${service.slug}`}
                className="group"
              >
                <Card
                  variant="elevated"
                  className="p-8 bg-white hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-deep group-hover:text-cyan-primary transition-colors mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <Section background="navy" padding>
          <Container size="lg">
            <div className="text-center text-white mb-12">
              <h2 className="text-4xl font-black mb-4">
                Also Serving Nearby Cities
              </h2>
              <p className="text-xl text-gray-300">
                We provide AI automation across {city.region}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/florida/${nearbyCity.slug}`}
                  className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-center"
                >
                  <div className="font-bold text-white mb-1">
                    {nearbyCity.name}
                  </div>
                  <div className="text-sm text-gray-300">
                    {nearbyCity.population}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section background="white" padding>
        <Container size="lg">
          <Card
            variant="gradient-border"
            className="p-12 bg-gradient-to-br from-cyan-50 to-blue-50 text-center"
          >
            <h2 className="text-4xl font-black text-navy-deep mb-4">
              Ready to Transform Your {city.name} Business?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Book a discovery call with our team. We'll show you exactly
              how AI automation can work for your {city.name} business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={CALENDAR_LINK} external variant="primary" size="lg">
                Book Free {city.name} Consultation
              </Button>
              <Button href="/6-stage-system" variant="secondary" size="lg">
                Explore Our 6-Stage System
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
