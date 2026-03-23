import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/navbar";
import TidioChatLabelHide from "@/components/TidioChatLabelHide";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import Footer from "@/components/footer";
import Script from "next/script";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Jwayyed Law LLC | JJ Law Ohio | Ohio Attorney | Criminal Defense, Estate Planning & Business Law",
    template: "%s | Jwayyed Law LLC"
  },
  description: "Jwayyed Law LLC (JJ Law Ohio) — Experienced Ohio attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Criminal defense, estate planning, business law, and probate. Call (614) 285-5482.",
  keywords: [
    "Ohio attorney",
    "attorney in Ohio",
    "Ohio lawyer",
    "criminal defense attorney Ohio",
    "estate planning attorney Ohio",
    "probate attorney Ohio",
    "business law attorney Ohio",
    "traffic violations attorney Ohio",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.jjlawohio.com',
    siteName: 'Jwayyed Law LLC',
    title: 'Jwayyed Law LLC | JJ Law Ohio | Ohio Attorney',
    description: 'Ohio attorney serving Columbus, Cincinnati, Dayton, and throughout Ohio. Criminal defense, estate planning, business law, probate.',
    images: [
      {
        url: '/assets/Jwayyed_Logo_Inverted.JPEG',
        width: 1200,
        height: 630,
        alt: 'Jwayyed Law LLC',
      },
    ],
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
    "alternateName": "JJ Law Ohio",
    "image": [`${siteUrl}/assets/Jwayyed_Logo_Inverted.JPEG`, `${siteUrl}/assets/jwayyed-law-llc-plaque.png`],
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
      "OVI DUI Defense",
      "Personal Injury",
      "Estate Planning",
      "Business Law",
      "Probate",
      "Civil Litigation",
      "Traffic Violations"
    ],
    "sameAs": [
      "https://www.instagram.com/jjlawohio"
    ]
  };

  return (
    <html lang="en" className={`h-full ${dmSans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <AnnouncementBar />
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer/>

        <Script
          src="//code.tidio.co/5sutrftwltrkg4rhvjyhg9rth2qvbppx.js"
          strategy="afterInteractive"
        />
        <TidioChatLabelHide />
      </body>
    </html>
  );
};
