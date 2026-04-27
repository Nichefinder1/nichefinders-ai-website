'use client';

import { useRef, useEffect, useState } from 'react';
import type { BookingSlot, QuizData } from '@/lib/booking-types';

interface Props {
  slot: BookingSlot;
  onComplete: (data: QuizData) => void;
  onBack: () => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const STEPS = [
  { field: 'name' as const, label: 'First, your name.', placeholder: 'Your full name', type: 'text' },
  { field: 'businessName' as const, label: 'What is your business called?', placeholder: 'Business name', type: 'text' },
  { field: 'email' as const, label: 'Best email to confirm your booking.', placeholder: 'your@email.com', type: 'email' },
  { field: 'helpText' as const, label: 'How can NicheFinders AI help you?', placeholder: "What's the challenge you're working through? Be specific.", type: 'textarea' },
];

export default function BookingQuiz({ slot, onComplete, onBack, containerRef }: Props) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuizData>({ name: '', businessName: '', email: '', helpText: '' });
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const current = STEPS[step];
  const progress = ((step + 1) / STEPS.length) * 100;

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [step]);

  function validate(value: string): string {
    if (!value.trim()) return 'This field is required.';
    if (current.field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.';
    if (current.field === 'helpText' && value.trim().length < 20) return 'Please share a bit more (at least 20 characters).';
    return '';
  }

  function handleNext() {
    const err = validate(data[current.field]);
    if (err) { setError(err); return; }
    setError('');
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1);
    } else {
      onComplete(data);
    }
  }

  function handleBack() {
    if (step === 0) { onBack(); } else { setError(''); setStep((s) => s - 1); }
  }

  const inputClass = `w-full bg-white/5 border border-white/10 text-white placeholder-white/20 px-4 py-3.5 text-base rounded-lg outline-none focus:border-orange-cta transition-colors duration-200`;

  return (
    <div ref={containerRef} className="w-full">
      <div className="flex items-center justify-between mb-8">
        <button onClick={handleBack} className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm">
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

      <div className="w-full h-px bg-white/10 mb-8 relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full bg-orange-cta transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <div className="w-full">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">{step + 1} of {STEPS.length}</p>
        <h3 className="font-header font-bold text-2xl text-white mb-6 leading-tight">{current.label}</h3>

        {current.type === 'textarea' ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={data[current.field]}
            onChange={(e) => { setData((d) => ({ ...d, [current.field]: e.target.value })); if (error) setError(''); }}
            placeholder={current.placeholder}
            rows={4}
            className={`${inputClass} resize-none`}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type={current.type}
            value={data[current.field]}
            onChange={(e) => { setData((d) => ({ ...d, [current.field]: e.target.value })); if (error) setError(''); }}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleNext(); } }}
            placeholder={current.placeholder}
            className={inputClass}
          />
        )}

        {error && <p className="mt-2 text-sm text-red-400/80">{error}</p>}

        <button
          onClick={handleNext}
          className="mt-6 w-full bg-orange-cta hover:bg-orange-hover text-white font-bold py-4 text-base rounded transition-colors duration-200"
        >
          {step < STEPS.length - 1 ? 'Continue →' : 'See My Insight →'}
        </button>
      </div>
    </div>
  );
}
