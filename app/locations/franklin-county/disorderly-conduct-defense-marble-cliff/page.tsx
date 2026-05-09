import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Marble Cliff Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Marble Cliff? R.C. 2917.11. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Marble Cliff disorderly conduct lawyer', 'Marble Cliff disorderly conduct defense', 'Marble Cliff Ohio disorderly conduct'],
  openGraph: {
    title: 'Marble Cliff Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-marble-cliff',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-marble-cliff' },
};

export default function MarbleCliffDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Marble Cliff" />;
}
