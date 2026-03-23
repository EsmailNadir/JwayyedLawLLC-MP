import type { Metadata } from 'next';
import OurAttorneysClient from './OurAttorneysClient';

export const metadata: Metadata = {
  title: 'Our Attorneys & Staff — Columbus, Ohio',
  description: 'Meet the legal team at Jwayyed Law LLC. Experienced attorneys and staff serving clients throughout Ohio in criminal defense, OVI/DUI, personal injury, and more.',
  alternates: {
    canonical: '/our-law-firm/our-attorneys',
  },
};

export default function OurStaffPage() {
  return <OurAttorneysClient />;
}
