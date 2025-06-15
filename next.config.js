/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // CORS configuration for API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Change to your Static Web App URL in production
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
    ];
  },
}

module.exports = nextConfig