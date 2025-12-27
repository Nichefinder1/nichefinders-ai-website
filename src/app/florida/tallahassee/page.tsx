import CityTemplate from '@/components/templates/CityTemplate';
import { FLORIDA_CITIES } from '@/lib/constants';

export const metadata = {
  title: 'AI Automation Agency Tallahassee | Business Automation North Florida',
  description:
    'Transform your Tallahassee business with AI automation. Serving 195,000+ residents and 50,000+ businesses across Leon, Wakulla, and Gadsden counties.',
  keywords: [
    'AI automation Tallahassee',
    'business automation North Florida',
    'AI consulting Tallahassee',
    'Tallahassee AI agency',
    'automated lead generation Tallahassee',
  ].join(', '),
};

export default function TallahasseePage() {
  const city = FLORIDA_CITIES.find((c) => c.slug === 'tallahassee')!;
  return <CityTemplate city={city} />;
}
