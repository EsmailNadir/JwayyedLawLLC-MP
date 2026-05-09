import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Westerville OVI Defense Attorney | Jwayyed Law',
  description: 'OVI arrest in Westerville? ALS appeal 30-day deadline. Westerville Mayor\'s Court and FCMC. I-270 and S.R. 3 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Westerville OVI lawyer', 'Westerville DUI attorney', 'Westerville Ohio OVI defense', 'Franklin County OVI Westerville'],
  openGraph: {
    title: 'Westerville OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-westerville',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-westerville' },
};

export default function WestervilleOVIPage() {
  return <OVITemplate suburb="Westerville" />;
}
