import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface HeroSplitProps {
  className?: string;
}

export function HeroSplit({ className }: HeroSplitProps) {
  return (
    <section className={cn("relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-primary-50/50", className)}>
      {/* Ambient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/50 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary-100 text-primary-700 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
            </span>
            Accepting New Patients
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 leading-[1.1]">
            Compassionate Care for Your <span className="text-primary-600">Best Friends</span>
          </h1>
          
          <p className="text-lg text-secondary-600 leading-relaxed max-w-lg">
            Fear-free certified veterinary care in Denver. We treat your pets like family with gentle handling and state-of-the-art medical technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full w-full sm:w-auto group">
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/new-patients">
              <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                New Patient Info
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-2">
               {/* Mock avatars using CSS for simplicity or small images */}
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
               ))}
            </div>
            <div className="text-sm text-secondary-600">
              <div className="flex items-center gap-1 text-secondary-900 font-semibold">
                <CheckCircle className="w-4 h-4 text-primary-600" />
                5-Star Rated
              </div>
              <div className="text-xs">AAHA Accredited Clinic</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}