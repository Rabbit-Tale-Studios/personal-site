/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'kris.starowl.social',
      'pbs.twimg.com',
      'https://twemoji.maxcdn.com',
    ],
  },
}

module.exports = nextConfig
