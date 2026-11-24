/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable persistent packfile cache to prevent memory bloat during repeated route navigations
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
