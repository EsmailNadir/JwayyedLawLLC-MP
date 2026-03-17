import type { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Ohio Legal Blog | Criminal Defense, OVI & More | Jwayyed Law LLC',
  description: 'Read the latest Ohio legal insights from Jwayyed Law LLC — covering criminal defense, OVI/DUI, personal injury, business law, and estate planning.',
};

export default function BlogPage() {
  return <BlogPageClient />;
}
