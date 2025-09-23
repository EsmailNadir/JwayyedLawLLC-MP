"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: "Attorney Jwayyed",
      title: "Managing Attorney",
      description: "Extensive experience in criminal defense, civil rights, and municipal law. Dedicated to fighting for justice and protecting client rights.",
      image: "/assets/attorney-main.jpg",
      link: "/about"
    },
    {
      name: "Raneem Ali",
      title: "Legal Assistant and Case Manager", 
      description: "Efficient expertise in handling cases and providing comprehensive support to attorneys and clients throughout the legal process.",
      image: "/assets/raneem-backround.png",
      link: "/about/legal-assistant#raneem"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              Meet Our Team
            </h1>
          </div>

          {/* Team Group Photo */}
          <div className="px-2 sm:px-4 md:px-0 mb-8 sm:mb-12 lg:mb-16">
            <Image
              src="/assets/Screenshot 2025-08-26 at 8.35.png"
              alt="Jwayyed Law LLC Team"
              width={800}
              height={600}
              className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto rounded-lg sm:rounded-xl shadow-lg object-cover h-auto"
              priority
              quality={90}
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Team Member Cards - Professional Redesign */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Top Section with Photo */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 p-8 text-center">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
                  }}></div>
                </div>
                
                {/* Photo */}
                <div className="relative z-10 mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                      quality={90}
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Name and Title */}
                <h3 className="relative z-10 text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="relative z-10 text-[#D4A574] font-semibold text-sm uppercase tracking-wider">
                  {member.title}
                </p>
              </div>
              
              {/* Bottom Section with Description */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed text-base mb-6 min-h-[80px]">
                  {member.description}
                </p>
                
                {/* View Bio Button */}
                <Link
                  href={member.link}
                  aria-label={`View full bio of ${member.name}`}
                  className="inline-flex items-center justify-center w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 group/btn"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Experience Professional Legal Support
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2">
            Our knowledgeable and dedicated team is here to assist you with your legal needs. 
            Contact us to learn more about our services and how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#D4A574] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold shadow-md text-sm sm:text-base w-full sm:w-auto justify-center hover:bg-[#C9995E] transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
