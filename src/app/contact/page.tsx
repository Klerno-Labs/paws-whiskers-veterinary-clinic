import { Metadata } from "next"
import { ContactForm } from "@/components/forms/contact-form"
import { images } from "@/config/images"
import { siteConfig } from "@/config/site"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Paws & Whiskers Veterinary Clinic. Book an appointment or ask a question.",
}

export default function ContactPage() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600">
              Have a question or ready to book? We'd love to hear from you. Send us a message or give us a call.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-[4/3]">
                <Image
                  src={images["contact"].src}
                  alt={images["contact"].alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 mb-1">Location</h3>
                  <p className="text-slate-600 text-sm">{siteConfig.contact.address}</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 mb-1">Phone</h3>
                  <p className="text-slate-600 text-sm">{siteConfig.contact.phone}</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600 text-sm">{siteConfig.contact.email}</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 mb-1">Hours</h3>
                  <p className="text-slate-600 text-sm leading-snug">{siteConfig.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}