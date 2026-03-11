import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta-section";
import Image from "next/image";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, PawPrint } from "lucide-react";

export const metadata = {
  title: "Our Team",
  description: "Meet our experienced veterinarians and support staff.",
};

const team = [
  {
    name: "Dr. Emily Sato",
    role: "Lead Veterinarian",
    credentials: "DVM, Fear Free Certified",
    bio: "Dr. Sato has over 11 years of experience in small animal medicine. She is passionate about pain management and making vet visits less stressful for pets.",
    fact: "Has 3 Golden Retrievers named Mango, Papaya, and Coconut.",
    image: "team-1"
  },
  {
    name: "Dr. James Okafor",
    role: "Associate Veterinarian",
    credentials: "DVM",
    bio: "Dr. Okafor specializes in exotic animal care and soft tissue surgery. He loves solving complex medical cases and educating clients about preventative care.",
    fact: "Is an avid bird watcher and owns a parrot named Kiwi.",
    image: "team-2"
  },
  {
    name: "Sarah Liu",
    role: "Veterinary Technician",
    credentials: "CVT",
    bio: "Sarah leads our nursing team with 7 years of experience. She has a special interest in feline behavior and helps run our Kitten Kindergarten classes.",
    fact: "Competitive cat show judge on weekends.",
    image: "team-3"
  }
];

export default function TeamPage() {
  return (
    <>
      <Hero 
        variant="center"
        title="Meet Your Neighbors"
        subtitle="Our team of highly trained professionals is dedicated to providing the best possible care for your furry family members."
        imageKey="about"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative rounded-[24px] overflow-hidden aspect-[3/4] mb-6 shadow-card">
                  <Image 
                    src={images[member.image as keyof typeof images].src} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors text-white">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors text-white">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 font-heading">{member.name}</h3>
                <p className="text-[#16a34a] font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-slate-500 font-medium mb-4">{member.credentials}</p>
                
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-[#16a34a] pl-4">
                    {member.bio}
                  </p>
                  <div className="flex items-start gap-3 bg-[#f0fdf4] p-4 rounded-xl">
                    <PawPrint className="w-5 h-5 text-[#16a34a] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 italic">
                      <span className="font-semibold not-italic">Fun Fact:</span> {member.fact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Join Our Pack"
        subtitle="We are always looking for compassionate, talented individuals to join our team."
        buttonText="View Careers"
        buttonLink="/contact"
      />
    </>
  );
}