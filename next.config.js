/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/nextJS",
  assetPrefix: './',
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "imageloader.js",
    unoptimized: true,
  },
};

module.exports = nextConfig;