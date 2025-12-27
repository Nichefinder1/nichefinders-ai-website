import SolutionTemplate from '@/components/templates/SolutionTemplate';
import { SERVICES } from '@/lib/constants';

export const metadata = {
  title: 'AI Consulting & Strategy | NicheFinders AI',
  description:
    'Get expert AI consulting to build a custom automation roadmap for your Florida business. Identify opportunities, assess readiness, and create a winning AI strategy with proven ROI.',
  keywords: [
    'AI consulting Florida',
    'AI strategy Tampa',
    'business automation consulting',
    'AI readiness assessment',
    'AI ROI analysis',
  ].join(', '),
};

export default function AIConsultingPage() {
  const service = SERVICES.find((s) => s.slug === 'ai-consulting')!;

  return <SolutionTemplate service={service} />;
}
