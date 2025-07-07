'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: "Heba El-Hosseiny",
    rating: 5,
    platform: "Google",
    text: "My experience with Jwayyed was incredible. He was attentive in the discovery phase of my case and made sure to keep me in the loop on all actions that were taken on my behalf.",
    timeAgo: "New"
  },
  {
    name: "Tammy Watts",
    rating: 5,
    platform: "Google",
    text: "He was very thorough, diligent, and responsive. He listened, outlined step-by-step how we would proceed, and always kept me informed of updates in a timely and professional manner.",
    timeAgo: "1 month ago"
  },
  {
    name: "Yazen Karajat",
    rating: 5,
    platform: "Google",
    text: "Jwayyed Jwayyed is a rare kind of attorney—fierce in advocacy, compassionate with clients, and deeply committed to justice.",
    timeAgo: "4 weeks ago"
  },
  {
    name: "Nott Billyy",
    rating: 5,
    platform: "Google",
    text: "Jwayyed is the real deal. Super easy to work with, chill but professional, and actually gets results.",
    timeAgo: "4 weeks ago"
  },
  {
    name: "Yasmine A",
    rating: 5,
    platform: "Google",
    text: "He was really helpful and easy to talk to. He made a stressful situation a lot less scary and took care of everything I needed.",
    timeAgo: "4 weeks ago"
  },
  {
    name: "Basil Jaradah",
    rating: 5,
    platform: "Google",
    text: "He finished the project in timely manner, and remained professional all the time, was thorough and picked up on the little details.",
    timeAgo: "1 month ago"
  },
  {
    name: "Abe Rashed",
    rating: 5,
    platform: "Google",
    text: "He got me a better result than the first attorney I had spoken to had promised. I'm happy to say he will be my attorney going forward.",
    timeAgo: "1 year ago"
  },
  {
    name: "Ahmed Kahook",
    rating: 5,
    platform: "LinkedIn",
    text: "He went above and beyond to get us a quick resolution. He always had my family's best interests in mind and replied to emails more promptly than most people answer text messages.",
    timeAgo: "August 2023"
  },
  {
    name: "Abraham Rashed",
    rating: 5,
    platform: "LinkedIn",
    text: "He was able to quickly identify the problems with my situation and got me a better result than the first attorney had promised.",
    timeAgo: "August 2023"
  },
  {
    name: "Leonard Milner",
    rating: 5,
    platform: "LinkedIn",
    text: "Jwayyed was proactive, diligent, knowledgeable, courageous, steadfast and unmovable in getting justice. I would definitely recommend him for any litigation concerns.",
    timeAgo: "February 2023"
  },
  {
    name: "Samantha Pugh",
    rating: 5,
    platform: "LinkedIn",
    text: "Jwayyed is consistently professional, knowledgeable, reasonable, and so easy to work with. He is always prepared and organized.",
    timeAgo: "January 2023"
  },
  {
    name: "Faiz Joseph",
    rating: 5,
    platform: "LinkedIn",
    text: "If genuine care was a person it would be Jwayyed. There's no one that I know that cares more for their craft than him.",
    timeAgo: "November 2021"
  }
];

const EnhancedHomepage = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-xl text-center md:text-left mb-8 md:mb-0">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Protecting Your <br /> Rights in Ohio
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              Experienced Legal Counsel in Criminal, <br />
              Traffic, and Civil Law.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="/contact">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all duration-200 font-medium">
                  Schedule Appointment
                </button>
              </Link>
              <Link href="/about">
                <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-300 transition-all duration-200 font-medium">
                  Meet Attorney Jwayyed
                </button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end h-full">
            <div className="w-full max-w-[460px]">
              <Image
                src="/assets/jwayyeds-homepage.webp"
                alt="Attorney Jwayyed"
                width={920}
                height={640}
                className="rounded-lg shadow-lg object-cover w-full max-h-[540px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>



      {/* Client Reviews Section */}
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-gray-700">
              Real experiences from real clients
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded">
                      {reviews[currentReview].platform}
                    </span>
                    <span className="text-sm text-gray-500">
                      {reviews[currentReview].timeAgo}
                    </span>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed min-h-[100px] flex items-center">
                  "{reviews[currentReview].text}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-200 pt-6">
                  <cite className="text-lg font-semibold text-gray-900 not-italic">
                    — {reviews[currentReview].name}
                  </cite>
                  
                  <div className="text-sm text-gray-500">
                    {currentReview + 1} of {reviews.length}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons - Hidden on small screens */}
            <button
              onClick={prevReview}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow items-center justify-center text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextReview}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow items-center justify-center text-gray-600 hover:text-gray-900"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevReview}
              className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextReview}
              className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center text-gray-600 hover:text-gray-900"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentReview ? 'bg-gray-900' : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Don't wait. Every case is time-sensitive. Contact us today for experienced legal representation you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-all duration-200 font-medium">
                Our Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-gray-900 text-gray-900 px-8 py-3 rounded-md hover:bg-gray-300 transition-all duration-200 font-medium">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHomepage;