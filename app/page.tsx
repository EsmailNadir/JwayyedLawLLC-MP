'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { ChevronLeft, ChevronRight, Star, ArrowDown, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#2c2c2c] text-white font-['Inter',_'Arial',_sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-[#b87333]">Jwayyed Law LLC</h3>
            <p className="text-gray-400 leading-relaxed">
              Dedicated legal representation in criminal defense, traffic violations, and civil matters throughout Ohio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-gray-400 hover:text-[#b87333] transition-colors">About Us</Link></li>
              <li><Link href="/other-services" className="text-gray-400 hover:text-[#b87333] transition-colors">Our Services</Link></li>
              <li><Link href="/our-team" className="text-gray-400 hover:text-[#b87333] transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#b87333] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#b87333] mt-1 flex-shrink-0" />
                <span className="text-gray-400">(614) 285-5482</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#b87333] mt-1 flex-shrink-0" />
                <span className="text-gray-400 break-all">jwayyedlawllc@outlook.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#b87333] mt-1 flex-shrink-0" />
                <span className="text-gray-400">100 E. Campus View Boulevard, Suite #250<br />Columbus, Ohio 43235</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Business Hours</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li>Mon–Fri: 9:00 AM – 5:00 PM</li>
              <li>Sat–Sun: Closed</li>
            </ul>
          </div>

          {/* Follow Us - Social Media */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-3">
              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/jjlawohio?igsh=eW1uanhzNGh2YXV2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#363636] hover:bg-[#b87333] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-[#444] hover:border-[#b87333] group"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>

              {/* TikTok Button */}
              <a
                href="https://www.tiktok.com/@jjlawohio?_t=ZT-8yTuAG1sVr5&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#363636] hover:bg-[#b87333] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-[#444] hover:border-[#b87333] group"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#b87333]/25 mt-10 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Jwayyed Law LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const reviews = [
  {
    name: "Whitney Yoder",
    rating: 5,
    platform: "Google",
    text: "He represented me and got my charges dismissed due to mistreatment of law enforcement."
  },
  {
    name: "Gabriel",
    rating: 5,
    platform: "Google",
    text: "Most attorneys take your money & leave you out to dry, I can assure you this is most certainly not the case with Mr. JJ! I knew I was facing an uphill battle & quite frankly didn't know of a strategy we could possibly put forward. This man completely took me off guard with the angles he attacked from so I know it was unexpected by the prosecution (think Johnnie Cochran). You really can't find better to entrust the fate of your case to. He goes far over & beyond. I was very pleasantly surprised. Trust me, this is the type of priceless legal aid money can't buy. He has a heart & will fight for you like you're his family. He did for me, I'm speaking from experience. You're in the best hands with him."
  },
  {
    name: "Mustang Guru",
    rating: 5,
    platform: "Google",
    text: "If he could cover 50 states he would be the only guy I choose. This attorney got a serious CDL violation down to a moving violation in the matter of one business day. Very straightforward, friendly and tactical with cases. If you're in Ohio it's worth the money, saved me from a suspension."
  },
  {
    name: "Josh Gibson",
    rating: 5,
    platform: "Google",
    text: "JWAYYED, this gentleman here came through like a hurricane. As he tore my traffic case apart and dissected key evidence to dropping and reducing the charges I had. With my lengthy criminal record from past mistakes I had no bargain coming. I was picked up for speeding and because my car had the scent of marijuana, nothing on me or my person. I was asked to do a field sobriety test, due to injuries and pins and screws in my ankle I wasn't able to keep balance so I failed the test and was placed under arrest. With the help of JJ proving how I have changed my life a full 180 and providing evidence and proof that I still am on the right path, JJ got my speed ticket tossed out and the OVI dropped from a M1 to M4. I highly recommend!"
  },
  {
    name: "Lisa",
    rating: 5,
    platform: "Google",
    text: "Professional player who knows the Law! Will use again if I need to but hopefully will not be needed!! Will refer to others who might need a lawyer!!"
  },
  {
    name: "A. R.S.",
    rating: 5,
    platform: "Google",
    text: "I honestly can't say enough good things about this team. From start to finish, they were dedicated, responsive, and genuinely cared about helping me through every step of the process. It's rare to find people in this field who combine expertise with such compassion and integrity, but that's exactly what I found here. They always took the time to explain things clearly, checked in often, and made sure I felt supported and informed the entire way. I never once felt like just another case. They truly earned my trust, and I'm so grateful for their guidance and persistence. If you're looking for a legal team that actually shows up for you and does what they say they'll do, I can't recommend them enough."
  },
  {
    name: "Ace Lomax",
    rating: 5,
    platform: "Google",
    text: "Great guy will fight for your freedom best experience ever thank you again God bless."
  },
  {
    name: "Adnan Bashir",
    rating: 5,
    platform: "Google",
    text: "I had an excellent experience working with Jwayyed Law LLC. From the very first consultation, they were professional, knowledgeable, and genuinely cared about my case. They took the time to explain everything clearly and made me feel confident throughout the entire process. Communication was always prompt, and they handled my situation with expertise and attention to detail. I'm extremely satisfied with the outcome and highly recommend Jwayyed Law LLC to anyone in need of a reliable and dedicated attorney."
  },
  {
    name: "Rushdi Ziad",
    rating: 5,
    platform: "Google",
    text: "Working with Mr. Jwayyed was one of the best decisions I could have made. I was dealing with a ticket that had me really stressed, but he took over and handled everything with skill and professionalism. He was always quick to respond, explained every step clearly, and made sure I understood my options. What really stood out was how genuinely committed he was to getting the best outcome—and he delivered. The ticket was taken care of, and I couldn't be more relieved. If you need someone who knows the law, communicates well, and truly cares about your case, I highly recommend Jwayyed. He made a difficult situation so much easier to get through."
  },
  {
    name: "Mike Clement",
    rating: 5,
    platform: "Google",
    text: "I recently received a traffic ticket in Akron, and Jwayyed was instrumental in helping me avoid additional points on my license. From the start, he was very professional, responsive, and clearly knowledgeable about local traffic laws. He worked quickly to negotiate a reduced charge, and reduced points, which ultimately saved me from increased insurance rates and license penalties. His communication throughout the process kept me informed and confident in the outcome. I highly recommend his services to anyone facing traffic violations in the area."
  },
  {
    name: "Imdad Imdadova",
    rating: 5,
    platform: "Google",
    text: "Excellent legal representation! Attorney Jwayyed and his team were professional, knowledgeable, and dedicated to achieving the best outcome for my case. Highly recommend their services."
  },
  {
    name: "Heba El-Hosseiny",
    rating: 5,
    platform: "Google",
    text: "My experience with Jwayyed was incredible. He was attentive in the discovery phase of my case and made sure to keep me in the loop on all actions that were taken on my behalf."
  },
  {
    name: "Tammy Watts",
    rating: 5,
    platform: "Google",
    text: "He was very thorough, diligent, and responsive. He listened, outlined step-by-step how we would proceed, and always kept me informed of updates in a timely and professional manner."
  },
  {
    name: "Yazen Karajat",
    rating: 5,
    platform: "Google",
    text: "Jwayyed Jwayyed is a rare kind of attorney—fierce in advocacy, compassionate with clients, and deeply committed to justice."
  },
  {
    name: "Nott Billyy",
    rating: 5,
    platform: "Google",
    text: "Jwayyed is the real deal. Super easy to work with, chill but professional, and actually gets results."
  },
  {
    name: "Yasmine A",
    rating: 5,
    platform: "Google",
    text: "He was really helpful and easy to talk to. He made a stressful situation a lot less scary and took care of everything I needed."
  },
  {
    name: "Basil Jaradah",
    rating: 5,
    platform: "Google",
    text: "He finished the project in timely manner, and remained professional all the time, was thorough and picked up on the little details."
  },
  {
    name: "Abe Rashed",
    rating: 5,
    platform: "Google",
    text: "He got me a better result than the first attorney I had spoken to had promised. I'm happy to say he will be my attorney going forward."
  },
  {
    name: "Ahmed Kahook",
    rating: 5,
    platform: "LinkedIn",
    text: "He went above and beyond to get us a quick resolution. He always had my family's best interests in mind and replied to emails more promptly than most people answer text messages."
  },
  {
    name: "Abraham Rashed",
    rating: 5,
    platform: "LinkedIn",
    text: "He was able to quickly identify the problems with my situation and got me a better result than the first attorney had promised."
  },
  {
    name: "Leonard Milner",
    rating: 5,
    platform: "LinkedIn",
    text: "Jwayyed was proactive, diligent, knowledgeable, courageous, steadfast and unmovable in getting justice. I would definitely recommend him for any litigation concerns."
  },
  {
    name: "Samantha Pugh",
    rating: 5,
    platform: "LinkedIn",
    text: "Jwayyed is consistently professional, knowledgeable, reasonable, and so easy to work with. He is always prepared and organized."
  },
  {
    name: "Faiz Joseph",
    rating: 5,
    platform: "LinkedIn",
    text: "If genuine care was a person it would be Jwayyed. There's no one that I know that cares more for their craft than him."
  }
];

export default function Home() {
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
    <div className="min-h-screen font-['Georgia',_'Times_New_Roman',_serif]">
      
      
      {/* Hero Section with Video Background */}
      <section className="relative h-[calc(100vh-65px)] overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          {/* Desktop Video - Hidden on mobile */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover hidden sm:block"
            style={{
              objectPosition: 'center center',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto'
            }}
          >
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          
          {/* Mobile Video - Only visible on mobile */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover block sm:hidden"
            style={{
              objectPosition: 'center center',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto'
            }}
          >
            <source src="/videos/mobile-web-banner.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-white text-center">
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12 animate-fade-in">
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
              Protecting Your Rights in Ohio
            </h1>
            <p className="font-['Inter',_'Arial',_sans-serif] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              Experienced Legal Counsel in Criminal, Traffic, and Civil Law
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-md mx-auto mb-6 sm:mb-8">
              <SearchBar className="[&_input]:bg-white/10 [&_input]:backdrop-blur-md [&_input]:border-white/30 [&_input]:text-white [&_input]:placeholder-white/60 [&_input]:focus:bg-white/20 [&_input]:focus:border-white/50 [&_svg]:text-white/60" />
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16">
            <Link href="/contact">
              <button className="font-['Inter',_'Arial',_sans-serif] bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 font-semibold text-base sm:text-lg shadow-2xl w-full sm:w-auto">
                Schedule Consultation
              </button>
            </Link>
            <Link href="/other-services">
              <button className="font-['Inter',_'Arial',_sans-serif] bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 font-semibold text-base sm:text-lg shadow-2xl w-full sm:w-auto">
                View Our Services
              </button>
            </Link>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span className="font-['Inter',_'Arial',_sans-serif] text-xs sm:text-sm font-medium text-white/80">Explore More</span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Dedicated Legal Excellence
              </h2>
              <p className="font-['Inter',_'Arial',_sans-serif] text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                With years of experience in Ohio courts, Attorney Jwayyed provides dedicated legal representation across criminal defense, traffic violations, and civil matters. Every case receives personal attention and strategic advocacy.
              </p>
              <p className="font-['Inter',_'Arial',_sans-serif] text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Our firm is built on the foundation of protecting your rights, providing clear communication, and achieving the best possible outcomes for our clients.
              </p>
              <Link href="/about">
                <button className="font-['Inter',_'Arial',_sans-serif] bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 font-medium text-base sm:text-lg shadow-lg">
                  Learn More About Our Firm
                </button>
              </Link>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="bg-orange-500 rounded-lg p-6 sm:p-8 text-white">
                <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-xl sm:text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 font-['Inter',_'Arial',_sans-serif]">
                  <li className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">✓</span>
                    <span className="text-sm sm:text-base">Proven track record of successful case outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">✓</span>
                    <span className="text-sm sm:text-base">Personal attention to every client</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">✓</span>
                    <span className="text-sm sm:text-base">Clear communication throughout your case</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">✓</span>
                    <span className="text-sm sm:text-base">Aggressive advocacy for your rights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="w-full py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Client Testimonials
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-lg sm:text-xl text-gray-700">
              Real experiences from clients we've helped
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 lg:gap-8">
              {/* Desktop Navigation Button - Left */}
              <button
                onClick={prevReview}
                className="hidden md:flex w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-110 border border-gray-200"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              
              {/* Review Content */}
              <div className="flex-1 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <span className="font-['Inter',_'Arial',_sans-serif] text-xs sm:text-sm font-medium text-gray-600 bg-gray-100 px-2 sm:px-3 py-1 rounded-full w-fit">
                      {reviews[currentReview].platform}
                    </span>
                  </div>
                  
                  <blockquote className="font-['Georgia',_'Times_New_Roman',_serif] text-lg sm:text-xl text-gray-700 leading-relaxed min-h-[100px] sm:min-h-[120px] flex items-center italic">
                    "{reviews[currentReview].text}"
                  </blockquote>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-t border-gray-200 pt-4 sm:pt-6">
                    <cite className="font-['Inter',_'Arial',_sans-serif] text-base sm:text-lg font-semibold text-gray-900 not-italic">
                      — {reviews[currentReview].name}
                    </cite>
                    
                    <div className="font-['Inter',_'Arial',_sans-serif] text-xs sm:text-sm text-gray-500">
                      {currentReview + 1} of {reviews.length}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desktop Navigation Button - Right */}
              <button
                onClick={nextReview}
                className="hidden md:flex w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-110 border border-gray-200"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextReview}
              className="w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center text-gray-600 hover:text-gray-900"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
