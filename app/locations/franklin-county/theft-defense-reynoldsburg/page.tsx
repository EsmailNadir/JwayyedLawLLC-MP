import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Reynoldsburg Theft Defense Attorney | Jwayyed Law',
  description: 'Theft charge in Reynoldsburg? Reynoldsburg Mayor\'s Court and FCMC. Taylor Square and retail enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Reynoldsburg theft lawyer', 'Reynoldsburg shoplifting attorney', 'Reynoldsburg Ohio theft defense', 'Franklin County theft Reynoldsburg'],
  openGraph: {
    title: 'Reynoldsburg Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-reynoldsburg',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-reynoldsburg' },
};

export default function ReynoldsburgTheftPage() {
  return <TheftTemplate suburb="Reynoldsburg" />;
}
