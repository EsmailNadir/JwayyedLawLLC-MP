import Navbar from "@/components/navbar";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import Head from "next/head";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Jwayyed Law LLC",
  description: "Your trusted legal advisor",
  icons: {
    icon: '/assets/Jwayyed_Logo_Inverted.JPEG',
    shortcut: '/assets/Jwayyed_Logo_Inverted.JPEG',
    apple: '/assets/Jwayyed_Logo_Inverted.JPEG',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Head>

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
