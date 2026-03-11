```typescript
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Home | General Business",
  description: "Welcome to our General Business website, where we provide top-notch services to help you succeed.",
  openGraph: {
    title: "Home | General Business",
    description: "Welcome to our General Business website, where we provide top-notch services to help you succeed.",
    url: "https://example.com",
    siteName: "General Business",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-white", inter.className)}>
        {children}
      </body>
    </html>
  );
}
```