import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Naples | Business Automation Southwest Florida',
  description:
    'AI automation for Naples businesses. Serving 22,000+ residents and 35,000+ businesses across Collier and Lee counties with premium AI solutions.',
  keywords: [
    'AI automation Naples',
    'business automation Southwest Florida',
    'AI consulting Naples',
    'Naples AI agency',
    'automated lead generation Naples',
  ].join(', '),
};

export default function NaplesPage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'naples')!;
  return <CityTemplate city={city} />;
}
