'use client';

import { cn } from '@/lib/utils';
import Button from './Button';
import { CALENDAR_LINK } from '@/lib/constants';

interface InlineCalendarCTAProps {
  variant?: 'primary' | 'secondary' | 'minimal';
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  className?: string;
}

export default function InlineCalendarCTA({
  variant = 'primary',
  headline = 'Ready to see this in action?',
  subheadline = 'Book a discovery call and get a custom strategy for your business.',
  buttonText = 'Book Your Free Call Now',
  className,
}: InlineCalendarCTAProps) {
  const variants = {
    primary: {
      container: 'bg-gradient-to-br from-cyan-primary to-navy-deep text-white',
      headline: 'text-white',
      subheadline: 'text-white/90',
      button: 'bg-white text-navy-deep hover:bg-gray-100',
    },
    secondary: {
      container: 'bg-gray-50 border-2 border-gray-200',
      headline: 'text-navy-deep',
      subheadline: 'text-gray-600',
      button: 'bg-cyan-primary text-white hover:bg-cyan-dark',
    },
    minimal: {
      container: 'bg-transparent border-l-4 border-cyan-primary pl-6',
      headline: 'text-navy-deep',
      subheadline: 'text-gray-600',
      button: 'bg-navy-deep text-white hover:bg-navy',
    },
  };

  const style = variants[variant];

  return (
    <div
      className={cn(
        'rounded-lg p-6 md:p-8 my-8',
        style.container,
        className
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className={cn('text-2xl md:text-3xl font-black mb-3', style.headline)}>
          {headline}
        </h3>
        <p className={cn('text-lg mb-6', style.subheadline)}>{subheadline}</p>
        <Button
          href={CALENDAR_LINK}
          variant="primary"
          size="lg"
          className={cn('shadow-xl', style.button)}
          external
        >
          {buttonText} →
        </Button>
      </div>
    </div>
  );
}
