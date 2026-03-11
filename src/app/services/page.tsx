import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Our Services",
  description: "Comprehensive veterinary services including wellness exams, dental care, surgery, and emergency care.",
};

const services = [
  {
    name: "Wellness Exam",
    price: "$65",
    description: "A comprehensive nose-to-tail physical examination to assess your pet's overall health.",
    included: ["Physical assessment", "Vaccination review", "Parasite screening", "Nutrition consult"]
  },
  {
    name: "Vaccinations",
    price: "From $25",
    description: "Core and lifestyle vaccines to protect your pet from preventable diseases.",
    included: ["Rabies", "Distemper", "Bordetella", "Lyme Disease"]
  },
  {
    name: "Dental Cleaning",
    price: "$280",
    description: "Professional cleaning while under anesthesia to remove tartar and plaque.",
    included: ["Full scaling", "Polishing", "Oral exam", "At-home care tips"]
  },
  {
    name: "Spay/Neuter",
    price: "From $250",
    description: "Safe routine surgery performed with advanced pain management.",
    included: ["Pre-anesthetic bloodwork", "Pain medication", "Monitoring", "Post-op care"]
  },
  {
    name: "Emergency Care",
    price: "Varies",
    description: "Urgent care available during business hours for sudden illness or injury.",
    included: ["Triage assessment", "Diagnostic imaging", "Stabilization", "Critical care"]
  },
  {
    name: "Pet Boarding",
    price: "$45/night",
    description: "Climate-controlled, supervised stays for when you're away.",
    included: ["Daily walks", "Playtime", "Medication administration", " cozy bedding"]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Hero 
        variant="center"
        title="Our Services"
        subtitle="From preventative care to emergency surgery, we offer a full suite of medical services to keep your pet healthy at every stage of life."
        imageKey="about"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#f0fdf4] rounded-[24px] p-8 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{service.name}</h3>
                  <span className="bg-[#16a34a] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {service.price}
                  </span>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Have Questions?"
        subtitle="Our team is happy to discuss pricing and treatment options for your specific needs."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}