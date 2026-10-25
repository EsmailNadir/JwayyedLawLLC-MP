import type { Metadata } from 'next';
import AboutView from '@/components/about/AboutView';

export const metadata: Metadata = {
  title: 'About Our Firm',
  description:
    'Jwayyed Law LLC and Attorney Jwayyed Jwayyed (Ohio Bar #0098679): a former prosecutor representing clients in OVI, criminal, injury and estate matters across Ohio.',
  alternates: { canonical: '/our-law-firm/about-us' },
  openGraph: {
    title: 'About Our Firm | Jwayyed Law LLC',
    description: 'Attorney Jwayyed Jwayyed, Ohio Bar #0098679: former prosecutor, now representing clients across Ohio.',
    url: 'https://www.jjlawohio.com/our-law-firm/about-us',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

export default function AboutUsPage() {
  return (
    <AboutView
      breadcrumbs={[
        { label: 'Our Law Firm', href: '/our-law-firm' },
        { label: 'About Us', href: '/our-law-firm/about-us' },
      ]}
    />
  );
}
