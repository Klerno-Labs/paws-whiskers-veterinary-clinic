import { images } from "@/config/images";

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <img src={images["team-1"].src} alt={images["team-1"].alt} className="rounded-full h-32 w-32" />
        <h3 className="text-xl font-semibold mt-4">Dr. Emily Sato</h3>
        <p>Lead Veterinarian | DVM, Fear Free Certified, 11 years</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <img src={images["team-1"].src} alt={images["team-1"].alt} className="rounded-full h-32 w-32" />
        <h3 className="text-xl font-semibold mt-4">Dr. James Okafor</h3>
        <p>Associate Vet | DVM, exotic animal specialist</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <img src={images["team-1"].src} alt={images["team-1"].alt} className="rounded-full h-32 w-32" />
        <h3 className="text-xl font-semibold mt-4">Sarah Liu</h3>
        <p>Veterinary Technician | CVT, 7 years, cat behavior specialist</p>
      </div>
    </div>
  );
}