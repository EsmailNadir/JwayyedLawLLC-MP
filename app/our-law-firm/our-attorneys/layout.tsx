import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

export const metadata: Metadata = {
  title: 'Our Staff | Meet the Legal Team | Jwayyed Law LLC',
  description:
    'Meet the dedicated legal team at Jwayyed Law LLC. Experienced attorneys, legal assistants, and interns serving clients throughout Ohio with expertise in criminal defense, personal injury, and business law.',
  keywords: [
    'legal team Columbus Ohio',
    'Ohio law firm staff',
    'Jwayyed Law team',
    'legal professionals Ohio',
    'Columbus attorneys',
  ],
  openGraph: {
    title: 'Our Staff | Jwayyed Law LLC',
    description:
      'Meet the dedicated legal team at Jwayyed Law LLC serving clients throughout Ohio.',
    url: `${siteUrl}/our-law-firm/our-attorneys`,
  },
  alternates: {
    canonical: '/our-law-firm/our-attorneys',
  },
};

export default function OurStaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
