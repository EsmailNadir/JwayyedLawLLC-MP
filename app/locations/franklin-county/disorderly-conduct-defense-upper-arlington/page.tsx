import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Upper Arlington Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Upper Arlington? R.C. 2917.11. Upper Arlington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Upper Arlington disorderly conduct lawyer', 'Upper Arlington disorderly conduct defense', 'Upper Arlington Ohio disorderly conduct'],
  openGraph: {
    title: 'Upper Arlington Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-upper-arlington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-upper-arlington' },
};

export default function UpperArlingtonDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Upper Arlington" />;
}
