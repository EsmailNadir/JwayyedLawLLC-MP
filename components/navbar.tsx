'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'Contact', href: '/contact' },
];

const masconLink = { name: 'MASCON 2025', href: '/mascon' };

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Jwayyed_Logo_Inverted.JPEG"
            alt="Jwayyed Law LLC Logo"
            width={200}
            height={50}
            priority
            className="h-12 w-auto hover:scale-105 transition-transform duration-200"
          />
        </Link>

        <div className="hidden sm:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-normal text-gray-900 hover:text-blue-900
              transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={masconLink.href}
            className="text-lg font-bold text-white bg-gradient-to-r from-[#D4A574] to-[#C9995E] px-4 py-2 rounded-lg hover:from-[#C9995E] hover:to-[#B88A4F] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {masconLink.name}
          </Link>
        </div>

        <button
          className="sm:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden px-6 pb-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-normal text-gray-900 py-2 hover:text-slate-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href={masconLink.href}
              className="text-lg font-bold text-white bg-gradient-to-r from-[#D4A574] to-[#C9995E] px-4 py-2 rounded-lg hover:from-[#C9995E] hover:to-[#B88A4F] transition-all duration-200 shadow-lg text-center"
              onClick={() => setMenuOpen(false)}
            >
              {masconLink.name}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;