import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'New Albany Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in New Albany? R.C. 2917.11. New Albany Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['New Albany disorderly conduct lawyer', 'New Albany disorderly conduct defense', 'New Albany Ohio disorderly conduct'],
  openGraph: {
    title: 'New Albany Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-new-albany',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-new-albany' },
};

export default function NewAlbanyDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="New Albany" />;
}
