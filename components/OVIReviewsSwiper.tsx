'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const oviReviews = [
  { name: "Josh Gibson", rating: 5, platform: "Google", text: "JWAYYED, this gentleman here came through like a hurricane. As he tore my traffic case apart and dissected key evidence to dropping and reducing the charges I had. With my lengthy criminal record from past mistakes I had no bargain coming. I was picked up for speeding and because my car had the scent of marijuana, nothing on me or my person. I was asked to do a field sobriety test, due to injuries and pins and screws in my ankle I wasn't able to keep balance so I failed the test and was placed under arrest. With the help of JJ proving how I have changed my life a full 180 and providing evidence and proof that I still am on the right path, JJ got my speed ticket tossed out and the OVI dropped from a M1 to M4. I highly recommend!" },
  { name: "Jay Mayberry", rating: 5, platform: "Google", text: "Highly recommend Jwayyed got my second OVI dropped down to a reckless op. Very knowledgeable and professional." },
  { name: "Joseph Benesh", rating: 5, platform: "Google", text: "Amazing job!! Would refer to anyone needing the help. I got an OVI and was looking at jail time a big fine and was about to lose my license. He got it dropped to a reckless operation, the fine reduced to 1/3 of what it was going to be, no jail time and got my license back. Best lawyer in the land!!" },
  { name: "Mazi B", rating: 5, platform: "Google", text: "I had a case for an OVI, and Jwayyed was my attorney. I was super nervous at first but he guided me through it all, helped me understand all our options. A couple weeks later he let me know that he would be trying to drop my charges." },
  { name: "Mustang Guru", rating: 5, platform: "Google", text: "If he could cover 50 states he would be the only guy I choose. This attorney got a serious CDL violation down to a moving violation in the matter of one business day. Very straightforward, friendly and tactical with cases. If you're in Ohio it's worth the money, saved me from a suspension." },
  { name: "Manmohan Judge", rating: 5, platform: "Google", text: "I am a CDL holder. I got cited for an accident when the other vehicle hit mine. My employer did not believe it and put me on leave, turning my world upside down. I was lucky to find JJ. He fought for me. Answered the phone and texts at all hours." },
  { name: "Mike Clement", rating: 5, platform: "Google", text: "I recently received a traffic ticket in Akron, and Jwayyed was instrumental in helping me avoid additional points on my license. From the start, he was very professional, responsive, and clearly knowledgeable about local traffic laws. He worked quickly to negotiate a reduced charge, and reduced points, which ultimately saved me from increased insurance rates and license penalties. His communication throughout the process kept me informed and confident in the outcome. I highly recommend his services to anyone facing traffic violations in the area." },
  { name: "Rushdi Ziad", rating: 5, platform: "Google", text: "Working with Mr. Jwayyed was one of the best decisions I could have made. I was dealing with a ticket that had me really stressed, but he took over and handled everything with skill and professionalism. He was always quick to respond, explained every step clearly, and made sure I understood my options. What really stood out was how genuinely committed he was to getting the best outcome—and he delivered. The ticket was taken care of, and I couldn't be more relieved. If you need someone who knows the law, communicates well, and truly cares about your case, I highly recommend Jwayyed." },
  { name: "Nott Billyy", rating: 5, platform: "Google", text: "Jwayyed is the real deal. Had a traffic ticket in CLE and didn't expect much, but a friend told me Jwayyed. Super easy to work with, chill but professional, and actually gets results." },
  { name: "Yasmine A", rating: 5, platform: "Google", text: "I was visiting from Virginia and had a traffic altercation while in the Cleveland area. A friend suggested I reach out to Jwayyed. He was really helpful and easy to talk to. He made a stressful situation a lot less scary and took care of everything I needed." },
  { name: "Gabriel", rating: 5, platform: "Google", text: "Most attorneys take your money & leave you out to dry, I can assure you this is most certainly not the case with Mr. JJ! I knew I was facing an uphill battle & quite frankly didn't know of a strategy we could possibly put forward. This man completely took me off guard with the angles he attacked from so I know it was unexpected by the prosecution (think Johnnie Cochran). You really can't find better to entrust the fate of your case to. He goes far over & beyond. Trust me, this is the type of priceless legal aid money can't buy. He has a heart & will fight for you like you're his family. You're in the best hands with him." },
  { name: "Whitney Yoder", rating: 5, platform: "Google", text: "He represented me and got my charges dismissed due to mistreatment of law enforcement." },
  { name: "Ace Lomax", rating: 5, platform: "Google", text: "Great guy will fight for your freedom best experience ever thank you again God bless." },
];

export default function OVIReviewsSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      loop={true}
      className="testimonials-swiper pb-12"
    >
      {oviReviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full flex flex-col">
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#b87333] text-[#b87333]" />
              ))}
            </div>
            <span className="font-['Inter',_'Arial',_sans-serif] text-xs font-medium text-[#b87333] bg-[#b87333]/10 px-2.5 py-1 rounded-full w-fit mb-4">
              {review.platform}
            </span>
            <blockquote className="font-['Georgia',_'Times_New_Roman',_serif] text-sm sm:text-base text-gray-300 leading-relaxed flex-1 italic mb-4">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <cite className="font-['Inter',_'Arial',_sans-serif] text-sm font-semibold text-white not-italic border-t border-white/10 pt-4">
              — {review.name}
            </cite>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
