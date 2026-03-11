import Link from 'next/link'
import { Phone, Clock, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Emergency() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        
        {/* Urgency Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-600 animate-pulse mb-8">
             <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6">We Are Here For You</h1>
          <p className="text-2xl text-slate-300 mb-8">If this is a life-threatening emergency, please call 911 immediately.</p>
          
          <a href="tel:5559876543" className="inline-block">
            <Button variant="danger" size="lg" className="text-xl h-16 px-10 w-full md:w-auto">
              <Phone className="w-6 h-6 mr-2" /> (555) 987-6543
            </Button>
          </a>
        </div>

        {/* Status Card */}
        <div className="bg-slate-800 rounded-2xl p-8 mb-12 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Clock className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-sm text-slate-400 uppercase tracking-wide font-bold">Current Status</p>
              <p className="text-xl font-bold text-white">Open Now (Until 6pm)</p>
            </div>
          </div>
          <div className="text-right md:text-left">
             <p className="text-slate-300">Estimated Wait Time: <span className="text-white font-bold">15 mins</span></p>
          </div>
        </div>

        {/* Triage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-900/30 border border-red-800 rounded-2xl p-8">
            <h2 className="font-heading font-bold text-2xl text-red-200 mb-4">Life-Threatening?</h2>
            <p className="text-slate-300 mb-6">Signs include: difficulty breathing, seizures, unconsciousness, severe bleeding, or inability to urinate.</p>
            <a href="tel:911" className="text-red-400 font-bold hover:underline">Call 911 Immediately &rarr;</a>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h2 className="font-heading font-bold text-2xl text-white mb-4">Urgent but Stable?</h2>
            <p className="text-slate-300 mb-6">Signs include: vomiting, diarrhea, limping, or eating something they shouldn't have.</p>
            <a href="tel:5559876543" className="text-white font-bold hover:underline">Call Us &rarr;</a>
          </div>
        </div>

        {/* Location */}
        <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
          <div className="p-8">
            <h2 className="font-heading font-bold text-2xl mb-4">Find Us Fast</h2>
            <p className="text-slate-300 mb-2">3400 Pet Care Lane, Denver, CO 80202</p>
            <p className="text-slate-400 text-sm">We have dedicated emergency parking spots right in front of the entrance.</p>
          </div>
          <div className="aspect-video w-full bg-slate-700 relative">
             {/* Placeholder for Map */}
             <div className="absolute inset-0 flex items-center justify-center text-slate-500">
               <span className="flex items-center gap-2"><Phone className="w-4 h-4"/> Map Loading...</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  )
}