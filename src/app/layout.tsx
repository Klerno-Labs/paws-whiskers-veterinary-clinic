"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Paws & Whiskers Veterinary Clinic",
  description: "Compassionate care for your best friends.",
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
      <body className={cn("bg-background text-text")}>
        {children}
      </body>
    </html>
  );
}