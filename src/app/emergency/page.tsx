import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { AlertTriangle, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Emergency Care",
  description: "Emergency veterinary services in Denver. We are here for you when you need us most.",
}

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Urgent Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-900/10 animate-pulse" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 mb-8">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-wide text-sm">Emergency Care</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
            We Are Here For You
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            If you are experiencing a pet emergency, please call us immediately or come directly to the clinic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-16 px-10 text-xl gap-3 shadow-lg shadow-red-900/50" asChild>
              <Link href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="w-6 h-6" />
                Call Now: {siteConfig.contact.phone}
              </Link>
            </Button>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{siteConfig.contact.address}</span>
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700">
            <Clock className="w-5 h-5 text-green-400" />
            <span className="font-medium">Current Hours: {siteConfig.contact.hours}</span>
          </div>
        </div>
      </section>

      {/* Triage */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading mb-12 text-center">Is this an emergency?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Life Threatening
              </h3>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li>• Difficulty breathing or choking</li>
                <li>• Severe bleeding or trauma</li>
                <li>• Loss of consciousness</li>
                <li>• Inability to urinate or defecate</li>
                <li>• Seizures</li>
              </ul>
              <p className="text-sm text-slate-400 italic mb-4">
                If we are closed, please proceed immediately to the nearest 24-hour emergency hospital.
              </p>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Call 911 or ER</Button>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Urgent but Stable
              </h3>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li>• Vomiting or diarrhea (no blood)</li>
                <li>• Limping or minor injury</li>
                <li>• Loss of appetite</li>
                <li>• Ear infection or skin issues</li>
                <li>• Coughing or sneezing</li>
              </ul>
              <p className="text-sm text-slate-400 italic mb-4">
                Please call us to schedule a same-day urgent care appointment.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link href={`tel:${siteConfig.contact.phone}`}>Call Clinic</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-3xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <p className="text-slate-400">Interactive Map Loading...</p>
              <p className="text-sm text-slate-500 mt-2">3400 Pet Care Lane, Denver, CO 80202</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}