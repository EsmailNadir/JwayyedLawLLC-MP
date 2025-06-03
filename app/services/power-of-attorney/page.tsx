'use client';

import Image from 'next/image';
import React from 'react';

const PowerOfAttorney = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/power.jpg" 
            alt="Power Of Attorney"
            width={600}
            height={400}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
          Power of Attorney and Advanced Directives
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
          What happens when legal financial, and medical decisions need to be made but you are not capable of making them for yourself?  Power of Attorney and advanced directive can be put in place to ensure your wishes are followed.

From basic will packages that can be expanded to include durable power of attorney, living wills and other add-ons contact us to set up a free consultation to discuss which package works for you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PowerOfAttorney;
