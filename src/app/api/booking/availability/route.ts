import { NextResponse } from 'next/server';
import { getFreeBusy, type BusyPeriod } from '@/lib/google-calendar';
import { applyScarcity } from '@/lib/slot-scarcity';
import type { BookingSlot, BookingDate, AvailabilityResponse } from '@/lib/booking-types';

export const revalidate = 300;

const START_HOUR = 9;
const END_HOUR = 17;
const SLOT_MINUTES = 30;
const ALLOWED_DAYS = [2, 3, 4]; // Tue, Wed, Thu
const ADVANCE_HOURS = 48;
const WINDOW_DAYS = 14;
const TZ = 'America/New_York';

function toET(date: Date): Date {
  const etStr = date.toLocaleString('en-US', { timeZone: TZ });
  return new Date(etStr);
}

function formatTime(date: Date): string {
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: TZ,
  });
}

function toISOinET(y: number, mo: number, d: number, h: number, min: number): Date {
  const pad = (n: number) => String(n).padStart(2, '0');
  const dateStr = `${y}-${pad(mo)}-${pad(d)}T${pad(h)}:${pad(min)}:00`;
  const probe = new Date(`${dateStr}Z`);
  const etOffset = new Date(probe.toLocaleString('en-US', { timeZone: TZ })).getTime() - probe.getTime();
  return new Date(probe.getTime() - etOffset);
}

function overlaps(slotStart: Date, slotEnd: Date, busy: BusyPeriod[]): boolean {
  return busy.some((b) => {
    const bs = new Date(b.start);
    const be = new Date(b.end);
    return slotStart < be && slotEnd > bs;
  });
}

export async function GET(): Promise<NextResponse> {
  try {
    const now = new Date();
    const cutoff = new Date(now.getTime() + ADVANCE_HOURS * 60 * 60 * 1000);
    const windowEnd = new Date(now.getTime() + WINDOW_DAYS * 24 * 60 * 60 * 1000);

    const busy = await getFreeBusy(now, windowEnd);
    const dates: BookingDate[] = [];

    const cursor = new Date(now);
    cursor.setHours(0, 0, 0, 0);

    while (cursor <= windowEnd) {
      const etDate = toET(cursor);
      const dow = etDate.getDay();

      if (ALLOWED_DAYS.includes(dow)) {
        const y = etDate.getFullYear();
        const mo = etDate.getMonth() + 1;
        const d = etDate.getDate();
        const dateStr = `${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        const dayName = etDate.toLocaleDateString('en-US', { weekday: 'long', timeZone: TZ });

        const slots: BookingSlot[] = [];
        let h = START_HOUR;
        let m = 0;

        while (h < END_HOUR) {
          const slotStart = toISOinET(y, mo, d, h, m);
          const slotEnd = new Date(slotStart.getTime() + SLOT_MINUTES * 60 * 1000);

          const slotEndET = toET(slotEnd);
          if (slotEndET.getHours() > END_HOUR || (slotEndET.getHours() === END_HOUR && slotEndET.getMinutes() > 0)) break;

          if (slotStart > cutoff && !overlaps(slotStart, slotEnd, busy)) {
            slots.push({
              start: slotStart.toISOString(),
              end: slotEnd.toISOString(),
              display: formatTime(slotStart),
            });
          }

          m += SLOT_MINUTES;
          if (m >= 60) { h += Math.floor(m / 60); m = m % 60; }
        }

        if (slots.length > 0) {
          dates.push({ date: dateStr, dayOfWeek: dayName, slots: applyScarcity(slots, dateStr) });
        }
      }

      cursor.setDate(cursor.getDate() + 1);
    }

    return NextResponse.json({ dates } as AvailabilityResponse, {
      headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=60' },
    });
  } catch (err) {
    console.error('[availability]', err);
    return NextResponse.json({ error: 'unavailable' }, { status: 503 });
  }
}
