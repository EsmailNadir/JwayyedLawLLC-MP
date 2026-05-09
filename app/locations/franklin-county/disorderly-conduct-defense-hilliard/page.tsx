import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Hilliard Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Hilliard? R.C. 2917.11. Hilliard Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Hilliard disorderly conduct lawyer', 'Hilliard disorderly conduct defense', 'Hilliard Ohio disorderly conduct'],
  openGraph: {
    title: 'Hilliard Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-hilliard',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-hilliard' },
};

export default function HilliardDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Hilliard" />;
}
