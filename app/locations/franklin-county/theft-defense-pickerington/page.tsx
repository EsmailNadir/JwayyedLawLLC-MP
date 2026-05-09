import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Pickerington Theft Defense Attorney | Jwayyed Law',
  description: 'Theft charge in Pickerington? Pickerington Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Pickerington theft lawyer', 'Pickerington shoplifting attorney', 'Pickerington Ohio theft defense', 'Franklin County theft Pickerington'],
  openGraph: {
    title: 'Pickerington Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-pickerington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-pickerington' },
};

export default function PickeringtonTheftPage() {
  return <TheftTemplate suburb="Pickerington" />;
}
