import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Reynoldsburg Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Reynoldsburg? ILC eligibility, suppression. Reynoldsburg Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Reynoldsburg drug possession lawyer', 'Reynoldsburg drug charge defense', 'Reynoldsburg Ohio drug possession'],
  openGraph: {
    title: 'Reynoldsburg Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-reynoldsburg',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-reynoldsburg' },
};

export default function ReynoldsburgDrugPage() {
  return <DrugPossessionTemplate suburb="Reynoldsburg" />;
}
