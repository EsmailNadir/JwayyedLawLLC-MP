import type { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Ohio Legal Blog | Criminal Defense & OVI | Jwayyed Law LLC',
  description: 'Read the latest Ohio legal insights from Jwayyed Law LLC — covering criminal defense, OVI/DUI, personal injury, business law, and estate planning.',
  alternates: {
    canonical: '/our-law-firm/blog',
  },
  openGraph: {
    title: 'Ohio Legal Blog | Criminal Defense & OVI | Jwayyed Law LLC',
    description: 'Read the latest Ohio legal insights from Jwayyed Law LLC — covering criminal defense, OVI/DUI, personal injury, business law, and estate planning.',
    url: 'https://www.jjlawohio.com/our-law-firm/blog',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
