import { Metadata } from "next";
import HeroCentered from "@/components/sections/hero-centered";
import FAQ from "@/components/sections/faq";
import CTASection from "@/components/sections/cta-section";
import { siteConfig } from "@/config/site";
import { Stethoscope, Syringe, HeartPulse, Scissors, Briefcase, PawPrint } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive veterinary services including wellness exams, dental care, surgery, and emergency care.",
};

const services = [
  {
    icon: Stethoscope,
    title: "Wellness Exams",
    price: "$65",
    description: "Regular check-ups are the foundation of good health. We perform comprehensive nose-to-tail examinations to detect problems early."
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    price: "From $25",
    description: "Protect your pet from preventable diseases. We offer core and lifestyle vaccines tailored to your pet's risk factors."
  },
  {
    icon: HeartPulse,
    title: "Dental Care",
    price: "$280",
    description: "Dental health is vital for overall well-being. Our cleaning procedures remove plaque and tartar while checking for oral disease."
  },
  {
    icon: Scissors,
    title: "Spay/Neuter",
    price: "From $250",
    description: "Routine spay and neuter surgeries are performed with the highest standards of care and pain management."
  },
  {
    icon: PawPrint,
    title: "Pet Boarding",
    price: "$45/night",
    description: "Climate-controlled, supervised boarding for when you're away. Medical boarding available for pets with special needs."
  },
  {
    icon: Briefcase,
    title: "Emergency Care",
    price: "Varies",
    description: "Urgent care during business hours. We prioritize sick and injured pets to get them the help they need fast."
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroCentered 
        title="Our Services" 
        subtitle="Compassionate, comprehensive care for every stage of your pet's life."
      />
      
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-sm mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-primary-600 font-semibold mb-4">{service.price}</p>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pricing Transparency</h2>
            <p className="text-slate-600">We believe in honest pricing. Here is what is included in some of our common services.</p>
          </div>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-sm group open:shadow-md transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-slate-900 list-none flex justify-between items-center">
                <span>What's included in a Wellness Exam?</span>
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                Our comprehensive exam includes a full physical assessment (eyes, ears, mouth, heart, lungs, abdomen, musculoskeletal), weight check, nutritional counseling, and vaccine recommendations. We also answer any questions you have about your pet's behavior or care.
              </div>
            </details>
            
            <details className="bg-white rounded-xl shadow-sm group open:shadow-md transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-slate-900 list-none flex justify-between items-center">
                <span>What's included in Dental Cleaning?</span>
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                Price includes anesthesia monitoring, scaling (ultrasonic and hand), polishing, and a full oral exam. Extractions and antibiotics are additional costs if needed. We provide a detailed estimate before any additional procedures.
              </div>
            </details>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}