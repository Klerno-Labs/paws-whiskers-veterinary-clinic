"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paws & Whiskers Veterinary Clinic",
  description: "Compassionate care for your best friends.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Paws & Whiskers Veterinary Clinic",
    description: "Compassionate care for your best friends.",
    url: "https://example.com",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body className={cn("bg-background text-text")}>
        {children}
      </body>
    </html>
  );
}