import { Metadata } from "next";
import HeroCentered from "@/components/sections/hero-centered";
import RegistrationWizard from "@/components/forms/registration-wizard";
import CTASection from "@/components/sections/cta-section";
import { Calendar, FileText, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "New Patients",
  description: "Welcome to Paws & Whiskers. Information for new patients including registration forms and what to expect.",
};

const steps = [
  {
    icon: Calendar,
    title: "Book Your Visit",
    description: "Schedule an appointment online or give us a call. We offer same-day appointments for urgent needs."
  },
  {
    icon: FileText,
    title: "Complete Forms",
    description: "Fill out our new patient registration form before you arrive to save time at the clinic."
  },
  {
    icon: MapPin,
    title: "Arrive & Check-In",
    description: "Bring your pet in a carrier or on a leash, along with any previous medical records."
  },
];

export default function NewPatientsPage() {
  return (
    <>
      <HeroCentered 
        title="Your First Visit" 
        subtitle="We're excited to meet you and your furry friend. Here is everything you need to know."
      />

      {/* Process Timeline */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-24 h-24 bg-white border-4 border-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6 shadow-sm z-10 relative">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Step {idx + 1}: {step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">New Patient Registration</h2>
            <p className="text-slate-600">Get a head start by registering your pet online.</p>
          </div>
          <RegistrationWizard />
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What to Bring</h2>
          </div>
          
          <ul className="space-y-4">
            {[
              "Your pet in a secure carrier or on a leash",
              "Any previous vaccination records or medical history",
              "A fresh stool sample (if possible)",
              "List of any current medications and dosages",
              "Your preferred payment method"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}