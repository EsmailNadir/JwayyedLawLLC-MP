import { Metadata } from 'next';
import DisorderlyConductTemplate from '@/components/franklin-templates/DisorderlyConductTemplate';

export const metadata: Metadata = {
  title: 'Reynoldsburg Disorderly Conduct Defense | Jwayyed Law',
  description: 'Disorderly conduct charge in Reynoldsburg? R.C. 2917.11. Reynoldsburg Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Reynoldsburg disorderly conduct lawyer', 'Reynoldsburg disorderly conduct defense', 'Reynoldsburg Ohio disorderly conduct'],
  openGraph: {
    title: 'Reynoldsburg Disorderly Conduct Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/disorderly-conduct-defense-reynoldsburg',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/disorderly-conduct-defense-reynoldsburg' },
};

export default function ReynoldsburgDisorderlyPage() {
  return <DisorderlyConductTemplate suburb="Reynoldsburg" />;
}
