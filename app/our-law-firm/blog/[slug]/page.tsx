import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';

// This would typically come from a CMS or MDX files
const blogPosts: Record<string, any> = {
  'understanding-ohio-ovi-penalties-comprehensive-guide': {
    title: 'Understanding Ohio OVI Penalties: A Comprehensive Guide',
    date: '2026-01-15',
    category: 'OVI/DUI Defense',
    excerpt: 'Learn about Ohio OVI penalties, including jail time, fines, and license suspension for first, second, and third offenses.',
    content: `
      <p>Ohio Operating a Vehicle Impaired (OVI) charges carry severe penalties that escalate with each subsequent offense. Understanding these penalties is crucial for anyone facing OVI charges in Ohio.</p>
      
      <h2>First OVI Offense in Ohio (Current 2026 Ohio Law - HB 37)</h2>
      <p>Under Ohio Revised Code 4511.19 as amended by HB 37 (Liv's Law, effective April 2025), a first OVI offense is typically a first-degree misdemeanor. Current penalties include:</p>
      <ul>
        <li>Jail time: 3 days to 6 months (or 3-day Driver Intervention Program)</li>
        <li>Fines: $565 to $1,075 (minimum increased from $375)</li>
        <li>License suspension: 1 to 3 years</li>
        <li>License reinstatement fee: $315 (reduced from $475)</li>
        <li>Vehicle immobilization: 90 days</li>
        <li>Alcohol treatment program</li>
        <li>Limited privileges: 15-day waiting period may be waived by judge</li>
      </ul>
      
      <h2>Second OVI Offense (Within 10 Years)</h2>
      <p>Second OVI offenses carry enhanced penalties under HB 37:</p>
      <ul>
        <li>Jail time: 10 days to 6 months (minimum 10 days mandatory)</li>
        <li>Fines: $715 to $1,625 (minimum increased from $525)</li>
        <li>Ignition interlock device: Mandatory for limited driving privileges</li>
        <li>License suspension: 1 to 7 years</li>
        <li>Vehicle immobilization: 90 days</li>
      </ul>
      
      <h2>Third OVI Offense (Within 10 Years)</h2>
      <p>Third OVI offenses are first-degree misdemeanors with severe consequences (fourth OVI within 10 years becomes a felony):</p>
      <ul>
        <li>Jail time: 30 days to 1 year (minimum 30 days mandatory)</li>
        <li>Fines: $1,040 to $2,750 (minimum increased from $850)</li>
        <li>License suspension: 2 to 12 years</li>
        <li>Vehicle forfeiture possible</li>
      </ul>
      
      <p>If you are facing OVI charges in Ohio, contact Jwayyed Law LLC for experienced representation.</p>
    `,
  },
  // Add more blog posts here
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Jwayyed Law LLC Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.jjlawohio.com/our-law-firm/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
    alternates: {
      canonical: `/our-law-firm/blog/${params.slug}`,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Our Law Firm', href: '/our-law-firm' },
    { label: 'Blog', href: '/our-law-firm/blog' },
    { label: post.title, href: `/our-law-firm/blog/${params.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide font-['Inter',_'Arial',_sans-serif]">
                {post.category}
              </span>
              <time
                dateTime={post.date}
                className="text-sm text-gray-500 font-['Inter',_'Arial',_sans-serif]"
              >
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
          </header>

          <div
            className="prose prose-lg max-w-none font-['Inter',_'Arial',_sans-serif]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/our-law-firm/blog"
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold font-['Inter',_'Arial',_sans-serif]"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

