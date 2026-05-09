import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Pickerington Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Pickerington? R.C. 2917.11. Pickerington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Pickerington disorderly conduct lawyer', 'Pickerington disorderly conduct defense', 'Pickerington Ohio disorderly conduct'],
  openGraph: {
    title: 'Pickerington Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-pickerington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-pickerington' },
};

export default function PickeringtonDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Pickerington" />;
}
