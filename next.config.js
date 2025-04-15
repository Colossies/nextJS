/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/nextJS",
  assetPrefix: './',
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;