import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpaceX - Революция в космических исследованиях",
  description:
    "Познакомьтесь с передовыми инновациями и ракетными технологиями SpaceX, сделавшими космические путешествия реальностью для будущего.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-sky-800 to-lime-700`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
