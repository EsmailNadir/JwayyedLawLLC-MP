export default function Head() {
  return (
    <>
      <title>Jwayyed Law LLC</title>
      <meta name="description" content="Your trusted legal advisor" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      {/* Preload critical resources */}
      <link rel="preload" href="/videos/background-video.mp4" as="video" type="video/mp4" />
      <link rel="preload" href="/assets/jwayyeds-homepage.webp" as="image" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
};