import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'New Albany Open Container Defense | Jwayyed Law',
  description: 'Open container citation in New Albany? R.C. 4301.62. New Albany Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['New Albany open container lawyer', 'New Albany open container defense', 'New Albany Ohio open container'],
  openGraph: {
    title: 'New Albany Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-new-albany',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-new-albany' },
};

export default function NewAlbanyOpenContainerPage() {
  return <OpenContainerTemplate suburb="New Albany" />;
}
