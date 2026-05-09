import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Worthington Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Worthington? R.C. 2917.11. Worthington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Worthington disorderly conduct lawyer', 'Worthington disorderly conduct defense', 'Worthington Ohio disorderly conduct'],
  openGraph: {
    title: 'Worthington Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-worthington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-worthington' },
};

export default function WorthingtonDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Worthington" />;
}
