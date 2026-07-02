import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "ibbc.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ranahjiwa.my.id",
          },
        ],
        destination: "https://www.ranahjiwa.my.id/:path*",
        permanent: true,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
