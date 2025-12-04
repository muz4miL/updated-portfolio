/** @type {import('next').NextConfig} */
const nextConfig = {
  // React 19 & Next.js 16 optimizations
  reactCompiler: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Enable AVIF format for better compression
    formats: ['image/avif', 'image/webp'],
    // Image optimization settings
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,
  },

  // Compress HTML & CSS
  compress: true,

  // Enable SWR (Stale-While-Revalidate) for static generation
  staticPageGenerationTimeout: 60,

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
      // Cache static assets for 1 year
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images for 1 year
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Add any necessary redirects here
    ];
  },

  // Rewrites for cleaner URLs
  async rewrites() {
    return [];
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://muzamilshiraz.com',
  },

  // Turbopack configuration (Next.js 16 default bundler)
  // Empty config uses defaults but silences webpack warnings
  turbopack: {},

  // Experimental features for performance
  experimental: {
    // Optimized package imports
    optimizePackageImports: [
      '@lucide-react',
      'framer-motion',
      'react-icons',
    ],
  },
};

export default nextConfig;
