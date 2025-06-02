'use client';

import Image from 'next/image';
import React from 'react';

const BusinessLaw = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/businessLaw.png" 
            alt="Business Law"
            width={600}
            height={400}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
            Business Law
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
          No matter the size of the business, every business needs to have solid legal representation. The first step is to determine what type of business to form and filing the proper paperwork with the State of Ohio. From forming your business properly, drafting legally binding business contracts that protect your businesses interests, to dissolving the business when necessary, Jwayyed Law LLC handles all your business’ needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessLaw;
