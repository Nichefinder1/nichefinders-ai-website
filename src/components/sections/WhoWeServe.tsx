import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { INDUSTRIES } from '@/lib/constants';

export default function WhoWeServe() {

  return (
    <Section background="white" padding>
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-navy-deep/10 text-navy-deep font-bold text-sm rounded-full mb-4">
            INDUSTRIES WE TRANSFORM
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-deep mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600">
            We specialize in high-stakes industries where every lead counts and
            speed wins deals. Our AI solutions are battle-tested in the most
            competitive Florida markets.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="industry-card group"
            >
              <Card
                variant="elevated"
                className="p-8 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2"
              >
                {/* Icon & Name */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <Badge variant="primary" size="sm">
                    {industry.businessCount}
                  </Badge>
                </div>

                <h3 className="text-2xl font-black text-navy-deep mb-3 group-hover:text-cyan-primary transition-colors">
                  {industry.name}
                </h3>

                <p className="text-gray-600 mb-6">{industry.description}</p>

                {/* Pain Points */}
                <div className="mb-6">
                  <h4 className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-3">
                    Common Challenges:
                  </h4>
                  <ul className="space-y-2">
                    {industry.challenges.slice(0, 3).map((pain, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-700"
                      >
                        <svg
                          className="w-4 h-4 text-alert flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI Solutions */}
                <div className="mb-6 p-4 bg-cyan-50 rounded-lg">
                  <h4 className="font-bold text-sm uppercase tracking-wide text-cyan-primary mb-3">
                    AI Solutions:
                  </h4>
                  <ul className="space-y-2">
                    {industry.solutions.slice(0, 3).map((solution, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-700"
                      >
                        <svg
                          className="w-4 h-4 text-cyan-primary flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View More Link */}
                <div className="flex items-center text-cyan-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>See {industry.name} Solutions</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
