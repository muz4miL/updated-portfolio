import { Space_Grotesk, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Socials from "../components/layout/Socials";
import Background3D from "../components/ui/Background3D";

// 1. The "Tech" Header Font (Used for Name & Stats)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "500", "700"],
});

// 2. The Clean Body Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// 3. The Coding Font
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Muzamil Shiraz | Portfolio",
  description: "Software Engineer & Front End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${firaCode.variable} bg-navy text-slate antialiased overflow-x-hidden selection:bg-teal selection:text-navy`}
      >
        <Background3D />
        <Navbar />
        <Socials />
        <main className="relative z-20">{children}</main>
      </body>
    </html>
  );
}
