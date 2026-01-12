import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Miami | Our Headquarters | NicheFinders AI',
  description:
    'NicheFinders AI headquarters in Miami. Transform your Miami business with AI automation. Serving 450,000+ residents and 200,000+ businesses across Miami-Dade and Broward counties. 3x average ROI with our proven 6-Stage System.',
  keywords: [
    'AI automation Miami',
    'Miami AI agency',
    'AI automation agency Miami',
    'business automation Miami-Dade',
    'AI consulting Miami',
    'automated lead generation Miami',
    'Miami business automation',
    'AI agency South Florida',
  ].join(', '),
};

export default function MiamiPage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'miami')!;
  return <CityTemplate city={city} />;
}
