import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export default function Container({
  size = 'lg',
  children,
  className,
  ...props
}: ContainerProps) {
  const sizes = {
    xs: 'max-w-screen-sm',    // 640px
    sm: 'max-w-screen-md',    // 768px
    md: 'max-w-screen-lg',    // 1024px
    lg: 'max-w-screen-xl',    // 1280px
    xl: 'max-w-screen-2xl',   // 1536px
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'container-custom',
        sizes[size],
        'mx-auto px-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
