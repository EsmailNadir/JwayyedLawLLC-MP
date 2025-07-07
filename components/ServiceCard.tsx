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
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-200 border border-gray-200 flex flex-col h-full">
      <div className="flex items-center justify-center mb-4">
        <div className="text-blue-900 mr-3 flex-shrink-0">
          <Icon size={36} />
        </div>
        <h2 className="text-xl font-semibold font-serif text-gray-900 text-center leading-tight">{title}</h2>
      </div>

      <p className="text-gray-700 text-sm mb-4 flex-grow">{description}</p>

      <button
        onClick={onLearnMore}
        className="inline-block text-blue-950 border border-blue-950 px-4 py-2 rounded hover:bg-blue-950 hover:text-white transition-all duration-200 text-sm font-medium w-full text-center"
      >
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;