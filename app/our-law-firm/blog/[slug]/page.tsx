import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { blogPosts, getPostBySlug, getRelatedPosts } from '@/data/blog-posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  // The layout template adds " | Jwayyed Law LLC" (18 characters). Long
  // titles skip it so the whole title fits in a search result.
  return {
    title: post.title.length > 42 ? { absolute: post.title } : post.title,
    description: post.excerpt,
    keywords: [
      'Ohio law blog',
      post.category.toLowerCase(),
      'Ohio attorney',
      'Jwayyed Law LLC',
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.jjlawohio.com/our-law-firm/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
    },
    alternates: {
      canonical: `/our-law-firm/blog/${slug}`,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Practice pages to suggest beside a post, by its category. */
const serviceLinks: Record<string, { href: string; label: string }[]> = {
  'Criminal Defense': [
    { href: '/criminal-defense', label: 'Criminal Defense Overview' },
    { href: '/criminal-defense/expungement-record-sealing', label: 'Expungement & Record Sealing' },
    { href: '/criminal-defense/assault-charges', label: 'Assault Defense' },
  ],
  'OVI/DUI': [
    { href: '/ovi-dui-defense', label: 'OVI/DUI Defense Overview' },
    { href: '/ovi-dui-defense/first-ovi', label: 'First OVI Defense' },
    { href: '/ovi-dui-defense/high-tier-ovi', label: 'High-Tier OVI Defense' },
    { href: '/ovi-dui-defense/refusal-ovi', label: 'Refusal OVI Defense' },
    { href: '/ovi-dui-defense/limited-driving-privileges', label: 'Limited Driving Privileges' },
  ],
  'Ohio Courts': [
    { href: '/courts', label: 'Ohio Court Guides' },
    { href: '/courts/franklin-county-municipal-court', label: 'Franklin County Municipal Court' },
    { href: '/criminal-defense', label: 'Criminal Defense Overview' },
  ],
  'Personal Injury': [
    { href: '/personal-injury', label: 'Personal Injury Overview' },
    { href: '/personal-injury/car-accidents', label: 'Car Accident Attorney' },
    { href: '/personal-injury/slip-and-fall', label: 'Slip & Fall Claims' },
  ],
  'Estate Planning': [
    { href: '/other-services/estate-planning', label: 'Estate Planning' },
    { href: '/other-services/will-contests', label: 'Will Contests' },
    { href: '/trusts', label: 'Trusts Overview' },
  ],
  'Business Law': [
    { href: '/business', label: 'Business Law Overview' },
    { href: '/business/llc-formation', label: 'LLC Formation' },
    { href: '/business/contract-drafting-review', label: 'Contract Drafting & Review' },
  ],
  'Civil Litigation': [
    { href: '/criminal-defense/domestic-violence', label: 'Domestic Violence Defense' },
    { href: '/contact', label: 'Contact the Firm' },
  ],
  'Trusts': [
    { href: '/trusts', label: 'Trusts Overview' },
    { href: '/trusts/revocable-living-trusts', label: 'Revocable Living Trusts' },
    { href: '/other-services/estate-planning', label: 'Estate Planning' },
  ],
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, post.category);

  const breadcrumbItems = [
    { label: 'Our Law Firm', href: '/our-law-firm' },
    { label: 'Blog', href: '/our-law-firm/blog' },
    { label: post.title, href: `/our-law-firm/blog/${slug}` },
  ];


  // BlogPosting with the fields Google's article guidelines ask for (image,
  // dates) and the author tied to the attorney entity in the site-wide
  // JSON-LD (layout.tsx) by @id, so the article credits the same person.
  const siteUrl = 'https://www.jjlawohio.com';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [`${siteUrl}${post.image}`],
    inLanguage: 'en-US',
    articleSection: post.category,
    author: {
      '@type': 'Person',
      '@id': `${siteUrl}/our-law-firm/our-attorneys#jwayyed-jwayyed`,
      name: post.author,
      url: `${siteUrl}/our-law-firm/about-us`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jwayyed Law LLC',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo-square.png` },
    },
    datePublished: post.date,
    // Every post was revised in the October 2026 redesign.
    dateModified: post.date > '2026-10-25' ? post.date : '2026-10-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.jjlawohio.com/our-law-firm/blog/${slug}`,
    },
  };

  // Note: post.content is static HTML from our own data file (data/blog-posts.ts),
  // not user-generated input. No XSS risk exists.
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <header className="jw jw-mark bg-navy-950 text-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-16 sm:pb-20">
          <div className="max-w-4xl">
            <p className="jw-enter flex flex-wrap items-center gap-x-4 gap-y-1 text-[length:var(--step-small)]">
              <span className="font-semibold text-sky">{post.category}</span>
              <time dateTime={post.date} className="text-mist">
                {formatDate(post.date)}
              </time>
            </p>
            <h1 className="jw-enter jw-display mt-5 text-[clamp(2.1rem,1.4rem+3vw,4rem)] leading-[1.06] text-balance" style={{ '--d': '80ms' } as React.CSSProperties}>
              {post.title}
            </h1>
            <p className="jw-enter mt-6 max-w-[46rem] text-[length:var(--step-lead)] leading-snug text-white/80" style={{ '--d': '160ms' } as React.CSSProperties}>
              {post.excerpt}
            </p>
            <p className="jw-enter mt-8 text-[length:var(--step-small)] text-mist" style={{ '--d': '240ms' } as React.CSSProperties}>
              By <Link href="/our-law-firm/about-us" className="text-white underline underline-offset-4 hover:text-sky">{post.author}</Link>, Columbus, Ohio
            </p>
          </div>
        </div>
      </header>

      <article className="bg-white text-navy-950 py-14 sm:py-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-1 min-w-0">
            {/* Static HTML from data/blog-posts.ts (not user input). */}
            <div className="jw-prose text-[length:var(--step-body)]" dangerouslySetInnerHTML={{ __html: post.content }} />
            <p className="mt-12 max-w-[70ch] border-l-4 border-sky-deep bg-ice px-6 py-5 text-[length:var(--step-small)] text-navy-950/75">
              This article is for informational purposes only and does not constitute legal advice. For legal counsel regarding your
              specific situation, contact Jwayyed Law, LLC.
            </p>
            <p className="mt-8">
              <Link
                href="/our-law-firm/blog"
                className="inline-flex items-center gap-2 font-semibold text-sky-deep hover:text-navy-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                All articles
              </Link>
            </p>
          </div>
          {serviceLinks[post.category] && (
            <aside className="lg:col-span-4" aria-label="Related services">
              <div className="lg:sticky lg:top-28 bg-ice p-6 sm:p-8">
                <p className="jw-serif text-[1.35rem] leading-tight">Related services</p>
                <ul className="mt-5 grid gap-px bg-navy-950/10 border border-navy-950/10">
                  {serviceLinks[post.category].map((l) => (
                    <li key={l.href} className="bg-white">
                      <Link
                        href={l.href}
                        className="group flex items-center justify-between gap-3 px-4 py-3 font-medium hover:text-sky-deep transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-deep"
                      >
                        {l.label}
                        <ArrowRight className="w-4 h-4 flex-shrink-0 text-sky-deep transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+16142855482"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 min-h-[52px] bg-navy-950 text-white font-semibold tabular-nums hover:bg-sky-deep transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky"
                >
                  Call (614) 285-5482
                </a>
              </div>
            </aside>
          )}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-ice text-navy-950 py-16 sm:py-24" aria-labelledby="related-articles">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <h2 id="related-articles" className="jw-display text-[clamp(1.875rem,1.3rem+2vw,3rem)] leading-[1.08]">
              Related articles
            </h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/our-law-firm/blog/${related.slug}`}
                    className="group block h-full bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-navy-950">
                      <Image
                        src={related.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-[scale] duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-[length:var(--step-small)] font-semibold text-sky-deep">{related.category}</p>
                      <h3 className="mt-2 jw-serif text-[1.3rem] leading-snug group-hover:text-sky-deep transition-colors">{related.title}</h3>
                      <p className="mt-2 text-navy-950/70 line-clamp-2">{related.excerpt}</p>
                      <time dateTime={related.date} className="mt-4 block text-[length:var(--step-small)] text-navy-950/60">
                        {formatDate(related.date)}
                      </time>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Contact CTA ────────────────────────────────────────────── */}
      <ContactCTA />
    </>
  );
}
