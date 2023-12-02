/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // allow remote images optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e-store-images.s3.eu-west-3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
