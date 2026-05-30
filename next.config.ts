import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/app/assets/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;