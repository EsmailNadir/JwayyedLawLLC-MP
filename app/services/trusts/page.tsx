'use client';

import Image from 'next/image';
import React from 'react';

const EstatePlanning = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/trusts.jpg" 
            alt="Estate Planning"
            width={600}
            height={400}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
          Trusts
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
          Sometimes, another good way to avoid probate that makes more sense for some clients is to have an attorney draft a legally binding contract that ensures your assets are distributed a certain way during and after your life. This is called a trust! You can decide to be the initial trustee to maintain control of your assets and then when you pass away the trust can distribute your assets the way you want instead of having to deal with probate.

Miscellaneous - Transfer On Death (TOD), Payable on Death, Joint Ownership with Survivorship rights. Some assets transfer without a will or trust. Contact us to learn more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EstatePlanning;
