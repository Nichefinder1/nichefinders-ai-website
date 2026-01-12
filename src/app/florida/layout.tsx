import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florida AI Automation Locations | NicheFinders AI',
  description:
    'AI automation services across Florida - Tampa, Miami, Jacksonville, Orlando, Fort Lauderdale, West Palm Beach, Naples, Sarasota, Daytona, and Tallahassee. Local expertise, proven results.',
  keywords: [
    'AI automation Florida',
    'Florida AI agency',
    'business automation Florida',
    'AI consulting Tampa',
    'AI consulting Miami',
    'AI consulting Jacksonville',
    'Florida business automation',
  ].join(', '),
};

export default function FloridaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
