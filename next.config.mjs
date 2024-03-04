// @ts-check
import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v5.airtableusercontent.com'
        // https://nextjs.org/docs/messages/next-image-unconfigured-host
        // port: '',
        // pathname: '/account123/**',
      }
    ]
  }
}

// module.exports = nextConfig
export default withPlaiceholder(nextConfig)
