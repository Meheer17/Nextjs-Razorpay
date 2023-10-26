/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['website-bucket-meheer.s3.ap-south-1.amazonaws.com', "lh3.googleusercontent.com", 'localhost', 'globalaffairsdesk.vercel.app'],
    },
    webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true }
      return config
    },
  }
  
  module.exports = nextConfig