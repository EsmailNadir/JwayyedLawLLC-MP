import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

export const metadata: Metadata = {
  title: 'About Us | Experienced Ohio Attorney',
  description: 'Learn about Attorney Jwayyed and Jwayyed Law LLC. Experienced Ohio attorney serving the state with background as Municipal Court Prosecutor, Civil Rights Legal Director, and OSBA Leadership Academy Graduate.',
  keywords: [
    'Ohio attorney',
    'attorney Jwayyed',
    'attorney in Ohio',
    'Ohio lawyer',
    'experienced attorney Ohio',
    'criminal defense attorney Ohio',
    'estate planning attorney Ohio'
  ],
  openGraph: {
    title: 'About Us | Jwayyed Law LLC',
    description: 'Experienced Ohio attorney serving the state, dedicated to protecting your rights and providing personalized legal representation.',
    url: `${siteUrl}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

