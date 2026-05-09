import { Metadata } from 'next';
import OpenContainerTemplate from '@/components/franklin-templates/OpenContainerTemplate';

export const metadata: Metadata = {
  title: 'Reynoldsburg Open Container Defense | Jwayyed Law',
  description: 'Open container citation in Reynoldsburg? R.C. 4301.62. Reynoldsburg Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Reynoldsburg open container lawyer', 'Reynoldsburg open container defense', 'Reynoldsburg Ohio open container'],
  openGraph: {
    title: 'Reynoldsburg Open Container Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/open-container-defense-reynoldsburg',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/open-container-defense-reynoldsburg' },
};

export default function ReynoldsburgOpenContainerPage() {
  return <OpenContainerTemplate suburb="Reynoldsburg" />;
}
