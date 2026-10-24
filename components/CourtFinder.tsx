'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Phone } from 'lucide-react';

/**
 * "Which court is on your ticket?" — the home page's one live thing.
 *
 * Every court listed has its own guide on the site. Places come from those
 * pages and the navigation; street addresses are shown only where a court
 * page states one, rather than being guessed. Without script the select is
 * inert but the first court's guide and the full courts page still link.
 */
const COURTS = [
  { name: 'Franklin County Municipal Court', place: '375 S. High St., Columbus', href: '/courts/franklin-county-municipal-court' },
  { name: 'Delaware County Municipal Court', place: 'Delaware, Delaware County', href: '/courts/delaware-county-municipal-court' },
  { name: 'Johnstown Mayor’s Court', place: '599 S. Main St., Johnstown', href: '/courts/johnstown-mayors-court' },
  { name: 'Circleville Municipal Court', place: 'Circleville, Pickaway County', href: '/courts/circleville-municipal-court' },
  { name: 'Morrow County Municipal Court', place: 'Mount Gilead, Morrow County', href: '/courts/morrow-county-municipal-court' },
  { name: 'Athens Municipal Court', place: 'Athens, Athens County', href: '/courts/athens-municipal-court' },
  { name: 'Wilmington Municipal Court', place: 'Wilmington, Clinton County', href: '/courts/wilmington-municipal-court' },
  { name: 'Hamilton Municipal Court', place: 'Hamilton, Butler County', href: '/courts/hamilton-municipal-court' },
  { name: 'Butler County Area Courts', place: 'Oxford, Hamilton and West Chester', href: '/courts/butler-county' },
  { name: 'Fairborn Municipal Court', place: 'Fairborn, Greene County', href: '/courts/fairborn-municipal-court' },
  { name: 'Dayton Municipal Court', place: 'Dayton, Montgomery County', href: '/courts/dayton-municipal-court' },
] as const;

const PHONE_TEL = 'tel:+16142855482';

export default function CourtFinder() {
  const [index, setIndex] = useState(0);
  const id = useId();
  const court = COURTS[index];

  return (
    <div className="bg-[#d9964f] text-[#0f1f10] px-5 sm:px-8 py-8 sm:py-10 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end">
      <div>
        <label htmlFor={id} className="block text-[length:var(--step-lead)] font-medium leading-tight">
          Which court is on your ticket?
        </label>
        <select
          id={id}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="mt-4 w-full min-h-[52px] bg-[#0f1f10] text-white text-[length:var(--step-body)] px-4 pr-10 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
        >
          {COURTS.map((c, i) => (
            <option key={c.href} value={i}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div aria-live="polite">
        <p className="text-[length:var(--step-lead)] font-medium leading-tight">{court.name}</p>
        <p className="mt-1 text-[length:var(--step-body)]">{court.place}. Jwayyed Law appears here.</p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <Link
            href={court.href}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 bg-[#0f1f10] text-white font-medium hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
          >
            What to expect at this court
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 border-2 border-[#0f1f10] font-medium hover:bg-[#0f1f10] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call about a case here
          </a>
        </div>
        <p className="mt-4 text-[length:var(--step-small)]">
          Not listed?{' '}
          <Link href="/courts" className="underline underline-offset-4 font-medium">
            See every court we cover
          </Link>
        </p>
      </div>
    </div>
  );
}
