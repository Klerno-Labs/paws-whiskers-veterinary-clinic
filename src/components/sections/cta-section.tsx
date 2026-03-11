import { Button } from "@/components/ui/button"
import { images } from "@/config/images"
import Image from "next/image"
import Link from "next/link"

export function CTASection({ title = "Ready to visit?", subtitle = "Book your appointment today and experience the difference." }: { title?: string, subtitle?: string }) {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={images["cta"].src}
          alt={images["cta"].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-green-600 text-white text-lg h-14 px-8" asChild>
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-lg h-14 px-8" asChild>
              <Link href="/new-patients">New Patient Form</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}