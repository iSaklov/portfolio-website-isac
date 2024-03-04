// @ts-check
import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    domains: ['v5.airtableusercontent.com']
  }
}

// module.exports = nextConfig
export default withPlaiceholder(nextConfig)
