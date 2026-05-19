import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // geoip-lite reads `.dat` files via __dirname; bundling breaks that path.
  serverExternalPackages: ["geoip-lite"],
};

export default nextConfig;
