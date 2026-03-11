"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Star, Stethoscope } from "lucide-react";

const trusts = [
  { icon: ShieldCheck, label: "AAHA Accredited" },
  { icon: Heart, label: "Fear Free Certified" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Stethoscope, label: "Expert Vets" },
];

export function TrustBar() {
  return (
    <div className="border-y border-slate-200 bg-white py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {trusts.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-600 font-semibold">
              <item.icon className="w-5 h-5 text-[#16a34a]" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}