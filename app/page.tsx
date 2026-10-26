import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Columbus OVI & Criminal Defense Lawyer',
  description: 'Columbus OVI/DUI and criminal defense lawyer and former prosecutor. Jwayyed Law LLC represents clients in courts across Ohio. Call (614) 285-5482.',
  keywords: [
    'OVI lawyer Columbus',
    'DUI lawyer Columbus Ohio',
    'criminal defense attorney Columbus Ohio',
    'OVI defense attorney Ohio',
    'DUI attorney Columbus Ohio',
    'personal injury attorney Ohio',
    'business law attorney Ohio',
    'estate planning attorney Columbus',
    'trusts attorney Ohio',
    'Jwayyed Law LLC',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Columbus OVI & Criminal Defense Lawyer | Jwayyed Law LLC',
    description: 'Columbus OVI/DUI and criminal defense lawyer and former prosecutor. Jwayyed Law LLC represents clients in courts across Ohio. Call (614) 285-5482.',
    url: 'https://www.jjlawohio.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

export default function Home() {
  return <HomePageClient />;
}
