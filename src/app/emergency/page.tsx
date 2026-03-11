import { Metadata } from "next";
import HeroUrgent from "@/components/sections/hero-urgent";
import { Phone, AlertTriangle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Emergency",
  description: "Emergency veterinary care services at Paws & Whiskers. Available during business hours.",
};

export default function EmergencyPage() {
  return (
    <>
      <HeroUrgent />

      {/* Triage Guide */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Triage Guide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-100 p-8 rounded-3xl text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">Life-Threatening?</h3>
              <p className="text-red-800 mb-6">
                If your pet is unconscious, not breathing, having seizures, or bleeding heavily, do not wait.
              </p>
              <p className="font-bold text-xl text-red-600 mb-6">CALL 911 or go to the nearest 24/7 Emergency Hospital.</p>
              <a 
                href="https://www.google.com/search?q=24+hour+animal+hospital+near+me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-700 underline hover:text-red-900 font-medium"
              >
                Find 24/7 Hospital
              </a>
            </div>

            <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-3xl text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Urgent but Stable?</h3>
              <p className="text-slate-700 mb-6">
                If your pet is vomiting, limping, or seems off but is conscious and breathing, call us.
              </p>
              <a 
                href={`tel:${siteConfig.contact.phone}`} 
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors"
              >
                Call {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Find Us Quickly</h2>
              <p className="text-lg text-slate-600 mb-8">
                In an emergency, every minute counts. We are conveniently located on Pet Care Lane.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
                <h3 className="font-bold text-slate-900 mb-2">Address</h3>
                <p className="text-slate-600">{siteConfig.contact.address}</p>
              </div>

              <a 
                href="https://maps.google.com/?q=3400+Pet+Care+Lane,+Denver,+CO+80202"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Open in Google Maps →
              </a>
            </div>
            
            {/* Static Map Placeholder (using an image for static export) */}
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden relative shadow-md">
               <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.3848675327364!2d-104.9903!3d39.7392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ0JzIxLjEiTiAxMDLCsDU5JzI1LjEiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}