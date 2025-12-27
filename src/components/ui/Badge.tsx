import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'primary' | 'secondary' | 'success' | 'alert';
  size?: 'sm' | 'md' | 'lg';
};

export default function Badge({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: BadgeProps) {
  const variants = {
    primary: 'bg-cyan-primary text-white',
    secondary: 'bg-gray-light text-navy-deep',
    success: 'bg-success text-white',
    alert: 'bg-alert text-white',
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
