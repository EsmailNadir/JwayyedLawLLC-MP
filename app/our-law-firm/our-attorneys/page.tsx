'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { teamMembers, roles, type RoleFilter, getMembersByRole } from '@/data/team-members';

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Our Staff', href: '/our-law-firm/our-attorneys' },
];

export default function OurStaffPage() {
  const [activeFilter, setActiveFilter] = useState<RoleFilter>('All');
  const filtered = getMembersByRole(activeFilter);

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      {/* ── Page Content ───────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative min-h-[70vh]">
        {/* Subtle ambient accents */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#b87333]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1a1a2e]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Header ─────────────────────────────────────────────── */}
          <div
            className="mb-12"
            style={{ animation: 'staffFadeUp 0.6s ease-out both' }}
          >
            <p className="text-[#b87333] font-semibold tracking-[0.2em] uppercase text-sm mb-3 font-['DM_Sans',_'Helvetica_Neue',_sans-serif]">
              Jwayyed Law LLC
            </p>
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Meet Our Staff
            </h1>
            <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-lg text-gray-500 max-w-2xl leading-relaxed">
              Dedicated legal professionals serving clients throughout Ohio with expertise, integrity, and a commitment to results.
            </p>
          </div>

          {/* ── Filter Tabs ────────────────────────────────────────── */}
          <div
            className="flex flex-wrap gap-2 sm:gap-3 mb-12"
            style={{ animation: 'staffFadeUp 0.6s ease-out 0.15s both' }}
          >
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveFilter(role)}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300
                  font-['DM_Sans',_'Helvetica_Neue',_sans-serif]
                  ${
                    activeFilter === role
                      ? 'bg-[#1a1a2e] text-white shadow-lg shadow-[#1a1a2e]/20'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-[#b87333] hover:text-[#b87333] hover:shadow-sm'
                  }
                `}
              >
                {role}
              </button>
            ))}
          </div>

          {/* ── Team Card Grid ─────────────────────────────────────── */}
          <div className="flex flex-wrap justify-center gap-7">
            {filtered.map((member, idx) => (
              <div
                key={member.slug}
                className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)]"
                style={{
                  animation: `staffFadeUp 0.55s ease-out ${0.2 + idx * 0.08}s both`,
                }}
              >
                <Link href={member.profileLink} className="group block h-full">
                  <div className="relative h-full bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#b87333]/10 transition-all duration-500 hover:-translate-y-1.5 flex flex-col">
                    {/* Bronze top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#b87333]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {/* Photo */}
                    <div className="relative w-full h-[290px] overflow-hidden bg-[#2d3436] flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.imageAlt ?? member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        style={{ objectPosition: member.imageObjectPosition ?? 'center 20%' }}
                        quality={85}
                      />
                      {/* Gradient overlay at bottom for text readability */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1a1a2e] to-transparent" />

                      {/* Role badge */}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`
                            text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full
                            font-['DM_Sans',_'Helvetica_Neue',_sans-serif] backdrop-blur-sm shadow-sm
                            ${
                              member.role === 'Attorney'
                                ? 'bg-[#b87333]/90 text-white'
                                : member.role === 'Staff'
                                  ? 'bg-[#2d6a4f]/90 text-white'
                                  : 'bg-[#1a1a2e]/80 text-white border border-white/25'
                            }
                          `}
                        >
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 sm:p-5 flex flex-col flex-1">
                      <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-lg sm:text-xl font-bold text-white mb-0.5 group-hover:text-[#d4a574] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-[#b87333] text-xs font-semibold tracking-wide mb-2.5">
                        {member.title}
                      </p>
                      <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-gray-400 text-sm leading-snug line-clamp-2">
                        {member.shortBio}
                      </p>

                      {/* Highlights — single row, overflow hidden */}
                      {member.highlights && (
                        <div className="flex flex-nowrap gap-1.5 mt-3 overflow-hidden">
                          {member.highlights.map((h) => (
                            <span
                              key={h}
                              className="text-[10px] font-medium text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full font-['DM_Sans',_'Helvetica_Neue',_sans-serif] whitespace-nowrap flex-shrink-0"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* View Profile — pushed to bottom */}
                      <div className="flex items-center gap-1.5 mt-auto pt-4 text-[#b87333] text-sm font-semibold font-['DM_Sans',_'Helvetica_Neue',_sans-serif] group-hover:gap-2.5 transition-all duration-300">
                        View Profile
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-gray-400 text-lg">
                No team members found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────────── */}
      <ContactCTA />

      {/* ── Keyframe animation ──────────────────────────────────────── */}
      <style jsx global>{`
        @keyframes staffFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
