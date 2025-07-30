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
    fullText: `Our estate planning services help protect your family's future through wills, trusts, and advanced directives. We ensure your assets transfer smoothly to beneficiaries while avoiding probate court delays and reducing costs. Our services include living wills, healthcare directives, and power of attorney documentation to ensure your wishes are respected.`,
    icon: ScrollText,
    image: '/assets/estatePlanning.webp',
    video: '/videos/estate-planning.mp4',
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
    fullText: `Whether you're starting a business or need ongoing support, we provide comprehensive solutions including business formation (LLCs, corporations, partnerships), contract drafting and review, compliance support, and dispute resolution. We ensure your documents protect your interests while supporting your business journey.`,
    icon: Briefcase,
    image: '/assets/businessLaw.webp',
    video: '/videos/business-contract.mp4',
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
    fullText: `Attorney Jwayyed provides strategic criminal defense outside Franklin County. With prior experience as a municipal prosecutor, he develops strong, informed defense strategies. Note: Due to municipal prosecution contracts, we do not accept criminal cases in Franklin County.`,
    icon: Gavel,
    image: '/assets/criminal.jpg',
    video: '/videos/criminal-defense.mp4',
  },
  {
    title: 'Personal Injury',
    description: 'Support for car accidents, slip-and-falls, and negligence claims.',
    fullText: `If you've been injured due to someone else's negligence, we fight for fair compensation. We handle insurance negotiations, gather evidence, and pursue recovery for medical bills, lost wages, and pain and suffering. Our approach is strategic and client-focused.`,
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

      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white overflow-hidden">
        {/* Optimized Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/service-page.webp"
            alt="Legal Services Background"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
            loading="eager"
          />
        </div>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-600 hover:text-gray-900 z-10 bg-white rounded-full p-2 shadow-md"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Image/Video Section */}
              <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px]">
                {selectedService.video ? (
                  <video 
                    controls
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-contain"
                    poster={selectedService.image}
                    style={{
                      backgroundColor: '#000'
                    }}
                  >
                    <source src={selectedService.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                    loading="eager"
                    quality={85}
                  />
                )}
              </div>

              {/* Content Section - Centered */}
              <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center overflow-y-auto">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4">
                    {selectedService.title}
                  </h2>
                  <p className="text-blue-950 font-medium text-base sm:text-lg mb-4 sm:mb-6">
                    {selectedService.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">
                    {selectedService.fullText}
                  </p>
                  
                  <a href="/contact">
                    <button className="bg-blue-950 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-blue-900 transition-all duration-200 font-medium text-base sm:text-lg">
                      Contact Us Today
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesPage; 