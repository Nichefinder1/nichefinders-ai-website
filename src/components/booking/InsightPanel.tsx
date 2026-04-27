'use client';

import type { BookingSlot } from '@/lib/booking-types';

interface Props {
  slot: BookingSlot;
  name: string;
  insight: string;
  isLoading: boolean;
  isConfirming: boolean;
  onConfirm: () => void;
  onBack: () => void;
}

export default function InsightPanel({ slot, name, insight, isLoading, isConfirming, onConfirm, onBack }: Props) {
  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-16 gap-6">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-orange-cta animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta/60">Generating your insight...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 8H3M7 4l-4 4 4 4" />
          </svg>
          Back
        </button>
        <div className="text-right">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-cta/70">{slot.display}</p>
          <p className="text-[10px] text-white/30">30 min · Discovery Call</p>
        </div>
      </div>

      <div className="border border-white/10 border-l-0 relative mb-8 rounded-r-lg">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange-cta rounded-l" />
        <div className="px-6 py-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta/70 mb-4">Your Pre-Call Insight</p>
          <p className="text-white/70 text-base leading-relaxed">{insight}</p>
        </div>
      </div>

      <p className="text-white/40 text-sm mb-6 leading-relaxed">
        Ready to lock in your time, <span className="text-white">{name}</span>? Click confirm and you&apos;ll receive a calendar invite with everything you need.
      </p>

      <button
        onClick={onConfirm}
        disabled={isConfirming}
        className="w-full bg-orange-cta hover:bg-orange-hover text-white font-bold py-4 text-base rounded transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isConfirming ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Booking...
          </span>
        ) : 'Confirm Booking →'}
      </button>
    </div>
  );
}
