import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Services Florida | Miami, Tampa & 10 Cities | NicheFinders AI',
  description:
    'AI automation services across Florida from our Miami headquarters. Serving Miami, Tampa, Jacksonville, Orlando, Fort Lauderdale, West Palm Beach, Naples, Sarasota, Daytona, and Tallahassee. Local expertise, proven 3x ROI results.',
  keywords: [
    'AI automation Florida',
    'AI automation Miami',
    'AI automation Tampa',
    'Florida AI agency',
    'business automation Florida',
    'AI consulting Miami',
    'AI consulting Tampa',
    'Miami AI agency',
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
