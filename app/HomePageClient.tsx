'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, Clock, Mail, MapPin, Pause, Phone, Play, Star } from 'lucide-react';
import CourtFinder from '@/components/CourtFinder';
import NCDDBadge from '@/components/NCDDBadge';
import OfficeStatus from '@/components/OfficeStatus';
import TestimonialWall from '@/components/TestimonialWall';
import { ReviewSummaryCard } from '@/components/ui/card-2';
import { siteNav } from '@/data/navigation';

/*
 * Home page. Navy with sky as the second colour, Playfair headings over DM
 * Sans text (the same pair as the inner pages), the firm's footage behind the
 * opening line, and three things particular to this firm: results shown as
 * the charge struck through and replaced by the outcome, a live office-hours
 * status, and "Which court is on your ticket?".
 */

const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';
const EMAIL = 'jwayyedlawllc@outlook.com';
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Jwayyed+Law+LLC+Columbus+Ohio+reviews';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=100+E+Campus+View+Blvd+Suite+250+Columbus+OH+43235';
const RATING = '4.9';

/** Shared frame: one pair of outer margins for the whole page. */
const FRAME = 'max-w-[1440px] mx-auto px-5 sm:px-8';
const SECTION = 'py-[clamp(88px,10vw,168px)]';
const RING_DARK = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky';
const RING_LIGHT = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep';

/** Practice areas in the order people most often call about them; titles,
 *  taglines and page links come from the site navigation. */
const AREAS = ['OVI / DUI', 'Criminal Defense', 'Personal Injury', 'Civil', 'Business', 'Other Services'];
const AREA_TITLE: Record<string, string> = {
  'OVI / DUI': 'OVI / DUI Defense',
  'Criminal Defense': 'Criminal Defense',
  'Personal Injury': 'Personal Injury',
  Civil: 'Civil Litigation',
  Business: 'Business Law',
  'Other Services': 'Estate Planning & Probate',
};

function area(navName: string) {
  const node = siteNav.find((n) => n.name === navName);
  const links = node?.subLinks ? node.subLinks.slice(1) : (node?.subDropdowns ?? []).flatMap((g) => g.links);
  return {
    title: AREA_TITLE[navName] ?? navName,
    href: node?.href ?? '/services',
    tagline: node?.tagline ?? '',
    links: links.slice(0, 4),
  };
}

const CREDENTIALS = [
  'Former Municipal Prosecutor',
  'Former Assistant Law Director, City of Circleville',
  'Licensed in Ohio since 2019, Bar #0098679',
  'J.D., Capital University Law School',
  'OSBA Leadership Academy, 2023',
  'National College for DUI Defense, General Member',
];

/** Each result is the charge as filed, struck through, and what it became. */
const RESULTS = [
  { charge: 'OVI', outcome: 'Reckless operation', detail: 'License kept, no jail time, and the fine cut to a third.' },
  { charge: 'Speeding + OVI', outcome: 'Dismissed', detail: 'Evidence challenged on procedural grounds. Record kept clean.' },
  {
    charge: 'CDL violation',
    outcome: 'Moving violation',
    detail: 'Resolved in one business day, avoiding a suspension and the hit to the client’s job.',
  },
];

function Stars({ className }: { className: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={className} />
      ))}
    </span>
  );
}

/**
 * Turns on the page's entrances. Without script, or with reduced motion,
 * `.jw-anim` is never added and everything renders in its finished state.
 *
 * Reveals are driven by a plain position check on load, scroll and resize
 * rather than IntersectionObserver alone: some embedded browsers never
 * deliver observer callbacks, which would leave content hidden. Anything
 * above the fold line, including blocks already scrolled past, is shown.
 */
function useReveal(root: React.RefObject<HTMLDivElement | null>) {
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setAnim(true);
  }, []);
  useEffect(() => {
    if (!anim || !root.current) return;
    let pending = Array.from(root.current.querySelectorAll<HTMLElement>('.jw-reveal, .jw-enter, .jw-unveil, .jw-result'));
    const check = () => {
      const line = window.innerHeight * 0.9;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top < line) {
          el.classList.add('is-in');
          return false;
        }
        return true;
      });
      if (pending.length === 0) stop();
    };
    const stop = () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();
    return stop;
  }, [anim, root]);
  return anim;
}

