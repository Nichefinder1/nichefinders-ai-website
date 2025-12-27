'use client';

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis: Lenis | null = null;

/**
 * Initialize Lenis smooth scrolling
 * Call this in your root layout or main component
 */
export function initLenis() {
  if (typeof window === 'undefined' || lenis) return;

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Create Lenis instance
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Connect Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis?.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Expose lenis globally for debugging
  if (typeof window !== 'undefined') {
    (window as any).lenis = lenis;
  }

  return lenis;
}

/**
 * Destroy Lenis instance
 * Call this when component unmounts
 */
export function destroyLenis() {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}

/**
 * Get current Lenis instance
 */
export function getLenis() {
  return lenis;
}

/**
 * Scroll to element with smooth animation
 * @param target - CSS selector, element, or number (scroll position)
 * @param options - Scroll options
 */
export function scrollTo(
  target: string | HTMLElement | number,
  options?: {
    offset?: number;
    duration?: number;
    easing?: (t: number) => number;
    immediate?: boolean;
    lock?: boolean;
    onComplete?: () => void;
  }
) {
  if (!lenis) {
    console.warn('Lenis not initialized. Call initLenis() first.');
    return;
  }

  lenis.scrollTo(target, options);
}

/**
 * Stop smooth scrolling
 */
export function stopScroll() {
  if (lenis) {
    lenis.stop();
  }
}

/**
 * Start smooth scrolling
 */
export function startScroll() {
  if (lenis) {
    lenis.start();
  }
}

/**
 * React hook for Lenis
 * Usage:
 *
 * useEffect(() => {
 *   const lenis = useLenis();
 *   return () => destroyLenis();
 * }, []);
 */
export function useLenis() {
  if (typeof window === 'undefined') return null;

  if (!lenis) {
    return initLenis();
  }

  return lenis;
}
