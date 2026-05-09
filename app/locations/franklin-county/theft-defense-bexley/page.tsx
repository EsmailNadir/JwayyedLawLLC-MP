import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Bexley Theft Defense Attorney | Jwayyed Law',
  description: 'Theft or shoplifting charge in Bexley? Bexley Mayor\'s Court and Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Bexley theft lawyer', 'Bexley shoplifting attorney', 'Bexley Ohio theft defense', 'Franklin County theft Bexley', 'Bexley petty theft defense'],
  openGraph: {
    title: 'Bexley Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-bexley',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-bexley' },
};

export default function BexleyTheftPage() {
  return <TheftTemplate suburb="Bexley" />;
}
