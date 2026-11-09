import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project lives under the user profile, which also contains an
  // unrelated package-lock.json. Pinning the root stops Turbopack from
  // walking up and trying to treat the home directory as the workspace.
  turbopack: {
    root: path.resolve(process.cwd()),
  },

  images: {
    // Modern formats first; Next falls back automatically.
    formats: ["image/avif", "image/webp"],
    // Screenshots are wide, portraits are not — these cover both
    // without generating variants nothing ever requests.
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1620, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },

  // Drop the x-powered-by header — no value, small leak of stack info.
  poweredByHeader: false,
};

export default nextConfig;
