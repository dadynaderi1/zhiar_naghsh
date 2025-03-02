import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import LanguageProvider from "@/components/LanguageProvider";
import { LanguageWrapper } from "@/components/LanguageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zhiar Naghsh - Premium 3D Models",
  description: "Discover high-quality 3D models for architecture, interior design, and visualization projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <LanguageWrapper>
              {children}
            </LanguageWrapper>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
