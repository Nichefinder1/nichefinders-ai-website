'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConversionFire() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        event_category: 'booking',
        event_label: 'discovery_call_booked',
        value: 1,
      });
      window.gtag('event', 'discovery_call_booked', {
        event_category: 'lead',
        event_label: 'book_a_call_thank_you',
      });
    }
  }, []);

  return null;
}
