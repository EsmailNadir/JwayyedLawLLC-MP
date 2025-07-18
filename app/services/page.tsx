'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import {
  Gavel,
  ScrollText,
  Users,
  FileText,
  BookUser,
  Globe,
  Briefcase,
  FileSignature,
  Handshake,
  X,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: 'Estate Planning & Wills',
    description: 'Comprehensive estate planning to protect your family and legacy.',
    fullText: `Our estate planning services include:

• Wills - Direct where your assets go with a legally binding will. Without a will, Ohio law decides how your assets are distributed.

• Trusts - Avoid probate court and create flexible asset protection strategies for your beneficiaries.

• Advanced Directives - Living wills and healthcare directives to ensure your medical wishes are respected.

• Power of Attorney - Designate someone to make legal, financial, or medical decisions on your behalf if you're incapacitated.

Creating a comprehensive estate plan ensures your assets transfer directly to beneficiaries without probate court, saves time, reduces costs, and prevents family disputes.`,
    icon: ScrollText,
    image: '/assets/estatePlanning.webp',
  },
  {
    title: 'Navigating Probate',
    description: 'We help manage the legal complexities after a loved one\'s passing.',
    fullText: `Probate can be stressful and time-consuming. We provide compassionate, professional support to help you settle your loved one's estate efficiently. Our services include guidance through court procedures, asset inventory, debt settlement, and distribution to beneficiaries.`,
    icon: BookUser,
    image: '/assets/nav-probate.webp',
  },
  {
    title: 'Immigration',
    description: 'Help with green cards, citizenship, asylum, and more.',
    fullText: `We assist with immigration needs including green cards, citizenship, asylum, family sponsorships, removal defense, and more. Arabic-speaking attorney available for comprehensive immigration support.`,
    icon: Globe,
    image: '/assets/passport.webp',
  },
  {
    title: 'Business Law & Contracts',
    description: 'Complete business legal support and contract services.',
    fullText: `Whether you're starting a business, need ongoing legal support, or require contract services, we provide comprehensive solutions:

• Business Formation - LLCs, corporations, partnerships
• Contract Drafting & Review - Service agreements, NDAs, employment contracts, leases
• Business Compliance - Ongoing legal support for businesses of all sizes
• Contract Disputes - Resolution and enforcement
• Business Dissolution - When it's time to close your business

We ensure your documents are clear, enforceable, and protect your interests while supporting your business journey from start to finish.`,
    icon: Briefcase,
    image: '/assets/businessLaw.webp',
  },
  {
    title: 'Dispute Resolution',
    description: 'Resolve conflicts through mediation, arbitration, or negotiation.',
    fullText: `Save time and cost compared to litigation. We help clients resolve disputes efficiently through proven alternative methods including mediation, arbitration, and strategic negotiation.`,
    icon: Handshake,
    image: '/assets/law.webp',
  },
  {
    title: 'Criminal Defense',
    description: 'Defense for misdemeanor and felony cases outside Franklin County.',
    fullText: `Being charged with a crime can be overwhelming. Attorney Jwayyed Jwayyed provides strategic criminal defense outside Franklin County. With prior experience as a municipal prosecutor, he develops strong, informed defense strategies.

Note: He does not accept criminal cases in Franklin County due to municipal prosecution contracts. This policy complies with professional conduct rules after consultation with the Office of Disciplinary Counsel.`,
    icon: Gavel,
    image: '/assets/criminal.jpg',
  },
  {
    title: 'Personal Injury',
    description: 'Support for car accidents, slip-and-falls, and negligence claims.',
    fullText: `If you've been injured due to someone else's negligence, Attorney Jwayyed Jwayyed fights for fair compensation. He handles communication with insurers, gathers evidence, and pursues recovery for medical bills, lost wages, and pain and suffering.

His approach is strategic, compassionate, and client-focused—whether negotiating a settlement or preparing for litigation.`,
    icon: Handshake,
    image: '/assets/Injury.jpg',
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/assets/service-page.webp" />
      </Head>

      <section
        className="relative bg-cover bg-center bg-no-repeat h-[400px] md:h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/service-page.webp')" }}
      >
        <div className="absolute inset-0 bg-black/20 md:bg-black/25"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold mb-4 tracking-wide">
            OUR LEGAL SERVICES
          </h1>
          <p className="text-md sm:text-lg md:text-xl mb-6 max-w-xl mx-auto">
            Focused. Transparent. Personalized legal support across Ohio.
          </p>
          <a href="/contact">
            <button className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition-all duration-200 font-medium">
              Schedule Consultation
            </button>
          </a>
        </div>
      </section>

      <div className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            onLearnMore={() => openModal(service)}
          />
        ))}
      </div>

      {isModalOpen && selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden h-[60vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              aria-label="Close Modal"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row items-stretch h-full">
              <div className="relative w-full md:w-1/2 h-64 md:h-full">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center p-6 md:p-8 w-full md:w-1/2 overflow-y-auto">
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-2 break-words">
                  {selectedService?.title ?? 'Service'}
                </h2>
                <p className="text-blue-950 font-medium mb-2">
                  {selectedService.description}
                </p>
                <p className="text-gray-700 whitespace-pre-line text-sm">
                  {selectedService.fullText}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesPage;