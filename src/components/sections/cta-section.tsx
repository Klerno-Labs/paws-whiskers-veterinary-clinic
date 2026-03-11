import { cn } from "@/lib/utils";

export default function CTASection() {
  return (
    <section className={cn("bg-green-600 text-white py-20 text-center")}>
      <h2 className="text-3xl font-bold">Ready to visit us?</h2>
      <p className="mt-4">Book an appointment today for compassionate care.</p>
      <button className="mt-6 bg-white text-green-600 px-6 py-2 rounded-full hover:bg-gray-100 transition">
        Book Appointment
      </button>
    </section>
  );
}