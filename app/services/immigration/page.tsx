'use client';

import Image from 'next/image';
import React from 'react';

const Immigration = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/passport.jpg" 
            alt="Immigration law"
            width={600}
            height={400}
            className="w-full h-auto object-contain rounded-md"
          />
        </div> 

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
            Immigration
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Need a green card? Want to work on obtaining US Citizenship? Trying to bring a family member to the US? Need help defending against removal or deportation? Trying to seek asylum?
            Each of these processes are complicated and difficult to navigate on your own. Set up a free consultation to see if we can help you achieve your immigration goals! <br /><br />
            Attorney Jwayyed is bilingual, fluent in both Arabic and English, and provides interpreter services for several other languages as well.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-6">
            <strong>Immigration Services Offered:</strong> Asylum Applications, Citizenship, Employment and Special Visas, Entertainment and Athlete Visas, Investor Visas, Family Visas,
            Fiancée Visas, Green Cards, Removal and Deportation, Waivers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Immigration;
