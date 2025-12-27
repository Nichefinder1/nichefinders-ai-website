import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Jacksonville | Business Automation JAX',
  description:
    'AI automation for Jacksonville businesses. Serving 975,000+ residents and 180,000+ businesses across Duval, Clay, and St. Johns counties with custom AI solutions.',
  keywords: [
    'AI automation Jacksonville',
    'business automation JAX',
    'AI consulting Jacksonville',
    'Jacksonville AI agency',
    'automated lead generation Jacksonville',
  ].join(', '),
};

export default function JacksonvillePage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'jacksonville')!;
  return <CityTemplate city={city} />;
}
