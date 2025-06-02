'use client';

import Link from 'next/link';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-200 border border-gray-200">
      <div className="flex items-center justify-center mb-4">
        <div className="text-blue-900 mr-3">
          {React.cloneElement(icon as React.ReactElement, { size: 36 })}
        </div>
        <h2 className="text-xl font-semibold font-serif text-gray-900">{title}</h2>
      </div>

      <p className="text-gray-700 text-sm mb-4">{description}</p>

      {/* 👇 Wrap the button in Link */}
      <Link href={link}>
        <button className="inline-block text-blue-950 border border-blue-950 px-4 py-2 rounded hover:bg-blue-950 hover:text-white transition-all duration-200 text-sm font-medium">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
