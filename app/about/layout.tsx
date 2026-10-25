import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

export const metadata: Metadata = {
  title: 'About Attorney Jwayyed Jwayyed',
  description: 'Meet Attorney Jwayyed Jwayyed: Ohio OVI, criminal defense, estate planning & business law. Former municipal prosecutor. Call (614) 285-5482.',
  keywords: [
    'Ohio attorney',
    'attorney Jwayyed',
    'attorney in Ohio',
        'criminal defense attorney Ohio',
    'estate planning attorney Ohio'
  ],
  openGraph: {
    title: 'About Attorney Jwayyed Jwayyed | Jwayyed Law LLC',
    description: 'Former prosecutor for eight Ohio communities, now representing clients across Ohio.',
    url: `${siteUrl}/about`,
    images: [{ url: '/assets/Jwayyed_Logo_Inverted.JPEG', width: 1200, height: 630, alt: 'Jwayyed Law LLC' }],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

