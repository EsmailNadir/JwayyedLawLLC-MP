import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

export const metadata: Metadata = {
  title: 'Legal Services | Criminal Defense, Estate Planning, Immigration & More',
  description: 'Comprehensive legal services throughout Ohio including criminal defense, estate planning, immigration, business law, probate, personal injury, and real estate law. Experienced attorney serving clients across the state of Ohio.',
  keywords: [
    'legal services Ohio',
    'criminal defense attorney Ohio',
    'estate planning lawyer Ohio',
    'immigration attorney Ohio',
    'business law attorney Ohio',
    'probate attorney Ohio',
    'personal injury lawyer Ohio',
    'real estate attorney Ohio'
  ],
  openGraph: {
    title: 'Legal Services | Jwayyed Law LLC',
    description: 'Comprehensive legal services throughout Ohio. Criminal defense, estate planning, immigration, business law, and more.',
    url: `${siteUrl}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

