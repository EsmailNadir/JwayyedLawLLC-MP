'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import NCDDBadge from '@/components/NCDDBadge';
import SectionEyebrow from '@/components/SectionEyebrow';
import TestimonialWall from '@/components/TestimonialWall';
import { ReviewSummaryCard } from '@/components/ui/card-2';
import {
  BTN_PRIMARY,
  BTN_SECONDARY_ON_DARK,
  BTN_SECONDARY_ON_LIGHT,
  BTN_LG,
  BTN_MD,
  SECTION_Y,
  H2,
} from '@/components/uiClasses';

const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';
const ADDRESS = '100 E. Campus View Blvd, Suite 250, Columbus, OH 43235';
/** Matches the "100+ five-star Google reviews" claim used elsewhere on the site. */
const REVIEW_TOTAL = 100;

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
    blurb: 'Auto, slip-and-fall, and negligence claims. Contingency-fee representation.',
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
    title: 'Weekday Responsiveness',
    body: 'Calls, texts, and emails returned promptly during business hours.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparent Pricing',
    body: 'Reasonable, predictable rates with clear expectations from day one.',
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
  { word: 'Prepared.', body: 'Strategy and case work begin the moment you call.' },
  { word: 'Reachable.', body: 'Speak directly with the attorney handling your matter.' },
  { word: 'Transparent.', body: 'Honest pricing and clear expectations from day one.' },
];

const practiceAreaLinks = [
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
];

const countyLinks = [
  { name: 'Franklin County', href: '/locations/franklin-county' },
  { name: 'Delaware County', href: '/locations/delaware-county' },
  { name: 'Butler County', href: '/locations/butler-county' },
  { name: 'Greene County', href: '/locations/greene-county' },
  { name: 'Montgomery County', href: '/locations/montgomery-county' },
  { name: 'Pickaway County', href: '/locations/pickaway-county' },
  { name: 'Athens County', href: '/locations/athens-county' },
  { name: 'Morrow County', href: '/locations/morrow-county' },
  { name: 'Clinton County', href: '/locations/clinton-county' },
];

/**
 * The home page runs a strict two-surface alternation — `aurora-paper` for the
 * light bands and `aurora-vivid` for the colour bands — so the eye learns the
 * rhythm instead of meeting a new treatment in every section. Section padding,
 * headline scale, eyebrow, card radius and button shape all come from shared
 * constants for the same reason.
 */
