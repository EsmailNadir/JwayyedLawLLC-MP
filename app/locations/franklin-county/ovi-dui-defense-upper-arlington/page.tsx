import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Upper Arlington OVI Defense | Jwayyed Law',
  description: 'OVI arrest in Upper Arlington? ALS appeal 30-day deadline. Upper Arlington Mayor\'s Court and FCMC. Lane Ave and Tremont Rd enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Upper Arlington OVI lawyer', 'Upper Arlington DUI attorney', 'Upper Arlington Ohio OVI defense', 'Franklin County OVI Upper Arlington'],
  openGraph: {
    title: 'Upper Arlington OVI Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-upper-arlington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-upper-arlington' },
};

export default function UpperArlingtonOVIPage() {
  return <OVITemplate suburb="Upper Arlington" />;
}
