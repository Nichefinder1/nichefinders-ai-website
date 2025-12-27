import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Fort Lauderdale | Business Automation Broward',
  description:
    'Transform your Fort Lauderdale business with AI automation. Serving 185,000+ residents and 85,000+ businesses across Broward and Palm Beach counties.',
  keywords: [
    'AI automation Fort Lauderdale',
    'business automation Broward',
    'AI consulting Fort Lauderdale',
    'Fort Lauderdale AI agency',
    'automated lead generation Fort Lauderdale',
  ].join(', '),
};

export default function FortLauderdalePage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'fort-lauderdale')!;
  return <CityTemplate city={city} />;
}
