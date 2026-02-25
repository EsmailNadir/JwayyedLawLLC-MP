'use client';

import React from 'react';
import dynamic from 'next/dynamic';

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
          <p className="font-['Inter',_'Arial',_sans-serif] text-lg sm:text-xl text-gray-400">
            Real experiences from clients we&apos;ve helped
          </p>
        </div>

        <OVIReviewsSwiper />

        <style>{`
          .testimonials-swiper .swiper-pagination {
            margin-top: 1.25rem;
            position: relative;
          }
          .testimonials-swiper .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.3);
            opacity: 1;
          }
          .testimonials-swiper .swiper-pagination-bullet-active {
            background: #b87333;
          }
        `}</style>
      </div>
    </section>
  );
};

export default OVIReviews;
