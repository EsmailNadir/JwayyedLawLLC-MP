import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Groveport Theft Defense Attorney | Jwayyed Law',
  description: 'Theft charge in Groveport? Groveport Mayor\'s Court and Franklin County Municipal Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Groveport theft lawyer', 'Groveport shoplifting attorney', 'Groveport Ohio theft defense', 'Franklin County theft Groveport'],
  openGraph: {
    title: 'Groveport Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-groveport',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-groveport' },
};

export default function GroveportTheftPage() {
  return <TheftTemplate suburb="Groveport" />;
}
