'use client';

import React, { useState, useEffect, useCallback, useRef, useId } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, Search, X, Menu, ArrowUpRight, ChevronDown } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import { primaryNav, type NavNode } from '@/data/navigation';

const PHONE = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';
const ACCESSIBILITY_WIDGET_SELECTOR = '#acsb-trigger, #acsb-trigger-frame, .acsb-trigger, .acsb-widget, [data-acsb]';

// Mouse travel from a trigger to its panel crosses a few pixels of dead space,
// so closing is delayed rather than immediate on mouseleave.
const HOVER_CLOSE_DELAY_MS = 140;

function isActiveRoute(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === '/') return pathname === '/';
  const path = href.split('#')[0];
  return pathname === path || pathname.startsWith(path + '/');
}

/** True when the node itself or any descendant matches the current route. */
function isBranchActive(pathname: string | null, node: NavNode): boolean {
  if (isActiveRoute(pathname, node.href)) return true;
  if (node.subLinks?.some((l) => isActiveRoute(pathname, l.href))) return true;
  return !!node.subDropdowns?.some((g) => g.links.some((l) => isActiveRoute(pathname, l.href)));
}

// ============================================================================
// MAIN NAVBAR
//
// The bar floats transparently over the home page's video hero and turns into
// an opaque paper bar once scrolled. Every other route gets the opaque bar from
// the start, because their heroes are light and white-on-light is unreadable.
// ============================================================================

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [pinned, setPinned] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === '/';
  const overlay = isHome && !isScrolled && !searchOpen;

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const navRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<number | null>(null);

  const clearHoverTimer = useCallback(() => {
    if (hoverTimer.current !== null) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  }, []);

  const closeMenu = useCallback(() => {
    clearHoverTimer();
    setOpenMenu(null);
    setPinned(false);
  }, [clearHoverTimer]);

  // A hover-opened panel is transient and closes on mouseleave; a click pins it
  // so it survives the pointer leaving, and a second click releases it. Without
  // the split, hovering opens the panel and the click that follows toggles it
  // straight back shut, so clicking a trigger would appear to do nothing.
  const openWithHover = useCallback(
    (name: string) => {
      clearHoverTimer();
      setOpenMenu((current) => {
        if (current !== name) setPinned(false);
        return name;
      });
    },
    [clearHoverTimer]
  );

  const closeWithHover = useCallback(() => {
    clearHoverTimer();
    hoverTimer.current = window.setTimeout(() => {
      setPinned((isPinned) => {
        if (!isPinned) setOpenMenu(null);
        return isPinned;
      });
    }, HOVER_CLOSE_DELAY_MS);
  }, [clearHoverTimer]);

  const toggleMenu = useCallback(
    (name: string) => {
      clearHoverTimer();
      if (openMenu === name && pinned) {
        setOpenMenu(null);
        setPinned(false);
        return;
      }
      setOpenMenu(name);
      setPinned(true);
    },
    [clearHoverTimer, openMenu, pinned]
  );

  useEffect(() => clearHoverTimer, [clearHoverTimer]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setSearchOpen(false);
    setOpenMenu(null);
    setPinned(false);
  }, [pathname]);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen, closeSearch]);

  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeMenu();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('mousedown', onPointerDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [openMenu, closeMenu]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    primaryNav.forEach((item) => router.prefetch(item.href));
    router.prefetch('/contact');
  }, [mobileMenuOpen, router]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div
          className={`transition-colors duration-300 ${
            overlay
              ? 'bg-transparent'
              : 'bg-paper-50/85 supports-[backdrop-filter]:bg-paper-50/70 backdrop-blur-xl border-b border-copper-500/15 shadow-sm shadow-ink-900/5'
          }`}
        >
          <div ref={navRef} className="max-w-[1440px] mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16 xl:h-20 gap-4">
              {/* Wordmark */}
              <Link href="/" className="flex-shrink-0 flex items-center gap-2.5" aria-label="Jwayyed Law LLC home">
                <Image
                  src={overlay ? '/assets/jwayyed-logo-light.png' : '/assets/jwayyed-logo-dark.png'}
                  alt="Jwayyed Law LLC"
                  width={2521}
                  height={407}
                  priority
                  sizes="200px"
                  className="h-7 xl:h-8 w-auto"
                />
                <span
                  className={`hidden sm:inline text-[0.6rem] tracking-[0.25em] uppercase font-semibold pl-2.5 border-l ${
                    overlay ? 'text-copper-200 border-white/25' : 'text-copper-600 border-copper-500/25'
                  }`}
                >
                  Ohio
                </span>
              </Link>

              {/* Centre pill */}
              <nav
                className={`hidden xl:flex items-center rounded-full p-1 border transition-colors duration-300 ${
                  overlay
                    ? 'bg-white/10 border-white/15 supports-[backdrop-filter]:backdrop-blur-xl'
                    : 'bg-ink-900/[0.05] border-ink-900/10'
                }`}
                aria-label="Primary"
              >
                <ul className="flex items-center gap-0.5">
                  {primaryNav.map((item) => (
                    <NavItem
                      key={item.href}
                      node={item}
                      pathname={pathname}
                      overlay={overlay}
                      isOpen={openMenu === item.name}
                      onOpenHover={() => openWithHover(item.name)}
                      onCloseHover={closeWithHover}
                      onToggle={() => toggleMenu(item.name)}
                      onClose={closeMenu}
                    />
                  ))}
                </ul>
              </nav>

              {/* Right actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen((v) => !v);
                    closeMenu();
                  }}
                  className={`hidden xl:inline-flex items-center justify-center w-10 h-10 rounded-full border transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400 ${
                    overlay
                      ? 'border-white/15 bg-white/10 text-white hover:bg-white/20'
                      : 'border-ink-900/10 bg-ink-900/[0.05] text-ink-800 hover:bg-ink-900/10'
                  }`}
                  aria-label={searchOpen ? 'Close search' : 'Open search'}
                  aria-expanded={searchOpen}
                  aria-controls="site-search-panel"
                >
                  {searchOpen ? <X className="w-4.5 h-4.5" /> : <Search className="w-4.5 h-4.5" />}
                </button>

                <Link
                  href="/contact"
                  className="max-xl:hidden inline-flex items-center gap-1.5 rounded-full bg-copper-200 hover:bg-copper-100 text-ink-900 text-[13px] font-semibold px-5 py-2.5 ring-1 ring-copper-500/25 shadow-sm transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                >
                  Book consultation
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>

                {/* Mobile / tablet */}
                <a
                  href={PHONE_TEL}
                  className={`xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors min-h-[44px] min-w-[44px] ${
                    overlay ? 'text-white hover:bg-white/15' : 'text-copper-600 hover:bg-copper-500/10'
                  }`}
                  aria-label={`Call ${PHONE}`}
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </a>
                <button
                  className={`xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors min-h-[44px] min-w-[44px] active:scale-[0.97] ${
                    overlay ? 'text-white hover:bg-white/15' : 'text-ink-800 hover:bg-ink-900/[0.06]'
                  }`}
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

          {/* Search panel */}
          <div
            id="site-search-panel"
            className={`hidden xl:block overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
              searchOpen ? 'max-h-32 opacity-100 border-t border-copper-500/15' : 'max-h-0 opacity-0'
            }`}
            aria-hidden={!searchOpen}
          >
            <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4">
              <div className="max-w-2xl mx-auto">
                <SearchBar onNavigate={closeSearch} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={mobileMenuOpen} onClose={closeMobileMenu} pathname={pathname} />
    </>
  );
}

