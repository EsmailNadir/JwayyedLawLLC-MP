'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star, ArrowDown, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-md border-b border-orange-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5 sm:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <span className="text-xl sm:text-2xl lg:text-3xl font-['Playfair_Display',_'Georgia',_serif] font-bold text-white drop-shadow-2xl group-hover:text-orange-400 transition-all duration-500 transform group-hover:scale-110">
                Jwayyed Law LLC
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link href="/" className="relative px-4 py-3 text-white hover:text-orange-400 transition-all duration-300 drop-shadow-lg group font-medium">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-orange-400 transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/about" className="relative px-4 py-3 text-white hover:text-orange-400 transition-all duration-300 drop-shadow-lg group font-medium">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-orange-400 transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/services" className="relative px-4 py-3 text-white hover:text-orange-400 transition-all duration-300 drop-shadow-lg group font-medium">
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-orange-400 transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/our-team" className="relative px-4 py-3 text-white hover:text-orange-400 transition-all duration-300 drop-shadow-lg group font-medium">
              <span className="relative z-10">Our Team</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-orange-400 transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/contact" className="relative px-4 py-3 text-white hover:text-orange-400 transition-all duration-300 drop-shadow-lg group font-medium">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-orange-400 transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <div className="ml-6 lg:ml-8">
              <Link href="/contact">
                <button className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition-all duration-500 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-110 border border-orange-400/50 font-semibold text-lg overflow-hidden group">
                  <span className="relative z-10">Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-all duration-300 p-3 rounded-xl hover:bg-orange-500/20 border border-orange-500/30"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl rounded-2xl p-6 mb-4 border border-orange-500/30 shadow-2xl animate-in slide-in-from-top-2 duration-500">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-orange-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-orange-500/20 transform hover:translate-x-2 font-medium border-l-4 border-transparent hover:border-orange-400">Home</Link>
              <Link href="/about" className="text-white hover:text-orange-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-orange-500/20 transform hover:translate-x-2 font-medium border-l-4 border-transparent hover:border-orange-400">About</Link>
              <Link href="/services" className="text-white hover:text-orange-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-orange-500/20 transform hover:translate-x-2 font-medium border-l-4 border-transparent hover:border-orange-400">Services</Link>
              <Link href="/our-team" className="text-white hover:text-orange-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-orange-500/20 transform hover:translate-x-2 font-medium border-l-4 border-transparent hover:border-orange-400">Our Team</Link>
              <Link href="/contact" className="text-white hover:text-orange-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-orange-500/20 transform hover:translate-x-2 font-medium border-l-4 border-transparent hover:border-orange-400">Contact</Link>
              <div className="pt-4">
                <Link href="/contact">
                  <button className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition-all duration-500 w-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 border border-orange-400/50 font-semibold text-lg overflow-hidden group">
                    <span className="relative z-10">Consultation</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-['Inter',_'Arial',_sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold">Jwayyed Law LLC</h3>
            <p className="text-gray-400">
              Dedicated legal representation in criminal defense, traffic violations, and civil matters throughout Ohio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/our-team" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">(614) 285-5482</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 break-all">jwayyedlawllc@outlook.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">1335 Dublin Rd Suite 211A<br />Columbus, OH 43215</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mon–Fri: 9:00 AM – 5:00 PM</li>
              <li>Sat–Sun: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
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
    name: "Mike Clement",
    rating: 5,
    platform: "Google",
    text: "I recently received a traffic ticket in Akron, and Jwayyed was instrumental in helping me avoid additional points on my license. From the start, he was very professional, responsive, and clearly knowledgeable about local traffic laws. He worked quickly to negotiate a reduced charge, and reduced points, which ultimately saved me from increased insurance rates and license penalties. His communication throughout the process kept me informed and confident in the outcome. I highly recommend his services to anyone facing traffic violations in the area",
    timeAgo: "a day ago",
    isNew: true
  },
  {
    name: "Imdad Imdadova",
    rating: 5,
    platform: "Google",
    text: "Excellent legal representation! Attorney Jwayyed and his team were professional, knowledgeable, and dedicated to achieving the best outcome for my case. Highly recommend their services.",
    timeAgo: "5 days ago",
    isNew: true
  },
  {
    name: "Heba El-Hosseiny",
    rating: 5,
    platform: "Google",
    text: "My experience with Jwayyed was incredible. He was attentive in the discovery phase of my case and made sure to keep me in the loop on all actions that were taken on my behalf.",
    timeAgo: "2 weeks ago"
  },
  {
    name: "Tammy Watts",
    rating: 5,
    platform: "Google",
    text: "He was very thorough, diligent, and responsive. He listened, outlined step-by-step how we would proceed, and always kept me informed of updates in a timely and professional manner.",
    timeAgo: "3 weeks ago"
  },
  {
    name: "Yazen Karajat",
    rating: 5,
    platform: "Google",
    text: "Jwayyed Jwayyed is a rare kind of attorney—fierce in advocacy, compassionate with clients, and deeply committed to justice.",
    timeAgo: "1 month ago"
  },
  {
    name: "Nott Billyy",
    rating: 5,
    platform: "Google",
    text: "Jwayyed is the real deal. Super easy to work with, chill but professional, and actually gets results.",
    timeAgo: "1 month ago"
  },
  {
    name: "Yasmine A",
    rating: 5,
    platform: "Google",
    text: "He was really helpful and easy to talk to. He made a stressful situation a lot less scary and took care of everything I needed.",
    timeAgo: "1 month ago"
  },
  {
    name: "Basil Jaradah",
    rating: 5,
    platform: "Google",
    text: "He finished the project in timely manner, and remained professional all the time, was thorough and picked up on the little details.",
    timeAgo: "2 months ago"
  },
  {
    name: "Abe Rashed",
    rating: 5,
    platform: "Google",
    text: "He got me a better result than the first attorney I had spoken to had promised. I'm happy to say he will be my attorney going forward.",
    timeAgo: "3 months ago"
  },
  {
    name: "Ahmed Kahook",
    rating: 5,
    platform: "LinkedIn",
    text: "He went above and beyond to get us a quick resolution. He always had my family's best interests in mind and replied to emails more promptly than most people answer text messages.",
    timeAgo: "4 months ago"
  },
  {
    name: "Abraham Rashed",
    rating: 5,
    platform: "LinkedIn",
    text: "He was able to quickly identify the problems with my situation and got me a better result than the first attorney had promised.",
    timeAgo: "4 months ago"
  },
  {
    name: "Leonard Milner",
    rating: 5,
    platform: "LinkedIn",
    text: "Jwayyed was proactive, diligent, knowledgeable, courageous, steadfast and unmovable in getting justice. I would definitely recommend him for any litigation concerns.",
    timeAgo: "6 months ago"
  },
  {
    name: "Samantha Pugh",
    rating: 5,
    platform: "LinkedIn",
    text: "Jwayyed is consistently professional, knowledgeable, reasonable, and so easy to work with. He is always prepared and organized.",
    timeAgo: "7 months ago"
  },
  {
    name: "Faiz Joseph",
    rating: 5,
    platform: "LinkedIn",
    text: "If genuine care was a person it would be Jwayyed. There's no one that I know that cares more for their craft than him.",
    timeAgo: "10 months ago"
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
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover"
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
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16">
            <Link href="/contact">
              <button className="font-['Inter',_'Arial',_sans-serif] bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 font-semibold text-base sm:text-lg shadow-2xl w-full sm:w-auto">
                Schedule Consultation
              </button>
            </Link>
            <Link href="/services">
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
                    <div className="flex items-center space-x-3">
                      <span className="font-['Inter',_'Arial',_sans-serif] text-xs sm:text-sm font-medium text-gray-600 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                        {reviews[currentReview].platform}
                      </span>
                      <span className="font-['Inter',_'Arial',_sans-serif] text-xs sm:text-sm text-gray-500">
                        {reviews[currentReview].timeAgo}
                      </span>
                      {reviews[currentReview].isNew && (
                        <span className="font-['Inter',_'Arial',_sans-serif] text-xs sm:text-sm font-medium text-white bg-green-500 px-2 sm:px-3 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
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

/* Add this CSS to your global styles for the fade-in animation and font imports */
/*
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

body {
  font-family: 'Inter', 'Arial', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', 'Georgia', serif;
}
*/