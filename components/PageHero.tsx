'use client';

import Image from 'next/image';
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
    <section className={`relative overflow-hidden text-white py-12 sm:py-16 ${className}`}>
      <Image
        src="/assets/hero-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/85 via-[#2d3436]/80 to-[#b87333]/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="inline-flex items-center gap-2 bg-[#b87333] hover:bg-[#a0622b] text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-lg hover:shadow-xl font-['Inter',_'Arial',_sans-serif]"
              >
                <Phone className="w-5 h-5" />
                {phoneNumber}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-white/80 text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-colors font-['Inter',_'Arial',_sans-serif]"
              >
                Schedule Consultation
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

