export const metadata = {
  title: 'Jwayyed Law LLC',
  description: 'Your trusted legal advisor',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
