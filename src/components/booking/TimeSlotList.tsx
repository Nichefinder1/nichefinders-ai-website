'use client';

import type { BookingSlot, BookingDate } from '@/lib/booking-types';

interface Props {
  dateData: BookingDate;
  onSelectSlot: (slot: BookingSlot) => void;
}

export default function TimeSlotList({ dateData, onSelectSlot }: Props) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40">
          {dateData.dayOfWeek}
        </p>
        <span className="text-xs text-white/30">
          {dateData.slots.length} {dateData.slots.length === 1 ? 'spot' : 'spots'} left
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {dateData.slots.map((slot) => (
          <button
            key={slot.start}
            onClick={() => onSelectSlot(slot)}
            className="w-full flex items-center justify-between py-3.5 px-5 border border-white/10 bg-white/5 hover:border-orange-cta/50 hover:bg-orange-cta/5 transition-all duration-200 rounded-lg group text-left"
          >
            <span className="text-base font-semibold text-white group-hover:text-orange-cta transition-colors">
              {slot.display}
            </span>
            <span className="flex items-center gap-2">
              <span className="text-xs text-white/30 group-hover:text-orange-cta/60 transition-colors">30 min</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20 group-hover:text-orange-cta transition-colors">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
