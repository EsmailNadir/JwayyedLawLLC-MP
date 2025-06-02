'use client';

import Image from 'next/image';
import React from 'react';

const Wills = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/LastWills.jpg" 
            alt="Wills"
            width={600}
            height={400}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
            Wills
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Estate planning includes creating a legally binding will, which lets you decide exactly what happens to your assets when you're gone. Without a will, the State of Ohio decides who inherits your property—often in ways that don’t reflect your true wishes.<br /><br />
            A properly drafted will ensures your loved ones are cared for and helps avoid delays, stress, and confusion during an already difficult time. It also makes probate more efficient and allows you to appoint guardians for minor children or specify charitable donations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Wills;
