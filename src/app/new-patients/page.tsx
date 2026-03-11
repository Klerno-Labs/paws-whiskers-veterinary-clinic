"use client";

import { useState } from "react";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Check, FileText, Calendar, Dog } from "lucide-react";

// Metadata is usually exported from server component, but for this single-file client page structure
// we will handle the content render. In a real app, separate the wizard into a component.
// Note: Since this is a client component "use client", we cannot export metadata here.
// We will assume the layout handles the title or we render the content manually.

const steps = [
  { id: 1, title: "Owner Info", icon: FileText },
  { id: 2, title: "Pet Info", icon: Dog },
  { id: 3, title: "History", icon: Calendar },
];

export default function NewPatientsPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    petBreed: "",
    petAge: "",
    history: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Your First Visit
          </h1>
          <p className="text-xl text-slate-600">
            We're excited to meet you and your furry friend. Here is what to expect and how to prepare.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-[#f0fdf4]">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { num: 1, text: "Book Appointment" },
            { num: 2, text: "Fill Forms" },
            { num: 3, text: "Arrive & Relax" },
          ].map((item) => (
            <div key={item.num} className="flex flex-col items-center text-center relative">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">
                {item.num}
              </div>
              <h3 className="font-bold text-lg">{item.text}</h3>
              {item.num < 3 && <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-slate-300 -z-10" />}
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form Wizard */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-card border border-slate-100">
            {/* Progress */}
            <div className="flex justify-between mb-10 relative">
              {steps.map((s, i) => (
                <div key={s.id} className="flex flex-col items-center flex-1 relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step === s.id ? "bg-primary text-white" : "bg-slate-200 text-slate-500"}`}>
                    {s.id}
                  </div>
                  <span className="text-xs mt-2 font-semibold uppercase tracking-wide hidden sm:block">
                    {s.title}
                  </span>
                  {i < steps.length - 1 && <div className="absolute top-5 left-1/2 w-full h-1 bg-slate-200 -z-10" />}
                </div>
              ))}
              {/* Active progress line */}
              <div className="absolute top-5 left-0 h-1 bg-primary transition-all duration-300 -z-10" style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }} />
            </div>

            <form onSubmit={(e) => { e.preventDefault(); }}>
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl font-bold mb-6">Owner Information</h3>
                  <Input label="Full Name" name="ownerName" value={formData.ownerName} onChange={handleChange} required />
                  <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  <Input label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl font-bold mb-6">Pet Information</h3>
                  <Input label="Pet Name" name="petName" value={formData.petName} onChange={handleChange} required />
                  <Input label="Species (Dog/Cat)" name="petType" value={formData.petType} onChange={handleChange} required />
                  <Input label="Breed" name="petBreed" value={formData.petBreed} onChange={handleChange} />
                  <Input label="Age" name="petAge" value={formData.petAge} onChange={handleChange} />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl font-bold mb-6">Health History</h3>
                  <div className="mt-6">
                    <label htmlFor="history" className="block text-sm font-medium text-slate-700 mb-2">
                      Any known allergies or conditions?
                    </label>
                    <textarea
                      id="history"
                      name="history"
                      rows={4}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 focus:outline-none focus:border-primary focus:bg-white transition-all"
                      value={formData.history}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex gap-3 items-start">
                    <Check className="text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-700">By submitting, you agree to our treatment policies.</p>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                {step > 1 ? (
                  <Button type="button" variant="ghost" onClick={prevStep}>Back</Button>
                ) : (
                  <div />
                )}
                
                {step < 3 ? (
                  <Button type="button" variant="primary" onClick={nextStep}>Next Step</Button>
                ) : (
                  <Button type="submit" variant="primary" onClick={() => alert("In a real app, this would submit to the backend!")}>Complete Registration</Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}