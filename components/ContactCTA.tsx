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
  address = '100 E. Campus View Boulevard, Suite #250, Columbus, Ohio 43235',
  className = '',
}: ContactCTAProps) {
  return (
    <section className={`py-16 bg-gray-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl font-bold mb-6">
              Ready to Discuss Your Case?
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-lg text-gray-200 mb-8 leading-relaxed">
              Contact Jwayyed Law LLC today to schedule a consultation. We're here to help you understand your legal rights and options.
            </p>
            <div className="space-y-4 font-['Inter',_'Arial',_sans-serif]">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-lg hover:text-orange-500 transition-colors"
              >
                <Phone className="w-6 h-6 text-orange-500" />
                <span>{phoneNumber}</span>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-lg hover:text-orange-500 transition-colors"
              >
                <Mail className="w-6 h-6 text-orange-500" />
                <span>{email}</span>
              </a>
              <div className="flex items-start gap-3 text-lg">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0 text-orange-500" />
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 text-gray-900">
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-bold mb-6">Contact Form</h3>
            <form className="space-y-4 font-['Inter',_'Arial',_sans-serif]">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

