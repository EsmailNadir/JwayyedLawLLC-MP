'use client';

import Image from 'next/image';
import React from 'react';

const Adr = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10"> {/* Reduced height */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/law.jpg" 
            alt="Alternative Dispute Resolution"
            width={600}
            height={400}
            className="w-full h-auto object-contain rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
            Alternative Dispute Resolution
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Although sometimes necessary, litigation can be time consuming and expensive. Utilizing Alternative Dispute Resolution methods such as mediation, arbitration and negotiation can sometimes be the most efficient and most effective ways to achieve a client’s goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Adr;
