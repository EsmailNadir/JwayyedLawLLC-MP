'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactCTAProps {
  phoneNumber?: string;
  email?: string;
  address?: string;
  className?: string;
}

export default function ContactCTA({
  phoneNumber = '(614) 285-5482',
  email = 'jwayyedlawllc@outlook.com',
  address = '100 E. Campus View Blvd, Suite 250, Columbus, OH 43235',
  className = '',
}: ContactCTAProps) {
  return (
    <section className={`py-16 bg-[#2c2c2c] text-white ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl font-bold mb-6">
          Ready to Discuss Your Case?
        </h2>
        <p className="font-['Inter',_'Arial',_sans-serif] text-lg text-gray-200 mb-8 leading-relaxed">
          Contact Jwayyed Law LLC today to schedule a consultation. We're here to help you understand your legal rights and options.
        </p>
        <div className="space-y-4 font-['Inter',_'Arial',_sans-serif] inline-block text-left">
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="flex items-center gap-3 text-lg hover:text-[#b87333] transition-colors"
          >
            <Phone className="w-6 h-6 text-[#b87333]" />
            <span>{phoneNumber}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 text-lg hover:text-[#b87333] transition-colors"
          >
            <Mail className="w-6 h-6 text-[#b87333]" />
            <span>{email}</span>
          </a>
          <div className="flex items-start gap-3 text-lg">
            <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-[#b87333]" />
            <span>{address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

