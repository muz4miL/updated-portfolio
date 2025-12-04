/**
 * Root Layout Client Component
 * Handles client-side interactivity: preloader, routing, conditional rendering
 */

"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../components/layout/Navbar";
import Socials from "../components/layout/Socials";
import Background3D from "../components/ui/Background3D";
import OctahedronBackground from "../components/ui/OctahedronBackground";
import Preloader from "../components/ui/Preloader";
import { ScrollProvider } from "../context/ScrollContext";

export default function RootLayoutClient({ children }) {
  // State to track if loading is finished
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // This function is passed to the Preloader to tell us when it's done
  const finishLoading = () => {
    setIsLoading(false);
  };

  return (
    <ScrollProvider>
      {/* 1. SHOW LOADER IF LOADING IS TRUE */}
      {isLoading ? (
        <Preloader finishLoading={finishLoading} />
      ) : (
        /* 2. SHOW WEBSITE IF LOADING IS FALSE */
        <>
          {/* Conditional backgrounds based on route */}
          {pathname === "/" && <Background3D />}
          {pathname?.startsWith("/about") && <OctahedronBackground />}
          {/* Hide Navbar on book page */}
          {pathname !== "/book" && <Navbar />}
          {/* Hide Socials on book page */}
          {pathname !== "/book" && <Socials />}
          <main className="relative z-20 animate-fade-in-up">{children}</main>
        </>
      )}
    </ScrollProvider>
  );
}
