import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'glass' | 'elevated' | 'gradient-border';
  hover?: boolean;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'elevated', hover = true, children, className, ...props }, ref) => {
    const variants = {
      glass: 'card-glass',
      elevated: 'card-elevated',
      'gradient-border': 'gradient-border',
    };

    return (
      <div
        ref={ref}
        className={cn(
          variants[variant],
          hover && 'transition-transform duration-300',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
