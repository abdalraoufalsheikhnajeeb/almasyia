/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    qualities: [50, 60, 70, 75, 80],
  },
  experimental: {
    optimizePackageImports: ["embla-carousel-react"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [{
      source: "/sitemap-0.xml",
      destination: "/sitemap.xml",
      permanent: true,
    }, {
      source: "/:lang(en|ar|ru)/airLinesBrief/ChamWingsAirlines",
      destination: "/:lang/airLinesBrief/FlyChamAirlines",
      permanent: true,
    }];
  },
};

module.exports = nextConfig;
