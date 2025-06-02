'use client';

import React from 'react';
import { Gavel, ScrollText, Users, FileText, BookUser, Globe, Briefcase, FileSignature, Handshake } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: 'Estate Planning',
    description: 'Avoid probate court and plan ahead to protect your family and legacy. Estate plans help you transfer assets efficiently and reduce stress and costs.',
    icon: <ScrollText />,
    link: '/services/estatePlanning',
  },
  {
    title: 'Wills',
    description: 'Direct where your assets go with a legally binding will. Avoid Ohio default rules and make transitions smoother for your loved ones.',
    icon: <Gavel />,
    link: '/services/Wills',
  },
  {
    title: 'Power of Attorney & Advanced Directives',
    description: 'Designate someone to make legal, financial, or medical decisions on your behalf when you can’t. Includes living wills and more.',
    icon: <Users />,
    link: '/services/power-of-attorney',
  },
  {
    title: 'Trusts',
    description: 'Use a trust to avoid probate and control your asset distribution both during and after your life. Flexible and secure.',
    icon: <FileText />,
    link: '/services/trusts',
  },
  {
    title: 'Navigating Probate',
    description: 'We help you manage the legal complexities after a loved one’s passing so you can focus on what matters most.',
    icon: <BookUser />,
    link: '/services/probate',
  },
  {
    title: 'Immigration',
    description: 'Assistance with green cards, citizenship, asylum, family petitions, removal defense, and more. Arabic-speaking attorney.',
    icon: <Globe />,
    link: '/services/immigration',
  },
  {
    title: 'Business Law',
    description: 'From business formation to contracts and dissolution—solid legal support for businesses of all sizes in Ohio.',
    icon: <Briefcase />,
    link: '/services/businessLaw',
  },
  {
    title: 'Contracts',
    description: 'Get your contracts reviewed or drafted—leases, NDAs, agreements, and more—to protect your rights and avoid disputes.',
    icon: <FileSignature />,
    link: '/services/contracts',
  },
  {
    title: 'Alternative Dispute Resolution',
    description: 'Resolve conflicts through mediation, arbitration, or negotiation. Save time and cost compared to litigation.',
    icon: <Handshake />,
    link: '/services/adr',
  },
];

const ServicesPage = () => {
  return (
    <>
     
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[400px] md:h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/service-page.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4 tracking-wide">
            OUR LEGAL SERVICES
          </h1>
          <p className="text-md sm:text-lg md:text-xl mb-6 max-w-xl mx-auto">
            Focused. Transparent. Personalized legal support across Ohio.
          </p>
          <button className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition-all duration-200 font-medium">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <div className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
          />
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
