'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const problems = [
  {
    title: 'Missed Opportunities',
    description: 'Over 50% of leads never get a follow-up. Every unanswered call is money left on the table.',
  },
  {
    title: 'Manual Follow-Up Hell',
    description: 'Your team spends hours doing repetitive tasks instead of closing high-value deals.',
  },
  {
    title: 'Inconsistent Customer Experience',
    description: 'Response times vary wildly. Some customers wait days while others get instant replies.',
  },
  {
    title: 'Revenue Leaking Everywhere',
    description: 'Without automation, you are bleeding money on wasted time, lost leads, and inefficiency.',
  },
];

const solutions = [
  {
    title: 'Instant Lead Capture',
    description: 'AI responds within 60 seconds, 24/7. Never lose a hot lead to slow response times again.',
  },
  {
    title: 'Automated Follow-Up',
    description: 'Smart sequences nurture every lead with personalized messages — no manual work required.',
  },
  {
    title: 'Consistent Excellence',
    description: 'Every customer gets VIP treatment with instant, accurate responses at any hour.',
  },
  {
    title: '3x ROI on Average',
    description: 'Businesses see $3.50 return for every $1 invested in AI automation according to industry research.',
  },
];

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProblemAgitation() {
  return (
    <Section background="navy-deepest" padding glow>
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Left — Problem */}
          <div className="relative rounded-2xl overflow-hidden border border-red-500/20 bg-white/[0.03]">
            {/* Top accent bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-red-500 via-red-400 to-transparent" />

            <div className="p-8 lg:p-10">
              {/* Eyebrow */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-red-400 mb-5">
                The Problem
              </p>

              <h2 className="font-header text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                Your Business Is Hemorrhaging Money
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                While you&apos;re busy running your business, opportunities slip through the cracks every single day.
              </p>

              <div className="space-y-3">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-red-500/[0.06] border border-red-500/10"
                  >
                    <div className="flex-shrink-0 mt-0.5 text-red-400">
                      <XIcon />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-0.5">{problem.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl border border-red-500/15 bg-red-500/[0.04]">
                <p className="text-sm text-gray-400 text-center">
                  Sound familiar? You&apos;re not alone. But there&apos;s a better way...
                </p>
              </div>
            </div>
          </div>

          {/* Right — Solution */}
          <div className="relative rounded-2xl overflow-hidden border border-orange-cta/20 bg-white/[0.03]">
            {/* Top accent bar */}
            <div className="h-[3px] w-full bg-gradient-to-r from-orange-cta via-orange-400 to-transparent" />

            <div className="p-8 lg:p-10">
              {/* Eyebrow */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-orange-cta mb-5">
                The Solution
              </p>

              <h2 className="font-header text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                AI Automation That Actually Delivers
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our 6-Stage System transforms your entire customer journey into a revenue-generating machine.
              </p>

              <div className="space-y-3">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-orange-cta/[0.06] border border-orange-cta/10"
                  >
                    <div className="flex-shrink-0 mt-0.5 text-orange-cta">
                      <CheckIcon />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-0.5">{solution.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  href="/6-stage-system"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  See How Our 6-Stage System Works
                </Button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
