"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Phone, Calendar, Users, Linkedin, BookOpen, Scale, Globe } from 'lucide-react';

export default function EnhancedTeamPage() {
  const [showMoreRaneem, setShowMoreRaneem] = useState(false);
  const [showMoreEeman, setShowMoreEeman] = useState(false);
  const [showMoreMadina, setShowMoreMadina] = useState(false);

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
              Meet Our Team
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 font-['Inter',_'Arial',_sans-serif] leading-relaxed">
              Dedicated legal professionals committed to protecting your rights and achieving the best outcomes for our clients.
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
        {/* Team Members Grid */}
        <div className="space-y-32 lg:space-y-40">
          
          {/* Raneem Ali */}
          <div id="raneem" className="w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full max-w-[400px] lg:w-[400px]">
                <div className="relative w-full aspect-[4/5] mx-auto">
                  <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/assets/raneem-backround.png"
                      alt="Raneem Ali - Legal Assistant"
                      fill
                      className="object-cover object-center"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 400px"
                      loading="eager"
                      priority
                    />
                  </div>
                  {/* Decorative frame */}
                  <div className="absolute -inset-3 border-2 border-[#D4A574]/20 rounded-2xl -z-10"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 max-w-2xl text-center lg:text-left">
                <div className="mb-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 font-['Playfair_Display',_'Georgia',_serif]">
                    Raneem Ali
                  </h2>
                  <p className="text-xl text-[#D4A574] font-semibold mb-4 font-['Inter',_'Arial',_sans-serif]">
                    Legal Assistant and Case Manager
                  </p>
                  
                  {/* Quick Info Pills */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                    <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <BookOpen className="w-3 h-3 mr-1.5" />
                      OSU Criminal Justice
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <Globe className="w-3 h-3 mr-1.5" />
                      Bilingual: English & Arabic
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <Scale className="w-3 h-3 mr-1.5" />
                      Immigration & Discrimination Law
                    </span>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="space-y-4 text-gray-700 leading-relaxed text-base font-['Inter',_'Arial',_sans-serif]">
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

                  <div className={`overflow-hidden transition-all duration-500 ${showMoreRaneem ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="pt-2">
                      She is currently preparing to attend law school and is focused on expanding her legal 
                      knowledge through hands-on experience. Her attention to detail, strong communication 
                      skills, and client-centered approach make her a reliable and dedicated member of the 
                      Jwayyed Law team.
                    </p>
                  </div>

                  <button
                    onClick={() => setShowMoreRaneem(!showMoreRaneem)}
                    className="inline-flex items-center text-[#D4A574] hover:text-[#C9995E] font-semibold transition-all duration-200 group/btn mt-2"
                  >
                    <span>{showMoreRaneem ? 'Show Less' : 'Show More'}</span>
                    <svg 
                      className={`w-4 h-4 ml-2 transform transition-transform ${showMoreRaneem ? 'rotate-180' : ''}`} 
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

          {/* Eeman Bashir */}
          <div id="eeman" className="w-full">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-16">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full max-w-[400px] lg:w-[400px]">
                <div className="relative w-full aspect-[4/5] mx-auto">
                  <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/assets/eeman.jpeg"
                      alt="Eeman Bashir - Legal Intern"
                      fill
                      className="object-cover object-center"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 400px"
                      loading="eager"
                      priority
                    />
                  </div>
                  {/* Decorative frame */}
                  <div className="absolute -inset-3 border-2 border-[#D4A574]/20 rounded-2xl -z-10"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 max-w-2xl text-center lg:text-left">
                <div className="mb-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 font-['Playfair_Display',_'Georgia',_serif]">
                    Eeman Bashir
                  </h2>
                  <p className="text-xl text-[#D4A574] font-semibold mb-4 font-['Inter',_'Arial',_sans-serif]">
                    Legal Intern
                  </p>
                  
                  {/* Quick Info Pills */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                    <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <BookOpen className="w-3 h-3 mr-1.5" />
                      OSU Criminology & Women's Studies
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <Users className="w-3 h-3 mr-1.5" />
                      Legal Aid Experience
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <Globe className="w-3 h-3 mr-1.5" />
                      Multilingual Speaker
                    </span>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="space-y-4 text-gray-700 leading-relaxed text-base font-['Inter',_'Arial',_sans-serif]">
                  <p>
                    Eeman Bashir is an undergraduate student at The Ohio State University, pursuing a double major in Criminology & Criminal Justice and Women's, Gender, and Sexuality Studies. Her academic focus reflects a strong commitment to the intersections of law, social justice, and gender equity.
                  </p>

                  <p>
                    Eeman brings valuable hands-on legal experience from her clerkship with Legal Aid, where she supported the Tenant Advocacy Project by assisting with eviction cases and conducting client intake. She has also worked with Asylum Clinics, helping non-English-speaking clients navigate complex immigration processes.
                  </p>

                  <p>
                    As a first-generation college student and multilingual speaker, Eeman offers a distinctive perspective informed by resilience, cultural insight, and a deep sense of purpose. She plans to attend law school and is dedicated to building a career centered on equity, justice, and transformative impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Madina Iskandarova */}
          <div id="madina" className="w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full max-w-[400px] lg:w-[400px]">
                <div className="relative w-full aspect-[4/5] mx-auto">
                  <div className="w-full h-full relative overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/assets/madina.jpeg"
                      alt="Madina Iskandarova - Legal Intern"
                      fill
                      className="object-cover object-center"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 400px"
                      loading="eager"
                      priority
                    />
                  </div>
                  {/* Decorative frame */}
                  <div className="absolute -inset-3 border-2 border-[#D4A574]/20 rounded-2xl -z-10"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 max-w-2xl text-center lg:text-left">
                <div className="mb-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 font-['Playfair_Display',_'Georgia',_serif]">
                    Madina Iskandarova
                  </h2>
                  <p className="text-xl text-[#D4A574] font-semibold mb-4 font-['Inter',_'Arial',_sans-serif]">
                    Legal Intern
                  </p>
                  
                  {/* Quick Info Pills */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                    <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <BookOpen className="w-3 h-3 mr-1.5" />
                      Economics & Political Science
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <Globe className="w-3 h-3 mr-1.5" />
                      Fluent in Turkish
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      <Scale className="w-3 h-3 mr-1.5" />
                      Corporate Law Interest
                    </span>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="space-y-4 text-gray-700 leading-relaxed text-base font-['Inter',_'Arial',_sans-serif]">
                  <p>
                    Madina Iskandarova holds a Bachelor's degree in Economics with a minor in Political Science from The Ohio State University. Her academic foundation combines analytical rigor with a deep understanding of political systems, shaping her interest in corporate law and public policy.
                  </p>

                  <p>
                    Madina brings an international perspective to her legal work, along with fluency in Turkish and a strong appreciation for cross-cultural communication. She approaches each task with discipline, precision, and a keen eye for detail—qualities that serve her well in legal research, document review, and case preparation.
                  </p>

                  <p>
                    Currently preparing for law school, Madina is committed to developing a career at the intersection of business, governance, and law. She is especially passionate about promoting transparency, ethical leadership, and effective policy solutions in both corporate and public sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Team CTA Section */}
        <div className="mt-24">
          <div className="relative bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-12 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-['Playfair_Display',_'Georgia',_serif]">
                Experience Professional Legal Support
              </h3>
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto font-['Inter',_'Arial',_sans-serif]">
                When you work with Jwayyed Law LLC, you're not just getting an experienced attorney - 
                you're getting a dedicated team committed to your success. Our team ensures your experience 
                with our firm is smooth, professional, and results-oriented from start to finish.
              </p>
              <Link href="/contact">
                <button className="bg-[#D4A574] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-[#C9995E] hover:shadow-3xl transform hover:scale-105 transition-all duration-200 inline-flex items-center group">
                  Schedule Your Consultation
                  <ArrowLeft className="w-5 h-5 ml-3 rotate-180 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}