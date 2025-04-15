/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? "/nextJs": "",
  assetPrefix: isProd ? '/your-repo-name/' : '',
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;