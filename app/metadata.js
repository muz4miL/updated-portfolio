/**
 * Root Layout Metadata Configuration
 * Server Component - Exports metadata for SEO
 * This is separate from layout.js which is a Client Component
 */

export const metadata = {
  title: "Muzamil Shiraz | Full-Stack Developer & Front-End Engineer",
  description: "High-end portfolio showcasing full-stack development expertise. Specialized in React, Next.js, Web Performance & Modern UI/UX design.",
  keywords: "Full-Stack Developer, Front-End Engineer, React, Next.js, Web Developer, Portfolio, Pakistan",
  authors: [{ name: "Muzamil Shiraz", url: "https://muzamilshiraz.com" }],
  creator: "Muzamil Shiraz",
  publisher: "Muzamil Shiraz",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://muzamilshiraz.com",
  },
  openGraph: {
    type: "website",
    url: "https://muzamilshiraz.com",
    title: "Muzamil Shiraz | Full-Stack Developer & Front-End Engineer",
    description: "High-end portfolio showcasing full-stack development expertise. Specialized in React, Next.js, Web Performance & Modern UI/UX design.",
    siteName: "Muzamil Shiraz",
    images: [
      {
        url: "https://muzamilshiraz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muzamil Shiraz Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzamil Shiraz | Full-Stack Developer",
    description: "Explore my portfolio showcasing high-end web development projects with React, Next.js & modern technologies.",
    images: ["https://muzamilshiraz.com/twitter-image.png"],
    creator: "@muz4miL",
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  themeColor: "#0f172a",
  manifest: "/site.webmanifest",
};
