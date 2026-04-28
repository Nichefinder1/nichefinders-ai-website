import type { Metadata } from 'next';
import ROICalculatorClient from './ROICalculatorClient';

export const metadata: Metadata = {
  title: 'AI ROI Calculator | Free Tool',
  description:
    'Calculate the potential return on investment from AI automation for your business. Enter your current metrics and see what AI could do for your revenue and operations.',
  openGraph: {
    title: 'AI ROI Calculator | Free Tool | NicheFinders AI',
    description:
      'Free tool: calculate your potential AI automation ROI. See projected revenue gains, time savings, and payback period based on your business metrics.',
  },
};

export default function ROICalculatorPage() {
  return <ROICalculatorClient />;
}
