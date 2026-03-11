import { Metadata } from "next"
import { CTASection } from "@/components/sections/cta-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive veterinary services including wellness exams, dental care, surgery, and boarding in Denver.",
}

const services = [
  {
    id: "wellness",
    title: "Wellness Exams",
    price: "$65",
    description: "Regular checkups are the foundation of a long, healthy life. We perform comprehensive nose-to-tail examinations to catch potential issues early.",
    includes: ["Physical assessment", "Vaccination review", "Weight check", "Parasite screening"]
  },
  {
    id: "vaccinations",
    title: "Vaccinations",
    price: "From $25",
    description: "Protect your pet from preventable diseases. We follow AAHA guidelines to determine the right vaccine schedule for your pet's lifestyle.",
    includes: ["Rabies", "Distemper/Parvo", "Bordetella", "Leptospirosis"]
  },
  {
    id: "dental",
    title: "Dental Cleaning",
    price: "$280",
    description: "Dental disease is the most common health issue in pets. Our full cleanings under anesthesia include polishing, scaling, and full oral exams.",
    includes: ["Anesthesia monitoring", "Digital X-rays", "Scaling & Polishing", "At-home care kit"]
  },
  {
    id: "surgery",
    title: "Spay/Neuter",
    price: "From $250",
    description: "Safe, routine surgeries performed with advanced pain management protocols to ensure your pet's comfort throughout the process.",
    includes: ["Pre-anesthetic bloodwork", "Pain management", "Post-op monitoring", "E-collar"]
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-20 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From preventative care to advanced surgery, we provide high-quality medical services tailored to your pet's unique needs.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <span className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-lg">
                      {service.price}
                    </span>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Details */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-slate-900 text-center mb-12">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What happens during a wellness exam?</AccordionTrigger>
              <AccordionContent>
                We perform a nose-to-tail assessment, checking eyes, ears, teeth, heart, lungs, and joints. We also discuss nutrition, behavior, and any concerns you have.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer payment plans?</AccordionTrigger>
              <AccordionContent>
                Yes, we partner with CareCredit and Scratchpay to offer financing options for larger bills. We also accept all major credit cards and cash.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is anesthesia safe for dental cleanings?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We use modern gas anesthesia and monitor vital signs continuously. We require pre-anesthetic bloodwork to ensure your pet is healthy enough for the procedure.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <CTASection title="Ready to book a service?" />
    </>
  )
}