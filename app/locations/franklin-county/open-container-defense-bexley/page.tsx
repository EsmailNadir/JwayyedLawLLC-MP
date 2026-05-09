import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Bexley Open Container Defense Attorney | Jwayyed Law',
  description: 'Open container citation in Bexley? R.C. 4301.62 vehicle and public place charges. Bexley Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Bexley open container lawyer', 'Bexley open container attorney', 'Bexley Ohio open container defense', 'Franklin County open container Bexley'],
  openGraph: {
    title: 'Bexley Open Container Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-bexley',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-bexley' },
};

export default function BexleyOpenContainerPage() {
  return <OpenContainerTemplate suburb="Bexley" />;
}
