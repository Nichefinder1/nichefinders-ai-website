'use client';

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import MagneticButton from '@/components/ui/MagneticButton';
import Icon from '@/components/ui/Icon';
import { CALENDAR_LINK } from '@/lib/constants';

export default function FinalCTA() {

  return (
    <Section background="gradient" padding>
      <Container size="lg">
        <div
          className="text-center max-w-4xl mx-auto text-white"
        >
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white font-bold text-sm rounded-full mb-6">
            READY TO TRANSFORM YOUR BUSINESS?
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="block">Stop Losing Money</span>
            <span className="block">to Manual Processes</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Every day without AI automation is another day of missed leads,
            delayed follow-ups, and lost revenue. Let's change that.
          </p>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '',
                text: 'Discovery Call',
                subtext: 'No pressure, just insights',
              },
              {
                icon: '',
                text: 'Custom AI Strategy',
                subtext: 'Built for your business',
              },
              {
                icon: '',
                text: 'ROI Projection',
                subtext: 'See your potential gains',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-lg mb-1">{item.text}</div>
                <div className="text-sm text-white/80">{item.subtext}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <MagneticButton strength={0.5}>
              <Button
                href={CALENDAR_LINK}
                variant="primary"
                size="lg"
                className="min-w-[280px] flex items-center justify-center gap-2"
                external
              >
                <span>Book Your Discovery Call</span>
                <Icon name="arrow-right" className="w-5 h-5" />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.5}>
              <Button
                href="/6-stage-system"
                variant="secondary"
                size="lg"
                className="min-w-[280px] flex items-center justify-center gap-2"
              >
                <span>Learn About Our System</span>
                <Icon name="arrow-right" className="w-5 h-5" />
              </Button>
            </MagneticButton>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
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
              <span>No long-term contracts</span>
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
              <span>Nationwide service</span>
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
              <span>Proven results in 4 industries</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
