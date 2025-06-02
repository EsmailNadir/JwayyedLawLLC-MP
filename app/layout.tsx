import Navbar from "@/components/navbar";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Jwayyed Law LLC",
  description: "Your trusted legal advisor",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
