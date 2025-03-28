import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import { figtree, inter } from "./fonts";

export const metadata: Metadata = {
  title: "Hacked - Internships & Community Service",
  description: "Fuel Your Future - Internships & Community Service That Make a Difference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${inter.variable}`}>
      <body className={`bg-[#0F172A] text-white min-h-screen flex flex-col font-sans`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
