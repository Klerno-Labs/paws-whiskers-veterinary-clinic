import { Metadata } from "next";
import Image from "next/image";
import { images } from "@/config/images";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet our experienced team of veterinarians and support staff dedicated to your pet's health.",
};

const team = [
  {
    name: "Dr. Emily Sato",
    role: "Lead Veterinarian",
    creds: "DVM, Fear Free Certified",
    bio: "Dr. Sato has over a decade of experience in general practice. She is passionate about pain management and making vet visits less stressful for pets.",
    funFact: "She has 3 Golden Retrievers who are all named after cheese.",
    image: images["team-1"],
  },
  {
    name: "Dr. James Okafor",
    role: "Associate Veterinarian",
    creds: "DVM",
    bio: "Dr. Okafor specializes in exotic animals and soft tissue surgery. He loves solving complex medical cases and educating clients.",
    funFact: "He is an avid bird watcher and owns a parrot named Kiwi.",
    image: images["hero-alt"],
  },
  {
    name: "Sarah Liu",
    role: "Veterinary Technician",
    creds: "CVT",
    bio: "Sarah is our head technician with a special interest in feline behavior. She ensures every patient feels safe and comfortable.",
    funFact: "She is a certified cat whisperer (not really, but close).",
    image: images["gallery-2"],
  },
];

export default function TeamPage() {
  return (
    <div>
      {/* Hero Overlay */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src={images.about.src} alt="Team" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-secondary-900/70" />
        </div>
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">Meet Your Neighbors</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">We are not just vets; we are fellow pet lovers dedicated to the Denver community.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member) => (
              <Card key={member.name} className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/5] relative">
                  <Image src={member.image.src} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-secondary-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                  <p className="text-slate-500 text-sm mb-4">{member.creds}</p>
                  <p className="text-secondary-600 text-sm mb-6">{member.bio}</p>
                  
                  <div className="bg-primary-50 p-4 rounded-lg mb-6">
                    <p className="text-xs font-bold text-primary-700 uppercase tracking-wide">Fun Fact</p>
                    <p className="text-sm text-secondary-700 italic">&ldquo;{member.funFact}&rdquo;</p>
                  </div>

                  <button className="flex items-center gap-2 text-sm font-semibold text-secondary-900 hover:text-primary-600 transition-colors">
                    <Mail className="w-4 h-4" />
                    Contact {member.name.split(' ')[1]}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}