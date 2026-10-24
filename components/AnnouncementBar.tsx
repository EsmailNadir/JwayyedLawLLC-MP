'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const STORAGE_KEY = 'announcement-dismissed-2026';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const dismissed = typeof sessionStorage !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === '1';
    setIsVisible(!dismissed);
  }, [isMounted]);

  useEffect(() => {
    if (isVisible && isMounted) {
      const t = setTimeout(() => setHasAnimatedIn(true), 50);
      return () => clearTimeout(t);
    } else {
      setHasAnimatedIn(false);
    }
  }, [isVisible, isMounted]);

  const handleDismiss = useCallback(() => {
    setIsDismissing(true);
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, '1');
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Award announcement"
      className={`jw overflow-hidden transition-[max-height] duration-300 ease-out ${isDismissing ? 'max-h-0' : hasAnimatedIn ? 'max-h-[44px]' : 'max-h-0'}`}
    >
      <div className="relative bg-black text-white text-[length:var(--step-small)] h-[44px] flex items-center justify-center pl-4 pr-14">
        <p className="flex items-center justify-center gap-2 text-center whitespace-nowrap">
          <span className="hidden sm:inline">Jwayyed Law LLC named Best of 2026 by BusinessRate, powered by Google reviews.</span>
          <span className="sm:hidden">Best of 2026, BusinessRate.</span>
          <Link
            href="/our-law-firm/about-us#accolades"
            className="text-copper-400 hover:text-white underline underline-offset-4 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
          >
            <span className="sm:hidden">See it</span>
            <span className="hidden sm:inline">See the award</span>
          </Link>
        </p>

        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
