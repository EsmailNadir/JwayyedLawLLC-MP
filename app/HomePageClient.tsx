'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const practiceAreas = [
  'Criminal Defense',
  'OVI/DUI Defense',
  'Personal Injury',
  'Business Law',
  'Estate Planning',
  'Civil Litigation',
];

function RotatingSubtitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'enter' | 'visible' | 'exit'>('enter');

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === 'enter') {
      timeout = setTimeout(() => setPhase('visible'), 50);
    } else if (phase === 'visible') {
      timeout = setTimeout(() => setPhase('exit'), 2200);
    } else if (phase === 'exit') {
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % practiceAreas.length);
        setPhase('enter');
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  const transform =
    phase === 'enter'
      ? 'translate-y-8 opacity-0 scale-95'
      : phase === 'visible'
        ? 'translate-y-0 opacity-100 scale-100'
        : '-translate-y-8 opacity-0 scale-95';

  return (
    <div className="mb-4 sm:mb-8 flex flex-col items-center">
      <div className="w-16 h-[1px] bg-[#b87333]/60 mb-4 sm:mb-5" />
      <div className="h-[2rem] sm:h-[2.5rem] md:h-[2.75rem] flex items-center justify-center overflow-hidden">
        <p
          className={`font-['Inter',_'Arial',_sans-serif] text-[1.1rem] sm:text-xl md:text-2xl lg:text-[1.65rem] font-semibold tracking-[0.25em] uppercase drop-shadow-2xl transition-all duration-500 ease-out ${transform}`}
          style={{
            color: '#e8c8a0',
            textShadow: '0 0 20px rgba(184, 115, 51, 0.3)',
          }}
        >
          {practiceAreas[currentIndex]}
        </p>
      </div>
    </div>
  );
}

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-[#2c2c2c] text-white font-['Inter',_'Arial',_sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-[#b87333]">Jwayyed Law LLC</h3>
            <p className="text-gray-400 leading-relaxed">
              Serving Columbus, Cincinnati, Dayton, and throughout Ohio. Dedicated legal representation in criminal defense, traffic violations, and civil matters.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-gray-400 hover:text-[#b87333] transition-colors">About Us</Link></li>
              <li><Link href="/other-services" className="text-gray-400 hover:text-[#b87333] transition-colors">Our Services</Link></li>
              <li><Link href="/our-law-firm/our-attorneys" className="text-gray-400 hover:text-[#b87333] transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[#b87333] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#b87333] mt-1 flex-shrink-0" />
                <span className="text-gray-400">(614) 285-5482</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#b87333] mt-1 flex-shrink-0" />
                <span className="text-gray-400 break-all">jwayyedlawllc@outlook.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#b87333] mt-1 flex-shrink-0" />
                <span className="text-gray-400">100 E. Campus View Boulevard, Suite #250<br />Columbus, Ohio 43235</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Business Hours</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li>Mon–Fri: 9:00 AM – 5:00 PM</li>
              <li>Sat–Sun: Closed</li>
            </ul>
          </div>

          {/* Follow Us - Social Media */}
          <div className="space-y-4">
            <h4 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-3">
              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/jjlawohio?igsh=eW1uanhzNGh2YXV2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#363636] hover:bg-[#b87333] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-[#444] hover:border-[#b87333] group"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>

              {/* TikTok Button */}
              <a
                href="https://www.tiktok.com/@jjlawohio?_t=ZT-8yTuAG1sVr5&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#363636] hover:bg-[#b87333] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-[#444] hover:border-[#b87333] group"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#b87333]/25 mt-10 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Jwayyed Law LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const reviews = [
  // ~1 day ago
  {
    name: "aleasha waldron",
    rating: 5,
    platform: "Google",
    text: "Jay went above and beyond to try and ensure the best possible outcome. The courts wanted to lock me up but Jay got it down to just a fine! Thank you so much! If you want the best then call JJay!!"
  },
  {
    name: "Fatima Verdi",
    rating: 5,
    platform: "Google",
    text: "Really great experience, everything was done seamlessly and with great communication. I would highly recommend Jwayyed Law to anyone and I cannot thank them enough!"
  },
  {
    name: "Bruce Burns",
    rating: 5,
    platform: "Google",
    text: "Jwayyed Law was amazing, really saved me. Always answered my calls even after hours. I'd definitely use him again. Got my charges dropped significantly. Thank you."
  },
  {
    name: "Kathryn",
    rating: 5,
    platform: "Google",
    text: "I had an excellent experience working with Jwayyed and would highly recommend his services to anyone in need of strong, reliable legal representation. From the beginning, he demonstrated an understanding of my situation and kept the cost reasonable throughout the entire process."
  },
  // ~3 days ago
  {
    name: "Damn Quanboi",
    rating: 5,
    platform: "Google",
    text: "I was getting a runaround from other attorneys that rushed me, but this guy sat on the phone with me for almost 2 hours on a Sunday to get me caught up with all my cases — even though I couldn't pay him. I needed help and he 100% helped me find every case that I needed handled."
  },
  // ~1 week ago
  {
    name: "Wes Potts",
    rating: 5,
    platform: "Google",
    text: "This law firm is excellent. I am an owner of a S-Corp and as such I am prevented from representing my business in court as it's a corporation and I am not an attorney. That part was frustrating, however Jwayyed Law handled my small claims case with complete professionalism. Highly recommend."
  },
  // ~2 weeks ago
  {
    name: "Damilola Celina Fashina",
    rating: 5,
    platform: "Google",
    text: "I'm very grateful for the support and expertise my lawyer provided during my DUI case. From the beginning, they were clear, patient, and confident in handling my situation. Thanks to their hard work, my charge was dropped."
  },
  {
    name: "Jayden Wells",
    rating: 5,
    platform: "Google",
    text: "Great guy, came all the way from Columbus to get my ticket taken care of. 10/10."
  },
  // ~1 month ago
  {
    name: "Steelo Fre",
    rating: 5,
    platform: "Google",
    text: "Really did a great job on my CDL ticket. I would recommend you go with Jwayyed for any court case — very reasonable on price."
  },
  {
    name: "AJ H",
    rating: 5,
    platform: "Google",
    text: "Jwayyed Law is the best in the land. Very professional, precise and outright grounded. Very trusted and reputable source. You can put full faith with this one. No regrets!"
  },
  {
    name: "Fantom M",
    rating: 5,
    platform: "Google",
    text: "Absolutely incredible!! I can't recommend him enough. He's truly the best lawyer out there – a lifesaver!"
  },
  {
    name: "Terry",
    rating: 5,
    platform: "Google",
    text: "Super nice guy. Didn't hesitate to text, email or call back right away. Was very polite and knowledgeable about the law. Worked his magic before court even started. Definitely took care of business. Very reasonable rate as well. Would definitely recommend him. If I ever needed an attorney again I wouldn't hesitate to call him."
  },
  {
    name: "Sweet Tee",
    rating: 5,
    platform: "Google",
    text: "Was very professional, responded to every email and text quickly. Willing to travel from Columbus to Fairfield Ohio. His rates were reasonable and worked with us on making payments. Very knowledgeable and able to get everything reduced. Was worth every penny. I would recommend his services to everyone."
  },
  {
    name: "Lori",
    rating: 5,
    platform: "Google",
    text: "I was not in the position to dish out thousands of dollars for an attorney when I truly needed one. Jwayyed Law made me feel at ease, less ashamed, and walked me through step by step everything that would be happening. I was scared and he made the whole process so much less overwhelming."
  },
  // ~2 months ago
  {
    name: "Jay Mayberry",
    rating: 5,
    platform: "Google",
    text: "Highly recommend Jwayyed got my second OVI dropped down to a reckless op. Very knowledgeable and professional."
  },
  {
    name: "Nader Zidan",
    rating: 5,
    platform: "Google",
    text: "Outstanding experience from start to finish — Jwayyed explained everything clearly and handled the legal planning documents with care. The process was smooth and organized. I felt confident and supported the whole way and would highly recommend their services."
  },
  {
    name: "Youssef Saifi",
    rating: 5,
    platform: "Google",
    text: "I am very grateful to Jwayyed Law LLC for their excellent work on my case. From the beginning, they were professional, responsive, and gave me confidence during a stressful situation. Thanks to their experience and dedication, my case was dismissed, which was the best result I could hope for. I highly recommend them to anyone looking for a reliable and skilled defense lawyer."
  },
  {
    name: "Allison Tharan",
    rating: 5,
    platform: "Google",
    text: "Amazing job!! Would refer to anyone needing the help. I got an OVI and was looking at jail time, a big fine, and was about to lose my license. He got it dropped to a reckless operation, the fine reduced to 1/3 of what it was going to be, no jail time and got my license back. Best lawyer in the land!!"
  },
  // ~3 months ago
  {
    name: "Luke Lewis",
    rating: 5,
    platform: "Google",
    text: "I can't recommend Attorney Jwayyed enough. My incident happened on a Saturday night and I called him around 7 PM the next day. He answered right away and spent about 40 minutes on the phone with me, explaining everything and calming me down. He said, 'You're in good hands and everything will work out.' He was always available, responsive, and professional. He was able to reduce the outcome to the lowest penalty possible short of dismissal and truly cared about my situation. Thank you!!!!"
  },
  // ~4 months ago
  {
    name: "Derek Ramsey",
    rating: 5,
    platform: "Google",
    text: "I was traveling to the University of Cincinnati for my daughter's freshman move-in weekend. I hadn't had a drink since mid-July but I made a terrible decision on the road and was arrested for an OVI. JJ not only knew the law but he knew everyone in the system and could communicate effectively on my behalf. Most importantly, he calmed my nerves. Today I do not have an OVI on my record. I did not spend any more time in jail. I did not lose my license. I am blessed and forever grateful."
  },
  {
    name: "Mazi B",
    rating: 5,
    platform: "Google",
    text: "I had a case for an OVI, and Jwayyed was my attorney. I was super nervous at first but he guided me through it all, helped me understand all our options. A couple weeks later he let me know that he would be trying to drop my charges."
  },
  {
    name: "Manmohan Judge",
    rating: 5,
    platform: "Google",
    text: "I am a CDL holder. I got cited for an accident when the other vehicle hit mine. My employer did not believe it and put me on leave, turning my world upside down. I was lucky to find JJ. He fought for me. Answered the phone and texts at all hours."
  },
  // ~5 months ago
  {
    name: "Mustang Guru",
    rating: 5,
    platform: "Google",
    text: "If he could cover 50 states he would be the only guy I choose. This attorney got a serious CDL violation down to a moving violation in the matter of one business day. Very straightforward, friendly and tactical with cases. If you're in Ohio it's worth the money, saved me from a suspension."
  },
  {
    name: "Josh Gibson",
    rating: 5,
    platform: "Google",
    text: "JWAYYED, this gentleman here came through like a hurricane. As he tore my traffic case apart and dissected key evidence to dropping and reducing the charges I had. With my lengthy criminal record from past mistakes I had no bargain coming. I was picked up for speeding and because my car had the scent of marijuana, nothing on me or my person. I was asked to do a field sobriety test, due to injuries and pins and screws in my ankle I wasn't able to keep balance so I failed the test and was placed under arrest. With the help of JJ proving how I have changed my life a full 180 and providing evidence and proof that I still am on the right path, JJ got my speed ticket tossed out and the OVI dropped from a M1 to M4. I highly recommend!"
  },
  {
    name: "Lisa",
    rating: 5,
    platform: "Google",
    text: "Professional player who knows the Law! Will use again if I need to but hopefully will not be needed!! Will refer to others who might need a lawyer!!"
  },
  {
    name: "Whitney Yoder",
    rating: 5,
    platform: "Google",
    text: "He represented me and got my charges dismissed due to mistreatment of law enforcement."
  },
  {
    name: "Gabriel",
    rating: 5,
    platform: "Google",
    text: "Most attorneys take your money & leave you out to dry, I can assure you this is most certainly not the case with Mr. JJ! I knew I was facing an uphill battle & quite frankly didn't know of a strategy we could possibly put forward. This man completely took me off guard with the angles he attacked from so I know it was unexpected by the prosecution (think Johnnie Cochran). You really can't find better to entrust the fate of your case to. He goes far over & beyond. I was very pleasantly surprised. Trust me, this is the type of priceless legal aid money can't buy. He has a heart & will fight for you like you're his family. He did for me, I'm speaking from experience. You're in the best hands with him."
  },
  // ~6 months ago
  {
    name: "A. R.S.",
    rating: 5,
    platform: "Google",
    text: "I honestly can't say enough good things about this team. From start to finish, they were dedicated, responsive, and genuinely cared about helping me through every step of the process. It's rare to find people in this field who combine expertise with such compassion and integrity, but that's exactly what I found here. They always took the time to explain things clearly, checked in often, and made sure I felt supported and informed the entire way. I never once felt like just another case. They truly earned my trust, and I'm so grateful for their guidance and persistence. If you're looking for a legal team that actually shows up for you and does what they say they'll do, I can't recommend them enough."
  },
  // ~7 months ago
  {
    name: "Tooba M.",
    rating: 5,
    platform: "Google",
    text: "Eeman was so good at pulling me into the raffle and really brought my attention to protecting the rights of Ohio!"
  },
  {
    name: "Adnan Bashir",
    rating: 5,
    platform: "Google",
    text: "I had an excellent experience working with Jwayyed Law LLC. From the very first consultation, they were professional, knowledgeable, and genuinely cared about my case. They took the time to explain everything clearly and made me feel confident throughout the entire process. Communication was always prompt, and they handled my situation with expertise and attention to detail. I'm extremely satisfied with the outcome and highly recommend Jwayyed Law LLC to anyone in need of a reliable and dedicated attorney."
  },
  {
    name: "Ace Lomax",
    rating: 5,
    platform: "Google",
    text: "Great guy will fight for your freedom best experience ever thank you again God bless."
  },
  {
    name: "Omar Heif",
    rating: 5,
    platform: "Google",
    text: "Cool guys."
  },
  {
    name: "Ayesha Momin",
    rating: 5,
    platform: "Google",
    text: "Great!"
  },
  // ~8 months ago
  {
    name: "Rushdi Ziad",
    rating: 5,
    platform: "Google",
    text: "Working with Mr. Jwayyed was one of the best decisions I could have made. I was dealing with a ticket that had me really stressed, but he took over and handled everything with skill and professionalism. He was always quick to respond, explained every step clearly, and made sure I understood my options. What really stood out was how genuinely committed he was to getting the best outcome—and he delivered. The ticket was taken care of, and I couldn't be more relieved. If you need someone who knows the law, communicates well, and truly cares about your case, I highly recommend Jwayyed. He made a difficult situation so much easier to get through."
  },
  {
    name: "Mike Clement",
    rating: 5,
    platform: "Google",
    text: "I recently received a traffic ticket in Akron, and Jwayyed was instrumental in helping me avoid additional points on my license. From the start, he was very professional, responsive, and clearly knowledgeable about local traffic laws. He worked quickly to negotiate a reduced charge, and reduced points, which ultimately saved me from increased insurance rates and license penalties. His communication throughout the process kept me informed and confident in the outcome. I highly recommend his services to anyone facing traffic violations in the area."
  },
  // ~9 months ago
  {
    name: "Imdad Imdadova",
    rating: 5,
    platform: "Google",
    text: "Excellent legal representation! Attorney Jwayyed and his team were professional, knowledgeable, and dedicated to achieving the best outcome for my case. Highly recommend their services."
  },
  {
    name: "Heba El-Hosseiny",
    rating: 5,
    platform: "Google",
    text: "My experience with Jwayyed was incredible. He was attentive in the discovery phase of my case and made sure to keep me in the loop on all actions that were taken on my behalf."
  },
  // ~10 months ago
  {
    name: "Tammy Watts",
    rating: 5,
    platform: "Google",
    text: "He was very thorough, diligent, and responsive. He listened, outlined step-by-step how we would proceed, and always kept me informed of updates in a timely and professional manner."
  },
  {
    name: "Yazen Karajat",
    rating: 5,
    platform: "Google",
    text: "Jwayyed Jwayyed is a rare kind of attorney—fierce in advocacy, compassionate with clients, and deeply committed to justice."
  },
  {
    name: "Nott Billyy",
    rating: 5,
    platform: "Google",
    text: "Jwayyed is the real deal. Super easy to work with, chill but professional, and actually gets results."
  },
  {
    name: "Yasmine A",
    rating: 5,
    platform: "Google",
    text: "He was really helpful and easy to talk to. He made a stressful situation a lot less scary and took care of everything I needed."
  },
  // ~11 months ago
  {
    name: "Basil Jaradah",
    rating: 5,
    platform: "Google",
    text: "He finished the project in timely manner, and remained professional all the time, was thorough and picked up on the little details."
  },
  // ~2 years ago
  {
    name: "Abe Rashed",
    rating: 5,
    platform: "Google",
    text: "He got me a better result than the first attorney I had spoken to had promised. I'm happy to say he will be my attorney going forward."
  },
  {
    name: "Ahmed Kahook",
    rating: 5,
    platform: "LinkedIn",
    text: "He went above and beyond to get us a quick resolution. He always had my family's best interests in mind and replied to emails more promptly than most people answer text messages."
  },
  {
    name: "Abraham Rashed",
    rating: 5,
    platform: "LinkedIn",
    text: "He was able to quickly identify the problems with my situation and got me a better result than the first attorney had promised."
  },
  {
    name: "Leonard Milner",
    rating: 5,
    platform: "LinkedIn",
    text: "Jwayyed was proactive, diligent, knowledgeable, courageous, steadfast and unmovable in getting justice. I would definitely recommend him for any litigation concerns."
  },
  {
    name: "Samantha Pugh",
    rating: 5,
    platform: "LinkedIn",
    text: "Jwayyed is consistently professional, knowledgeable, reasonable, and so easy to work with. He is always prepared and organized."
  },
  {
    name: "Faiz Joseph",
    rating: 5,
    platform: "LinkedIn",
    text: "If genuine care was a person it would be Jwayyed. There's no one that I know that cares more for their craft than him."
  }
];

const MAX_REVIEW_LENGTH = 230;
const REVIEW_START_LENGTH = 120;
const REVIEW_END_LENGTH = 80;

function truncateReview(text: string): string {
  if (text.length <= MAX_REVIEW_LENGTH) {
    return text;
  }

  const start = text.slice(0, REVIEW_START_LENGTH).trimEnd();
  const end = text.slice(-REVIEW_END_LENGTH).trimStart();

  return `${start}... ${end}`;
}

export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-white font-['Georgia',_'Times_New_Roman',_serif]">


      {/* Hero Section with Video Background */}
      <section className="relative h-[calc(100vh-65px)] min-h-[440px] overflow-hidden pb-4 lg:pb-0">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          {/* Desktop Video - Hidden on mobile */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover hidden sm:block"
            style={{
              objectPosition: 'center center',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto'
            }}
          >
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>

          {/* Mobile Video - Only visible on mobile */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover block sm:hidden"
            style={{
              objectPosition: 'center center',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto'
            }}
          >
            <source src="/videos/mobile-web-banner.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-white text-center pt-6 sm:pt-0">
          <div className="max-w-5xl mx-auto mb-6 sm:mb-12 animate-fade-in">
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-[2.2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3.5 sm:mb-6 drop-shadow-2xl">
              Defending Your Rights. Building Your Future.
            </h1>
            <RotatingSubtitle />
          </div>

          {/* Hero CTA: single secondary action to explore services */}
          <div className="flex justify-center mb-8 sm:mb-16">
            <Link href="/services" className="w-full sm:w-auto">
              <button className="font-['Inter',_'Arial',_sans-serif] w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 font-semibold text-base sm:text-lg shadow-2xl">
                View Our Services
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Dedicated Legal Excellence
              </h2>
              <p className="font-['Inter',_'Arial',_sans-serif] text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                With years of experience in Ohio courts, Attorney Jwayyed provides dedicated legal representation across criminal defense, traffic violations, and civil matters. Every case receives personal attention and strategic advocacy.
              </p>
              <p className="font-['Inter',_'Arial',_sans-serif] text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Our firm is built on the foundation of protecting your rights, providing clear communication, and achieving the best possible outcomes for our clients.
              </p>
              <Link href="/about">
                <button className="font-['Inter',_'Arial',_sans-serif] bg-[#2c2c2c] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-[#3a3a3a] transform hover:scale-105 transition-all duration-200 font-medium text-base sm:text-lg shadow-lg">
                  Learn More About Our Firm
                </button>
              </Link>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="bg-[#b87333] rounded-lg p-6 sm:p-8 text-white">
                <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-xl sm:text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 font-['Inter',_'Arial',_sans-serif]">
                  <li className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">✓</span>
                    <span className="text-sm sm:text-base">Proven track record of successful case outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">✓</span>
                    <span className="text-sm sm:text-base">Personal attention to every client</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">✓</span>
                    <span className="text-sm sm:text-base">Clear communication throughout your case</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl sm:text-2xl mr-3">✓</span>
                    <span className="text-sm sm:text-base">Aggressive advocacy for your rights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="w-full py-16 sm:py-20 bg-[#2c2c2c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4">
              Client Testimonials
            </h2>
            <p className="font-['Inter',_'Arial',_sans-serif] text-lg sm:text-xl text-gray-400 mb-4">
              Real experiences from clients we&apos;ve helped
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b87333] text-[#b87333]" />
                ))}
              </div>
              <span className="font-['Inter',_'Arial',_sans-serif] text-sm font-semibold text-[#b87333]">
                60+ five-star reviews on Google
              </span>
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-[300px] flex flex-col">
                  <div className="flex-shrink-0">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#b87333] text-[#b87333]" />
                      ))}
                    </div>
                    <span className="font-['Inter',_'Arial',_sans-serif] text-xs font-medium text-[#b87333] bg-[#b87333]/10 px-2.5 py-1 rounded-full w-fit block mb-4">
                      {review.platform}
                    </span>
                  </div>
                  <blockquote className="font-['Georgia',_'Times_New_Roman',_serif] text-sm sm:text-base text-gray-300 leading-relaxed flex-1 min-h-0 overflow-hidden italic">
                    &ldquo;{truncateReview(review.text)}&rdquo;
                  </blockquote>
                  <cite className="font-['Inter',_'Arial',_sans-serif] text-sm font-semibold text-white not-italic border-t border-white/10 pt-4 flex-shrink-0 mt-auto">
                    — {review.name}
                  </cite>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* SEO: Our Practice Areas - internal links for crawl */}
      <section className="w-full py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center">
            Our Practice Areas
          </h2>
          <p className="font-['Inter',_'Arial',_sans-serif] text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Jwayyed Law LLC provides experienced legal representation throughout Ohio in the following practice areas:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Link href="/criminal-defense" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">Criminal Defense</Link>
            <Link href="/ovi-dui-defense/first-ovi" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">First OVI / DUI</Link>
            <Link href="/ovi-dui-defense" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">OVI / DUI Defense</Link>
            <Link href="/personal-injury" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">Personal Injury</Link>
            <Link href="/civil" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">Civil Litigation</Link>
            <Link href="/civil/appeals" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">Civil Appeals</Link>
            <Link href="/business" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">Business Law</Link>
            <Link href="/business/llc-formation" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">LLC Formation</Link>
            <Link href="/other-services" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">Other Services</Link>
            <Link href="/trusts" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">Trusts</Link>
            <Link href="/services" className="block p-4 border border-gray-200 rounded-lg hover:border-[#b87333] hover:shadow-md transition-all font-medium text-gray-900">All Services</Link>
          </div>
          <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl font-semibold text-gray-900 mb-6 text-center">
            Counties &amp; Courts We Serve
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link href="/courts/franklin-county" className="block p-3 border border-gray-200 rounded-lg hover:border-[#b87333] transition-all text-gray-700 text-sm">Franklin County</Link>
            <Link href="/courts/delaware-county" className="block p-3 border border-gray-200 rounded-lg hover:border-[#b87333] transition-all text-gray-700 text-sm">Delaware County</Link>
            <Link href="/courts/butler-county" className="block p-3 border border-gray-200 rounded-lg hover:border-[#b87333] transition-all text-gray-700 text-sm">Butler County</Link>
            <Link href="/courts/greene-county" className="block p-3 border border-gray-200 rounded-lg hover:border-[#b87333] transition-all text-gray-700 text-sm">Greene County</Link>
            <Link href="/courts/montgomery-county" className="block p-3 border border-gray-200 rounded-lg hover:border-[#b87333] transition-all text-gray-700 text-sm">Montgomery County</Link>
            <Link href="/courts/pickaway-county" className="block p-3 border border-gray-200 rounded-lg hover:border-[#b87333] transition-all text-gray-700 text-sm">Pickaway County</Link>
            <Link href="/courts/athens-county" className="block p-3 border border-gray-200 rounded-lg hover:border-[#b87333] transition-all text-gray-700 text-sm">Athens County</Link>
            <Link href="/courts/morrow-county" className="block p-3 border border-gray-200 rounded-lg hover:border-[#b87333] transition-all text-gray-700 text-sm">Morrow County</Link>
            <Link href="/courts/clinton-county" className="block p-3 border border-gray-200 rounded-lg hover:border-[#b87333] transition-all text-gray-700 text-sm">Clinton County</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
