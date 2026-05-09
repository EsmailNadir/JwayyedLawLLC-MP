import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Westerville Theft Defense Attorney | Jwayyed Law',
  description: 'Theft charge in Westerville? Westerville Mayor\'s Court and FCMC. Otterbein University area and retail enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Westerville theft lawyer', 'Westerville shoplifting attorney', 'Westerville Ohio theft defense', 'Franklin County theft Westerville'],
  openGraph: {
    title: 'Westerville Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-westerville',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-westerville' },
};

export default function WestervilleTheftPage() {
  return <TheftTemplate suburb="Westerville" />;
}
