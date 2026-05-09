import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Grove City Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Grove City? R.C. 2917.11. Grove City Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grove City disorderly conduct lawyer', 'Grove City disorderly conduct defense', 'Grove City Ohio disorderly conduct'],
  openGraph: {
    title: 'Grove City Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-grove-city',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-grove-city' },
};

export default function GroveCityDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Grove City" />;
}
