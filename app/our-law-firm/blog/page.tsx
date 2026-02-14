'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
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

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All Articles');

  const filteredPosts =
    activeCategory === 'All Articles'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d3436] to-[#1a1a2e]" />
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Bronze accent glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#b87333]/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-72 h-72 bg-[#b87333]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <div
            className="text-center mb-14"
            style={{ animation: 'blogFadeUp 0.7s ease-out both' }}
          >
            <p className="text-[#b87333] font-semibold tracking-[0.2em] uppercase text-sm mb-4 font-['DM_Sans',_'Helvetica_Neue',_sans-serif]">
              Jwayyed Law LLC
            </p>
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Ohio Legal Insights<br className="hidden sm:block" /> &amp; Updates
            </h1>
            <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Stay informed on Ohio law — from criminal defense to business law
            </p>
          </div>

          {/* Featured Articles — asymmetric layout */}
          <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
            {featuredPosts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/our-law-firm/blog/${post.slug}`}
                className={`
                  group relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[380px]
                  ${idx === 0 ? 'md:col-span-3' : 'md:col-span-2'}
                `}
                style={{
                  animation: `blogFadeUp 0.7s ease-out ${0.2 + idx * 0.15}s both`,
                }}
              >
                {/* Card image background */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes={idx === 0 ? '(max-width: 768px) 100vw, 60vw' : '(max-width: 768px) 100vw, 40vw'}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  quality={85}
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-[#b87333]/0 group-hover:bg-[#b87333]/5 transition-colors duration-500" />

                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
                  <span className="inline-block self-start bg-[#b87333] text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4 font-['DM_Sans',_'Helvetica_Neue',_sans-serif]">
                    {post.category}
                  </span>
                  <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug group-hover:text-[#d4a574] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-gray-300 text-sm sm:text-base line-clamp-2 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-gray-400 text-sm font-['DM_Sans',_'Helvetica_Neue',_sans-serif]">
                    <span>{post.author}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Articles Section ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Subtle side accents */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#b87333]/20 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading + filters */}
          <div
            className="mb-12"
            style={{ animation: 'blogFadeUp 0.7s ease-out 0.5s both' }}
          >
            <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              All Articles
            </h2>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-4 sm:px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300
                    font-['DM_Sans',_'Helvetica_Neue',_sans-serif]
                    ${
                      activeCategory === cat
                        ? 'bg-[#1a1a2e] text-white shadow-lg shadow-[#1a1a2e]/20'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-[#b87333] hover:text-[#b87333] hover:shadow-sm'
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1"
                style={{
                  animation: `blogFadeUp 0.6s ease-out ${0.6 + idx * 0.1}s both`,
                }}
              >
                {/* Image thumbnail */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    quality={80}
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#b87333] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full font-['DM_Sans',_'Helvetica_Neue',_sans-serif] shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#b87333] transition-colors duration-300">
                    <Link href={`/our-law-firm/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 font-['DM_Sans',_'Helvetica_Neue',_sans-serif]">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#b87333] to-[#8b5a1f] flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">JL</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        <span className="block font-medium text-gray-700">{post.author}</span>
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </div>
                    </div>
                    <Link
                      href={`/our-law-firm/blog/${post.slug}`}
                      className="text-[#b87333] hover:text-[#8b5a1f] text-sm font-semibold transition-colors duration-300 font-['DM_Sans',_'Helvetica_Neue',_sans-serif] flex items-center gap-1"
                    >
                      Read
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-gray-400 text-lg">
                No articles found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter / CTA Strip ────────────────────────────────────── */}
      <section className="bg-[#1a1a2e] py-14 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#b87333]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-2xl sm:text-3xl font-bold text-white mb-4">
            Need Legal Guidance?
          </h2>
          <p className="font-['DM_Sans',_'Helvetica_Neue',_sans-serif] text-gray-300 mb-8 text-lg leading-relaxed">
            Our articles are for informational purposes only. For advice about your specific situation, schedule a consultation with Jwayyed Law LLC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(614)285-5482"
              className="inline-flex items-center justify-center gap-2 bg-[#b87333] hover:bg-[#a0622b] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#b87333]/20 hover:shadow-[#b87333]/30 font-['DM_Sans',_'Helvetica_Neue',_sans-serif]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (614) 285-5482
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-['DM_Sans',_'Helvetica_Neue',_sans-serif]"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Keyframe animation ──────────────────────────────────────── */}
      <style jsx global>{`
        @keyframes blogFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
