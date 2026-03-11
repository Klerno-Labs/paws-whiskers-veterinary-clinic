"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { images } from "@/config/images";

const testimonials = [
  {
    quote: "Dr. Sato saved our dog's life when he ate something he shouldn't have. We trust them completely.",
    author: "The Garcias",
    role: "Dog Parents",
    image: "gallery-1"
  },
  {
    quote: "Most gentle vet we've ever been to. Our anxious cat was actually calm here.",
    author: "Nina P.",
    role: "Cat Parent",
    image: "gallery-2"
  },
  {
    quote: "They take the time to explain everything. You can tell they genuinely love animals.",
    author: "Chris & Amanda B.",
    role: "Dog Parents",
    image: "gallery-3"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#f0fdf4] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image src={images["testimonial-bg"].src} alt="bg" fill className="object-cover" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">Happy Pets, Happy Parents</h2>
          <p className="text-lg text-slate-600">See what our community has to say about us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[24px] shadow-card hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-[#16a34a] mb-6 opacity-50" />
              <p className="text-slate-700 mb-6 text-lg leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src={images[item.image as keyof typeof images].src} alt={item.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{item.author}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}