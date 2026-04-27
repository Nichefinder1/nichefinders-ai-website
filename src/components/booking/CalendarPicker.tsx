'use client';

import type { BookingDate } from '@/lib/booking-types';

interface Props {
  dates: BookingDate[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
}

function monthLabel(dateStr: string): string {
  const [y, m] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default function CalendarPicker({ dates, selectedDate, onSelectDate }: Props) {
  if (dates.length === 0) {
    return <p className="text-white/40 text-sm text-center py-8">No availability in the next two weeks.</p>;
  }

  const byMonth: Record<string, BookingDate[]> = {};
  for (const d of dates) {
    const key = d.date.slice(0, 7);
    (byMonth[key] ??= []).push(d);
  }

  return (
    <div className="w-full space-y-6">
      {Object.entries(byMonth).map(([monthKey, monthDates]) => (
        <div key={monthKey}>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-3">
            {monthLabel(monthDates[0].date)}
          </p>
          <div className="flex flex-wrap gap-2">
            {monthDates.map((d) => {
              const isSelected = d.date === selectedDate;
              const dayNum = d.date.split('-')[2];
              const dayShort = d.dayOfWeek.slice(0, 3);
              return (
                <button
                  key={d.date}
                  onClick={() => onSelectDate(d.date)}
                  className={`flex flex-col items-center px-4 py-3 rounded-lg border transition-all duration-200 min-w-[60px] ${
                    isSelected
                      ? 'border-orange-cta bg-orange-cta/10 text-orange-cta'
                      : 'border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-semibold tracking-wide uppercase">{dayShort}</span>
                  <span className="text-lg font-bold leading-tight">{dayNum}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
