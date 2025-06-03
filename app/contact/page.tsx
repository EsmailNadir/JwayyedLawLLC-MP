'use client';
import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

type InputFieldProps = {
  label: string;
  type: string;
  name: string;
};

type ContactDetailProps = {
  icon: React.ReactNode;
  title: string;
  detail: string;
};

const ContactPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-1">
          Contact Us
        </h1>
        <p className="text-sm text-gray-700 max-w-xl mx-auto leading-snug">
          We're here to help. Reach out with any legal questions or to schedule your free consultation.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mb-8">
        <form
          action="https://formspree.io/f/xyzjyzgv"
          method="POST"
          className="w-full md:w-1/2 space-y-3 bg-white shadow-md p-3 rounded-lg border"
        >
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

        <div className="w-full md:w-1/2 bg-white shadow-md p-3 rounded-lg border">
          <h2 className="text-base font-semibold font-serif text-gray-900 mb-1 text-center">
            Schedule a Consultation
          </h2>
          <p className="text-xs text-gray-600 mb-2 text-center">Book a time that works for you</p>
          <div
            className="calendly-inline-widget w-full h-[350px]"
            data-url="https://calendly.com/jjlawohio"
          ></div>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.8607025905874!2d-83.0018124!3d39.9611751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388f19b9b1baab%3A0xfbd9f9f4f88b2a02!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus!4v1717283167410!5m2!1sen!2sus"
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

const InputField = ({ label, type, name }: InputFieldProps) => (
  <div>
    <label className="block text-gray-800 text-sm mb-1">{label}</label>
    <input
      type={type}
      name={name}
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
