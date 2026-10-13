/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/dental-implants', destination: '/limpeza-de-calhas/', permanent: true },
      { source: '/root-canal', destination: '/instalacao-de-calhas/', permanent: true },
      { source: '/teeth-whitening', destination: '/manutencao-de-telhados/', permanent: true },
      { source: '/dental-cleaning', destination: '/instalacao-de-rufos/', permanent: true },
      { source: '/braces', destination: '/reparos-de-telhado/', permanent: true },
      { source: '/cosmetic-dentistry', destination: '/coberturas-metalicas/', permanent: true },
      { source: '/dentists/:path*', destination: '/about/', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
