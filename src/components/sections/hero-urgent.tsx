import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";

export default function HeroUrgent() {
  return (
    <section className="relative bg-secondary-900 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={images["emergency"].src}
          alt={images["emergency"].alt}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container-custom relative z-10 text-center text-white">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/50 text-red-200 text-sm font-semibold mb-8 animate-pulse">
          <span className="flex h-2 w-2 rounded-full bg-red-500"></span>
          Emergency Care Available
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          We Are Here For You
        </h1>
        
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          If your pet is experiencing a medical emergency, please call us immediately or come to our clinic right away.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a href="tel:5559876543" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-red-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-700 hover:scale-105">
            <Phone className="w-6 h-6 mr-2 animate-pulse" />
            Call (555) 987-6543
          </a>
          
          <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 text-lg px-8">
            <Link href="/contact">
              <MapPin className="w-6 h-6 mr-2" />
              Get Directions
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-700 pt-8">
          <div className="text-center">
            <p className="text-slate-400 text-sm mb-1">Monday - Friday</p>
            <p className="text-xl font-semibold">7:30am - 6:00pm</p>
          </div>
          <div className="text-center border-l border-slate-700 md:border-l-0">
            <p className="text-slate-400 text-sm mb-1">Saturday</p>
            <p className="text-xl font-semibold">8:00am - 1:00pm</p>
          </div>
          <div className="text-center border-l border-slate-700 md:border-l-0">
            <p className="text-slate-400 text-sm mb-1">Sunday</p>
            <p className="text-xl font-semibold text-red-400">Emergency Only</p>
          </div>
        </div>
      </div>
    </section>
  );
}