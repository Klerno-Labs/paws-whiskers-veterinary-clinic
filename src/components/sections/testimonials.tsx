"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Dr. Sato saved our dog's life when he ate something he shouldn't have. We trust them completely.",
    author: "The Garcias",
  },
  {
    quote: "Most gentle vet we've ever been to. Our anxious cat was actually calm here.",
    author: "Nina P.",
  },
  {
    quote: "They take the time to explain everything. You can tell they genuinely love animals.",
    author: "Chris & Amanda B.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-secondary-900 mb-16">What Pet Parents Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-large shadow-card border border-slate-100 relative"
            >
              <div className="flex gap-1 mb-4 text-primary-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-secondary-600 mb-6 italic text-lg">&ldquo;{item.quote}&rdquo;</p>
              <p className="font-bold text-secondary-900">— {item.author}</p>
              <div className="absolute top-8 right-8 text-6xl text-primary-100 font-serif">”</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}