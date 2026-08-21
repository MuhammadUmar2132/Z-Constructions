import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z Construction | Building Innovation. Engineering Trust.",
  description: "We provide exceptional architectural and contracting services that combine craftsmanship and reliability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#111111] text-white`}>
        {/* Navbar */}
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
