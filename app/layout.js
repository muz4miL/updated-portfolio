"use client"; // Required because we are using useState
import React, { useState, useEffect } from "react";
import { Space_Grotesk, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Socials from "../components/layout/Socials";
import Background3D from "../components/ui/Background3D";
import Preloader from "../components/ui/Preloader"; // Import the loader

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
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${firaCode.variable} bg-navy text-slate antialiased overflow-x-hidden selection:bg-teal selection:text-navy`}
      >
        {/* 1. SHOW LOADER IF LOADING IS TRUE */}
        {isLoading ? (
          <Preloader finishLoading={finishLoading} />
        ) : (
          /* 2. SHOW WEBSITE IF LOADING IS FALSE */
          <>
            <Background3D />
            <Navbar />
            <Socials />
            <main className="relative z-20 animate-fade-in-up">{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
