import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // outputFileTracingRoot: __dirname,
  // images: {
  //   remotePatterns: [
  //     { protocol: "https", hostname: "pub-2446ef456c9448cf8ac5155c2b4643bf.r2.dev" },
  //   ],
  // },
  // turbopack: {
  //   root: __dirname,
  // },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
