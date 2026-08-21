import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Jwayyed Law LLC | Ohio Criminal Defense & OVI Attorney',
  description: 'Learn about Jwayyed Law LLC — Ohio defense attorney Jwayyed Jwayyed serving Columbus statewide. OVI, criminal defense, personal injury, estate planning.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Jwayyed Law LLC | Ohio Criminal Defense & OVI Attorney',
    description: 'Learn about Jwayyed Law LLC — experienced Ohio defense attorney serving Columbus and all of Ohio.',
    url: 'https://www.jjlawohio.com/about',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
