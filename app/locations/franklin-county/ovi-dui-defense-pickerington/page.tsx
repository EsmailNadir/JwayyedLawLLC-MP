import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Pickerington OVI Defense Attorney | Jwayyed Law',
  description: 'OVI arrest in Pickerington? ALS appeal 30-day deadline. Pickerington Mayor\'s Court and FCMC. I-270 and S.R. 256 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Pickerington OVI lawyer', 'Pickerington DUI attorney', 'Pickerington Ohio OVI defense', 'Franklin County OVI Pickerington'],
  openGraph: {
    title: 'Pickerington OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-pickerington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-pickerington' },
};

export default function PickeringtonOVIPage() {
  return <OVITemplate suburb="Pickerington" />;
}
