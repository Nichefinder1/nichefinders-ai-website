import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { SERVICES } from '@/lib/constants';

export const metadata = {
  title: 'Custom AI Development | Build & Integrate AI Solutions',
  description:
    'Build custom AI systems tailored to your Florida business. From automated workflows to intelligent CRMs, we develop and integrate AI that solves your specific challenges.',
  keywords: [
    'custom AI development Florida',
    'AI automation implementation',
    'business process automation Tampa',
    'custom AI integration',
    'AI workflow automation Jacksonville',
  ].join(', '),
};

export default function CustomAIDevelopmentPage() {
  const service = SERVICES.find((s) => s.slug === 'custom-ai-development')!;

  return <SolutionTemplate service={service} />;
}
