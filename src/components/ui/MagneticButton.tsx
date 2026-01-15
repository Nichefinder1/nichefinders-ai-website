'use client';

import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // How far the element moves toward cursor (default: 0.4)
  ease?: number; // Easing factor for smooth return (default: 0.15)
}

/**
 * MagneticButton
 * Wraps any element to give it a magnetic hover effect
 * The element subtly pulls toward the cursor on hover
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.4,
  ease = 0.15,
}: MagneticButtonProps) {
  const magnetRef = useRef<HTMLDivElement>(null);
  const boundingRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    const magnet = magnetRef.current;
    if (!magnet) return;

    // Animation state
    let animationId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    // Smooth animation loop using lerp
    const animate = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      gsap.set(magnet, {
        x: currentX,
        y: currentY,
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      boundingRef.current = magnet.getBoundingClientRect();
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!boundingRef.current) return;

      const { left, top, width, height } = boundingRef.current;
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calculate distance from center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Apply strength multiplier
      targetX = deltaX * strength;
      targetY = deltaY * strength;
    };

    const handleMouseLeave = () => {
      // Animate back to center
      targetX = 0;
      targetY = 0;

      // Let the animation continue to smooth return
      setTimeout(() => {
        if (targetX === 0 && targetY === 0) {
          cancelAnimationFrame(animationId);
        }
      }, 500);
    };

    magnet.addEventListener('mouseenter', handleMouseEnter);
    magnet.addEventListener('mousemove', handleMouseMove);
    magnet.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      magnet.removeEventListener('mouseenter', handleMouseEnter);
      magnet.removeEventListener('mousemove', handleMouseMove);
      magnet.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [strength, ease]);

  return (
    <div ref={magnetRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
