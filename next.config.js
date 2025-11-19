/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Ensure static files are served correctly
  trailingSlash: false,
};

module.exports = nextConfig;

