import { images } from "@/config/images";

export default function TeamGrid() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images.team-1.src} alt="Dr. Emily Sato" className="rounded-full h-32 w-32 mb-4" />
          <h3 className="text-xl font-semibold">Dr. Emily Sato</h3>
          <p>Lead Veterinarian | DVM, Fear Free Certified, 11 years</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images.team-1.src} alt="Dr. James Okafor" className="rounded-full h-32 w-32 mb-4" />
          <h3 className="text-xl font-semibold">Dr. James Okafor</h3>
          <p>Associate Vet | DVM, exotic animal specialist</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images.team-1.src} alt="Sarah Liu" className="rounded-full h-32 w-32 mb-4" />
          <h3 className="text-xl font-semibold">Sarah Liu</h3>
          <p>Veterinary Technician | CVT, 7 years, cat behavior specialist</p>
        </div>
      </div>
    </section>
  );
}