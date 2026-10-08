import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    
    "localhost:3000",
    
  ],
};

export default nextConfig;
