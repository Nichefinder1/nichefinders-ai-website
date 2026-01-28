import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Handles conflicts and deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency (USD)
 * @example formatCurrency(12345) => "$12,345"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculate ROI
 * @param investment Initial investment
 * @param returns Total returns
 * @returns ROI as decimal (e.g., 4.2 for 4.2x ROI)
 */
export function calculateROI(investment: number, returns: number): number {
  if (investment === 0) return 0;
  return returns / investment;
}
