/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ["*.ngrok-free.app", "*.loca.lt", "localhost:6001"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "limewire.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "betopia-site-assets.s3.ap-south-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "assets.betopiagroup.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "unpkg.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },
};

export default nextConfig;
