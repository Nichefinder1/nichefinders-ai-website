import type { Metadata } from 'next';

import AOSHero from '@/components/ai-os/AOSHero';
import AOSProblem from '@/components/ai-os/AOSProblem';
import AOSWhatIs from '@/components/ai-os/AOSWhatIs';
import AOSThreePillars from '@/components/ai-os/AOSThreePillars';
import AOSProcess from '@/components/ai-os/AOSProcess';
import AOSWhatsIncluded from '@/components/ai-os/AOSWhatsIncluded';
import AOSTrustBar from '@/components/ai-os/AOSTrustBar';
import AOSFinalCTA from '@/components/ai-os/AOSFinalCTA';
// Client wrapper handles ssr:false for D3/GSAP
import ClusterGraph from '@/components/ai-os/ClusterGraphDynamic';

export const metadata: Metadata = {
  title: 'AI OS Partner Program | NicheFinders AI',
  description:
    'The Nichefinders AI OS Partner Program gives contracting companies a complete AI Operating System — structured processes, trained teams, and real AI systems built for your business. Six months. Direct access. No hand-offs.',
  keywords: [
    'AI OS partner program',
    'artificial intelligence operating system',
    'AI business operating system',
    'business AI implementation',
    'AI automation for contractors',
    'business process AI',
    'NicheFinders AI',
    'contractor AI systems',
    'AI operating system for business',
  ],
  openGraph: {
    title: 'AI OS Partner Program | NicheFinders AI',
    description:
      'A complete AI Operating System for your business. Structure first. Then intelligence. Six months, direct access, no hand-offs.',
    type: 'website',
    url: 'https://nichefinders.ai/ai-os-partner-program',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI OS Partner Program | NicheFinders AI',
    description:
      'A complete AI Operating System for your business. Structure first. Then intelligence.',
  },
  // No noindex — this page should be indexed
};

export default function AIPartnerProgramPage() {
  return (
    <main>
      {/* 1. Hero */}
      <AOSHero />

      {/* 2. Problem / agitation */}
      <AOSProblem />

      {/* 3. What is the AI OS */}
      <AOSWhatIs />

      {/* 4. Interactive D3 cluster visualization — shows chaos vs structured */}
      <section id="ai-os-overview" aria-label="AI OS Business Areas Visualization">
        <ClusterGraph />
      </section>

      {/* 5. Three pillars */}
      <AOSThreePillars />

      {/* 6. Process / how it works */}
      <AOSProcess />

      {/* 7. What's included (no pricing) */}
      <AOSWhatsIncluded />

      {/* 8. Trust bar / social proof */}
      <AOSTrustBar />

      {/* 9. Final CTA */}
      <AOSFinalCTA />
    </main>
  );
}
