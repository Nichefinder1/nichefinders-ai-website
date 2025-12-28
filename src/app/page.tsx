import Hero from '@/components/sections/Hero';
import ProblemAgitation from '@/components/sections/ProblemAgitation';
import FourPillars from '@/components/sections/FourPillars';
import SixStageTeaser from '@/components/sections/SixStageTeaser';
import WhoWeServe from '@/components/sections/WhoWeServe';
import SocialProof from '@/components/sections/SocialProof';
import TechStack from '@/components/sections/TechStack';
import FeaturedCaseStudy from '@/components/sections/FeaturedCaseStudy';
import ROICalculator from '@/components/sections/ROICalculator';
import FinalCTA from '@/components/sections/FinalCTA';
import InlineCalendarCTA from '@/components/ui/InlineCalendarCTA';
import Container from '@/components/ui/Container';

export const metadata = {
  title: 'NicheFinders AI | Revenue-Generating AI Automation',
  description:
    'Transform your business with revenue-generating AI. Our proven 6-Stage System automates lead capture, follow-up, and conversion. 400% average ROI for home services, automotive, nonprofits, and professional services.',
  keywords: [
    'revenue-generating AI',
    'AI automation',
    'business automation',
    'AI consulting',
    'automated lead generation',
    'AI for home services',
    'business process automation',
    'AI automation Florida',
    'business automation Tampa',
  ].join(', '),
  openGraph: {
    title: 'NicheFinders AI | Transform Your Business with Revenue-Generating AI',
    description:
      'Stop losing revenue to manual processes. Our proven 6-Stage System delivers 400% average ROI for businesses nationwide.',
    type: 'website',
    url: 'https://nichefinders.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NicheFinders AI - Revenue-Generating AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NicheFinders AI | Revenue-Generating AI Automation',
    description:
      'Transform your business with revenue-generating AI. 400% average ROI. Proven results in home services, automotive, nonprofits, and professional services.',
    images: ['/og-image.png'],
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Section - Above the fold */}
      <Hero />

      {/* Problem/Solution Split-Screen */}
      <ProblemAgitation />

      {/* 4 Solutions Pillars - Horizontal Scroll */}
      <FourPillars />

      {/* 6-Stage System Teaser */}
      <SixStageTeaser />

      {/* Who We Serve - Industries Grid */}
      <WhoWeServe />

      {/* In-Content CTA #1 - After Industries */}
      <Container size="lg">
        <InlineCalendarCTA
          variant="primary"
          headline="Stop wondering if AI can work for your industry"
          subheadline="We've helped 50+ businesses just like yours. Book a call and we'll show you exactly how."
          buttonText="See How It Works for Your Business"
        />
      </Container>

      {/* Social Proof - Stats & Testimonials */}
      <SocialProof />

      {/* Tech Stack - Infinite Marquee */}
      <TechStack />

      {/* Featured Case Study */}
      <FeaturedCaseStudy />

      {/* In-Content CTA #2 - After Case Study */}
      <Container size="lg">
        <InlineCalendarCTA
          variant="secondary"
          headline="Want results like this for your business?"
          subheadline="Book your discovery call. We'll analyze your processes and show you exactly where AI can deliver ROI."
          buttonText="Get Your Custom AI Strategy"
        />
      </Container>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