/** A heading set as masked lines that rise into place. */
function Lines({ lines }: { lines: React.ReactNode[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="jw-line">
          <span style={{ '--i': i } as React.CSSProperties}>{line}</span>
        </span>
      ))}
    </>
  );
}

/**
 * The firm's own footage, full-bleed behind the opening line. Only one file
 * is fetched (phone or desktop cut, chosen in the browser); under reduced
 * motion nothing downloads and the still portrait stands in. Pausable, since
 * it loops for longer than five seconds beside the headline.
 */
function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const small = window.matchMedia('(max-width: 639px)');
    const pick = () =>
      setSrc(reduce.matches ? null : small.matches ? '/videos/mobile-web-banner.mp4' : '/videos/background-video.mp4');
    pick();
    reduce.addEventListener('change', pick);
    small.addEventListener('change', pick);
    return () => {
      reduce.removeEventListener('change', pick);
      small.removeEventListener('change', pick);
    };
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (!paused) void v.play().catch(() => setPaused(true));
    else v.pause();
  }, [paused, src]);

  return (
    <>
      <div className="jw-hero-media absolute inset-0" aria-hidden="true">
        <Image
          src="/assets/attorney-main.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '50% 20%' }}
        />
        {src && (
          <video
            key={src}
            ref={ref}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            poster="/assets/attorney-main.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
      </div>
      {/* Neutral scrim, heavier at the bottom where the text sits. */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
      {src && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className={`absolute z-20 right-5 sm:right-8 bottom-6 inline-flex items-center justify-center w-11 h-11 border border-white/30 text-white/85 hover:text-white hover:border-white transition-colors ${RING_DARK}`}
          aria-label={paused ? 'Play background video' : 'Pause background video'}
        >
          {paused ? <Play className="w-4 h-4" aria-hidden="true" /> : <Pause className="w-4 h-4" aria-hidden="true" />}
        </button>
      )}
    </>
  );
}

export default function HomePageClient() {
  const root = useRef<HTMLDivElement>(null);
  const anim = useReveal(root);

  return (
    <div ref={root} className={`jw bg-white text-navy-950 text-[length:var(--step-body)] leading-[1.6] ${anim ? 'jw-anim' : ''}`}>
      {/* ======================= HERO =======================
          Pulled up under the header, which renders transparently over the
          footage while the page is at the top. */}
      <section className="jw-hero relative -mt-16 xl:-mt-20 min-h-[calc(100svh-44px)] flex items-center overflow-hidden bg-navy-950 text-white">
        <HeroVideo />
        <div className={`relative z-10 ${FRAME} w-full pt-28 xl:pt-32 pb-20 text-center`}>
          <h1 className="jw-display text-[length:var(--step-display)] leading-[1.04] text-balance">
            <Lines lines={['Defending Your Rights.', <span key="b" className="text-sky">Building Your Future.</span>]} />
          </h1>
          <p
            className="jw-load mt-7 mx-auto max-w-[44rem] text-[length:var(--step-lead)] leading-snug text-white/85 text-pretty"
            style={{ '--jw-delay': '420ms' } as React.CSSProperties}
          >
            Strategic representation across Ohio in criminal defense, OVI/DUI, personal injury, civil, business, and
            estate matters.
          </p>
          <div
            className="jw-load mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ '--jw-delay': '540ms' } as React.CSSProperties}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[54px] px-8 bg-sky text-navy-950 font-semibold hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href={PHONE_TEL}
              className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[54px] px-8 border border-white/50 font-semibold tabular-nums hover:bg-white hover:text-navy-950 transition-colors ${RING_DARK}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <div
            className="jw-load mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3"
            style={{ '--jw-delay': '660ms' } as React.CSSProperties}
          >
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-[length:var(--step-small)] text-white/85 hover:text-white transition-colors ${RING_DARK}`}
            >
              <Stars className="w-4 h-4 fill-sky text-sky" />
              <span>
                <span className="font-semibold text-white">{RATING}</span> from 100+ Google reviews
              </span>
            </a>
            <OfficeStatus tone="dark" />
          </div>
        </div>
      </section>

      {/* ======================= PRACTICE AREAS (white) ======================= */}
      <section className={`${SECTION} bg-white`} aria-labelledby="practice-heading">
        <div className={FRAME}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="practice-heading" className="jw-reveal jw-display lg:col-span-7 text-[length:var(--step-head)]">
              <Lines lines={['Practice areas']} />
            </h2>
            <p className="jw-enter lg:col-span-5 text-[length:var(--step-lead)] leading-snug text-navy-950/75">
              <span>Six areas of Ohio law. You speak with the attorney handling your case, not a screening service.</span>
            </p>
          </div>

          <ul className="jw-enter mt-16 grid gap-x-16 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {AREAS.map((name) => {
              const a = area(name);
              return (
                <li key={name} className="group/area">
                  <Link href={a.href} className={`group inline-flex items-center gap-2 ${RING_LIGHT}`}>
                    <span className="jw-display text-[length:var(--step-lead)] bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] group-hover:bg-[length:100%_1px] transition-[background-size] duration-500">
                      {a.title}
                    </span>
                    <ArrowUpRight
                      className="w-5 h-5 text-sky-deep transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                  <p className="mt-2 text-navy-950/70">{a.tagline}</p>
                  <ul className="mt-5 grid gap-2.5 text-[length:var(--step-small)]">
                    {a.links.map((l) => (
                      <li key={l.href + l.name}>
                        <Link
                          href={l.href}
                          className={`group/link inline-flex items-center gap-2 text-navy-950/85 hover:text-sky-deep transition-colors ${RING_LIGHT}`}
                        >
                          <span className="h-px w-3 bg-sky-deep/50 transition-[width] duration-300 group-hover/link:w-5" aria-hidden="true" />
                          {l.name.replace(/ →$/, '')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          <p className="mt-16 text-navy-950/75">
            Not sure where your matter fits?{' '}
            <a href={PHONE_TEL} className={`font-semibold text-sky-deep underline underline-offset-4 tabular-nums ${RING_LIGHT}`}>
              Call {PHONE_DISPLAY}
            </a>{' '}
            or{' '}
            <Link href="/services" className={`font-semibold text-sky-deep underline underline-offset-4 ${RING_LIGHT}`}>
              see every service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ======================= ABOUT (navy) ======================= */}
      <section className={`${SECTION} bg-navy-950 text-white`} aria-labelledby="about-heading">
        <div className={`${FRAME} grid gap-12 lg:grid-cols-12 lg:gap-20 items-center`}>
          <div className="lg:col-span-5">
            <div className="jw-unveil relative aspect-[4/5] w-full max-w-md overflow-hidden bg-navy-900">
              <Image
                src="/assets/IMG_5570.JPG"
                alt="Attorney Jwayyed"
                fill
                sizes="(min-width:1024px) 36vw, 100vw"
                className="object-cover"
                style={{ objectPosition: '50% 18%' }}
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 id="about-heading" className="jw-reveal jw-display text-[length:var(--step-head)]">
              <Lines lines={['Former prosecutor.', 'Now on your side.']} />
            </h2>
            <div className="jw-enter">
              <p className="mt-8 text-[length:var(--step-lead)] leading-snug max-w-[42ch]">
                Jwayyed Jwayyed served as a municipal prosecutor and as assistant law director for the City of
                Circleville before founding Jwayyed Law. He knows how the other side builds a case, and he uses that for
                you.
              </p>
              <ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2 text-[length:var(--step-small)] text-white/85">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-1 flex-shrink-0 text-sky" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-white/75 max-w-[60ch]">
                He speaks English and Arabic, and you work with him directly from the first call.
              </p>
              <Link
                href="/our-law-firm/about-us"
                className={`group mt-10 inline-flex items-center gap-2 min-h-[50px] px-6 border border-sky text-sky font-semibold hover:bg-sky hover:text-navy-950 transition-colors ${RING_DARK}`}
              >
                Read his full story
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= RESULTS (ice) =======================
          Each result is the charge as filed, crossed out as the section
          comes into view, and what it became. */}
      <section className={`${SECTION} bg-ice`} aria-labelledby="results-heading">
        <div className={FRAME}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="results-heading" className="jw-reveal jw-display lg:col-span-7 text-[length:var(--step-head)]">
              <Lines lines={['Recent results']} />
            </h2>
            <p className="jw-enter lg:col-span-5 text-navy-950/75">
              <span>A sample of charges reduced or dismissed for clients across Ohio. Past results do not guarantee a future outcome.</span>
            </p>
          </div>

          <ol className="mt-14 grid gap-4">
            {RESULTS.map((r) => (
              <li key={r.charge} className="jw-result grid gap-4 bg-white px-6 sm:px-10 py-8 sm:py-10 lg:grid-cols-12 lg:items-center">
                <p className="jw-display lg:col-span-7 text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-tight flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="jw-strike text-navy-950/45">
                    <span className="sr-only">Charged with </span>
                    {r.charge}
                  </span>
                  <ArrowRight className="w-7 h-7 text-sky-deep flex-shrink-0" aria-hidden="true" />
                  <span className="jw-outcome text-sky-deep">
                    <span className="sr-only">resolved as </span>
                    {r.outcome}
                  </span>
                </p>
                <p className="lg:col-span-5 text-navy-950/80">{r.detail}</p>
              </li>
            ))}
          </ol>

          <Link
            href="/our-law-firm/case-results"
            className={`group mt-10 inline-flex items-center gap-2 font-semibold text-sky-deep ${RING_LIGHT}`}
          >
            See all case results
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ======================= REVIEWS (navy) =======================
          The layout from the original redesign: trust marks under the
          heading, then the rating card beside the scrolling wall of real
          Google reviews. */}
      <section className={`${SECTION} bg-navy-900 text-white overflow-hidden`} aria-labelledby="reviews-heading">
        <div className={FRAME}>
          <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
            <h2 id="reviews-heading" className="jw-reveal jw-display text-[length:var(--step-head)]">
              <Lines lines={['What clients say']} />
            </h2>

            <div className="jw-enter mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-left">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 px-5 py-4 flex-1 min-w-0 bg-navy-800 hover:bg-navy-700 transition-colors ${RING_DARK}`}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" className="flex-shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>
                  <span className="flex items-center gap-1.5">
                    <Stars className="w-3.5 h-3.5 fill-sky text-sky" />
                    <span className="font-semibold">{RATING}</span>
                  </span>
                  <span className="block text-[length:var(--step-small)] text-mist">100+ Google reviews</span>
                </span>
              </a>

              <a
                href="https://www.bbb.org/us/oh/columbus/profile/attorneys-lawyers/jwayyed-law-llc-0302-70166716/#sealclick"
                target="_blank"
                rel="nofollow noreferrer"
                className={`flex items-center gap-4 px-5 py-4 flex-1 min-w-0 bg-navy-800 hover:bg-navy-700 transition-colors ${RING_DARK}`}
              >
                {/* Remote seal served by BBB; next/image would need a loader for it. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://seal-centralohio.bbb.org/seals/blue-seal-200-42-bbb-70166716.png"
                  alt="BBB seal"
                  width={64}
                  height={27}
                  className="object-contain flex-shrink-0"
                />
                <span>
                  <span className="block font-semibold">A+ accredited</span>
                  <span className="block text-[length:var(--step-small)] text-mist">Better Business Bureau</span>
                </span>
              </a>

              <NCDDBadge variant="glass" />

              <div className="flex items-center gap-4 px-5 py-4 flex-1 min-w-0 bg-navy-800">
                <Image
                  src="/assets/jwayyed-law-llc-plaque.png"
                  alt="Jwayyed Law LLC, BusinessRate Best of 2026 award winner"
                  width={1540}
                  height={1900}
                  sizes="44px"
                  className="h-12 w-auto flex-shrink-0"
                />
                <span>
                  <span className="block font-semibold">Best of 2026</span>
                  <span className="block text-[length:var(--step-small)] text-mist">BusinessRate award</span>
                </span>
              </div>
            </div>
          </div>

          <div className="jw-enter grid items-center gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
            <ReviewSummaryCard
              rating={Number(RATING)}
              reviewCount={100}
              orMore
              summaryText={`Rated ${RATING} from 100+ verified Google reviews.`}
              className="mx-auto lg:mx-0 bg-white text-navy-950"
            />
            <TestimonialWall />
          </div>
        </div>
      </section>

      {/* ======================= THE PLACE ======================= */}
      <figure className="relative h-[60svh] min-h-[380px] overflow-hidden bg-navy-950">
        <Image
          src="/assets/found/ohio-statehouse.jpg"
          alt="The Ohio Statehouse in Columbus"
          fill
          sizes="100vw"
          className="jw-drift object-cover"
        />
        <figcaption className={`${FRAME} absolute inset-x-0 bottom-0 pb-6 text-[length:var(--step-small)] text-white`}>
          <span className="bg-navy-950 px-3 py-1.5">The Ohio Statehouse, Columbus.</span>
        </figcaption>
      </figure>

      {/* ======================= CONTACT + COURTS (white) ======================= */}
      <section className={`${SECTION} bg-white`} aria-labelledby="contact-heading">
        <div className={`${FRAME} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-5">
            <h2 id="contact-heading" className="jw-reveal jw-display text-[length:var(--step-head)]">
              <Lines lines={['Find us']} />
            </h2>
            <div className="jw-enter">
              <div className="mt-6">
                <OfficeStatus tone="light" />
              </div>
              <ul className="mt-8 grid gap-6">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-sky-deep" aria-hidden="true" />
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={`hover:text-sky-deep transition-colors ${RING_LIGHT}`}>
                    <span className="block text-[length:var(--step-lead)] font-semibold leading-snug">100 E. Campus View Blvd, Suite 250</span>
                    <span className="block text-navy-950/75">Columbus, OH 43235</span>
                  </a>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-sky-deep" aria-hidden="true" />
                  <a href={PHONE_TEL} className={`text-[length:var(--step-lead)] font-semibold tabular-nums hover:text-sky-deep transition-colors ${RING_LIGHT}`}>
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-sky-deep" aria-hidden="true" />
                  <a href={`mailto:${EMAIL}`} className={`break-all hover:text-sky-deep transition-colors ${RING_LIGHT}`}>
                    {EMAIL}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-sky-deep" aria-hidden="true" />
                  <span>Monday to Friday, 9am to 5pm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="jw-enter lg:col-span-7 lg:pt-4">
            <div>
              <CourtFinder />
            </div>
          </div>
        </div>
      </section>

      {/* ======================= CLOSING (sky) ======================= */}
      <section className="bg-sky text-navy-950" aria-labelledby="closing-heading">
        <div className={`${FRAME} py-[clamp(72px,8vw,128px)] grid gap-10 lg:grid-cols-12 lg:items-end`}>
          <h2 id="closing-heading" className="jw-reveal jw-display lg:col-span-7 text-[1.875rem] sm:text-[length:var(--step-head)]">
            <Lines lines={['Facing a charge or a claim?', 'Talk to an attorney today.']} />
          </h2>
          <div className="jw-enter lg:col-span-5 flex flex-col gap-5 lg:items-end">
            <a
              href={PHONE_TEL}
              className="jw-display text-[clamp(2rem,1.4rem+2.2vw,3.25rem)] tabular-nums hover:underline underline-offset-8 decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-950"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 min-h-[52px] px-7 bg-navy-950 text-white font-semibold hover:bg-white hover:text-navy-950 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy-950"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
