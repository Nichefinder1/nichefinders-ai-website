import IndustryTemplate from '@/components/templates/IndustryTemplate';
import { INDUSTRIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation for Nonprofits | Donor Management & Fundraising',
  description:
    'Maximize impact for your Florida nonprofit with AI automation. Automated donor outreach, event management, volunteer coordination, and fundraising campaigns that scale.',
  keywords: [
    'AI for nonprofits Florida',
    'nonprofit automation Tampa',
    'donor management AI',
    'fundraising automation Jacksonville',
    'volunteer coordination AI Miami',
  ].join(', '),
};

export default function NonprofitsPage() {
  const industry = INDUSTRIES.find((i) => i.slug === 'nonprofits')!;

  return <IndustryTemplate industry={industry} />;
}
