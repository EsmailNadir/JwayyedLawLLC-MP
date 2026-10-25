const path = require('path')
const withVideos = require('next-videos')

const nextConfig = {
  turbopack: {
    // Use this project as workspace root (fixes "multiple lockfiles" warning and cache location)
    root: path.resolve(__dirname),
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  async redirects() {
    return [
      // Staff profiles removed from the site; send old links to the team page.
      { source: '/our-law-firm/our-attorneys/raneem-ali', destination: '/our-law-firm/our-attorneys', permanent: true },
      { source: '/our-law-firm/our-attorneys/jonathan-cowan', destination: '/our-law-firm/our-attorneys', permanent: true },
      { source: '/our-law-firm/our-attorneys/mateo-improvola', destination: '/our-law-firm/our-attorneys', permanent: true },
      { source: '/about/legal-assistant', destination: '/our-law-firm/our-attorneys', permanent: true },
      // /about duplicated /our-law-firm/about-us; one canonical About page.
      { source: '/about', destination: '/our-law-firm/about-us', permanent: true },
      { source: '/civil/landlord-tenant-disputes', destination: '/civil', permanent: true },
      { source: '/civil/defamation', destination: '/civil', permanent: true },
      { source: '/other-services/immigration', destination: '/other-services', permanent: true },
      { source: '/other-services/immigration-services', destination: '/other-services', permanent: true },
      { source: '/other-services/green-cards', destination: '/other-services', permanent: true },
      { source: '/other-services/deportation-defense', destination: '/other-services', permanent: true },
      { source: '/other-services/citizenship-naturalization', destination: '/other-services', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ]
  },
}

module.exports = withVideos(nextConfig)