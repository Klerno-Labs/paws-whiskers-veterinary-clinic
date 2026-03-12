"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit cards (Visa, MasterCard, American Express, Discover), CareCredit, and Scratchpay. Payment is due at the time of service."
  },
  {
    question: "Do you offer boarding services?",
    answer: "Yes! We offer climate-controlled, supervised boarding for dogs and cats. All boarders must be up to date on vaccinations. Please book in advance, especially for holidays."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring any previous medical records from your previous veterinarian, a list of any medications your pet is taking, and a fresh stool sample if possible. Also, bring your pet in a secure carrier or on a leash."
  },
  {
    question: "Do you see exotic animals?",
    answer: "Yes, Dr. Okafor specializes in exotic animal care and sees reptiles, birds, and small mammals. Please call us to confirm availability for your specific pet."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Quick answers to common questions about our practice.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none&quot;
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "text-slate-400 transition-transform duration-200",
                    openIndex === idx ? "rotate-180" : ""
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="px-6 pb-4 text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}