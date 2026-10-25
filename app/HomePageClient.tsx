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
 * Home page. Structure and motion follow the notes in
 * docs/homepage-design-research.md (Kirkland & Ellis, Latham & Watkins,
 * Morgan & Morgan, Stripe): a cinematic hero, a trust strip straight under
 * it, a bento of reasons to call, practice areas with a pinned title and
 * image panels, a statement that brightens word by word, results shown as
 * charges struck through, the review wall, and a closing call to action.
 */

const PHONE_DISPLAY = '(614) 285-5482';

/** Trust tiles in "What clients say": the mark large on top, its label under it. */
const BADGE_TILE = 'flex flex-col items-center justify-start gap-4 px-5 pt-7 pb-6 min-w-0 text-center bg-navy-800';
const BADGE_ART = 'flex h-24 w-full items-center justify-center';
const PHONE_TEL = 'tel:+16142855482';
const EMAIL = 'jwayyedlawllc@outlook.com';
const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/Jwayyed+Law+LLC/@40.1191818,-83.0144292,17z/data=!4m8!3m7!1s0x88388f6d01807339:0x8f1ee26d8800df52!8m2!3d40.1191818!4d-83.0144292!9m1!1b1!16s%2Fg%2F11l35ntszq';
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=100+E+Campus+View+Blvd+Suite+250+Columbus+OH+43235';
const RATING = '5.0';

const FRAME = 'max-w-[1440px] mx-auto px-5 sm:px-8';
const SECTION = 'py-[clamp(96px,11vw,184px)]';
const RING_DARK = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky';
const RING_LIGHT = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep';

/** Practice areas, each with the firm's own photograph for its panel. */
const AREAS: { nav: string; title: string; image: string; alt: string }[] = [
  { nav: 'OVI / DUI', title: 'OVI / DUI Defense', image: '/assets/dui-blog.jpg', alt: 'View from a driver’s seat at night' },
  { nav: 'Criminal Defense', title: 'Criminal Defense', image: '/assets/criminal.jpg', alt: 'Columns of a courthouse' },
  { nav: 'Personal Injury', title: 'Personal Injury', image: '/assets/injury.jpg', alt: 'Columns and skylight of a public hall' },
  { nav: 'Civil', title: 'Civil Litigation', image: '/assets/courthouse-blog.jpg', alt: 'The word Ohio carved in courthouse stone' },
  { nav: 'Business', title: 'Business Law', image: '/assets/contracts.webp', alt: 'A contract with a pen, a gavel and scales' },
  { nav: 'Other Services', title: 'Estate Planning & Probate', image: '/assets/estatePlanning.webp', alt: 'A gavel on a desk' },
];

function areaLinks(navName: string) {
  const node = siteNav.find((n) => n.name === navName);
  const links = node?.subLinks ? node.subLinks.slice(1) : (node?.subDropdowns ?? []).flatMap((g) => g.links);
  return { href: node?.href ?? '/services', tagline: node?.tagline ?? '', links: links.slice(0, 4) };
}

const TRUST = [
  'Rated 5.0 on Google',
  '130+ client reviews',
  'BBB A+ accredited',
  'National College for DUI Defense member',
  'BusinessRate Best of 2026',
  'Former municipal prosecutor',
  'Licensed in Ohio since 2019',
  'Ohio Bar #0098679',
];

const CREDENTIALS = [
  'Former Municipal Prosecutor',
  'Former Assistant Law Director, City of Circleville',
  'Licensed in Ohio since 2019, Bar #0098679',
  'J.D., Capital University Law School',
  'OSBA Leadership Academy, 2023',
  'National College for DUI Defense, General Member',
];

const RESULTS = [
  { charge: 'OVI', outcome: 'Reckless operation', detail: 'License kept, no jail time, and the fine cut to a third.' },
  { charge: 'Speeding + OVI', outcome: 'Dismissed', detail: 'Evidence challenged on procedural grounds. Record kept clean.' },
  {
    charge: 'CDL violation',
    outcome: 'Moving violation',
    detail: 'Resolved in one business day, avoiding a suspension and the hit to the client’s job.',
  },
];

const STATEMENT =
  'He spent years on the other side of the courtroom. He knows how a case is built against you, where it is weak, and what a prosecutor will accept. Now that knowledge works for you.';

