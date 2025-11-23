"use client"; // Required because we are using useState
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Space_Grotesk, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import "./enhancements.css";
import Navbar from "../components/layout/Navbar";
import Socials from "../components/layout/Socials";
import Background3D from "../components/ui/Background3D";
import Preloader from "../components/ui/Preloader"; // Import the loader
import { ScrollProvider } from "../context/ScrollContext";

// Font Setup
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "500", "700"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }) {
  // State to track if loading is finished
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // This function is passed to the Preloader to tell us when it's done
  const finishLoading = () => {
    setIsLoading(false);
  };

  return (
    <html lang="en">
      <head>
        <title>Muzamil Shiraz | Portfolio</title>
        <meta
          name="description"
          content="Software Engineer & Front End Developer"
        />
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
      </head>

      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${firaCode.variable} bg-navy text-slate antialiased overflow-x-hidden selection:bg-teal selection:text-navy`}
      >
        <ScrollProvider>
          {/* 1. SHOW LOADER IF LOADING IS TRUE */}
          {isLoading ? (
            <Preloader finishLoading={finishLoading} />
          ) : (
            /* 2. SHOW WEBSITE IF LOADING IS FALSE */
            <>
              <Background3D />
              {/* Hide Navbar on book page */}
              {pathname !== "/book" && <Navbar />}
              {/* Hide Socials on book page */}
              {pathname !== "/book" && <Socials />}
              <main className="relative z-20 animate-fade-in-up">{children}</main>
            </>
          )}
        </ScrollProvider>
      </body>
    </html>
  );
}
