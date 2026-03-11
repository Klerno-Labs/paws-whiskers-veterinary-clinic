"use client";

import { motion } from "framer-motion";
import { Stethoscope, Syringe, HeartPulse, Bone, ShieldCheck, Scissors } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Wellness Exams",
    description: "Comprehensive nose-to-tail checkups to keep your pet healthy year-round.",
    icon: Stethoscope,
    size: "large",
    price: "$65",
  },
  {
    title: "Vaccinations",
    description: "Core and lifestyle vaccines tailored to your pet's risk factors.",
    icon: ShieldCheck,
    size: "small",
    price: "From $25",
  },
  {
    title: "Dental Care",
    description: "Professional cleaning to prevent periodontal disease and tooth loss.",
    icon: Scissors,
    size: "small",
    price: "$280",
  },
  {
    title: "Surgery",
    description: "Spay/neuter and soft tissue procedures performed with advanced safety.",
    icon: Syringe,
    size: "large",
    price: "From $250",
  },
  {
    title: "Emergency Care",
    description: "Urgent care available during business hours for sudden illness or injury.",
    icon: HeartPulse,
    size: "small",
    price: "Varies",
  },
  {
    title: "Pet Boarding",
    description: "Climate-controlled, supervised stays with medical oversight if needed.",
    icon: Bone,
    size: "small",
    price: "$45/night",
  },
];

export function ServicesBento() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-900 mb-4">Our Services</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            From preventative care to advanced surgery, we offer a full range of medical services to keep your pet happy and healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group bg-slate-50 rounded-large p-8 border border-slate-100 hover:shadow-hover transition-all duration-300 flex flex-col justify-between relative overflow-hidden",
                service.size === "large" ? "md:col-span-2 lg:row-span-2" : ""
              )}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 mb-6 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-secondary-900 mb-2">{service.title}</h3>
                <p className="text-secondary-600">{service.description}</p>
              </div>
              <div className="relative z-10 mt-4 pt-4 border-t border-slate-200">
                <span className="text-primary-700 font-bold">{service.price}</span>
              </div>
              
              {/* Decorative bg */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}