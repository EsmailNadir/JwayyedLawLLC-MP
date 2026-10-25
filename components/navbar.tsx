'use client';

import React, { useState, useEffect, useCallback, useRef, useId } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, Search, X, Menu, ChevronDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import { primaryNav, type NavNode } from '@/data/navigation';

const PHONE = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';
const CTA_LABEL = 'Schedule a consultation';
const ACCESSIBILITY_WIDGET_SELECTOR = '#acsb-trigger, #acsb-trigger-frame, .acsb-trigger, .acsb-widget, [data-acsb]';
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, [tabindex]:not([tabindex="-1"])';

// Mouse travel from a trigger to its panel crosses a few pixels of dead space,
// so closing is delayed rather than immediate on mouseleave.
const HOVER_CLOSE_DELAY_MS = 140;

/** Dropdown panels really float over the page, so they alone carry a shadow. */
const MENU_SHADOW = 'shadow-[0_24px_48px_-24px_rgba(0,0,0,0.55)]'; // taste-skill-ignore

/** Ring used on every control on the navy bar. */
const FOCUS = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky';

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
// A plain bar: wordmark, the five menu entries as plain text links, search,
// and the phone number as the one filled action. No pill, no blur, no rule
// under it. Over the home hero it is transparent; elsewhere solid navy.
// ============================================================================

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [pinned, setPinned] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Transparent over the home page's video hero; solid navy once scrolled,
  // while search is open, and on every other page.
  const overlay = pathname === '/' && !isScrolled && !searchOpen;

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
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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

  const iconButton = `inline-flex items-center justify-center w-11 h-11 text-white hover:bg-white/15 active:bg-white/25 transition-colors ${FOCUS}`;

  return (
    <>
      <header className={`jw sticky top-0 z-50 w-full text-white transition-colors duration-300 ${overlay ? 'bg-transparent' : 'bg-navy-950'}`}>
        <div ref={navRef} className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 xl:h-20 gap-6">
            <Link href="/" className={`flex-shrink-0 flex items-center ${FOCUS}`} aria-label="Jwayyed Law LLC home">
              <Image
                src="/assets/jwayyed-logo-light.png"
                alt="Jwayyed Law LLC"
                width={2521}
                height={407}
                priority
                sizes="200px"
                className="h-7 xl:h-8 w-auto"
              />
            </Link>

            <nav className="hidden xl:block" aria-label="Primary">
              <ul className="flex items-center gap-2">
                {primaryNav.map((item) => (
                  <NavItem
                    key={item.href}
                    node={item}
                    pathname={pathname}
                    isOpen={openMenu === item.name}
                    onOpenHover={() => openWithHover(item.name)}
                    onCloseHover={closeWithHover}
                    onToggle={() => toggleMenu(item.name)}
                    onClose={closeMenu}
                  />
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => {
                  setSearchOpen((v) => !v);
                  closeMenu();
                }}
                className={`hidden xl:inline-flex ${iconButton}`}
                aria-label={searchOpen ? 'Close search' : 'Search the site'}
                aria-expanded={searchOpen}
                aria-controls="site-search-panel"
              >
                {searchOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Search className="w-5 h-5" aria-hidden="true" />}
              </button>

              <a
                href={PHONE_TEL}
                className={`max-xl:hidden inline-flex items-center gap-2 min-h-[44px] px-5 bg-sky text-navy-950 text-[length:var(--step-small)] font-medium tabular-nums hover:bg-white active:translate-y-px transition-colors ${FOCUS} focus-visible:ring-white`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {PHONE}
              </a>

              {/* Mobile / tablet */}
              <a href={PHONE_TEL} className={`xl:hidden ${iconButton}`} aria-label={`Call ${PHONE}`}>
                <Phone className="w-5 h-5" aria-hidden="true" />
              </a>
              <button
                type="button"
                className={`xl:hidden ${iconButton}`}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-site-menu"
                style={{ touchAction: 'manipulation' }}
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Search panel. Hidden and inert when closed so its input is not
            reachable by Tab while unseen. */}
        <div id="site-search-panel" className={searchOpen ? 'hidden xl:block bg-navy-900' : 'hidden'} inert={!searchOpen}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-4">
            <div className="max-w-2xl mx-auto">
              <SearchBar onNavigate={closeSearch} />
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={mobileMenuOpen} onClose={closeMobileMenu} pathname={pathname} />
    </>
  );
}

// ============================================================================
// NAV ITEM + DROPDOWN
//
// A disclosure rather than an ARIA menu: the panels hold ordinary links, so
// they expose aria-expanded/aria-controls and leave Tab to walk the links,
// instead of claiming role="menu" without the arrow-key contract that implies.
//
// Closed panels are `hidden`: their links stay in the server HTML for
// crawlers, and are out of the tab order and accessibility tree.
// ============================================================================

function NavItem({
  node,
  pathname,
  isOpen,
  onOpenHover,
  onCloseHover,
  onToggle,
  onClose,
}: {
  node: NavNode;
  pathname: string | null;
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

  // The current section takes the copper ink; hover draws a copper bar under
  // the label. The one filled shape in the bar stays the phone button.
  const shared =
    `relative inline-flex items-center gap-1 px-3 py-2.5 text-[length:var(--step-small)] font-medium transition-colors cursor-pointer ` +
    `after:absolute after:left-3 after:right-3 after:bottom-1 after:h-0.5 after:bg-sky after:origin-left after:transition-transform after:duration-200 ` +
    `${active ? 'text-sky after:scale-x-100' : 'text-white hover:text-white after:scale-x-0 hover:after:scale-x-100'} ${FOCUS}`;

  const focusFirstLink = useCallback(() => {
    panelRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus();
  }, []);

  if (!hasMenu) {
    return (
      <li>
        <Link href={node.href} className={shared} aria-current={active ? 'page' : undefined}>
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

  const panelWidth = hasGroups ? 'w-[min(60rem,calc(100vw-3rem))]' : 'w-[26rem]';
  const overviewLabel = node.href === '/services' ? 'See every service' : node.href === '/courts' ? 'Every court we cover' : 'Overview';

  return (
    <li className="relative" onMouseEnter={onOpenHover} onMouseLeave={onCloseHover}>
      <button
        ref={triggerRef}
        type="button"
        onClick={onToggle}
        onKeyDown={handleTriggerKeyDown}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={shared}
      >
        {node.name}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {/* A real floating menu, so it is the one thing on the bar with a shadow.
          A navy rail introduces the section over the firm's mark; the white
          body holds the links. Grouped menus set the two side by side (the
          rail adds an overview link and the phone), single lists stack them. */}
      <div
        id={panelId}
        ref={panelRef}
        onKeyDown={handlePanelKeyDown}
        className={`${isOpen ? (hasGroups ? 'grid jw-menu-in' : 'block jw-menu-in') : 'hidden'} ${
          hasGroups ? 'grid-cols-[17rem_minmax(0,1fr)]' : ''
        } absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 ${panelWidth} border-t-2 border-sky bg-white text-navy-950 z-[60] ${MENU_SHADOW}`}
      >
        {/* Hover bridge across the gap between the bar and the panel. */}
        <span className="absolute -top-[14px] inset-x-0 h-[14px]" aria-hidden="true" />

        <div
          className={`jw-mark bg-navy-950 text-white flex flex-col ${hasGroups ? 'p-7 gap-6' : 'px-6 py-5'}`}
          style={{ '--jw-mark-opacity': 0.08 } as React.CSSProperties}
        >
          <div>
            <p className={`jw-display leading-tight ${hasGroups ? 'text-[1.75rem]' : 'text-[1.4rem]'}`}>{node.name}</p>
            {node.tagline && <p className="mt-2 text-[15px] leading-snug text-white/75">{node.tagline}</p>}
          </div>
          {hasGroups && (
            <div className="flex flex-col gap-3 mt-auto">
              <Link
                href={node.href}
                onClick={onClose}
                className={`group/ov inline-flex items-center gap-2 text-[15px] font-medium text-sky hover:text-white transition-colors ${FOCUS}`}
              >
                {overviewLabel}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/ov:-translate-y-0.5 group-hover/ov:translate-x-0.5" aria-hidden="true" />
              </Link>
              <a href={PHONE_TEL} className={`inline-flex items-center gap-2 text-[15px] tabular-nums text-white/85 hover:text-white transition-colors ${FOCUS}`}>
                <Phone className="w-4 h-4 text-sky" aria-hidden="true" />
                {PHONE}
              </a>
            </div>
          )}
        </div>

        {hasGroups ? (
          <div className="grid grid-cols-3 gap-x-8 gap-y-7 p-7">
            {node.subDropdowns!.map((group) => (
              <div key={group.name} className="min-w-0">
                <p className="jw-display text-[1.05rem] leading-tight text-navy-950 pb-2 mb-1.5 border-b border-navy-950/10">{group.name}</p>
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
          <ul className="p-3">
            {node.subLinks!.map((link) => (
              <li key={link.href}>
                <PanelLink href={link.href} label={link.name} pathname={pathname} onClose={onClose} roomy />
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

/**
 * One menu link. Its arrow slides in on hover; a trailing "→" in the data
 * marks a column's "All …" link, which is set in the accent as the way on.
 */
function PanelLink({
  href,
  label,
  pathname,
  onClose,
  roomy = false,
}: {
  href: string;
  label: string;
  pathname: string | null;
  onClose: () => void;
  roomy?: boolean;
}) {
  const active = isActiveRoute(pathname, href);
  const isAll = / →$/.test(label);
  const tone = active
    ? 'text-sky-deep font-medium'
    : isAll
      ? 'text-sky-deep font-medium hover:text-navy-950'
      : 'text-navy-950/75 hover:text-navy-950';
  return (
    <Link
      href={href}
      onClick={onClose}
      aria-current={active ? 'page' : undefined}
      className={`group/pl flex items-center justify-between gap-3 ${roomy ? 'px-3 py-2.5 hover:bg-ice' : 'py-1.5'} text-[15px] leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep ${tone}`}
    >
      <span className="min-w-0">{label.replace(/ →$/, '')}</span>
      <ArrowRight
        className={`w-3.5 h-3.5 flex-shrink-0 text-sky-deep transition-[opacity,translate] duration-200 ${
          isAll || active ? 'opacity-100' : 'opacity-0 -translate-x-1.5 group-hover/pl:opacity-100 group-hover/pl:translate-x-0'
        }`}
        aria-hidden="true"
      />
    </Link>
  );
}

// ============================================================================
// MOBILE DRAWER
//
// A modal dialog, so it behaves like one: closed, it is `hidden` and
// `inert` (sliding it off-screen alone left its controls in the Tab order);
// open, focus moves into it, Tab is held inside, Escape closes it, and focus
// returns to whatever opened it.
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
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
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
    if (!isOpen) return;
    const opener = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (previousPathnameRef.current !== pathname && isOpen) onClose();
    previousPathnameRef.current = pathname;
  }, [pathname, isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const current = primaryNav.find((n) => isBranchActive(pathname, n));
    setExpanded(current?.name ?? null);
  }, [isOpen, pathname]);

  const linkFocus = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-deep';

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-[110] ${isOpen ? 'block jw-menu-in' : 'hidden'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-site-menu"
        ref={panelRef}
        // `hidden` when closed (display: none), so nothing in it is laid out,
        // reachable or read; it slides in on open when motion is allowed.
        className={`jw fixed top-0 right-0 h-full w-[88%] max-w-[400px] bg-white text-navy-950 z-[120] flex-col ${
          isOpen ? 'flex jw-drawer-in' : 'hidden'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!isOpen}
      >
        <div className="flex items-center justify-between pl-5 pr-2 h-16 bg-navy-950 text-white flex-shrink-0">
          <Link href="/" onClick={onClose} aria-label="Jwayyed Law LLC home" className={`flex items-center ${FOCUS}`}>
            <Image src="/assets/jwayyed-logo-light.png" alt="Jwayyed Law LLC" width={2521} height={407} sizes="150px" className="h-6 w-auto" />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className={`w-11 h-11 flex items-center justify-center text-white hover:bg-navy-800 transition-colors ${FOCUS}`}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain p-5 flex flex-col">
          <a
            href={PHONE_TEL}
            onClick={onClose}
            className={`flex items-center justify-center gap-2.5 w-full min-h-[52px] bg-sky text-navy-950 font-medium tabular-nums hover:bg-navy-950 hover:text-white transition-colors ${linkFocus}`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call {PHONE}
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className={`mt-2 mb-5 flex items-center justify-center w-full min-h-[52px] border-2 border-navy-950 font-medium hover:bg-navy-950 hover:text-white transition-colors ${linkFocus}`}
          >
            {CTA_LABEL}
          </Link>

          <div className="mb-5">
            <SearchBar onNavigate={onClose} />
          </div>

          <nav className="flex-1 grid gap-1 content-start" aria-label="Mobile primary">
            {primaryNav.map((node) => {
              const branchActive = isBranchActive(pathname, node);
              const isExpanded = expanded === node.name;
              const children = node.subDropdowns ? node.subDropdowns.flatMap((g) => g.links) : (node.subLinks ?? []);
              const hasChildren = children.length > 0;

              return (
                <div key={node.href} className={isExpanded ? 'bg-navy-950/[0.05]' : ''}>
                  <div className="flex items-stretch">
                    <Link
                      href={node.href}
                      onClick={onClose}
                      aria-current={isActiveRoute(pathname, node.href) ? 'page' : undefined}
                      className={`flex-1 px-3 py-3.5 text-lg font-medium transition-colors ${linkFocus} ${
                        branchActive ? 'text-sky-deep' : 'hover:text-sky-deep'
                      }`}
                    >
                      {node.name}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => setExpanded((cur) => (cur === node.name ? null : node.name))}
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${node.name}`}
                        className={`w-12 flex items-center justify-center text-navy-950/70 hover:text-navy-950 transition-colors ${linkFocus}`}
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <ul className="pb-3">
                      {children.map((link) => (
                        <li key={`${node.name}-${link.href}-${link.name}`}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            aria-current={isActiveRoute(pathname, link.href) ? 'page' : undefined}
                            className={`block px-5 py-2.5 text-[length:var(--step-small)] transition-colors ${linkFocus} ${
                              isActiveRoute(pathname, link.href) ? 'text-sky-deep font-medium' : 'hover:text-sky-deep'
                            }`}
                          >
                            {link.name.replace(/ →$/, '')}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>

          <p className="mt-5 text-[length:var(--step-small)] text-navy-950/70 flex-shrink-0">Open Monday to Friday, 9am to 5pm.</p>
        </div>
      </div>
    </>
  );
}
