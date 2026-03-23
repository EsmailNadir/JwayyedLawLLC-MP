import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'OVI Defense & Criminal Defense Attorney Columbus Ohio',
  description: 'Jwayyed Law LLC — experienced criminal defense, OVI/DUI, personal injury, and civil litigation attorney serving Columbus and all of Ohio. Free consultations.',
  keywords: [
    'criminal defense attorney Columbus Ohio',
    'OVI defense attorney Ohio',
    'DUI lawyer Columbus Ohio',
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
};

export default function Home() {
  return <HomePageClient />;
}
