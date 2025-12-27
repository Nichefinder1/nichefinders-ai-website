/**
 * GSAP Animation Helpers
 * Centralized animation utilities for consistent premium feel
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade in with slide up animation
 * Premium reveal for section content
 */
export function fadeInUp(element: HTMLElement | string, options: gsap.TweenVars = {}) {
  return gsap.from(element, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    ...options,
  });
}

/**
 * Fade in with scale animation
 * Best for cards and images
 */
export function fadeInScale(element: HTMLElement | string, options: gsap.TweenVars = {}) {
  return gsap.from(element, {
    scale: 0.95,
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out',
    ...options,
  });
}

/**
 * Stagger animation for lists/grids
 * Reveals items one by one
 */
export function staggerFadeIn(
  elements: HTMLElement[] | NodeListOf<Element> | string,
  options: gsap.TweenVars = {}
) {
  return gsap.from(elements, {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: 'power2.out',
    ...options,
  });
}

/**
 * Word-by-word text reveal
 * Cinematic headline animations
 */
export function revealWords(element: HTMLElement | string, options: gsap.TweenVars = {}) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;

  // Split text into words
  const text = el.textContent || '';
  const words = text.split(' ');
  el.innerHTML = words
    .map(word => `<span class="word-reveal"><span>${word}</span></span>`)
    .join(' ');

  const wordSpans = el.querySelectorAll('.word-reveal span');

  return gsap.from(wordSpans, {
    y: '100%',
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: 'power2.out',
    ...options,
  });
}

/**
 * Parallax effect
 * Different scroll speeds for depth
 */
export function parallax(
  element: HTMLElement | string,
  speed: number = 0.5,
  options: ScrollTrigger.Vars = {}
) {
  return gsap.to(element, {
    y: () => `${-100 * speed}%`,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      ...options,
    },
  });
}

/**
 * Scroll-triggered fade in
 * Reveals content as user scrolls
 */
export function scrollFadeIn(
  element: HTMLElement | string,
  options: gsap.TweenVars & { trigger?: string; start?: string; end?: string } = {}
) {
  const { trigger, start = 'top 80%', end, ...tweenOptions } = options;

  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: trigger || element,
      start,
      end,
      toggleActions: 'play none none reverse',
    },
    ...tweenOptions,
  });
}

/**
 * Counter animation
 * Numbers count up from 0
 */
export function animateCounter(
  element: HTMLElement | string,
  target: number,
  options: gsap.TweenVars = {}
) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: target,
    duration: 1.5,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = Math.floor(obj.value).toLocaleString();
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
    ...options,
  });
}

/**
 * Horizontal scroll gallery
 * Smooth horizontal scrolling section
 */
export function horizontalScroll(
  container: HTMLElement | string,
  items: HTMLElement[] | NodeListOf<Element> | string,
  options: ScrollTrigger.Vars = {}
) {
  const containerEl = typeof container === 'string' ? document.querySelector(container) : container;
  const itemsEl = typeof items === 'string' ? document.querySelectorAll(items) : items;

  if (!containerEl || !itemsEl) return null;

  const totalWidth = Array.from(itemsEl).reduce((acc, item) => {
    return acc + (item as HTMLElement).offsetWidth;
  }, 0);

  return gsap.to(items, {
    x: () => -(totalWidth - window.innerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: () => `+=${totalWidth}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      ...options,
    },
  });
}

/**
 * Image sequence animation (Drip-style)
 * Canvas-based frame-by-frame animation
 */
export function imageSequence(
  canvas: HTMLCanvasElement,
  images: HTMLImageElement[],
  options: ScrollTrigger.Vars = {}
) {
  const context = canvas.getContext('2d');
  if (!context) return null;

  canvas.width = images[0].width;
  canvas.height = images[0].height;

  const obj = { frame: 0 };

  return gsap.to(obj, {
    frame: images.length - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
      trigger: canvas,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      pin: true,
      ...options,
    },
    onUpdate: () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[Math.floor(obj.frame)], 0, 0);
    },
  });
}

/**
 * Split screen reveal
 * Left and right content reveal simultaneously
 */
export function splitScreenReveal(
  leftElement: HTMLElement | string,
  rightElement: HTMLElement | string,
  options: gsap.TweenVars = {}
) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: typeof leftElement === 'string' ? leftElement : leftElement,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  });

  tl.from(leftElement, {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    ...options,
  }).from(
    rightElement,
    {
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      ...options,
    },
    '-=0.6' // Overlap by 0.6s
  );

  return tl;
}

/**
 * Morphing path animation
 * SVG shape transformations
 */
export function morphPath(
  path: SVGPathElement | string,
  newPath: string,
  options: gsap.TweenVars = {}
) {
  return gsap.to(path, {
    attr: { d: newPath },
    duration: 1,
    ease: 'power2.inOut',
    ...options,
  });
}

/**
 * Progress bar fill
 * Animates width from 0 to target
 */
export function progressBar(
  element: HTMLElement | string,
  targetWidth: string = '100%',
  options: gsap.TweenVars = {}
) {
  return gsap.from(element, {
    width: 0,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    ...options,
  });
}

/**
 * Infinite loop animation
 * For logos, badges, etc.
 */
export function infiniteLoop(
  elements: HTMLElement[] | NodeListOf<Element> | string,
  speed: number = 50,
  options: gsap.TweenVars = {}
) {
  return gsap.to(elements, {
    xPercent: -100,
    duration: speed,
    ease: 'none',
    repeat: -1,
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0),
    },
    ...options,
  });
}

/**
 * Card hover lift effect
 * Premium micro-interaction
 */
export function cardHoverLift(card: HTMLElement) {
  const tl = gsap.timeline({ paused: true });

  tl.to(card, {
    y: -8,
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
    duration: 0.3,
    ease: 'power2.out',
  });

  card.addEventListener('mouseenter', () => tl.play());
  card.addEventListener('mouseleave', () => tl.reverse());

  return tl;
}

/**
 * Cleanup ScrollTriggers
 * Call on component unmount
 */
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

/**
 * Refresh ScrollTriggers
 * Call after dynamic content loads
 */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}

/**
 * Initialize smooth scroll with Lenis
 * Call once on app mount
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined') return null;

  // Dynamically import Lenis to avoid SSR issues
  import('lenis').then(({ default: Lenis }) => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrate with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return lenis;
  });
}
