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
    },
    {
      name: "Eeman Bashir",
      title: "Legal Intern",
      description: "Currently pursuing a law degree with strong research skills and passion for social justice. Eager to learn about the legal field.",
      image: "/assets/eeman.jpeg", 
      link: "/about/legal-assistant#eeman"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
              src="/assets/team-photo.jpg"
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

      {/* Team Member Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-[#D4A574]/30"
            >
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-start space-x-4 sm:space-x-6 mb-6">
                  {/* Member Photo */}
                  <div className="flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover object-top rounded-lg shadow-md"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Member Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D4A574] font-semibold uppercase tracking-wide mb-2 sm:mb-3 leading-tight">
                      {member.title}
                    </p>
                    <div className="w-10 sm:w-12 h-0.5 bg-[#D4A574] mb-2 sm:mb-3"></div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
                
                {/* View Bio Button - Always at bottom */}
                <div className="mt-auto">
                  <Link
                    href={member.link}
                    aria-label={`View full bio of ${member.name}`}
                    className="inline-flex items-center bg-[#D4A574] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#B8956A] transition-colors duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm group w-full sm:w-auto justify-center sm:justify-start"
                  >
                    View Bio
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-50 py-12 sm:py-16">
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
            className="inline-flex items-center bg-[#D4A574] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#B8956A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
