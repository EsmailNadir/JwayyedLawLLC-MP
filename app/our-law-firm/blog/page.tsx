import type { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Ohio Legal Blog | Criminal Defense & OVI',
  description: 'Ohio legal articles from Jwayyed Law LLC on criminal defense, assault charges, OVI/DUI and license suspension, personal injury, business law, probate court and estate planning.',
  keywords: ['Ohio criminal defense attorney blog', 'assault charges Ohio', 'OVI license suspension Ohio', 'Ohio probate court', 'sealing a criminal record Ohio'],
  alternates: {
    canonical: '/our-law-firm/blog',
  },
  openGraph: {
    title: 'Ohio Legal Blog | Criminal Defense & OVI | Jwayyed Law LLC',
    description: 'Ohio legal articles from Jwayyed Law LLC on criminal defense, OVI/DUI, personal injury, business law and estate planning.',
    url: 'https://www.jjlawohio.com/our-law-firm/blog',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
