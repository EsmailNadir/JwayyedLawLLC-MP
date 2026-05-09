import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Reynoldsburg OVI Defense Attorney | Jwayyed Law',
  description: 'OVI arrest in Reynoldsburg? ALS appeal 30-day deadline. Reynoldsburg Mayor\'s Court and FCMC. I-70 and U.S. 40 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Reynoldsburg OVI lawyer', 'Reynoldsburg DUI attorney', 'Reynoldsburg Ohio OVI defense', 'Franklin County OVI Reynoldsburg'],
  openGraph: {
    title: 'Reynoldsburg OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-reynoldsburg',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-reynoldsburg' },
};

export default function ReynoldsburgOVIPage() {
  return <OVITemplate suburb="Reynoldsburg" />;
}
