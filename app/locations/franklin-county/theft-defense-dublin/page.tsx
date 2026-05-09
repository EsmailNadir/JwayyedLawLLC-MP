import { Metadata } from 'next';
import TheftTemplate from '@/components/franklin-templates/TheftTemplate';

export const metadata: Metadata = {
  title: 'Dublin Theft Defense Attorney | Jwayyed Law',
  description: 'Theft or shoplifting charge in Dublin? Bridge Park, Easton-adjacent retail enforcement. Dublin Mayor\'s Court. Jwayyed Law LLC. Call (614) 285-5482.',
  keywords: ['Dublin theft lawyer', 'Dublin shoplifting attorney', 'Dublin Ohio theft defense', 'Dublin Ohio retail theft', 'Franklin County theft Dublin'],
  openGraph: {
    title: 'Dublin Theft Defense Attorney | Jwayyed Law',
    url: 'https://www.jjlawohio.com/locations/franklin-county/theft-defense-dublin',
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/theft-defense-dublin' },
};

export default function DublinTheftPage() {
  return <TheftTemplate suburb="Dublin" />;
}
