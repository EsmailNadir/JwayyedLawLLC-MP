"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Gavel,
  Users,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Scale,
  Building2,
} from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

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

  const testimonials = [
    {
      text: "I had the pleasure of working with Jwayyed Jwayyed, also known as JJ Law Ohio, for legal assistance with my company, Wireless Bros LLC... I wholeheartedly recommend him to anyone seeking a knowledgeable and trustworthy lawyer for their business needs.",
      author: "Abdullah Rasheed",
      title: "President, Wireless Bros LLC"
    },
    // Other testimonials...
  ];

  const images = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"];
  const [current, setCurrent] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

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
      <style jsx global>{`
        body {
          font-family: 'Inter', 'Arial', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', 'Georgia', serif;
        }
      `}</style>
      <div className="bg-[#fffaf4] min-h-screen text-gray-800 relative">
      {/* Section 1: Meet Attorney */}
      <section className="w-full">
        <div className="h-[100px] sm:h-[120px] relative">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl font-bold text-center w-full">Meet Attorney Jwayyed</h1>
        </div>
        
        {/* Meet Attorney Section Content */}
        <div className="px-4 sm:px-6 md:px-20">
        <div className="max-w-6xl mx-auto mb-20 sm:mb-32">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start justify-center">
          <div className="flex flex-col items-center lg:flex-shrink-0 lg:w-[400px] order-1 lg:order-none">
            <div className="relative w-full max-w-[380px] lg:max-w-none h-[260px] sm:h-[290px] md:h-[320px] rounded-xl shadow-lg mb-6 overflow-hidden">
              <video 
                controls
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay 
                muted 
                loop
                playsInline
                preload="auto"
                onError={handleVideoError}
                onEnded={handleVideoEnded}
              >
                <source src="/assets/aboutme.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <Link href="/services">
              <button className="bg-[#D4A574] text-white px-6 sm:px-10 py-3 sm:py-5 rounded-lg font-bold text-base sm:text-lg shadow-lg hover:bg-[#C9995E] hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full max-w-[380px] lg:max-w-none">
                VIEW PRACTICE AREAS
              </button>
            </Link>
          </div>

          <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-4 sm:space-y-5 max-w-3xl lg:flex-1 order-2 lg:order-none">
            <p>Attorney Jwayyed Jwayyed is a lifelong Ohioan, born in Cincinnati and raised in Akron. He earned his bachelor's degree in Political Science from the University of Akron and his Juris Doctor from Capital University Law School in Columbus, where he concentrated in Alternative Dispute Resolution.</p>

            <p>During law school, Jwayyed gained valuable experience interning at the Franklin County Public Defender's Office and Safe Auto Insurance, building a strong foundation in both public and private sector legal work. Since becoming a licensed attorney in 2019, he has worked at the Columbus City Attorney's Office and Frost Brown Todd, a major regional law firm. He also served as Assistant Law Director for the City of Circleville and as Legal Director for a civil rights organization, where he focused on cases involving discrimination in employment and education.</p>

            <p>Jwayyed now leads his own practice, which contracts with several municipalities in Franklin County to provide prosecutorial services. As a result, he does not accept criminal defense cases in Franklin County to avoid conflicts of interest.</p>

            <p>In addition to his municipal and civil rights work, Jwayyed assists clients with business contracts, landlord-tenant agreements, wills, and basic estate planning. He also advises law enforcement agencies on legal matters and provides legal training on a range of issues relevant to public service and policing.</p>

            <p>Known for his strategic thinking, clear communication, and client-centered service, Jwayyed helps individuals, businesses, and institutions navigate complex legal challenges with clarity and confidence.</p>

            <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 font-['Playfair_Display',_'Georgia',_serif]">Outside the Office</h2>

            <p>In his free time, Jwayyed enjoys spirited GOAT debates about Kobe, MJ, and LeBron with his cousins, staying active through weightlifting and recreational sports, and listening to podcasts on law, culture, and current events. A true Buckeye fan, he's a proud Buck Nut who tries to attend at least one road game each season with his brother. Jwayyed is also active in his local community and values spending quality time with family and friends.</p>

            <p className="font-semibold">If you need experienced, honest legal guidance, contact Attorney Jwayyed today to schedule a consultation.</p>
          </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/about/legal-assistant">
              {/* Additional content if necessary */}
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Section 2: Recognition & Accolades */}
      <section className="w-full">
        <div className="h-[120px] sm:h-[140px] relative">
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl font-bold text-center font-['Playfair_Display',_'Georgia',_serif] w-full">Recognition & Accolades</h2>
        </div>

      {/* Achievement and Membership Badges Section - Banner Style */}
      <div className="px-4 sm:px-6 md:px-20 mt-8">
        <div className="max-w-[900px] mx-auto mb-20 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {achievements.map((item, i) => (
            <div key={i} className="relative">
              {/* Simple banner design */}
              <div className="relative bg-[#EBD2AE] border-2 border-[#c9ab88] shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center px-6 py-4">
                  <div className="text-[#4b3d2f] mr-4">{item.icon}</div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {memberships.map((item, i) => (
            <div key={i + achievements.length} className="relative">
              {/* Simple banner design */}
              <div className="relative bg-[#EBD2AE] border-2 border-[#c9ab88] shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center px-6 py-4">
                  <div className="text-[#4b3d2f] mr-4">{item.icon}</div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Awards Section - Equal Height Cards */}
      <div className="px-4 sm:px-6 md:px-20 mt-16">
        <div className="max-w-[900px] mx-auto mb-20 sm:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Ohio State Bar Association Award */}
            <div className="bg-[#EBD2AE] border-2 border-[#c9ab88] shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden flex min-h-[180px]">
              <div className="p-6 flex flex-col justify-between w-full">
                <div className="flex items-start">
                  <div className="text-[#4b3d2f] mr-4 flex-shrink-0 mt-1">
                    <Scale size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 leading-tight">
                      Ohio State Bar Association: Leadership Academy – 2023
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-['Inter',_'Arial',_sans-serif]">
                      Received the most nominations in the Academy's history. Selected as 1 of 17 attorneys statewide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CALI Award */}
            <div className="bg-[#EBD2AE] border-2 border-[#c9ab88] shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden flex min-h-[180px]">
              <div className="p-6 flex flex-col justify-between w-full">
                <div className="flex items-start">
                  <div className="text-[#4b3d2f] mr-4 flex-shrink-0 mt-1">
                    <GraduationCap size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 leading-tight">
                      CALI Award Recipient – 2017
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-['Inter',_'Arial',_sans-serif]">
                      Excellence in Interviewing & Counseling. Awarded to the top student in this course across 100+ participating US law schools nationwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Section 3: Recommendations */}
      <section className="w-full bg-gray-800 text-white">
        <div className="h-[100px] sm:h-[120px] relative">
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl font-bold text-center font-['Playfair_Display',_'Georgia',_serif] w-full">Recommendations</h2>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-20 pb-12 sm:pb-16">
          <div className="relative">
            <div className="text-center mb-6 sm:mb-8 min-h-[300px] sm:min-h-[400px] flex flex-col justify-center">
              <blockquote className="text-base sm:text-lg italic leading-relaxed mb-4 sm:mb-6 font-['Inter',_'Arial',_sans-serif]">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <p className="font-semibold text-sm sm:text-base font-['Inter',_'Arial',_sans-serif]">
                — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].title}
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                }
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              <span className="text-xs sm:text-sm text-gray-300">
                {currentTestimonial + 1} of {testimonials.length}
              </span>
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                }
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentTestimonial === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}