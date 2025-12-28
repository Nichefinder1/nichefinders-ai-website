import IndustryTemplate from '@/components/templates/IndustryTemplate';
import { INDUSTRIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation for Automotive | Dealerships, Repair Shops & Detailing',
  description:
    'Accelerate your Florida automotive business with AI. Automated lead follow-up, service reminders, appointment booking, and customer retention for dealerships and auto shops.',
  keywords: [
    'AI for car dealerships Florida',
    'auto shop automation Tampa',
    'automotive lead generation AI',
    'dealership AI tools Miami',
    'auto repair automation Orlando',
  ].join(', '),
};

export default function AutomotivePage() {
  const industry = INDUSTRIES.find((i) => i.slug === 'automotive')!;

  return <IndustryTemplate industry={industry} />;
}
