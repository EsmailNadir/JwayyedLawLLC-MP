"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Phone, Calendar, Users, Linkedin, BookOpen, Scale, Globe } from 'lucide-react';

export default function TeamPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Clean Black Background */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
          <Link 
            href="/about" 
            className="inline-flex items-center text-[#D4A574] hover:text-[#C9995E] transition-colors font-medium text-base mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to About
          </Link>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-['Playfair_Display',_'Georgia',_serif] leading-tight">
              Meet Our Legal Assistant
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 font-['Inter',_'Arial',_sans-serif] leading-relaxed">
              Dedicated to providing exceptional support and ensuring smooth legal processes for all our clients.
            </p>
          </div>
        </div>
        
        {/* Curved bottom transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-12 sm:h-16 lg:h-20" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 C150,120 300,120 600,60 C900,0 1050,0 1200,60 L1200,120 L0,120 Z" 
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Raneem Ali Profile */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full max-w-[450px] lg:w-[450px]">
              <div className="relative w-full aspect-[4/5] mx-auto">
                <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/assets/raneem-backround.png"
                    alt="Raneem Ali - Legal Assistant"
                    fill
                    className="object-cover object-center"
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 450px"
                    loading="eager"
                    priority
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-[#D4A574]/20 rounded-2xl -z-10"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-['Playfair_Display',_'Georgia',_serif]">
                  Raneem Ali
                </h2>
                <p className="text-2xl text-[#D4A574] font-semibold mb-6 font-['Inter',_'Arial',_sans-serif]">
                  Legal Assistant and Case Manager
                </p>
                
                {/* Quick Info Pills */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                  <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    <BookOpen className="w-4 h-4 mr-2" />
                    OSU Criminal Justice
                  </span>
                  <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    <Globe className="w-4 h-4 mr-2" />
                    Bilingual: English & Arabic
                  </span>
                  <span className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    <Scale className="w-4 h-4 mr-2" />
                    Immigration & Discrimination Law
                  </span>
                </div>
              </div>

              {/* Bio Content */}
              <div className="space-y-5 text-gray-700 leading-relaxed text-lg font-['Inter',_'Arial',_sans-serif]">
                <p>
                  Raneem Ali joined Jwayyed Law LLC in 2024, bringing exceptional organizational skills 
                  and a genuine commitment to client service. She plays a key role in ensuring smooth 
                  day-to-day operations, managing client intake, scheduling, and case documentation with 
                  precision. As the first point of contact for many clients, Raneem's warm and professional 
                  demeanor helps create a welcoming environment from the start.
                </p>

                <p>
                  Raneem graduated from The Ohio State University with a bachelor's degree in criminal 
                  justice and a minor in biological bases of behavior. She is bilingual in English and 
                  Arabic, enabling her to communicate effectively with a diverse range of clients. Her 
                  previous experience in immigration and discrimination law has deepened her passion for 
                  legal advocacy and strengthened her ability to support clients with empathy and cultural 
                  awareness.
                </p>

                <div className={`overflow-hidden transition-all duration-500 ${showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="pt-2">
                    She is currently preparing to attend law school and is focused on expanding her legal 
                    knowledge through hands-on experience. Her attention to detail, strong communication 
                    skills, and client-centered approach make her a reliable and dedicated member of the 
                    Jwayyed Law team.
                  </p>
                </div>

                <button
                  onClick={() => setShowMore(!showMore)}
                  className="inline-flex items-center text-[#D4A574] hover:text-[#C9995E] font-semibold transition-all duration-200 group/btn mt-3"
                >
                  <span className="text-base">{showMore ? 'Show Less' : 'Show More'}</span>
                  <svg 
                    className={`w-5 h-5 ml-2 transform transition-transform ${showMore ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="mt-32">
          <div className="relative bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-['Playfair_Display',_'Georgia',_serif]">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-['Inter',_'Arial',_sans-serif]">
                Experience the difference of working with a dedicated legal professional who truly cares about your case. 
                Raneem and the entire Jwayyed Law team are here to guide you through every step of the legal process 
                with expertise, empathy, and unwavering commitment to your success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <button className="bg-[#D4A574] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-[#C9995E] hover:shadow-3xl transform hover:scale-105 transition-all duration-200 inline-flex items-center group">
                    Schedule Your Consultation
                    <ArrowLeft className="w-5 h-5 ml-3 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                
                <div className="flex items-center gap-6 text-white">
                  <a href="tel:+1234567890" className="inline-flex items-center hover:text-[#D4A574] transition-colors">
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="font-medium">Call Now</span>
                  </a>
                  <a href="mailto:info@jwayyedlaw.com" className="inline-flex items-center hover:text-[#D4A574] transition-colors">
                    <Mail className="w-5 h-5 mr-2" />
                    <span className="font-medium">Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
