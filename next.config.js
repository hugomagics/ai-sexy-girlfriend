/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/visit/candy-ai',
        destination: 'https://candy.ai/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;