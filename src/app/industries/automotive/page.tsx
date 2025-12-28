import IndustryTemplate from '@/components/templates/IndustryTemplate';
import { INDUSTRIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation for Automotive | Dealerships, Repair Shops & Detailing',
  description:
    'Accelerate your automotive business with AI. Automated lead follow-up, service reminders, appointment booking, and customer retention for dealerships and auto shops.',
  keywords: [
    'AI for car dealerships',
    'auto shop automation',
    'automotive lead generation AI',
    'dealership AI tools',
    'auto repair automation',
  ].join(', '),
};

export default function AutomotivePage() {
  const industry = INDUSTRIES.find((i) => i.slug === 'automotive')!;

  return <IndustryTemplate industry={industry} />;
}
