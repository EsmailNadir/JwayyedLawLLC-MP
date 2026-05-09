import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Grandview Heights Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Grandview Heights? R.C. 2917.11. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grandview Heights disorderly conduct lawyer', 'Grandview Heights disorderly conduct defense', 'Grandview Heights Ohio disorderly conduct'],
  openGraph: {
    title: 'Grandview Heights Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-grandview-heights',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-grandview-heights' },
};

export default function GrandviewHeightsDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Grandview Heights" />;
}
