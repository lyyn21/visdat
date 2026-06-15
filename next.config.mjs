/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // Static HTML export — diperlukan untuk Firebase Hosting
  images: {
    unoptimized: true, // next/image tidak support static export tanpa ini
  },
};

export default nextConfig;
