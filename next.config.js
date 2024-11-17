/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Suppress development mode logs
  logging: {
    level: 'error'
  }
};

module.exports = nextConfig;