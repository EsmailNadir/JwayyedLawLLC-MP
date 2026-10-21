import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge conditional class names, resolving Tailwind conflicts so a caller's
 * class always wins over a component's default (`p-6` + `p-2` yields `p-2`
 * rather than both). This is the `cn` helper shadcn components expect.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
