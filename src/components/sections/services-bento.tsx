import { images } from "@/config/images";

export function ServicesBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <img src={images["service-1"].src} alt={images["service-1"].alt} className="rounded-lg" />
        <h3 className="text-xl font-semibold mt-4">Wellness Exam</h3>
        <p>Comprehensive nose-to-tail checkup</p>
        <p className="font-bold">$65</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <img src={images["service-2"].src} alt={images["service-2"].alt} className="rounded-lg" />
        <h3 className="text-xl font-semibold mt-4">Vaccinations</h3>
        <p>Core and lifestyle vaccines</p>
        <p className="font-bold">From $25</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <img src={images["service-3"].src} alt={images["service-3"].alt} className="rounded-lg" />
        <h3 className="text-xl font-semibold mt-4">Dental Cleaning</h3>
        <p>Full cleaning under anesthesia</p>
        <p className="font-bold">$280</p>
      </div>
    </div>
  );
}