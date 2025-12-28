'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CALENDAR_LINK } from '@/lib/constants';

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-24 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-300',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      )}
    >
      {/* Primary CTA - Book Call */}
      <Link
        href={CALENDAR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-gradient-to-r from-cyan-primary to-cyan-600 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <span className="font-bold text-sm whitespace-nowrap">Book Discovery Call</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </Link>

      {/* Secondary Actions */}
      <div className="flex items-center gap-3">
        {/* ROI Calculator */}
        <Link
          href="/resources/roi-calculator"
          className="group flex items-center justify-center w-12 h-12 bg-white text-navy-deep rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="ROI Calculator"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span className="absolute right-full mr-3 bg-navy-deep text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            ROI Calculator
          </span>
        </Link>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center justify-center w-12 h-12 bg-white text-navy-deep rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <span className="absolute right-full mr-3 bg-navy-deep text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Back to Top
          </span>
        </button>
      </div>
    </div>
  );
}