export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink-900 [font-family:var(--font-dm-sans),'DM_Sans',sans-serif]">
      {/* ======================= HERO =======================
          Pulled up by the header's height: the navbar renders transparently
          over this section while the page is at the top, so the video has to
          begin underneath it rather than below it. */}
      <section className="relative -mt-16 xl:-mt-20 h-[100svh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-drift absolute inset-0 w-full h-full object-cover hidden sm:block"
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
          {/* The headline sits directly on moving footage, so the scrim has to
              stay dark enough to hold contrast. Colour therefore comes from
              blooms layered on top rather than from a lighter scrim, using the
              same brass and forest poles as the surfaces below. */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/82 via-ink-900/60 to-ink-950/94" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_14%_8%,rgba(184,115,51,0.36),transparent_60%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_88%_88%,rgba(20,82,61,0.46),transparent_60%)]"
            aria-hidden="true"
          />
        </div>

        {/* Padded by the header height so the centred content is optically
            centred in the space below the bar, not behind it. */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 xl:pt-20 text-white text-center">
          {/* Staggered load-in. The hero is on screen at first paint, so these
              are time-based rather than scroll-linked. */}
          <div className="max-w-4xl mx-auto">
            <div className="rise-in">
              <SectionEyebrow label="Ohio Law Firm · Est. Columbus" tone="dark" />
            </div>

            <h1
              className="rise-in [font-family:var(--font-playfair),'Playfair_Display',serif] text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight mb-5 sm:mb-6"
              style={{ '--rise-delay': '90ms' } as React.CSSProperties}
            >
              Defending Your Rights.
              <br />
              <span className="bg-gradient-to-br from-copper-200 via-copper-300 to-copper-400 bg-clip-text text-transparent">
                Building Your Future.
              </span>
            </h1>

            <p
              className="rise-in text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
              style={{ '--rise-delay': '180ms' } as React.CSSProperties}
            >
              Strategic representation across Ohio in criminal defense, OVI/DUI, personal injury, civil, business, and
              estate matters.
            </p>

            <div
              className="rise-in flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-10"
              style={{ '--rise-delay': '270ms' } as React.CSSProperties}
            >
              <Link href="/contact" className={`${BTN_PRIMARY} ${BTN_LG} w-full sm:w-auto group`}>
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <a href={PHONE_TEL} className={`${BTN_SECONDARY_ON_DARK} ${BTN_LG} w-full sm:w-auto`}>
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <div
              className="rise-in flex items-center justify-center gap-2 text-sm"
              style={{ '--rise-delay': '360ms' } as React.CSSProperties}
            >
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-copper-300 text-copper-300" />
                ))}
              </div>
              <span className="text-white/80">
                <span className="font-semibold text-white">100+</span> five-star Google reviews
              </span>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-white/55">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ======================= ABOUT (values fold in as the lead-in) ======================= */}
      <section className={`w-full ${SECTION_Y} aurora-paper`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Three-word principles, previously their own dark band. Folded in
              here so the page opens on one continuous light surface. */}
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 sm:mb-20">
            {values.map((v) => (
              <div key={v.word} className="relative glass-light glass-sheen p-7">
                <div className="relative [font-family:var(--font-playfair),'Playfair_Display',serif] text-3xl sm:text-4xl font-semibold leading-none mb-2.5 tracking-tight bg-gradient-to-br from-copper-500 to-copper-700 bg-clip-text text-transparent">
                  {v.word}
                </div>
                <p className="relative text-sm sm:text-[0.95rem] text-ink-700/75 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>

          <div className="reveal max-w-3xl mx-auto text-center">
            <SectionEyebrow label="About the Firm" />
            <h2 className={`${H2} text-ink-900 mb-5`}>
              Personal advocacy.
              <br />
              Strategic results.
            </h2>
            <p className="text-base sm:text-lg text-ink-700/80 leading-relaxed mb-4">
              Jwayyed Law LLC represents Ohioans in their hardest moments — when a charge, a lawsuit, or a life decision
              can shape the years ahead. Every matter receives the attention of an attorney who knows the courts, the
              prosecutors, and how to move a file toward the best possible outcome.
            </p>
            <p className="text-base sm:text-lg text-ink-700/80 leading-relaxed">
              We serve Columbus, Cincinnati, Dayton, and counties across Ohio.
            </p>
          </div>

          <div className="reveal-stagger grid sm:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
            {differentiators.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="relative glass-light glass-sheen flex items-start gap-4 p-6 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-copper-400 to-copper-600 text-white flex items-center justify-center shadow-md shadow-copper-700/25">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="relative">
                  <h3 className="font-semibold text-ink-900 mb-1">{title}</h3>
                  <p className="text-sm text-ink-700/75 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/our-law-firm/about-us" className={`${BTN_SECONDARY_ON_LIGHT} ${BTN_MD} group`}>
              Learn more about our firm
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= PRACTICE AREAS ======================= */}
      <section className={`relative w-full ${SECTION_Y} aurora-vivid overflow-hidden`}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <SectionEyebrow label="What We Do" tone="dark" />
            <h2 className={`${H2} text-white mb-4`}>Practice Areas</h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed">
              Focused experience across the matters that most often shape an Ohioan&apos;s record, finances, and future.
            </p>
          </div>

          <div className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {practiceAreas.map(({ icon: Icon, title, blurb, href }) => (
              <Link
                key={title}
                href={href}
                className="group relative glass glass-sheen p-7 hover:-translate-y-1 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                <div className="relative w-12 h-12 rounded-xl bg-white/12 text-copper-200 group-hover:bg-gradient-to-br group-hover:from-copper-400 group-hover:to-copper-600 group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="relative [font-family:var(--font-playfair),'Playfair_Display',serif] text-xl font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="relative text-sm text-white/70 leading-relaxed mb-5">{blurb}</p>
                <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-copper-200">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className={`${BTN_SECONDARY_ON_DARK} ${BTN_MD} group`}>
              See all services
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= OUTCOMES ======================= */}
      <section className={`w-full ${SECTION_Y} aurora-paper`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <SectionEyebrow label="Recent Outcomes" />
            <h2 className={`${H2} text-ink-900 mb-4`}>Results that protect what matters</h2>
            <p className="text-base sm:text-lg text-ink-700/80 leading-relaxed">
              A representative sample of resolutions secured for clients across Ohio. Past results do not guarantee a
              future outcome.
            </p>
          </div>

          <div className="reveal-stagger grid md:grid-cols-3 gap-4 sm:gap-5">
            {outcomes.map((o) => (
              <div
                key={o.headline}
                className="relative glass-light glass-sheen p-7 hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="relative inline-block text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-copper-700 bg-copper-500/12 border border-copper-500/30 rounded-full px-3 py-1 mb-5">
                  {o.label}
                </span>
                <h3 className="relative [font-family:var(--font-playfair),'Playfair_Display',serif] text-xl sm:text-2xl font-semibold text-ink-900 mb-3 leading-snug">
                  {o.headline}
                </h3>
                <p className="relative text-ink-700/75 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/our-law-firm/case-results" className={`${BTN_SECONDARY_ON_LIGHT} ${BTN_MD} group`}>
              View case results
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= TESTIMONIALS ======================= */}
      <section className={`relative w-full ${SECTION_Y} aurora-vivid overflow-hidden`}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <SectionEyebrow label="Client Voices" tone="dark" />
            <h2 className={`${H2} text-white mb-6`}>What clients say</h2>

            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
              <a
                href="https://www.google.com/search?q=Jwayyed+Law+LLC+Columbus+Ohio+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="relative glass glass-sheen flex items-center gap-4 px-5 py-4 flex-1 min-w-0 hover:-translate-y-0.5 transition-transform duration-200"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" className="relative flex-shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="relative text-left">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="flex items-center gap-0.5" aria-hidden="true">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-copper-300 text-copper-300" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-white">5.0</span>
                  </div>
                  <p className="text-xs text-white/75">100+ Google Reviews</p>
                </div>
              </a>

              <a
                href="https://www.bbb.org/us/oh/columbus/profile/attorneys-lawyers/jwayyed-law-llc-0302-70166716/#sealclick"
                target="_blank"
                rel="nofollow noreferrer"
                className="relative glass glass-sheen flex items-center gap-4 px-5 py-4 flex-1 min-w-0 hover:-translate-y-0.5 transition-transform duration-200"
              >
                {/* Remote seal served by BBB; next/image would need a loader for it. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://seal-centralohio.bbb.org/seals/blue-seal-200-42-bbb-70166716.png" style={{ border: 0 }} alt="BBB Seal" width={52} height={22} className="relative object-contain flex-shrink-0" />
                <div className="relative text-left">
                  <p className="text-sm font-bold text-white">A+ Accredited</p>
                  <p className="text-xs text-white/75">Better Business Bureau</p>
                </div>
              </a>

              <NCDDBadge variant="glass" />

              <div className="relative glass glass-sheen flex items-center gap-4 px-5 py-4 flex-1 min-w-0">
                <Image
                  src="/assets/jwayyed-law-llc-plaque.png"
                  alt="Jwayyed Law LLC — BusinessRate Best of 2026 award winner"
                  width={1540}
                  height={1900}
                  sizes="44px"
                  className="relative h-14 w-auto rounded-sm flex-shrink-0"
                />
                <div className="relative text-left">
                  <p className="text-sm font-bold text-white">Best of 2026</p>
                  <p className="text-xs text-white/75">BusinessRate Award</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary card and the scrolling wall side by side: the figure
              states the claim, the wall is the evidence for it. */}
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
            <ReviewSummaryCard
              rating={5.0}
              reviewCount={REVIEW_TOTAL}
              summaryText={`Rated 5.0 across ${REVIEW_TOTAL}+ verified Google reviews.`}
              className="mx-auto border-copper-200/70 bg-paper-50 shadow-md lg:mx-0"
            />
            <TestimonialWall />
          </div>
        </div>
      </section>

      {/* ======================= CLOSING: CTA + SEO LINKS =======================
          One continuous light surface so the page ends calmly rather than with
          two more seams before the footer. */}
      <section className={`w-full ${SECTION_Y} aurora-paper`}>
        <div className="reveal max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionEyebrow label="Free Consultation" />
          <h2 className={`${H2} text-ink-900 mb-5`}>Don&apos;t face this alone.</h2>
          <p className="text-base sm:text-lg text-ink-700/80 max-w-xl mx-auto mb-9">
            Confidential consultations — calls, texts, and emails returned promptly during business hours, Monday
            through Friday.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className={`${BTN_PRIMARY} ${BTN_LG} w-full sm:w-auto group`}>
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a href={PHONE_TEL} className={`${BTN_SECONDARY_ON_LIGHT} ${BTN_LG} w-full sm:w-auto`}>
              <Phone className="w-5 h-5" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-ink-700/65">
            <MapPin className="w-4 h-4 text-copper-600" aria-hidden="true" />
            <span>{ADDRESS}</span>
          </div>
        </div>

        {/* Internal link surface for local SEO. Kept quiet: it is a crawl aid
            first and a reading experience second. */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-14 border-t border-copper-500/15">
          <h3 className="text-center [font-family:var(--font-playfair),'Playfair_Display',serif] text-2xl font-semibold text-ink-900 mb-2">
            Practice Areas &amp; Service Areas
          </h3>
          <p className="text-center text-sm text-ink-700/70 mb-10 max-w-2xl mx-auto">
            Jwayyed Law LLC provides experienced legal representation throughout Ohio.
          </p>

          <div className="mb-10">
            <div className="text-center text-[0.65rem] tracking-[0.25em] uppercase text-copper-600 font-semibold mb-4">
              Areas of Practice
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {practiceAreaLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-copper-500/20 bg-white/50 text-sm text-ink-700/85 hover:border-copper-500/60 hover:text-copper-700 hover:bg-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center text-[0.65rem] tracking-[0.25em] uppercase text-copper-600 font-semibold mb-4">
              Counties &amp; Courts We Serve
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {countyLinks.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-copper-500/20 bg-white/50 text-sm text-ink-700/85 hover:border-copper-500/60 hover:text-copper-700 hover:bg-white transition-colors duration-200"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
