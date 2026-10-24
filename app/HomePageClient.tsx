'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Pause, Phone, Play, Plus, Star } from 'lucide-react';
import CourtFinder from '@/components/CourtFinder';
import NCDDBadge from '@/components/NCDDBadge';
import { oviReviews, truncateReview } from '@/components/OVIReviewsSwiper';
import { siteNav } from '@/data/navigation';

/*
 * Direction: "the name as a monument" (tasteskill draw, seed 1023544020).
 * Idea: the firm's own name, Jwayyed, is the first screen, with the attorney
 * set into it in place of a word space; it returns at full width as the
 * footer. Live thing: "Which court is on your ticket?" (CourtFinder).
 */

const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Jwayyed+Law+LLC+Columbus+Ohio+reviews';
const RATING = '4.9';

/** Shared frame: one pair of outer margins for the whole page. */
const FRAME = 'max-w-[1440px] mx-auto px-5 sm:px-8';
const SECTION = 'py-[clamp(96px,11vw,200px)]';

/**
 * Each bar is written as what happened to the visitor and opens to the real
 * pages for it, taken from the site's navigation so no destination is lost.
 */
const SITUATIONS: { label: string; area: string; nav: string }[] = [
  { label: 'Arrested for OVI or DUI', area: 'OVI / DUI defense', nav: 'OVI / DUI' },
  { label: 'Charged with a crime', area: 'Criminal defense', nav: 'Criminal Defense' },
  { label: 'Hurt in an accident', area: 'Personal injury', nav: 'Personal Injury' },
  { label: 'In a dispute or being sued', area: 'Civil litigation', nav: 'Civil' },
  { label: 'Starting or running a business', area: 'Business law', nav: 'Business' },
  { label: 'Planning an estate or handling probate', area: 'Estate planning and probate', nav: 'Other Services' },
];

