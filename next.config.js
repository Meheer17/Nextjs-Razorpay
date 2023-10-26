/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    async headers() {
        return [
          {
            // matching all API routes
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
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