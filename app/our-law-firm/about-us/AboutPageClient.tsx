"use client";

import {
  GraduationCap,
  Gavel,
  Users,
  Briefcase,
  Scale,
  Building2,
  Trophy,
  Check,
} from "lucide-react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";
import OVIReviews from "@/components/OVIReviews";

const breadcrumbItems = [
  { label: "Our Law Firm", href: "/our-law-firm" },
  { label: "About Us", href: "/our-law-firm/about-us" },
];

export default function AboutPageClient() {
  const achievements = [
    { icon: <GraduationCap size={28} />, label: "Juris Doctor from Capital University" },
    { icon: <Gavel size={28} />, label: "Municipal Court Prosecutor" },
    { icon: <Users size={28} />, label: "OSBA Leadership Academy Graduate" },
    { icon: <Briefcase size={28} />, label: "Civil Rights Legal Director" },
  ];

  const memberships = [
    { icon: <Building2 size={28} />, label: "Columbus Bar Association" },
    { icon: <Scale size={28} />, label: "Ohio State Bar Association" },
  ];

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.error("Video error:", e);
    const videoElement = e.currentTarget;
    if (videoElement && typeof videoElement.load === 'function') {
      videoElement.load();
    }
  };

  const handleVideoEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoElement = e.currentTarget;
    if (videoElement && typeof videoElement.play === 'function') {
      videoElement.play().catch(err => console.log("Play failed:", err));
    }
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHero
        title="Meet Attorney Jwayyed"
        description="Experienced legal counsel dedicated to protecting your rights throughout Ohio."
      />

      {/* Section 1: Attorney Bio — Two-Column Layout */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Video Column */}
            <div className="flex flex-col items-center">
              <video
                src="/aboutme.mp4"
                className="rounded-xl shadow-lg w-full max-w-[560px] aspect-[4/3] object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                onError={handleVideoError}
                onEnded={handleVideoEnded}
              >
                <source src="/aboutme.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <a href="/other-services" className="mt-6 w-full max-w-[560px]">
                <button className="bg-[#b87333] hover:bg-[#a0622b] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 w-full">
                  VIEW PRACTICE AREAS
                </button>
              </a>
            </div>

            {/* Bio Text Column */}
            <div className="border-l-4 border-[#b87333] pl-6">
              <div className="space-y-8">
                {/* Background & Education */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-['Playfair_Display',_'Georgia',_serif] text-gray-900">Background & Education</h2>
                  <p className="text-xl text-gray-700 leading-relaxed">Attorney Jwayyed Jwayyed is a lifelong Ohioan, born in Cincinnati and raised in Akron. He earned his bachelor&apos;s degree in Political Science from the University of Akron and his Juris Doctor from Capital University Law School in Columbus, where he concentrated in Alternative Dispute Resolution.</p>
                </div>

                {/* Professional Experience */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-['Playfair_Display',_'Georgia',_serif] text-gray-900">Professional Experience</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>During law school, Jwayyed gained valuable experience interning at the Franklin County Public Defender&apos;s Office and Safe Auto Insurance, building a strong foundation in both public and private sector legal work. Since becoming a licensed attorney in 2019 (Ohio Bar #0098679), he has worked at the Columbus City Attorney&apos;s Office and Frost Brown Todd, a major regional law firm. He also served as Municipal Prosecutor and as Assistant Law Director for the City of Circleville, and as Legal Director for a civil rights organization, where he focused on cases involving discrimination in employment and education. In 2023, he was selected for the Ohio State Bar Association (OSBA) Leadership Academy.</p>
                    <p>Jwayyed now leads his own full-service defense practice, representing clients throughout central Ohio and across the state — including Franklin County, Columbus, and the surrounding suburbs — in criminal defense, OVI/DUI, personal injury, and his other practice areas.</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Former Whitehall City Prosecutor', 'Former Grove City Prosecutor', 'Former Bexley City Prosecutor', 'Former Columbus City Prosecutor', 'Former Assistant Law Director of Circleville', 'Former Obetz Prosecutor', 'Former New Albany Prosecutor', 'Former Pickerington Mayor\'s Court Prosecutor'].map((title) => (
                        <span key={title} className="inline-flex items-center gap-1.5 bg-[#b87333]/8 border border-[#b87333]/25 rounded-md px-3 py-1.5 text-xs font-semibold text-slate-800">
                          ⚖ {title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Current Practice */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-['Playfair_Display',_'Georgia',_serif] text-gray-900">Current Practice</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>In addition to his municipal and civil rights work, Jwayyed assists clients with business contracts, landlord-tenant agreements, wills, and basic estate planning. He also advises law enforcement agencies on legal matters and provides legal training on a range of issues relevant to public service and policing.</p>
                    <p>Known for his strategic thinking, clear communication, and client-centered service, Jwayyed helps individuals, businesses, and institutions navigate complex legal challenges with clarity and confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Outside the Office */}
      <section className="bg-[#faf8f5] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-['Playfair_Display',_'Georgia',_serif] text-gray-900">Outside the Office</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">In his free time, Jwayyed enjoys spirited GOAT debates about Kobe, MJ, and LeBron with his cousins, staying active through weightlifting and recreational sports, and listening to podcasts on law, culture, and current events. A true Buckeye fan, he&apos;s a proud Buck Nut who tries to attend at least one road game each season with his brother. Jwayyed is also active in his local community and values spending quality time with family and friends.</p>
          <p className="text-lg font-semibold text-gray-900">If you need experienced, honest legal guidance, contact Attorney Jwayyed today to schedule a consultation.</p>
        </div>
      </section>

      {/* Section 3: Recognition & Accolades */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 font-['Playfair_Display',_'Georgia',_serif] text-gray-900">Recognition & Accolades</h2>

          {/* Best of 2026 — Plaque Showcase */}
          <div id="accolades" className="mb-16 sm:mb-20 py-12 sm:py-16 px-6 sm:px-10 rounded-2xl bg-[#FAFAFA]">
            <div className="flex flex-col items-center max-w-xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 font-['Playfair_Display',_'Georgia',_serif] text-gray-900">Best of 2026 — Award Winner</h3>
              <div className="w-full max-w-[280px] sm:max-w-[400px] mx-auto mb-6">
                <Image
                  src="/assets/jwayyed-law-llc-plaque.png"
                  alt="Jwayyed Law LLC — Best of 2026 Award Winner by BusinessRate"
                  width={400}
                  height={520}
                  priority
                  className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Jwayyed Law LLC has been named Best of 2026 by BusinessRate, powered by Google Reviews. This award recognizes top-rated businesses in the Crosswoods area of Columbus, OH.
              </p>
            </div>
          </div>

          {/* Achievement and Membership Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {achievements.map((item, i) => (
              <div key={i} className="bg-[#2c2c2c] border-l-4 border-[#b87333] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center px-6 py-5">
                  <div className="text-[#b87333] mr-4 flex-shrink-0">{item.icon}</div>
                  <p className="text-sm sm:text-base font-semibold text-white">{item.label}</p>
                </div>
              </div>
            ))}
            {memberships.map((item, i) => (
              <div key={i + achievements.length} className="bg-[#2c2c2c] border-l-4 border-[#b87333] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center px-6 py-5">
                  <div className="text-[#b87333] mr-4 flex-shrink-0">{item.icon}</div>
                  <p className="text-sm sm:text-base font-semibold text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Best of 2026 — BusinessRate */}
            <div className="relative bg-gradient-to-br from-[#1e3a2f] via-[#2c2c2c] to-[#2c2c2c] border-t-4 border-[#b87333] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#b87333]/15 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
              <div className="relative p-8">
                <span className="inline-block px-2.5 py-1 bg-[#b87333] text-[#1a1a2e] text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded mb-4">
                  NEW — 2026
                </span>
                <div className="flex items-start">
                  <div className="text-[#b87333] mr-4 flex-shrink-0 mt-1">
                    <Trophy size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
                      Best of 2026 Award Winner — BusinessRate
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                      Named Best Law Firm in Crosswoods, Columbus by BusinessRate. This recognition is based entirely on Google Reviews from our clients.
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-gray-400 text-xs opacity-80">
                      <Check className="w-4 h-4 text-[#b87333] flex-shrink-0" aria-hidden="true" />
                      <span>Powered by Google Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ohio State Bar Association Award */}
            <div className="bg-[#2c2c2c] border-t-4 border-[#b87333] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-start">
                  <div className="text-[#b87333] mr-4 flex-shrink-0 mt-1">
                    <Scale size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
                      Ohio State Bar Association: Leadership Academy – 2023
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Received the most nominations in the Academy&apos;s history. Selected as 1 of 17 attorneys statewide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CALI Award */}
            <div className="bg-[#2c2c2c] border-t-4 border-[#b87333] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-start">
                  <div className="text-[#b87333] mr-4 flex-shrink-0 mt-1">
                    <GraduationCap size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
                      CALI Award Recipient – 2017
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Excellence in Interviewing & Counseling. Awarded to the top student in this course across 100+ participating US law schools nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OVIReviews />

      {/* ContactCTA */}
      <ContactCTA />
    </>
  );
}
