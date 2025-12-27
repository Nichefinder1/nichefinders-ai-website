import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency West Palm Beach | Business Automation Palm Beach County',
  description:
    'AI automation for West Palm Beach businesses. Serving 115,000+ residents and 65,000+ businesses across Palm Beach and Martin counties with custom AI solutions.',
  keywords: [
    'AI automation West Palm Beach',
    'business automation Palm Beach County',
    'AI consulting West Palm Beach',
    'West Palm Beach AI agency',
    'automated lead generation West Palm Beach',
  ].join(', '),
};

export default function WestPalmBeachPage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'west-palm-beach')!;
  return <CityTemplate city={city} />;
}
