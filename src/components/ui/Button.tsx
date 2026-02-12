import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  external = false,
  ...props
}: ButtonProps) {
  // Base styles with iOS/mobile touch optimizations
  const baseStyles = 'btn touch-manipulation select-none';

  const variants = {
    primary: 'btn-primary active:scale-[0.98]',
    secondary: 'btn-secondary active:scale-[0.98]',
    outline: 'btn-outline active:scale-[0.98]',
    ghost: 'btn-ghost active:bg-gray-100',
  };

  // Ensure minimum touch target of 44px
  const sizes = {
    sm: 'text-sm px-4 py-2 min-h-[40px]',
    md: 'text-base px-6 py-3 min-h-[44px]',
    lg: 'text-lg px-8 py-4 min-h-[48px]',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    // External link - use regular <a> tag
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    // Internal link - use Next.js Link
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
