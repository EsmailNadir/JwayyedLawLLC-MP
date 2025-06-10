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

        {/* Team Member Layout - No Box */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* Image Section */}
            <div className="lg:w-2/5 flex-shrink-0 lg:-ml-16">
              <div className="h-[450px] lg:h-[550px]">
                <img
                  src="/assets/raneem-backround.png"
                  alt="Raneem Ali - Legal Assistant"
                  className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/assets/attorney-main.jpg";
                  }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-3/5 flex flex-col justify-start">
              <div className="text-center lg:text-left">
                {/* Name and Title */}
                <div className="mb-8">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Raneem Ali
                  </h2>
                  <p className="text-2xl text-[#D4A574] font-semibold mb-5">
                    Legal Assistant and Case Manager
                  </p>
                  <div className="w-24 h-1 bg-[#D4A574] mx-auto lg:mx-0"></div>
                </div>

                {/* Bio Content */}
                <div className="space-y-6 text-gray-700 leading-relaxed mb-10">
                  <p className="text-lg">
                    Raneem Ali joined Jwayyed Law LLC in 2023, bringing exceptional organizational skills 
                    and a genuine commitment to client service. She serves as the backbone of our firm's 
                    operations, ensuring seamless communication and coordination throughout every case.
                  </p>

                  <p className="text-lg">
                    With her meticulous attention to detail and proactive approach, Raneem manages client 
                    intake, scheduling, and case documentation with precision. Her warm, professional demeanor 
                    puts clients at ease from their very first interaction with our firm.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    Raneem is your first point of contact at Jwayyed Law LLC. She's here to assist 
                    with scheduling consultations and answering your initial questions.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="tel:+1234567890"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#D4A574] text-white font-semibold rounded-lg hover:bg-[#C9995E] transition-colors shadow-md hover:shadow-lg"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Our Office
                    </a>
                    <a
                      href="mailto:info@jwayyedlaw.com"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#D4A574] text-[#D4A574] font-semibold rounded-lg hover:bg-[#D4A574] hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience Professional Legal Support
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              When you work with Jwayyed Law LLC, you're not just getting an experienced attorney - 
              you're getting a dedicated team committed to your success. Raneem ensures your experience 
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