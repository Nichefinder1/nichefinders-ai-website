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

export const metadata = {
  title: 'AI Automation Agency Florida | Miami-Based | NicheFinders AI',
  description:
    'Miami-based AI automation agency serving all of Florida. Our proven 6-Stage System automates lead capture, follow-up, and conversion. 3x average ROI for home services, automotive, nonprofits, and professional services across Miami, Tampa, and statewide.',
  keywords: [
    'AI automation agency Florida',
    'AI automation Miami',
    'business automation Florida',
    'AI consulting Miami',
    'AI automation Tampa',
    'automated lead generation Florida',
    'AI for home services',
    'business process automation',
    'Miami AI agency',
    'Florida business automation',
  ].join(', '),
  openGraph: {
    title: 'AI Automation Agency Florida | Miami-Based | NicheFinders AI',
    description:
      'Miami-based AI automation agency serving Florida businesses. Our proven 6-Stage System delivers 3x average ROI for home services, automotive, nonprofits, and professional services.',
    type: 'website',
    url: 'https://nichefinders.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NicheFinders AI - Miami-Based AI Automation Agency Serving Florida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency Florida | Miami-Based | NicheFinders AI',
    description:
      'Miami-based AI automation agency serving Florida. 3x average ROI. Proven results in home services, automotive, nonprofits, and professional services.',
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

      {/* Social Proof - Stats & Testimonials */}
      <SocialProof />

      {/* Tech Stack - Infinite Marquee */}
      <TechStack />

      {/* Featured Case Study */}
      <FeaturedCaseStudy />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
