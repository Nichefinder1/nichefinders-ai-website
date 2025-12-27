import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Orlando | Business Automation Central Florida',
  description:
    'AI automation for Orlando businesses. Serving 310,000+ residents and 140,000+ businesses across Orange, Seminole, and Osceola counties with proven AI solutions.',
  keywords: [
    'AI automation Orlando',
    'business automation Central Florida',
    'AI consulting Orlando',
    'Orlando AI agency',
    'automated lead generation Orlando',
  ].join(', '),
};

export default function OrlandoPage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'orlando')!;
  return <CityTemplate city={city} />;
}
