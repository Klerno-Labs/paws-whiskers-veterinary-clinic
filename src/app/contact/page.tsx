import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Paws & Whiskers Veterinary Clinic. Book an appointment or ask a question.",
};

export default function ContactPage() {
  return (
    <div className="pt-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 py-12 lg:py-24">
        {/* Left: Form */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-900 mb-4">Get in Touch</h1>
          <p className="text-secondary-600 mb-8">
            Have a question or ready to book an appointment? Fill out the form and our team will get back to you within 24 hours.
          </p>
          <ContactForm />
        </div>

        {/* Right: Info */}
        <div className="space-y-12">
          <div className="bg-primary-50 p-8 rounded-large">
            <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-6">Clinic Info</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-secondary-900">Address</h3>
                  <p className="text-secondary-600">3400 Pet Care Lane<br />Denver, CO 80202</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-secondary-900">Phone</h3>
                  <a href="tel:5559876543" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    (555) 987-6543
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-secondary-900">Email</h3>
                  <a href="mailto:care@pawsandwhiskers.vet" className="text-secondary-600 hover:text-primary-600 transition-colors">
                    care@pawsandwhiskers.vet
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-secondary-900">Hours</h3>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    Mon-Fri: 7:30am - 6pm<br />
                    Saturday: 8am - 1pm<br />
                    Sunday: Emergency Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-large overflow-hidden h-[300px] bg-slate-200 relative">
            {/* Static Map Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
               Map Placeholder
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}