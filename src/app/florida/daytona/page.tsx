import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Daytona Beach | Business Automation East Coast Florida',
  description:
    'Transform your Daytona Beach business with AI automation. Serving 70,000+ residents and 45,000+ businesses across Volusia and Flagler counties.',
  keywords: [
    'AI automation Daytona Beach',
    'business automation East Coast Florida',
    'AI consulting Daytona',
    'Daytona Beach AI agency',
    'automated lead generation Daytona',
  ].join(', '),
};

export default function DaytonaPage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'daytona')!;
  return <CityTemplate city={city} />;
}
