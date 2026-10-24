'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Clock, Pause, Phone, Play, Star, Mail } from 'lucide-react';
import CourtFinder from '@/components/CourtFinder';
import NCDDBadge from '@/components/NCDDBadge';
import TestimonialWall from '@/components/TestimonialWall';
import { ReviewSummaryCard } from '@/components/ui/card-2';
import { siteNav } from '@/data/navigation';

/*
 * Direction: "the name as a monument" (tasteskill draw, seed 1023544020),
 * revised with the client: primarily navy with sky as the second colour,
 * the firm's footage behind the name under a transparent navbar, and the
 * original review wall. Live thing: "Which court is on your ticket?".
 */

const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';
const EMAIL = 'jwayyedlawllc@outlook.com';
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Jwayyed+Law+LLC+Columbus+Ohio+reviews';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=100+E+Campus+View+Blvd+Suite+250+Columbus+OH+43235';
const RATING = '4.9';

/** Shared frame: one pair of outer margins for the whole page. */
const FRAME = 'max-w-[1440px] mx-auto px-5 sm:px-8';
const SECTION = 'py-[clamp(88px,10vw,176px)]';
const RING_DARK = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky';
const RING_LIGHT = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep';

/**
 * Practice areas, in the order people most often call about them. Names,
 * one-line descriptions and page links all come from the site navigation,
 * so this list cannot drift from the menus.
 */
