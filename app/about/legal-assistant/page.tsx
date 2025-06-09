"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LegalAssistantPage() {
  return (
    <div className="bg-[#fffaf4] min-h-screen px-6 py-12 md:px-20 text-gray-800 font-serif">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-20 pl-4">
        <Link 
          href="/about" 
          className="inline-flex items-center px-6 py-3 text-sm font-semibold text-gray-700 bg-white rounded-md shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-300 border border-gray-300 hover:border-gray-400"
        >
          <ArrowLeft size={18} className="mr-3" />
          Back to About
        </Link>
      </div>

      {/* Main Content - Centered */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/assets/raneem-ali.jpg"
              alt="Raneem Ali"
              className="w-[400px] h-[500px] object-cover shadow-lg"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/400x500/333333/FFFFFF?text=Raneem+Ali";
              }}
            />
          </div>

          {/* Content Section */}
          <div className="max-w-2xl text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Raneem Ali</h1>
            <p className="text-xl text-gray-500 mb-8">Legal Assistant</p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Raneem Ali is the Legal Assistant at Jwayyed Law LLC. She plays a key role in 
              managing client communication, scheduling, and case coordination. With her 
              exceptional organizational skills and attention to detail, Raneem ensures that 
              every client receives prompt, professional assistance from their first contact 
              through case resolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}