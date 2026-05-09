'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, Search, X, Menu, Clock, MapPin, ArrowRight } from 'lucide-react';
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

function isActiveRoute(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

// ============================================================================
// MAIN NAVBAR
// ============================================================================

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search panel when route changes
  useEffect(() => {
    setSearchOpen(false);
  }, [pathname]);

  // Esc closes search
  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen, closeSearch]);

  useEffect(() => {
    const syncWidgetVisibility = () => {
      const isMobileViewport = window.innerWidth < 1024;
      const hasChatWidget = !!document.querySelector(CHAT_WIDGET_SELECTOR);

      document.querySelectorAll(ACCESSIBILITY_WIDGET_SELECTOR).forEach((el) => {
        (el as HTMLElement).style.display = isMobileViewport && hasChatWidget ? 'none' : '';
      });

      if (!isMobileViewport) {
        document.querySelectorAll(CHAT_WIDGET_SELECTOR).forEach((el) => {
          (el as HTMLElement).style.display = '';
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
    mainNavItems.forEach((item) => router.prefetch(item.href));
    router.prefetch('/contact');
  }, [mobileMenuOpen, router]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* ============== UTILITY BAR (lg+, hides on scroll) ============== */}
        <div
          className={`hidden lg:block bg-slate-950 text-slate-200 border-b border-white/5 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
          aria-hidden={isScrolled ? 'true' : 'false'}
        >
          <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-9 text-[0.78rem]">
              <div className="flex items-center gap-6">
                <span className="inline-flex items-center gap-2 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#b87333]" aria-hidden="true" />
                  Serving Columbus &amp; All of Ohio
                </span>
                <span className="inline-flex items-center gap-2 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-[#b87333]" aria-hidden="true" />
                  Mon–Fri 9:00 AM – 5:00 PM
                </span>
              </div>
              <div className="flex items-center gap-5">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 text-slate-200 hover:text-[#e8c8a0] transition-colors duration-200"
                  aria-label={`Call ${PHONE}`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#b87333]" aria-hidden="true" />
                  <span className="font-medium tracking-wide">{PHONE}</span>
                </a>
                <span className="h-3 w-px bg-white/15" aria-hidden="true" />
                <span className="text-[#e8c8a0] font-semibold tracking-[0.18em] uppercase text-[0.65rem]">
                  Free Consultation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============== MAIN NAV BAR ============== */}
        <nav
          className={`bg-white border-b transition-shadow duration-300 ${
            isScrolled ? 'shadow-md border-slate-200' : 'shadow-sm border-slate-100'
          }`}
          aria-label="Primary"
        >
          <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-[68px] gap-4">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Jwayyed Law LLC home">
                <Image
                  src="/assets/Jwayyed_Logo_Inverted.JPEG"
                  alt="Jwayyed Law LLC"
                  width={150}
                  height={36}
                  priority
                  className="h-8 lg:h-9 w-auto"
                />
              </Link>

              {/* Center: Nav items (lg+) */}
              <ul className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
                {mainNavItems.map((item) => {
                  const active = isActiveRoute(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative inline-flex items-center px-3 py-2 text-[13px] font-medium transition-colors duration-200 rounded-md ${
                          active
                            ? 'text-[#b87333]'
                            : 'text-slate-700 hover:text-slate-950'
                        }`}
                      >
                        {item.name}
                        <span
                          className={`absolute left-3 right-3 -bottom-[2px] h-[2px] bg-[#b87333] rounded-full transition-all duration-200 ${
                            active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                          }`}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Right side actions */}
              <div className="flex items-center gap-1 lg:gap-2 flex-shrink-0">
                {/* Search toggle (lg+) */}
                <button
                  type="button"
                  onClick={() => setSearchOpen((v) => !v)}
                  className="hidden lg:inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-700 hover:text-[#b87333] hover:bg-slate-50 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b87333]"
                  aria-label={searchOpen ? 'Close search' : 'Open search'}
                  aria-expanded={searchOpen}
                  aria-controls="site-search-panel"
                >
                  {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                </button>

                {/* Schedule CTA (lg+) */}
                <Link
                  href="/contact"
                  className="hidden lg:inline-flex items-center gap-1.5 bg-[#b87333] hover:bg-[#a0622b] text-white text-[13px] font-semibold px-4 py-2.5 rounded-md shadow-sm hover:shadow transition-all duration-200 group"
                >
                  Schedule Consultation
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>

                {/* Mobile: call icon + hamburger */}
                <a
                  href={PHONE_TEL}
                  className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#b87333] hover:bg-slate-50 transition-colors min-h-[44px] min-w-[44px]"
                  aria-label={`Call ${PHONE}`}
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </a>
                <button
                  className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-slate-800 hover:bg-slate-50 transition-colors min-h-[44px] min-w-[44px] active:scale-[0.97]"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open menu"
                  aria-expanded={mobileMenuOpen}
                  style={{ touchAction: 'manipulation' }}
                >
                  <Menu className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* ============== EXPANDABLE SEARCH PANEL (lg+) ============== */}
          <div
            id="site-search-panel"
            className={`hidden lg:block overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-slate-100 ${
              searchOpen ? 'max-h-32 opacity-100 border-t' : 'max-h-0 opacity-0'
            }`}
            aria-hidden={!searchOpen}
          >
            <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4">
              <div className="max-w-2xl mx-auto">
                <SearchBar onNavigate={closeSearch} />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <MobileDrawer isOpen={mobileMenuOpen} onClose={closeMobileMenu} pathname={pathname} />
    </>
  );
}

// ============================================================================
// MOBILE DRAWER
// ============================================================================

function MobileDrawer({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string | null;
}) {
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

  useEffect(() => {
    if (previousPathnameRef.current !== pathname && isOpen) onClose();
    previousPathnameRef.current = pathname;
  }, [pathname, isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-[110] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 h-full w-[88%] max-w-[380px] bg-white z-[120] transform transition-transform duration-300 ease-out shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-950 text-white">
          <div className="flex items-center gap-2">
            <span className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-lg font-semibold tracking-wide">
              JWAYYED LAW
            </span>
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#e8c8a0] font-semibold border-l border-white/15 pl-2 ml-1">
              Ohio
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors active:scale-[0.97]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 flex flex-col">
          {/* Phone CTA at top */}
          <a
            href={PHONE_TEL}
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 mb-4 rounded-lg border border-[#b87333]/30 bg-[#b87333]/5 hover:bg-[#b87333]/10 transition-colors"
          >
            <span className="w-9 h-9 rounded-md bg-[#b87333] text-white flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-slate-500 font-semibold">Call us</div>
              <div className="text-[#b87333] font-semibold text-base">{PHONE}</div>
            </div>
          </a>

          {/* Search */}
          <div className="mb-6">
            <SearchBar onNavigate={onClose} />
          </div>

          {/* Nav items */}
          <nav className="space-y-0.5 flex-1" aria-label="Mobile primary">
            {mainNavItems.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3.5 font-medium rounded-lg transition-colors active:scale-[0.99] ${
                    active
                      ? 'bg-[#b87333]/10 text-[#b87333]'
                      : 'text-slate-900 hover:bg-slate-50 hover:text-[#b87333]'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Schedule CTA at bottom */}
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-5 inline-flex items-center justify-center gap-2 w-full bg-[#b87333] hover:bg-[#a0622b] text-white font-semibold py-3.5 rounded-lg transition-colors group"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>

          {/* Hours footer */}
          <div className="mt-4 text-center text-xs text-slate-500">
            Mon–Fri 9:00 AM – 5:00 PM · Serving All of Ohio
          </div>
        </div>
      </div>
    </>
  );
}
