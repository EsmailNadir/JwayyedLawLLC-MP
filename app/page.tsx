import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Ohio Attorney | OVI & Criminal Defense | Jwayyed Law LLC',
  description: 'Jwayyed Law LLC — OVI/DUI & criminal defense attorney serving all of Ohio. Call (614) 285-5482 for a free consultation.',
  keywords: [
    'criminal defense attorney Columbus Ohio',
    'OVI defense attorney Ohio',
    'DUI attorney Columbus Ohio',
    'personal injury attorney Ohio',
    'civil litigation attorney Columbus',
    'business law attorney Ohio',
    'estate planning attorney Columbus',
    'trusts attorney Ohio',
    'Jwayyed Law LLC',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ohio Attorney | OVI & Criminal Defense | Jwayyed Law LLC',
    description: 'Jwayyed Law LLC — OVI/DUI & criminal defense attorney serving all of Ohio. Call (614) 285-5482 for a free consultation.',
    url: 'https://www.jjlawohio.com',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
};

export default function Home() {
  return <HomePageClient />;
}