// ============================================================================
// PILL ITEM + DROPDOWN
//
// A disclosure rather than an ARIA menu: the panels hold ordinary links, so
// they expose aria-expanded/aria-controls and leave Tab to walk the links,
// instead of claiming role="menu" without the arrow-key contract that implies.
//
// Panels stay mounted and hide with `invisible`, which keeps their links in the
// HTML for crawlers while removing them from the tab order and a11y tree.
// ============================================================================

function NavItem({
  node,
  pathname,
  overlay,
  isOpen,
  onOpenHover,
  onCloseHover,
  onToggle,
  onClose,
}: {
  node: NavNode;
  pathname: string | null;
  overlay: boolean;
  isOpen: boolean;
  onOpenHover: () => void;
  onCloseHover: () => void;
  onToggle: () => void;
  onClose: () => void;
}) {
  const panelId = `nav-panel-${useId()}`;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const active = isBranchActive(pathname, node);
  const hasMenu = !!node.subDropdowns?.length || !!node.subLinks?.length;
  const hasGroups = !!node.subDropdowns?.length;

  // The filled pill that marks the current section, matching the design's
  // treatment of the active item.
  const pill = active
    ? overlay
      ? 'bg-white text-ink-900 shadow-sm'
      : 'bg-ink-900 text-white shadow-sm'
    : overlay
      ? 'text-white/85 hover:text-white hover:bg-white/10'
      : 'text-ink-700 hover:text-ink-900 hover:bg-ink-900/[0.06]';

  const shared =
    'relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400';

  const focusFirstLink = useCallback(() => {
    panelRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus();
  }, []);

  if (!hasMenu) {
    return (
      <li>
        <Link href={node.href} className={`${shared} ${pill}`} aria-current={active ? 'page' : undefined}>
          {node.name}
        </Link>
      </li>
    );
  }

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) onToggle();
      window.requestAnimationFrame(focusFirstLink);
    }
  };

  const handlePanelKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
      triggerRef.current?.focus();
    }
  };

  const panelWidth = hasGroups ? 'w-[min(52rem,calc(100vw-3rem))]' : 'w-[19rem]';

  return (
    <li className="relative" onMouseEnter={onOpenHover} onMouseLeave={onCloseHover}>
      <button
        ref={triggerRef}
        type="button"
        onClick={onToggle}
        onKeyDown={handleTriggerKeyDown}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={`${shared} ${pill}`}
      >
        {node.name}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        ref={panelRef}
        onKeyDown={handlePanelKeyDown}
        className={`absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 ${panelWidth} glass-menu rounded-3xl p-2.5 z-[60] transition-[opacity,transform] duration-200 ease-out ${
          isOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-1'
        }`}
      >
        <Link
          href={node.href}
          onClick={onClose}
          className="flex items-start gap-3 rounded-2xl px-4 py-3 mb-1 bg-gradient-to-br from-copper-500/12 to-copper-400/5 hover:from-copper-500/20 hover:to-copper-400/10 transition-colors group/overview focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
        >
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[13px] font-semibold text-ink-900">
              {node.name} overview
              <ArrowUpRight
                className="w-3.5 h-3.5 text-copper-600 transition-transform duration-200 group-hover/overview:translate-x-0.5 group-hover/overview:-translate-y-0.5"
                aria-hidden="true"
              />
            </div>
            {node.tagline && <p className="text-[11.5px] leading-snug text-ink-700/70 mt-0.5">{node.tagline}</p>}
          </div>
        </Link>

        {hasGroups ? (
          <div className="grid grid-cols-3 gap-x-2 gap-y-1 p-1">
            {node.subDropdowns!.map((group) => (
              <div key={group.name} className="min-w-0">
                <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-copper-600 px-3 pt-2 pb-1">
                  {group.name}
                </div>
                <ul>
                  {group.links.map((link) => (
                    <li key={`${group.name}-${link.href}-${link.name}`}>
                      <PanelLink href={link.href} label={link.name} pathname={pathname} onClose={onClose} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="p-1">
            {node.subLinks!.map((link) => (
              <li key={link.href}>
                <PanelLink href={link.href} label={link.name} pathname={pathname} onClose={onClose} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

function PanelLink({
  href,
  label,
  pathname,
  onClose,
}: {
  href: string;
  label: string;
  pathname: string | null;
  onClose: () => void;
}) {
  const active = isActiveRoute(pathname, href);
  return (
    <Link
      href={href}
      onClick={onClose}
      className={`block rounded-lg px-3 py-[7px] text-[12.5px] leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 ${
        active
          ? 'text-copper-600 font-semibold bg-copper-500/10'
          : 'text-ink-700 hover:text-copper-600 hover:bg-copper-500/[0.07]'
      }`}
    >
      {label}
    </Link>
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
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.body.classList.toggle('mobile-drawer-open', isOpen);
    document.querySelectorAll(ACCESSIBILITY_WIDGET_SELECTOR).forEach((el) => {
      (el as HTMLElement).style.display = isOpen ? 'none' : '';
    });
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-drawer-open');
      document.querySelectorAll(ACCESSIBILITY_WIDGET_SELECTOR).forEach((el) => {
        (el as HTMLElement).style.display = '';
      });
    };
  }, [isOpen]);

  useEffect(() => {
    if (previousPathnameRef.current !== pathname && isOpen) onClose();
    previousPathnameRef.current = pathname;
  }, [pathname, isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const current = primaryNav.find((n) => isBranchActive(pathname, n));
    setExpanded(current?.name ?? null);
  }, [isOpen, pathname]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-ink-950/60 backdrop-blur-sm z-[110] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 h-full w-[88%] max-w-[380px] bg-paper-50 z-[120] transform transition-transform duration-300 ease-out shadow-2xl flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="flex items-center justify-between px-5 py-4 aurora-deep text-white flex-shrink-0">
          <Link href="/" onClick={onClose} aria-label="Jwayyed Law LLC home" className="flex items-center">
            <Image
              src="/assets/jwayyed-logo-light.png"
              alt="Jwayyed Law LLC"
              width={2521}
              height={407}
              sizes="150px"
              className="h-6 w-auto"
            />
          </Link>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors active:scale-[0.97] flex-shrink-0"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 flex flex-col">
          <a
            href={PHONE_TEL}
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 mb-4 rounded-2xl border border-copper-500/30 bg-gradient-to-br from-copper-500/10 to-copper-400/5 hover:from-copper-500/16 transition-colors"
          >
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-copper-400 to-copper-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-copper-700/30">
              <Phone className="w-4 h-4" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-ink-700/60 font-semibold">Call us</div>
              <div className="text-copper-600 font-semibold text-base">{PHONE}</div>
            </div>
          </a>

          <div className="mb-6">
            <SearchBar onNavigate={onClose} />
          </div>

          <nav className="space-y-0.5 flex-1" aria-label="Mobile primary">
            {primaryNav.map((node) => {
              const branchActive = isBranchActive(pathname, node);
              const isExpanded = expanded === node.name;
              const children = node.subDropdowns ? node.subDropdowns.flatMap((g) => g.links) : (node.subLinks ?? []);
              const hasChildren = children.length > 0;

              return (
                <div key={node.href} className="rounded-2xl overflow-hidden">
                  <div className="flex items-stretch">
                    <Link
                      href={node.href}
                      onClick={onClose}
                      className={`flex-1 px-4 py-3.5 font-medium rounded-l-2xl transition-colors ${
                        branchActive ? 'bg-copper-500/12 text-copper-600' : 'text-ink-900 hover:bg-copper-500/[0.07]'
                      } ${hasChildren ? '' : 'rounded-r-2xl'}`}
                    >
                      {node.name}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => setExpanded((cur) => (cur === node.name ? null : node.name))}
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${node.name}`}
                        className={`w-12 flex items-center justify-center rounded-r-2xl transition-colors ${
                          branchActive ? 'bg-copper-500/12 text-copper-600' : 'text-ink-700/60 hover:bg-copper-500/[0.07]'
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <ul className="pl-3 pr-1 pb-2 pt-1 space-y-0.5 border-l-2 border-copper-500/25 ml-4 mt-1">
                      {children.map((link) => (
                        <li key={`${node.name}-${link.href}-${link.name}`}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                              isActiveRoute(pathname, link.href)
                                ? 'text-copper-600 font-semibold bg-copper-500/10'
                                : 'text-ink-700/85 hover:text-copper-600 hover:bg-copper-500/[0.07]'
                            }`}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>

          <Link
            href="/contact"
            onClick={onClose}
            className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-full bg-copper-200 hover:bg-copper-100 text-ink-900 font-semibold py-3.5 ring-1 ring-copper-500/25 transition-colors group flex-shrink-0"
          >
            Book consultation
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>

          <div className="mt-4 text-center text-xs text-ink-700/60 flex-shrink-0">
            Mon–Fri 9:00 AM – 5:00 PM · Serving All of Ohio
          </div>
        </div>
      </div>
    </>
  );
}
