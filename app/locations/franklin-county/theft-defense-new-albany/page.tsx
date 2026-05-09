import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'New Albany Theft Defense Attorney | Jwayyed Law',
  description: 'Theft charge in New Albany? New Albany Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['New Albany theft lawyer', 'New Albany shoplifting attorney', 'New Albany Ohio theft defense', 'Franklin County theft New Albany'],
  openGraph: {
    title: 'New Albany Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-new-albany',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-new-albany' },
};

export default function NewAlbanyTheftPage() {
  return <TheftTemplate suburb="New Albany" />;
}
