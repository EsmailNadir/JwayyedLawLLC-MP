import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Worthington Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Worthington? ILC eligibility, suppression. Worthington Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Worthington drug possession lawyer', 'Worthington drug charge defense', 'Worthington Ohio drug possession'],
  openGraph: {
    title: 'Worthington Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-worthington',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-worthington' },
};

export default function WorthingtonDrugPage() {
  return <DrugPossessionTemplate suburb="Worthington" />;
}
