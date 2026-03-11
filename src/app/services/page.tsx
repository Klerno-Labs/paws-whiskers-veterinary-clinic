import { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AccordionItem } from "@/components/ui/AccordionItem"; // Assuming a simple accordion component or inline
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { images } from "@/config/images";
import { Stethoscope, Syringe, HeartPulse, Bone, Scalpel, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Full range of veterinary services including wellness, dental, surgery, and emergency care.",
};

const services = [
  { title: "Wellness Exams", price: "$65", icon: Stethoscope, desc: "Comprehensive physical exams to detect issues early." },
  { title: "Vaccinations", price: "From $25", icon: Shield, desc: "Core and lifestyle vaccines to protect your pet." },
  { title: "Dental Cleaning", price: "$280", icon: Bone, desc: "Complete oral assessment and cleaning under anesthesia." },
  { title: "Spay/Neuter", price: "From $250", icon: Scalpel, desc: "Safe, routine surgical procedures." },
  { title: "Emergency Care", price: "Varies", icon: HeartPulse, desc: "Urgent care during business hours." },
  { title: "Pet Boarding", price: "$45/night", icon: Syringe, desc: "Climate-controlled, supervised overnight stays." },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-600">
            We provide top-tier medical care with a gentle touch. From preventative medicine to surgery, we treat your pets like family.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white p-8 rounded-3xl shadow-card hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
                  <div className="w-14 h-14 bg-green-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.desc}</p>
                  <div className="text-lg font-bold text-primary">{service.price}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-secondary mb-12 text-center">What's Included?</h2>
            <div className="space-y-4">
              {[
                { q: "Wellness Exam Details", a: "Includes nose-to-tail physical examination, weight check, temperature, heart and lung auscultation, coat and skin evaluation, and behavioral consultation." },
                { q: "Dental Cleaning Details", a: "Includes pre-anesthetic blood work, IV catheter, general anesthesia, full mouth digital X-rays, scaling, polishing, and fluoride treatment." },
              ].map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors font-semibold text-lg">
                      {item.q}
                      <span className="transform group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-6 text-slate-600 leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to book?</h2>
          <Link href={siteConfig.links.contact}>
             <Button variant="primary" size="lg" className="rounded-full">Book Now</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}