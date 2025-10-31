/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['your-domain.vercel.app'],
    unoptimized: true, // Important for static exports if needed
  },
}

module.exports = nextConfig