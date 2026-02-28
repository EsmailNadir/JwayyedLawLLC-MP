'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
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
      role="banner"
      aria-label="Award announcement"
      className={`announcement-bar-wrapper overflow-hidden transition-[max-height] duration-300 ease-out ${isDismissing ? 'max-h-0' : hasAnimatedIn ? 'max-h-[38px]' : 'max-h-0'}`}
    >
      <div className="relative bg-gradient-to-r from-[#0f0f0f] via-[#1a1a2e] to-[#0f0f0f] border-b border-[#b87333]/30 text-white text-xs sm:text-sm h-[38px] flex items-center justify-center pl-[28px] sm:pl-6 pr-20 sm:pr-14">
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#b87333]/20 to-transparent"
            style={{ animation: 'announcement-shimmer 4s ease-in-out infinite' }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center gap-2 text-center max-w-5xl mx-auto">
          <span aria-hidden="true" className="flex-shrink-0">🏆</span>
          {/* Desktop: full message */}
          <span className="hidden sm:inline whitespace-nowrap">
            Jwayyed Law LLC named <strong>Best of 2026</strong> by BusinessRate — Powered by Google Reviews.
          </span>
          {/* Mobile: short single line */}
          <span className="sm:hidden whitespace-nowrap">
            Named <strong>Best of 2026</strong> by BusinessRate.
          </span>
          <Link
            href="/our-law-firm/about-us#accolades"
            className="text-[#b87333] hover:text-[#d4a574] underline underline-offset-2 font-medium flex-shrink-0 ml-1"
          >
            View Accolades →
          </Link>
        </div>

        <button
          type="button"
          onClick={handleDismiss}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b87333]/50 focus:ring-offset-2 focus:ring-offset-[#0f0f0f]"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
