import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Miami | Business Automation Miami-Dade',
  description:
    'Transform your Miami business with AI. Serving 475,000+ residents and 200,000+ businesses across Miami-Dade, Broward, and Monroe counties with cutting-edge AI automation.',
  keywords: [
    'AI automation Miami',
    'business automation Miami-Dade',
    'AI consulting Miami',
    'Miami AI agency',
    'automated lead generation Miami',
  ].join(', '),
};

export default function MiamiPage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'miami')!;
  return <CityTemplate city={city} />;
}
