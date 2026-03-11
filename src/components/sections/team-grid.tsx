import { images } from "@/config/images";

export default function TeamGrid() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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
    </section>
  );
}