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
      // Civil practice is off the site for now (pages kept in _archived/civil). Temporary
      // redirects, so the URLs can return if the firm brings civil work back.
      { source: '/civil/breach-of-contract', destination: '/business/contract-drafting-review', permanent: false },
      { source: '/civil/construction-disputes', destination: '/business/business-litigation', permanent: false },
      { source: '/civil/employment-disputes', destination: '/business/employment-agreements', permanent: false },
      { source: '/civil/civil-protection-orders', destination: '/criminal-defense/domestic-violence', permanent: false },
      { source: '/civil', destination: '/services', permanent: false },
      { source: '/civil/:path((?!landlord-tenant-disputes|defamation).*)', destination: '/services', permanent: false },
      { source: '/civil/landlord-tenant-disputes', destination: '/services', permanent: true },
      { source: '/civil/defamation', destination: '/services', permanent: true },
      // Removed landlord-tenant articles and old or mistyped URLs that Google still lists.
      { source: '/our-law-firm/blog/ohio-landlord-tenant-security-deposit-laws', destination: '/services', permanent: true },
      { source: '/our-law-firm/blog/landlord-duty-repair-ohio-tenant-rights', destination: '/services', permanent: true },
      { source: '/our-law-firm/blog/landlord-wont-fix-heat-repairs-ohio', destination: '/services', permanent: true },
      { source: '/our-law-firm/blog/charged-with-assault-what-next', destination: '/our-law-firm/blog/charged-with-assault-what-happens-next', permanent: true },
      { source: '/our-law-firm/blog/ohio-slip-and-fall-laws', destination: '/our-law-firm/blog/ohio-slip-and-fall-laws-property-owners', permanent: true },
      { source: '/our-law-firm/our-attorneys/layan-khairi', destination: '/our-law-firm/our-attorneys', permanent: true },
      { source: '/our-team', destination: '/our-law-firm/our-attorneys', permanent: true },
      { source: '/criminal-damaging', destination: '/criminal-defense/criminal-damaging', permanent: true },
      { source: '/practice_areas/criminal-damaging', destination: '/criminal-defense/criminal-damaging', permanent: true },
      { source: '/criminal-defense/driving-under-suspension-ohio', destination: '/criminal-defense/driving-under-suspension', permanent: true },
      { source: '/trusts/medicaid-asset-protection-trust', destination: '/trusts/medicaid-asset-protection-trusts', permanent: true },
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