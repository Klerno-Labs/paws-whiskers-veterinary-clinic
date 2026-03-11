import { Metadata } from "next";
import { Phone, MapPin, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Care",
  description: "Urgent care information and triage. If this is a life-threatening emergency, please call 911 immediately.",
};

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-secondary-900 text-white">
      {/* Hero Urgent */}
      <section className="py-24 px-6 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Emergency Services
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-bold mb-6">We Are Here For You</h1>
          <p className="text-xl text-slate-300 mb-8">
            If you are experiencing a medical emergency during business hours, please call us immediately or come directly to the clinic.
          </p>
          <a href="tel:5559876543" className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-white text-secondary-900 hover:bg-slate-100 px-8 py-4 rounded-full text-lg font-bold transition-colors">
            <Phone className="w-6 h-6" />
            Call (555) 987-6543
          </a>
          <p className="mt-4 text-slate-400 text-sm">Mon-Fri 7:30am-6pm, Sat 8am-1pm</p>
        </div>
      </section>

      {/* Triage */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Life Threatening */}
          <div className="bg-red-900/30 border border-red-500/30 p-8 rounded-2xl">
            <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-red-100">Is this life-threatening?</h2>
            <p className="text-slate-300 mb-6">Signs include: difficulty breathing, unconsciousness, severe bleeding, seizures, or inability to stand.</p>
            <p className="font-bold text-white mb-6">Call 911 or visit the nearest 24-hour emergency animal hospital immediately.</p>
            <div className="text-sm text-slate-400">
              <strong>Note:</strong> We are not a 24-hour facility. For after-hours emergencies, please see <span className="underline">Denver Emergency Vet</span>.
            </div>
          </div>

          {/* Urgent */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <Phone className="w-12 h-12 text-primary-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-primary-200">Is this urgent but not life-threatening?</h2>
            <p className="text-slate-300 mb-6">Signs include: vomiting, diarrhea, limping, ear infection, or eating something they shouldn't have.</p>
            <Link href="/contact" className="inline-block text-center w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Call or Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Map / Directions */}
      <section className="bg-secondary-800 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">Find Us Fast</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary-400 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg">Paws & Whiskers Veterinary Clinic</p>
                  <p className="text-slate-300">3400 Pet Care Lane<br />Denver, CO 80202</p>
                </div>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg">
                <p className="text-sm text-slate-400 uppercase font-bold mb-2">Parking</p>
                <p className="text-slate-200">Free parking is available directly in front of the building. Look for the designated "Client Parking" signs.</p>
              </div>
              <Button variant="outline" className="bg-white text-secondary-900 hover:bg-slate-200 border-none w-full sm:w-auto">
                Get Directions (Google Maps)
              </Button>
            </div>
          </div>
          <div className="h-[300px] md:h-[400px] bg-slate-700 rounded-2xl flex items-center justify-center text-slate-500">
            {/* Placeholder for Map Embed */}
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Interactive Map Loading...</p>
              <p className="text-xs">(Requires API Key)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}