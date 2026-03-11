import { Metadata } from "next";
import { Stethoscope, Scissors, Syringe, HeartPulse, ShieldCheck, Bone } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive veterinary services including wellness exams, vaccinations, dental care, surgery, and emergency care.",
};

const services = [
  { title: "Wellness Exams", price: "$65", icon: Stethoscope, desc: "Routine check-ups to ensure longevity." },
  { title: "Vaccinations", price: "From $25", icon: ShieldCheck, desc: "Protection against common diseases." },
  { title: "Dental Cleaning", price: "$280", icon: Scissors, desc: "Oral health is vital for overall health." },
  { title: "Spay/Neuter", price: "From $250", icon: Syringe, desc: "Responsible population control." },
  { title: "Emergency Care", price: "Varies", icon: HeartPulse, desc: "Urgent care when you need it most." },
  { title: "Pet Boarding", price: "$45/night", icon: Bone, desc: "Safe, supervised overnight stays." },
];

export default function ServicesPage() {
  return (
    <div className="pt-10">
      {/* Hero Centered */}
      <section className="py-20 bg-primary-50/30 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-secondary-900 mb-6">Comprehensive Care for Every Stage of Life</h1>
          <p className="text-lg text-secondary-600">
            From puppy and kittenhood through their golden years, we provide the medical support your pet needs to thrive.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="hover:shadow-lg transition-shadow border-slate-100">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="p-3 bg-primary-50 rounded-lg text-primary-600 shrink-0">
                  <s.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex justify-between items-start w-full mb-2">
                    <h3 className="text-xl font-heading font-bold text-secondary-900">{s.title}</h3>
                    <span className="text-primary-700 font-bold whitespace-nowrap">{s.price}</span>
                  </div>
                  <p className="text-secondary-600 mb-4">{s.desc}</p>
                  <Link href="/contact" className="text-sm font-semibold text-primary-600 hover:underline">Book this service &rarr;</Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-4">Pricing Transparency</h2>
            <p className="text-secondary-600">We believe in clear, upfront pricing. Here is what is included in some of our most common services.</p>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-large shadow-sm p-6">
            <AccordionItem value="wellness">
              <AccordionTrigger>Wellness Exam Includes</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comprehensive physical exam (Nose-to-tail)</li>
                  <li>Weight and body condition assessment</li>
                  <li>Vaccination recommendations</li>
                  <li>Parasite prevention plan</li>
                  <li>Nutrition and behavioral counseling</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="dental">
              <AccordionTrigger>Dental Cleaning Includes</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pre-anesthetic blood work</li>
                  <li>IV catheter and fluids</li>
                  <li>Full-mouth digital dental X-rays</li>
                  <li>Ultrasonic scaling and polishing</li>
                  <li>At-home care instructions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <CTASection />
    </div>
  );
}