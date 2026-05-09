import { Metadata } from 'next';
import MayorsCourtTemplate from '@/components/franklin-templates/MayorsCourtTemplate';

export const metadata: Metadata = {
  title: "Grove City Mayor's Court Attorney | Jwayyed Law",
  description: "Charged in Grove City Mayor's Court? OVI, traffic, and misdemeanor defense. Jwayyed Law LLC appears in Grove City Mayor's Court. Call (614) 285-5482.",
  keywords: ["Grove City mayor's court lawyer", "Grove City mayor's court attorney", "Grove City Ohio mayor's court defense"],
  openGraph: {
    title: "Grove City Mayor's Court Attorney | Jwayyed Law",
    url: "https://www.jjlawohio.com/locations/franklin-county/mayors-court-grove-city",
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: { canonical: '/locations/franklin-county/mayors-court-grove-city' },
};

export default function GroveCityMayorsCourtPage() {
  return <MayorsCourtTemplate suburb="Grove City" />;
}
