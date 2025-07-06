"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, Calendar, Users } from 'lucide-react';

export default function LegalAssistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button - No Header Section */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <Link 
          href="/about" 
          className="inline-flex items-center text-[#D4A574] hover:text-[#C9995E] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to About
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto"></div>
        </div>

        {/* Team Members */}
        <div className="space-y-24">
          
          {/* Raneem Ali */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              {/* Image Section */}
              <div className="lg:w-2/5 flex-shrink-0">
                <div className="h-[500px] w-full">
                  <img
                    src="/assets/raneem-backround.png"
                    alt="Raneem Ali - Legal Assistant"
                    className="w-full h-full object-cover object-top rounded-lg shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/assets/attorney-main.jpg";
                    }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 flex flex-col justify-center h-[500px]">
                <div className="text-center lg:text-left">
                  {/* Name and Title */}
                  <div className="mb-5">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                      Raneem Ali
                    </h2>
                    <p className="text-xl text-[#D4A574] font-semibold mb-4">
                      Legal Assistant and Case Manager
                    </p>
                    <div className="w-16 h-1 bg-[#D4A574] mx-auto lg:mx-0 mb-5"></div>
                  </div>

                  {/* Bio Content */}
                  <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                    <p>
                      Raneem Ali joined Jwayyed Law LLC in 2023, bringing exceptional organizational skills 
                      and a genuine commitment to client service. She serves as the backbone of our firm's 
                      operations, ensuring seamless communication and coordination throughout every case.
                    </p>

                    <p>
                      With her meticulous attention to detail and proactive approach, Raneem manages client 
                      intake, scheduling, and case documentation with precision. Her warm, professional demeanor 
                      puts clients at ease from their very first interaction with our firm.
                    </p>

                    <p>
                      Raneem is your first point of contact at Jwayyed Law LLC. She's here to assist with 
                      scheduling consultations and answering your initial questions, ensuring that every client 
                      receives the attention and care they deserve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Eeman Bashir */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              {/* Image Section */}
              <div className="lg:w-2/5 flex-shrink-0">
                <div className="h-[500px] w-full">
                  <img
                    src="/assets/eeman.jpeg"
                    alt="Eeman Bashir - Legal Intern"
                    className="w-full h-full object-cover object-top rounded-lg shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/assets/attorney-main.jpg";
                    }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 flex flex-col justify-center h-[500px]">
                <div className="text-center lg:text-left">
                  {/* Name and Title */}
                  <div className="mb-5">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                      Eeman Bashir
                    </h2>
                    <p className="text-xl text-[#D4A574] font-semibold mb-4">
                      Legal Intern
                    </p>
                    <div className="w-16 h-1 bg-[#D4A574] mx-auto lg:mx-0 mb-5"></div>
                  </div>

                  {/* Bio Content */}
                  <div className="space-y-4 text-gray-700 leading-relaxed text-base">
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
          </div>

          {/* Madina Iskandarova */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              {/* Image Section */}
              <div className="lg:w-2/5 flex-shrink-0">
                <div className="h-[500px] w-full">
                  <img
                    src="/assets/madina.jpeg"
                    alt="Madina Iskandarova - Legal Intern"
                    className="w-full h-full object-cover object-top rounded-lg shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/assets/attorney-main.jpg";
                    }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 flex flex-col justify-center h-[500px]">
                <div className="text-center lg:text-left">
                  {/* Name and Title */}
                  <div className="mb-5">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                      Madina Iskandarova
                    </h2>
                    <p className="text-xl text-[#D4A574] font-semibold mb-4">
                      Legal Intern
                    </p>
                    <div className="w-16 h-1 bg-[#D4A574] mx-auto lg:mx-0 mb-5"></div>
                  </div>

                  {/* Bio Content */}
                  <div className="space-y-4 text-gray-700 leading-relaxed text-base">
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

        </div>

        {/* Team CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience Professional Legal Support
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              When you work with Jwayyed Law LLC, you're not just getting an experienced attorney - 
              you're getting a dedicated team committed to your success. Our team ensures your experience 
              with our firm is smooth, professional, and results-oriented from start to finish.
            </p>
            <Link href="/contact">
              <button className="bg-[#D4A574] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-[#C9995E] hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Schedule Your Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}