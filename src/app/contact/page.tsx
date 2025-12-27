import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Contact Us | Book Your Free AI Automation Discovery Call',
  description:
    'Book a free discovery call with NicheFinders AI. Get a custom AI automation strategy for your Florida business. No pressure, just insights. Tampa, Jacksonville, Miami, Orlando.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <Section background="gradient" padding>
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto text-white py-20">
            <Badge variant="secondary" size="md" className="mb-6 bg-white/20 text-white">
              LET'S TALK
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Book Your Free Discovery Call
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              No sales pitch. Just an honest conversation about your business
              challenges and whether AI automation can help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '⏱️', label: '30-Minute Call' },
                { icon: '💡', label: 'Custom Strategy' },
                { icon: '🎁', label: '100% Free' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-white font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form/Calendar Section */}
      <Section background="white" padding>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: What to Expect */}
            <div>
              <h2 className="text-3xl font-black text-navy-deep mb-6">
                What to Expect on the Call
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Tell Us About Your Business',
                    description:
                      "We'll ask about your current processes, pain points, and goals. No judgments, just understanding.",
                  },
                  {
                    step: 2,
                    title: "We'll Identify Opportunities",
                    description:
                      "Based on your situation, we'll show you exactly where AI automation can have the biggest impact.",
                  },
                  {
                    step: 3,
                    title: 'Get a Custom Roadmap',
                    description:
                      "You'll leave with a clear picture of what's possible, realistic timelines, and ballpark ROI estimates.",
                  },
                  {
                    step: 4,
                    title: "Decide if We're a Fit",
                    description:
                      "No pressure. If we're not the right solution for you, we'll tell you. If we are, we'll discuss next steps.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-primary to-navy-deep rounded-full flex items-center justify-center text-white font-black text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-deep mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card variant="elevated" className="mt-8 p-6 bg-cyan-50">
                <h3 className="font-bold text-navy-deep mb-3">
                  ✓ What We Won't Do
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✗ High-pressure sales tactics</li>
                  <li>✗ One-size-fits-all pitches</li>
                  <li>✗ Waste your time with fluff</li>
                  <li>✗ Promise unrealistic results</li>
                </ul>
              </Card>
            </div>

            {/* Right: Booking Form/Calendar */}
            <div>
              <Card variant="elevated" className="p-8 bg-white">
                <h3 className="text-2xl font-black text-navy-deep mb-6">
                  Schedule Your Call
                </h3>

                {/* PLACEHOLDER: User will add their webform/calendar embed here */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                  <div className="text-6xl mb-4">📅</div>
                  <h4 className="text-xl font-bold text-gray-700 mb-2">
                    Calendar Booking Widget Goes Here
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Replace this placeholder with your Calendly, Acuity, or
                    custom booking calendar embed code.
                  </p>
                  <div className="text-sm text-gray-500 font-mono bg-white p-4 rounded">
                    {`<!-- Replace this div with your calendar embed -->`}
                  </div>
                </div>

                {/* Temporary Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-navy-deep mb-4">
                    Or Contact Us Directly:
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-cyan-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        href="mailto:hello@nichefinders.ai"
                        className="hover:text-cyan-primary"
                      >
                        hello@nichefinders.ai
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-cyan-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>Call/Text: (813) 555-0100</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Trust Signals */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { value: '50+', label: 'Clients Served' },
                  { value: '400%', label: 'Avg ROI' },
                  { value: '<60s', label: 'Response Time' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-2xl font-black text-cyan-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="gray" padding>
        <Container size="lg">
          <h2 className="text-4xl font-black text-navy-deep mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does implementation take?',
                answer:
                  'Most clients see their AI systems live in 6-9 weeks. Exact timeline depends on complexity and your existing tech stack.',
              },
              {
                question: "What if I'm not tech-savvy?",
                answer:
                  "Perfect! We handle all the technical work and train your team to use the systems. You don't need any technical knowledge.",
              },
              {
                question: 'Do you work with businesses outside Florida?',
                answer:
                  'We focus exclusively on Florida businesses to deliver the best local expertise and support. We serve all major FL cities.',
              },
              {
                question: "What's your pricing model?",
                answer:
                  "We'll discuss pricing on the discovery call based on your specific needs. Most clients see 4-10x ROI in the first year.",
              },
              {
                question: 'Can I see examples of your work?',
                answer:
                  'Absolutely! Check our case studies page to see real results from businesses just like yours.',
              },
              {
                question: 'Do you offer ongoing support?',
                answer:
                  'Yes. We provide training, optimization, and support to ensure you get maximum value from your AI systems.',
              },
            ].map((faq, index) => (
              <Card key={index} variant="elevated" className="p-6 bg-white">
                <h3 className="text-lg font-bold text-navy-deep mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section background="navy" padding>
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-black mb-4">
              Ready to Stop Losing Revenue?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your free discovery call now. You'll get a custom AI
              roadmap even if we never work together.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-success"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-success"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No pressure</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-success"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>100% free</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
