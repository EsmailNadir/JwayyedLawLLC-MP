'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

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

const ContactPage = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-1">
          Contact Us
        </h1>
        <p className="text-sm text-gray-700 max-w-xl mx-auto leading-snug">
          We're here to help. Reach out with any legal questions or to request a consultation.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mb-8">
        <form
          action="https://formspree.io/f/xyzjyzgv"
          method="POST"
          className="w-full md:w-1/2 space-y-3 bg-white shadow-md p-3 rounded-lg border"
        >
          <h2 className="text-base font-semibold font-serif text-gray-900 mb-1 text-center">
            General Inquiry
          </h2>
          <InputField label="Name" type="text" name="name" />
          <InputField label="Email" type="email" name="email" />
          <InputField label="Phone Number" type="tel" name="phone" />
          <div>
            <label className="block text-gray-800 text-sm mb-1">Message</label>
            <textarea
              name="message"
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 h-20 resize-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none text-sm"
              required
            />
          </div>
          <input type="hidden" name="form_type" value="general_inquiry" />
          <button
            type="submit"
            className="w-full bg-blue-950 text-white px-4 py-1.5 rounded-md hover:bg-blue-900 transition-all duration-200 text-sm"
          >
            Submit
          </button>
          <p className="text-xs text-gray-500 text-center">
            We respond to most inquiries within 24 hours.
          </p>
        </form>

        <form
          action="https://formspree.io/f/xyzjyzgv"
          method="POST"
          className="w-full md:w-1/2 bg-white shadow-md p-3 rounded-lg border space-y-3"
        >
          <h2 className="text-base font-semibold font-serif text-gray-900 mb-1 text-center">
            Request a Consultation
          </h2>
          <p className="text-xs text-gray-600 text-center">
            Suggest times that work for you - we'll confirm availability
          </p>
          
          <input type="hidden" name="form_type" value="consultation_request" />
          
          <InputField label="Name" type="text" name="consultation_name" />
          <InputField label="Phone Number" type="tel" name="consultation_phone" />
          <InputField label="Email" type="email" name="consultation_email" />
          
          <div>
            <label className="block text-gray-800 text-sm mb-1">
              Preferred Times <span className="text-gray-500">(Please suggest 2-3 options)</span>
            </label>
            <textarea
              name="preferred_times"
              placeholder="Example: Monday 3pm, Wednesday 10am, or Friday afternoon"
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 h-20 resize-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none text-sm"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-800 text-sm mb-1">Brief Case Description</label>
            <textarea
              name="case_description"
              placeholder="Please briefly describe your legal matter"
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 h-16 resize-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none text-sm"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-950 text-white px-4 py-1.5 rounded-md hover:bg-blue-900 transition-all duration-200 text-sm"
          >
            Submit Request
          </button>
          
          <p className="text-xs text-gray-500 text-center">
            Attorney will respond with available times within 24 hours
          </p>
        </form>
      </div>

      <div className="space-y-4 mb-8">
        {/* Client Communication Notice */}
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-900 p-4 rounded-md text-sm">
          <h3 className="font-semibold mb-1">Client Communication Notice:</h3>
          <p className="mb-2">
            <strong>By Appointment Only.</strong> Walk-ins are not available. Please request your consultation using the form above or by calling our office. All consultation requests are subject to attorney availability and confirmation.
          </p>
          <p>
            All phone calls, voicemails, emails, and website contact form submissions are reviewed and returned within one (1) business day. Please note: Calls without voicemails may not be returned. To ensure a prompt response, kindly leave a detailed message with your name, number, and reason for calling. Timely, respectful communication is a top priority of the firm.
          </p>
        </div>

        {/* Emergency and Consultation Disclaimer */}
        <div className="bg-red-50 border border-red-200 text-red-900 p-4 rounded-md text-sm">
          <h3 className="font-semibold mb-1">Important Notice:</h3>
          <p className="mb-2">
            <strong>If this is an emergency, please call 911 immediately.</strong> This website and contact form should not be used for urgent matters requiring immediate assistance.
          </p>
          <p>
            <strong>Consultation Disclaimer:</strong> Submitting a contact form, leaving a voicemail, or scheduling a consultation does not create an attorney-client relationship. Attorney-client privilege and confidentiality do not apply until a formal representation agreement has been signed by both parties. Do not send confidential or time-sensitive information through this form.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white shadow-md p-3 rounded-lg border text-sm">
          <h3 className="text-base font-semibold font-serif text-gray-900 mb-2">
            Contact Information
          </h3>
          <div className="space-y-2">
            <ContactDetail
              icon={<MapPin className="text-blue-900 w-4 h-4" />}
              title="Office Location"
              detail="1335 Dublin Rd Suite 211A, Columbus, OH 43215"
            />
            <ContactDetail
              icon={<Phone className="text-blue-900 w-4 h-4" />}
              title="Phone"
              detail="(614) 285-5482"
            />
            <ContactDetail
              icon={<Mail className="text-blue-900 w-4 h-4" />}
              title="Email"
              detail="jwayyedlawllc@outlook.com"
            />
            <ContactDetail
              icon={<Clock className="text-blue-900 w-4 h-4" />}
              title="Business Hours"
              detail="Mon–Fri: 9:00 AM – 5:00 PM\nSat–Sun: Closed"
            />
          </div>
        </div>

        <div className="w-full h-full border rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.5000029755743!2d-83.0609554!3d39.9674267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388f010f090e4d%3A0x8ef6e1676a0fbb4a!2s1335%20Dublin%20Rd%20%23211A%2C%20Columbus%2C%20OH%2043215!5e0!3m2!1sen!2sus!4v1717860781622!5m2!1sen!2sus"
            className="w-full h-56"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, type, name, placeholder }: InputFieldProps) => (
  <div>
    <label className="block text-gray-800 text-sm mb-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required
      className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none text-sm"
    />
  </div>
);

const ContactDetail = ({ icon, title, detail }: ContactDetailProps) => (
  <div className="flex items-start gap-2">
    {icon}
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-700 whitespace-pre-line">{detail}</p>
    </div>
  </div>
);

export default ContactPage;