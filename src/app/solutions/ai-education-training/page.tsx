import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { SERVICES } from '@/lib/constants';

export const metadata = {
  title: 'AI Education & Training | Empower Your Team',
  description:
    'Train your Florida team to leverage AI effectively. Hands-on workshops, ongoing support, and practical training that turns your staff into AI power users.',
  keywords: [
    'AI training Florida',
    'AI workshops Tampa',
    'business AI education',
    'AI team training Jacksonville',
    'AI upskilling Miami',
  ].join(', '),
};

export default function AIEducationTrainingPage() {
  const service = SERVICES.find((s) => s.slug === 'ai-education-training')!;

  return <SolutionTemplate service={service} />;
}
