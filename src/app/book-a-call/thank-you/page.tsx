import type { Metadata } from 'next';
import Link from 'next/link';
import ConversionFire from './ConversionFire';

export const metadata: Metadata = {
  title: 'You\'re Booked | NicheFinders AI',
  description: 'Your discovery call is confirmed. We\'ll see you soon.',
  robots: { index: false, follow: false },
};

export default function BookACallThankYouPage() {
  return (
    <main style={{ background: 'linear-gradient(180deg, #001A3A 0%, #002855 100%)', minHeight: '100vh' }}>
      <ConversionFire />
      <section className="relative flex items-center justify-center min-h-screen px-6">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 rounded-full border border-orange-cta/30 bg-orange-cta/10 flex items-center justify-center mx-auto mb-8">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-orange-cta">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-cta mb-4">Confirmed</p>
          <h1 className="font-header font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            You&apos;re on the calendar.
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Check your email for the confirmation and calendar invite. We&apos;ll see you on the call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-insights"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-cta hover:bg-orange-hover text-white font-bold text-sm rounded transition-all duration-200"
            >
              Read AI Insights While You Wait
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/25 hover:border-white/60 rounded font-semibold text-sm transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
