/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  imges: {
    domains: ['loremflickr.com'],
  },
};

module.exports = nextConfig;
