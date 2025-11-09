import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: false,
  exportTrailingSlash: false,
};

export default nextConfig;
