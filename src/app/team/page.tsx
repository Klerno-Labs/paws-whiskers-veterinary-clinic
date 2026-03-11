import { Metadata } from "next"
import { CTASection } from "@/components/sections/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import { images } from "@/config/images"
import { MapPin, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the compassionate and skilled team at Paws & Whiskers Veterinary Clinic.",
}

const team = [
  {
    name: "Dr. Emily Sato",
    role: "Lead Veterinarian",
    credentials: "DVM, University of Colorado",
    bio: "Dr. Sato founded our clinic with a vision of Fear Free veterinary medicine. She has 3 Golden Retrievers of her own and enjoys hiking on weekends.",
    image: "team-1",
    funFact: "Has climbed 14ers in Colorado with her dogs."
  },
  {
    name: "Dr. James Okafor",
    role: "Associate Veterinarian",
    credentials: "DVM, Colorado State University",
    bio: "Specializing in exotic animals and complex internal medicine, Dr. Okafor brings a wealth of knowledge to our team. He is also passionate about client education.",
    image: "team-2",
    funFact: "Owns a rescue lizard named 'Godzilla'."
  },
  {
    name: "Sarah Liu",
    role: "Veterinary Technician",
    credentials: "CVT, Certified Fear Free",
    bio: "Sarah is our cat whisperer. Her gentle handling techniques make even the most anxious felines feel at ease. She has been with us for 7 years.",
    image: "team-3",
    funFact: "Fosters kittens for the local shelter."
  },
  {
    name: "Mike Johnson",
    role: "Veterinary Assistant",
    credentials: "Pursuing DVM",
    bio: "Mike assists in surgery and manages our inventory. He is currently applying to vet school and hopes to return as a doctor one day.",
    image: "hero-alt", // Reusing a generic doctor image
    funFact: "Played college football."
  }
]

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <img
          src={images["about"].src}
          alt="Team working"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-4">Meet Your Neighbors</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            A team of dedicated professionals treating your pets like family.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={images[member.image as keyof typeof images].src}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <p className="text-white text-sm font-medium mb-2">{member.funFact}</p>
                  </div>
                </div>
                <CardContent className="p-6 text-center bg-white">
                  <h3 className="font-heading font-bold text-xl text-slate-900">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-slate-500 text-xs mb-3">{member.credentials}</p>
                  <p className="text-slate-600 text-sm line-clamp-2">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}