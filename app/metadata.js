/**
 * Root Layout Metadata Configuration
 * Server Component - Exports metadata for SEO
 * This is separate from layout.js which is a Client Component
 */

export const metadata = {
  title: "Muzamil Shiraz | Full Stack MERN Developer & Team Lead Pakistan",
  description: "Full Stack Engineer & Team Lead specializing in enterprise MERN architecture, ERP systems, and React/Node.js solutions. Building scalable systems that power businesses.",
  keywords: "Full Stack MERN Developer Pakistan, ERP System Architect, React Expert, Node.js Developer, MongoDB Express React, Team Lead Developer, Full Stack Engineer, MERN Stack",
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
    title: "Muzamil Shiraz | Full Stack Engineer & Team Lead",
    description: "Full Stack MERN Developer leading teams in enterprise architecture, ERP systems, and scalable solutions. Based in Pakistan.",
    siteName: "Muzamil Shiraz",
    images: [
      {
        url: "https://muzamilshiraz.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muzamil Shiraz - Full Stack Engineer & Team Lead",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzamil Shiraz | Full Stack Engineer",
    description: "Full Stack MERN Developer, ERP architect, and team leader building enterprise-grade systems. React & Node.js expert.",
    images: ["https://muzamilshiraz.com/twitter-image.png"],
    creator: "@muz4miL",
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  themeColor: "#0f172a",
  manifest: "/site.webmanifest",
};
