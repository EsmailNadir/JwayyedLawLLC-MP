import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Groveport OVI Defense Attorney | Jwayyed Law',
  description: 'OVI arrest in Groveport? ALS appeal 30-day deadline. Groveport Mayor\'s Court and FCMC. Rickenbacker and I-270 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Groveport OVI lawyer', 'Groveport DUI attorney', 'Groveport Ohio OVI defense', 'Franklin County OVI Groveport'],
  openGraph: {
    title: 'Groveport OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-groveport',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-groveport' },
};

export default function GroveportOVIPage() {
  return <OVITemplate suburb="Groveport" />;
}
