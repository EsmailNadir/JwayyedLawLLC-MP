import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import OfficeStatus from '@/components/OfficeStatus';
import ConsultationPanel from '@/components/contact/ConsultationPanel';
import OfficeMap from '@/components/contact/OfficeMap';

export const metadata: Metadata = {
  title: { absolute: 'Contact Jwayyed Law LLC | Schedule a Consultation' },
  description:
    'Schedule a consultation with Jwayyed Law LLC for OVI/DUI, criminal, injury, civil, business or estate matters anywhere in Ohio. Call (614) 285-5482.',
  keywords: [
    'contact attorney Ohio',
    'schedule consultation Ohio',
    'Columbus lawyer consultation',
    'Ohio OVI attorney contact',
    'criminal defense attorney Ohio',
    'OVI DUI defense attorney Ohio',
    'personal injury claim lawyer Ohio',
    'Jwayyed Law LLC',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Jwayyed Law LLC | Schedule a Consultation',
    description: 'Schedule a consultation with Jwayyed Law LLC. OVI/DUI, criminal defense, estate planning, and more. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

/*
 * Contact. One idea runs through it: the shortest path to the attorney.
 * The number is the headline, the office status is live, the message form
 * sits beside the phone number, and the map is the firm's own navy.
 */

const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';
const EMAIL = 'jwayyedlawllc@outlook.com';
const ADDRESS_LINE_1 = '100 E. Campus View Blvd, Suite 250';
const ADDRESS_LINE_2 = 'Columbus, OH 43235';
const DESTINATION = encodeURIComponent('100 E Campus View Blvd Suite 250, Columbus, OH 43235');
const GOOGLE_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${DESTINATION}`;
const APPLE_DIRECTIONS = `https://maps.apple.com/?daddr=${DESTINATION}`;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

/** Same BreadcrumbList the shared Breadcrumbs component emits. */
const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
};

const FRAME = 'max-w-[1440px] mx-auto px-5 sm:px-8';
const RING_DARK = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky';
const RING_LIGHT = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep';

const MATTERS = [
  { label: 'OVI / DUI defense', href: '/ovi-dui-defense' },
  { label: 'Criminal defense', href: '/criminal-defense' },
  { label: 'Personal injury', href: '/personal-injury' },
  { label: 'Civil litigation', href: '/civil' },
  { label: 'Business law', href: '/business' },
  { label: 'Trusts', href: '/trusts' },
  { label: 'Estate planning', href: '/other-services/estate-planning-wills' },
  { label: 'Probate', href: '/other-services/probate' },
];

export default function ContactPage() {
  return (
    <div className="jw bg-white text-navy-950 text-[length:var(--step-body)] leading-[1.6]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      {/* ======================= OPENING (navy) ======================= */}
      <section className="jw-mark bg-navy-950 text-white overflow-hidden" aria-labelledby="contact-title">
        <div className={`${FRAME} grid gap-12 lg:grid-cols-12 lg:items-end pt-10 sm:pt-14 pb-16 sm:pb-24`}>
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="jw-enter text-[length:var(--step-small)] text-mist">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className={`hover:text-white transition-colors ${RING_DARK}`}>
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  Contact
                </li>
              </ol>
            </nav>

            <h1 id="contact-title" className="jw-enter jw-display mt-10 text-[length:var(--step-display)] leading-[1.04]" style={{ '--d': '80ms' } as React.CSSProperties}>
              Talk to an attorney today.
            </h1>
            <p className="jw-enter mt-6 max-w-[40rem] text-[length:var(--step-lead)] leading-snug text-white/85" style={{ '--d': '160ms' } as React.CSSProperties}>
              Consultations for criminal, OVI, injury, civil, business and estate matters anywhere in Ohio. You
              speak with the attorney who will handle your case.
            </p>

            <a
              href={PHONE_TEL}
              className={`jw-enter group mt-12 inline-flex flex-wrap items-baseline gap-x-5 gap-y-2 ${RING_DARK}`}
              style={{ '--d': '240ms' } as React.CSSProperties}
            >
              <span className="jw-display text-[clamp(2.75rem,1.6rem+5vw,6rem)] leading-none tabular-nums text-sky group-hover:text-white transition-colors">
                {PHONE_DISPLAY}
              </span>
              <span className="inline-flex items-center gap-2 text-[length:var(--step-small)] font-medium text-white/80 group-hover:text-white transition-colors">
                Tap to call
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </a>

            <div className="jw-enter mt-6 min-h-[1.6em]" style={{ '--d': '320ms' } as React.CSSProperties}>
              <OfficeStatus tone="dark" />
            </div>

            <div className="jw-enter mt-10 flex flex-col sm:flex-row gap-3" style={{ '--d': '400ms' } as React.CSSProperties}>
              <a
                href="#message"
                className="group inline-flex items-center justify-center gap-2 min-h-[56px] px-8 bg-sky text-navy-950 font-semibold hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
              >
                Send a message
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>

          <figure className="jw-enter lg:col-span-5 relative" style={{ '--d': '200ms' } as React.CSSProperties}>
            <div className="relative aspect-[4/5] max-h-[620px] overflow-hidden bg-navy-900">
              <Image
                src="/assets/attorney-main.jpg"
                alt="Attorney Jwayyed in a courthouse hallway"
                fill
                priority
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" aria-hidden="true" />
            </div>
            <figcaption className="absolute left-0 bottom-0 p-6 sm:p-8">
              <span className="block jw-display text-[clamp(1.4rem,1.1rem+1vw,2rem)] leading-tight">Attorney Jwayyed</span>
              <span className="block mt-1 text-white/80 text-[length:var(--step-small)]">Former municipal prosecutor. Licensed in Ohio since 2019.</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ======================= THREE WAYS IN ======================= */}
      <section className="bg-white" aria-labelledby="ways-heading">
        <h2 id="ways-heading" className="sr-only">
          Ways to reach the firm
        </h2>
        <div className={`${FRAME} grid md:grid-cols-3`}>
          <a href={PHONE_TEL} className={`group block py-10 md:py-14 md:pr-10 border-b md:border-b-0 md:border-r border-navy-950/10 ${RING_LIGHT}`}>
            <p className="jw-display text-[clamp(1.75rem,1.3rem+1.2vw,2.5rem)] leading-tight">Call</p>
            <p className="mt-4 text-[length:var(--step-lead)] font-semibold tabular-nums text-sky-deep group-hover:text-navy-950 transition-colors">
              {PHONE_DISPLAY}
            </p>
            <p className="mt-3 text-navy-950/75 max-w-[36ch]">
              Monday to Friday, 9am to 5pm. After hours, leave a voicemail with your name, number and the reason for
              your call.
            </p>
          </a>
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent('Inquiry from jjlawohio.com')}`}
            className={`group block py-10 md:py-14 md:px-10 border-b md:border-b-0 md:border-r border-navy-950/10 ${RING_LIGHT}`}
          >
            <p className="jw-display text-[clamp(1.75rem,1.3rem+1.2vw,2.5rem)] leading-tight">Write</p>
            <p className="mt-4 text-[length:var(--step-lead)] font-semibold text-sky-deep group-hover:text-navy-950 transition-colors break-all">
              {EMAIL}
            </p>
            <p className="mt-3 text-navy-950/75 max-w-[36ch]">
              Best for questions that are not urgent. Every email is returned within one business day.
            </p>
          </a>
          <a href={GOOGLE_DIRECTIONS} target="_blank" rel="noopener noreferrer" className={`group block py-10 md:py-14 md:pl-10 ${RING_LIGHT}`}>
            <p className="jw-display text-[clamp(1.75rem,1.3rem+1.2vw,2.5rem)] leading-tight">Visit</p>
            <p className="mt-4 text-[length:var(--step-lead)] font-semibold text-sky-deep group-hover:text-navy-950 transition-colors">
              {ADDRESS_LINE_1}
            </p>
            <p className="mt-3 text-navy-950/75 max-w-[36ch]">
              {ADDRESS_LINE_2}. By appointment only, so please call before you come in.
            </p>
          </a>
        </div>
      </section>

      {/* ======================= WRITE (ice) ======================= */}
      <section
        id="consult"
        className="jw-mark jw-mark--navy bg-ice py-20 sm:py-28 scroll-mt-20"
        style={{ '--jw-mark-fade': 'radial-gradient(ellipse 55% 70% at 100% 0%, #000 10%, transparent 100%)', '--jw-mark-opacity': 0.06 } as React.CSSProperties}
        aria-labelledby="consult-heading"
      >
        <span id="message" className="block scroll-mt-24" aria-hidden="true" />
        <div className={FRAME}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end mb-10 sm:mb-12">
            <h2 id="consult-heading" className="jw-display lg:col-span-7 text-[length:var(--step-head)] leading-[1.08]">
              Tell us what happened.
            </h2>
            <p className="lg:col-span-5 text-navy-950/75">
              A message is read by the attorney and answered within one business day. To set up a consultation, call
              or send a message.
            </p>
          </div>
          <ConsultationPanel />
        </div>
      </section>

      {/* ======================= THE OFFICE (map) ======================= */}
      <section className="relative bg-navy-950 text-white" aria-labelledby="office-heading">
        <OfficeMap className="h-[56svh] min-h-[380px] lg:h-[78svh] lg:min-h-[520px] lg:max-h-[820px]" />
        {/* Over the map on wide screens; under it on phones, where a card on
            top would hide the map entirely. */}
        <div className="lg:pointer-events-none lg:absolute lg:inset-0">
          <div className={`${FRAME} h-full flex lg:items-center`}>
            <div className="pointer-events-auto jw-mark w-full lg:max-w-[26rem] bg-navy-950/95 py-10 lg:p-9 lg:border-t-2 border-sky">
              <h2 id="office-heading" className="jw-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-tight">
                The office
              </h2>
              <address className="mt-5 not-italic text-[length:var(--step-lead)] leading-snug">
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </address>
              <p className="mt-4 text-white/75">Monday to Friday, 9am to 5pm. By appointment only; walk-ins are not available.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={GOOGLE_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 min-h-[48px] px-5 bg-sky text-navy-950 font-semibold hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
                >
                  Google Maps
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={APPLE_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 min-h-[48px] px-5 border border-white/50 font-semibold hover:bg-white hover:text-navy-950 transition-colors ${RING_DARK}`}
                >
                  Apple Maps
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= BEFORE YOU REACH OUT ======================= */}
      <section className="bg-white py-20 sm:py-28" aria-labelledby="notice-heading">
        <div className={`${FRAME} grid gap-12 lg:grid-cols-12`}>
          <h2 id="notice-heading" className="jw-display lg:col-span-4 text-[length:var(--step-head)] leading-[1.08]">
            Good to know
          </h2>
          <div className="lg:col-span-8 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-[length:var(--step-lead)]">How the firm responds</h3>
              <p className="mt-3 text-navy-950/80">
                Consultations are by appointment only. Every call, voicemail and email is returned within one business
                day. Calls without a voicemail may not be returned, so please leave your name, number and the reason
                for your call.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[length:var(--step-lead)]">Emergencies and confidentiality</h3>
              <p className="mt-3 text-navy-950/80">
                <strong className="text-navy-950">In an emergency, call 911.</strong> Contacting the firm, by any means,
                does not create an attorney-client relationship; that begins only when a representation agreement is
                signed. Please do not send confidential or time-sensitive details by email or the message form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= MATTERS (sky) ======================= */}
      <section className="jw-mark jw-mark--navy bg-sky text-navy-950" style={{ '--jw-mark-opacity': 0.09 } as React.CSSProperties} aria-labelledby="matters-heading">
        <div className={`${FRAME} py-16 sm:py-20 grid gap-10 lg:grid-cols-12 lg:items-start`}>
          <div className="lg:col-span-4">
            <h2 id="matters-heading" className="jw-display text-[clamp(1.875rem,1.4rem+1.6vw,2.75rem)] leading-tight">
              Matters the firm handles
            </h2>
            <p className="mt-4 max-w-[36ch]">Columbus, Cincinnati, Dayton, and clients in every Ohio county.</p>
          </div>
          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {MATTERS.map((m) => (
              <li key={m.href}>
                <Link
                  href={m.href}
                  className="group flex items-center justify-between gap-4 py-4 border-b border-navy-950/20 text-[length:var(--step-lead)] font-medium hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-950"
                >
                  {m.label}
                  <ArrowRight className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
