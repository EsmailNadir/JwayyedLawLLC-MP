'use client';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';

// ============================================================================
// TYPES
// ============================================================================

interface SearchItem {
  title: string;
  href: string;
  category: string;
  subcategory?: string;
}

interface SubLink {
  name: string;
  href: string;
}

interface SubDropdown {
  name: string;
  links: SubLink[];
}

interface NavItem {
  name: string;
  href: string;
  subLinks?: SubLink[];
  subDropdowns?: SubDropdown[];
}

// ============================================================================
// BUILD SEARCH INDEX FROM NAV ITEMS
// ============================================================================

function buildSearchIndex(navItems: NavItem[]): SearchItem[] {
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

// ============================================================================
// NAV ITEMS DATA (same as your navbar)
// ============================================================================

const navItems: NavItem[] = [
  {
    name: 'Criminal Defense',
    href: '/criminal-defense',
    subLinks: [
      { name: 'Columbus Criminal Defense Attorney', href: '/criminal-defense' },
      { name: 'Assault Charges', href: '/criminal-defense/assault-charges' },
      { name: 'Domestic Violence', href: '/criminal-defense/domestic-violence' },
      { name: 'Drug Crimes', href: '/criminal-defense/drug-crimes' },
      { name: 'Theft & Fraud Charges', href: '/criminal-defense/theft-fraud-charges' },
      { name: 'Burglary Charges', href: '/criminal-defense/burglary-charges' },
      { name: 'Robbery Charges', href: '/criminal-defense/robbery-charges' },
      { name: 'Sex Crimes', href: '/criminal-defense/sex-crimes' },
      { name: 'Murder & Homicide Charges', href: '/criminal-defense/murder-homicide-charges' },
      { name: 'Kidnapping Charges', href: '/criminal-defense/kidnapping-charges' },
      { name: 'Gun / Weapons Charges', href: '/criminal-defense/gun-weapons-charges' },
      { name: 'Federal Crimes', href: '/criminal-defense/federal-crimes' },
      { name: 'Felony Charges', href: '/criminal-defense/felony-charges' },
      { name: 'Juvenile Offenses', href: '/criminal-defense/juvenile-offenses' },
      { name: 'Expungement / Record Sealing', href: '/criminal-defense/expungement-record-sealing' },
    ],
  },
  {
    name: 'OVI / DUI',
    href: '/ovi-dui-defense',
    subLinks: [
      { name: 'Columbus OVI Attorney', href: '/ovi-dui-defense' },
      { name: 'First OVI', href: '/ovi-dui-defense/first-ovi' },
      { name: 'Second OVI', href: '/ovi-dui-defense/second-ovi' },
      { name: 'Third OVI', href: '/ovi-dui-defense/third-ovi' },
      { name: 'Felony OVI', href: '/ovi-dui-defense/felony-ovi' },
      { name: 'High-Tier OVI', href: '/ovi-dui-defense/high-tier-ovi' },
      { name: 'Refusal OVI', href: '/ovi-dui-defense/refusal-ovi' },
      { name: 'Underage OVI', href: '/ovi-dui-defense/underage-ovi' },
      { name: 'Commercial DUI (CDL)', href: '/ovi-dui-defense/commercial-dui-cdl' },
      { name: 'OVI with Accident', href: '/ovi-dui-defense/ovi-with-accident' },
      { name: 'Vehicular Assault', href: '/ovi-dui-defense/vehicular-assault' },
      { name: 'Driving Under OVI Suspension', href: '/ovi-dui-defense/driving-under-ovi-suspension' },
      { name: 'Limited Driving Privileges', href: '/ovi-dui-defense/limited-driving-privileges' },
    ],
  },
  {
    name: 'Personal Injury',
    href: '/personal-injury',
    subLinks: [
      { name: 'Columbus Personal Injury Attorney', href: '/personal-injury' },
      { name: 'Car Accidents', href: '/personal-injury/car-accidents' },
      { name: 'Truck Accidents', href: '/personal-injury/truck-accidents' },
      { name: 'Motorcycle Accidents', href: '/personal-injury/motorcycle-accidents' },
      { name: 'Pedestrian Accidents', href: '/personal-injury/pedestrian-accidents' },
      { name: 'Slip and Fall', href: '/personal-injury/slip-and-fall' },
      { name: 'Premises Liability', href: '/personal-injury/premises-liability' },
      { name: 'Dog Bites', href: '/personal-injury/dog-bites' },
      { name: 'Medical Malpractice', href: '/personal-injury/medical-malpractice' },
      { name: 'Nursing Home Abuse', href: '/personal-injury/nursing-home-abuse' },
      { name: 'Workplace Injuries', href: '/personal-injury/workplace-injuries' },
      { name: 'Wrongful Death', href: '/personal-injury/wrongful-death' },
      { name: 'Catastrophic Injuries', href: '/personal-injury/catastrophic-injuries' },
    ],
  },
  {
    name: 'Civil',
    href: '/civil',
    subLinks: [
      { name: 'Columbus Civil Attorney', href: '/civil' },
      { name: 'Breach of Contract', href: '/civil/breach-of-contract' },
      { name: 'Real Estate Disputes', href: '/civil/real-estate-disputes' },
      { name: 'Landlord–Tenant Disputes', href: '/civil/landlord-tenant-disputes' },
      { name: 'Evictions', href: '/civil/evictions' },
      { name: 'Construction Disputes', href: '/civil/construction-disputes' },
      { name: 'Debt Collection Defense', href: '/civil/debt-collection-defense' },
      { name: 'Employment Disputes', href: '/civil/employment-disputes' },
      { name: 'Defamation', href: '/civil/defamation' },
      { name: 'Civil Protection Orders', href: '/civil/civil-protection-orders' },
      { name: 'Appeals', href: '/civil/appeals' },
    ],
  },
  {
    name: 'Business',
    href: '/business',
    subLinks: [
      { name: 'Columbus Business Attorney', href: '/business' },
      { name: 'Business Formation', href: '/business/business-formation' },
      { name: 'LLC Formation', href: '/business/llc-formation' },
      { name: 'Contract Drafting & Review', href: '/business/contract-drafting-review' },
      { name: 'Business Litigation', href: '/business/business-litigation' },
      { name: 'Partnership Disputes', href: '/business/partnership-disputes' },
      { name: 'Shareholder Disputes', href: '/business/shareholder-disputes' },
      { name: 'Non-Compete Agreements', href: '/business/non-compete-agreements' },
      { name: 'Employment Agreements', href: '/business/employment-agreements' },
      { name: 'Business Compliance', href: '/business/business-compliance' },
      { name: 'Business Dissolution', href: '/business/business-dissolution' },
    ],
  },
  {
    name: 'Other Services',
    href: '/other-services',
    subDropdowns: [
      {
        name: 'Estate Planning',
        links: [
          { name: 'Estate Planning & Wills', href: '/other-services/estate-planning-wills' },
          { name: 'Trusts', href: '/other-services/trusts' },
          { name: 'Powers of Attorney', href: '/other-services/powers-of-attorney' },
          { name: 'Guardianships', href: '/other-services/guardianships' },
        ],
      },
      {
        name: 'Probate',
        links: [
          { name: 'Probate Administration', href: '/other-services/probate-administration' },
          { name: 'Will Contests', href: '/other-services/will-contests' },
          { name: 'Estate Disputes', href: '/other-services/estate-disputes' },
        ],
      },
      {
        name: 'Immigration',
        links: [
          { name: 'Immigration Services', href: '/other-services/immigration-services' },
          { name: 'Green Cards', href: '/other-services/green-cards' },
          { name: 'Citizenship & Naturalization', href: '/other-services/citizenship-naturalization' },
          { name: 'Deportation Defense', href: '/other-services/deportation-defense' },
        ],
      },
      {
        name: 'Dispute Resolution',
        links: [
          { name: 'Mediation', href: '/other-services/mediation' },
          { name: 'Arbitration', href: '/other-services/arbitration' },
        ],
      },
    ],
  },
  {
    name: 'Courts',
    href: '/courts',
    subDropdowns: [
      {
        name: 'Franklin County',
        links: [
          { name: 'Franklin County Court of Common Pleas', href: '/courts/franklin-county-court-of-common-pleas' },
          { name: 'Franklin County Municipal Court', href: '/courts/franklin-county-municipal-court' },
          { name: 'Franklin County Juvenile Court', href: '/courts/franklin-county-juvenile-court' },
        ],
      },
      {
        name: 'Delaware County',
        links: [
          { name: 'Delaware County Court of Common Pleas', href: '/courts/delaware-county-court-of-common-pleas' },
          { name: 'Delaware County Municipal Court', href: '/courts/delaware-county-municipal-court' },
        ],
      },
      {
        name: 'Pickaway County',
        links: [
          { name: 'Pickaway County Court of Common Pleas', href: '/courts/pickaway-county-court-of-common-pleas' },
          { name: 'Circleville Municipal Court', href: '/courts/circleville-municipal-court' },
        ],
      },
      {
        name: 'Athens County',
        links: [
          { name: 'Athens County Court of Common Pleas', href: '/courts/athens-county-court-of-common-pleas' },
          { name: 'Athens Municipal Court', href: '/courts/athens-municipal-court' },
        ],
      },
      {
        name: 'Morrow County',
        links: [
          { name: 'Morrow County Court of Common Pleas', href: '/courts/morrow-county-court-of-common-pleas' },
          { name: 'Morrow County Municipal Court', href: '/courts/morrow-county-municipal-court' },
        ],
      },
      {
        name: 'Clinton County',
        links: [
          { name: 'Clinton County Court of Common Pleas', href: '/courts/clinton-county-court-of-common-pleas' },
          { name: 'Wilmington Municipal Court', href: '/courts/wilmington-municipal-court' },
        ],
      },
      {
        name: 'Butler County',
        links: [
          { name: 'Butler County Court of Common Pleas', href: '/courts/butler-county-court-of-common-pleas' },
          { name: 'Hamilton Municipal Court', href: '/courts/hamilton-municipal-court' },
        ],
      },
      {
        name: 'Greene County',
        links: [
          { name: 'Greene County Court of Common Pleas', href: '/courts/greene-county-court-of-common-pleas' },
          { name: 'Fairborn Municipal Court', href: '/courts/fairborn-municipal-court' },
        ],
      },
      {
        name: 'Montgomery County',
        links: [
          { name: 'Montgomery County Court of Common Pleas', href: '/courts/montgomery-county-court-of-common-pleas' },
          { name: 'Dayton Municipal Court', href: '/courts/dayton-municipal-court' },
        ],
      },
    ],
  },
  {
    name: 'Our Firm',
    href: '/our-law-firm',
    subLinks: [
      { name: 'About Us', href: '/our-law-firm/about-us' },
      { name: 'Our Attorneys', href: '/our-law-firm/our-attorneys' },
      { name: 'Testimonials', href: '/our-law-firm/testimonials' },
      { name: 'Blog', href: '/our-law-firm/blog' },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

// ============================================================================
// SEARCH BAR COMPONENT
// ============================================================================

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '' }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build search index once
  const searchIndex = useMemo(() => buildSearchIndex(navItems), []);

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
          window.location.href = results[selectedIndex].item.href;
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

  const handleResultClick = () => {
    setQuery('');
    setIsOpen(false);
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
          className="
            w-full pl-10 pr-4 py-2.5 
            bg-gray-50 border border-gray-200 rounded-lg
            text-sm text-gray-900 placeholder-gray-400
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
            overflow-hidden z-50
            "
        >
          {results.length > 0 ? (
            <ul className="py-2 max-h-[300px] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {results.map((result, index) => (
                <li key={`${result.item.href}-${index}`}>
                  <Link
                    href={result.item.href}
                    onClick={handleResultClick}
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
