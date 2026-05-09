import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Dublin Mayor's Court Attorney | Jwayyed Law",
  description: "Charged in Dublin Mayor's Court? OVI, traffic, and misdemeanor defense. Jwayyed Law LLC appears in Dublin Mayor's Court. Call (614) 285-5482.",
  keywords: ["Dublin mayor's court lawyer", "Dublin mayor's court attorney", "Dublin Ohio mayor's court defense"],
  openGraph: {
    title: "Dublin Mayor's Court Attorney | Jwayyed Law",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-dublin",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-dublin' },
};

export default function DublinMayorsCourtPage() {
  return <MayorsCourtTemplate suburb="Dublin" />;
}
