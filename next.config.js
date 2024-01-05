/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "<YOUR SITE URL>.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  compiler:{
    styledComponents: true
  }
};

module.exports = nextConfig;
