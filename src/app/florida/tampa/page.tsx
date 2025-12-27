import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Tampa | Business Automation Tampa Bay',
  description:
    'Transform your Tampa business with AI automation. Serving 400,000+ residents and 150,000+ businesses across Hillsborough, Pinellas, and Pasco counties with proven AI solutions.',
  keywords: [
    'AI automation Tampa',
    'business automation Tampa Bay',
    'AI consulting Tampa',
    'Tampa AI agency',
    'automated lead generation Tampa',
  ].join(', '),
};

export default function TampaPage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'tampa')!;
  return <CityTemplate city={city} />;
}
