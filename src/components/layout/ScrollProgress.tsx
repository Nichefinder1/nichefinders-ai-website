'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Calculate percentage scrolled
      const totalScrollableHeight = documentHeight - windowHeight;
      const currentProgress = (scrollTop / totalScrollableHeight) * 100;

      setProgress(Math.min(currentProgress, 100));
    };

    // Calculate on mount
    calculateProgress();

    // Update on scroll
    window.addEventListener('scroll', calculateProgress);

    // Update on resize (in case content height changes)
    window.addEventListener('resize', calculateProgress);

    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cyan-primary via-cyan-light to-navy-deep transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Circular Progress Indicator (bottom right, near FAB) */}
      <div
        className={cn(
          'fixed bottom-8 right-28 z-30 transition-all duration-300',
          progress > 5 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="relative w-12 h-12">
          {/* Background Circle */}
          <svg
            className="w-12 h-12 transform -rotate-90"
            viewBox="0 0 48 48"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="4"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
              className="transition-all duration-150 ease-out"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3BBADD" />
                <stop offset="100%" stopColor="#0A1929" />
              </linearGradient>
            </defs>
          </svg>

          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-white">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
