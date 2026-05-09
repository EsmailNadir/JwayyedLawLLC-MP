'use client';

import React from 'react';
import Link from 'next/link';
import {
  Star,
  Phone,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Scale,
  Clock,
  MessageSquare,
  Gavel,
  Car,
  HeartPulse,
  Briefcase,
  FileText,
  ChevronDown,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';

const reviews = [
  {
    name: 'aleasha waldron',
    rating: 5,
    platform: 'Google',
    text: "Jay went above and beyond to try and ensure the best possible outcome. The courts wanted to lock me up but Jay got it down to just a fine! Thank you so much! If you want the best then call JJay!!",
  },
  {
    name: 'Fatima Verdi',
    rating: 5,
    platform: 'Google',
    text: 'Really great experience, everything was done seamlessly and with great communication. I would highly recommend Jwayyed Law to anyone and I cannot thank them enough!',
  },
  {
    name: 'Bruce Burns',
    rating: 5,
    platform: 'Google',
    text: "Jwayyed Law was amazing, really saved me. Always answered my calls even after hours. I'd definitely use him again. Got my charges dropped significantly. Thank you.",
  },
  {
    name: 'Kathryn',
    rating: 5,
    platform: 'Google',
    text: 'I had an excellent experience working with Jwayyed and would highly recommend his services to anyone in need of strong, reliable legal representation. From the beginning, he demonstrated an understanding of my situation and kept the cost reasonable throughout the entire process.',
  },
  {
    name: 'Damn Quanboi',
    rating: 5,
    platform: 'Google',
    text: "I was getting a runaround from other attorneys that rushed me, but this guy sat on the phone with me for almost 2 hours on a Sunday to get me caught up with all my cases — even though I couldn't pay him. I needed help and he 100% helped me find every case that I needed handled.",
  },
  {
    name: 'Wes Potts',
    rating: 5,
    platform: 'Google',
    text: "This law firm is excellent. I am an owner of a S-Corp and as such I am prevented from representing my business in court as it's a corporation and I am not an attorney. That part was frustrating, however Jwayyed Law handled my small claims case with complete professionalism. Highly recommend.",
  },
  {
    name: 'Damilola Celina Fashina',
    rating: 5,
    platform: 'Google',
    text: "I'm very grateful for the support and expertise my lawyer provided during my DUI case. From the beginning, they were clear, patient, and confident in handling my situation. Thanks to their hard work, my charge was dropped.",
  },
  {
    name: 'Jayden Wells',
    rating: 5,
    platform: 'Google',
    text: 'Great guy, came all the way from Columbus to get my ticket taken care of. 10/10.',
  },
  {
    name: 'Steelo Fre',
    rating: 5,
    platform: 'Google',
    text: 'Really did a great job on my CDL ticket. I would recommend you go with Jwayyed for any court case — very reasonable on price.',
  },
  {
    name: 'AJ H',
    rating: 5,
    platform: 'Google',
    text: 'Jwayyed Law is the best in the land. Very professional, precise and outright grounded. Very trusted and reputable source. You can put full faith with this one. No regrets!',
  },
  {
    name: 'Terry',
    rating: 5,
    platform: 'Google',
    text: "Super nice guy. Didn't hesitate to text, email or call back right away. Was very polite and knowledgeable about the law. Worked his magic before court even started. Definitely took care of business. Very reasonable rate as well. Would definitely recommend him.",
  },
  {
    name: 'Lori',
    rating: 5,
    platform: 'Google',
    text: 'I was not in the position to dish out thousands of dollars for an attorney when I truly needed one. Jwayyed Law made me feel at ease, less ashamed, and walked me through step by step everything that would be happening. I was scared and he made the whole process so much less overwhelming.',
  },
  {
    name: 'Jay Mayberry',
    rating: 5,
    platform: 'Google',
    text: 'Highly recommend Jwayyed got my second OVI dropped down to a reckless op. Very knowledgeable and professional.',
  },
  {
    name: 'Allison Tharan',
    rating: 5,
    platform: 'Google',
    text: 'Amazing job!! He got it dropped to a reckless operation, the fine reduced to 1/3 of what it was going to be, no jail time and got my license back. Best lawyer in the land!!',
  },
  {
    name: 'Mustang Guru',
    rating: 5,
    platform: 'Google',
    text: 'If he could cover 50 states he would be the only guy I choose. This attorney got a serious CDL violation down to a moving violation in the matter of one business day.',
  },
  {
    name: 'Yazen Karajat',
    rating: 5,
    platform: 'Google',
    text: 'Jwayyed Jwayyed is a rare kind of attorney—fierce in advocacy, compassionate with clients, and deeply committed to justice.',
  },
];

const MAX_REVIEW_LENGTH = 230;
const REVIEW_START_LENGTH = 120;
const REVIEW_END_LENGTH = 80;

function truncateReview(text: string): string {
  if (text.length <= MAX_REVIEW_LENGTH) return text;
  const start = text.slice(0, REVIEW_START_LENGTH).trimEnd();
  const end = text.slice(-REVIEW_END_LENGTH).trimStart();
  return `${start}… ${end}`;
}

const practiceAreas = [
  {
    icon: Gavel,
    title: 'Criminal Defense',
    blurb: 'Felonies, misdemeanors, and serious charges defended with strategy.',
    href: '/criminal-defense',
  },
  {
    icon: Car,
    title: 'OVI / DUI Defense',
    blurb: 'First-time and repeat OVI/DUI charges. License and record protection.',
    href: '/ovi-dui-defense',
  },
  {
    icon: HeartPulse,
    title: 'Personal Injury',
    blurb: 'Auto, slip-and-fall, and negligence claims. No fee unless we win.',
    href: '/personal-injury',
  },
  {
    icon: Scale,
    title: 'Civil Litigation',
    blurb: 'Disputes, contracts, appeals, and complex civil matters.',
    href: '/civil',
  },
  {
    icon: Briefcase,
    title: 'Business Law',
    blurb: 'LLC formation, contracts, and counsel for Ohio entrepreneurs.',
    href: '/business',
  },
  {
    icon: FileText,
    title: 'Estate Planning & Trusts',
    blurb: 'Wills, trusts, powers of attorney, and probate guidance.',
    href: '/trusts',
  },
];

const differentiators = [
  {
    icon: Shield,
    title: 'Aggressive Advocacy',
    body: 'Strategic, prepared representation in every Ohio court we serve.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Communication',
    body: 'You speak with the attorney handling your case — not a screening service.',
  },
  {
    icon: Clock,
    title: '24/7 Responsiveness',
    body: 'Calls, texts, and emails answered after hours and on weekends.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparent Pricing',
    body: 'Free consultations and reasonable, predictable rates from day one.',
  },
];

const outcomes = [
  {
    label: 'OVI Reduced',
    headline: 'OVI → Reckless Operation',
    body: 'Charge reduced, license preserved, no jail time, fine cut to one-third.',
  },
  {
    label: 'Charges Dismissed',
    headline: 'Speeding + OVI Dismissed',
    body: 'Evidence challenged on procedural grounds. Record kept clean.',
  },
  {
    label: 'CDL Protected',
    headline: 'CDL Violation → Moving Violation',
    body: 'Resolved in one business day; suspension and employment impact avoided.',
  },
];

const values = [
  {
    word: 'Prepared.',
    body: 'Strategy and case work begin the moment you call.',
  },
  {
    word: 'Reachable.',
    body: 'Speak directly with the attorney handling your matter.',
  },
  {
    word: 'Transparent.',
    body: 'Honest pricing and clear expectations from day one.',
  },
];

export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 [font-family:var(--font-dm-sans),'DM_Sans',sans-serif]">
      {/* ======================= HERO ======================= */}
      <section className="relative h-[calc(100vh-65px)] min-h-[560px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover hidden sm:block"
          >
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover block sm:hidden"
          >
            <source src="/videos/mobile-web-banner.mp4" type="video/mp4" />
          </video>
          {/* Refined gradient: deep navy → black, with subtle copper glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/65 to-slate-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.12),transparent_60%)]" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-white text-center">
          <div className="max-w-5xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
              <span className="h-px w-8 bg-[#b87333]" />
              <span className="[font-family:var(--font-dm-sans)] text-[0.7rem] sm:text-xs tracking-[0.35em] uppercase text-[#e8c8a0] font-medium">
                Ohio Law Firm · Est. Columbus
              </span>
              <span className="h-px w-8 bg-[#b87333]" />
            </div>

            {/* H1 */}
            <h1 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold leading-[1.05] tracking-tight mb-5 sm:mb-7">
              Defending Your Rights.
              <br />
              <span className="text-[#e8c8a0]">Building Your Future.</span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
              Strategic representation across Ohio in criminal defense, OVI/DUI, personal injury, civil, business, and estate matters. Free, confidential consultations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Link href="/contact" className="w-full sm:w-auto group">
                <button className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b87333] hover:bg-[#a66628] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-md font-semibold text-base sm:text-lg shadow-xl shadow-black/30 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c8a0] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                  Free Consultation
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </Link>
              <a href={PHONE_TEL} className="w-full sm:w-auto">
                <button className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/40 hover:border-white text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-md font-semibold text-base sm:text-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </button>
              </a>
            </div>

            {/* Trust row */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#e8c8a0] text-[#e8c8a0]" />
                ))}
              </div>
              <span className="text-slate-200/85">
                <span className="font-semibold text-white">60+</span> five-star Google reviews
              </span>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-white/60">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ======================= VALUES STRIP ======================= */}
      <section className="bg-slate-950 text-white border-y border-[#b87333]/20" aria-label="Our principles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
            {values.map((v, i) => (
              <div
                key={v.word}
                className={`text-center md:text-left md:pl-6 ${
                  i > 0 ? 'md:border-l md:border-white/10' : ''
                }`}
              >
                <div className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-4xl sm:text-5xl font-semibold text-[#b87333] leading-none mb-3 tracking-tight">
                  {v.word}
                </div>
                <div className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xs mx-auto md:mx-0">
                  {v.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= ABOUT / WHY US ======================= */}
      <section className="w-full py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#b87333]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#b87333] font-semibold">
                About the Firm
              </span>
              <span className="h-px w-8 bg-[#b87333]" />
            </div>
            <h2 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-3xl sm:text-4xl lg:text-[3rem] font-semibold leading-[1.1] tracking-tight text-slate-900 mb-5">
              Personal advocacy.
              <br />
              Strategic results.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
              Jwayyed Law LLC represents Ohioans in their hardest moments — when a charge, a lawsuit, or a life decision can shape the years ahead. Every case receives the attention of an attorney who knows the courts, the prosecutors, and how to move a file toward the best possible outcome.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10">
              We serve Columbus, Cincinnati, Dayton, and counties across Ohio with a single standard: prepared, transparent, and reachable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-10 text-left">
            {differentiators.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-md bg-[#b87333]/10 text-[#b87333] flex items-center justify-center">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/our-law-firm/about-us"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold border-b-2 border-[#b87333] pb-1 hover:text-[#b87333] transition-colors duration-200 group"
            >
              Learn more about our firm
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= PRACTICE AREAS ======================= */}
      <section className="w-full py-20 sm:py-28 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#b87333]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#b87333] font-semibold">
                What We Do
              </span>
              <span className="h-px w-8 bg-[#b87333]" />
            </div>
            <h2 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-4">
              Practice Areas
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Focused experience across the matters that most often shape an Ohioan&apos;s record, finances, and future.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {practiceAreas.map(({ icon: Icon, title, blurb, href }) => (
              <Link
                key={title}
                href={href}
                className="group cursor-pointer relative bg-white rounded-lg p-7 border border-slate-200 hover:border-[#b87333] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b87333] focus-visible:ring-offset-2"
              >
                <div className="w-12 h-12 rounded-md bg-slate-900 text-[#e8c8a0] group-hover:bg-[#b87333] group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-xl font-semibold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{blurb}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b87333]">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-[#b87333] font-medium transition-colors duration-200 group"
            >
              See all services
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= OUTCOMES ======================= */}
      <section className="relative w-full py-20 sm:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,115,51,0.18),transparent_55%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#b87333]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#e8c8a0] font-semibold">
                  Recent Outcomes
                </span>
              </div>
              <h2 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-4">
                Results that protect records, licenses, and livelihoods.
              </h2>
              <p className="text-slate-300 leading-relaxed">
                A representative sample of resolutions secured for clients across Ohio. Past results do not guarantee a future outcome.
              </p>
            </div>
            <Link
              href="/our-law-firm/case-results"
              className="inline-flex items-center gap-2 text-[#e8c8a0] hover:text-white font-semibold transition-colors duration-200 group"
            >
              View case results
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {outcomes.map((o) => (
              <div
                key={o.headline}
                className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-7 hover:border-[#b87333]/60 transition-colors duration-300"
              >
                <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#b87333] to-transparent" aria-hidden="true" />
                <span className="inline-block text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-[#e8c8a0] bg-[#b87333]/10 border border-[#b87333]/30 rounded-full px-3 py-1 mb-5">
                  {o.label}
                </span>
                <h3 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-xl sm:text-2xl font-semibold text-white mb-3 leading-snug">
                  {o.headline}
                </h3>
                <p className="text-slate-300 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= TESTIMONIALS ======================= */}
      <section className="w-full py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#b87333]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#b87333] font-semibold">
                Client Voices
              </span>
              <span className="h-px w-8 bg-[#b87333]" />
            </div>
            <h2 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
              What clients say
            </h2>
            <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b87333] text-[#b87333]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-900">5.0</span>
              <span className="h-4 w-px bg-slate-300" aria-hidden="true" />
              <span className="text-sm text-slate-600">60+ Google reviews</span>
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
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white rounded-xl border border-slate-200 p-6 sm:p-7 h-[320px] flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-[#b87333]" aria-hidden="true" />
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-0.5" aria-hidden="true">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#b87333] text-[#b87333]" />
                      ))}
                    </div>
                    <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-slate-500">
                      {review.platform}
                    </span>
                  </div>
                  <blockquote className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-base sm:text-[1.05rem] text-slate-700 leading-relaxed flex-1 min-h-0 overflow-hidden">
                    &ldquo;{truncateReview(review.text)}&rdquo;
                  </blockquote>
                  <cite className="text-sm font-semibold text-slate-900 not-italic border-t border-slate-200 pt-4 mt-4 flex-shrink-0">
                    — {review.name}
                  </cite>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ======================= FINAL CTA ======================= */}
      <section className="relative w-full py-20 sm:py-24 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.22),transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-5">
            Don&apos;t face this alone.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10">
            Free, confidential consultations — calls, texts, and emails answered after hours and on weekends.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="w-full sm:w-auto group">
              <button className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b87333] hover:bg-[#a66628] text-white px-8 py-4 rounded-md font-semibold text-base sm:text-lg shadow-xl shadow-black/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c8a0] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </Link>
            <a href={PHONE_TEL} className="w-full sm:w-auto">
              <button className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border border-white/40 hover:border-white text-white px-8 py-4 rounded-md font-semibold text-base sm:text-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                <Phone className="w-5 h-5" aria-hidden="true" />
                {PHONE_DISPLAY}
              </button>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-[#b87333]" aria-hidden="true" />
            <span>100 E. Campus View Blvd, Suite #250, Columbus, OH 43235</span>
          </div>
        </div>
      </section>

      {/* ======================= SEO LINKS ======================= */}
      <section className="w-full py-16 sm:py-20 bg-white border-t border-slate-100" aria-label="Practice areas and counties">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-2xl sm:text-3xl font-semibold text-slate-900 mb-3 text-center">
            Practice Areas & Service Areas
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Jwayyed Law LLC provides experienced legal representation throughout Ohio.
          </p>

          <h3 className="text-xs tracking-[0.25em] uppercase text-[#b87333] font-semibold mb-4 text-center">
            Areas of Practice
          </h3>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { name: 'Criminal Defense', href: '/criminal-defense' },
              { name: 'First OVI / DUI', href: '/ovi-dui-defense/first-ovi' },
              { name: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
              { name: 'Personal Injury', href: '/personal-injury' },
              { name: 'Civil Litigation', href: '/civil' },
              { name: 'Civil Appeals', href: '/civil/appeals' },
              { name: 'Business Law', href: '/business' },
              { name: 'LLC Formation', href: '/business/llc-formation' },
              { name: 'Other Services', href: '/other-services' },
              { name: 'Trusts', href: '/trusts' },
              { name: 'All Services', href: '/services' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-[#b87333] hover:text-[#b87333] hover:bg-[#b87333]/5 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <h3 className="text-xs tracking-[0.25em] uppercase text-[#b87333] font-semibold mb-4 text-center">
            Counties &amp; Courts We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: 'Franklin County', href: '/courts/franklin-county' },
              { name: 'Delaware County', href: '/courts/delaware-county' },
              { name: 'Butler County', href: '/courts/butler-county' },
              { name: 'Greene County', href: '/courts/greene-county' },
              { name: 'Montgomery County', href: '/courts/montgomery-county' },
              { name: 'Pickaway County', href: '/courts/pickaway-county' },
              { name: 'Athens County', href: '/courts/athens-county' },
              { name: 'Morrow County', href: '/courts/morrow-county' },
              { name: 'Clinton County', href: '/courts/clinton-county' },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-slate-200 text-sm text-slate-600 hover:border-[#b87333] hover:text-[#b87333] transition-colors duration-200"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
