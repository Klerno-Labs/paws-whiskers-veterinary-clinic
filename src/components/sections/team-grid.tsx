import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { images } from "@/config/images";

const team = [
  {
    name: "Dr. Emily Sato",
    role: "Lead Veterinarian",
    credentials: "DVM, Fear Free Certified",
    bio: "11 years of experience with a special interest in internal medicine.",
    image: images["team-1"],
  },
  {
    name: "Dr. James Okafor",
    role: "Associate Veterinarian",
    credentials: "DVM, Exotic Specialist",
    bio: "Passionate about providing care for all creatures great and small.",
    // Using a different image for variety
    image: { ...images["team-1"], src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=1000&fit=crop&q=80", alt: "Dr James Okafor" },
  },
  {
    name: "Sarah Liu",
    role: "Veterinary Technician",
    credentials: "CVT, Cat Behavior Specialist",
    bio: "Expert in feline handling and making vet visits stress-free.",
    // Using a different image for variety
    image: { ...images["team-1"], src: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&h=1000&fit=crop&q=80", alt: "Sarah Liu" },
  },
];

export default function TeamGrid() {
  return (
    <section className="py-24 bg-[#f0fdf4]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Compassionate experts dedicated to the health and happiness of your pets.
            </p>
          </div>
          <Link 
            href="/team" 
            className="hidden md:inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 mt-4 md:mt-0"
          >
            View Full Team <span className="ml-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4 shadow-md">
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-1">{member.role}</p>
              <p className="text-sm text-slate-500">{member.credentials}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/team" 
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
          >
            View Full Team <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}