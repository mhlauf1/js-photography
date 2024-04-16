import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jake Snitkin Photography",
  description: "Jake Snikit's Photography Website",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const biggerFont = localFont({ src: "../fonts/BiggerDisplay.otf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${biggerFont.className} `} lang="en">
      <body className="flex min-h-[100vh] flex-col ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
