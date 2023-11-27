/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // allow remote images optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.chec.io",
        port: "",
        pathname: "/merchants/54399/assets/*",
      },
    ],
  },
};

module.exports = nextConfig;
