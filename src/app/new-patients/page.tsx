import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, FileText, Calendar, PawPrint } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NewPatients() {
  return (
    <div className="pt-10">
      {/* Hero */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading font-bold text-5xl text-secondary mb-6">Your First Visit</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We know visiting a new vet can be stressful for both you and your pet. We&apos;ve made the process simple, transparent, and welcoming.
            </p>
            <div className="flex gap-4">
               <Button size="lg" asChild>
                <Link href="/contact#book">Schedule Appointment</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=800&fit=crop" 
              alt="Veterinarian greeting a dog" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading font-bold text-4xl text-secondary mb-16 text-center">How It Works</h2>
          
          <div className="relative space-y-16">
             {/* Connecting Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block"></div>

            {/* Step 1 */}
            <div className="relative flex gap-8 md:gap-12 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 z-10 shadow-lg">1</div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-secondary mb-2">Book Your Appointment</h3>
                <p className="text-muted-foreground">Call us or use our online booking system to schedule a time that works for you. New patient exams typically take about 45 minutes.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-8 md:gap-12 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 z-10 shadow-lg">2</div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-secondary mb-2">Complete Forms</h3>
                <p className="text-muted-foreground">Save time by filling out our new patient registration forms online before you arrive. If not, we provide copies in the clinic.</p>
                <div className="mt-4">
                   <Button variant="outline" size="sm">
                     <FileText className="w-4 h-4 mr-2" /> Download Forms
                   </Button>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-8 md:gap-12 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0 z-10 shadow-lg">3</div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-secondary mb-2">Arrival & Check-In</h3>
                <p className="text-muted-foreground">When you arrive, please keep your pet in your carrier or on a short leash. Our reception team will greet you and guide you to an exam room.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-4xl text-secondary mb-12 text-center">What to Bring</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Previous vaccination records",
              "Any medications your pet is currently taking",
              "A list of foods/treats your pet eats",
              "Your pet in a secure carrier or on a leash"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-50">
                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
           <PawPrint className="w-12 h-12 text-primary mx-auto mb-6" />
           <h2 className="font-heading font-bold text-3xl text-secondary mb-4">Ready to Register?</h2>
           <p className="text-muted-foreground mb-8">Fill out our secure online form to get started with your account.</p>
           <Button size="lg" asChild>
             <Link href="/contact#book">New Patient Registration</Link>
           </Button>
        </div>
      </section>
    </div>
  )
}