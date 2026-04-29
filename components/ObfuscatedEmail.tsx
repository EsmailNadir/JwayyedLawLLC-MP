'use client';

import { Mail, ArrowRight } from 'lucide-react';

export default function ObfuscatedEmail() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const u = 'jwayyedlawllc';
    const d = 'outlook.com';
    const subject = encodeURIComponent('Inquiry from JJ Law Ohio Website');
    window.location.href = `mailto:${u}@${d}?subject=${subject}`;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Send email to Jwayyed Law"
      className="group relative text-left bg-white text-gray-900 rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-[#b87333]/40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#b87333]/40 focus:ring-offset-2"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#b87333]/10 mb-5 transition-colors duration-300 group-hover:bg-[#b87333]/15">
        <Mail className="w-7 h-7 text-[#b87333]" aria-hidden="true" />
      </div>
      <h3 className="text-2xl font-['Playfair_Display',_'Georgia',_serif] font-semibold mb-2">
        Send an Email
      </h3>
      <p className="text-gray-600 text-sm mb-5 leading-relaxed font-['Inter',_'Arial',_sans-serif]">
        Best for non-urgent questions or sharing detailed information about your case.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b87333] tracking-wide font-['Inter',_'Arial',_sans-serif]">
          Open Email Client
        </span>
        <ArrowRight className="w-5 h-5 text-[#b87333] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </div>
      <div className="mt-3 text-xs text-gray-500 font-['Inter',_'Arial',_sans-serif]">
        Reply within one business day
      </div>
    </button>
  );
}
