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
      className="group relative text-left bg-white text-navy-950 p-7 transition-all duration-300 hover:-translate-y-1 border border-navy-950/10 hover:border-sky-deep/40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-deep/40 focus:ring-offset-2"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-sky-deep/10 mb-5 transition-colors duration-300 group-hover:bg-sky-deep/15">
        <Mail className="w-7 h-7 text-sky-deep" aria-hidden="true" />
      </div>
      <h3 className="text-2xl jw-serif font-semibold mb-2">
        Send an Email
      </h3>
      <p className="text-navy-950/70 text-sm mb-5 leading-relaxed">
        Best for non-urgent questions or sharing detailed information about your case.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-sky-deep tracking-wide">
          Open Email Client
        </span>
        <ArrowRight className="w-5 h-5 text-sky-deep transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </div>
      <div className="mt-3 text-xs text-navy-950/60">
        Reply within one business day
      </div>
    </button>
  );
}
