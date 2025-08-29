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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group"
            >
              {/* Photo Section */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  quality={90}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8">
                {/* Name and Title */}
                <div className="mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm lg:text-base text-[#D4A574] font-semibold uppercase tracking-wider">
                    {member.title}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#D4A574] to-[#C9995E] mb-4"></div>

                {/* Description */}
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* View Bio Button */}
                <Link
                  href={member.link}
                  aria-label={`View full bio of ${member.name}`}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#D4A574] to-[#C9995E] text-white px-6 py-3 rounded-xl font-semibold text-sm lg:text-base shadow-lg transition-all duration-300 group-hover:shadow-xl"
                >
                  View Bio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
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
            className="inline-flex items-center bg-gradient-to-r from-[#D4A574] to-[#C9995E] text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center group"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
