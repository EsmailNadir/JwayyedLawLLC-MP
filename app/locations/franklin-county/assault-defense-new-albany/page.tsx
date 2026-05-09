import { Metadata } from 'next';
import AssaultTemplate from '@/components/franklin-templates/AssaultTemplate';

export const metadata: Metadata = {
  title: 'New Albany Assault Defense Attorney | Jwayyed Law',
  description: 'Assault charge in New Albany? R.C. 2903.13. New Albany Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['New Albany assault lawyer', 'New Albany assault attorney', 'New Albany Ohio assault defense'],
  openGraph: {
    title: 'New Albany Assault Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/assault-defense-new-albany',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/assault-defense-new-albany' },
};

export default function NewAlbanyAssaultPage() {
  return <AssaultTemplate suburb="New Albany" />;
}
