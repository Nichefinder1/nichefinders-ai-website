import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { SIX_STAGES, CALENDAR_LINK } from '@/lib/constants';

const stageIcons = [
  // Stage 1 – Lead capture (funnel / magnet)
  <svg key={1} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
  </svg>,
  // Stage 2 – Nurturing (heart / watering)
  <svg key={2} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 9.5a7 7 0 1 0 14 0 4 4 0 0 0-7-2.61A4 4 0 0 0 4.5 9.5z" />
    <path d="M12 21v-8" /><path d="M9 18l3 3 3-3" />
  </svg>,
  // Stage 3 – Conversion (handshake)
  <svg key={3} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>,
  // Stage 4 – Fulfillment (gear/settings)
  <svg key={4} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>,
  // Stage 5 – Retention (refresh/cycle)
  <svg key={5} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>,
  // Stage 6 – Analytics / reporting (bar chart)
  <svg key={6} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>,
];

export default function SixStageTeaser() {

  return (
    <Section background="navy" padding glow>
      <Container size="lg">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-cta/20 text-orange-cta font-bold text-sm rounded-full mb-4">
            OUR PROPRIETARY FRAMEWORK
          </span>
          <h2 className="font-header text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="block">The 6-Stage</span>
            <span className="block">AI Automation System</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Most agencies throw AI at your business and hope it works. We
            follow a proven framework that covers every touchpoint in your
            customer journey—from first contact to repeat business.
          </p>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-white font-semibold">
              Used by 50+ Florida Businesses
            </span>
          </div>
        </div>

        {/* Stages */}
        <div className="relative">
          {/* Desktop: Simple Grid with Step Numbers */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6">
              {SIX_STAGES.map((stage, index) => (
                <div key={stage.number} className="stage-card relative">
                  {/* Step number badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-orange-cta rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg z-10">
                    {stage.number}
                  </div>
                  <Card
                    variant="glass"
                    className="p-6 pt-8 h-full border border-white/20 hover:border-orange-cta/50 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="text-orange-cta mb-4">
                      {stageIcons[index]}
                    </div>

                    {/* Stage Name */}
                    <h3 className="text-lg font-bold text-white mb-3">
                      {stage.name}
                    </h3>

                    {/* CTA Link */}
                    <a
                      href={`/6-stage-system#stage-${stage.number}`}
                      className="text-xs text-orange-cta font-semibold underline decoration-1 underline-offset-2 hover:text-orange-hover transition-colors flex items-center gap-1 mt-3"
                    >
                      See How It Works
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Card>
                  {/* Connecting line to next card (except last in row and last overall) */}
                  {index < 5 && index !== 2 && (
                    <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-cta/60 to-orange-cta/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="lg:hidden space-y-6">
            {SIX_STAGES.map((stage, index) => (
              <Card
                key={stage.number}
                variant="glass"
                className="stage-card p-6 border border-white/20"
              >
                <div className="flex items-start space-x-4">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-cta/20 rounded-full flex items-center justify-center text-orange-cta mb-2">
                      {stageIcons[index]}
                    </div>
                    <div className="text-2xl font-black text-orange-cta text-center">
                      {String(stage.number).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {stage.name}
                    </h3>
                    <a
                      href={`/6-stage-system#stage-${stage.number}`}
                      className="text-xs text-orange-cta font-semibold underline decoration-1 underline-offset-2 hover:text-orange-hover transition-colors flex items-center gap-1"
                    >
                      See How It Works
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            Want to see exactly how each stage works for your business?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/6-stage-system"
              variant="primary"
              size="lg"
              className="min-w-[240px] shadow-xl shadow-orange-cta/30"
            >
              Explore the Full System
            </Button>
            <Button
              href={CALENDAR_LINK}
              external
              variant="secondary"
              size="lg"
              className="min-w-[240px]"
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
