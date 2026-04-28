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
      window.gtag('event', 'Website_Call_Booked_From_Website', {
        event_category: 'booking',
        event_label: 'discovery_call_thank_you_page',
        value: 1,
      });
    }
  }, []);

  return null;
}
