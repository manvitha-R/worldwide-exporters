
/** @type {import('next').NextConfig} */
const nextConfig = {
 eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['https://worldwide-exporters-j8w0s34up-manvitha-rs-projects.vercel.app/'],
    unoptimized: true, // If you're having image optimization issues
  },
  trailingSlash: false,
}

module.exports = nextConfig