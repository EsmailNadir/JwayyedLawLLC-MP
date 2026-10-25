import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import OfficeStatus from '@/components/OfficeStatus';
import { LinkGrid, Section } from '@/components/practice';
import { teamMembers } from '@/data/team-members';

export const metadata: Metadata = {
  title: 'Attorney Jwayyed | Ohio OVI & Criminal Defense Lawyer',
  description:
    'Attorney Jwayyed, managing attorney of Jwayyed Law LLC: former municipal prosecutor representing clients across Ohio in OVI, criminal, estate and business matters.',
  alternates: {
    canonical: '/our-law-firm/our-attorneys',
  },
  openGraph: {
    title: 'Attorney Jwayyed | Jwayyed Law LLC',
    description: 'Former municipal prosecutor and managing attorney of Jwayyed Law LLC, representing clients across Ohio.',
    url: 'https://www.jjlawohio.com/our-law-firm/our-attorneys',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Our Attorney', href: '/our-law-firm/our-attorneys' },
];

const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';

const practiceAreas = [
  { title: 'OVI / DUI defense', href: '/ovi-dui-defense' },
  { title: 'Criminal defense', href: '/criminal-defense' },
  { title: 'Personal injury', href: '/personal-injury' },
  { title: 'Civil litigation', href: '/civil' },
  { title: 'Business law', href: '/business' },
  { title: 'Estate planning and trusts', href: '/trusts' },
  { title: 'Probate', href: '/other-services/probate' },
];

/**
 * The firm is one attorney, so this page is a single profile rather than a
 * team grid: portrait, credentials and a direct way to reach him. Content
 * comes from data/team-members.ts so it stays in step with his bio page.
 */
export default function OurAttorneyPage() {
  const attorney = teamMembers.find((m) => m.role === 'Attorney') ?? teamMembers[0];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <section className="jw jw-mark bg-navy-950 text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="jw-enter lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-md overflow-hidden bg-navy-900">
              <Image
                src={attorney.image}
                alt={attorney.imageAlt ?? attorney.name}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
                style={{ objectPosition: attorney.imageObjectPosition ?? 'center 20%' }}
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="jw-enter text-sky font-semibold">{attorney.title}</p>
            <h1 className="jw-enter jw-display mt-3 text-[clamp(2.5rem,1.6rem+3.6vw,5rem)] leading-[1.02]" style={{ '--d': '80ms' } as React.CSSProperties}>
              {attorney.name}
            </h1>
            <p className="jw-enter mt-6 max-w-[42rem] text-[length:var(--step-lead)] leading-snug text-white/80" style={{ '--d': '160ms' } as React.CSSProperties}>
              {attorney.shortBio}
            </p>
            <div className="jw-enter mt-10 flex flex-col sm:flex-row gap-3" style={{ '--d': '240ms' } as React.CSSProperties}>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 min-h-[56px] px-7 bg-sky text-navy-950 font-semibold tabular-nums hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 min-h-[56px] px-7 border border-white/50 font-semibold hover:bg-white hover:text-navy-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
              >
                Schedule a consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div className="jw-enter mt-8 flex flex-wrap items-center gap-x-8 gap-y-3" style={{ '--d': '320ms' } as React.CSSProperties}>
              <OfficeStatus tone="dark" />
              <Link href={attorney.profileLink} className="inline-flex items-center gap-2 text-sky hover:text-white font-medium transition-colors">
                Read his full story
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {attorney.highlights && attorney.highlights.length > 0 && (
        <section className="bg-navy-900 text-white" aria-label="Credentials">
          <ul className="max-w-[1440px] mx-auto px-5 sm:px-8 py-10 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {attorney.highlights.map((h) => (
              <li key={h} className="border-t border-white/15 pt-4 text-[length:var(--step-lead)] leading-snug">
                {h}
              </li>
            ))}
          </ul>
        </section>
      )}

      <Section title="How he can help" tone="ice">
        <p>
          He represents clients in these areas across Ohio. For the full story of his background, read{' '}
          <Link href={`/our-law-firm/our-attorneys/${attorney.slug}`}>his attorney profile</Link> or{' '}
          <Link href={attorney.profileLink}>about the firm</Link>.
        </p>
        <LinkGrid links={practiceAreas} />
      </Section>

      <ContactCTA />
    </>
  );
}
