import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Obetz Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Obetz? R.C. 2917.11. Obetz Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Obetz disorderly conduct lawyer', 'Obetz disorderly conduct defense', 'Obetz Ohio disorderly conduct'],
  openGraph: {
    title: 'Obetz Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-obetz',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-obetz' },
};

export default function ObetzDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Obetz" />;
}
