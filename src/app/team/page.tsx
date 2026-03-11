import Image from 'next/image'
import Link from 'next/link'
import { Heart, Instagram, Linkedin } from 'lucide-react'
import { images } from '@/config/images'

export default function Team() {
  const doctors = [
    {
      name: "Dr. Emily Sato",
      role: "Lead Veterinarian",
      bio: "Dr. Sato has over 11 years of experience in small animal medicine. She is Fear Free Certified and has a special interest in dermatology and senior pet care.",
      funFact: "She has 3 Golden Retrievers named Honey, Bear, and Maple.",
      image: images["team-1"],
      credentials: "DVM, Fear Free Certified"
    },
    {
      name: "Dr. James Okafor",
      role: "Associate Veterinarian",
      bio: "Dr. Okafor joined us after completing his residency in internal medicine. He is our go-to expert for complex diagnostics and exotic animal care.",
      funFact: "He is an avid bird watcher and owns a parrot named Kiwi.",
      image: images["team-2"],
      credentials: "DVM, Exotic Specialist"
    }
  ]

  const staff = [
    {
      name: "Sarah Liu",
      role: "Veterinary Technician",
      bio: "Sarah is our head technician with 7 years of experience. She is a certified expert in feline behavior and helps run our 'Cat Friendly' initiatives.",
      image: images["team-3"],
      credentials: "CVT"
    }
  ]

  return (
    <>
      {/* Hero with Team Photo */}
      <section className="relative py-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
           {/* Using an overlay image conceptually, here solid color for reliability */}
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="font-heading font-bold text-5xl mb-6">Meet Your Neighbors</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">We are a team of dedicated animal lovers who treat your pets as if they were our own.</p>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-3xl text-secondary mb-12 text-center">Our Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {doctors.map((doc, idx) => (
              <div key={idx} className="group bg-white rounded-[32px] overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 border border-slate-100">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image src={doc.image.src} alt={doc.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl text-secondary mb-1">{doc.name}</h3>
                  <p className="text-primary font-medium mb-4">{doc.credentials}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{doc.bio}</p>
                  
                  <div className="bg-green-50 rounded-xl p-4 flex gap-3 items-start mb-6">
                    <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wide">Fun Fact</span>
                      <p className="text-sm text-secondary mt-1">{doc.funFact}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-bold text-3xl text-secondary mb-12 text-center">Veterinary Nurses & Support</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {staff.map((member, idx) => (
              <div key={idx} className="w-full md:w-[350px] bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50">
                  <Image src={member.image.src} alt={member.name} width={128} height={128} className="object-cover" />
                </div>
                <h3 className="font-heading font-bold text-xl text-secondary">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.credentials}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}