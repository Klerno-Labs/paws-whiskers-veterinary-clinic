import { images } from "@/config/images";

export default function ServicesBento() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Wellness Exam</h3>
          <p>Comprehensive nose-to-tail checkup</p>
          <p className="font-bold">$65</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Vaccinations</h3>
          <p>Core and lifestyle vaccines</p>
          <p className="font-bold">From $25</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Dental Cleaning</h3>
          <p>Full cleaning under anesthesia</p>
          <p className="font-bold">$280</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Spay/Neuter</h3>
          <p>Safe, routine surgery</p>
          <p className="font-bold">From $250</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Emergency Care</h3>
          <p>Available during business hours</p>
          <p className="font-bold">Varies</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Pet Boarding</h3>
          <p>Climate-controlled, supervised stays</p>
          <p className="font-bold">$45/night</p>
        </div>
      </div>
    </section>
  );
}