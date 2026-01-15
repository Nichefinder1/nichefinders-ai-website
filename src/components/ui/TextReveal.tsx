'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
}

export default function TextReveal({
  children,
  className = '',
  stagger = 0.04,
  duration = 0.8,
  delay = 0,
}: TextRevealProps) {
  const words = children.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
          }}
        >
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: 'inline-block',
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
}
