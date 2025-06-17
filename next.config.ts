import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('http://localhost:8080/**'),
      {
        protocol: 'https',
        hostname: 'blueprints-management-bucket.s3.ap-northeast-1.amazonaws.com',
        port: '',
        pathname: '/**',
        search: '',
      }
    ]
  }
};

export default nextConfig;
