'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Star } from 'lucide-react';

const OVIReviewsSwiper = dynamic(() => import('@/components/OVIReviewsSwiper'), {
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center text-gray-500">Loading...</div>,
});

const OVIReviews: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4">
            Client Testimonials
          </h2>
          <p className="font-['Inter',_'Arial',_sans-serif] text-lg sm:text-xl text-gray-400 mb-4">
            Real experiences from clients we&apos;ve helped
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#b87333] text-[#b87333]" />
              ))}
            </div>
            <span className="font-['Inter',_'Arial',_sans-serif] text-sm font-semibold text-[#b87333]">
              60+ five-star reviews on Google
            </span>
          </div>
        </div>

        <OVIReviewsSwiper />
      </div>
    </section>
  );
};

export default OVIReviews;
