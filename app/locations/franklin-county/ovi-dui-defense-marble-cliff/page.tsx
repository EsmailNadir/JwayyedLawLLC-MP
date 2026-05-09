import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Marble Cliff OVI Defense Attorney | Jwayyed Law',
  description: 'OVI arrest in Marble Cliff? ALS appeal 30-day deadline. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Marble Cliff OVI lawyer', 'Marble Cliff DUI attorney', 'Marble Cliff Ohio OVI defense', 'Franklin County OVI Marble Cliff'],
  openGraph: {
    title: 'Marble Cliff OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-marble-cliff',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-marble-cliff' },
};

export default function MarbleCliffOVIPage() {
  return <OVITemplate suburb="Marble Cliff" />;
}
