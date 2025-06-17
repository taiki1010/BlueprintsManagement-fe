import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blueprints-management-bucket.s3.ap-northeast-1.amazonaws.com',
        port: '',
        pathname: '/blueprints-management-bucket/**',
        search: '',
      }
    ]
  }
};

export default nextConfig;
