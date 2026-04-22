'use client';

import dynamic from 'next/dynamic';

const ClusterGraph = dynamic(
  () => import('@/components/ai-os/ClusterGraph'),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full flex items-center justify-center"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #001A3A 0%, #0A2040 50%, #001A3A 100%)',
        }}
        aria-label="Loading AI OS visualization"
      >
        <p className="text-white/40 text-sm tracking-widest uppercase">
          Loading visualization&hellip;
        </p>
      </div>
    ),
  },
);

export default function ClusterGraphDynamic() {
  return <ClusterGraph />;
}
