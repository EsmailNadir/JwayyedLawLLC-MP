'use client';

import React, { ComponentPropsWithoutRef, useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  /** Optional CSS class name to apply custom styles */
  className?: string;
  /** Whether to reverse the animation direction @default false */
  reverse?: boolean;
  /** Whether to pause the animation on hover @default false */
  pauseOnHover?: boolean;
  /** Content to be displayed in the marquee */
  children: React.ReactNode;
  /** Whether to animate vertically instead of horizontally @default false */
  vertical?: boolean;
  /** Number of times to repeat the content @default 4 */
  repeat?: number;
  /** ARIA label for accessibility */
  ariaLabel?: string;
  /** ARIA live region politeness @default 'off' */
  ariaLive?: 'off' | 'polite' | 'assertive';
  /** ARIA role @default 'marquee' */
  ariaRole?: string;
}

/**
 * Continuously scrolling track, horizontal or vertical.
 *
 * Differences from the upstream snippet, all deliberate:
 * - `useMemo` is called at the top of the component rather than inside the
 *   returned JSX. Calling a hook mid-JSX happens to work but violates the
 *   rules of hooks and trips the lint rule.
 * - The `autoFill` prop was declared in the interface but never read, so it
 *   promised behaviour that did not exist. Set `repeat` instead.
 * - Motion pauses under `prefers-reduced-motion`. An endlessly moving band is
 *   a vestibular trigger, and it is decorative here, so it holds still rather
 *   than being removed.
 * - Pausing also happens on keyboard focus, not only hover, since the track is
 *   focusable.
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ariaLabel,
  ariaLive = 'off',
  ariaRole = 'marquee',
  ...props
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const tracks = useMemo(
    () => (
      <>
        {Array.from({ length: repeat }, (_, i) => (
          <div
            key={i}
            className={cn(
              'flex shrink-0 justify-around [gap:var(--gap)] will-change-transform',
              vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
              pauseOnHover && 'group-hover:[animation-play-state:paused]',
              'group-focus-within:[animation-play-state:paused]',
              'motion-reduce:[animation-play-state:paused]',
              reverse && '[animation-direction:reverse]'
            )}
          >
            {children}
          </div>
        ))}
      </>
    ),
    [repeat, children, vertical, pauseOnHover, reverse]
  );

  return (
    <div
      {...props}
      ref={marqueeRef}
      data-slot="marquee"
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
      aria-label={ariaLabel}
      aria-live={ariaLive}
      role={ariaRole}
      tabIndex={0}
    >
      {tracks}
    </div>
  );
}
