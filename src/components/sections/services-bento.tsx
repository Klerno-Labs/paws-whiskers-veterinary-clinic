"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/config/images";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Wellness Exams",
    price: "$65",
    description: "Comprehensive nose-to-tail checkup to keep your pet healthy year-round.",
    icon: "🩺",
    size: "large",
    image: "service-1"
  },
  {
    title: "Vaccinations",
    price: "From $25",
    description: "Core and lifestyle vaccines tailored to your pet's needs.",
    icon: "💉",
    size: "small",
    image: "hero-alt"
  },
  {
    title: "Dental Cleaning",
    price: "$280",
    description: "Full cleaning under anesthesia to prevent dental disease.",
    icon: "🦷",
    size: "small",
    image: "service-2"
  },
  {
    title: "Surgery",
    price: "From $250",
    description: "Safe, routine spay/neuter and soft tissue procedures.",
    icon: "✂️",
    size: "wide",
    image: "service-3"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function ServicesBento() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">Compassionate Care</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">From preventative exams to advanced surgery, we offer a full range of services to keep your best friend happy and healthy.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, idx) => {
            const gridSpan = service.size === "large" ? "md:col-span-2 md:row-span-2" : 
                             service.size === "wide" ? "md:col-span-2" : "md:col-span-1 md:row-span-1";
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={cn(
                  "group relative rounded-[24px] overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 cursor-pointer",
                  gridSpan
                )}
              >
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                <Image
                  src={images[service.image as keyof typeof images].src}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 font-heading">{service.title}</h3>
                  <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {service.description}
                  </p>
                  <Link href="/services" className="inline-flex items-center text-sm font-semibold hover:text-[#86efac] transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}