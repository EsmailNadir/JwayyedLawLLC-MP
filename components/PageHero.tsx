'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';

interface PageHeroProps {
  title: string;
  description: string;
  phoneNumber?: string;
  showCTA?: boolean;
  className?: string;
}

export default function PageHero({
  title,
  description,
  phoneNumber = '(614) 285-5482',
  showCTA = true,
  className = '',
}: PageHeroProps) {
  return (
    <section className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="font-['Inter',_'Arial',_sans-serif] text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
            {description}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-lg hover:shadow-xl font-['Inter',_'Arial',_sans-serif]"
              >
                <Phone className="w-5 h-5" />
                {phoneNumber}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-gray-900 font-semibold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl font-['Inter',_'Arial',_sans-serif]"
              >
                Free Consultation
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