function Stars({ className }: { className: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={className} />
      ))}
    </span>
  );
}

/** Splits text into clipped words that GSAP raises one after another. */
function Words({ text, className = '', start = 0 }: { text: string; className?: string; start?: number }) {
  const words = text.split(' ');
  return (
    <>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className={`jw-word ${className}`}>
            <span style={{ '--i': start + i } as React.CSSProperties}>{w}</span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </>
  );
}

/**
 * The firm's own footage, full-bleed behind the opening line. Only one file
 * is fetched (phone or desktop cut, chosen in the browser); under reduced
 * motion nothing downloads and the still portrait stands in. Pausable.
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
      <div className="hero-media jw-hero-drift absolute inset-0" aria-hidden="true">
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
      {/* Neutral scrim, deeper toward the edges and the foot. */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(11,26,46,0.75)_100%)]" aria-hidden="true" />
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

/** A call bar on phones once the hero has scrolled away (Morgan & Morgan
 *  keep the number in reach at all times). */
function MobileCallBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Shown once the hero is gone; tucked away again near the foot of the
    // page so it never covers the footer's contact lines and legal notice.
    // Read at most once a frame: scrollHeight is a layout read.
    let frame = 0;
    const check = () => {
      frame = 0;
      const nearEnd = window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 480;
      setShow(window.scrollY > window.innerHeight * 0.85 && !nearEnd);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div
      className={`sm:hidden fixed inset-x-0 bottom-0 z-40 bg-navy-950/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex gap-3 transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      inert={!show}
    >
      <a href={PHONE_TEL} className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] bg-sky text-navy-950 font-semibold tabular-nums">
        <Phone className="w-4 h-4" aria-hidden="true" />
        Call {PHONE_DISPLAY}
      </a>
      <Link href="/contact" className="inline-flex items-center justify-center min-h-[48px] px-4 border border-white/40 text-white font-semibold">
        Schedule
      </Link>
    </div>
  );
}

/** Gathers the faint JL mark pattern into one corner of a light section. */
function markCorner(at: string, opacity: number): React.CSSProperties {
  return {
    '--jw-mark-fade': `radial-gradient(ellipse 55% 70% at ${at}, #000 10%, transparent 100%)`,
    '--jw-mark-opacity': opacity,
  } as React.CSSProperties;
}

/** Counts a figure up from zero. The server HTML holds the real figure. */
function countUp(el: HTMLElement) {
  const to = Number(el.dataset.count);
  const decimals = Number(el.dataset.decimals ?? 0);
  const t0 = performance.now();
  const tick = (t: number) => {
    const p = Math.min(1, (t - t0) / 1600);
    el.textContent = (to * (1 - (1 - p) ** 2)).toFixed(decimals);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function HomePageClient() {
  const root = useRef<HTMLDivElement>(null);

  /*
   * Motion. The hero's entrance is pure CSS (it plays on first paint, no
   * script needed). Everything below it reveals once as it scrolls into
   * view: one IntersectionObserver adds `is-in`, and CSS transitions on
   * transform and opacity do the rest (globals.css, "Home reveals").
   *
   * This replaced GSAP. Each GSAP reveal read computed styles for every
   * word and block it animated at the moment its section came into view,
   * which forced a full style and layout pass mid-scroll: the stutter
   * visitors felt. Transitions start from a class change and run on the
   * compositor.
   *
   * Nothing is hidden unless this effect runs (it sets data-motion on the
   * root), so without script, or with reduced motion, the page is simply
   * finished.
   */
  useEffect(() => {
    const el = root.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    el.querySelectorAll<HTMLElement>('.reveal-group, .bento').forEach((group) => {
      const items = group.classList.contains('bento') ? group.querySelectorAll<HTMLElement>('.bento-card') : group.children;
      Array.from(items).forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i)));
    });
    el.dataset.motion = 'on';

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const target = entry.target as HTMLElement;
          io.unobserve(target);
          target.classList.add('is-in');
          target.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
        }
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    el.querySelectorAll('.reveal-title, .reveal-group, .bento, .area-panel, .statement, .result-row').forEach((t) => io.observe(t));

    // The trust strip only runs while it is on screen.
    const strip = new IntersectionObserver((entries) => {
      for (const entry of entries) (entry.target as HTMLElement).dataset.offscreen = entry.isIntersecting ? '' : 'true';
    });
    el.querySelectorAll('.jw-marquee').forEach((t) => strip.observe(t));

    return () => {
      io.disconnect();
      strip.disconnect();
    };
  }, []);

  return (
    <div ref={root} className="jw overflow-x-clip bg-white text-navy-950 text-[length:var(--step-body)] leading-[1.6]">
      {/* ======================= HERO ======================= */}
      <section className="hero relative -mt-16 xl:-mt-20 min-h-[calc(100svh-44px)] flex items-center overflow-hidden bg-navy-950 text-white">
        <HeroVideo />
        <div className={`hero-copy jw-hero-out relative z-10 ${FRAME} w-full pt-28 xl:pt-32 pb-24 text-center`}>
          <h1 className="hero-title jw-display mx-auto max-w-6xl text-[length:var(--step-display)] leading-[1.06]">
            <Words text="Defending Your Rights." />
            <br className="hidden sm:block" /> <Words text="Building Your Future." className="text-sky" start={3} />
          </h1>
          <p className="hero-follow mt-7 mx-auto max-w-[46rem] text-[length:var(--step-lead)] leading-snug text-white/85 text-pretty">
            Strategic representation across Ohio in criminal defense, OVI/DUI, personal injury, civil, business, and
            estate matters.
          </p>
          <div className="hero-follow mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[56px] px-8 bg-sky text-navy-950 font-semibold hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href={PHONE_TEL}
              className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[56px] px-8 border border-white/50 font-semibold tabular-nums hover:bg-white hover:text-navy-950 transition-colors ${RING_DARK}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="hero-follow mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-[length:var(--step-small)] text-white/85 hover:text-white transition-colors ${RING_DARK}`}
            >
              <Stars className="w-4 h-4 fill-sky text-sky" />
              <span>
                <span className="font-semibold text-white">{RATING}</span> from 130+ Google reviews
              </span>
            </a>
            <OfficeStatus tone="dark" />
          </div>
        </div>
      </section>

      {/* ======================= TRUST STRIP ======================= */}
      <div className="jw-marquee bg-navy-900 text-white/85 overflow-hidden" aria-label="Credentials and recognition">
        <div className="jw-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex items-center shrink-0" aria-hidden={copy === 1 ? true : undefined}>
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-6 px-6 py-5 text-[length:var(--step-small)] whitespace-nowrap">
                  <span className="h-1.5 w-1.5 rotate-45 bg-sky" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ======================= WHY CALL (bento) ======================= */}
      <section className={`jw-mark jw-mark--navy ${SECTION} bg-white`} style={markCorner('100% 0%', 0.05)} aria-labelledby="why-heading">
        <div className={FRAME}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end mb-14">
            <h2 id="why-heading" className="reveal-title jw-display lg:col-span-8 text-[length:var(--step-head)]">
              <Words text="Why clients call Jwayyed Law first" />
            </h2>
          </div>

          <div className="bento grid gap-4 grid-flow-dense md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            <Link
              href="/our-law-firm/about-us"
              className={`bento-card bento-photo group relative md:col-span-2 lg:row-span-2 min-h-[420px] overflow-hidden bg-navy-950 text-white ${RING_LIGHT}`}
            >
              <Image
                src="/assets/attorney-main.jpg"
                alt="Attorney Jwayyed in a courthouse hallway"
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <p className="jw-display text-[clamp(1.75rem,1.2rem+1.6vw,2.75rem)] leading-tight">
                  Former prosecutor.
                  <br />
                  Now on your side.
                </p>
                <p className="mt-3 text-white/80 max-w-md">
                  Former municipal prosecutor and assistant law director for the City of Circleville.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-sky">
                  Meet Attorney Jwayyed
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`bento-card group flex flex-col justify-between gap-8 p-7 bg-navy-950 text-white hover:bg-navy-900 transition-colors ${RING_LIGHT}`}
            >
              <Stars className="w-5 h-5 fill-sky text-sky" />
              <div>
                <p className="jw-display text-[clamp(3rem,2rem+3vw,4.5rem)] leading-none tabular-nums">
                  <span data-count="5.0" data-decimals="1">
                    5.0
                  </span>
                </p>
                <p className="mt-2 text-white/80">
                  From{' '}
                  <span data-count="130" className="tabular-nums">
                    130
                  </span>
                  + Google reviews
                </p>
              </div>
            </a>

            <Link
              href="/courts"
              className={`bento-card group flex flex-col justify-between gap-8 p-7 bg-ice hover:bg-[#e6eef8] transition-colors ${RING_LIGHT}`}
            >
              <ArrowUpRight className="w-6 h-6 text-sky-deep transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              <div>
                <p className="jw-display text-[clamp(3rem,2rem+3vw,4.5rem)] leading-none tabular-nums">
                  <span data-count="11">11</span>
                </p>
                <p className="mt-2 text-navy-950/80">Ohio courts with their own guide on this site</p>
              </div>
            </Link>

            <div className="bento-card flex flex-col justify-between gap-8 p-7 bg-sky text-navy-950">
              <Phone className="w-6 h-6" aria-hidden="true" />
              <div>
                <p className="jw-display text-[length:var(--step-lead)] leading-tight">Direct access</p>
                <p className="mt-2">You speak with the attorney handling your case, not a screening service.</p>
              </div>
            </div>

            <div className="bento-card flex flex-col justify-between gap-8 p-7 bg-navy-900 text-white">
              <Check className="w-6 h-6 text-sky" aria-hidden="true" />
              <div>
                <p className="jw-display text-[length:var(--step-lead)] leading-tight">Clear fees</p>
                <p className="mt-2 text-white/80">Reasonable, predictable rates, explained before you commit to anything.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= PRACTICE AREAS (pinned title) ======================= */}
      <section className={`jw-mark jw-mark--navy ${SECTION} bg-ice`} style={markCorner('0% 100%', 0.06)} aria-labelledby="practice-heading">
        <div className={`${FRAME} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 id="practice-heading" className="reveal-title jw-display text-[length:var(--step-head)]">
                <Words text="Practice areas" />
              </h2>
              <div className="reveal-group">
                <p className="mt-6 text-[length:var(--step-lead)] leading-snug text-navy-950/75">
                  Six areas of Ohio law, each with its own guide to your options and next steps.
                </p>
                <p className="mt-8 text-navy-950/75">
                  Not sure where your matter fits?
                  <br />
                  <a href={PHONE_TEL} className={`font-semibold text-sky-deep underline underline-offset-4 tabular-nums ${RING_LIGHT}`}>
                    Call {PHONE_DISPLAY}
                  </a>
                </p>
                <Link
                  href="/services"
                  className={`group mt-8 inline-flex items-center gap-2 min-h-[50px] px-6 bg-navy-950 text-white font-semibold hover:bg-sky-deep transition-colors ${RING_LIGHT}`}
                >
                  See every service
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <ul className="lg:col-span-8 grid gap-6">
            {AREAS.map((a) => {
              const { href, tagline, links } = areaLinks(a.nav);
              return (
                <li key={a.nav} className="area-panel origin-center bg-white">
                  <Link href={href} className={`group block ${RING_LIGHT}`}>
                    <div className="relative aspect-[16/7] overflow-hidden bg-navy-950">
                      <Image
                        src={a.image}
                        alt={a.alt}
                        fill
                        sizes="(min-width:1024px) 60vw, 100vw"
                        className="jw-drift object-cover scale-110 transition-[scale] duration-700 ease-out group-hover:scale-[1.16]"
                      />
                      {/* A flat navy tint rather than a blend mode: blending made
                          the browser redraw each panel on every scroll frame. */}
                      <div className="absolute inset-0 bg-navy-950/55" aria-hidden="true" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" aria-hidden="true" />
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-6 text-white">
                        <div>
                          <h3 className="jw-display text-[clamp(1.6rem,1.1rem+1.6vw,2.5rem)] leading-tight">{a.title}</h3>
                          <p className="mt-1 text-white/80 max-w-xl">{tagline}</p>
                        </div>
                        <span className="hidden sm:inline-flex flex-shrink-0 items-center justify-center w-12 h-12 bg-sky text-navy-950 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                          <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                  <ul className="px-6 sm:px-8 py-5 flex flex-wrap gap-x-7 gap-y-2 text-[length:var(--step-small)]">
                    {links.map((l) => (
                      <li key={l.href + l.name}>
                        <Link href={l.href} className={`text-navy-950/80 hover:text-sky-deep underline-offset-4 hover:underline ${RING_LIGHT}`}>
                          {l.name.replace(/ →$/, '')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ======================= STATEMENT + CREDENTIALS (navy) ======================= */}
      <section className={`jw-mark ${SECTION} bg-navy-950 text-white`} aria-labelledby="about-heading">
        <div className={FRAME}>
          <h2 id="about-heading" className="reveal-title jw-display text-[length:var(--step-head)]">
            <Words text="The other side of the courtroom" />
          </h2>
          <p className="statement mt-10 max-w-5xl text-[clamp(1.5rem,1.1rem+1.4vw,2.25rem)] leading-[1.35]">
            <Words text={STATEMENT} />
          </p>
          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <ul className="reveal-group lg:col-span-8 grid gap-x-10 gap-y-4 sm:grid-cols-2 text-white/85">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-sky" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="reveal-group lg:col-span-4 lg:justify-self-end">
              <p className="text-white/75">He speaks English and Arabic.</p>
              <Link
                href="/our-law-firm/about-us"
                className={`group mt-6 inline-flex items-center gap-2 min-h-[50px] px-6 border border-sky text-sky font-semibold hover:bg-sky hover:text-navy-950 transition-colors ${RING_DARK}`}
              >
                Read his full story
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= RESULTS (white) ======================= */}
      <section className={`jw-mark jw-mark--navy ${SECTION} bg-white`} style={markCorner('100% 100%', 0.05)} aria-labelledby="results-heading">
        <div className={FRAME}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="results-heading" className="reveal-title jw-display lg:col-span-7 text-[length:var(--step-head)]">
              <Words text="Recent results" />
            </h2>
            <p className="reveal-group lg:col-span-5 text-navy-950/75">
              <span>A sample of charges reduced or dismissed for clients across Ohio. Past results do not guarantee a future outcome.</span>
            </p>
          </div>

          <ol className="mt-14 grid gap-4">
            {RESULTS.map((r) => (
              <li key={r.charge} className="result-row grid gap-4 bg-ice px-6 sm:px-10 py-8 sm:py-10 lg:grid-cols-12 lg:items-center">
                <p className="jw-display lg:col-span-7 text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-tight flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="jw-strike text-navy-950/45">
                    <span className="sr-only">Charged with </span>
                    {r.charge}
                    <span className="jw-strike-bar" aria-hidden="true" />
                  </span>
                  <ArrowRight className="result-outcome w-7 h-7 text-sky-deep flex-shrink-0" aria-hidden="true" />
                  <span className="result-outcome text-sky-deep">
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
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ======================= REVIEWS (navy) ======================= */}
      <section
        className={`jw-mark ${SECTION} bg-navy-900 text-white overflow-hidden`}
        style={{ '--jw-mark-fade': 'radial-gradient(ellipse 70% 55% at 50% 0%, #000 20%, transparent 100%)' } as React.CSSProperties}
        aria-labelledby="reviews-heading"
      >
        <div className={FRAME}>
          <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
            <h2 id="reviews-heading" className="reveal-title jw-display text-[length:var(--step-head)]">
              <Words text="What clients say" />
            </h2>

            <div className="reveal-group mt-10 grid gap-3 grid-cols-2 lg:grid-cols-4">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BADGE_TILE} hover:bg-navy-700 transition-colors ${RING_DARK}`}
              >
                <span className={BADGE_ART}>
                <svg width="64" height="64" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                </span>
                <span>
                  <span className="flex items-center justify-center gap-1.5">
                    <Stars className="w-3.5 h-3.5 fill-sky text-sky" />
                    <span className="font-semibold">{RATING}</span>
                  </span>
                  <span className="block text-[length:var(--step-small)] text-mist">130+ Google reviews</span>
                </span>
              </a>

              <a
                href="https://www.bbb.org/us/oh/columbus/profile/attorneys-lawyers/jwayyed-law-llc-0302-70166716/#sealclick"
                target="_blank"
                rel="nofollow noreferrer"
                className={`${BADGE_TILE} hover:bg-navy-700 transition-colors ${RING_DARK}`}
              >
                {/* Remote seal served by BBB; next/image would need a loader for it. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <span className={BADGE_ART}>
                  <img
                    src="https://seal-centralohio.bbb.org/seals/blue-seal-200-42-bbb-70166716.png"
                    alt="BBB seal"
                    width={200}
                    height={42}
                    className="w-[200px] max-w-full h-auto object-contain bg-white p-2"
                  />
                </span>
                <span>
                  <span className="block font-semibold">A+ accredited</span>
                  <span className="block text-[length:var(--step-small)] text-mist">Better Business Bureau</span>
                </span>
              </a>

              <NCDDBadge variant="glass" />

              <div className={BADGE_TILE}>
                <span className={BADGE_ART}>
                  <Image
                    src="/assets/jwayyed-law-llc-plaque.png"
                    alt="Jwayyed Law LLC, BusinessRate Best of 2026 award winner"
                    width={1540}
                    height={1900}
                    sizes="96px"
                    className="h-24 w-auto"
                  />
                </span>
                <span>
                  <span className="block font-semibold">Best of 2026</span>
                  <span className="block text-[length:var(--step-small)] text-mist">BusinessRate award</span>
                </span>
              </div>
            </div>
          </div>

          <div className="reveal-group grid items-center gap-8 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
            <ReviewSummaryCard
              rating={Number(RATING)}
              reviewCount={130}
              orMore
              summaryText={`Rated ${RATING} from 130+ verified Google reviews.`}
              className="mx-auto lg:mx-0 bg-white text-navy-950"
            />
            <TestimonialWall />
          </div>
        </div>
      </section>

      {/* ======================= THE PLACE ======================= */}
      <figure className="statehouse relative h-[64svh] min-h-[400px] overflow-hidden bg-navy-950">
        <Image src="/assets/found/ohio-statehouse.jpg" alt="The Ohio Statehouse in Columbus" fill sizes="100vw" className="jw-drift-wide object-cover" />
        <figcaption className={`${FRAME} absolute inset-x-0 bottom-0 pb-6 text-[length:var(--step-small)] text-white`}>
          <span className="bg-navy-950 px-3 py-1.5">The Ohio Statehouse, Columbus.</span>
        </figcaption>
      </figure>

      {/* ======================= CONTACT + COURTS (white) ======================= */}
      <section className={`jw-mark jw-mark--navy ${SECTION} bg-white`} style={markCorner('0% 0%', 0.05)} aria-labelledby="contact-heading">
        <div className={`${FRAME} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
          <div className="lg:col-span-5">
            <h2 id="contact-heading" className="reveal-title jw-display text-[length:var(--step-head)]">
              <Words text="Find us" />
            </h2>
            <div className="reveal-group">
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

          <div className="reveal-group lg:col-span-7 lg:pt-4">
            <div>
              <CourtFinder />
            </div>
          </div>
        </div>
      </section>

      {/* ======================= CLOSING (sky) ======================= */}
      <section className="jw-mark jw-mark--navy bg-sky text-navy-950" style={{ '--jw-mark-opacity': 0.09 } as React.CSSProperties} aria-labelledby="closing-heading">
        <div className={`${FRAME} py-[clamp(88px,9vw,152px)] grid gap-10 lg:grid-cols-12 lg:items-end`}>
          <h2 id="closing-heading" className="reveal-title jw-display lg:col-span-7 text-[1.875rem] sm:text-[length:var(--step-head)]">
            <Words text="Facing a charge or a claim?" />
            <br />
            <Words text="Talk to an attorney today." />
          </h2>
          <div className="reveal-group lg:col-span-5 flex flex-col gap-5 lg:items-end">
            <a
              href={PHONE_TEL}
              className="jw-display text-[clamp(2rem,1.4rem+2.2vw,3.25rem)] tabular-nums hover:underline underline-offset-8 decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-950"
            >
              {PHONE_DISPLAY}
            </a>
            <div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 min-h-[54px] px-7 bg-navy-950 text-white font-semibold hover:bg-white hover:text-navy-950 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy-950"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MobileCallBar />
    </div>
  );
}
