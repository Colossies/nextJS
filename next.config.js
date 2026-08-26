/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "/nextJS";

const nextConfig = {
  basePath: isGithubActions ? repoName : "",
  assetPrefix: isGithubActions ? repoName : "",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;