/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // Static HTML export — untuk Firebase & GitHub Pages
  images: {
    unoptimized: true,       // next/image tidak support static export tanpa ini
  },
  basePath: "/visdat",       // Nama repo GitHub — wajib untuk GitHub Pages
  assetPrefix: "/visdat",    // Pastikan asset (JS/CSS) dimuat dari path yang benar
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint saat build production
  },
  typescript: {
    ignoreBuildErrors: true,  // Skip TS type errors saat build production
  },
};

export default nextConfig;
