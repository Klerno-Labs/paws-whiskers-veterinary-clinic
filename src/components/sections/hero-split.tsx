import { images } from "@/config/images";
import { cn } from "@/lib/utils";

export function HeroSplit() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between py-32 bg-white">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold">{images.hero.alt}</h1>
        <p className="mt-4 text-lg">Compassionate Care for Your Best Friends</p>
        <div className="mt-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">Book Appointment</button>
          <button className="ml-4 border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50">Virtual Tour</button>
        </div>
      </div>
      <div className="relative mt-8 lg:mt-0 lg:w-1/2">
        <img src={images.hero.src} alt={images.hero.alt} className="rounded-xl shadow-lg" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/50 rounded-full blur-[80px] -z-10"></div>
      </div>
    </section>
  );
}