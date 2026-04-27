'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import CalendarPicker from '@/components/booking/CalendarPicker';
import TimeSlotList from '@/components/booking/TimeSlotList';
import BookingQuiz from '@/components/booking/BookingQuiz';
import InsightPanel from '@/components/booking/InsightPanel';
import ConfirmationPanel from '@/components/booking/ConfirmationPanel';
import type { AvailabilityResponse, BookingDate, BookingSlot, BookingState, QuizData } from '@/lib/booking-types';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

export default function BookingClient() {
  const [bookingState, setBookingState] = useState<BookingState>('calendar');
  const [availability, setAvailability] = useState<AvailabilityResponse | null>(null);
  const [loadingAvail, setLoadingAvail] = useState(true);
  const [availError, setAvailError] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [insight, setInsight] = useState('');
  const [calendarLink, setCalendarLink] = useState('');
  const [bookingError, setBookingError] = useState('');

  const calendarPanelRef = useRef<HTMLDivElement>(null);
  const quizPanelRef = useRef<HTMLDivElement>(null);
  const insightPanelRef = useRef<HTMLDivElement>(null);
  const confirmPanelRef = useRef<HTMLDivElement>(null);
  const quizContainerRef = useRef<HTMLDivElement>(null);

  const reduced = usePrefersReducedMotion();
  const dur = (d: number) => (reduced ? 0 : d);

  useEffect(() => {
    fetch('/api/booking/availability')
      .then((r) => r.json())
      .then((data: AvailabilityResponse) => {
        setAvailability(data);
        if (data.dates?.length) setSelectedDate(data.dates[0].date);
      })
      .catch(() => setAvailError(true))
      .finally(() => setLoadingAvail(false));
  }, []);

  const morphTo = useCallback(
    (from: React.RefObject<HTMLDivElement | null>, to: React.RefObject<HTMLDivElement | null>, cb: () => void) => {
      const fromEl = from.current;
      const toEl = to.current;
      if (!fromEl || !toEl) { cb(); return; }
      gsap.to(fromEl, {
        opacity: 0, y: -16, scale: 0.97,
        duration: dur(0.3), ease: 'power2.in',
        onComplete: () => {
          cb();
          gsap.set(toEl, { opacity: 0, y: 20, scale: 1 });
          gsap.to(toEl, { opacity: 1, y: 0, scale: 1, duration: dur(0.35), ease: 'power2.out' });
        },
      });
    },
    [dur]
  );

  function handleSlotSelect(slot: BookingSlot) {
    setSelectedSlot(slot);
    morphTo(calendarPanelRef, quizPanelRef, () => setBookingState('quiz'));
  }

  async function handleQuizComplete(data: QuizData) {
    setQuizData(data);
    morphTo(quizPanelRef, insightPanelRef, () => setBookingState('loading-insight'));
    try {
      const res = await fetch('/api/booking/insight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, businessName: data.businessName, helpText: data.helpText }),
      });
      const { insight: text } = await res.json();
      setInsight(text);
      setBookingState('insight');
    } catch {
      setInsight("Based on what you've shared, there are clear AI automation opportunities ahead. Looking forward to the conversation.");
      setBookingState('insight');
    }
  }

  async function handleConfirm() {
    if (!selectedSlot || !quizData) return;
    setBookingState('confirming');
    setBookingError('');
    try {
      const res = await fetch('/api/booking/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slot: selectedSlot, quiz: quizData, insight }),
      });
      const data = await res.json();
      if (res.status === 409) {
        setBookingError(data.message);
        setBookingState('calendar');
        const r = await fetch('/api/booking/availability').then((r) => r.json());
        setAvailability(r);
        return;
      }
      if (!res.ok) throw new Error(data.error);
      setCalendarLink(data.calendarLink ?? '');
      morphTo(insightPanelRef, confirmPanelRef, () => setBookingState('confirmed'));
    } catch {
      setBookingError('Something went wrong. Please try again.');
      setBookingState('insight');
    }
  }

  const selectedDateData: BookingDate | undefined = availability?.dates?.find((d) => d.date === selectedDate);
  const isCalendar = bookingState === 'calendar';
  const isQuiz = bookingState === 'quiz';
  const isInsight = bookingState === 'loading-insight' || bookingState === 'insight' || bookingState === 'confirming';
  const isLoadingInsight = bookingState === 'loading-insight';
  const isConfirming = bookingState === 'confirming';
  const isConfirmed = bookingState === 'confirmed';

  return (
    <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-start">

      {/* Left — context */}
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-6">Discovery Call</p>
        <h1 className="font-header font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-[#E8EDF2] mb-6">
          Let&apos;s<br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #C8D9E6 0%, #7aafd4 100%)' }}>
            Talk AI.
          </span>
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-sm">
          30 minutes. No pitch deck. No pressure. Just a real conversation about your business and where AI automation drives the most ROI.
        </p>

        <div className="space-y-6">
          {[
            { n: '01', t: 'Pick a time', d: 'Choose a slot that works for you.' },
            { n: '02', t: 'Tell us about your business', d: 'A few quick questions so our time together is focused.' },
            { n: '03', t: 'Get your pre-call insight', d: 'AI analyzes your answers and prepares a personalized automation roadmap.' },
          ].map((s) => (
            <div key={s.n} className="flex gap-5">
              <span className="font-mono text-2xl font-medium text-white/[0.07] leading-none select-none mt-0.5 shrink-0">{s.n}</span>
              <div>
                <div className="w-6 h-px bg-orange-cta/50 mb-2" />
                <p className="text-white text-sm font-semibold mb-1">{s.t}</p>
                <p className="text-white/40 text-sm leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-white/25 text-sm italic">
          We take on a limited number of clients at a time. If we can&apos;t help you, we&apos;ll tell you.
        </p>
      </div>

      {/* Right — booking widget */}
      <div className="relative">
        <div
          className="p-8 md:p-10 relative overflow-hidden min-h-[480px] rounded-xl border border-white/10"
          style={{ background: 'rgba(0,40,85,0.4)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-cta/60 via-orange-cta to-orange-cta/10" />

          {bookingError && (
            <div className="mb-6 px-4 py-3 border border-red-500/30 bg-red-500/5 text-red-400 text-sm rounded-lg">
              {bookingError}
            </div>
          )}

          <div ref={calendarPanelRef} style={{ display: isCalendar ? 'block' : 'none' }}>
            {loadingAvail ? (
              <div className="flex items-center justify-center py-16">
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-orange-cta/50 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            ) : availError ? (
              <div className="text-center py-16">
                <p className="text-white/40 text-sm mb-4">Scheduling is temporarily unavailable.</p>
                <a href="mailto:hello@nichefinders.ai" className="text-orange-cta text-sm hover:text-orange-hover transition-colors">
                  Email us directly →
                </a>
              </div>
            ) : (
              <div className="space-y-8">
                <CalendarPicker
                  dates={availability?.dates ?? []}
                  selectedDate={selectedDate}
                  onSelectDate={setSelectedDate}
                />
                {selectedDateData && (
                  <TimeSlotList dateData={selectedDateData} onSelectSlot={handleSlotSelect} />
                )}
              </div>
            )}
          </div>

          <div ref={quizPanelRef} style={{ display: isQuiz ? 'block' : 'none' }}>
            {isQuiz && selectedSlot && (
              <BookingQuiz
                slot={selectedSlot}
                onComplete={handleQuizComplete}
                onBack={() => morphTo(quizPanelRef, calendarPanelRef, () => setBookingState('calendar'))}
                containerRef={quizContainerRef}
              />
            )}
          </div>

          <div ref={insightPanelRef} style={{ display: isInsight ? 'block' : 'none' }}>
            {isInsight && selectedSlot && (
              <InsightPanel
                slot={selectedSlot}
                name={quizData?.name ?? ''}
                insight={insight}
                isLoading={isLoadingInsight}
                isConfirming={isConfirming}
                onConfirm={handleConfirm}
                onBack={() => morphTo(insightPanelRef, quizPanelRef, () => setBookingState('quiz'))}
              />
            )}
          </div>

          <div ref={confirmPanelRef} style={{ display: isConfirmed ? 'block' : 'none' }}>
            {isConfirmed && selectedSlot && (
              <ConfirmationPanel slot={selectedSlot} name={quizData?.name ?? ''} calendarLink={calendarLink} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
