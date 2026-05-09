import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Westerville Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Westerville? R.C. 2917.11. Westerville Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Westerville disorderly conduct lawyer', 'Westerville disorderly conduct defense', 'Westerville Ohio disorderly conduct'],
  openGraph: {
    title: 'Westerville Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-westerville',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-westerville' },
};

export default function WestervilleDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Westerville" />;
}
