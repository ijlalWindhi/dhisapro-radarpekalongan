/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zdgnipjmpjiqktbpdvjj.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/news-image/**",
      },
    ],
  },
};

export default nextConfig;
