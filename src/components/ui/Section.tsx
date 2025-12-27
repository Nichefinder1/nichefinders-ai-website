import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

type SectionProps = HTMLAttributes<HTMLElement> & {
  padding?: boolean;
  background?: 'white' | 'gray' | 'navy' | 'gradient';
};

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ padding = true, background = 'white', children, className, ...props }, ref) => {
    const backgrounds = {
      white: 'bg-white',
      gray: 'bg-gray-light',
      navy: 'bg-navy-deep text-white',
      gradient: 'hero-gradient text-white',
    };

    return (
      <section
        ref={ref}
        className={cn(
          padding && 'section-padding',
          backgrounds[background],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
