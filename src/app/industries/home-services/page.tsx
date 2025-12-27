import IndustryTemplate from '@/components/templates/IndustryTemplate';
import { INDUSTRIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation for Home & Building Services | Plumbing, HVAC, Contractors & More',
  description:
    'Transform your Florida home & building services business with AI automation. Automated lead capture, instant quotes, job scheduling, and follow-up for plumbers, HVAC, roofers, contractors, electricians, and painters.',
  keywords: [
    'AI for home and building services Florida',
    'plumbing automation Tampa',
    'HVAC lead generation AI',
    'roofing business automation',
    'contractor AI tools Jacksonville',
    'electrical business automation',
    'commercial painting automation',
  ].join(', '),
};

export default function HomeServicesPage() {
  const industry = INDUSTRIES.find((i) => i.slug === 'home-services')!;

  return <IndustryTemplate industry={industry} />;
}
