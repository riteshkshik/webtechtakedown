import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WebTech Takedown | Professional Anti-Piracy & Content Protection",
  description: "Protect your digital content. Stop online piracy. Professional anti-piracy, DMCA enforcement, Telegram channel removal, and digital content protection services for EdTech platforms and creators.",
  keywords: [
    "anti-piracy",
    "content protection",
    "DMCA takedown",
    "telegram piracy removal",
    "youtube piracy",
    "course leak protection",
    "edtech copyright enforcement",
    "webtech takedown"
  ],
  metadataBase: new URL("https://webtechtakedown.com"),
  openGraph: {
    title: "WebTech Takedown | Stop Online Piracy & Course Leaks",
    description: "Professional anti-piracy and digital content protection services for educators, course creators, and businesses.",
    url: "https://webtechtakedown.com",
    siteName: "WebTech Takedown",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebTech Takedown | Digital Content Protection",
    description: "Professional anti-piracy enforcement for online courses and digital media.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#060B17] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
