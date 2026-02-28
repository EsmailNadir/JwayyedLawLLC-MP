'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Phone } from 'lucide-react';
import SearchBar from '@/components/SearchBar';

// ============================================================================
// SIMPLIFIED 8-ITEM NAV (no dropdowns)
// ============================================================================

const mainNavItems: { name: string; href: string }[] = [
  { name: 'Criminal Defense', href: '/criminal-defense' },
  { name: 'OVI / DUI', href: '/ovi-dui-defense' },
  { name: 'Personal Injury', href: '/personal-injury' },
  { name: 'Civil', href: '/civil' },
  { name: 'Business', href: '/business' },
  { name: 'Other Services', href: '/other-services' },
  { name: 'Courts', href: '/courts' },
  { name: 'About Us', href: '/our-law-firm/our-attorneys' },
];

const PHONE = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';
const CHAT_WIDGET_SELECTOR = '#tidio-chat, #tidio-chat-iframe';
const ACCESSIBILITY_WIDGET_SELECTOR = '#acsb-trigger, #acsb-trigger-frame, .acsb-trigger, .acsb-widget, [data-acsb]';

// ============================================================================
// MAIN NAVBAR
// ============================================================================

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncWidgetVisibility = () => {
      const isMobileViewport = window.innerWidth < 1024;
      const hasChatWidget = !!document.querySelector(CHAT_WIDGET_SELECTOR);

      document.querySelectorAll(ACCESSIBILITY_WIDGET_SELECTOR).forEach((el) => {
        (el as HTMLElement).style.display = isMobileViewport && hasChatWidget ? 'none' : '';
      });

      // Only reset display in case the mobile drawer previously hid widgets.
      // Do not override pointer/visibility/opacity; Tidio controls those and uses a full-screen container.
      if (!isMobileViewport) {
        document.querySelectorAll(CHAT_WIDGET_SELECTOR).forEach((el) => {
          const element = el as HTMLElement;
          element.style.display = '';
        });
      }
    };

    syncWidgetVisibility();

    const observer = new MutationObserver(syncWidgetVisibility);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', syncWidgetVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncWidgetVisibility);
      document.querySelectorAll(ACCESSIBILITY_WIDGET_SELECTOR).forEach((el) => {
        (el as HTMLElement).style.display = '';
      });
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    mainNavItems.forEach((item) => {
      router.prefetch(item.href);
    });
    router.prefetch('/contact');
  }, [mobileMenuOpen, router]);

  return (
    <>
      <nav
        className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        {/* TOP BAR: Logo | Search | Phone | CTA */}
        <div className="relative border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-14 gap-2 sm:gap-4 min-w-0 overflow-visible">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 min-w-0 relative z-10">
                <Image
                  src="/assets/Jwayyed_Logo_Inverted.JPEG"
                  alt="Jwayyed Law LLC"
                  width={130}
                  height={32}
                  priority
                  className="h-7 sm:h-7 w-auto"
                />
              </Link>

              {/* Search - desktop (lg+): absolutely centered on full navbar width */}
              <div
                className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 bottom-0 items-center justify-center w-full max-w-[min(28rem,calc(100vw-22rem))] px-2 pointer-events-none"
              >
                <div className="w-full max-w-md pointer-events-auto">
                  <SearchBar className="[&_input]:py-2 [&_input]:text-sm" />
                </div>
              </div>

              {/* Phone + CTA — desktop only (lg+); hidden on mobile/tablet */}
              <div className="hidden lg:flex items-center flex-shrink-0 relative z-10">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-1.5 text-[#b87333] hover:opacity-80 text-sm font-medium whitespace-nowrap transition-opacity border-r border-gray-200 pr-4 mr-4"
                  aria-label={`Call ${PHONE}`}
                >
                  <Phone className="w-4 h-4" strokeWidth={1.9} aria-hidden="true" />
                  <span>{PHONE}</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-[#b87333] hover:bg-[#a0622b] text-white text-sm font-semibold px-4 py-2 rounded-md shadow-sm transition-colors duration-200 whitespace-nowrap"
                >
                  Schedule Consultation
                </Link>
              </div>

              {/* Mobile/Tablet (below lg): compact call + hamburger */}
              <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
                <button
                  className="flex flex-col justify-center items-center w-11 h-11 rounded-lg focus:outline-none min-h-[44px] min-w-[44px] active:scale-[0.98] transition-transform"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open menu"
                  style={{ touchAction: 'manipulation' }}
                >
                  <span className="block w-6 h-0.5 bg-gray-800" />
                  <span className="block w-6 h-0.5 bg-gray-800 mt-1.5" />
                  <span className="block w-6 h-0.5 bg-gray-800 mt-1.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAV: 8 items, no dropdowns (desktop lg+) */}
        <div className="hidden lg:block border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
            <nav className="flex items-center justify-center gap-1 py-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-[13px] font-medium text-gray-700 hover:text-accent hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
}

// ============================================================================
// MOBILE DRAWER
// ============================================================================

function MobileDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.body.classList.toggle('mobile-drawer-open', isOpen);
    document.querySelectorAll(`${CHAT_WIDGET_SELECTOR}, ${ACCESSIBILITY_WIDGET_SELECTOR}`).forEach((el) => {
      (el as HTMLElement).style.display = isOpen ? 'none' : '';
    });
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-drawer-open');
      document.querySelectorAll(`${CHAT_WIDGET_SELECTOR}, ${ACCESSIBILITY_WIDGET_SELECTOR}`).forEach((el) => {
        (el as HTMLElement).style.display = '';
      });
    };
  }, [isOpen]);

  // Ensure drawer closes only after route/path change (including search result clicks).
  useEffect(() => {
    if (previousPathnameRef.current !== pathname && isOpen) {
      onClose();
    }
    previousPathnameRef.current = pathname;
  }, [pathname, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[110] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white z-[120] transform transition-transform duration-300 ease-out shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="font-serif font-bold text-xl text-gray-900">JWAYYED LAW</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 active:scale-[0.97] transition-transform"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col">
          {/* Phone at top */}
          <a href={PHONE_TEL} onClick={onClose} className="flex items-center gap-2 text-[#b87333] font-medium text-base mb-4">
            <Phone className="w-4 h-4" strokeWidth={1.9} aria-hidden="true" />
            <span>{PHONE}</span>
          </a>

          {/* Search in mobile menu */}
          <div className="mb-6">
            <SearchBar onNavigate={onClose} />
          </div>

          {/* 8 nav items */}
          <nav className="space-y-1 flex-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block px-4 py-3.5 text-gray-900 font-medium hover:bg-gray-50 hover:text-accent rounded-lg transition-colors active:scale-[0.99]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Full-width Schedule Consultation at bottom of menu */}
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 block w-full text-center bg-[#b87333] hover:bg-[#a0622b] text-white font-semibold py-3.5 rounded-lg transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
