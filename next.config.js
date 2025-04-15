/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/nextJs",
  assetPrefix: './',
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;