import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "emad",
  description: "Emad abbad portfolio",
};

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property='og:image' content='https://zjp96mnynbkoae72.public.blob.vercel-storage.com/portfolio-link-cover-oj5YSDQicgoIGW7dSPBw8XP48MHt3Q.png' />
      </head>
      <body className={`${OutfitFont.className} overflow-x-hidden`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
