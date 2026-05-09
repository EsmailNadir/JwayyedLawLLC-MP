import { Metadata } from 'next';
import DrugPossessionTemplate from '@/components/franklin-templates/DrugPossessionTemplate';

export const metadata: Metadata = {
  title: 'Dublin Drug Possession Defense | Jwayyed Law',
  description: 'Drug possession charge in Dublin? ILC eligibility, suppression defenses. Dublin Mayor\'s Court and FCMC. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Dublin drug possession lawyer', 'Dublin drug charge attorney', 'Dublin Ohio drug possession defense', 'Franklin County drug Dublin'],
  openGraph: {
    title: 'Dublin Drug Possession Defense | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/drug-possession-defense-dublin',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/drug-possession-defense-dublin' },
};

export default function DublinDrugPage() {
  return <DrugPossessionTemplate suburb="Dublin" />;
}
