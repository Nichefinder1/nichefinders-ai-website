import type { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'Case Studies | Real Business Results',
  description:
    'See how NicheFinders AI has helped home service businesses, automotive shops, nonprofits, and professional services firms grow with AI automation. Real results, real clients.',
  openGraph: {
    title: 'Case Studies | Real Business Results | NicheFinders AI',
    description:
      'Real-world AI automation results across home services, automotive, nonprofits, and professional services. See measurable ROI from our clients.',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
