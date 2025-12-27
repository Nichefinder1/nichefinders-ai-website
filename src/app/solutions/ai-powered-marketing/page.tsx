import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { SERVICES } from '@/lib/constants';

export const metadata = {
  title: 'AI-Powered Marketing & Growth | Automated Lead Generation',
  description:
    'Scale your Florida business with AI-powered marketing automation. Automated lead generation, follow-up sequences, and conversion optimization that drives real results.',
  keywords: [
    'AI marketing automation Florida',
    'automated lead generation Tampa',
    'AI lead nurturing',
    'marketing automation Miami',
    'AI conversion optimization Orlando',
  ].join(', '),
};

export default function AIPoweredMarketingPage() {
  const service = SERVICES.find((s) => s.slug === 'ai-powered-marketing')!;

  return <SolutionTemplate service={service} />;
}
