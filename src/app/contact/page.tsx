import { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";
import FAQ from "@/components/sections/faq";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Paws & Whiskers Veterinary Clinic. Book an appointment, ask a question, or get directions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Split Header Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-slate-600">We'd love to hear from you. Send us a message or book an appointment.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Side */}
            <div>
              <ContactForm />
            </div>

            {/* Info Side */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h3 className="font-bold text-slate-900 text-lg mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-lg font-semibold text-slate-900 hover:text-primary-600 transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-lg font-semibold text-slate-900 hover:text-primary-600 transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Address</p>
                      <p className="text-lg font-semibold text-slate-900">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="text-primary-600" />
                  <h3 className="font-bold text-primary-900 text-lg">Hours of Operation</h3>
                </div>
                <div className="space-y-2 text-primary-800">
                  <p className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span className="font-semibold">7:30am - 6:00pm</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">8:00am - 1:00pm</span>
                  </p>
                  <p className="flex justify-between text-primary-600 font-bold">
                    <span>Sunday:</span>
                    <span>Emergency Only</span>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                {/* Using next/image for building photo */}
                <div className="relative aspect-[4/3]">
                   <img
                    src={images["contact"].src}
                    alt="Clinic Exterior"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}