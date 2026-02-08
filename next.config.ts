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
}

module.exports = withVideos(nextConfig)