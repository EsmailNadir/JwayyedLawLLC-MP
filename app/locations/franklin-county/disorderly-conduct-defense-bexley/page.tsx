import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Bexley Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Bexley? R.C. 2917.11 minor misdemeanor to M4. Bexley Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Bexley disorderly conduct lawyer', 'Bexley disorderly conduct attorney', 'Bexley Ohio disorderly conduct defense', 'Franklin County disorderly Bexley'],
  openGraph: {
    title: 'Bexley Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-bexley',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-bexley' },
};

export default function BexleyDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Bexley" />;
}
