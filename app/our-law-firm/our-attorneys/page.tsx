import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, MapPin, Check } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { teamMembers } from '@/data/team-members';

export const metadata: Metadata = {
  title: 'Attorney Jwayyed | Ohio OVI & Criminal Defense Lawyer',
  description:
    'Meet Attorney Jwayyed, managing attorney of Jwayyed Law LLC — former municipal prosecutor serving Ohio in OVI/DUI, criminal defense, estate planning & business law. Call (614) 285-5482.',
  alternates: {
    canonical: '/our-law-firm/our-attorneys',
  },
  openGraph: {
    title: 'Attorney Jwayyed | Jwayyed Law LLC Ohio',
    description:
      'Meet Attorney Jwayyed — former municipal prosecutor and managing attorney of Jwayyed Law LLC, serving clients across Ohio.',
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
  { name: 'OVI / DUI Defense', href: '/ovi-dui-defense' },
  { name: 'Criminal Defense', href: '/criminal-defense' },
  { name: 'Personal Injury', href: '/personal-injury' },
  { name: 'Civil Litigation', href: '/civil' },
  { name: 'Business Law', href: '/business' },
  { name: 'Estate Planning & Trusts', href: '/trusts' },
  { name: 'Probate', href: '/other-services/probate' },
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

      {/* ======================= PROFILE ======================= */}
      <section className="relative bg-navy-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(184,115,51,0.16),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center">
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-navy-950 shadow-black/40">
              <Image
                src={attorney.image}
                alt={attorney.imageAlt ?? attorney.name}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
                style={{ objectPosition: attorney.imageObjectPosition ?? 'center 20%' }}
                quality={85}
              />
            </div>
            <div className="absolute -bottom-3 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-deep to-transparent" aria-hidden="true" />
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-sky font-semibold mb-4">{attorney.title}</p>
            <h1 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-6">
              {attorney.name}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mb-8">{attorney.shortBio}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-navy-950 hover:bg-[#a66628] text-white px-7 py-3.5 font-semibold text-base shadow-black/30 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c8a0] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white px-7 py-3.5 font-semibold text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-navy-950/50">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-deep" aria-hidden="true" />
                Columbus, serving clients statewide
              </span>
              <Link href={attorney.profileLink} className="inline-flex items-center gap-1.5 text-sky hover:text-white font-medium transition-colors">
                Read his full story
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= CREDENTIALS + PRACTICE ======================= */}
      <section className="bg-ice border-b border-navy-950/10 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {attorney.highlights && attorney.highlights.length > 0 && (
            <div>
              <h2 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-2xl sm:text-3xl font-semibold text-navy-950 mb-6">
                Credentials
              </h2>
              <ul className="space-y-3">
                {attorney.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-navy-950/80">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sky-deep/10">
                      <Check className="h-3.5 w-3.5 text-sky-deep" aria-hidden="true" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-2xl sm:text-3xl font-semibold text-navy-950 mb-6">
              How he can help
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {practiceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="group flex items-center justify-between gap-3 border border-navy-950/10 bg-white px-4 py-3 text-sm font-medium text-navy-950 hover:border-sky-deep hover:text-sky-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep"
                  >
                    {area.name}
                    <ArrowRight className="w-4 h-4 text-navy-950/50 group-hover:text-sky-deep transition-colors" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
