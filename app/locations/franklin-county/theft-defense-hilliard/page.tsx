import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Hilliard Theft Defense Attorney | Jwayyed Law',
  description: 'Theft or shoplifting charge in Hilliard? Hilliard Rome Rd and retail enforcement. Hilliard Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Hilliard theft lawyer', 'Hilliard shoplifting attorney', 'Hilliard Ohio theft defense', 'Franklin County theft Hilliard'],
  openGraph: {
    title: 'Hilliard Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-hilliard',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-hilliard' },
};

export default function HilliardTheftPage() {
  return <TheftTemplate suburb="Hilliard" />;
}
