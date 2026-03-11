import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function CtaSection({ 
  title = "Ready to Visit?", 
  subtitle = "Book your appointment today and experience the difference of compassionate care.",
  buttonText = "Book Appointment"
}: CtaSectionProps) {
  return (
    <section className="py-24 bg-secondary-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-30">
        <Image
          src={images["cta"].src}
          alt={images["cta"].alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 to-secondary-900/80" />
      </div>
      
      <div className="container-custom relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-slate-300 mb-10">{subtitle}</p>
        <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-500 text-white text-lg px-8 h-14">
          <Link href="/contact">{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}