import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Obetz OVI Defense Attorney | Jwayyed Law',
  description: 'OVI arrest in Obetz? ALS appeal 30-day deadline. Obetz Mayor\'s Court and FCMC. Rickenbacker area enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Obetz OVI lawyer', 'Obetz DUI attorney', 'Obetz Ohio OVI defense', 'Franklin County OVI Obetz'],
  openGraph: {
    title: 'Obetz OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-obetz' },
};

export default function ObetzOVIPage() {
  return <OVITemplate suburb="Obetz" />;
}
