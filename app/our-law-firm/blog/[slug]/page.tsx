import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
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

  return {
    title: `${post.title} | Jwayyed Law LLC Blog`,
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jwayyed Law LLC',
      url: 'https://www.jjlawohio.com',
    },
    datePublished: post.date,
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

      {/* ── Article Header ─────────────────────────────────────────── */}
      <header className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d3436] to-[#1a1a2e]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#b87333]/12 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#b87333] text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full font-['DM_Sans',_'Helvetica_Neue',_sans-serif]">
              {post.category}
            </span>
            <time
              dateTime={post.date}
              className="text-gray-400 text-sm font-['DM_Sans',_'Helvetica_Neue',_sans-serif]"
            >
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-lg text-gray-300 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b87333] to-[#8b5a1f] flex items-center justify-center">
              <span className="text-white text-sm font-bold">JL</span>
            </div>
            <div className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif]">
              <span className="block text-white font-medium text-sm">
                {post.author}
              </span>
              <span className="block text-gray-400 text-xs">
                Columbus, Ohio
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Article Body ───────────────────────────────────────────── */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Static HTML content from data/blog-posts.ts (not user input) */}
          <div
            className="
              prose prose-lg max-w-none
              font-['DM_Sans',_'Helvetica_Neue',_sans-serif]
              prose-headings:font-['Playfair_Display',_'Georgia',_serif]
              prose-headings:text-gray-900
              prose-headings:font-bold
              prose-h2:text-2xl
              prose-h2:mt-10
              prose-h2:mb-4
              prose-h2:border-l-4
              prose-h2:border-[#b87333]
              prose-h2:pl-4
              prose-p:text-gray-600
              prose-p:leading-relaxed
              prose-li:text-gray-600
              prose-strong:text-gray-800
              prose-ul:space-y-2
              prose-a:text-[#b87333]
              prose-a:no-underline
              hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-sm text-gray-500 leading-relaxed italic">
              This article is for informational purposes only and does not
              constitute legal advice. For legal counsel regarding your specific
              situation, contact Jwayyed Law, LLC.
            </p>
          </div>

          {/* Back to blog */}
          <div className="mt-8">
            <Link
              href="/our-law-firm/blog"
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
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>

      {/* ── Related Posts ───────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Related Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/our-law-firm/blog/${related.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    quality={80}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#b87333] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full font-['DM_Sans',_'Helvetica_Neue',_sans-serif] shadow-sm">
                      {related.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#b87333] transition-colors duration-300">
                    {related.title}
                  </h3>
                  <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-gray-500 text-sm line-clamp-2 leading-relaxed">
                    {related.excerpt}
                  </p>
                  <div className="mt-4 text-xs text-gray-400 font-['DM_Sans',_'Helvetica_Neue',_sans-serif]">
                    <time dateTime={related.date}>
                      {formatDate(related.date)}
                    </time>
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
