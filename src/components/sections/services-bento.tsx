import { images } from "@/config/images";

export default function ServicesBento() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images.service-1.src} alt={images.service-1.alt} className="w-full h-32 object-cover rounded-md" />
          <h3 className="mt-4 text-lg font-semibold">Wellness Exam</h3>
          <p className="text-gray-600">Comprehensive nose-to-tail checkup</p>
          <p className="font-bold">$65</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images.service-2.src} alt={images.service-2.alt} className="w-full h-32 object-cover rounded-md" />
          <h3 className="mt-4 text-lg font-semibold">Vaccinations</h3>
          <p className="text-gray-600">Core and lifestyle vaccines</p>
          <p className="font-bold">From $25</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images.service-3.src} alt={images.service-3.alt} className="w-full h-32 object-cover rounded-md" />
          <h3 className="mt-4 text-lg font-semibold">Dental Cleaning</h3>
          <p className="text-gray-600">Full cleaning under anesthesia</p>
          <p className="font-bold">$280</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={images.service-1.src} alt={images.service-1.alt} className="w-full h-32 object-cover rounded-md" />
          <h3 className="mt-4 text-lg font-semibold">Spay/Neuter</h3>
          <p className="text-gray-600">Safe, routine surgery</p>
          <p className="font-bold">From $250</p>
        </div>
      </div>
    </section>
  );
}