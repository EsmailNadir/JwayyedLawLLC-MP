import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Whitehall Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Whitehall? R.C. 2917.11. Whitehall Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Whitehall disorderly conduct lawyer', 'Whitehall disorderly conduct defense', 'Whitehall Ohio disorderly conduct'],
  openGraph: {
    title: 'Whitehall Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-whitehall',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-whitehall' },
};

export default function WhitehallDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Whitehall" />;
}
