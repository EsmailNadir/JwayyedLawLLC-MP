import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Dublin Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Dublin? R.C. 2917.11. Dublin Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Dublin disorderly conduct lawyer', 'Dublin disorderly conduct attorney', 'Dublin Ohio disorderly conduct defense'],
  openGraph: {
    title: 'Dublin Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-dublin',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-dublin' },
};

export default function DublinDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Dublin" />;
}
