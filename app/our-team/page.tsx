"use client";
import React from 'react';
import Link from 'next/link';
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
    },
    {
      name: "Madina Iskandarova",
      title: "Legal Intern",
      description: "Assisting with legal research, document drafting, and case preparation with attention to detail and dedication.",
      image: "/assets/madina.jpeg",
      link: "/about/legal-assistant#madina"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h1>
          </div>

          {/* Team Group Photo */}
          <div className="px-4 md:px-0 mb-16">
            <img
              src="/assets/team-photo.jpg"
              alt="Jwayyed Law LLC Team"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-lg object-cover h-auto"
            />
          </div>
        </div>
      </div>

      {/* Team Member Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col hover:-translate-y-2 hover:border-[#D4A574]/30"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-start space-x-6 mb-6">
                  {/* Member Photo */}
                  <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 object-cover object-top rounded-lg shadow-md"
                    />
                  </div>
                  
                  {/* Member Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-[#D4A574] font-semibold uppercase tracking-wide mb-3">
                      {member.title}
                    </p>
                    <div className="w-12 h-0.5 bg-[#D4A574] mb-3"></div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
                
                {/* View Bio Button - Always at bottom */}
                <div className="mt-auto">
                  <Link
                    href={member.link}
                    aria-label={`View full bio of ${member.name}`}
                    className="inline-flex items-center bg-[#D4A574] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8956A] transition-colors duration-300 shadow-md hover:shadow-lg text-sm group"
                  >
                    View Bio
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Experience Professional Legal Support
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our knowledgeable and dedicated team is here to assist you with your legal needs. 
            Contact us to learn more about our services and how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#D4A574] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B8956A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}