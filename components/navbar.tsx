'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ============================================================================
// CONFIGURATION & TYPES
// ============================================================================

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
// DATA
// ============================================================================

const navItems: NavItem[] = [
  {
    name: 'Criminal Defense',
    href: '/criminal-defense',
    subLinks: [
      { name: 'Ohio Criminal Defense Attorney', href: '/criminal-defense' },
      { name: 'Assault Charges', href: '/criminal-defense/assault-charges' },
      { name: 'Domestic Violence', href: '/criminal-defense/domestic-violence' },
      { name: 'Criminal Mischief', href: '/criminal-defense/criminal-mischief' },
      { name: 'Criminal Trespass', href: '/criminal-defense/criminal-trespass' },
      { name: 'Petty Theft', href: '/criminal-defense/petty-theft' },
      { name: 'Resisting Arrest', href: '/criminal-defense/resisting-arrest' },
      { name: 'Obstruction of Official Business', href: '/criminal-defense/obstruction-of-official-business' },
      { name: 'Speeding Tickets', href: '/criminal-defense/speeding-tickets' },
      { name: 'Driving Under Suspension', href: '/criminal-defense/driving-under-suspension' },
      { name: 'No Operator\'s License', href: '/criminal-defense/no-operators-license' },
      { name: 'Expungement / Record Sealing', href: '/criminal-defense/expungement-record-sealing' },
      { name: 'All Criminal Defense Areas', href: '/criminal-defense' },
    ],
  },
  {
    name: 'OVI / DUI',
    href: '/ovi-dui-defense',
    subLinks: [
      { name: 'Ohio OVI Attorney', href: '/ovi-dui-defense' },
      { name: 'First OVI', href: '/ovi-dui-defense/first-ovi' },
      { name: 'Second OVI', href: '/ovi-dui-defense/second-ovi' },
      { name: 'Third OVI', href: '/ovi-dui-defense/third-ovi' },
      { name: 'High-Tier OVI', href: '/ovi-dui-defense/high-tier-ovi' },
      { name: 'Refusal OVI', href: '/ovi-dui-defense/refusal-ovi' },
      { name: 'Underage OVI', href: '/ovi-dui-defense/underage-ovi' },
      { name: 'Commercial DUI (CDL)', href: '/ovi-dui-defense/commercial-dui-cdl' },
      { name: 'OVI with Accident', href: '/ovi-dui-defense/ovi-with-accident' },
      { name: 'Driving Under OVI Suspension', href: '/ovi-dui-defense/driving-under-ovi-suspension' },
      { name: 'Limited Driving Privileges', href: '/ovi-dui-defense/limited-driving-privileges' },
      { name: 'All OVI Defense Areas', href: '/ovi-dui-defense' },
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
      { name: 'All Personal Injury Areas', href: '/personal-injury' },
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
      { name: 'All Civil Areas', href: '/civil' },
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
      { name: 'All Business Areas', href: '/business' },
    ],
  },
  {
    name: 'Trusts',
    href: '/trusts',
    subLinks: [
      { name: 'Columbus Trusts Attorney', href: '/trusts' },
      { name: 'Charitable Trusts', href: '/trusts/charitable-trusts' },
      { name: 'Dynasty Trusts', href: '/trusts/dynasty-trusts' },
      { name: 'Irrevocable Life Insurance Trusts', href: '/trusts/irrevocable-life-insurance-trusts' },
      { name: 'Land Trusts', href: '/trusts/land-trusts' },
      { name: 'Medicaid Asset Protection Trusts', href: '/trusts/medicaid-asset-protection-trusts' },
      { name: 'QTIP Trusts', href: '/trusts/qtip-trusts' },
      { name: 'Revocable Living Trusts', href: '/trusts/revocable-living-trusts' },
      { name: 'Special Needs Trusts', href: '/trusts/special-needs-trusts' },
      { name: 'Spendthrift Trusts', href: '/trusts/spendthrift-trusts' },
      { name: 'All Trust Areas', href: '/trusts/other-types' },
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
          { name: 'Franklin County Municipal Court', href: '/courts/franklin-county-municipal-court' },
        ],
      },
      {
        name: 'Delaware County',
        links: [
          { name: 'Delaware County Municipal Court', href: '/courts/delaware-county-municipal-court' },
        ],
      },
      {
        name: 'Butler County',
        links: [
          { name: 'Hamilton Municipal Court', href: '/courts/hamilton-municipal-court' },
        ],
      },
      {
        name: 'Greene County',
        links: [
          { name: 'Fairborn Municipal Court', href: '/courts/fairborn-municipal-court' },
        ],
      },
      {
        name: 'Montgomery County',
        links: [
          { name: 'Dayton Municipal Court', href: '/courts/dayton-municipal-court' },
        ],
      },
      {
        name: 'Other Counties',
        links: [
          { name: 'Morrow County', href: '/courts/morrow-county' },
          { name: 'Athens County', href: '/courts/athens-county' },
          { name: 'Clinton County', href: '/courts/clinton-county' },
          { name: 'Pickaway County', href: '/courts/pickaway-county' },
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
// HELPER: Chunk array
// ============================================================================

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

// ============================================================================
// CHEVRON ICON
// ============================================================================

const ChevronIcon: React.FC<{ isOpen?: boolean; className?: string }> = ({ 
  isOpen = false, 
  className = '' 
}) => (
  <svg
    className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

// ============================================================================
// MEGA MENU (DESKTOP) - CLEAN DESIGN
// ============================================================================

interface MegaMenuProps {
  item: NavItem;
  isOpen: boolean;
  itemIndex: number;
  totalItems: number;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ item, isOpen, itemIndex, totalItems }) => {
  const hasSubDropdowns = item.subDropdowns && item.subDropdowns.length > 0;
  const hasSubLinks = item.subLinks && item.subLinks.length > 0;
  const isCourts = item.name === 'Courts';
  const columns = hasSubLinks ? chunkArray(item.subLinks!, 8) : [];
  
  // For items on the right side of the navbar (last 3 items), align menu to right edge
  const isRightAligned = itemIndex >= totalItems - 3;

  return (
    <div
      className={`
        absolute top-full pt-3
        ${isRightAligned ? 'right-0' : 'left-1/2 -translate-x-1/2'}
        transition-all duration-200 ease-out z-[60]
        ${isOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}
      `}
    >
      {/* Invisible bridge to prevent mouseleave when moving from link to menu */}
      <div className="absolute inset-x-0 top-0 h-4 bg-transparent" />

      <div 
        className={`
          bg-white rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden
          ${isCourts 
            ? 'w-[850px] max-w-[calc(100vw-2rem)]' 
            : hasSubDropdowns 
              ? 'w-[750px] max-w-[calc(100vw-2rem)]' 
              : 'w-auto min-w-[260px] max-w-[calc(100vw-2rem)]'
          }
        `}
      >
        <div className={`p-6 ${isCourts ? 'max-h-[60vh] overflow-y-auto' : ''}`}>
          
          {/* 1. Flat List Grid (Standard) */}
          {hasSubLinks && !hasSubDropdowns && (
            <div 
              className="grid gap-x-12 gap-y-2"
              style={{ gridTemplateColumns: `repeat(${Math.min(columns.length, 3)}, minmax(220px, 1fr))` }}
            >
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="space-y-2">
                  {column.map((link, linkIndex) => (
                    <Link
                      key={`${link.href}-${link.name}`}
                      href={link.href}
                      className={`
                        block text-[15px] transition-colors duration-150 py-1
                        ${colIndex === 0 && linkIndex === 0 
                          ? 'text-gray-900 font-bold border-b border-gray-100 pb-2 mb-2 hover:text-accent' 
                          : 'text-gray-600 hover:text-accent font-medium'
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* 2. Categorized Grid (For Courts/Services) */}
          {hasSubDropdowns && (
            <div 
              className={`
                grid gap-6 lg:gap-8
                ${isCourts 
                  ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }
              `}
            >
              {item.subDropdowns!.map((group) => (
                <div key={group.name} className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-2">
                    {group.name}
                  </h4>
                  <ul className="space-y-2">
                    {group.links.map((link) => (
                      <li key={`${group.name}-${link.href}-${link.name}`}>
                        <Link
                          href={link.href}
                          className="block text-[14px] leading-snug text-gray-600 hover:text-accent font-medium transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer Accent */}
        <div className="h-1 bg-gradient-to-r from-gray-100 via-accent/20 to-gray-100" />
      </div>
    </div>
  );
};

// ============================================================================
// MOBILE DRAWER - iOS HUMAN INTERFACE STYLE
// ============================================================================

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedSubGroup, setExpandedSubGroup] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleItem = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
    setExpandedSubGroup(null);
  };

  const toggleSubGroup = (name: string) => {
    setExpandedSubGroup(expandedSubGroup === name ? null : name);
  };

  return (
    <>
      <div
        className={`
          fixed inset-0 bg-black/30 backdrop-blur-md z-[90]
          transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={onClose}
      />

      <div
        className={`
          fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white z-[100]
          transform transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
          shadow-2xl flex flex-col
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
           {/* Replace with your generic text or Logo */}
           <span className="font-serif font-bold text-xl text-gray-900 tracking-tight">JWAYYED LAW</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all active:scale-95"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const hasChildren = item.subLinks || item.subDropdowns;
              const isExpanded = expandedItem === item.name;

              return (
                <div key={item.name} className="overflow-hidden rounded-xl transition-all duration-300">
                  {hasChildren ? (
                    <button
                      onClick={() => toggleItem(item.name)}
                      className={`
                        w-full flex items-center justify-between px-4 py-3.5 
                        text-left font-medium transition-all duration-200
                        ${isExpanded ? 'bg-gray-50 text-orange-500' : 'text-gray-900 hover:bg-gray-50'}
                      `}
                    >
                      <span className="text-[17px]">{item.name}</span>
                      <ChevronIcon isOpen={isExpanded} className={isExpanded ? 'text-orange-500' : 'text-gray-400'} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-left font-medium transition-all duration-200 text-gray-900 hover:bg-gray-50"
                    >
                      <span className="text-[17px]">{item.name}</span>
                    </Link>
                  )}

                  {/* Expanded Content */}
                  {hasChildren && (
                    <div
                      className={`
                        overflow-hidden transition-all duration-300 ease-in-out bg-gray-50
                        ${isExpanded ? 'max-h-[2000px] opacity-100 pb-2' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <div className="px-4">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center gap-2 py-3 text-[15px] font-semibold text-orange-500"
                        >
                          View All {item.name}
                        </Link>

                        {/* Standard SubLinks */}
                        {item.subLinks && item.subLinks.slice(1).map((link) => (
                          <Link
                            key={`${link.href}-${link.name}`}
                            href={link.href}
                            onClick={onClose}
                            className="block py-2.5 text-[15px] text-gray-600 border-l-2 border-transparent hover:border-gray-200 pl-4 ml-1"
                          >
                            {link.name}
                          </Link>
                        ))}

                        {/* Nested SubDropdowns (Courts/Services) */}
                        {item.subDropdowns && item.subDropdowns.map((group) => {
                          const isGroupExpanded = expandedSubGroup === `${item.name}-${group.name}`;
                          return (
                            <div key={group.name} className="mt-1">
                              <button
                                onClick={() => toggleSubGroup(`${item.name}-${group.name}`)}
                                className="w-full flex items-center justify-between py-3 text-[15px] font-medium text-gray-800 pl-2"
                              >
                                <span>{group.name}</span>
                                <ChevronIcon isOpen={isGroupExpanded} className="w-3 h-3 text-gray-400" />
                              </button>
                              
                              <div
                                className={`
                                  overflow-hidden transition-all duration-300
                                  ${isGroupExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                                `}
                              >
                                <div className="pl-6 pb-2 space-y-2 border-l border-gray-200 ml-4">
                                  {group.links.map((link) => (
                                    <Link
                                      key={`${group.name}-${link.href}-${link.name}`}
                                      href={link.href}
                                      onClick={onClose}
                                      className="block py-1.5 text-[14px] text-gray-500"
                                    >
                                      {link.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

// ============================================================================
// MAIN NAVBAR
// ============================================================================

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = useCallback((name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(name);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 100);
  }, []);

  return (
    <>
      <nav 
        className={`
          w-full bg-white sticky top-0 z-50 transition-all duration-300
          ${isScrolled ? 'shadow-md py-0' : 'shadow-sm py-0.5'}
        `}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-[65px]">
            
            {/* 1. Logo Section */}
            <div className="flex-shrink-0 relative z-50">
              <Link href="/" className="flex items-center gap-1.5 group">
                <Image
                  src="/assets/Jwayyed_Logo_Inverted.JPEG"
                  alt="Jwayyed Law LLC"
                  width={130}
                  height={32}
                  priority
                  className="h-7 w-auto transition-transform duration-300 group-hover:opacity-90"
                />
              </Link>
            </div>

            {/* 2. Desktop Navigation (Centered & Spaced) */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-2 min-w-0">
              <div className="flex items-center gap-0.5 flex-shrink-0">
                {navItems.map((item, index) => {
                  const hasDropdown = item.subLinks || item.subDropdowns;
                  const isOpen = openDropdown === item.name;

                  return (
                    <div
                      key={item.name}
                      className="nav-dropdown relative flex-shrink-0 z-50"
                      onMouseEnter={() => hasDropdown && handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={item.href}
                        className={`
                          relative flex items-center gap-0.5 px-2 py-2 text-[12.5px] font-medium tracking-normal whitespace-nowrap rounded-md
                          transition-all duration-200
                          ${isOpen 
                            ? 'text-accent bg-gray-50' 
                            : 'text-gray-700 hover:text-accent hover:bg-white'
                          }
                        `}
                      >
                        {item.name}
                        {hasDropdown && <ChevronIcon isOpen={isOpen} className="opacity-50 w-3 h-3 ml-0.5" />}
                        
                        {/* Animated Underline */}
                        <span className={`
                          absolute bottom-0 left-2 right-2 h-[2px] bg-accent transform transition-transform duration-300 ease-out origin-center
                          ${isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                        `} />
                      </Link>

                      {hasDropdown && (
                        <MegaMenu 
                          item={item} 
                          isOpen={isOpen} 
                          itemIndex={index}
                          totalItems={navItems.length}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Right Action Area (Mobile Toggle) */}
            <div className="flex items-center gap-4">
              
              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded-lg focus:outline-none group"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <span className="block w-6 h-0.5 bg-gray-800 transition-transform group-hover:bg-accent"></span>
                <span className="block w-6 h-0.5 bg-gray-800 transition-transform group-hover:bg-accent"></span>
                <span className="block w-6 h-0.5 bg-gray-800 transition-transform group-hover:bg-accent"></span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileDrawer 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;