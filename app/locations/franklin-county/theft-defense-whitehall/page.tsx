import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Whitehall Theft Defense Attorney | Jwayyed Law',
  description: 'Theft charge in Whitehall? Whitehall Mayor\'s Court and FCMC. E. Main Street corridor enforcement. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Whitehall theft lawyer', 'Whitehall shoplifting attorney', 'Whitehall Ohio theft defense', 'Franklin County theft Whitehall'],
  openGraph: {
    title: 'Whitehall Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-whitehall',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-whitehall' },
};

export default function WhitehallTheftPage() {
  return <TheftTemplate suburb="Whitehall" />;
}
