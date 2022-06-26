/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/write',
        destination: '/write',
      },
    ]
  },
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig

