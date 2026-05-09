import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Upper Arlington Theft Defense | Jwayyed Law',
  description: 'Theft charge in Upper Arlington? Upper Arlington Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Upper Arlington theft lawyer', 'Upper Arlington shoplifting attorney', 'Upper Arlington Ohio theft defense', 'Franklin County theft Upper Arlington'],
  openGraph: {
    title: 'Upper Arlington Theft Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-upper-arlington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-upper-arlington' },
};

export default function UpperArlingtonTheftPage() {
  return <TheftTemplate suburb="Upper Arlington" />;
}
