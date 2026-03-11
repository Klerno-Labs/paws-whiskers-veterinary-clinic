import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Comfortaa } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const headingFont = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({ 
  subsets: ["latin"], 
  variable: "--font-body",
  display: "swap",
});

const accentFont = Comfortaa({ 
  subsets: ["latin"], 
  variable: "--font-accent",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["veterinarian", "Denver", "vet clinic", "pet care", "emergency vet"],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg", // Add a real OG image in public folder later
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: siteConfig.name,
  image: "https://pawsandwhiskers.vet/og-image.jpg",
  "@id": siteConfig.url,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3400 Pet Care Lane",
    addressLocality: "Denver",
    addressRegion: "CO",
    postalCode: "80202",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.7392,
    longitude: -104.9903,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable} font-body antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}