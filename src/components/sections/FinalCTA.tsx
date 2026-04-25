'use client';

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import MagneticButton from '@/components/ui/MagneticButton';
import Icon from '@/components/ui/Icon';
import { CALENDAR_LINK } from '@/lib/constants';

export default function FinalCTA() {

  return (
    <Section background="gradient" padding glow className="border-b border-blue-900/80" style={{ boxShadow: '0 4px 40px rgba(0,40,100,0.5)' }}>
      <Container size="lg" className="pb-20 md:pb-28">
        <div
          className="text-center max-w-4xl mx-auto text-white"
        >
          {/* Headline */}
          <h2 className="font-header text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Stop Losing Money</span>
            <span className="block">to Manual Processes</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Every day without AI automation is another day of missed leads,
            delayed follow-ups, and lost revenue. Let's change that.
          </p>

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
          <div className="flex items-center justify-center gap-4 text-sm text-white/50">
            <span>No long-term contracts</span>
            <span className="w-px h-4 bg-white/20" />
            <span>Nationwide service</span>
            <span className="w-px h-4 bg-white/20" />
            <span>Proven results in 4 industries</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
