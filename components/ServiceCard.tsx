'use client';

import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  onLearnMore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, onLearnMore }) => {
  return (
    <div className="bg-white p-6 border border-navy-950/10 hover:bg-ice transition-colors duration-200 flex flex-col h-full">
      <div className="flex items-center justify-center mb-4">
        <div className="text-sky-deep mr-3 flex-shrink-0">
          <Icon size={36} />
        </div>
        <h2 className="jw-display text-xl text-navy-950 text-center leading-tight">{title}</h2>
      </div>

      <p className="text-navy-950/75 text-sm mb-4 flex-grow">{description}</p>

      <button
        onClick={onLearnMore}
        className="inline-block text-navy-950 border border-navy-950 px-4 py-2 hover:bg-navy-950 hover:text-white transition-colors duration-200 text-sm font-medium w-full text-center"
      >
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;