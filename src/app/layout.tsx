import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const headingFont = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pawsandwhiskers.vet"),
  title: {
    default: "Paws & Whiskers Veterinary Clinic | Compassionate Care in Denver",
    template: "%s | Paws & Whiskers"
  },
  description: "Compassionate, fear-free veterinary care in Denver, CO. Wellness exams, vaccinations, dental care, surgery, and emergency services.",
  openGraph: {
    title: "Paws & Whiskers Veterinary Clinic",
    description: "Compassionate, fear-free veterinary care in Denver, CO.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased bg-[#f0fdf4] text-slate-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "name": "Paws & Whiskers Veterinary Clinic",
              "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
              "telephone": "(555) 987-6543",
              "email": "care@pawsandwhiskers.vet",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3400 Pet Care Lane",
                "addressLocality": "Denver",
                "addressRegion": "CO",
                "postalCode": "80202",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.7392,
                "longitude": -104.9903
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:30",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "13:00"
                }
              ],
              "priceRange": "$$"
            })
          }}
        />
      </body>
    </html>
  );
}