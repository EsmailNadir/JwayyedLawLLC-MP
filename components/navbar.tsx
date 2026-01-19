'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SubLink {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  subLinks?: SubLink[];
}

const navItems: NavItem[] = [
  {
    name: 'Criminal',
    href: '/criminal',
    subLinks: [
      // TODO: Replace with actual criminal defense services
      { name: 'Criminal Defense Overview', href: '/criminal' },
      { name: 'Assault Charges', href: '/criminal/assault' },
      { name: 'Drug Crimes', href: '/criminal/drug-crimes' },
      { name: 'Domestic Violence', href: '/criminal/domestic-violence' },
      { name: 'Theft Charges', href: '/criminal/theft' },
      { name: 'Felony Charges', href: '/criminal/felony' },
      { name: 'Misdemeanor Charges', href: '/criminal/misdemeanor' },
      { name: 'Weapons Charges', href: '/criminal/weapons' },
      // Add more as needed
    ],
  },
  {
    name: 'OVI/DUI',
    href: '/ovi-dui',
    subLinks: [
      // TODO: Replace with actual OVI/DUI services
      { name: 'OVI/DUI Defense Overview', href: '/ovi-dui' },
      { name: 'First Offense OVI', href: '/ovi-dui/first-offense' },
      { name: 'Felony OVI', href: '/ovi-dui/felony-ovi' },
      { name: 'Repeat OVI Offenses', href: '/ovi-dui/repeat-offense' },
      { name: 'CDL/Commercial DUI', href: '/ovi-dui/commercial' },
      { name: 'Underage DUI', href: '/ovi-dui/underage' },
      { name: 'License Suspension', href: '/ovi-dui/license-suspension' },
      { name: 'Refusal Cases', href: '/ovi-dui/refusal' },
      // Add more as needed
    ],
  },
  {
    name: 'Personal Injury',
    href: '/personal-injury',
    subLinks: [
      // TODO: Replace with actual personal injury services
      { name: 'Personal Injury Overview', href: '/personal-injury' },
      { name: 'Car Accidents', href: '/personal-injury/car-accidents' },
      { name: 'Truck Accidents', href: '/personal-injury/truck-accidents' },
      { name: 'Motorcycle Accidents', href: '/personal-injury/motorcycle-accidents' },
      { name: 'Slip & Fall', href: '/personal-injury/slip-and-fall' },
      { name: 'Wrongful Death', href: '/personal-injury/wrongful-death' },
      // Add more as needed
    ],
  },
  {
    name: 'Civil',
    href: '/civil',
    subLinks: [
      // TODO: Replace with actual civil law services
      { name: 'Civil Litigation Overview', href: '/civil' },
      { name: 'Contract Disputes', href: '/civil/contract-disputes' },
      { name: 'Business Disputes', href: '/civil/business-disputes' },
      { name: 'Property Disputes', href: '/civil/property-disputes' },
      { name: 'Employment Disputes', href: '/civil/employment-disputes' },
      // Add more as needed
    ],
  },
  {
    name: 'Other Services',
    href: '/services',
    subLinks: [
      // TODO: Replace with other services not covered above
      { name: 'All Other Services', href: '/services' },
      { name: 'Traffic Violations', href: '/services/traffic-violations' },
      { name: 'Expungements', href: '/services/expungements' },
      // Add more as needed
    ],
  },
  {
    name: 'Our Lawfirm',
    href: '/about',
  },
  {
    name: 'Courts',
    href: '/courts',
    subLinks: [
      // TODO: Replace with actual courts
      { name: 'Courts We Serve', href: '/courts' },
      { name: 'Franklin County Municipal Court', href: '/courts/franklin-county-municipal' },
      { name: 'Franklin County Common Pleas', href: '/courts/franklin-county-common-pleas' },
      { name: 'Delaware County Courts', href: '/courts/delaware-county' },
      { name: 'Fairfield County Courts', href: '/courts/fairfield-county' },
      { name: 'Licking County Courts', href: '/courts/licking-county' },
      // Add more as needed
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-dropdown')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/assets/Jwayyed_Logo_Inverted.JPEG"
              alt="Jwayyed Law LLC Logo"
              width={180}
              height={45}
              priority
              className="h-11 w-auto hover:opacity-90 transition-opacity duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="nav-dropdown relative"
                onMouseEnter={() => item.subLinks && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`
                    flex items-center px-3 py-2 text-sm font-medium text-gray-700 
                    hover:text-teal-700 transition-colors duration-200 rounded-md
                    ${openDropdown === item.name ? 'text-teal-700 bg-gray-50' : ''}
                  `}
                >
                  {item.name}
                  {item.subLinks && (
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.subLinks && openDropdown === item.name && (
                  <div 
                    className="absolute left-0 mt-0 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.subLinks.map((subLink, index) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className={`
                          block px-4 py-2.5 text-sm text-gray-600 hover:bg-teal-50 
                          hover:text-teal-700 transition-colors duration-150
                          ${index === 0 ? 'font-medium text-gray-800 border-b border-gray-100 mb-1 pb-3' : ''}
                        `}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                {item.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="w-full flex items-center justify-between py-3 text-base font-medium text-gray-700 hover:text-teal-700 transition-colors"
                    >
                      {item.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mobileOpenDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileOpenDropdown === item.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 pb-3 space-y-1 bg-gray-50 rounded-md mb-2">
                        {item.subLinks.map((subLink, index) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className={`
                              block py-2 px-3 text-sm text-gray-600 hover:text-teal-700 
                              hover:bg-teal-50 rounded transition-colors
                              ${index === 0 ? 'font-medium text-gray-800' : ''}
                            `}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-base font-medium text-gray-700 hover:text-teal-700 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;