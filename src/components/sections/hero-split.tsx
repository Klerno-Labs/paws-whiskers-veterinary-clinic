"use client";

import { Button } from "@/components/ui/button"
import { images } from "@/config/images"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Star } from "lucide-react"
import Link from "next/link"

export function HeroSplit() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f0fdf4]">
      {/* Ambient Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-200/30 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[80px] -z-10 -translate-x-1/3 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6 border border-green-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Accepting New Patients
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-900 tracking-tight leading-[1.1] mb-6">
              Compassionate Care for Your Best Friends
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              We combine modern veterinary medicine with a gentle touch. From wellness exams to emergency surgery, your pet is family here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg gap-2" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>Trusted by 2,000+ Denver families</span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
              <Image
                src={images["hero"].src}
                alt={images["hero"].alt}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-900">Fear Free Certified</p>
                    <p className="text-sm text-slate-600">Reducing stress for your pet</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}