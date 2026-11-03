import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'img.daisyui.com',
  //       port: '',
  //       pathname: '/images/stock/**',
  //       search: '',
  //     },
  //   ],
  // },
};

export default nextConfig;
