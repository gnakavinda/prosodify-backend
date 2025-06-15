/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mssql']
  },
  // Ensure the app runs on the correct port in Azure
  env: {
    PORT: process.env.PORT || 3000
  }
}

module.exports = nextConfig