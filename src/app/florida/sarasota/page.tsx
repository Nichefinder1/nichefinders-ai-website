import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Sarasota | Business Automation Gulf Coast Florida',
  description:
    'AI automation for Sarasota businesses. Serving 55,000+ residents and 48,000+ businesses across Sarasota and Manatee counties with cutting-edge AI solutions.',
  keywords: [
    'AI automation Sarasota',
    'business automation Gulf Coast Florida',
    'AI consulting Sarasota',
    'Sarasota AI agency',
    'automated lead generation Sarasota',
  ].join(', '),
};

export default function SarasotaPage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'sarasota')!;
  return <CityTemplate city={city} />;
}
