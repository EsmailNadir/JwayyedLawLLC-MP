import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Grove City OVI Defense Attorney | Jwayyed Law',
  description: 'OVI arrest in Grove City? ALS appeal 30-day deadline. Grove City Mayor\'s Court and FCMC. Southwest Blvd and I-270 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grove City OVI lawyer', 'Grove City DUI attorney', 'Grove City Ohio OVI defense', 'Franklin County OVI Grove City'],
  openGraph: {
    title: 'Grove City OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-grove-city',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-grove-city' },
};

export default function GroveCityOVIPage() {
  return <OVITemplate suburb="Grove City" />;
}
