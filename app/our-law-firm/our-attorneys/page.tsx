import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Phone, MapPin } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { teamMembers, type TeamMember } from '@/data/team-members';

export const metadata: Metadata = {
  title: 'Our Attorneys | Jwayyed Law LLC Ohio',
  description:
    'Meet the legal team at Jwayyed Law LLC — experienced Ohio attorneys in OVI/DUI, criminal defense, estate planning & business law. Call (614) 285-5482.',
  alternates: {
    canonical: '/our-law-firm/our-attorneys',
  },
  openGraph: {
    title: 'Our Attorneys | Jwayyed Law LLC Ohio',
    description: 'Meet the legal team at Jwayyed Law LLC — experienced Ohio attorneys in OVI/DUI, criminal defense, estate planning & business law.',
    url: 'https://www.jjlawohio.com/our-law-firm/our-attorneys',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Our Staff', href: '/our-law-firm/our-attorneys' },
];

const PHONE_DISPLAY = '(614) 285-5482';
const PHONE_TEL = 'tel:+16142855482';

const roleOrder: Record<TeamMember['role'], number> = {
  Attorney: 0,
  Staff: 1,
  Intern: 2,
};

export default function OurStaffPage() {
  const orderedMembers = [...teamMembers].sort(
    (a, b) => roleOrder[a.role] - roleOrder[b.role],
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map(
      (item: { label: string; href: string }, idx: number) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': item.label,
        'item': `https://www.jjlawohio.com${item.href}`,
      })
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* ======================= HERO ======================= */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-20 sm:py-28">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.18),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#b87333]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#e8c8a0] font-semibold">
              Our Team
            </span>
            <span className="h-px w-8 bg-[#b87333]" />
          </div>
          <h1 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-5">
            Meet Our Staff.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-9">
            Dedicated legal professionals serving clients throughout Ohio with experience, integrity, and a commitment to results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-7">
            <Link href="/contact" className="w-full sm:w-auto group">
              <button className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b87333] hover:bg-[#a66628] text-white px-7 py-3.5 rounded-md font-semibold text-base shadow-xl shadow-black/30 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c8a0] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </Link>
            <a href={PHONE_TEL} className="w-full sm:w-auto">
              <button className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/40 hover:border-white text-white px-7 py-3.5 rounded-md font-semibold text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </button>
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-[#b87333]" aria-hidden="true" />
            <span>Columbus · Cincinnati · Dayton · clients statewide</span>
          </div>
        </div>
      </section>

      {/* ======================= UNIFORM TEAM GRID ======================= */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {orderedMembers.map((m) => {
              const isPrincipal = m.role === 'Attorney';
              return (
                <Link
                  key={m.slug}
                  href={m.profileLink}
                  className="group relative bg-white rounded-lg border border-slate-200 hover:border-[#b87333] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b87333] focus-visible:ring-offset-2"
                >
                  {/* Top accent — always visible for principal, hover-only for others */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b87333] to-transparent z-10 transition-opacity duration-300 ${
                      isPrincipal ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                    aria-hidden="true"
                  />

                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={m.image}
                      alt={m.imageAlt ?? m.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: m.imageObjectPosition ?? 'center 20%' }}
                      quality={85}
                      priority={isPrincipal}
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full backdrop-blur-sm shadow-sm ${
                          isPrincipal
                            ? 'bg-[#b87333] text-white border border-[#b87333]'
                            : 'bg-white/90 text-slate-900 border border-slate-200'
                        }`}
                      >
                        {m.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="[font-family:var(--font-playfair),'Playfair_Display',serif] text-lg sm:text-xl font-semibold text-slate-900 mb-1 leading-tight">
                      {m.name}
                    </h3>
                    <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[#b87333] font-semibold mb-3">
                      {m.title}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {m.shortBio}
                    </p>

                    {m.highlights && m.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4 pb-4 border-b border-slate-100">
                        {m.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}

                    <span className="inline-flex items-center gap-1.5 mt-auto text-sm font-semibold text-[#b87333]">
                      View Profile
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
