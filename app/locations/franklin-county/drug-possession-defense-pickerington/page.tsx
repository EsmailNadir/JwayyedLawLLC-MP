import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Pickerington Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Pickerington? ILC eligibility, suppression. Pickerington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Pickerington drug possession lawyer', 'Pickerington drug charge defense', 'Pickerington Ohio drug possession'],
  openGraph: {
    title: 'Pickerington Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-pickerington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-pickerington' },
};

export default function PickeringtonDrugPage() {
  return <DrugPossessionTemplate suburb="Pickerington" />;
}
