'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactCTA from '@/components/ContactCTA';
import { blogPosts, categories, type Category } from '@/data/blog-posts';

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Blog', href: '/our-law-firm/blog' },
];

const featuredPosts = blogPosts.filter((p) => p.featured);

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * The blog index: the featured articles large on navy, then every article
 * with a category filter. Whole cards are links, and the filter buttons say
 * which one is on (aria-pressed).
 */
export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('All Articles');

  const filteredPosts = activeCategory === 'All Articles' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      <section className="jw jw-mark bg-navy-950 text-white" aria-labelledby="blog-title">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
          <h1 id="blog-title" className="jw-enter jw-display text-[clamp(2.25rem,1.4rem+3.6vw,4.5rem)] leading-[1.06]">
            Ohio law, explained
          </h1>
          <p
            className="jw-enter mt-6 max-w-[42rem] text-[length:var(--step-lead)] leading-snug text-white/80"
            style={{ '--d': '90ms' } as React.CSSProperties}
          >
            Plain answers on OVI, criminal defense, injury claims, business law and estate planning, from Jwayyed Law LLC.
          </p>

          {featuredPosts.length > 0 && (
            <ul className="jw-enter mt-12 grid gap-4 md:grid-cols-5" style={{ '--d': '180ms' } as React.CSSProperties}>
              {featuredPosts.map((post, idx) => (
                <li key={post.slug} className={idx === 0 ? 'md:col-span-3' : 'md:col-span-2'}>
                  <Link
                    href={`/our-law-firm/blog/${post.slug}`}
                    className="group relative flex h-full min-h-[320px] sm:min-h-[400px] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky"
                  >
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes={idx === 0 ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 40vw'}
                      className="object-cover transition-[scale] duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10" aria-hidden="true" />
                    <div className="relative mt-auto p-6 sm:p-8">
                      <p className="text-[length:var(--step-small)] font-semibold text-sky">{post.category}</p>
                      <h2 className="mt-2 jw-display text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] leading-tight group-hover:text-sky transition-colors">
                        {post.title}
                      </h2>
                      <p className="mt-3 max-w-[48ch] text-white/80 line-clamp-2">{post.excerpt}</p>
                      <time dateTime={post.date} className="mt-4 block text-[length:var(--step-small)] text-mist">
                        {formatDate(post.date)}
                      </time>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="bg-ice text-navy-950 py-16 sm:py-24" aria-labelledby="all-articles">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="all-articles" className="jw-display lg:col-span-4 text-[clamp(1.875rem,1.3rem+2vw,3rem)] leading-[1.08]">
              All articles
            </h2>
            <div className="lg:col-span-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`min-h-[44px] px-4 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep ${
                    activeCategory === cat ? 'bg-navy-950 text-white' : 'bg-white text-navy-950/75 border border-navy-950/10 hover:border-navy-950/40 hover:text-navy-950'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/our-law-firm/blog/${post.slug}`}
                  className="group flex h-full flex-col bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy-950">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-[scale] duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[length:var(--step-small)] font-semibold text-sky-deep">{post.category}</p>
                    <h3 className="mt-2 jw-serif text-[1.3rem] leading-snug group-hover:text-sky-deep transition-colors">{post.title}</h3>
                    <p className="mt-2 text-navy-950/70 line-clamp-3">{post.excerpt}</p>
                    <time dateTime={post.date} className="mt-auto pt-5 block text-[length:var(--step-small)] text-navy-950/60">
                      {formatDate(post.date)}
                    </time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {filteredPosts.length === 0 && <p className="py-16 text-center text-navy-950/70">No articles in this category yet.</p>}

          <p className="mt-12 max-w-[70ch] text-[length:var(--step-small)] text-navy-950/70">
            These articles are for informational purposes only. For advice about your situation, schedule a consultation with
            Jwayyed Law LLC.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
