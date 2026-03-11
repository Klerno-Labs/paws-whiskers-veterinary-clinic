"use client";
import { images } from "@/config/images";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeroSplit() {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between py-20">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-slate-900">Compassionate Care for Your Best Friends</h1>
        <p className="mt-4 text-lg text-slate-600">We provide a full range of veterinary services to keep your pets healthy and happy.</p>
        <div className="mt-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
            Book Appointment
          </button>
          <button className="ml-4 border border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition">
            Virtual Tour
          </button>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 h-96">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </section>
  );
}