import { Metadata } from "next";
import { images } from "@/config/images";

export const metadata: Metadata = {
  title: "Our Team | Paws & Whiskers Veterinary Clinic",
  description: "Meet our dedicated veterinary team.",
  openGraph: {
    title: "Our Team | Paws & Whiskers Veterinary Clinic",
    description: "Meet our dedicated veterinary team.",
    url: "https://example.com/team",
    images: [images.hero.src],
  },
};

export default function Team() {
  return (
    <main className="pt-20">
      <h1 className="text-4xl font-bold text-center">Meet Our Team</h1>
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images.team-1.src} alt={images.team-1.alt} className="w-full h-32 object-cover rounded-full" />
          <h3 className="mt-4 text-lg font-semibold">Dr. Emily Sato</h3>
          <p className="text-gray-600">Lead Veterinarian | DVM, Fear Free Certified, 11 years</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images.team-1.src} alt={images.team-1.alt} className="w-full h-32 object-cover rounded-full" />
          <h3 className="mt-4 text-lg font-semibold">Dr. James Okafor</h3>
          <p className="text-gray-600">Associate Vet | DVM, exotic animal specialist</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images.team-1.src} alt={images.team-1.alt} className="w-full h-32 object-cover rounded-full" />
          <h3 className="mt-4 text-lg font-semibold">Sarah Liu</h3>
          <p className="text-gray-600">Veterinary Technician | CVT, 7 years, cat behavior specialist</p>
        </div>
      </div>
    </main>
  );
}