import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Grandview Heights OVI Defense | Jwayyed Law',
  description: 'OVI arrest in Grandview Heights? ALS appeal 30-day deadline. Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grandview Heights OVI lawyer', 'Grandview Heights DUI attorney', 'Grandview Heights Ohio OVI defense', 'Franklin County OVI Grandview Heights'],
  openGraph: {
    title: 'Grandview Heights OVI Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-grandview-heights',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-grandview-heights' },
};

export default function GrandviewHeightsOVIPage() {
  return <OVITemplate suburb="Grandview Heights" />;
}
