/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
swcMinify: true,
transpilePackages: ["ui"],
i18n: {
  locales: ["en"],
  defaultLocale: "en",
},
images: {
  domains: [
    "link.fobshanghai.com",
    "cdn.sanity.io",
    "platform-lookaside.fbsbx.com",
    "i.ibb.co",
  ],
},
typescript: {
  ignoreBuildErrors: true,
},
compiler: {
  styledComponents: true,
},
}

module.exports = nextConfig
