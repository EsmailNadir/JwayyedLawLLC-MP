'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

// ============================================================================
// MAIN NAVBAR
// ============================================================================

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        {/* TOP BAR: Logo | Search | Phone | CTA */}
        <div className="border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-14 gap-2 sm:gap-4 min-w-0 overflow-visible">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 min-w-0">
                <Image
                  src="/assets/Jwayyed_Logo_Inverted.JPEG"
                  alt="Jwayyed Law LLC"
                  width={130}
                  height={32}
                  priority
                  className="h-6 sm:h-7 w-auto"
                />
              </Link>

              {/* Search - expand on click (desktop lg+) */}
              <div className="hidden lg:flex items-center flex-1 max-w-md justify-center">
                {searchExpanded ? (
                  <div className="w-full flex items-center gap-2">
                    <button
                      onClick={() => setSearchExpanded(false)}
                      className="flex-shrink-0 text-gray-400 hover:text-gray-600 p-1"
                      aria-label="Close search"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="flex-1 min-w-0">
                      <SearchBar className="[&_input]:py-2 [&_input]:text-sm" />
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchExpanded(true)}
                    className="flex items-center gap-2 text-gray-500 hover:text-accent transition-colors"
                    aria-label="Open search"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-sm text-gray-500">Search...</span>
                  </button>
                )}
              </div>

              {/* Spacer when search collapsed */}
              {!searchExpanded && <div className="hidden lg:block flex-1 max-w-md" />}

              {/* Phone + CTA — desktop only (lg+); hidden on mobile/tablet (sticky bar handles CTAs on mobile) */}
              <div className="hidden lg:flex items-center gap-3 flex-shrink-0 relative z-10">
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-1.5 text-gray-700 hover:text-accent font-medium text-sm whitespace-nowrap"
                >
                  <span className="text-accent" aria-hidden>📞</span>
                  {PHONE}
                </a>
                <Link
                  href="/contact"
                  className="bg-[#b87333] hover:bg-[#a0622b] text-white font-semibold text-sm px-4 py-2 rounded-md transition-colors whitespace-nowrap"
                >
                  Book a Consultation
                </Link>
              </div>

              {/* Mobile/Tablet (below lg): Hamburger only — phone in sticky bar + hamburger menu */}
              <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
                <button
                  className="flex flex-col justify-center items-center w-11 h-11 rounded-lg focus:outline-none min-h-[44px] min-w-[44px]"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open menu"
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
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Sticky Bottom CTA: visible below lg (mobile + tablet); hidden when hamburger open */}
      {!mobileMenuOpen && (
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#2c2c2c] border-t border-gray-700 shadow-lg">
        <div className="flex gap-2 p-3">
          <a
            href={PHONE_TEL}
            className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-gray-500 text-white hover:bg-gray-600/50 font-semibold py-3 rounded-lg transition-colors min-h-[44px]"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 bg-[#b87333] hover:bg-[#a0622b] text-white font-semibold py-3 rounded-lg transition-colors min-h-[44px]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
      )}
    </>
  );
}

// ============================================================================
// MOBILE DRAWER
// ============================================================================

function MobileDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.querySelectorAll('#tidio-chat, #tidio-chat-iframe').forEach((el) => {
      (el as HTMLElement).style.display = isOpen ? 'none' : '';
    });
    return () => {
      document.body.style.overflow = '';
      document.querySelectorAll('#tidio-chat, #tidio-chat-iframe').forEach((el) => {
        (el as HTMLElement).style.display = '';
      });
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-[90] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white z-[100] transform transition-transform duration-300 ease-out shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="font-serif font-bold text-xl text-gray-900">JWAYYED LAW</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col">
          {/* Phone at top */}
          <a href={PHONE_TEL} onClick={onClose} className="flex items-center gap-2 text-[#b87333] font-semibold text-lg mb-6">
            <span>📞</span> {PHONE}
          </a>

          {/* Search in mobile menu */}
          <div className="mb-6">
            <SearchBar />
          </div>

          {/* 8 nav items */}
          <nav className="space-y-1 flex-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="block px-4 py-3.5 text-gray-900 font-medium hover:bg-gray-50 hover:text-accent rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Full-width Book a Consultation at bottom of menu */}
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 block w-full text-center bg-[#b87333] hover:bg-[#a0622b] text-white font-semibold py-3.5 rounded-lg transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
