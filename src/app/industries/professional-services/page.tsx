import IndustryTemplate from '@/components/templates/IndustryTemplate';
import { INDUSTRIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation for Professional Services | Law, Accounting & Consulting',
  description:
    'Streamline your Florida professional services firm with AI. Automated client intake, appointment scheduling, document processing, and follow-up for lawyers, accountants, and consultants.',
  keywords: [
    'AI for law firms Florida',
    'accounting automation Tampa',
    'professional services AI',
    'legal automation Jacksonville',
    'consulting business AI Miami',
  ].join(', '),
};

export default function ProfessionalServicesPage() {
  const industry = INDUSTRIES.find((i) => i.slug === 'professional-services')!;

  return <IndustryTemplate industry={industry} />;
}
