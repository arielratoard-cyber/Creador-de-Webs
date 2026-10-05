import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Free photo libraries, in case photos are linked instead of saved in /public/images.
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
