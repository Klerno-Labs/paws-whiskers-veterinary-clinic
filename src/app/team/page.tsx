import { Metadata } from "next";
import Image from "next/image";
import HeroCentered from "@/components/sections/hero-centered";
import CTASection from "@/components/sections/cta-section";
import { Instagram } from "lucide-react";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet our experienced veterinarians and support staff dedicated to your pet's health.",
};

const doctors = [
  {
    name: "Dr. Emily Sato",
    role: "Lead Veterinarian",
    credentials: "DVM, Fear Free Certified",
    bio: "Dr. Sato has been with Paws & Whiskers for 11 years. She specializes in internal medicine and has a soft spot for Golden Retrievers.",
    funFact: "Dr. Sato has 3 Golden Retrievers of her own named Max, Bella, and Charlie.",
    image: images["team-1"],
  },
  {
    name: "Dr. James Okafor",
    role: "Associate Veterinarian",
    credentials: "DVM, Exotic Animal Specialist",
    bio: "Dr. Okafor joined us 5 years ago. He is passionate about providing top-tier care for all creatures, from dogs and cats to reptiles and birds.",
    funFact: "He owns a python named Monty and a bearded dragon called Spike.",
    image: { ...images["team-1"], src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=1000&fit=crop&q=80", alt: "Dr James Okafor" },
  },
];

const staff = [
  {
    name: "Sarah Liu",
    role: "Veterinary Technician",
    credentials: "CVT, 7 years experience",
    bio: "Sarah is our head technician and a certified cat behavior specialist. She ensures every patient feels calm and safe.",
    image: { ...images["team-1"], src: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&h=1000&fit=crop&q=80", alt: "Sarah Liu" },
  },
  {
    name: "Mike Ross",
    role: "Veterinary Assistant",
    credentials: "3 years experience",
    bio: "Mike assists in surgery and handles most of our laboratory work. He is known for his gentle handling of nervous dogs.",
    image: { ...images["team-1"], src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=1000&fit=crop&q=80", alt: "Mike Ross" },
  },
  {
    name: "Jessica Davis",
    role: "Client Services",
    credentials: "Front Desk Manager",
    bio: "Jessica is the friendly face you see when you walk in. She manages appointments and ensures smooth operations.",
    image: { ...images["team-1"], src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&q=80", alt: "Jessica Davis" },
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Full Width Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={images["about"].src}
          alt="Team of veterinarians"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary-900/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Your Neighbors</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              We are a team of dedicated animal lovers committed to providing the best care for your pets.
            </p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Doctors</h2>
            <div className="w-20 h-1 bg-primary-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {doctors.map((doctor, idx) => (
              <div key={idx} className="group bg-slate-50 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start hover:shadow-lg transition-shadow">
                <div className="relative w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden">
                  <Image
                    src={doctor.image.src}
                    alt={doctor.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900">{doctor.name}</h3>
                  <p className="text-primary-600 font-semibold mb-1">{doctor.role}</p>
                  <p className="text-sm text-slate-500 mb-4">{doctor.credentials}</p>
                  <p className="text-slate-600 leading-relaxed mb-4">{doctor.bio}</p>
                  <div className="bg-white p-4 rounded-xl border border-slate-100">
                    <p className="text-sm font-semibold text-slate-900 mb-1">Fun Fact:</p>
                    <p className="text-sm text-slate-600 italic">{doctor.funFact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Support Staff</h2>
            <div className="w-20 h-1 bg-primary-600"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-1">{member.role}</p>
                <p className="text-sm text-slate-500 mb-4">{member.credentials}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Join Our Pack?"
        subtitle="We are always looking for passionate animal lovers to join our team."
        buttonText="View Careers"
      />
    </>
  );
}