const AREAS = ['OVI / DUI', 'Criminal Defense', 'Personal Injury', 'Civil', 'Business', 'Other Services'];
const AREA_TITLE: Record<string, string> = {
  'OVI / DUI': 'OVI / DUI defense',
  'Criminal Defense': 'Criminal defense',
  'Personal Injury': 'Personal injury',
  Civil: 'Civil litigation',
  Business: 'Business law',
  'Other Services': 'Estate planning and probate',
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

const RECORD: { group: string; rows: { when: string; what: string; who: string; note: string }[] }[] = [
  {
    group: 'Credentials',
    rows: [
      { when: '2019', what: 'Licensed to practise law in Ohio', who: 'Supreme Court of Ohio', note: 'Bar #0098679' },
      { when: '', what: 'Juris Doctor', who: 'Capital University Law School', note: 'J.D.' },
      { when: '', what: 'Municipal Prosecutor', who: 'Former role', note: 'Prosecution' },
      { when: '', what: 'Assistant Law Director', who: 'City of Circleville', note: 'Former role' },
      { when: '2023', what: 'Leadership Academy', who: 'Ohio State Bar Association', note: 'Selected' },
      { when: '2026', what: 'Best of 2026', who: 'BusinessRate', note: 'Award' },
      { when: '', what: 'General Member', who: 'National College for DUI Defense', note: 'Member' },
      { when: '', what: 'Accredited business', who: 'Better Business Bureau', note: 'A+' },
    ],
  },
  {
    group: 'Recent results',
    rows: [
      { when: 'OVI', what: 'OVI reduced to reckless operation', who: 'License kept, no jail', note: 'Fine cut to a third' },
      { when: 'OVI', what: 'Speeding and OVI dismissed', who: 'Procedural challenge', note: 'Record kept clean' },
      { when: 'CDL', what: 'CDL violation reduced', who: 'Suspension avoided', note: 'One business day' },
    ],
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
 * The firm's own footage, playing full-bleed behind the first screen. Only
 * one file is fetched: the phone cut or the desktop cut, chosen in the
 * browser. Under reduced motion nothing downloads and the still portrait
 * stands in. It can be paused, since it loops for longer than five seconds
 * beside the headline.
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
      <div className="absolute inset-0" aria-hidden="true">
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
        {/* Neutral scrim so the white name holds contrast over moving footage. */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      {src && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className={`absolute z-20 right-5 sm:right-8 top-[calc(4rem+16px)] xl:top-[calc(5rem+16px)] inline-flex items-center justify-center w-11 h-11 bg-black/50 text-white hover:bg-black transition-colors ${RING_DARK}`}
          aria-label={paused ? 'Play background video' : 'Pause background video'}
        >
          {paused ? <Play className="w-4 h-4" aria-hidden="true" /> : <Pause className="w-4 h-4" aria-hidden="true" />}
        </button>
      )}
    </>
  );
}

export default function HomePageClient() {
  return (
    <div className="jw bg-white text-navy-950 text-[length:var(--step-body)] leading-[1.5]">
      {/* ======================= HERO =======================
          Pulled up under the header, which renders transparently over the
          footage while the page is at the top. */}
      <section className="relative -mt-16 xl:-mt-20 min-h-[calc(100svh-44px)] flex flex-col overflow-hidden bg-navy-950 text-white">
        <HeroVideo />
        <div className={`relative z-10 ${FRAME} w-full flex-1 flex flex-col justify-center pt-24 xl:pt-28 pb-12`}>
          <h1 className="jw-display text-[19vw] sm:text-[length:var(--step-monument)] text-center">
            <span className="jw-load block">Jwayyed Law</span>
          </h1>
        </div>

        <div className={`relative z-10 ${FRAME} w-full pb-8 sm:pb-10 grid gap-6 lg:grid-cols-12 lg:items-end`}>
          <p
            className="jw-load lg:col-span-5 text-[length:var(--step-lead)] leading-snug max-w-[34ch]"
            style={{ '--jw-delay': '180ms' } as React.CSSProperties}
          >
            Ohio OVI and criminal defense from a former municipal prosecutor. Also injury, business and estate law.
          </p>
          <div
            className="jw-load lg:col-span-7 flex flex-col sm:flex-row sm:flex-wrap sm:items-center lg:justify-end gap-4 sm:gap-x-6"
            style={{ '--jw-delay': '260ms' } as React.CSSProperties}
          >
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 whitespace-nowrap text-[length:var(--step-small)] text-white/85 hover:text-white transition-colors ${RING_DARK}`}
            >
              <Stars className="w-4 h-4 fill-sky text-sky" />
              {RATING} from 100+ Google reviews
            </a>
            <Link
              href="/contact"
              className={`text-[length:var(--step-small)] font-medium underline underline-offset-4 decoration-2 hover:text-sky transition-colors ${RING_DARK}`}
            >
              Schedule online
            </Link>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 whitespace-nowrap bg-sky text-navy-950 font-medium tabular-nums hover:bg-white active:translate-y-px transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              <Phone className="w-[18px] h-[18px]" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ======================= PRACTICE AREAS (white) ======================= */}
      <section className={`${SECTION} bg-white`} aria-labelledby="practice-heading">
        <div className={FRAME}>
          <div className="jw-enter grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="practice-heading" className="jw-display lg:col-span-7 text-[length:var(--step-head)]">
              Practice areas
            </h2>
            <p className="lg:col-span-5 text-[length:var(--step-lead)] leading-snug text-navy-950/75">
              Six areas of Ohio law. You speak with the attorney handling your case, not a screening service.
            </p>
          </div>

          <ul className="jw-enter mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {AREAS.map((name) => {
              const a = area(name);
              return (
                <li key={name}>
                  <Link
                    href={a.href}
                    className={`group inline-flex items-baseline gap-2 text-[length:var(--step-lead)] font-medium leading-tight hover:text-sky-deep transition-colors ${RING_LIGHT}`}
                  >
                    {a.title}
                    <ArrowUpRight
                      className="w-5 h-5 self-center text-sky-deep transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                  <p className="mt-2 text-navy-950/70">{a.tagline}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {a.links.map((l) => (
                      <li key={l.href + l.name}>
                        <Link
                          href={l.href}
                          className={`inline-flex items-center min-h-[40px] px-3.5 bg-ice text-[length:var(--step-small)] hover:bg-sky-deep hover:text-white transition-colors ${RING_LIGHT}`}
                        >
                          {l.name.replace(/ →$/, '')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>

          <p className="mt-14 text-navy-950/75">
            Not sure where your matter fits?{' '}
            <a href={PHONE_TEL} className={`font-medium text-sky-deep underline underline-offset-4 tabular-nums ${RING_LIGHT}`}>
              Call {PHONE_DISPLAY}
            </a>{' '}
            or{' '}
            <Link href="/services" className={`font-medium text-sky-deep underline underline-offset-4 ${RING_LIGHT}`}>
              see every service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ======================= ABOUT (navy) ======================= */}
      <section className={`${SECTION} bg-navy-950 text-white`} aria-labelledby="about-heading">
        <div className={`${FRAME} grid gap-12 lg:grid-cols-12 lg:gap-16 items-center`}>
          <div className="jw-enter lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-navy-900">
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

          <div className="jw-enter lg:col-span-7">
            <h2 id="about-heading" className="jw-display text-[length:var(--step-head)] max-w-[16ch]">
              Former prosecutor. Now on your side.
            </h2>
            <p className="mt-8 text-[length:var(--step-lead)] leading-snug max-w-[40ch]">
              Jwayyed Jwayyed served as a municipal prosecutor and as assistant law director for the City of Circleville
              before founding Jwayyed Law. He knows how the other side builds a case, and he uses that for you.
            </p>
            <p className="mt-6 text-white/80 max-w-[60ch]">
              Licensed in Ohio since 2019 (Bar #0098679), with a J.D. from Capital University Law School. Selected for the
              Ohio State Bar Association Leadership Academy in 2023. He speaks English and Arabic, and you work with him
              directly.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-xl text-[length:var(--step-small)]">
              <div>
                <dt className="text-mist">Office</dt>
                <dd className="font-medium">Columbus, Ohio</dd>
              </div>
              <div>
                <dt className="text-mist">Licensed</dt>
                <dd className="font-medium">Since 2019</dd>
              </div>
              <div>
                <dt className="text-mist">Languages</dt>
                <dd className="font-medium">English, Arabic</dd>
              </div>
            </dl>
            <Link
              href="/our-law-firm/about-us"
              className={`mt-10 inline-flex items-center gap-2 min-h-[48px] px-6 border-2 border-sky text-sky font-medium hover:bg-sky hover:text-navy-950 transition-colors ${RING_DARK}`}
            >
              Read his full story
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= RECORD (ice) ======================= */}
      <section className={`${SECTION} bg-ice`} aria-labelledby="record-heading">
        <div className={FRAME}>
          <h2 id="record-heading" className="jw-enter jw-display text-[length:var(--step-head)]">
            <span className="block">On the</span>
            <span className="block pl-[16.6%]">record</span>
          </h2>

          <div className="jw-enter mt-16 sm:mt-20">
            {/* Desktop and tablet: a real table, rows told apart by tone. */}
            <table className="hidden md:table w-full border-collapse text-left tabular-nums">
              <caption className="sr-only">Credentials and recent results for Attorney Jwayyed</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Year or area</th>
                  <th scope="col">Record</th>
                  <th scope="col">From or detail</th>
                  <th scope="col">Note</th>
                </tr>
              </thead>
              {RECORD.map((g) => (
                <tbody key={g.group}>
                  <tr>
                    <th scope="rowgroup" colSpan={4} className="pt-10 pb-4 text-[length:var(--step-lead)] font-medium text-sky-deep">
                      {g.group}
                    </th>
                  </tr>
                  {g.rows.map((r, i) => (
                    <tr key={r.what} className={i % 2 === 0 ? 'bg-white' : ''}>
                      <td className="py-3.5 pl-4 pr-6 w-[12%] text-navy-950/60">{r.when}</td>
                      <td className="py-3.5 pr-6 w-[38%] font-medium">{r.what}</td>
                      <td className="py-3.5 pr-6 w-[32%] text-navy-950/80">{r.who}</td>
                      <td className="py-3.5 pr-4 w-[18%] text-right text-navy-950/80">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>

            {/* Phone: each row a short block. */}
            <div className="md:hidden grid gap-10">
              {RECORD.map((g) => (
                <div key={g.group}>
                  <p className="text-[length:var(--step-lead)] font-medium text-sky-deep mb-3">{g.group}</p>
                  {g.rows.map((r, i) => (
                    <div key={r.what} className={`px-4 py-3 ${i % 2 === 0 ? 'bg-white' : ''}`}>
                      <p className="font-medium">
                        {r.when && <span className="text-navy-950/60 mr-2">{r.when}</span>}
                        {r.what}
                      </p>
                      <p className="text-navy-950/80">{r.who}</p>
                      <p className="text-navy-950/60">{r.note}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="mt-8 text-[length:var(--step-small)] text-navy-950/70">
              Past results do not guarantee a future outcome.{' '}
              <Link href="/our-law-firm/case-results" className={`text-sky-deep font-medium underline underline-offset-4 ${RING_LIGHT}`}>
                See all case results
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ======================= REVIEWS (navy) =======================
          The layout from the original redesign: the trust marks under the
          heading, then the rating card beside the scrolling wall of real
          Google reviews, the figure stating the claim and the wall proving
          it. */}
      <section className={`${SECTION} bg-navy-900 text-white overflow-hidden`} aria-labelledby="reviews-heading">
        <div className={FRAME}>
          <div className="jw-enter text-center max-w-5xl mx-auto mb-12 sm:mb-16">
            <h2 id="reviews-heading" className="jw-display text-[length:var(--step-head)]">
              What clients say
            </h2>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-left">
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
                    <span className="font-medium">{RATING}</span>
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
                  <span className="block font-medium">A+ accredited</span>
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
                  <span className="block font-medium">Best of 2026</span>
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

      {/* ======================= THE PLACE (the page's one rest) ======================= */}
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
          <div className="jw-enter lg:col-span-5">
            <h2 id="contact-heading" className="jw-display text-[length:var(--step-head)]">
              Find us
            </h2>
            <ul className="mt-10 grid gap-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-sky-deep" aria-hidden="true" />
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className={`hover:text-sky-deep transition-colors ${RING_LIGHT}`}>
                  <span className="block text-[length:var(--step-lead)] font-medium leading-snug">100 E. Campus View Blvd, Suite 250</span>
                  <span className="block text-navy-950/75">Columbus, OH 43235</span>
                </a>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-sky-deep" aria-hidden="true" />
                <a href={PHONE_TEL} className={`text-[length:var(--step-lead)] font-medium tabular-nums hover:text-sky-deep transition-colors ${RING_LIGHT}`}>
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
            <Link
              href="/contact"
              className={`mt-10 inline-flex items-center gap-2 min-h-[48px] px-6 bg-navy-950 text-white font-medium hover:bg-sky-deep transition-colors ${RING_LIGHT} focus-visible:ring-offset-2`}
            >
              Write to us
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="jw-enter lg:col-span-7 lg:pt-4">
            <CourtFinder />
          </div>
        </div>
      </section>

      {/* ======================= CALL (one word is the button) ======================= */}
      <a
        href={PHONE_TEL}
        className="group relative block min-h-[40svh] sm:min-h-[52svh] bg-sky text-navy-950 hover:bg-navy-950 hover:text-sky focus-visible:bg-navy-950 focus-visible:text-sky focus-visible:outline-none transition-colors"
        aria-label={`Call Jwayyed Law at ${PHONE_DISPLAY}`}
      >
        <span className={`${FRAME} absolute inset-x-0 top-0 pt-5 flex items-start justify-between gap-6`}>
          <span className="text-[length:var(--step-body)] max-w-[28ch]">
            Talk to Attorney Jwayyed now: <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>.
          </span>
          <svg viewBox="0 0 48 48" className="w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0" aria-hidden="true">
            <path d="M12 36 36 12M16 12h20v20" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
        </span>
        <span className={`${FRAME} absolute inset-x-0 bottom-0 pb-6 jw-display text-[clamp(7rem,27vw,26rem)] leading-[0.78]`} aria-hidden="true">
          Call
        </span>
      </a>
    </div>
  );
}
