import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Marble Cliff Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Marble Cliff? Franklin County Municipal Court. ILC eligibility. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Marble Cliff drug possession lawyer', 'Marble Cliff drug charge defense', 'Marble Cliff Ohio drug possession'],
  openGraph: {
    title: 'Marble Cliff Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-marble-cliff',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-marble-cliff' },
};

export default function MarbleCliffDrugPage() {
  return <DrugPossessionTemplate suburb="Marble Cliff" />;
}
