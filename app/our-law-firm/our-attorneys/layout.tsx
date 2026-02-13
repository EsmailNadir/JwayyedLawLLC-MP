import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

export const metadata: Metadata = {
  title: 'Our Team | Experienced Legal Professionals | Jwayyed Law LLC',
  description: 'Meet the experienced legal team at Jwayyed Law LLC. Dedicated attorneys and legal professionals serving clients throughout Ohio with expertise in criminal defense, estate planning, and immigration law.',
  keywords: [
    'legal team Columbus',
    'attorneys Ohio',
    'legal professionals',
    'law firm team',
    'experienced lawyers'
  ],
  openGraph: {
    title: 'Our Team | Jwayyed Law LLC',
    description: 'Meet the experienced legal team at Jwayyed Law LLC serving clients throughout Ohio.',
    url: `${siteUrl}/our-team`,
  },
};

export default function OurTeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

