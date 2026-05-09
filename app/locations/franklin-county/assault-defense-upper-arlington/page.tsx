import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'Upper Arlington Assault Defense | Jwayyed Law',
  description: 'Assault charge in Upper Arlington? R.C. 2903.13. Upper Arlington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Upper Arlington assault lawyer', 'Upper Arlington assault attorney', 'Upper Arlington Ohio assault defense'],
  openGraph: {
    title: 'Upper Arlington Assault Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-upper-arlington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-upper-arlington' },
};

export default function UpperArlingtonAssaultPage() {
  return <AssaultTemplate suburb="Upper Arlington" />;
}
