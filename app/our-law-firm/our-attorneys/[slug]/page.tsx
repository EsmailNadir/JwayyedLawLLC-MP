import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { teamMembers, getMemberBySlug } from '@/data/team-members';

// Only generate pages for members with fullBio content (not the attorney who has a separate page)
const profileMembers = teamMembers.filter((m) => m.fullBio);

export async function generateStaticParams() {
  return profileMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) {
    return { title: 'Staff Member Not Found' };
  }

  return {
    title: `${member.name} — ${member.title} | Jwayyed Law LLC`,
    description: member.shortBio,
    keywords: [
      member.name,
      member.title,
      'Jwayyed Law LLC',
      'Ohio legal team',
    ],
    openGraph: {
      title: `${member.name} — ${member.title}`,
      description: member.shortBio,
      url: `https://www.jjlawohio.com/our-law-firm/our-attorneys/${slug}`,
      type: 'profile',
    },
    alternates: {
      canonical: `/our-law-firm/our-attorneys/${slug}`,
    },
  };
}

export default async function StaffProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member || !member.fullBio) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Our Law Firm', href: '/our-law-firm' },
    { label: 'Our Staff', href: '/our-law-firm/our-attorneys' },
    { label: member.name, href: `/our-law-firm/our-attorneys/${slug}` },
  ];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.title,
    worksFor: {
      '@type': 'LegalService',
      name: 'Jwayyed Law LLC',
    },
    image: `https://www.jjlawohio.com${member.image}`,
    url: `https://www.jjlawohio.com/our-law-firm/our-attorneys/${slug}`,
  };

  // Other team members for the "meet the team" section
  const otherMembers = teamMembers.filter((m) => m.slug !== slug).slice(0, 4);

  // Note: member.fullBio is static HTML from data/team-members.ts (not user input).
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {/* ── Profile Header ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#1a1a2e] via-[#2d3436] to-[#1a1a2e]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#b87333]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            {/* Photo */}
            <div className="flex-shrink-0 w-full max-w-[320px] md:w-[300px] lg:w-[350px]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 350px"
                  className="object-cover object-top"
                  quality={90}
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <span
                className={`
                  inline-block text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-5
                  font-['DM_Sans',_'Helvetica_Neue',_sans-serif]
                  ${
                    member.role === 'Attorney'
                      ? 'bg-[#b87333]/20 text-[#d4a574]'
                      : member.role === 'Staff'
                        ? 'bg-[#2d6a4f]/20 text-[#40916c]'
                        : 'bg-white/10 text-gray-300'
                  }
                `}
              >
                {member.role}
              </span>

              <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
                {member.name}
              </h1>
              <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-[#b87333] text-lg font-semibold mb-6">
                {member.title}
              </p>

              {/* Highlights */}
              {member.highlights && (
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {member.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-['DM_Sans',_'Helvetica_Neue',_sans-serif]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bio Content ────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Static HTML content from data/team-members.ts (not user input) */}
          <div
            className="
              prose prose-lg max-w-none
              font-['DM_Sans',_'Helvetica_Neue',_sans-serif]
              prose-headings:font-['Playfair_Display',_'Georgia',_serif]
              prose-headings:text-gray-900
              prose-p:text-gray-600
              prose-p:leading-relaxed
              prose-p:mb-5
              prose-strong:text-gray-800
            "
            dangerouslySetInnerHTML={{ __html: member.fullBio }}
          />

          {/* Back link */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <Link
              href="/our-law-firm/our-attorneys"
              className="inline-flex items-center gap-2 text-[#b87333] hover:text-[#8b5a1f] font-semibold transition-colors duration-300 font-['DM_Sans',_'Helvetica_Neue',_sans-serif]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Our Staff
            </Link>
          </div>
        </div>
      </section>

      {/* ── Other Team Members ─────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Meet the Rest of the Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherMembers.map((other) => (
              <Link
                key={other.slug}
                href={other.profileLink}
                className="group"
              >
                <div className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#b87333]/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#2d3436]">
                    <Image
                      src={other.image}
                      alt={other.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      quality={80}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1a1a2e] to-transparent" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-white group-hover:text-[#d4a574] transition-colors duration-300">
                      {other.name}
                    </h3>
                    <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-[#b87333] text-xs font-semibold tracking-wide mt-1">
                      {other.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────────── */}
      <ContactCTA />
    </>
  );
}
