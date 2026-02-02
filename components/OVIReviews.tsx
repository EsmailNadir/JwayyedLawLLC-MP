'use client';

import React, { useState, useEffect, useCallback } from 'react';

const oviReviews = [
  {
    name: "Josh Gibson",
    rating: 5,
    platform: "Google",
    text: "JWAYYED, this gentleman here came through like a hurricane. As he tore my traffic case apart and dissected key evidence to dropping and reducing the charges I had. With my lengthy criminal record from past mistakes I had no bargain coming... With the help of JJ proving how I have changed my life a full 180 and providing evidence and proof that I still am on the right path, JJ got my speed ticket tossed out and the OVI dropped from a M1 to M4. I highly recommend!",
  },
  {
    name: "Mustang Guru",
    rating: 5,
    platform: "Google",
    text: "If he could cover 50 states he would be the only guy I choose. This attorney got a serious CDL violation down to a moving violation in the matter of one business day. Very straightforward, friendly and tactical with cases. If you're in Ohio it's worth the money, saved me from a suspension.",
  },
  {
    name: "Gabriel",
    rating: 5,
    platform: "Google",
    text: "Most attorneys take your money & leave you out to dry, I can assure you this is most certainly not the case with Mr. JJ! I knew I was facing an uphill battle & quite frankly didn't know of a strategy we could possibly put forward. This man completely took me off guard with the angles he attacked from so I know it was unexpected by the prosecution (think Johnnie Cochran). You really can't find better to entrust the fate of your case to. He goes far over & beyond. Trust me, this is the type of priceless legal aid money can't buy. He has a heart & will fight for you like you're his family.",
  },
  {
    name: "Mike Clement",
    rating: 5,
    platform: "Google",
    text: "I recently received a traffic ticket in Akron, and Jwayyed was instrumental in helping me avoid additional points on my license. From the start, he was very professional, responsive, and clearly knowledgeable about local traffic laws. He worked quickly to negotiate a reduced charge, and reduced points, which ultimately saved me from increased insurance rates and license penalties. I highly recommend his services to anyone facing traffic violations in the area.",
  },
  {
    name: "Rushdi Ziad",
    rating: 5,
    platform: "Google",
    text: "Working with Mr. Jwayyed was one of the best decisions I could have made. I was dealing with a ticket that had me really stressed, but he took over and handled everything with skill and professionalism. He was always quick to respond, explained every step clearly, and made sure I understood my options. What really stood out was how genuinely committed he was to getting the best outcome\u2014and he delivered.",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const OVIReviews: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [isTransitioning, current]);

  const next = useCallback(() => {
    goTo((current + 1) % oviReviews.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + oviReviews.length) % oviReviews.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-10 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl sm:text-2xl font-bold text-white">
            Real Results for Real Clients
          </h2>
        </div>

        {/* Fixed-height review container */}
        <div className="relative h-[400px] sm:h-[320px] md:h-[280px]">
          {oviReviews.map((review, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                index === current && !isTransitioning
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full flex flex-col overflow-hidden">
                <div>
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                    <span className="ml-2 text-[11px] font-medium text-gray-400 bg-white/10 px-2 py-0.5 rounded-full">
                      {review.platform}
                    </span>
                  </div>
                  <blockquote className="text-white/85 font-['Inter',_'Arial',_sans-serif] text-sm leading-relaxed line-clamp-[10]">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                </div>
                <p className="text-orange-400 font-semibold font-['Inter',_'Arial',_sans-serif] text-sm mt-3">
                  — {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={prev}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-1.5">
            {oviReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-orange-400 w-5' : 'bg-white/30 hover:bg-white/50 w-2'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OVIReviews;
