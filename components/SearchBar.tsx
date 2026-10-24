'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Fuse from 'fuse.js';
import { siteNav, auxiliaryNav, type NavNode } from '@/data/navigation';

// ============================================================================
// TYPES
// ============================================================================

interface SearchItem {
  title: string;
  href: string;
  category: string;
  subcategory?: string;
}

// ============================================================================
// BUILD SEARCH INDEX FROM NAV ITEMS
// ============================================================================

function buildSearchIndex(navItems: NavNode[]): SearchItem[] {
  const items: SearchItem[] = [];

  navItems.forEach((item) => {
    // Add the main category page
    items.push({
      title: item.name,
      href: item.href,
      category: item.name,
    });

    // Add subLinks
    if (item.subLinks) {
      item.subLinks.forEach((link) => {
        items.push({
          title: link.name,
          href: link.href,
          category: item.name,
        });
      });
    }

    // Add subDropdowns (like Courts, Other Services)
    if (item.subDropdowns) {
      item.subDropdowns.forEach((group) => {
        group.links.forEach((link) => {
          items.push({
            title: link.name,
            href: link.href,
            category: item.name,
            subcategory: group.name,
          });
        });
      });
    }
  });

  return items;
}


// Blog articles for search indexing
const blogSearchItems: SearchItem[] = [
  { title: 'What to Do If You\'re Pulled Over for OVI in Ohio', href: '/our-law-firm/blog/what-to-do-pulled-over-ovi-ohio', category: 'Blog', subcategory: 'OVI/DUI' },
  { title: 'Understanding Ohio\'s Castle Doctrine and Self-Defense Laws', href: '/our-law-firm/blog/ohio-castle-doctrine-self-defense-laws', category: 'Blog', subcategory: 'Criminal Defense' },
  { title: 'Steps to Take After a Car Accident in Ohio', href: '/our-law-firm/blog/steps-after-car-accident-ohio', category: 'Blog', subcategory: 'Personal Injury' },
  { title: 'How Ohio\'s New Expungement Laws Could Clear Your Record', href: '/our-law-firm/blog/ohio-new-expungement-laws-clear-record', category: 'Blog', subcategory: 'Criminal Defense' },
  { title: 'Starting a Business in Ohio: LLC vs. Corporation', href: '/our-law-firm/blog/starting-business-ohio-llc-vs-corporation', category: 'Blog', subcategory: 'Business Law' },
  { title: 'What to Expect at Your First Court Appearance in Ohio', href: '/our-law-firm/blog/what-to-expect-first-court-appearance-ohio', category: 'Blog', subcategory: 'Ohio Courts' },
  { title: 'Ohio Slip and Fall Laws: What Property Owners Owe You', href: '/our-law-firm/blog/ohio-slip-and-fall-laws-property-owners', category: 'Blog', subcategory: 'Personal Injury' },
  { title: 'Protecting Your Rights During a Traffic Stop in Ohio', href: '/our-law-firm/blog/protecting-rights-during-traffic-stop-ohio', category: 'Blog', subcategory: 'Criminal Defense' },
];

// Team member search entries
const teamSearchItems: SearchItem[] = [
];

// ============================================================================
// SEARCH BAR COMPONENT
// ============================================================================

interface SearchBarProps {
  className?: string;
  onNavigate?: () => void;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '', onNavigate, autoFocus }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Ensure the input is actually focused when autoFocus is requested (e.g., when navbar toggles it open).
  useEffect(() => {
    if (!autoFocus) return;
    const id = window.setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange?.(length, length);
      }
    }, 10);
    return () => window.clearTimeout(id);
  }, [autoFocus]);

  // Build search index once (nav items + blog articles + team members)
  const searchIndex = useMemo(
    () => [...buildSearchIndex([...siteNav, ...auxiliaryNav]), ...blogSearchItems, ...teamSearchItems],
    []
  );

  // Initialize Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'category', weight: 1 },
        { name: 'subcategory', weight: 1 },
      ],
      threshold: 0.35,
      includeScore: true,
      minMatchCharLength: 2,
    });
  }, [searchIndex]);

  // Get search results
  const results = useMemo(() => {
    if (query.length < 2) return [];
    return fuse.search(query).slice(0, 8);
  }, [fuse, query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Prefetch likely targets so click-through feels instant.
  useEffect(() => {
    if (!isOpen || results.length === 0) return;
    results.slice(0, 5).forEach((result) => {
      router.prefetch(result.item.href);
    });
  }, [isOpen, results, router]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          const href = results[selectedIndex].item.href;
          setQuery('');
          setIsOpen(false);
          inputRef.current?.blur();
          onNavigate?.();
          router.push(href);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(value.length >= 2);
  };

  const handleResultClick = (href: string) => {
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
    onNavigate?.();
    router.push(href);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search services..."
          autoFocus={autoFocus}
          className="
            w-full pl-10 pr-4 py-2.5 
            bg-gray-50 border border-gray-200 rounded-lg
            text-base sm:text-sm text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500
            transition-all duration-200
          "
        />
        {/* Search Icon */}
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Clear Button */}
        {query && (
            <button
                onClick={() => {
                setQuery('');
                setIsOpen(false);
                inputRef.current?.focus();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
            >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && (
        <div
            className="
            absolute top-full left-0 right-0 mt-2
            bg-white border border-gray-100 rounded-xl shadow-xl
            overflow-hidden z-[130]
            "
        >
          {results.length > 0 ? (
            <ul className="py-2 max-h-[45vh] sm:max-h-[300px] overflow-y-auto overscroll-contain scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {results.map((result, index) => (
                <li key={`${result.item.href}-${index}`}>
                  <Link
                    href={result.item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleResultClick(result.item.href);
                    }}
                    className={`
                      flex flex-col px-4 py-3 transition-colors
                      ${index === selectedIndex ? 'bg-orange-50' : 'hover:bg-gray-50'}
                    `}
                  >
                    <span className={`text-sm font-medium ${index === selectedIndex ? 'text-orange-600' : 'text-gray-900'}`}>
                      {result.item.title}
                    </span>
                    <span className="text-xs text-gray-400 mt-0.5">
                      {result.item.subcategory 
                        ? `${result.item.category} › ${result.item.subcategory}`
                        : result.item.category
                      }
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-gray-500">No results found for "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">Try searching for a service or location</p>
            </div>
          )}

          {/* Footer hint */}
          {/* <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">↑↓</kbd>
              {' '}to navigate{' '}
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">↵</kbd>
              {' '}to select{' '}
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-mono">esc</kbd>
              {' '}to close
            </p>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
