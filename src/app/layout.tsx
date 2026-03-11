import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Inter, Comfortaa } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/config/site"

const headingFont = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" })
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-inter" })
const accentFont = Comfortaa({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-comfortaa" })

export const metadata: Metadata = {
  metadataBase: new URL("https://pawsandwhiskers.vet"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${accentFont.variable}`}>
      <head>
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": siteConfig.name,
            "image": "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=1600",
            "telephone": siteConfig.contact.phone,
            "email": siteConfig.contact.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3400 Pet Care Lane",
              "addressLocality": "Denver",
              "addressRegion": "CO",
              "postalCode": "80202",
              "addressCountry": "US"
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
          })}
        </script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}