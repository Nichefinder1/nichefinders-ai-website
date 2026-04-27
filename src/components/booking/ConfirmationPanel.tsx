'use client';

import type { BookingSlot } from '@/lib/booking-types';

interface Props {
  slot: BookingSlot;
  name: string;
  calendarLink: string;
}

function formatSlotFull(startIso: string): string {
  return new Date(startIso).toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/New_York',
    timeZoneName: 'short',
  });
}

export default function ConfirmationPanel({ slot, name, calendarLink }: Props) {
  return (
    <div className="w-full text-center">
      <div className="flex items-center justify-center mb-8">
        <div className="w-16 h-16 rounded-full border border-orange-cta/30 bg-orange-cta/10 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-cta">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-3">You&apos;re Booked</p>
      <h3 className="font-header font-bold text-3xl text-white mb-2 leading-tight">
        See you soon, {name.split(' ')[0]}.
      </h3>
      <p className="text-white/40 text-sm mb-8">A confirmation email is on its way.</p>

      <div className="border border-white/10 bg-white/5 px-6 py-5 mb-8 text-left rounded-lg">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-1">Your Call</p>
        <p className="font-header font-bold text-lg text-white">{formatSlotFull(slot.start)}</p>
        <p className="text-xs text-white/30 mt-1">30 min · Discovery Call</p>
      </div>

      <a
        href={calendarLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full border border-orange-cta/30 text-orange-cta py-4 text-sm font-semibold tracking-wide hover:bg-orange-cta/5 transition-colors rounded-lg"
      >
        Add to Google Calendar →
      </a>

      <p className="mt-6 text-white/25 text-xs">Need to reschedule? Reply to your confirmation email.</p>
    </div>
  );
}
