import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Hilliard Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Hilliard? ILC eligibility, suppression. Hilliard Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Hilliard drug possession lawyer', 'Hilliard drug charge defense', 'Hilliard Ohio drug possession'],
  openGraph: {
    title: 'Hilliard Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-hilliard',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-hilliard' },
};

export default function HilliardDrugPage() {
  return <DrugPossessionTemplate suburb="Hilliard" />;
}
