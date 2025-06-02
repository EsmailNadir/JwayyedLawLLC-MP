'use client';

import Image from 'next/image';
import React from 'react';

const EstatePlanning = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/estatePlanning.jpg" 
            alt="Estate Planning"
            width={600}
            height={400}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
            Estate Planning
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            One of the only guarantees in life is that it ends. It is unpredictable when that may happen so no matter how old or young, it is imperative to take care of your family’s future. <br /><br />
            Creating an estate plan ensures you avoid the stress, long drawn-out time and financial costs associated with probate court. When a person dies, the main goal is to transfer the assets directly to the named person (beneficiary) without having to deal with the probate court. This can be accomplished various ways depending on each client’s situation and preferences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EstatePlanning;
