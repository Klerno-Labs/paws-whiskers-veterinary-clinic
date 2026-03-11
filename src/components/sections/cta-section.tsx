import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";

export function CTASection({ title = "Ready to Visit?", description = "Book an appointment today and experience the difference of compassionate, fear-free care." }: { title?: string; description?: string }) {
  return (
    <section className="py-24 bg-secondary-900 relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src={images.cta.src}
          alt={images.cta.alt}
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/90 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">{title}</h2>
          <p className="text-slate-300 text-lg">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Link href="/contact">
            <Button size="lg" className="w-full bg-primary-600 hover:bg-primary-700 rounded-full text-white border-none">
              Book Appointment
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="w-full border-slate-500 text-white hover:bg-white/10 rounded-full">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}