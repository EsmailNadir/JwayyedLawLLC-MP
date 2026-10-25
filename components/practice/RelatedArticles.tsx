import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

/**
 * Blog articles linked from a practice page. Practice pages and the articles
 * that explain them should point at each other: it tells search engines the
 * site covers the topic in depth and carries ranking strength from the
 * articles to the page that converts.
 *
 * `slugs` picks the most relevant articles first, in order; the rest of the
 * slots fill with the newest articles in `category`.
 */
export default function RelatedArticles({
  category,
  slugs = [],
  limit = 3,
  title = 'Articles on this topic',
}: {
  category: string;
  slugs?: string[];
  limit?: number;
  title?: string;
}) {
  const picked = slugs.map((s) => blogPosts.find((p) => p.slug === s)).filter((p): p is (typeof blogPosts)[number] => Boolean(p));
  const fill = blogPosts
    .filter((p) => p.category === category && !picked.some((q) => q.slug === p.slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const posts = [...picked, ...fill].slice(0, limit);
  if (posts.length === 0) return null;

  return (
    <section className="bg-white text-navy-950 py-16 sm:py-20" aria-labelledby="related-articles-heading">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid gap-8 lg:gap-12 lg:grid-cols-12">
        <h2 id="related-articles-heading" className="jw-display lg:col-span-4 text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)] leading-[1.08]">
          {title}
        </h2>
        <ul className="lg:col-span-8 grid gap-px bg-navy-950/10 border border-navy-950/10 md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug} className="bg-white">
              <Link
                href={`/our-law-firm/blog/${p.slug}`}
                className="group flex h-full flex-col p-6 hover:bg-ice transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-deep"
              >
                <span className="jw-serif text-[1.15rem] leading-snug group-hover:text-sky-deep transition-colors">{p.title}</span>
                <span className="mt-2 text-[length:var(--step-small)] text-navy-950/70 line-clamp-3">{p.excerpt}</span>
                <span className="mt-auto pt-4 inline-flex items-center gap-2 text-[length:var(--step-small)] font-semibold text-sky-deep">
                  Read the article
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
