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

          {/* Team Group Photo - Reduced size for 2 people */}
          <div className="px-2 sm:px-4 md:px-0 mb-8 sm:mb-12 lg:mb-16">
            <Image
              src="/assets/main_updated_photo.jpeg"
              alt="Jwayyed Law LLC Team"
              width={800}
              height={600}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto rounded-lg sm:rounded-xl shadow-lg object-cover h-auto"
              priority
              quality={90}
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Team Member Cards - Now with 2 members */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col"
            >
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-start space-x-4 sm:space-x-6 mb-6">
                  {/* Member Photo */}
                  <div className="flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover object-top rounded-lg shadow-md"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Member Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#D4A574] font-semibold uppercase tracking-wide mb-3 leading-tight">
                      {member.title}
                    </p>
                    <div className="w-12 sm:w-16 h-0.5 bg-[#D4A574] mb-3"></div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
                
                {/* View Bio Button - Always at bottom */}
                <div className="mt-auto">
                  <Link
                    href={member.link}
                    aria-label={`View full bio of ${member.name}`}
                    className="inline-flex items-center bg-[#D4A574] text-white px-5 sm:px-6 py-3 rounded-lg font-semibold shadow-md text-sm sm:text-base group w-full sm:w-auto justify-center sm:justify-start hover:bg-[#C9995E] transition-colors"
                  >
                    View Bio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
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
