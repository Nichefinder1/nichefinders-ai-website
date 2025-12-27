'use client';

import { useEffect } from 'react';
import { initLenis, destroyLenis } from '@/lib/lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = initLenis();

    // Cleanup on unmount
    return () => {
      destroyLenis();
    };
  }, []);

  return null; // This component doesn't render anything
}
