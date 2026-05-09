import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Grove City Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Grove City? ILC eligibility, suppression defenses. Grove City Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Grove City drug possession lawyer', 'Grove City drug charge defense', 'Grove City Ohio drug possession'],
  openGraph: {
    title: 'Grove City Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-grove-city',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-grove-city' },
};

export default function GroveCityDrugPage() {
  return <DrugPossessionTemplate suburb="Grove City" />;
}
