import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "192.168.1.5",
    "192.168.1.*",
    "192.168.*.*",
    "localhost:3000",
    "127.0.0.1",
  ],
};

export default nextConfig;
