import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Our Law Firm | Jwayyed Law LLC Ohio',
  description: 'Learn about Jwayyed Law LLC — attorney Jwayyed Jwayyed, bar #0098679, serving Columbus and all of Ohio in OVI, criminal defense, personal injury, and estate planning.',
  alternates: { canonical: '/our-law-firm/about-us' },
  openGraph: {
    title: 'About Our Law Firm | Jwayyed Law LLC Ohio',
    description: 'Attorney Jwayyed Jwayyed, bar #0098679 — experienced Ohio counsel in OVI, criminal defense, personal injury, and estate planning.',
    url: 'https://www.jjlawohio.com/our-law-firm/about-us',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

export default function AboutUsPage() {
  return <AboutPageClient />;
}
