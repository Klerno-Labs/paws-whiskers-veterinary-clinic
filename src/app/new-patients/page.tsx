import { Metadata } from "next"
import { CTASection } from "@/components/sections/cta-section"
import { CheckCircle2, FileText, Calendar, Clock, Car, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "New Patients",
  description: "Your first visit to Paws & Whiskers Veterinary Clinic. What to expect and how to prepare.",
}

const steps = [
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Schedule your visit online or call us. Let us know if it's your first visit so we can prepare a welcome package."
  },
  {
    icon: FileText,
    title: "Fill Forms",
    description: "Save time by filling out our new patient registration form online before you arrive, or arrive 15 minutes early."
  },
  {
    icon: Clock,
    title: "Arrival",
    description: "Check in at the front desk. We'll take your pet's weight and show you to an exam room."
  }
]

export default function NewPatientsPage() {
  return (
    <>
      <section className="bg-white pt-20 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 mb-6">Your First Visit</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're excited to meet you and your furry friend. Here is everything you need to know to make your first visit smooth.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-slate-200 -translate-x-1/2" />
                  )}
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative z-10">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-8">What to Bring</h2>
            <ul className="space-y-6">
              {[
                "Any previous vaccination records",
                "A list of current medications and dosages",
                "Your pet in a secure carrier or on a leash",
                "A favorite treat or toy (optional)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <PawPrint className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold font-heading">New Patient Special</h3>
            </div>
            <p className="text-slate-300 mb-8 text-lg">
              Get a complete nose-to-tail exam for just <span className="text-green-400 font-bold text-2xl">$45</span> (normally $65) for your first visit.
            </p>
            <Button size="lg" className="w-full bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link href="/contact">Claim Offer</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}