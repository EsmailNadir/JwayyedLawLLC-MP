import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

export const metadata: Metadata = {
  title: 'About Our Firm',
  description: 'About Jwayyed Law LLC: Attorney Jwayyed Jwayyed, former prosecutor defending OVI, criminal, injury & business clients across Ohio. (614) 285-5482.',
  keywords: [
    'Ohio attorney',
    'attorney Jwayyed',
    'attorney in Ohio',
        'criminal defense attorney Ohio',
    'estate planning attorney Ohio'
  ],
  openGraph: {
    title: 'About Our Firm | Jwayyed Law LLC',
    description: 'Attorney Jwayyed Jwayyed: former prosecutor, now representing clients across Ohio.',
    url: `${siteUrl}/our-law-firm/about-us`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

