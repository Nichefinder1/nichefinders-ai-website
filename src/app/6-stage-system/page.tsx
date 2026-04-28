import type { Metadata } from 'next';
import SixStageClient from './SixStageClient';

export const metadata: Metadata = {
  title: '6-Stage AI Automation System',
  description:
    'Our proven 6-Stage System takes your business from manual operations to fully automated AI-driven processes. Discover the framework behind consistent 3x ROI for our clients.',
  openGraph: {
    title: '6-Stage AI Automation System | NicheFinders AI',
    description:
      'The proven 6-stage framework that transforms manual business operations into AI-driven, self-improving systems. Used by clients across multiple industries.',
  },
};

export default function SixStageSystemPage() {
  return <SixStageClient />;
}
