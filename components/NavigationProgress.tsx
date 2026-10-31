'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Thin progress bar pinned to the top of the viewport while a client-side
 * navigation is in flight. The App Router keeps the old page on screen until
 * the next one is ready, so without this a click on a slow page looks frozen.
 *
 * It starts on any click of an internal link (and on startNavigationProgress()
 * for programmatic router.push calls), trickles toward 90%, and completes when
 * the pathname or query string actually changes.
 */

const START_EVENT = 'jw:navigation-start';

/** Call before router.push() so programmatic navigations show the bar too. */
export function startNavigationProgress() {
  window.dispatchEvent(new Event(START_EVENT));
}

function isNavigatingLink(e: MouseEvent): boolean {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return false;
  const anchor = (e.target as HTMLElement | null)?.closest('a');
  if (!anchor || !anchor.href) return false;
  if (anchor.target && anchor.target !== '_self') return false;
  if (anchor.hasAttribute('download')) return false;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return false;
  // Same page (including in-page #hash jumps): nothing to load.
  return url.pathname !== window.location.pathname || url.search !== window.location.search;
}

function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'loading' | 'done'>('idle');
  const trickle = useRef<ReturnType<typeof setInterval> | null>(null);
  const safety = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hide = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = useRef(false);

  const clearTimers = () => {
    if (trickle.current) clearInterval(trickle.current);
    if (safety.current) clearTimeout(safety.current);
    if (hide.current) clearTimeout(hide.current);
    trickle.current = safety.current = hide.current = null;
  };

  const finish = () => {
    if (!active.current) return;
    active.current = false;
    clearTimers();
    // Fill, then fade; only reset once it is invisible so it never visibly
    // shrinks back.
    setPhase('done');
    setProgress(100);
    hide.current = setTimeout(() => {
      setPhase('idle');
      setProgress(0);
    }, 400);
  };

  const start = () => {
    clearTimers();
    active.current = true;
    setPhase('loading');
    setProgress(10);
    // Ease toward 90% without ever reaching it; finish() jumps to 100%.
    trickle.current = setInterval(() => {
      setProgress((p) => p + (90 - p) * 0.1);
    }, 200);
    // Never leave the bar stuck if a navigation is cancelled or fails.
    safety.current = setTimeout(finish, 15000);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (isNavigatingLink(e)) start();
    };
    document.addEventListener('click', onClick);
    window.addEventListener(START_EVENT, start);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener(START_EVENT, start);
      clearTimers();
    };
    // start/clearTimers only touch refs and state setters, so binding once is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 top-0 z-[300] h-[2px] origin-left bg-sky/70 motion-reduce:transition-none ${
        phase === 'idle'
          ? 'opacity-0'
          : phase === 'loading'
            ? 'opacity-100 transition-transform duration-200 ease-linear'
            : 'opacity-0 [transition:transform_150ms_ease-out,opacity_250ms_ease-out_150ms]'
      }`}
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}

export default function NavigationProgress() {
  // useSearchParams needs a Suspense boundary so static pages stay static.
  return (
    <Suspense fallback={null}>
      <ProgressBar />
    </Suspense>
  );
}
