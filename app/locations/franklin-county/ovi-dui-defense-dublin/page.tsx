import { Metadata } from 'next';
import OVITemplate from '@/components/franklin-templates/OVITemplate';

export const metadata: Metadata = {
  title: 'Dublin OVI Defense Attorney | Jwayyed Law',
  description: 'OVI arrest in Dublin? ALS appeal 30-day deadline. Dublin Mayor\'s Court and FCMC. U.S. 33 and S.R. 161 enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Dublin OVI lawyer', 'Dublin DUI attorney', 'Dublin Ohio OVI defense', 'Dublin Ohio drunk driving', 'Franklin County OVI Dublin'],
  openGraph: {
    title: 'Dublin OVI Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/ovi-dui-defense-dublin',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/ovi-dui-defense-dublin' },
};

export default function DublinOVIPage() {
  return <OVITemplate suburb="Dublin" />;
}
