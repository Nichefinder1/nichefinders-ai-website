'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import AOSProblem from '@/components/ai-os/AOSProblem';
import AOSWhatIs from '@/components/ai-os/AOSWhatIs';
import AOSThreePillars from '@/components/ai-os/AOSThreePillars';
import AOSProcess from '@/components/ai-os/AOSProcess';
import AOSWhatsIncluded from '@/components/ai-os/AOSWhatsIncluded';
import AOSTrustBar from '@/components/ai-os/AOSTrustBar';

// ---------------------------------------------------------------------------
// Main client component
// ---------------------------------------------------------------------------

export default function ThankYouClient() {
  const searchParams = useSearchParams();
  const requested = searchParams.get('requested') === 'true';

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'lead',
        event_label: 'ai_os_opt_in',
        value: 1,
      });
      window.gtag('event', 'ai_os_opt_in', {
        event_category: 'lead',
        event_label: 'ai_os_partner_program',
      });
    }
  }, []);

  return (
    <>
      {/* Confirmation banner — shown after pricing access request */}
      {requested && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-green-900/90 border-b border-green-700 py-3 px-4 text-center">
          <p className="text-green-200 text-sm font-medium">
            Request received. We&apos;ll be in touch shortly.
          </p>
        </div>
      )}

      {/* Hero */}
      <Section background="navy-deepest">
        <Container size="md">
          <div className="pt-24 pb-16 text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              <span className="text-xs font-medium tracking-widest uppercase text-white/50">
                AI OS Partner Program Overview
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-header text-5xl md:text-7xl font-bold text-white leading-tight">
              You&apos;re In.
            </h1>

            {/* Subhead */}
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The full AI OS program breakdown is on its way to your inbox. Read through it —
              then book a call when you&apos;re ready to see if it&apos;s the right fit for your business.
            </p>

            {/* Primary CTA — above the fold */}
            <div className="pt-4">
              <Button href="/book-a-call" variant="primary" size="lg">
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Content sections */}
      <AOSProblem />
      <AOSWhatIs />
      <AOSThreePillars />
      <AOSProcess />
      <AOSWhatsIncluded />
      <AOSTrustBar />

      {/* Bottom CTA */}
      <Section background="navy-deepest">
        <Container size="sm">
          <div className="py-16 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-header text-3xl md:text-4xl font-bold text-white">
                Ready to see if you&apos;re a fit?
              </h2>
              <p className="text-white/60 text-lg max-w-lg mx-auto">
                One 45-minute call. We map your operation, identify the gaps, and give you
                an honest read on whether the AI OS is the right next step.
              </p>
            </div>

            <Button href="/book-a-call" variant="primary" size="lg">
              Book Your Discovery Call
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
