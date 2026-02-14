import Navbar from "@/components/navbar";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Jwayyed Law LLC | Ohio Attorney | Criminal Defense, Estate Planning & Immigration",
    template: "%s | Jwayyed Law LLC"
  },
  description: "Experienced Ohio attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Criminal defense, estate planning, immigration, business law, and probate. Call (614) 285-5482.",
  keywords: [
    "Ohio attorney",
    "attorney in Ohio",
    "Ohio lawyer",
    "criminal defense attorney Ohio",
    "estate planning attorney Ohio",
    "immigration lawyer Ohio",
    "probate attorney Ohio",
    "business law attorney Ohio",
    "traffic violations attorney Ohio",
    "family law attorney Ohio",
    "legal services Ohio",
    "attorney serving Ohio",
    "lawyer throughout Ohio"
  ],
  authors: [{ name: "Jwayyed Law LLC" }],
  creator: "Jwayyed Law LLC",
  publisher: "Jwayyed Law LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com',
    siteName: 'Jwayyed Law LLC',
    title: 'Jwayyed Law LLC | Ohio Attorney',
    description: 'Ohio attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Criminal defense, estate planning, immigration, business law, probate.',
    images: [
      {
        url: '/assets/Jwayyed_Logo_Inverted.JPEG',
        width: 1200,
        height: 630,
        alt: 'Jwayyed Law LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jwayyed Law LLC | Ohio Attorney',
    description: 'Ohio attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Comprehensive legal services.',
    images: ['/assets/Jwayyed_Logo_Inverted.JPEG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/Jwayyed_Logo_Inverted.JPEG',
    shortcut: '/assets/Jwayyed_Logo_Inverted.JPEG',
    apple: '/assets/Jwayyed_Logo_Inverted.JPEG',
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Jwayyed Law LLC",
    "image": `${siteUrl}/assets/Jwayyed_Logo_Inverted.JPEG`,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "(614) 285-5482",
    "email": "jwayyedlawllc@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 E. Campus View Boulevard, Suite #250",
      "addressLocality": "Columbus",
      "addressRegion": "OH",
      "postalCode": "43235",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.030016,
      "longitude": -83.023834
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "State",
      "name": "Ohio"
    },
    "serviceType": [
      "Criminal Defense",
      "Estate Planning",
      "Immigration Law",
      "Business Law",
      "Probate",
      "Traffic Violations",
      "Family Law"
    ]
  };

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
};
