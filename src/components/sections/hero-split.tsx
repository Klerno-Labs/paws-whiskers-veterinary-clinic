import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";

interface HeroSplitProps {
  className?: string;
}

export default function HeroSplit({ className }: HeroSplitProps) {
  return (
    <section className={cn("relative min-h-[85vh] flex items-center bg-[#f0fdf4] overflow-hidden", className)}>
      {/* Ambient Blobs */}
      <div className="blob-bg bg-green-300/40 top-20 right-10 animate-blob"></div>
      <div className="blob-bg bg-green-200/40 bottom-20 left-10 animate-blob animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-green-100 shadow-sm text-primary-700 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              Accepting New Patients
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
              Compassionate Care for Your <span className="text-primary-600">Best Friends</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Experience fear-free veterinary care in Denver. We combine medical excellence with a gentle touch to keep your pets happy and healthy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/contact">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="text-base px-8">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary-600" />
                <span>Fear Free Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary-600" />
                <span>AAHA Accredited</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:ml-auto group">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[3/4]">
              <Image
                src={images["hero"].src}
                alt={images["hero"].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl max-w-xs hidden sm:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Open 7 Days a Week</p>
                  <p className="text-xs text-slate-500">Emergencies Welcome</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}