import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Phone, Clock, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency",
  description: "Emergency veterinary care information and contact details.",
};

export default function EmergencyPage() {
  return (
    <main className="min-h-screen bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Urgency Hero */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-danger rounded-full mb-6 animate-pulse shadow-[0_0_40px_rgba(239,68,68,0.5)]">
            <AlertTriangle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            We Are Here For You
          </h1>
          <p className="text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
            If your pet is experiencing a medical emergency, please call us immediately.
          </p>
          
          <a href="tel:5559876543">
            <Button variant="danger" size="lg" className="rounded-full text-2xl px-10 py-6 h-auto animate-pulse">
              <Phone className="mr-3 h-8 w-8" />
              (555) 987-6543
            </Button>
          </a>

          <div className="mt-8 flex justify-center items-center gap-2 text-slate-400">
            <Clock className="h-5 w-5" />
            <span>Mon-Fri 7:30am-6pm, Sat 8am-1pm</span>
          </div>
        </section>

        {/* Triage Guide */}
        <section className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-danger/50 transition-colors">
            <h3 className="text-2xl font-bold text-danger mb-4">Life-Threatening?</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              If your pet is unconscious, not breathing, bleeding severely, or having seizures, call 911 or the nearest emergency veterinary hospital immediately.
            </p>
            <div className="text-sm font-semibold text-slate-400">DO NOT WAIT.</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-primary/50 transition-colors">
            <h3 className="text-2xl font-bold text-primary mb-4">Urgent but Stable?</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              If your pet is vomiting, limping, or seems in pain but is conscious and breathing, please call us to alert the team that you are coming in.
            </p>
            <a href="tel:5559876543" className="text-primary font-bold hover:underline">Call (555) 987-6543</a>
          </div>
        </section>

        {/* Map / Directions */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Find Us Fast</h2>
          <div className="w-full h-[400px] bg-slate-700 rounded-3xl overflow-hidden relative">
             {/* Placeholder Map */}
             <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-400">
               <div className="text-center">
                 <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                 <p>Interactive Map Loading...</p>
                 <p className="text-sm mt-2">3400 Pet Care Lane, Denver, CO</p>
               </div>
             </div>
          </div>
          <div className="mt-6">
             <a 
               href="https://maps.google.com/?q=3400+Pet+Care+Lane,+Denver,+CO+80202" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-primary hover:text-white transition-colors font-semibold underline"
             >
               Open in Google Maps
             </a>
          </div>
        </section>

      </div>
    </main>
  );
}