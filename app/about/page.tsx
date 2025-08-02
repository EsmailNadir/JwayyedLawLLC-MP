"use client";

import { useState, useEffect } from "react";
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
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@400;600;700&display=swap';
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
    {
      text: "Back in June of 2023, I reached out to Jwayyed for his law services to help deal with a business. It was the best thing I could have done. Jwayyed used his multitude of expertise to get my family and I quick results and solutions that we needed when we were trying to deal with a frustrating business who started to ignore our calls, emails and texts for months... He was always there to listen to our frustrations like a true professional. He went above and beyond to get us a quick resolution with the company. I'll never forget how on top of it he was with all the times he was willing to call as he negotiated back and forth with the business over and over again to get us a fair resolution that avoided the costs of suing them. We were relieved to be able to put this behind us instead of having to worry about a long drawn out court case. It saved us time and money and got us the best possible result we could have asked for. He always had my family's best interests in mind, he replied to all my emails more promptly than most people answer text messages, called me once a week to check in on the case and made sure that both my wife and I were happy with the results. I couldn't have asked for a better person to represent us.",
      author: "Ahmed Kahook",
      title: "Logistics Analyst at Associated Materials"
    },
    {
      text: "I brought Jwayyed a very complex issue. He was not the first attorney I went too and that proved to be a mistake. He was able to quickly identify the problems with my situation. He kept me up to date on everything he did. From research, to working the case, etc. He got me a better result than the first attorney I had spoken too had promised. I intend to come right back to him now to do our family will and estate. I'm happy to say he will be my first call and my attorney going forward.",
      author: "Abraham Rashed",
      title: "District Sales Manager at Boost Mobile"
    },
    {
      text: "Special Lead Prosecutor, Jwayyed Jwayyed was proactive, diligent, knowledgeable, courageous, steadfast and unmovable in getting justice for several juveniles who were being abused and tormented by their parents. In 2022, he took up the mantle after being called upon by Franklin County Prosecutors and the Columbus Police Detective Bureau and was able to complete the task of going to trial and closing the case with charges and pleas from the guilty. I would definitely recommend Prosecutor Jwayyed Jwayyed for any and all litigation concerns.",
      author: "Leonard Milner - Peoples",
      title: "Special Victims Bureau Detective at City of Columbus - Division of Police"
    },
    {
      text: "Jwayyed is consistently professional, knowledgeable, reasonable, and so easy to work with. He is always prepared, organized, and up to speed on every one of his cases which helps tremendously in moving those cases forward. I can always trust that Jwayyed will be thoughtful and consider all perspectives in handling his cases in the fairest way possible.",
      author: "Samantha Pugh",
      title: "Litigator | Barnes & Thornburg"
    },
    {
      text: "I've had the pleasure of working with many professionals in our line of work, but JJ is someone who I will always remember fondly. I started my career working alongside JJ. Not only did he show me many tricks of the trade, but he helped me navigate the complex world of law.",
      author: "Chase Somple",
      title: "Attorney"
    },
    {
      text: "Jwayyed worked for our city as a lead prosecutor. Although my time working with him was short, I quickly recognized his unquestionable commitment to the criminal Justice process and he always pursued every case with the best interest of the community in mind. With over three decades of working with some amazing prosecuting attorneys, I would place him among the best. We wish him the very best in his new assignment.",
      author: "Kevin Teaford",
      title: "Safety Director for Grove City, Ohio"
    },
    {
      text: "JJ was our prosecutor for Grove City Mayor's Court. During a pandemic when everything was shut down, he still managed to come in and review cases and saw that the justice system was still moving forward. He would answer the emails, texts and phone calls in a timely fashion. It has been my pleasure to work with JJ for the past couple of years. He will be missed.",
      author: "Joy Bedard",
      title: "Grove City Mayor's Court Clerk of Court"
    },
    {
      text: "Jwayyed has always been available for any questions or advice I had on cases he was prosecuting for me. He helped me several times no matter how busy he was, he always made time to take care of what I needed assistance with. He is very professional, polite, and courteous. I was sorry to see him go and will surely miss him. He was an asset to my agency and this city.",
      author: "Doug Stonerock",
      title: "Detective City of Grove City (retired)"
    },
    {
      text: "It was my pleasure to work with Jwayyed in his capacity as prosecutor for my city. I was tremulously impressed with his work ethic, high energy, and passion for his profession. He is committed to his craft and a tremendous advocate for those he represents. It is with pleasure that I give him my highest recommendation!",
      author: "Rick Butsko",
      title: "Assistant Executive Director, OPOTA"
    },
    {
      text: "JJ served as the Mayor's Court Prosecutor of Grove City over the past 2+ years. Serving as Mayor, I was impressed by his personal commitment to thoroughly review each case in order to resolve them appropriately. His dedication to justice and fairness made him an invaluable asset to our community.",
      author: "Ike Stage",
      title: "Mayor at Grove City"
    }
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
      <div className="bg-[#fffaf4] min-h-screen text-gray-800 relative">
        {/* Section 1: Meet Attorney */}
        <section className="w-full">
          <div className="h-[120px] sm:h-[140px] flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-['Playfair_Display',_'Georgia',_serif]">Meet Attorney Jwayyed</h1>
          </div>
          
          {/* Meet Attorney Section Content */}
          <div className="w-full px-4 sm:px-6 md:px-20">
            <div className="max-w-[1400px] mx-auto mb-20 sm:mb-32 relative">
              {/* Video - Absolute positioning */}
              <div className="lg:absolute lg:-left-40 lg:top-0 flex flex-col items-center mb-8 lg:mb-0 lg:w-[380px]">
                  <video
                    src="/assets/aboutme.mp4"
                    className="rounded-lg shadow-md mb-6 w-[360px] sm:w-[380px] h-[270px] sm:h-[285px] object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={handleVideoError}
                  >
                    <source src="/assets/aboutme.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <a href="/services">
                    <button className="bg-[#D4A574] text-white px-6 sm:px-10 py-3 sm:py-5 rounded-lg font-bold text-base sm:text-lg shadow-lg hover:bg-[#C9995E] hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full max-w-[360px] sm:max-w-[380px]">
                      VIEW PRACTICE AREAS
                    </button>
                  </a>
              </div>

              {/* Text Content - Truly centered */}
              <div className="flex justify-center w-full">
                <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed space-y-4 sm:space-y-5 max-w-3xl px-4" style={{ fontFamily: "'Source Sans Pro', 'Inter', sans-serif" }}>
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
            </div>
          </div>
        </section>

        {/* Section 2: Recognition & Accolades */}
        <section className="w-full">
          <div className="h-[120px] sm:h-[140px] flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-['Playfair_Display',_'Georgia',_serif]">Recognition & Accolades</h2>
          </div>

          {/* Achievement and Membership Badges Section */}
          <div className="w-full">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-20 mt-8 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="relative bg-[#EBD2AE] border-2 border-[#c9ab88] shadow-md hover:shadow-lg transition-shadow duration-300 h-[80px]">
                      <div className="flex items-center px-6 h-full">
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
                    <div className="relative bg-[#EBD2AE] border-2 border-[#c9ab88] shadow-md hover:shadow-lg transition-shadow duration-300 h-[80px]">
                      <div className="flex items-center px-6 h-full">
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

          {/* Awards Section */}
          <div className="w-full">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-20 mb-20 sm:mb-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ohio State Bar Association Award */}
                <div className="bg-[#EBD2AE] border-2 border-[#c9ab88] shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg h-[240px]">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="text-[#4b3d2f] mr-4 flex-shrink-0 mt-1">
                        <Scale size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 leading-tight">
                          Ohio State Bar Association: Leadership Academy – 2023
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          Received the most nominations in the Academy's history. Selected as 1 of 17 attorneys statewide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CALI Award */}
                <div className="bg-[#EBD2AE] border-2 border-[#c9ab88] shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg h-[240px]">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="text-[#4b3d2f] mr-4 flex-shrink-0 mt-1">
                        <GraduationCap size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 leading-tight">
                          CALI Award Recipient – 2017
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
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
          <div className="h-[100px] sm:h-[120px] flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-['Playfair_Display',_'Georgia',_serif]">Recommendations</h2>
          </div>
          <div className="w-full">
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
          </div>
        </section>
      </div>
    </>
  );
}