function pagesFor(navName: string) {
  const node = siteNav.find((n) => n.name === navName);
  if (!node) return { href: '/services', links: [] as { name: string; href: string }[] };
  const links = node.subLinks ? node.subLinks.slice(1) : (node.subDropdowns ?? []).flatMap((g) => g.links);
  return { href: node.href, links: links.slice(0, 7) };
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

const review = (name: string) => oviReviews.find((r) => r.name === name);
const LEAD = 'JJ is hands down the best lawyer I’ve ever worked with.';
const LEAD_BY = 'Samuel T';
const CORNER = ['Charles Horn', 'Nikki Steinmetz'].map(review).filter((r): r is (typeof oviReviews)[number] => !!r);

const STEPS = [
  {
    runIn: 'On the first call,',
    body: 'you tell us what happened and speak with the attorney who will handle your case. Consultations are confidential, and you hear the fee before you commit to anything.',
    src: '/assets/attorney-main.jpg',
    alt: 'Attorney Jwayyed in a courthouse hallway',
    w: 887,
    h: 1329,
  },
  {
    runIn: 'Within days,',
    body: 'he reviews the charge or claim, the evidence and the deadlines that apply. After an OVI arrest that includes the 30-day window to appeal an administrative license suspension.',
    src: '/assets/courthouse-blog.jpg',
    alt: 'The word Ohio carved into the stone of a courthouse',
    w: 1920,
    h: 1440,
  },
  {
    runIn: 'At court,',
    body: 'he stands with you, negotiates with the prosecutor, and tells you plainly what each option means for your record, your license and your job.',
    src: '/assets/found/franklin-county-courthouse-1873.jpg',
    alt: 'Engraving of the Franklin County Court House at High and Mound streets, Columbus, 1873',
    w: 1920,
    h: 1438,
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
 * One situation bar. Open state is tracked so a closed panel is `hidden`
 * (display: none) rather than relying on the browser's closed-details
 * rendering, which keeps the content laid out but unseen. Its links are in
 * the server HTML either way.
 */
function SituationBar({
  label,
  area,
  href,
  links,
  defaultOpen,
}: {
  label: string;
  area: string;
  href: string;
  links: { name: string; href: string }[];
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      className="group bg-pine-900 open:bg-pine-800"
    >
      <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center justify-between gap-4 min-h-[60px] px-5 py-3 hover:bg-pine-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-copper-400">
        <span className="font-medium">{label}</span>
        <Plus className="w-5 h-5 flex-shrink-0 text-copper-400 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
      </summary>
      <ul className={`${open ? 'grid' : 'hidden'} px-5 pb-5 pt-1 gap-0.5`}>
        <li>
          <Link
            href={href}
            className="flex items-center justify-between gap-4 py-2 font-medium text-copper-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
          >
            {area}: overview
            <ArrowUpRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          </Link>
        </li>
        {links.map((l) => (
          <li key={l.href + l.name}>
            <Link
              href={l.href}
              className="flex items-center justify-between gap-4 py-2 text-white/85 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
            >
              {l.name.replace(/ →$/, '')}
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-moss" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

/**
 * The page's one clip: the firm's own footage of Attorney Jwayyed, as a muted
 * loop with a poster. It never downloads or plays under reduced motion, and
 * it can be paused, since it loops for longer than five seconds.
 */
function FirmClip() {
  const ref = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setAllowed(!reduce.matches);
    sync();
    reduce.addEventListener('change', sync);
    return () => reduce.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (allowed && !paused) void v.play().catch(() => setPaused(true));
    else v.pause();
  }, [allowed, paused]);

  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-pine-950">
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload={allowed ? 'metadata' : 'none'}
        poster="/assets/attorney-main.jpg"
        className="absolute inset-0 w-full h-full object-cover object-[50%_25%] grayscale"
        aria-label="Attorney Jwayyed at work"
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
      </video>
      {allowed && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="absolute bottom-3 right-3 inline-flex items-center justify-center w-11 h-11 bg-pine-950 text-white hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
          aria-label={paused ? 'Play video' : 'Pause video'}
        >
          {paused ? <Play className="w-4 h-4" aria-hidden="true" /> : <Pause className="w-4 h-4" aria-hidden="true" />}
        </button>
      )}
    </div>
  );
}

export default function HomePageClient() {
  return (
    <div className="jw bg-pine-950 text-white text-[length:var(--step-body)] leading-[1.5]">
      {/* ======================= HERO ======================= */}
      <section className="relative min-h-[calc(100svh-4rem-44px)] xl:min-h-[calc(100svh-5rem-44px)] flex flex-col">
        <div className={`${FRAME} w-full flex-1 flex flex-col justify-center py-12`}>
          <h1 className="jw-display text-[19vw] sm:text-[length:var(--step-monument)] text-center">
            <span className="flex flex-col sm:flex-row items-stretch sm:items-baseline justify-center gap-[0.12em] sm:gap-[0.16em]">
              <span className="jw-load">Jwayyed</span>
              <span
                className="jw-shutter relative block overflow-hidden bg-pine-900 w-full aspect-[3/2] sm:w-[1.7em] sm:h-[0.74em] sm:aspect-auto sm:self-baseline"
                aria-hidden="true"
              >
                <Image
                  src="/assets/attorney-main.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 640px) 30vw, 100vw"
                  className="object-cover grayscale"
                  style={{ objectPosition: '50% 12%' }}
                />
              </span>
              <span className="jw-load" style={{ '--jw-delay': '90ms' } as React.CSSProperties}>
                Law
              </span>
            </span>
          </h1>
        </div>

        <div className={`${FRAME} w-full pb-8 sm:pb-10 grid gap-6 lg:grid-cols-12 lg:items-end`}>
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
              className="inline-flex items-center gap-2 whitespace-nowrap text-[length:var(--step-small)] text-moss hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
            >
              <Stars className="w-4 h-4 fill-copper-400 text-copper-400" />
              {RATING} from 100+ Google reviews
            </a>
            <Link
              href="/contact"
              className="text-[length:var(--step-small)] font-medium underline underline-offset-4 decoration-2 hover:text-copper-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
            >
              Schedule online
            </Link>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 whitespace-nowrap bg-copper-400 text-pine-950 font-medium tabular-nums hover:bg-white active:translate-y-px transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              <Phone className="w-[18px] h-[18px]" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ======================= HELP (situations) ======================= */}
      <section className={`${SECTION} bg-pine-950`} aria-labelledby="help-heading">
        <div className={`${FRAME} grid gap-12 lg:grid-cols-2 lg:gap-16`}>
          <div className="jw-enter @container">
            <h2 id="help-heading" className="jw-display text-[44cqw] leading-[0.8]">
              Help
            </h2>
            <p className="mt-8 text-[length:var(--step-lead)] leading-snug max-w-[30ch]">
              Choose what happened. Each page explains your options and the next step.
            </p>
            <p className="mt-5 text-moss">
              Not sure where it fits?{' '}
              <a href={PHONE_TEL} className="text-white font-medium underline underline-offset-4 tabular-nums hover:text-copper-400">
                Call {PHONE_DISPLAY}
              </a>
            </p>
          </div>

          <div className="jw-enter flex flex-col gap-1.5 lg:pt-4">
            {SITUATIONS.map((s, i) => {
              const { href, links } = pagesFor(s.nav);
              return (
                <SituationBar key={s.nav} label={s.label} area={s.area} href={href} links={links} defaultOpen={i === 0} />
              );
            })}
          </div>
        </div>
      </section>


      {/* ======================= ABOUT ======================= */}
      <section className={`${SECTION} bg-white text-pine-950`} aria-labelledby="about-heading">
        <div className={`${FRAME} grid gap-10 lg:grid-cols-12`}>
          <h2 id="about-heading" className="jw-enter jw-display lg:col-span-12 text-[length:var(--step-head)] max-w-[16ch]">
            Former prosecutor. Now on your side.
          </h2>

          <dl className="jw-enter order-last lg:order-none lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-4 content-start text-[length:var(--step-small)]">
            <div>
              <dt className="text-pine-950/60">Office</dt>
              <dd className="font-medium">Columbus, Ohio</dd>
            </div>
            <div>
              <dt className="text-pine-950/60">Licensed</dt>
              <dd className="font-medium">Since 2019</dd>
            </div>
            <div>
              <dt className="text-pine-950/60">Phone</dt>
              <dd>
                <a href={PHONE_TEL} className="font-medium underline underline-offset-4 tabular-nums hover:text-copper-700">
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
          </dl>

          <div className="jw-enter lg:col-span-9 lg:col-start-4">
            <p className="text-[length:var(--step-lead)] leading-[1.3]">
              <span className="float-left mr-[0.5em] mb-1 relative w-[3.9em] h-[3.9em] overflow-hidden bg-pine-950/10">
                <Image
                  src="/assets/IMG_5570.JPG"
                  alt="Attorney Jwayyed"
                  fill
                  sizes="120px"
                  className="object-cover grayscale"
                  style={{ objectPosition: '50% 18%' }}
                />
              </span>
              <strong className="font-medium">Jwayyed Jwayyed</strong> served as a municipal prosecutor and as assistant law
              director for the City of Circleville before founding Jwayyed Law. He knows how the other side builds a case,
              and he uses that for you.
            </p>
            <p className="clear-both pt-6 text-pine-950/75 max-w-[62ch]">
              Licensed in Ohio since 2019 (Bar #0098679), with a J.D. from Capital University Law School. Selected for the
              Ohio State Bar Association Leadership Academy in 2023. He speaks English and Arabic, and you work with him
              directly.{' '}
              <Link href="/our-law-firm/about-us" className="text-pine-950 font-medium underline underline-offset-4 hover:text-copper-700">
                Read his full story
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ======================= RECORD ======================= */}
      <section className={`${SECTION} bg-pine-950`} aria-labelledby="record-heading">
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
                    <th scope="rowgroup" colSpan={4} className="pt-10 pb-4 text-[length:var(--step-lead)] font-medium text-copper-400">
                      {g.group}
                    </th>
                  </tr>
                  {g.rows.map((r, i) => (
                    <tr key={r.what} className={i % 2 === 0 ? 'bg-pine-900' : ''}>
                      <td className="py-3.5 pl-4 pr-6 w-[12%] text-moss">{r.when}</td>
                      <td className="py-3.5 pr-6 w-[38%] font-medium">{r.what}</td>
                      <td className="py-3.5 pr-6 w-[32%] text-white/85">{r.who}</td>
                      <td className="py-3.5 pr-4 w-[18%] text-right text-white/85">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>

            {/* Phone: each row a two-line block. */}
            <div className="md:hidden grid gap-10">
              {RECORD.map((g) => (
                <div key={g.group}>
                  <p className="text-[length:var(--step-lead)] font-medium text-copper-400 mb-3">{g.group}</p>
                  {g.rows.map((r, i) => (
                    <div key={r.what} className={`px-4 py-3 ${i % 2 === 0 ? 'bg-pine-900' : ''}`}>
                      <p className="font-medium">
                        {r.when && <span className="text-moss mr-2">{r.when}</span>}
                        {r.what}
                      </p>
                      <p className="text-white/80">
                        {r.who}, {r.note}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="mt-8 text-[length:var(--step-small)] text-moss">
              Past results do not guarantee a future outcome.{' '}
              <Link href="/our-law-firm/case-results" className="text-white underline underline-offset-4 hover:text-copper-400">
                See all case results
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ======================= REVIEWS ======================= */}
      <section className="bg-black min-h-[100svh] grid grid-rows-[auto_1fr_auto]" aria-labelledby="reviews-heading">
        <div className={`${FRAME} w-full pt-[clamp(72px,8vw,128px)] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8`}>
          <h2 id="reviews-heading" className="jw-display text-[length:var(--step-head)]">
            What clients say
          </h2>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:text-copper-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
            >
              <Stars className="w-4 h-4 fill-copper-400 text-copper-400" />
              <span>
                <span className="font-medium">{RATING}</span> from 100+ Google reviews
              </span>
            </a>
            <NCDDBadge variant="inline" />
          </div>
        </div>

        <div className={`${FRAME} w-full flex items-center justify-center py-16`}>
          <figure className="jw-enter text-center max-w-[min(100%,72rem)]">
            <blockquote className="jw-display text-[length:var(--step-lead)] leading-[1.2] sm:text-[length:var(--step-head)] sm:leading-[0.98] text-balance">“{LEAD}”</blockquote>
            <figcaption className="mt-6 text-moss">{LEAD_BY}, Google review</figcaption>
          </figure>
        </div>

        <div className={`${FRAME} w-full pb-8 grid gap-10 md:grid-cols-12`}>
          {CORNER.map((r, i) => (
            <figure key={r.name} className={`jw-enter md:col-span-4 ${i === 1 ? 'md:col-start-9 pl-[25%] md:pl-0' : ''}`}>
              <blockquote className="text-white/90">“{truncateReview(r.text)}”</blockquote>
              <figcaption className="mt-3 text-[length:var(--step-small)]">
                <span className="block font-medium">{r.name}</span>
                <span className="block text-moss">Google review</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ======================= AFTER YOU CALL ======================= */}
      <section className={`${SECTION} bg-white text-pine-950`} aria-labelledby="steps-heading">
        <div className={`${FRAME} grid gap-14 lg:grid-cols-12 lg:gap-y-0 lg:gap-x-8`}>
          <h2
            id="steps-heading"
            className="jw-enter jw-display lg:col-start-7 lg:col-span-6 lg:row-start-1 text-[length:var(--step-head)]"
          >
            After you call
          </h2>

          {/* Stage one: 3:4 portrait, cols 1–4; text to its right. */}
          <div className="jw-enter lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-2">
            <FirmClip />
          </div>
          <p className="jw-enter lg:col-start-5 lg:col-span-3 lg:row-start-2 lg:self-start max-w-[36ch]">
            <strong className="font-medium">{STEPS[0].runIn}</strong> {STEPS[0].body}
          </p>

          {/* Stage two: square, cols 6–8, lower; text to its right. */}
          <div className="jw-enter lg:col-start-6 lg:col-span-3 lg:row-start-3 lg:mt-[220px] w-[62%] ml-auto lg:w-auto lg:ml-0">
            <div className="relative aspect-square overflow-hidden bg-pine-950/10">
              <Image src={STEPS[1].src} alt={STEPS[1].alt} fill sizes="(min-width:1024px) 22vw, 62vw" className="object-cover grayscale" />
            </div>
          </div>
          <p className="jw-enter lg:col-start-9 lg:col-span-4 lg:row-start-3 lg:mt-[220px] lg:self-start max-w-[36ch] ml-auto lg:ml-0 w-[62%] lg:w-auto">
            <strong className="font-medium">{STEPS[1].runIn}</strong> {STEPS[1].body}
          </p>

          {/* Stage three: 16:10 landscape, cols 8–12, lower still; text to its left. */}
          <p className="jw-enter order-last lg:order-none lg:col-start-3 lg:col-span-4 lg:row-start-4 lg:mt-[180px] lg:self-start max-w-[36ch] w-[78%] lg:w-auto">
            <strong className="font-medium">{STEPS[2].runIn}</strong> {STEPS[2].body}
          </p>
          <div className="jw-enter lg:col-start-8 lg:col-span-5 lg:row-start-4 lg:mt-[180px] w-[78%] lg:w-auto">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden bg-pine-950/10">
                <Image src={STEPS[2].src} alt={STEPS[2].alt} fill sizes="(min-width:1024px) 40vw, 78vw" className="object-cover grayscale" />
              </div>
              <figcaption className="mt-2 text-[length:var(--step-small)] text-pine-950/65">
                Franklin County Court House, Columbus, 1873.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ======================= THE PLACE (the page's one rest) ======================= */}
      <figure className="relative h-[70svh] min-h-[420px] overflow-hidden bg-black">
        <Image
          src="/assets/found/ohio-statehouse.jpg"
          alt="The Ohio Statehouse in Columbus"
          fill
          sizes="100vw"
          className="jw-drift object-cover grayscale"
        />
        <figcaption className={`${FRAME} absolute inset-x-0 bottom-0 pb-6 text-[length:var(--step-small)] text-white`}>
          <span className="bg-black px-3 py-1.5">The Ohio Statehouse, Columbus.</span>
        </figcaption>
      </figure>

      {/* ======================= CONTACT + COURTS ======================= */}
      <section className={`${SECTION} bg-pine-950`} aria-labelledby="contact-heading">
        <div className={FRAME}>
          <h2 id="contact-heading" className="jw-enter jw-display text-[length:var(--step-head)]">
            Find us
          </h2>

          <div className="jw-enter mt-12 grid text-[length:var(--step-lead)] sm:text-[length:var(--step-head)] font-normal leading-none tracking-[-0.02em]">
            <a
              href="https://www.google.com/maps/search/?api=1&query=100+E+Campus+View+Blvd+Suite+250+Columbus+OH+43235"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-end min-h-[clamp(84px,9vw,150px)] px-5 pb-5 bg-pine-900 hover:text-copper-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-copper-400"
            >
              100 E. Campus View Blvd
            </a>
            <p className="flex items-end min-h-[clamp(84px,9vw,150px)] px-5 pb-5">Suite 250, Columbus, OH 43235</p>
            <p className="flex items-end min-h-[clamp(84px,9vw,150px)] px-5 pb-5 bg-pine-900">Mon–Fri, 9am–5pm</p>
            <a
              href={PHONE_TEL}
              className="flex items-end min-h-[clamp(84px,9vw,150px)] px-5 pb-5 tabular-nums hover:text-copper-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-copper-400"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="group flex items-end gap-6 min-h-[clamp(84px,9vw,150px)] px-5 pb-5 bg-pine-900 hover:text-copper-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-copper-400"
            >
              Write to us
              <span className="mb-[0.08em] inline-flex items-center justify-center w-[0.9em] h-[0.9em] rounded-full bg-copper-400 text-pine-950 group-hover:bg-white transition-colors">
                <ArrowUpRight className="w-[0.5em] h-[0.5em]" aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className="jw-enter mt-10">
            <CourtFinder />
          </div>
        </div>
      </section>

      {/* ======================= CALL (one word is the button) ======================= */}
      <a
        href={PHONE_TEL}
        className="group relative block min-h-[46svh] sm:min-h-[60svh] bg-copper-400 text-pine-950 hover:bg-pine-950 hover:text-copper-400 focus-visible:bg-pine-950 focus-visible:text-copper-400 focus-visible:outline-none"
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
