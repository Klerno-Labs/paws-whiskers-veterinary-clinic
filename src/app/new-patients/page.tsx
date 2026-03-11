import { Metadata } from "next";
import { CheckCircle, FileText, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Patients",
  description: "Information for new patients including registration forms, what to expect, and how to book your first appointment.",
};

export default function NewPatientsPage() {
  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="py-20 bg-primary-50/30 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-secondary-900 mb-6">Your First Visit</h1>
          <p className="text-lg text-secondary-600">
            Welcome to Paws & Whiskers! We are excited to meet you and your pet. Here is everything you need to know to make your first visit smooth.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center text-secondary-900 mb-16">How It Works</h2>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-primary-100 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                { icon: Calendar, title: "1. Book Appointment", desc: "Call us or book online. We'll reserve a 30-minute slot for your first visit." },
                { icon: FileText, title: "2. Fill Forms", desc: "Complete our new patient forms online beforehand to save time at the clinic." },
                { icon: Clock, title: "3. Arrive & Relax", desc: "Bring any previous records. We'll handle the rest with gentle care." }
              ].map((step) => (
                <div key={step.title} className="bg-white border border-slate-100 rounded-large p-8 shadow-sm text-center">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">{step.title}</h3>
                  <p className="text-secondary-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-center text-secondary-900 mb-12">What to Bring</h2>
          
          <div className="space-y-4">
            {[
              "Your pet (on a leash or in a carrier!)",
              "Any previous vaccination or medical records",
              "A list of current medications and diet",
              "Fresh stool sample (if possible, for parasite check)"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-secondary-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-6">Ready to register?</h2>
          <p className="text-secondary-600 mb-8">
            You can fill out our registration forms digitally before your appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full">Book First Visit</Button>
            </Link>
            <Button variant="outline" size="lg" className="rounded-full" disabled>Download Forms (PDF)</Button>
          </div>
        </div>
      </section>
    </div>
  );
}