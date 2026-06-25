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
    <section className="w-full py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#b87333]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#b87333] font-semibold">
              Client Voices
            </span>
            <span className="h-px w-8 bg-[#b87333]" />
          </div>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
            What clients say
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Google Reviews card */}
            <a
              href="https://www.google.com/search?q=Jwayyed+Law+LLC+Columbus+Ohio+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm min-w-[220px] hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" className="flex-shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="flex items-center gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#b87333] text-[#b87333]" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">5.0</span>
                </div>
                <p className="text-xs text-slate-500">94+ Google Reviews</p>
              </div>
            </a>

            {/* BBB Accredited card */}
            <a
              href="https://www.bbb.org/us/oh/columbus/profile/attorneys-lawyers/jwayyed-law-llc-0302-70166716/#sealclick"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm min-w-[220px] hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://seal-centralohio.bbb.org/seals/blue-seal-200-42-bbb-70166716.png" style={{ border: 0 }} alt="BBB Seal" width={52} height={22} className="object-contain flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-slate-900">A+ Accredited</p>
                <p className="text-xs text-slate-500">Better Business Bureau</p>
              </div>
            </a>
          </div>
        </div>

        <OVIReviewsSwiper />
      </div>
    </section>
  );
};

export default OVIReviews;
