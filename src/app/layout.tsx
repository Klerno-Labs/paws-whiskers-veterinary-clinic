import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, Comfortaa } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })
const comfortaa = Comfortaa({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-comfortaa', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL("https://pawsandwhiskers.vet"),
  title: {
    default: "Paws & Whiskers Veterinary Clinic | Compassionate Care in Denver",
    template: "%s | Paws & Whiskers Vet"
  },
  description: "Fear-Free certified veterinary clinic in Denver offering wellness exams, vaccinations, dental care, surgery, and emergency services. Compassionate care for your best friends.",
  openGraph: {
    title: "Paws & Whiskers Veterinary Clinic",
    description: "Compassionate Care for Your Best Friends. Top-rated vet in Denver.",
    url: "https://pawsandwhiskers.vet",
    siteName: "Paws & Whiskers Veterinary Clinic",
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${comfortaa.variable}`}>
      <body className="font-sans antialiased bg-background text-secondary selection:bg-accent selection:text-white">
        <Navbar />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}