/** @type {import('next').NextConfig} */

// basePath hanya untuk GitHub Pages — dev & Netlify pakai root
const isGitHubPages = process.env.GITHUB_PAGES === "true"

const nextConfig = {
  output: "export",          // Static HTML export — untuk Firebase & GitHub Pages
  images: {
    unoptimized: true,       // next/image tidak support static export tanpa ini
  },
  basePath:    isGitHubPages ? "/visdat" : "",
  assetPrefix: isGitHubPages ? "/visdat" : "",
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint saat build production
  },
  typescript: {
    ignoreBuildErrors: true,  // Skip TS type errors saat build production
  },
};

export default nextConfig;
