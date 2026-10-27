/*
 * File:   app/layout.tsx
 * Author: Yassine Ouzzi
 * Date:   2026-10-27
 *
 * RootLayout wraps every page of the student portal. Its only input is
 * "children", the page on screen (app/page.tsx). It loads the fonts and the
 * global styles, sets the page title, and places the Navbar above and the
 * Footer below the page content. The main area grows to fill the screen so
 * the footer always sits at the bottom. The output is the full HTML page.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Page title and description
export const metadata: Metadata = {
  title: "New Generation High School | Student Portal",
  description: "Student portal for New Generation High School.",
};

// Layout: Navbar on top, page in the middle, Footer at the bottom
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      {/* [&_section]:scroll-mt-28 makes every anchor jump stop below the sticky navbar */}
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900 [&_section]:scroll-mt-28">
        <Navbar />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
