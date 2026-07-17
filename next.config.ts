import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: false,
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
  devIndicators: false,
};

export default nextConfig;
