'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Breadcrumbs from '@/components/Breadcrumbs';

type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
};

type ContactDetailProps = {
  icon: React.ReactNode;
  title: string;
  detail: string;
};

const breadcrumbItems = [{ label: 'Contact', href: '/contact' }];

const ContactPage = () => {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Contact Us"
        description="We're here to help. Reach out with any legal questions or to request a consultation."
        showCTA={false}
      />

      {/* Forms Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Request a Consultation — Primary Form */}
          <form
            action="https://formspree.io/f/xyzjyzgv"
            method="POST"
            className="w-full lg:w-1/2 bg-[#b87333]/[0.03] border border-[#b87333]/20 border-l-4 border-l-[#b87333] shadow-lg p-5 sm:p-7 rounded-xl space-y-4 sm:space-y-5"
          >
            <div className="text-center mb-2">
              <h2 className="text-xl sm:text-2xl font-semibold font-['Playfair_Display',_'Georgia',_serif] text-gray-900">
                Request a Consultation
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Suggest times that work for you - we&apos;ll confirm availability
              </p>
            </div>

            <input type="hidden" name="form_type" value="consultation_request" />

            <InputField label="Name" type="text" name="consultation_name" />
            <InputField label="Phone Number" type="tel" name="consultation_phone" />
            <InputField label="Email" type="email" name="consultation_email" />

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">
                Preferred Times <span className="text-gray-400 font-normal">(Please suggest 2-3 options)</span>
              </label>
              <textarea
                name="preferred_times"
                placeholder="Example: Monday 3pm, Wednesday 10am, or Friday afternoon"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 h-24 resize-none focus:ring-2 focus:ring-[#b87333]/20 focus:border-[#b87333] outline-none text-sm transition-colors duration-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">Brief Case Description</label>
              <textarea
                name="case_description"
                placeholder="Please briefly describe your legal matter"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 h-20 resize-none focus:ring-2 focus:ring-[#b87333]/20 focus:border-[#b87333] outline-none text-sm transition-colors duration-200"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#b87333] text-white px-6 py-3 rounded-xl hover:bg-[#a0632d] transition-all duration-200 text-sm font-semibold tracking-wide shadow-md hover:shadow-lg active:scale-[0.99]"
            >
              Submit Request
            </button>

            <p className="text-xs text-gray-400 text-center">
              Attorney will respond with available times within 24 hours
            </p>
          </form>

          {/* General Inquiry — Secondary Form */}
          <form
            action="https://formspree.io/f/xyzjyzgv"
            method="POST"
            className="w-full lg:w-1/2 space-y-4 sm:space-y-5 bg-white shadow-md p-5 sm:p-7 rounded-xl border border-gray-100"
          >
            <h2 className="text-xl sm:text-2xl font-semibold font-['Playfair_Display',_'Georgia',_serif] text-gray-900 mb-2 text-center">
              General Inquiry
            </h2>
            <InputField label="Name" type="text" name="name" />
            <InputField label="Email" type="email" name="email" />
            <InputField label="Phone Number" type="tel" name="phone" />
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">Message</label>
              <textarea
                name="message"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 h-24 resize-none focus:ring-2 focus:ring-[#b87333]/20 focus:border-[#b87333] outline-none text-sm transition-colors duration-200"
                required
              />
            </div>
            <input type="hidden" name="form_type" value="general_inquiry" />
            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 text-sm font-semibold tracking-wide shadow-md hover:shadow-lg active:scale-[0.99]"
            >
              Submit
            </button>
            <p className="text-xs text-gray-400 text-center">
              We respond to most inquiries within 24 hours.
            </p>
          </form>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <ContactCard
            icon={<MapPin className="w-5 h-5 text-[#b87333]" />}
            title="Office Location"
            detail="100 E. Campus View Boulevard, Suite #250, Columbus, OH 43235"
          />
          <ContactCard
            icon={<Phone className="w-5 h-5 text-[#b87333]" />}
            title="Phone"
            detail="(614) 285-5482"
          />
          <ContactCard
            icon={<Mail className="w-5 h-5 text-[#b87333]" />}
            title="Email"
            detail="jwayyedlawllc@outlook.com"
          />
          <ContactCard
            icon={<Clock className="w-5 h-5 text-[#b87333]" />}
            title="Business Hours"
            detail="Mon–Fri: 9:00 AM – 5:00 PM Sat–Sun: Closed"
          />
        </div>
      </section>

      {/* Google Maps */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <iframe
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
          <div className="bg-amber-50/80 border border-amber-100 text-amber-900 p-5 sm:p-6 rounded-xl text-sm leading-relaxed">
            <h3 className="font-semibold mb-1.5">Client Communication Notice:</h3>
            <p className="mb-2.5">
              <strong>By Appointment Only.</strong> Walk-ins are not available. Please request your consultation using the form above or by calling our office. All consultation requests are subject to attorney availability and confirmation.
            </p>
            <p>
              All phone calls, voicemails, emails, and website contact form submissions are reviewed and returned within one (1) business day. Please note: Calls without voicemails may not be returned. To ensure a prompt response, kindly leave a detailed message with your name, number, and reason for calling. Timely, respectful communication is a top priority of the firm.
            </p>
          </div>

          {/* Emergency and Consultation Disclaimer */}
          <div className="bg-red-50/60 border border-red-100 text-red-900 p-5 sm:p-6 rounded-xl text-sm leading-relaxed">
            <h3 className="font-semibold mb-1.5">Important Notice:</h3>
            <p className="mb-2.5">
              <strong>If this is an emergency, please call 911 immediately.</strong> This website and contact form should not be used for urgent matters requiring immediate assistance.
            </p>
            <p>
              <strong>Consultation Disclaimer:</strong> Submitting a contact form, leaving a voicemail, or scheduling a consultation does not create an attorney-client relationship. Attorney-client privilege and confidentiality do not apply until a formal representation agreement has been signed by both parties. Do not send confidential or time-sensitive information through this form.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const InputField = ({ label, type, name, placeholder }: InputFieldProps) => (
  <div>
    <label className="block text-gray-700 text-sm font-medium mb-1.5">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#b87333]/20 focus:border-[#b87333] outline-none text-sm transition-colors duration-200"
    />
  </div>
);

const ContactCard = ({ icon, title, detail }: ContactDetailProps) => (
  <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm text-center">
    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#b87333]/10 mb-3">
      {icon}
    </div>
    <h4 className="font-semibold font-['Playfair_Display',_'Georgia',_serif] text-gray-900 text-sm mb-1">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
  </div>
);

export default ContactPage;
