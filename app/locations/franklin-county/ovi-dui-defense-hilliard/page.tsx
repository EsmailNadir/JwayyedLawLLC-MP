import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Hilliard OVI Defense Attorney | Jwayyed Law',
  description: 'OVI arrest in Hilliard? ALS appeal 30-day deadline. Hilliard Mayor\'s Court and FCMC. I-270 and Cemetery Rd enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Hilliard OVI lawyer', 'Hilliard DUI attorney', 'Hilliard Ohio OVI defense', 'Franklin County OVI Hilliard'],
  openGraph: {
    title: 'Hilliard OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-hilliard',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-hilliard' },
};

export default function HilliardOVIPage() {
  return <OVITemplate suburb="Hilliard" />;
}
