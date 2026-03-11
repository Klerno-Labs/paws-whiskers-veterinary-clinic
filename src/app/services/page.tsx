import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Stethoscope, Syringe, Heart, Bone, Shield } from 'lucide-react'
import { images } from '@/config/images'
import { Button } from '@/components/ui/Button'

export default function Services() {
  const services = [
    {
      title: "Wellness Exams",
      price: "$65",
      description: "Regular check-ups are the foundation of a long, healthy life. We perform comprehensive nose-to-tail examinations to detect potential health issues early.",
      includes: ["Physical Assessment", "Vaccination Review", "Parasite Prevention", "Nutritional Counseling"],
      icon: Stethoscope,
      image: images["service-1"]
    },
    {
      title: "Vaccinations",
      price: "From $25",
      description: "Protect your pet from contagious diseases. We follow AAHA guidelines to recommend the right vaccines for your pet's lifestyle.",
      includes: ["Rabies", "DHPP", "Bordetella", "Leptospirosis"],
      icon: Shield,
      image: images["service-1"]
    },
    {
      title: "Dental Care",
      price: "$280",
      description: "Dental health is crucial for overall wellbeing. Our advanced dental cleaning includes full anesthesia, scaling, polishing, and digital X-rays.",
      includes: ["Digital Dental X-Rays", "Ultrasonic Scaling", "Polishing", "Oral Exam"],
      icon: Heart,
      image: images["service-2"]
    },
    {
      title: "Surgery",
      price: "From $250",
      description: "From routine spay/neuter procedures to complex soft tissue surgeries, our facility is equipped with state-of-the-art monitoring and sterile equipment.",
      includes: ["Pre-anesthetic Bloodwork", "Pain Management", "Laser Therapy", "Post-op Care"],
      icon: Bone,
      image: images["service-3"]
    }
  ]

  return (
    <>
      <section className="pt-10 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading font-bold text-5xl text-secondary mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Compassionate, comprehensive care tailored to your pet's specific life stage and lifestyle.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image src={service.image.src} alt={service.title} fill className="object-cover" />
              </div>
              <div className={idx % 2 === 1 ? 'lg:pl-10' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <h2 className="font-heading font-bold text-3xl text-secondary mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{service.description}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-secondary">What's Included:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/contact#book">Book This Service</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Care CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl text-secondary mb-6">Emergency Care Available</h2>
          <p className="text-muted-foreground text-lg mb-8">We understand emergencies happen. We offer urgent care during our regular business hours for established clients.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700" asChild>
              <Link href="/emergency">Emergency Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}