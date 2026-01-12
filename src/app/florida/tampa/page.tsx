import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Tampa | Tampa Bay Business Automation | NicheFinders AI',
  description:
    'Transform your Tampa Bay business with AI automation. From our Miami headquarters, we serve 400,000+ Tampa residents and 150,000+ businesses across Hillsborough, Pinellas, and Pasco counties. 3x average ROI with proven AI solutions.',
  keywords: [
    'AI automation Tampa',
    'Tampa AI agency',
    'business automation Tampa Bay',
    'AI consulting Tampa',
    'Tampa business automation',
    'automated lead generation Tampa',
    'AI agency Tampa Bay',
    'Tampa Bay AI consulting',
  ].join(', '),
};

export default function TampaPage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'tampa')!;
  return <CityTemplate city={city} />;
}
