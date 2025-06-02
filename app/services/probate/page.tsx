'use client';

import Image from 'next/image';
import React from 'react';

const NavProbate = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/nav-probate.jpg" 
            alt="Navigating probate"
            width={600}
            height={400}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
          Navigating Probate
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
          Sometimes our loved ones pass away without a will or a trust. There are very few things in life that hurt more than losing love ones. Having a reliable, family and client-oriented attorney help you navigate the probate proceedings is important so that you can focus on what is important to you while leaving the legal portion to us!
          </p>
        </div>
      </div>
    </section>
  );
};

export default NavProbate;
