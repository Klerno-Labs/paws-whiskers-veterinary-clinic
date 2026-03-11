import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Paws & Whiskers Veterinary Clinic",
  description: "Compassionate Care for Your Best Friends",
  openGraph: {
    title: "Paws & Whiskers Veterinary Clinic",
    description: "Compassionate Care for Your Best Friends",
    url: "https://example.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
        alt: "Modern office workspace with natural light",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}