import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Next.jsのImageコンポーネントを使うには、URLのパターンを登録する必要がある。今回はローカルでバックエンドを起動する前提でhttp://localhost:8080を指定
    remotePatterns: [new URL('http://localhost:8080/**')],
  },
};

export default nextConfig;
