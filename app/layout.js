/**
 * Root Layout - Server Component with Metadata
 * Exports SEO metadata and renders the layout structure
 */

import { Space_Grotesk, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import "./styles/animation.css";
import "./enhancements.css";
import RootLayoutClient from "./layout-client";

// Font Setup
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "500", "700"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

// Export metadata for SEO (Server Component only)
export const metadata = {
  title: "Muzamil Shiraz | Front-End Engineer",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muzamil Shiraz",
              url: "https://muzamilshiraz.com",
              jobTitle: "Full-Stack Developer & Front-End Engineer",
              sameAs: [
                "https://github.com/muz4miL",
                "https://linkedin.com/in/muzamil-shiraz",
                "https://twitter.com/muz4miL",
              ],
              email: "contact@muzamilshiraz.com",
              image: "https://muzamilshiraz.com/profile-image.png",
              description: "Full-Stack Developer specializing in React, Next.js, and modern web technologies",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "Full-Stack Development",
                "Web Performance",
                "UI/UX Design",
                "TypeScript",
                "Tailwind CSS",
                "Web Development",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
            }),
          }}
        />
      </head>

      <body
        suppressHydrationWarning={true}
        className={`${spaceGrotesk.variable} ${inter.variable} ${firaCode.variable} bg-navy text-slate antialiased overflow-x-hidden selection:bg-teal selection:text-navy`}
      >
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
