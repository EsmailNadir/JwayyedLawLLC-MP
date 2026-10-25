import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /_next/ holds the CSS and JS Google needs to render pages; blocking
      // it made Googlebot see unstyled, partly empty pages.
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

