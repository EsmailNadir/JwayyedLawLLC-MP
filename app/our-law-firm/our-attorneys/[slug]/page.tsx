import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { teamMembers, getMemberBySlug } from '@/data/team-members';

// Only generate pages for members with fullBio content (not the attorney who has a separate page)
const profileMembers = teamMembers.filter((m) => m.fullBio);

/** The bio cut at a sentence end to fit a search result (about 155 characters). */
function metaDescription(text: string, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const end = cut.lastIndexOf('. ');
  return end > 60 ? cut.slice(0, end + 1) : `${cut.slice(0, cut.lastIndexOf(' '))}.`;
}

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
    title: `${member.name}, ${member.title}`,
    description: metaDescription(member.shortBio),
    keywords: [
      member.name,
      member.title,
      'Jwayyed Law LLC',
      'Ohio legal team',
    ],
    openGraph: {
      title: `${member.name}, ${member.title}`,
      description: metaDescription(member.shortBio),
      url: `https://www.jjlawohio.com/our-law-firm/our-attorneys/${slug}`,
      type: 'profile',
      images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
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
    { label: 'Our Attorney', href: '/our-law-firm/our-attorneys' },
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

  // Note: member.fullBio is static HTML from data/team-members.ts (not user input).
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="jw jw-mark bg-navy-950 text-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="jw-enter lg:col-span-4">
            <div className="relative aspect-[4/5] max-w-sm overflow-hidden bg-navy-900">
              <Image
                src={member.image}
                alt={member.imageAlt ?? member.name}
                fill
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="jw-enter text-sky font-semibold">{member.title}</p>
            <h1 className="jw-enter jw-display mt-3 text-[clamp(2.5rem,1.6rem+3.6vw,5rem)] leading-[1.02]" style={{ '--d': '80ms' } as React.CSSProperties}>
              {member.name}
            </h1>
            {member.highlights && (
              <ul className="jw-enter mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2" style={{ '--d': '160ms' } as React.CSSProperties}>
                {member.highlights.map((h) => (
                  <li key={h} className="border-t border-white/15 pt-3 text-white/85">
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white text-navy-950 py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid gap-10 lg:grid-cols-12">
          <h2 className="jw-display lg:col-span-4 text-[clamp(1.875rem,1.3rem+2vw,3rem)] leading-[1.08]">Biography</h2>
          <div className="lg:col-span-8">
            {/* Static HTML from data/team-members.ts (not user input). */}
            <div className="jw-prose" dangerouslySetInnerHTML={{ __html: member.fullBio }} />
            <p className="mt-10">
              <Link
                href="/our-law-firm/our-attorneys"
                className="inline-flex items-center gap-2 font-semibold text-sky-deep hover:text-navy-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to Our Attorney
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────────── */}
      <ContactCTA />
    </>
  );
}
