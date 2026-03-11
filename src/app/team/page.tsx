import { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet our experienced veterinarians and support staff.",
};

const team = [
  {
    name: "Dr. Emily Sato",
    role: "Lead Veterinarian",
    creds: "DVM, Fear Free Certified",
    bio: "Dr. Sato has 11 years of experience in small animal medicine. She specializes in internal medicine and building trust with nervous pets.",
    fact: "Has 3 Golden Retrievers who love to hike.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Dr. James Okafor",
    role: "Associate Veterinarian",
    creds: "DVM",
    bio: "Dr. Okafor is passionate about exotic animal care and soft tissue surgery. He brings a calm, steady presence to the clinic.",
    fact: "Is a certified reptile expert.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "Sarah Liu",
    role: "Veterinary Technician",
    creds: "CVT",
    bio: "Sarah is our head technician with 7 years of experience. She is a cat behavior specialist and helps manage our boarding facility.",
    fact: "Rescues and fosters neonatal kittens.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=600&fit=crop&q=80",
  },
];

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={images["gallery-2"].src}
            alt="Team working"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Meet Your Neighbors
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light">
            A dedicated team of animal lovers ready to serve you.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <p className="text-white text-sm mb-2">{member.bio}</p>
                      <p className="text-accent font-semibold text-sm italic">"{member.fact}"</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="text-primary text-sm font-bold mb-1">{member.role}</div>
                    <h3 className="text-2xl font-bold text-secondary mb-1">{member.name}</h3>
                    <div className="text-slate-500 text-sm">{member.creds}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}