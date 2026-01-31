import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Legal Blog | Insights & Updates from Jwayyed Law LLC',
  description: 'Stay informed with legal insights, updates on Ohio law, and helpful information from Jwayyed Law LLC. Articles covering criminal defense, OVI/DUI, personal injury, and more.',
  keywords: [
    'Ohio legal blog',
    'Columbus law blog',
    'criminal defense updates',
    'Ohio law updates',
    'legal news Columbus',
    'OVI defense blog',
    'personal injury updates'
  ],
  openGraph: {
    title: 'Legal Blog | Jwayyed Law LLC',
    description: 'Legal insights and updates from Jwayyed Law LLC.',
    url: 'https://www.jjlawohio.com/our-law-firm/blog',
  },
  alternates: {
    canonical: '/our-law-firm/blog',
  },
};

const breadcrumbItems = [
  { label: 'Our Law Firm', href: '/our-law-firm' },
  { label: 'Blog', href: '/our-law-firm/blog' },
];

// Example blog posts - in production, these would come from a CMS or MDX files
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Ohio OVI Penalties: A Comprehensive Guide',
    excerpt: 'Learn about Ohio OVI penalties, including jail time, fines, and license suspension for first, second, and third offenses.',
    date: '2026-01-15',
    category: 'OVI/DUI Defense',
    slug: 'understanding-ohio-ovi-penalties-comprehensive-guide',
    image: '/assets/blog/ovi-penalties.jpg',
  },
  {
    id: 2,
    title: 'Expungement in Ohio: Who Qualifies and How It Works',
    excerpt: 'Discover if you qualify for criminal record expungement in Ohio and learn about the process and requirements.',
    date: '2025-11-10',
    category: 'Criminal Defense',
    slug: 'expungement-ohio-who-qualifies-how-works',
    image: '/assets/blog/expungement.jpg',
  },
  {
    id: 3,
    title: 'What to Do After a Car Accident in Ohio',
    excerpt: 'Important steps to take after a car accident in Ohio to protect your rights and potential personal injury claim.',
    date: '2025-10-05',
    category: 'Personal Injury',
    slug: 'what-to-do-after-car-accident-ohio',
    image: '/assets/blog/car-accident.jpg',
  },
  {
    id: 4,
    title: 'Domestic Violence Charges in Ohio: Defenses and Penalties',
    excerpt: 'Understanding domestic violence charges, potential defenses, and penalties under Ohio Revised Code.',
    date: '2025-09-28',
    category: 'Criminal Defense',
    slug: 'domestic-violence-charges-ohio-defenses-penalties',
    image: '/assets/blog/domestic-violence.jpg',
  },
  {
    id: 5,
    title: 'Business Formation in Ohio: LLC vs Corporation',
    excerpt: 'Compare LLC and corporation structures for Ohio businesses and learn which may be right for your company.',
    date: '2025-08-20',
    category: 'Business Law',
    slug: 'business-formation-ohio-llc-vs-corporation',
    image: '/assets/blog/business-formation.jpg',
  },
  {
    id: 6,
    title: 'Your Rights During an Arrest in Ohio',
    excerpt: 'Know your constitutional rights during an arrest in Ohio and how to protect yourself legally.',
    date: '2025-07-15',
    category: 'Criminal Defense',
    slug: 'rights-during-arrest-ohio',
    image: '/assets/blog/arrest-rights.jpg',
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-['Playfair_Display',_'Georgia',_serif] text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Legal Blog
            </h1>
            <p className="font-['Inter',_'Arial',_sans-serif] text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with legal insights, updates on Ohio law, and helpful information from Jwayyed Law LLC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Blog Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <time
                      dateTime={post.date}
                      className="text-xs text-gray-500 font-['Inter',_'Arial',_sans-serif]"
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h2 className="font-['Playfair_Display',_'Georgia',_serif] text-xl font-bold text-gray-900 mb-3">
                    <Link
                      href={`/our-law-firm/blog/${post.slug}`}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="font-['Inter',_'Arial',_sans-serif] text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/our-law-firm/blog/${post.slug}`}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold text-sm font-['Inter',_'Arial',_sans-serif]"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-12 flex justify-center">
            <nav className="flex space-x-2" aria-label="Pagination">
              <button
                disabled
                className="px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded-md cursor-not-allowed"
              >
                Previous
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md">
                1
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

