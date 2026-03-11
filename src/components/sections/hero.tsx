"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";
import { Star, Award } from "lucide-react";

interface HeroProps {
  variant?: "split" | "center" | "dark";
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageKey?: keyof typeof images;
  badge?: string;
}

export function Hero({ variant = "split", title, subtitle, primaryCta, secondaryCta, imageKey = "hero", badge }: HeroProps) {
  const isDark = variant === "dark";
  
  return (
    <section className={cn(
      "relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden",
      isDark ? "bg-[#1e293b] text-white" : "bg-[#f0fdf4] text-slate-900"
    )}>
      {/* Ambient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#86efac]/30 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={cn(
            "max-w-2xl",
            variant === "center" && "text-center mx-auto lg:col-span-2"
          )}
        >
          {badge && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16a34a]/10 text-[#16a34a] text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
              {badge}
            </span>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 font-heading">
            {title}
          </h1>
          
          <p className={cn(
            "text-lg md:text-xl leading-relaxed mb-8",
            isDark ? "text-slate-300" : "text-slate-600"
          )}>
            {subtitle}
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row gap-4",
            variant === "center" && "sm:justify-center"
          )}>
            {primaryCta && (
              <Button href={primaryCta.href} size="lg" variant={isDark ? "secondary" : "primary"}>
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} size="lg" variant={isDark ? "ghost" : "secondary"} className={isDark ? "text-white border-white hover:bg-white/10" : ""}>
                {secondaryCta.label}
              </Button>
            )}
          </div>

          {/* Trust Indicators */}
          {variant === "split" && (
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                <span className="font-semibold text-slate-900 ml-1">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#16a34a]" />
                <span>AAHA Accredited</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Image */}
        {variant !== "center" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:order-2"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
              <Image
                src={images[imageKey].src}
                alt={images[imageKey].alt}
                width={images[imageKey].width}
                height={images[imageKey].height}
                priority
                className="object-cover hover:scale-105 transition-transform duration-[10s] ease-in-out"
              />
            </div>
            {/* Floating Card Decor */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden sm:block animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Fear Free</p>
                  <p className="text-xs text-slate-500">Certified Practice</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}