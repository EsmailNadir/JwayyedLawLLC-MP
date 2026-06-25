import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';
import Calendly from '@/components/calendly';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

export const metadata: Metadata = {
  title: 'Contact Jwayyed Law LLC | Free Consultation',
  description: 'Contact Jwayyed Law LLC to schedule a free consultation. Serving all of Ohio — OVI/DUI, criminal defense, estate planning & more. Call (614) 285-5482.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Jwayyed Law LLC | Free Consultation',
    description: 'Schedule a free consultation with Jwayyed Law LLC. OVI/DUI, criminal defense, estate planning, and more. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/contact',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

const breadcrumbItems = [{ label: 'Contact', href: '/contact' }];

const ContactPage = () => {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map(
      (item: { label: string; href: string }, idx: number) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': item.label,
        'item': `https://www.jjlawohio.com${item.href}`,
      })
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Contact Our Ohio Law Firm"
        description="Serving Columbus, Cincinnati, Dayton, and clients throughout all of Ohio. Reach out to schedule a consultation or ask a question about your legal matter."
        showCTA={false}
      />

      {/* Practice Areas We Can Help With */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-2">
        <p className="font-['Inter',_'Arial',_sans-serif] text-gray-700 text-center mb-6 max-w-3xl mx-auto leading-relaxed">
          Jwayyed Law LLC provides experienced legal representation throughout Ohio — serving Columbus, Cincinnati, Dayton, and clients in every Ohio county. Whether you need help with a criminal charge, an injury claim, a business matter, or an estate plan, our attorneys are ready to listen and advise you on your options.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
          <Link href="/criminal-defense" className="block p-3 text-center border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-sm transition-all text-sm font-medium text-gray-800">Criminal Defense</Link>
          <Link href="/ovi-dui-defense" className="block p-3 text-center border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-sm transition-all text-sm font-medium text-gray-800">OVI / DUI Defense</Link>
          <Link href="/personal-injury" className="block p-3 text-center border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-sm transition-all text-sm font-medium text-gray-800">Personal Injury</Link>
          <Link href="/civil" className="block p-3 text-center border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-sm transition-all text-sm font-medium text-gray-800">Civil Litigation</Link>
          <Link href="/business" className="block p-3 text-center border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-sm transition-all text-sm font-medium text-gray-800">Business Law</Link>
          <Link href="/trusts" className="block p-3 text-center border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-sm transition-all text-sm font-medium text-gray-800">Trusts</Link>
          <Link href="/other-services/estate-planning" className="block p-3 text-center border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-sm transition-all text-sm font-medium text-gray-800">Estate Planning</Link>
          <Link href="/other-services/probate" className="block p-3 text-center border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-sm transition-all text-sm font-medium text-gray-800">Probate</Link>
        </div>
      </section>

      {/* How to Reach Us — Primary Contact Methods */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b87333]/10 text-[#b87333] text-xs font-semibold uppercase tracking-wider mb-3 font-['Inter',_'Arial',_sans-serif]">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Confidential Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-3">
            How to Reach Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-['Inter',_'Arial',_sans-serif] leading-relaxed">
            Choose the option that works best for you. Every inquiry is reviewed by our team and returned within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Call Now — PRIMARY action */}
          <a
            href="tel:+16142855482"
            aria-label="Call Jwayyed Law at (614) 285-5482"
            className="group relative bg-[#b87333] text-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#b87333] focus:outline-none focus:ring-2 focus:ring-[#b87333]/40 focus:ring-offset-2"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/15 mb-5 transition-colors duration-300 group-hover:bg-white/20">
              <Phone className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-['Playfair_Display',_'Georgia',_serif] font-semibold mb-2">
              Call Now
            </h3>
            <p className="text-white/90 text-sm mb-5 leading-relaxed font-['Inter',_'Arial',_sans-serif]">
              Speak directly with our team. The fastest way to discuss urgent matters or get same-day answers.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold tracking-wide font-['Inter',_'Arial',_sans-serif]">
                (614) 285-5482
              </span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </div>
            <div className="mt-3 text-xs text-white/75 font-['Inter',_'Arial',_sans-serif]">
              Mon–Fri · 10:00 AM – 6:00 PM
            </div>
          </a>

          {/* Email — obfuscated client component */}
          <ObfuscatedEmail />

          {/* Visit Our Office */}
          <a
            href="https://www.google.com/maps/place/100+E+Campus+View+Blvd+%23250,+Columbus,+OH+43235"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to our Columbus office"
            className="group relative bg-white text-gray-900 rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-[#b87333]/40 focus:outline-none focus:ring-2 focus:ring-[#b87333]/40 focus:ring-offset-2"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#b87333]/10 mb-5 transition-colors duration-300 group-hover:bg-[#b87333]/15">
              <MapPin className="w-7 h-7 text-[#b87333]" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-['Playfair_Display',_'Georgia',_serif] font-semibold mb-2">
              Visit Our Office
            </h3>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed font-['Inter',_'Arial',_sans-serif]">
              100 E. Campus View Blvd, Suite 250
              <br />
              Columbus, OH 43235
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#b87333] tracking-wide font-['Inter',_'Arial',_sans-serif]">
                Get Directions
              </span>
              <ArrowRight className="w-5 h-5 text-[#b87333] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </div>
            <div className="mt-3 text-xs text-gray-500 font-['Inter',_'Arial',_sans-serif]">
              By appointment only
            </div>
          </a>
        </div>

        {/* Office Hours Strip */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-700 font-['Inter',_'Arial',_sans-serif]">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#b87333]" aria-hidden="true" />
            <span><span className="font-semibold text-gray-900 group-hover:text-[#b87333] transition-colors">Office Hours:</span> Mon–Fri, 10:00 AM – 6:00 PM</span>
          </div>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span className="text-gray-600">Saturday &amp; Sunday: Closed</span>
        </div>
      </section>

      {/* Calendly — Online Scheduling */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b87333]/10 text-[#b87333] text-xs font-semibold uppercase tracking-wider mb-3 font-['Inter',_'Arial',_sans-serif]">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              Online Scheduling
            </div>
            <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-3">
              Book Your Consultation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-['Inter',_'Arial',_sans-serif] leading-relaxed">
              Pick a time that works for you. Available slots update automatically — no email tag required.
            </p>
          </div>
          <Calendly />
        </div>
      </section>

      {/* Google Maps */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-['Playfair_Display',_'Georgia',_serif] font-semibold text-gray-900 mb-2">
            Find Our Office
          </h2>
          <p className="text-gray-600 text-sm font-['Inter',_'Arial',_sans-serif]">
            100 E. Campus View Boulevard, Suite 250, Columbus, OH 43235
          </p>
        </div>
        <div className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Map showing Jwayyed Law LLC office location in Columbus, Ohio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.0585776308626!2d-83.02383492346433!3d40.03001627151842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388e8c8c6b7d91%3A0xe7d5dd9b3e2335c!2s100%20E%20Campus%20View%20Blvd%20%23250%2C%20Columbus%2C%20OH%2043235!5e0!3m2!1sen!2sus!4v1703024773199!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="space-y-5">
          {/* Client Communication Notice */}
          <div className="bg-amber-50/80 border border-amber-100 text-amber-900 p-5 sm:p-6 rounded-xl text-sm leading-relaxed font-['Inter',_'Arial',_sans-serif]">
            <h3 className="font-semibold mb-1.5">Client Communication Notice:</h3>
            <p className="mb-2.5">
              <strong>By Appointment Only.</strong> Walk-ins are not available. Please request your consultation by phone, email, or by booking online above. All consultation requests are subject to attorney availability and confirmation.
            </p>
            <p>
              All phone calls, voicemails, and emails are reviewed and returned within one (1) business day. Please note: Calls without voicemails may not be returned. To ensure a prompt response, kindly leave a detailed message with your name, number, and reason for calling. Timely, respectful communication is a top priority of the firm.
            </p>
          </div>

          {/* Emergency and Consultation Disclaimer */}
          <div className="bg-red-50/60 border border-red-100 text-red-900 p-5 sm:p-6 rounded-xl text-sm leading-relaxed font-['Inter',_'Arial',_sans-serif]">
            <h3 className="font-semibold mb-1.5">Important Notice:</h3>
            <p className="mb-2.5">
              <strong>If this is an emergency, please call 911 immediately.</strong> This website should not be used for urgent matters requiring immediate assistance.
            </p>
            <p>
              <strong>Consultation Disclaimer:</strong> Sending an email, leaving a voicemail, or scheduling a consultation does not create an attorney-client relationship. Attorney-client privilege and confidentiality do not apply until a formal representation agreement has been signed by both parties. Do not send confidential or time-sensitive information by email or through online scheduling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
