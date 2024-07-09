/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zdgnipjmpjiqktbpdvjj.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/news-image/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/originals/**",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
        port: "",
        pathname: "/wp/**",
      },
      {
        protocol: "https",
        hostname: "getwallpapers.com",
        port: "",
        pathname: "/wallpaper/full/**",
      },
      {
        protocol: "https",
        hostname: "wallpaperaccess.com",
        port: "",
        pathname: "/full/**",
      },
    ],
  },
};

export default nextConfig;
