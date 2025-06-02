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
} from "lucide-react";

export default function AboutPage() {
  const achievements = [
    { icon: <GraduationCap size={32} />, label: "Juris Doctor from Capital University" },
    { icon: <Gavel size={32} />, label: "Municipal Court Prosecutor" },
    { icon: <Users size={32} />, label: "OSBA Leadership Academy Member" },
    { icon: <Briefcase size={32} />, label: "Former Franklin County Defender" },
  ];

  const testimonials = [
    {
      text: "I had the pleasure of working with Jwayyed Jwayyed, also known as JJ Law Ohio, for legal assistance with my company, Wireless Bros LLC... I wholeheartedly recommend him to anyone seeking a knowledgeable and trustworthy lawyer for their business needs.",
      author: "Abdullah Rasheed",
      title: "President, Wireless Bros LLC"
    },
    {
      text: "Back in June of 2023, I reached out to Jwayyed for his law services to help deal with a business. It was the best thing I could have done. Jwayyed used his multitude of expertise to get my family and I quick results and solutions that we needed when we were trying to deal with a frustrating business who started to ignore our calls, emails and texts for months. He always had my family's best interests in mind, he replied to all my emails more promptly than most people answer text messages, called me once a week to check in on the case and made sure that both my wife and I were happy with the results. I couldn't have asked for a better person to represent us.",
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
      title: "Special Victims Bureau Detective at City of Columbus ~ Division of Police"
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
      text: "JJ served as the Mayor's Court Prosecutor of Grove City over the past 2+ years. Serving as Mayor, I was impressed by his personal commitment to thoroughly review each case in order to resolve the issues. JJ worked extremely well with the Court Magistrate and the Mayor's court clerks. He is honorable and trustworthy in representing the City. I would highly recommend JJ as a prosecutor.",
      author: "Ike Stage",
      title: "Mayor at Grove City"
    },
    {
      text: "If genuine care was a person it would be Jwayyed. There's no one that I know that cares more for their craft than him. He's always been locked in since the day we've met. He continues to be a student of the game and constantly is trying to better himself to help in any way he can. For someone who has seen Jwayyed struggle to get to where he is, I have firsthand knowledge of the commitment he has to be great and to understand every nuance of his respected field.",
      author: "Faiz Joseph",
      title: "Sr. Customer Success Manager @Amazon"
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

  return (
    <div className="bg-[#fffaf4] min-h-screen px-6 py-12 md:px-20 text-gray-800 font-serif">
      <div className="max-w-6xl mx-auto mb-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Meet Attorney Jwayyed</h1>
        <div className="flex flex-col lg:flex-row gap-20 items-start text-left">
          <div className="flex flex-col items-center">
            <img
              src="/attorney.jpg"
              alt="Attorney Jwayyed"
              className="rounded-2xl w-[300px] md:w-[350px] shadow-md mb-6"
            />
            <Link href="/services">
              <button className="bg-[#EBD2AE] text-gray-800 px-6 py-3 rounded-md font-semibold shadow hover:bg-[#e6c799] transition">
                VIEW PRACTICE AREAS
              </button>
            </Link>
          </div>

          <div className="flex-1">
            <p className="text-lg mb-6 text-gray-600">Lifelong Ohio native. Experienced advocate. Proven results.</p>
            <p className="mb-4 leading-relaxed">Attorney Jwayyed is a lifelong Ohio native. Born in Cincinnati and raised in Akron...</p>
            <p className="mb-6 leading-relaxed">While at Capital, he gained diverse legal experience...</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {achievements.map((item, i) => (
                <div key={i} className="bg-[#EBD2AE] p-4 rounded-lg shadow-sm text-center text-gray-800">
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="relative w-full h-96 mb-10">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Attorney Jwayyed ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index ? "bg-gray-800 shadow-md" : "bg-gray-400 hover:bg-gray-600"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Recognition & Accolades</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 items-start text-left">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">Ohio State Bar Association: Leadership Academy – 2023</h3>
            <p className="text-gray-700 leading-relaxed">Received the most nominations in the Academy's history. Selected as 1 of 17 attorneys statewide.</p>
          </div>
          <div className="flex justify-center">
            <video className="rounded-lg shadow-md w-full max-w-sm" controls>
              <source src="/jwayyed-speech.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-2">CALI Award Recipient – 2017</h3>
            <p className="text-gray-700 leading-relaxed">Excellence in Interviewing & Counseling (Top scorer across 100+ US law schools).</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-16 -mx-6 md:-mx-20 -mb-12">
        <div className="max-w-6xl mx-auto px-6 md:px-20 text-center">
          <h2 className="text-4xl font-bold mb-8">Recommendations</h2>
          <div className="relative">
            <div className="text-center mb-8 min-h-[400px] flex flex-col justify-center">
              <blockquote className="text-lg italic leading-relaxed mb-6">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <p className="font-semibold">
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
                <ChevronLeft size={24} />
              </button>
              <span className="text-sm text-gray-300">
                {currentTestimonial + 1} of {testimonials.length}
              </span>
              <button
                onClick={() =>
                  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                }
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="flex justify-center space-x-2 mt-6">
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
    </div>
  );
}
